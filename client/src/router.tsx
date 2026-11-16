import { createBrowserRouter } from "react-router";
import { CustomerLayout } from "./components/layout/CustomerLayout";
import StoreHome from "./pages/customer/Home";
import { PublicOnlyLayout } from "./components/auth/PublicOnlyLayout";
import { SignInPage } from "./pages/auth/Sing-in";
import { SignUpPage } from "./pages/auth/Sign-up";
import { ProtectedLayout } from "./components/auth/ProtectedLayout";
import { CustomerProfile } from "./pages/customer/Profile";




export const router = createBrowserRouter([
    {
        path : "/" ,
        element : <CustomerLayout/>,
        children : [
            {
                index : true,
                element : <StoreHome/>,
            },{
                element : <PublicOnlyLayout/>,
                children :[
                    {
                        path : "/sign-in",
                        element : <SignInPage/>,
                    },
                    {
                        path : "/sign-up",
                        element : <SignUpPage/>,
                    },
                ]
            },{
                element : <ProtectedLayout/>,
                children : [
                    {
                        path : "profile",
                         element : <CustomerProfile/>,
                    }
                ]
            }
        ]
    }

    
])









