import React from "react";

const SmallCard = ({ data }) => {
  const { title, number, icon_bg, icon: Icon } = data;
  return (
    <div className="rounded-lg p-4 bg-slate-500">
      <div className="flex gap-5 items-center">
        <Icon className={`w-12 h-12 p-2 rounded-full ${icon_bg}`}/>
        <div>
          <h2 className="text-slate-300 mb-2">{title}</h2>
          <h3 className="text-2xl font-semibold">{number}</h3>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
