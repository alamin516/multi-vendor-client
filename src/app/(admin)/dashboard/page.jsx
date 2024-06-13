import Heading from "@/components/admin/Heading";
import Charts from "@/components/admin/dashboard/Charts";
import LargeCards from "@/components/admin/dashboard/LargeCards";
import RecentOrders from "@/components/admin/dashboard/RecentOrders";
import SmallCards from "@/components/admin/dashboard/SmallCards";
import React from "react";

const page = () => {
  return (
    <div>
      <Heading title="Dashboard Overview" />
      {/* Large Cards */}
      <LargeCards />

      {/* small Card */}
      <SmallCards/>

      {/* Charts */}
      <Charts/>

      {/* Recent Orders */}
      <RecentOrders/>

    </div>
  );
};

export default page;
