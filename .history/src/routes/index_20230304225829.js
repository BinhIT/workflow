import Home from "~/page/Home";
import About from "~/page/About"
import Dashboard from "page/Dashboard/~";
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About }
]
const privateRoutes = [

]
export { publicRoutes, privateRoutes, Dashboard }