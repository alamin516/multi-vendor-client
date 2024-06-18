import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CancelIcon from "@mui/icons-material/Cancel";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Bell,
  LayoutDashboard,
  LogOut,
  Settings,
  UserCircle,
} from "lucide-react";
import Image from "next/image";
import ThemeToggle from "../ThemeToggle";

const notifications = (
  <>
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center">
        <Bell className="h-6 w-6" />
        <span class="sr-only">Notifications</span>
        <div class="absolute inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-red-700 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
          20
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-10 lg:mr-4">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex space-x-4 justify-between items-center">
          <Image
            width={200}
            height={200}
            src={"/images/alamin.png"}
            className="w-8 h-8 rounded-full"
          />
          <div className="flex flex-col space-y-1">
            <p>Lorem ipsum dolor sit amet...</p>
            <div className="flex items-center space-x-2 text-xs">
              <p className="px-2 py-1 bg-green-700 rounded-sm">order</p>
              <p>Jun 19 2024 - 3:38AM</p>
            </div>
          </div>
          <button className="w-6 h-6 bg-red-700 p-2 rounded-full flex items-center justify-center">x</button>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex space-x-4 justify-between items-center">
          <Image
            width={200}
            height={200}
            src={"/images/alamin.png"}
            className="w-8 h-8 rounded-full"
          />
          <div className="flex flex-col space-y-1">
            <p>Lorem ipsum dolor sit amet...</p>
            <div className="flex items-center space-x-2 text-xs">
              <p className="px-2 py-1 bg-green-700 rounded-sm">order</p>
              <p>Jun 19 2024 - 3:38AM</p>
            </div>
          </div>
          <button className="w-6 h-6 bg-red-700 p-2 rounded-full flex items-center justify-center">x</button>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex space-x-4 justify-between items-center">
          <Image
            width={200}
            height={200}
            src={"/images/alamin.png"}
            className="w-8 h-8 rounded-full"
          />
          <div className="flex flex-col space-y-1">
            <p>Lorem ipsum dolor sit amet...</p>
            <div className="flex items-center space-x-2 text-xs">
              <p className="px-2 py-1 bg-green-700 rounded-sm">order</p>
              <p>Jun 19 2024 - 3:38AM</p>
            </div>
          </div>
          <button className="w-6 h-6 bg-red-700 p-2 rounded-full flex items-center justify-center">x</button>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex space-x-4 justify-between items-center">
          <Image
            width={200}
            height={200}
            src={"/images/alamin.png"}
            className="w-8 h-8 rounded-full"
          />
          <div className="flex flex-col space-y-1">
            <p>Lorem ipsum dolor sit amet...</p>
            <div className="flex items-center space-x-2 text-xs">
              <p className="px-2 py-1 bg-red-700 rounded-sm">stock out</p>
              <p>Jun 19 2024 - 3:38AM</p>
            </div>
          </div>
          <button className="w-6 h-6 bg-red-700 p-2 rounded-full flex items-center justify-center">x</button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </>
);

const dropdown = (
  <>
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center">
        <UserCircle className="h-6 w-6 lg:h-8 lg:w-8" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-10 lg:mr-4">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex gap-1">
          <LayoutDashboard className="h-4 w-4" /> Dashboard
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-1">
          <Settings className="h-4 w-4" /> Edit Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-1">
          <LogOut className="h-4 w-4" /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </>
);

const AdminNavbar = ({ handleMenu, display, handleMinimize, minimize }) => {
  return (
    <nav className="dark:bg-gray-800 bg-blue-800 p-4 dark:text-white text-white flex justify-between items-center h-16 shadow-sm">
      <div
        className={`font-semibold flex ${
          minimize ? "gap-0" : "gap-4"
        } items-center transition duration-[400ms] ease-linear`}
      >
        <div
          className={`${
            minimize ? "overflow-hidden opacity-0 w-0" : "opacity-100 w-[10rem]"
          } text-xl font-semibold transition-all duration-[400ms] ease-linear`}
        >
          Dashboard
        </div>

        <span
          className={`cursor-pointer hidden lg:block bg-slate-600 rounded-lg ${
            minimize ? "px-4 rotate-180" : ""
          } p-2 transform transition-transform duration-[400ms] ease-linear`}
          onClick={handleMinimize}
        >
          <img src="/images/icons/menu-fold-line.svg" className="w-6 h-6" />
        </span>
      </div>

      <div className="lg:pr-5 flex space-x-3 lg:space-x-4 items-center">
        <ThemeToggle />
        <div className="cursor-pointer relative ">{notifications}</div>
        <div className="block lg:hidden">
          <div className="cursor-pointer p-2">{dropdown}</div>
        </div>
        <div className="block lg:hidden">
          <div className="cursor-pointer p-2" onClick={handleMenu}>
            {display ? <CancelIcon /> : <MenuIcon />}
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="cursor-pointer p-2">{dropdown}</div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
