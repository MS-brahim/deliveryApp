import Login from "./views/auth/Login";
import Home from "./views/home/home";

var routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/",
        name: "login",
        component: Login,
    },
];
export default routes;