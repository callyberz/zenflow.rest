import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";
import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { UserIcon } from "lucide-react";
import { LoginButton } from "../auth/login";

async function Header() {
  const auth = await getServerAuthSession();

  return (
    <NavigationMenu className="h-16  overflow-hidden bg-amber-400 p-4 backdrop-blur-lg">
      <NavigationMenuList className="flex w-screen items-center gap-4 px-4 md:px-8">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior scroll>
            <NavigationMenuLink className="font-heading cursor-pointer bg-gradient-to-br bg-clip-text font-bold">
              zenflow.rest
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          {auth ? (
            <Link href="/account" legacyBehavior scroll>
              <NavigationMenuLink className="font-heading cursor-pointer bg-gradient-to-br bg-clip-text font-bold">
                <UserIcon />
              </NavigationMenuLink>
            </Link>
          ) : (
            <LoginButton />
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Header;
