import { type EmailOtpType } from "@supabase/supabase-js";
import { type NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/";
  const code = searchParams.get("code");

  const origin = request.nextUrl.origin;
  const supabase = await createClient();

  // 1. Handle PKCE Flow (OAuth - Google)
  if (code) {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    
    if (!error && data.user) {
      // Check if profile exists, create if not
      const { data: profile } = await supabase
        .from('profiles')
        .select('id')
        .eq('id', data.user.id)
        .single();

      if (!profile) {
        // Create profile for OAuth user
        await supabase.from('profiles').insert({
          id: data.user.id,
          full_name: data.user.user_metadata?.full_name || data.user.email?.split('@')[0] || '',
          onboarding_completed: false,
          onboarding_step: 0,
        });
        
        // Redirect to onboarding
        return NextResponse.redirect(new URL('/onboarding', origin));
      }

      // Check onboarding status
      const { data: profileData } = await supabase
        .from('profiles')
        .select('onboarding_completed')
        .eq('id', data.user.id)
        .single();

      if (profileData && !profileData.onboarding_completed) {
        return NextResponse.redirect(new URL('/onboarding', origin));
      }

      return NextResponse.redirect(new URL('/dashboard', origin));
    } 
    
    console.error("Auth Exchange Error:", error?.message); 
    const errorUrl = new URL("/auth/error", origin);
    errorUrl.searchParams.set("error", error?.message || "Authentication failed");
    return NextResponse.redirect(errorUrl);
  }

  // 2. Handle Magic Link Flow
  if (token_hash && type) {
    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });
    if (!error) {
      const redirectTo = new URL(next, origin);
      return NextResponse.redirect(redirectTo);
    }
    const errorUrl = new URL("/auth/error", origin);
    errorUrl.searchParams.set("error", error.message);
    return NextResponse.redirect(errorUrl);
  }

  // 3. No code or token
  const errorUrl = new URL("/auth/error", origin);
  errorUrl.searchParams.set("error", "No code or token detected");
  return NextResponse.redirect(errorUrl);
}