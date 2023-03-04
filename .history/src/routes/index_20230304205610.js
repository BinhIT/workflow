import Home from "./page/Home";
import About from "./page/About";
const publicRoutes = [
    { path: '/', comment: Home },
    { path: '/about', comment: About }
]
const privateRoutes = [

]
export { publicRoutes, privateRoutes }