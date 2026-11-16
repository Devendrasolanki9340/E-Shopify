import { useAuthStore } from "@/features/auth/store"
import type { UserRole } from "@/lib/types"
import {Navigate, Outlet } from "react-router"


type RoleGaurdLayoutProps = {
    allow : UserRole[]
}


export function RoleGuardLayout ({allow}: RoleGaurdLayoutProps){
    const {isBootstrapped, status, user} = useAuthStore()

    if(!isBootstrapped || status === 'loading') return null

    // if(status === 'error'){
    //     return <p role="alert">{error ?? "Could not load your account."}</p>
    // }

     if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  if (!allow.includes(user.role)) {
    return <Navigate to="/" replace />;
  }
    return <Outlet/>
}