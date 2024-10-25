import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

//layouts

//pages
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
