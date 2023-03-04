import Home from "~/page/Home";
import About from "~/page/About"
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About }
]
const privateRoutes = [

]
export { publicRoutes, privateRoutes }