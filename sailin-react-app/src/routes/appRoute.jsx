import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Home from "../pages/hero";
import About from "../pages/about";
// import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;
