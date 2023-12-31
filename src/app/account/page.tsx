import { redirect } from "next/navigation";
import { LogoutButton } from "~/components/auth/logout";
import { getServerAuthSession } from "~/server/auth";

async function AccountInfo() {
  const auth = await getServerAuthSession();

  if (!auth) {
    redirect("/");
  }

  return (
    <div className="flex px-6 pt-8">
      <LogoutButton />
    </div>
  );
}

export default AccountInfo;
