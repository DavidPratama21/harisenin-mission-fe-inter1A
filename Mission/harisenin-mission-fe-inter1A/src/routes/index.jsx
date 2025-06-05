import { createBrowserRouter } from "react-router";
import Beranda from "../pages/Beranda";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Kategori from "../pages/Kategori";
import DetailProduk from "../pages/DetailProduk";
import Metode from "../pages/Metode";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Beranda />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/kategori",
        element: <Kategori />,
    },
    {
        path: "/detailProduk",
        element: <DetailProduk />,
    },
    {
        path: "/metode",
        element: <Metode />,
    },
]);
