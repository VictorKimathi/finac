import { Outlet } from "react-router-dom"; // Import Outlet for child route rendering

export default function DefaultLayout() {
  return (
    <div>
      <Outlet /> {/* This will render the nested routes */}
    </div>
  );
}
