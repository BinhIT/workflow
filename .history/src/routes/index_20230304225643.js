import Home from "~/page/Home";
import About from "~/page/About"
import Workflowapp from "~page/Workflowapp";
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About }
]
const privateRoutes = [

]
export { publicRoutes, privateRoutes }