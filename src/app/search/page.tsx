import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Navbar99 } from "@/components/layout/navbar-99";
import { SearchContent99 } from "@/components/search/search-content-99";

export default async function SearchPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <>
      <Navbar99 />
      <SearchContent99 />
    </>
  );
}
