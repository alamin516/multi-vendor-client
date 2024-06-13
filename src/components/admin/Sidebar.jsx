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

const Sidebar = ({ display, minimize }) => {
  return (
    <aside
      className={`sidebar transform ${
        display ? "translate-x-0" : "-translate-x-full"
      } transition-all duration-[400ms] bg-slate-800 text-black ${
        minimize ? "w-[90px]" : "w-64"
      } lg:translate-x-0 lg:static absolute top-[60px] left-0 min-h-screen-minus-60px z-50`}
    >
      <nav className=" flex min-h-[calc(100vh-100px)] flex-col justify-between overflow-hidden">
          <div className="flex flex-col justify-between py-6 px-4 gap-2 self-stretch max-h-[calc(100vh-100px)] overflow-y-hidden hover:!overflow-auto scrollbar">
            <Link href="/" target="_blank">
              <li className="flex items-center group  w-full rounded cursor-pointer transition-all duration-[400ms] relative overflow-hidden py-2 px-4 bg-white hover:bg-white">
                <HomeIcon />
                <div
                  className={`${
                    minimize ? "opacity-0 w-full" : "opacity-100 w-full"
                  }  flex items-center transition-all duration-[400ms] ease-linear flex-nowrap justify-between`}
                >
                  <p className="capitalize whitespace-nowrap ml-[13px] opacity-100 transition-opacity duration-150 ease-linear">
                    Visit Site
                  </p>
                </div>
              </li>
            </Link>

            <Link href="/dashboard">
              <li className="flex items-center group  w-full rounded cursor-pointer transition-all duration-[400ms] relative overflow-hidden py-2 px-4 bg-white hover:bg-white">
                <DashboardIcon />
                <div
                  className={`${
                    minimize ? "opacity-0 w-full" : "opacity-100 w-full"
                  }  flex items-center transition-all duration-[400ms] ease-linear flex-nowrap justify-between`}
                >
                  <p className="capitalize whitespace-nowrap ml-[13px] opacity-100 transition-opacity duration-150 ease-linear">
                    Dashboard
                  </p>
                </div>
              </li>
            </Link>
            <Link href="/dashboard/products">
              <li className="flex items-center group  w-full rounded cursor-pointer transition-all duration-[400ms] relative overflow-hidden py-2 px-4 bg-white hover:bg-white">
                <StoreIcon />
                <div
                  className={`${
                    minimize ? "opacity-0 w-full" : "opacity-100 w-full"
                  }  flex items-center transition-all duration-[400ms] ease-linear flex-nowrap justify-between`}
                >
                  <p className="capitalize whitespace-nowrap ml-[13px] opacity-100 transition-opacity duration-150 ease-linear">
                    Products
                  </p>
                </div>
              </li>
            </Link>
            <Link href="/dashboard/orders">
              <li className="flex items-center group  w-full rounded cursor-pointer transition-all duration-[400ms] relative overflow-hidden py-2 px-4 bg-white hover:bg-white">
                <ShoppingCartIcon />
                <div
                  className={`${
                    minimize ? "opacity-0 w-full" : "opacity-100 w-full"
                  }  flex items-center transition-all duration-[400ms] ease-linear flex-nowrap justify-between`}
                >
                  <p className="capitalize whitespace-nowrap ml-[13px] opacity-100 transition-opacity duration-150 ease-linear">
                    Orders
                  </p>
                </div>
              </li>
            </Link>
            <Link href="/dashboard/stores">
              <li className="flex items-center group  w-full rounded cursor-pointer transition-all duration-[400ms] relative overflow-hidden py-2 px-4 bg-white hover:bg-white">
                <StoreIcon />
                <div
                  className={`${
                    minimize ? "opacity-0 w-full" : "opacity-100 w-full"
                  }  flex items-center transition-all duration-[400ms] ease-linear flex-nowrap justify-between`}
                >
                  <p className="capitalize whitespace-nowrap ml-[13px] opacity-100 transition-opacity duration-150 ease-linear">
                    Stores
                  </p>
                </div>
              </li>
            </Link>
            <Link href="/dashboard/posts">
              <li className="flex items-center group  w-full rounded cursor-pointer transition-all duration-[400ms] relative overflow-hidden py-2 px-4 bg-white hover:bg-white">
                <PostAddIcon />
                <div
                  className={`${
                    minimize ? "opacity-0 w-full" : "opacity-100 w-full"
                  }  flex items-center transition-all duration-[400ms] ease-linear flex-nowrap justify-between`}
                >
                  <p className="capitalize whitespace-nowrap ml-[13px] opacity-100 transition-opacity duration-150 ease-linear">
                    Posts
                  </p>
                </div>
              </li>
            </Link>
            <Link href="/dashboard/messages">
              <li className="flex items-center group  w-full rounded cursor-pointer transition-all duration-[400ms] relative overflow-hidden py-2 px-4 bg-white hover:bg-white">
                <MessageIcon />
                <div
                  className={`${
                    minimize ? "opacity-0 w-full" : "opacity-100 w-full"
                  }  flex items-center transition-all duration-[400ms] ease-linear flex-nowrap justify-between`}
                >
                  <p className="capitalize whitespace-nowrap ml-[13px] opacity-100 transition-opacity duration-150 ease-linear">
                    Messages
                  </p>
                </div>
              </li>
            </Link>
            <Link href="/dashboard/profile">
              <li className="flex items-center group  w-full rounded cursor-pointer transition-all duration-[400ms] relative overflow-hidden py-2 px-4 bg-white hover:bg-white">
                <AdminPanelSettingsIcon />
                <div
                  className={`${
                    minimize ? "opacity-0 w-full" : "opacity-100 w-full"
                  }  flex items-center transition-all duration-[400ms] ease-linear flex-nowrap justify-between`}
                >
                  <p className="capitalize whitespace-nowrap ml-[13px] opacity-100 transition-opacity duration-150 ease-linear">
                    Profile
                  </p>
                </div>
              </li>
            </Link>
            <Link href="/dashboard/users">
              <li className="flex items-center group  w-full rounded cursor-pointer transition-all duration-[400ms] relative overflow-hidden py-2 px-4 bg-white hover:bg-white">
                <GroupIcon />
                <div
                  className={`${
                    minimize ? "opacity-0 w-full" : "opacity-100 w-full"
                  }  flex items-center transition-all duration-[400ms] ease-linear flex-nowrap justify-between`}
                >
                  <p className="capitalize whitespace-nowrap ml-[13px] opacity-100 transition-opacity duration-150 ease-linear">
                    Users
                  </p>
                </div>
              </li>
            </Link>
            <Link href="/dashboard/settings">
              <li className="flex items-center group  w-full rounded cursor-pointer transition-all duration-[400ms] relative overflow-hidden py-2 px-4 bg-white hover:bg-white">
                <SettingsIcon />
                <div
                  className={`${
                    minimize ? "opacity-0 w-full" : "opacity-100 w-full"
                  }  flex items-center transition-all duration-[400ms] ease-linear flex-nowrap justify-between`}
                >
                  <p className="capitalize whitespace-nowrap ml-[13px] opacity-100 transition-opacity duration-150 ease-linear">
                    Settings
                  </p>
                </div>
              </li>
            </Link>
        </div>
        <div className="py-6 px-4">
          <Link
            href="#"
            className="flex items-center group  w-full rounded cursor-pointer transition-all duration-[400ms] relative overflow-hidden py-2 px-4 bg-white hover:bg-white"
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
