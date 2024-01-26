import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";

export default function Dashboard() {
  const loaction = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");

    setTab(tabFromUrl);
  }, [loaction.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* for side bar */}
      <div className="md:w-56">
        <DashSidebar />
      </div>

      {/* for main content */}
      <div>{tab === "profile" && <DashProfile />}</div>
    </div>
  );
}
