import React from "react";

const Heading = ({ title }) => {
  return (
      <h2 className="py-4 text-2xl font-semibold dark:text-slate-50 text-black">{title}</h2>
  );
};

export default Heading;
