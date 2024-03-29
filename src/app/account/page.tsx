import { redirect } from "next/navigation";
import { LogoutButton } from "~/components/auth/logout";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { getServerAuthSession } from "~/server/auth";
import { CheckInButton } from "./CheckInButton";
import { increaseCheckinCount } from "../action";

async function AccountInfo() {
  const auth = await getServerAuthSession();

  if (!auth) {
    redirect("/");
  }

  return (
    <div className="flex px-6 pt-8">
      <div className="flex-1">
        <h1 className="text-2xl font-bold">Account</h1>
        {auth.user && (
          <div>
            <Avatar className="my-4 h-24 w-24">
              <AvatarImage src={auth.user?.image ?? ""} />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            <p className="text-black-500">{auth.user.email}</p>

            <p className="text-black-500">{`🔥🔥🔥 Checkin for ${auth.user.checkinCount} in a row!`}</p>
          </div>
        )}
        <div className="flex gap-2">
          <form action={increaseCheckinCount}>
            <CheckInButton />
          </form>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}

export default AccountInfo;
