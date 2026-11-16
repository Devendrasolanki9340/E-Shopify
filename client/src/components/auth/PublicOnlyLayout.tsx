import { useAuthStore } from "@/features/auth/store";
import { useAuth } from "@clerk/react";
import { Navigate, Outlet, useLocation } from "react-router";


export function PublicOnlyLayout (){
    const {isLoaded, isSignedIn} = useAuth()
    const {isBootstrapped, status} = useAuthStore()
    const location = useLocation()

    if(!isLoaded) return null

    if(isSignedIn && (!isBootstrapped || status === 'loading')){
        return null
    }
//     if (
//     isSignedIn &&
//     (location.pathname === "/sign-in" || location.pathname === "sign-up")
//   ) {
//     return <Navigate to={"/"} replace />;
//   }

if(isSignedIn){
    return <Navigate to={"profile"} replace/>
}

    // if(isSignedIn){
    //     const from = (location.state as {from?: unknown} | null)?.from
    //     const redirectTo = typeof from === "string" && from.startsWith("/") && !from.startsWith("//")
    //         ? from
    //         : "/profile"

    //     return <Navigate to={redirectTo} replace/>
    // }
    return <Outlet/>
}