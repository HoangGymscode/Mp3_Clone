import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarLeft, SidebarRight } from "../../components";

 

<link href="/dist/main.css" rel="stylesheet"></link>

const Public = () => {
  return (
    <div className="w-full flex flex-row">
      <div className="w-[240px] border border-blue-500">
        <SidebarLeft/>
      </div>
      <div>
      <Outlet/>
      </div>
      <div className="w-[329px] border border-blue-500">
        <SidebarRight/>
      </div>
    </div>
  );
};
export default Public;
