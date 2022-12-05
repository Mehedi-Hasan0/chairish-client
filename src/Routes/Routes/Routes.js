import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import ProductsDetails from "../../Pages/Shop/Products/ProductsDetails/ProductsDetails";
import Shop from "../../Pages/Shop/Shop";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/shop',
                element: <Shop />,
            },
            {
                path: '/shop/:id',
                element: <ProductsDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/shop/${params.id}`)
            }
        ]
    }
])

export default router;