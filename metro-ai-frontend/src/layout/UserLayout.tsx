import Navbar from "../components/layouts/Navbar";
import Sidebar from "../components/layouts/Sidebar";

import { Outlet } from "react-router-dom";

export default function UserLayout(){

return(

<div className="flex">

<Sidebar/>

<div className="flex-1">

<Navbar/>

<div className="p-8 bg-slate-100 min-h-screen">

<Outlet/>

</div>

</div>

</div>

);

}