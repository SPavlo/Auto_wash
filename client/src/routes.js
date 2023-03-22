import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Worker from "./pages/Worker";

export const authRoutes = [
    {
        path:'/admin',
        Component:<Admin/>
    },
    {
        path:'/worker',
        Component:<Worker/>
    }

]

export const publicRoutes = [
    {
        path:'/auth',
        Component:<Auth/>
    }
]
