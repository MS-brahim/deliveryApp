import AboutUs from "./views/about-us/AboutUs";
import Login from "./views/auth/Login";
import Contact from "./views/contact/Contact";
import Home from "./views/home/home";
import Pricing from "./views/pricing/Pricing";
import Service from "./views/service/Service";

var routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/about-us",
        name: "About us",
        component: AboutUs,
    },
    {
        path: "/contact-us",
        name: "Contact us",
        component: Contact,
    },
    {
        path: "/service",
        name: "Service",
        component: Service,
    },
    {
        path: "/pricing",
        name: "Pricing",
        component: Pricing,
    },
];
export default routes;