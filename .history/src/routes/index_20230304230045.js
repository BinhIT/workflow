import Home from "~/page/Home";
import About from "~/page/About"
import Dashboard from "~/page/Dashboard";
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/dashboard', component: Dashboard, layout: dashboard },
]
const privateRoutes = [

]
export { publicRoutes, privateRoutes, Dashboard }