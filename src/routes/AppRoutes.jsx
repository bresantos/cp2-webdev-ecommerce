import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import RepoDetail from "../pages/RepoDetail";
import Layout from "../Layout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "repo/:id", element: <RepoDetail /> },
    ],
  },
]);

export default router;