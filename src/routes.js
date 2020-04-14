import Home from "./pages/home/Home";
import About from "./pages/home/About";
import ListMovie from "./pages/home/ListMovie";
import DetailMovie from "./pages/home/DetailMovie";
import HOC from "./HOC";
import Dashboard from "./pages/admin/Dashboard";
import ThemNguoiDung from "./pages/admin/ThemNguoiDung";
import HOOKS from "./HOOKS";
import Material from "./material";

const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/Home",
    exact: false,
    component: Home,
  },
  {
    path: "/about",
    exact: false,
    component: About,
  },
  {
    path: "/list-movie",
    exact: false,
    component: ListMovie,
  },
  {
    path: "/detail-movie/:id",
    exact: false,
    component: DetailMovie,
  },
  {
    path: "/HOC",
    exact: false,
    component: HOC,
  },
  {
    path: "/HOOKS",
    exact: false,
    component: HOOKS,
  },
  {
    path: "/material",
    exact: false,
    component: Material,
  },
];
const routesAdmin = [
  {
    path: "/admin/dashboard",
    exact: false,
    component: Dashboard,
  },
  {
    path: "/admin/them-nguoidung",
    exact: false,
    component: ThemNguoiDung,
  },
];

export { routesHome, routesAdmin };
