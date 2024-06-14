import React from "react";
import LargeCard from "./LargeCard";

const LargeCards = () => {
  const salesStats = [
    {
      title: "Today Orders",
      sales: 1200,
      bg_color: "bg-green-600",
    },
    {
      title: "Yesterday Orders",
      sales: 12000,
      bg_color: "bg-orange-600",
    },{
      title: "This Month",
      sales: 120000,
      bg_color: "bg-blue-600"
    },
    {
      title: "This Year",
      sales: 1200000,
      bg_color: "bg-pink-600"
    },
    {
      title: "Last Year",
      sales: 12000000,
      bg_color: "bg-purple-600"
    }
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 py-10">
      {
        salesStats.map((item, i)=> {
          return <LargeCard key={i} data={item}/>
        })
      }
     
    </div>
  );
};

export default LargeCards;
