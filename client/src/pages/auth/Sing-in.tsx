
import { SignIn } from "@clerk/react";
import { useLocation } from "react-router";


export function SignInPage(){
    //  <div className="flex min-h-[70vh] items-center justify-center">
    //   <SignIn />
    // </div>


    const location = useLocation()
    const from = (location.state as {from?: unknown} | null)?.from
    const redirectUrl = typeof from === "string" && from.startsWith("/") && !from.startsWith("//")
        ? from
        : "/profile"

    return <div className="flex min-h-[70vh] items-center justify-center">
        <SignIn forceRedirectUrl={redirectUrl}/>
    </div>
}