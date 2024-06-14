'use client'
import AdminNavbar from "@/components/admin/AdminNavbar";
import Sidebar from "@/components/admin/Sidebar";
import useMediaQuery from "@/utilities/useMediaQuery";
import { useEffect, useState } from "react";


export default function Layout({children}) {
  const isBetweenMdAndLg = useMediaQuery('(min-width: 1024px) and (max-width: 1300px)');
  const [display, setDisplay] = useState(false)
  const [minimize, setMinimize] = useState(false)

  const handleMenu = () =>{
    setDisplay(!display)
  }

  const handleMinimizeSidebar = () =>[
    setMinimize(!minimize)
  ]

    
  useEffect(() => {
    if (isBetweenMdAndLg) {
      setMinimize(true);
    }else {
      setMinimize(false);
    }
  }, [isBetweenMdAndLg]);

  return (
    <div className="flex flex-col h-screen bg-slate-800 ">
      <AdminNavbar 
      handleMenu={handleMenu} 
      display={display}
      handleMinimize={handleMinimizeSidebar}
      minimize={minimize}
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
        display={display}
        minimize={minimize}
        />
        <main className="flex-1 sm:rounded-tl-lg lg:rounded-tl-lg dash-bg bg-slate-700 text-white p-5">
          {children}
        </main>
      </div>
    </div>
  )
}
