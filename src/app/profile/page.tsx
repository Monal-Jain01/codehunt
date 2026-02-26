import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Navbar99 } from "@/components/layout/navbar-99";
import { ProfileContent } from "@/components/profile/ProfileContent";

export default async function ProfilePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  const userData = {
    fullName: profile?.full_name || user.email?.split('@')[0] || 'User',
    email: user.email || '',
  };

  return (
    <>
      <Navbar99 user={userData} />
      <ProfileContent profile={profile} userEmail={user.email || ''} />
    </>
  );
}
