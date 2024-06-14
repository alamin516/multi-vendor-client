import React from "react";
import SmallCard from "./SmallCard";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import PendingIcon from '@mui/icons-material/Pending';
import CheckIcon from '@mui/icons-material/Check';

const SmallCards = () => {
  const orderStats = [
    {
      title: "Total Orders",
      number: 142,
      icon_bg: "bg-green-600",
      icon: AddShoppingCartIcon
    },
    {
      title: "Pending Orders",
      number: 10,
      icon_bg: "bg-orange-600",
      icon: PendingIcon
    },
    {
      title: "Processing Orders",
      number: 12,
      icon_bg: "bg-blue-600",
      icon: AutorenewIcon
    },
    {
      title: "Delivered Orders",
      number: 120,
      icon_bg: "bg-pink-600",
      icon: CheckIcon
    }
   
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10">
      {orderStats.map((data, i) => (
        <SmallCard data={data} key={i} />
      ))}
    </div>
  );
};

export default SmallCards;
