import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { HomeLayout } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    // errorElement: <Error />,
    children: [
      
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router}/>
}