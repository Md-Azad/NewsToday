import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home layout</h1>,
  },
  {
    path: "*",
    element: <h1>Error Pages</h1>,
  },
]);

export default router;
