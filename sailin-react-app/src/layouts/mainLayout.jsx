import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

export default function MainLayout() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Navbar />
      <main style={{ margin: 0, padding: 0 }}>
        <Outlet />
      </main>
    </div>
  );
}
