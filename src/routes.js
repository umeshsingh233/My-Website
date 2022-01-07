import Dashboard from "views/Dashboard.js";
import UserProfile from "views/account/UserProfile";
import ProductList from "views/products/ProductList.js";
import ProductForm from "views/products/ProductForm.js";
import CustomerList from "views/customer/CustomerList.js";
import AddCustomer from "views/customer/AddCustomer.js";
import EmployeeList from "views/employee/EmployeeList.js";
import NewEmployee from "views/employee/NewEmployee.js";
import OrderList from "views/order/OrderList.js";
import OrderForm from "views/order/OrderForm.js";
import SellerList from "views/seller/SellerList.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import QRScan from "views/qrscan/QRScan.js";
import About from "components/Footer/About";
import LogIn from "views/login/LogIn";
import SignUp from "views/login/SignUp";
//import Icons from "views/Icons.js";
//import Typography from "views/Typography.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/products",
    name: "Products",
    icon: "nc-icon nc-bullet-list-67",
    component: ProductList,
    layout: "/admin",
  },
  {
    path: "/add-product",
    name: "Add Products",
    icon: "nc-icon nc-bullet-list-67",
    component: ProductForm,
    layout: "/admin",
  },
  {
    path: "/employees",
    name: "Employees",
    icon: "nc-icon nc-notes",
    component: EmployeeList,
    layout: "/admin",
  },
  {
    path: "/new-employee",
    name: "New Employee",
    icon: "nc-icon nc-notes",
    component: NewEmployee,
    layout: "/admin",
  },
  {
    path: "/customers",
    name: "Customers",
    icon: "nc-icon nc-single-02",
    component: CustomerList,
    layout: "/admin",
  },
  {
    path: "/add-customer",
    name: "Add Customer",
    icon: "nc-icon nc-single-02",
    component: AddCustomer,
    layout: "/admin",
  },
  {
    path: "/orders",
    name: "Orders",
    icon: "nc-icon nc-cart-simple",
    component: OrderList,
    layout: "/admin",
  },
  {
    path: "/add-Orders",
    name: "New Order",
    icon: "nc-icon nc-cart-simple",
    component: OrderForm,
    layout: "/admin",
  },
  {
    path: "/sellers",
    name: "Sellers",
    icon: "nc-icon nc-badge",
    component: SellerList,
    layout: "/admin",
  },
  /*{
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    layout: "/admin",
  },*/
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-square-pin",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/QRscan",
    name: "QRScaner",
    icon: "nc-icon nc-cctv",
    component: QRScan,
    layout: "/admin",
  },
  /*{
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-sun-fog-29",
    component: Icons,
    layout: "/admin",
  },*/
  {
    path: "/about",
    name: "About",
    component: About,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
    layout: "/admin",
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
    layout: "/admin",
  },
];

export default dashboardRoutes;
