import Link from "next/link";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PostAddIcon from "@mui/icons-material/PostAdd";
import MessageIcon from "@mui/icons-material/Message";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const menuItems = [
  { href: '/', icon: <HomeIcon />, label: 'Visit Site', target: '_blank' },
  { href: '/dashboard', icon: <DashboardIcon />, label: 'Dashboard' },
  { href: '/dashboard/products', icon: <StoreIcon />, label: 'Products' },
  { href: '/dashboard/orders', icon: <ShoppingCartIcon />, label: 'Orders' },
  { href: '/dashboard/stores', icon: <StoreIcon />, label: 'Stores' },
  { href: '/dashboard/posts', icon: <PostAddIcon />, label: 'Posts' },
  { href: '/dashboard/messages', icon: <MessageIcon />, label: 'Messages' },
  { href: '/dashboard/profile', icon: <AdminPanelSettingsIcon />, label: 'Profile' },
  { href: '/dashboard/users', icon: <GroupIcon />, label: 'Users' },
  { href: '/dashboard/settings', icon: <SettingsIcon />, label: 'Settings' },
];


const Sidebar = ({ display, minimize }) => {
  return (
    <aside
      className={`sidebar transform ${
        display ? "translate-x-0" : "-translate-x-full"
      } transition-all duration-[400ms] dark:bg-slate-800 bg-blue-800 text-black ${
        minimize ? "w-[90px]" : "w-64"
      } lg:translate-x-0 lg:static absolute top-[60px] left-0 min-h-screen-minus-60px z-50`}
    >
      <nav className=" flex min-h-[calc(100vh-100px)] flex-col justify-between overflow-hidden">
          <div className="flex flex-col justify-between py-6 px-4 gap-2 self-stretch max-h-[calc(100vh-100px)] overflow-y-hidden hover:!overflow-auto scrollbar">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href} target={item.target || "_self"}>
              <li className="flex items-center group  w-full rounded cursor-pointer transition-all duration-[400ms] relative overflow-hidden py-2 px-4 bg-white hover:bg-white dark:bg-slate-500 dark:text-slate-200">
                {item.icon}
                <div
                  className={`${
                    minimize ? "opacity-0 w-full" : "opacity-100 w-full"
                  }  flex items-center transition-all duration-[400ms] ease-linear flex-nowrap justify-between`}
                >
                  <p className="capitalize whitespace-nowrap ml-[13px] opacity-100 transition-opacity duration-150 ease-linear">
                    {item.label}
                  </p>
                </div>
              </li>
            </Link>
          ))}
        </div>
        <div className="py-6 px-4">
          <Link
            href="#"
            className="flex items-center group  w-full rounded cursor-pointer transition-all duration-[400ms] relative overflow-hidden py-2 px-4 bg-white hover:bg-white dark:bg-slate-500 dark:text-slate-200"
          >
            <LogoutIcon />
            <div
              className={`${
                minimize ? "opacity-0 w-full" : "opacity-100 w-full"
              } flex items-center transition-all duration-[400ms] ease-linear flex-nowrap justify-between`}
            >
              <p className="capitalize whitespace-nowrap ml-[13px] opacity-100 transition-opacity duration-150 ease-linear">
                Logout
              </p>
            </div>
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
