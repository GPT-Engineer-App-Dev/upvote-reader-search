import { Outlet } from "react-router-dom";

function SharedLayout() {
  return (
    <main className="flex flex-1">
    <Outlet />
    </main>
  )
}

export default SharedLayout;