import Home from "./screens/Home";
// import About from "./Component/About";
// import Products from "./Component/Product";
// import Reservation from "./Component/Reservation";

// other
import { FC } from "react";

// interface
interface Route {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: FC<{}>;
}

export const routes: Array<Route> = [
  {
    key: "home-route",
    title: "Home",
    path: "/",
    enabled: true,
    component: Home,
  },
  //   {
  //     key: "about-route",
  //     title: "About",
  //     path: "/about",
  //     enabled: true,
  //     component: About,
  //   },
  //   {
  //     key: "products-route",
  //     title: "Products",
  //     path: "/products",
  //     enabled: true,
  //     component: Products,
  //   },
  //   {
  //     key: "products-route",
  //     title: "Reservation",
  //     path: "/reservation",
  //     enabled: true,
  //     component: Reservation,
  //   },
];
