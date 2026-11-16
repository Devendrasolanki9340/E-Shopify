


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

// import { Outlet } from "react-router";
import { AdminSidebar } from "../admin/common/sidebar";
import { UserButton } from "@clerk/react";

export function AdminLayout(){
     return (
    <div className="min-h-screen bg-secondary/45">
      <div className="flex min-h-screen">
        <AdminSidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border px-4 backdrop-blur lg:px-6">
            <div className="ml-auto flex items-center gap-2">
              <UserButton />
            </div>
          </header>

          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
   
}