import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";
import Link from "next/link";

async function Header() {
  return (
    <NavigationMenu className="h-16  overflow-hidden bg-amber-400 p-4 backdrop-blur-lg">
      <NavigationMenuList className="flex w-screen items-center justify-between gap-4 px-4 md:px-8">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior scroll>
            <NavigationMenuLink className="font-heading cursor-pointer bg-gradient-to-br bg-clip-text font-bold text-white">
              zenflow.rest
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Header;
