import logo from "../assets/logo.png"
import { RxDashboard } from "react-icons/rx"
import { BiSolidBarChartSquare } from "react-icons/bi"
import { CgLoadbarDoc } from "react-icons/cg"
import { PiCalendarCheckFill } from "react-icons/pi"
import { IoMdSettings } from "react-icons/io"
import { IoNotifications } from "react-icons/io5"
import { HiMiniTicket } from "react-icons/hi2"
import { useState } from "react"
import { FaRegBell } from "react-icons/fa"
import person from "../assets/person.png"
import { FiMenu } from "react-icons/fi"
import { RxCross2 } from "react-icons/rx"
import Main from "./Main"

const links = [
   { label: "Dashboard", icon: <RxDashboard /> },
   { label: "Upload", icon: <BiSolidBarChartSquare /> },
   { label: "Invoice", icon: <HiMiniTicket /> },
   { label: "Schedule", icon: <CgLoadbarDoc /> },
   { label: "Calendar", icon: <PiCalendarCheckFill /> },
   { label: "Notification", icon: <IoNotifications /> },
   { label: "Settings", icon: <IoMdSettings /> },
]
const Dashboard = () => {
   const [open, setOpen] = useState(false)
   return (
      <>
         <div className="relative flex flex-col-reverse md:flex-row">
            {/* above medium nav bar */}
            <div className="w-[300px] h-screen p-5 border-e hidden md:block">
               <div className="flex justify-center items-center gap-2 mb-10">
                  <img src={logo} alt="" className="h-[40px] rounded-full" />
                  <p className="text-2xl">Base</p>
               </div>
               <div className="flex flex-col gap-7 items-center">
                  {links.map((link) => (
                     <div
                        key={link.label}
                        className={`flex justify-start items-center gap-2 w-28 hover:text-indigo-500 ${
                           link.label === "Upload" ? "text-indigo-600" : ""
                        }`}
                     >
                        <span className="text-2xl">{link.icon}</span>
                        <p className="">{link.label}</p>
                     </div>
                  ))}
               </div>
               {/* above medium user */}
               <div className="absolute flex gap-5 top-5 right-5 ">
                  <FaRegBell className="text-2xl" />
                  <img
                     src={person}
                     alt=""
                     className="h-[25px] p-[1px] rounded-full border-2 border-black"
                  />
               </div>
            </div>
            <Main />
            <div className="sticky md:hidden top-0 left-0 h-[60px] flex justify-between items-center p-3 w-full bg-neutral-50">
               <div className="flex justify-center items-center gap-1">
                  <FiMenu
                     className="text-2xl mr-2"
                     onClick={() => setOpen(true)}
                  />
                  <img src={logo} alt="" className="h-[35px] rounded-full" />
                  <p className="text-2xl">Base</p>
               </div>
               <div className="flex gap-5">
                  <FaRegBell className="text-2xl" />
                  <img
                     src={person}
                     alt=""
                     className="h-[25px] p-[1px] rounded-full border-2 border-black"
                  />
               </div>
            </div>
            {open && (
               <div className="fixed top-0 bg-neutral-50 md:hidden h-full w-[300px] z-30 border-e py-3 px-5">
                  <div className="flex justify-between items-center mb-10">
                     <div className="flex justify-between items-center gap-1">
                        <img
                           src={logo}
                           alt=""
                           className="h-[35px] rounded-full"
                        />
                        <p className="text-2xl">Base</p>
                     </div>
                     <RxCross2
                        className="text-2xl mr-2"
                        onClick={() => setOpen(false)}
                     />
                  </div>
                  <div className="flex flex-col gap-7 items-start ps-5">
                     {links.map((link) => (
                        <div
                           key={link.label}
                           className={`flex justify-start items-center gap-2 w-28 hover:text-indigo-500 ${
                              link.label === "Upload" ? "text-indigo-600" : ""
                           }`}
                        >
                           <span className="text-2xl">{link.icon}</span>
                           <p className="">{link.label}</p>
                        </div>
                     ))}
                  </div>
               </div>
            )}
         </div>
      </>
      // <>
      //    <div className="relative w-full hidden md:flex flex-row">
      //       <div className="w-72 h-screen p-5 ">
      //          <div className="flex justify-center items-center gap-2 mb-10">
      //             <img src={logo} alt="" className="h-[40px] rounded-full" />
      //             <p className="text-2xl">Base</p>
      //          </div>
      //          <div className="flex flex-col gap-7 items-center">
      //             {links.map((link) => (
      //                <div
      //                   key={link.label}
      //                   className={`flex justify-start items-center gap-2 w-28 hover:text-indigo-500 ${
      //                      link.label === "Upload" ? "text-indigo-600" : ""
      //                   }`}
      //                >
      //                   <span className="text-2xl">{link.icon}</span>
      //                   <p className="">{link.label}</p>
      //                </div>
      //             ))}
      //          </div>
      //       </div>
      //       <Main />
      // <div className="absolute flex gap-5 top-5 right-5 ">
      //    <FaRegBell className="text-2xl" />
      //    <img
      //       src={person}
      //       alt=""
      //       className="h-[25px] p-[1px] rounded-full border-2 border-black"
      //    />
      // </div>
      //    </div>
      //    <div className="relative w-full md:hidden">
      // {open && (
      //    <div className="absolute md:hidden bg-neutral-50 h-screen w-[300px] z-30 border-e py-3 px-5">
      //       <div className="flex justify-between items-center mb-10">
      //          <div className="flex justify-between items-center gap-1">
      //             <img
      //                src={logo}
      //                alt=""
      //                className="h-[35px] rounded-full"
      //             />
      //             <p className="text-2xl">Base</p>
      //          </div>
      //          <RxCross2
      //             className="text-2xl mr-2"
      //             onClick={() => setOpen(false)}
      //          />
      //       </div>
      //       <div className="flex flex-col gap-7 items-start ps-5">
      //          {links.map((link) => (
      //             <div
      //                key={link.label}
      //                className={`flex justify-start items-center gap-2 w-28 hover:text-indigo-500 ${
      //                   link.label === "Upload" ? "text-indigo-600" : ""
      //                }`}
      //             >
      //                <span className="text-2xl">{link.icon}</span>
      //                <p className="">{link.label}</p>
      //             </div>
      //          ))}
      //       </div>
      //    </div>
      // )}

      // <div className="sticky top-0 left-0 h-[60px] flex justify-between items-center p-3 w-full">
      //    <div className="flex justify-center items-center gap-1">
      //       <FiMenu
      //          className="text-2xl mr-2"
      //          onClick={() => setOpen(true)}
      //       />
      //       <img src={logo} alt="" className="h-[35px] rounded-full" />
      //       <p className="text-2xl">Base</p>
      //    </div>
      //    <div className="flex gap-5">
      //       <FaRegBell className="text-2xl" />
      //       <img
      //          src={person}
      //          alt=""
      //          className="h-[25px] p-[1px] rounded-full border-2 border-black"
      //       />
      //    </div>
      //  </div>
      //       <Main />
      //    </div>
      // </>
   )
}

export default Dashboard
