/* eslint-disable react/prop-types */
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-full p-4 shadow-sm sticky top-0 z-50 bg-white">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mr-4">
              Marble Admin
            </h2>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/" className={navigationMenuTriggerStyle()}>
              Posts
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/create" className={navigationMenuTriggerStyle()}>
              Create
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/password" className={navigationMenuTriggerStyle()}>
              Password
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/logout" className={navigationMenuTriggerStyle()}>
              Log out
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Header;
