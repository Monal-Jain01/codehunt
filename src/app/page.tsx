import { createClient } from "@/lib/supabase/server";
import { Navbar99 } from "@/components/layout/navbar-99";
import { Landing99 } from "@/components/landing/landing-99";

export default async function HomePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  let userData = null;
  if (user) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('full_name')
      .eq('id', user.id)
      .single();
    
    userData = {
      fullName: profile?.full_name || user.email?.split('@')[0] || 'User',
      email: user.email || '',
    };
  }

  return (
    <>
      <Navbar99 user={userData} />
      <Landing99 />
    </>
  );
}
