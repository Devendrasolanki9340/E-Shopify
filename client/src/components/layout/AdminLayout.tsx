


// import { LayoutDashboard, Package, TicketPercent, ShoppingCart, Settings } from "lucide-react";
// import { NavLink, Outlet } from "react-router";

import { Outlet } from "react-router";


// const adminLinks = [
  // { label: "Dashboard", to: "/admin", icon: LayoutDashboard, end: true },
  // { label: "Products", to: "/admin/products", icon: Package },
  // { label: "Coupons", to: "/admin/coupons", icon: TicketPercent },
  // { label: "Orders", to: "/admin/orders", icon: ShoppingCart },
  // { label: "Settings", to: "/admin/settings", icon: Settings },
// ];

export function AdminLayout(){
  return <Outlet/>
  // return (
  //   <div>
  //     <h1>Admin layout</h1>
  //     <h1>Admin page </h1>
  //   </div>
  // );
}