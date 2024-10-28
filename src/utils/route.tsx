import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

//layouts
import RootLayout from "@/layouts/RootLayout";

//pages
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Address from "@/pages/Address";
import Search from "@/pages/Search";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="address" element={<Address />} />
        <Route path="search" element={<Search />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
