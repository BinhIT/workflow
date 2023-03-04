import Home from "~/page/Home";
import About from "~/page/About"
import Dashboard from "~/page/Dashboard";
//Layout
import { Applayout } from "~/components/Layout";
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/dashboard', component: Dashboard, layout: Applayout },
]
const privateRoutes = [

]
export { publicRoutes, privateRoutes, Dashboard }