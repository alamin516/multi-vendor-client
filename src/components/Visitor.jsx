"use client"; // This comment is fine if it's indicating the environment or purpose, adjust as needed
import React, { useState, useEffect } from "react";

const Visitor = () => {
  const [visitorIps, setVisitorIps] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let ipRes = await fetch("https://api.ipify.org/?format=json").then(
          (response) => response.json()
        );

        let backendRes = await fetch("/api/user/visitors", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ip: ipRes.ip }),
        });

        if (backendRes.ok) {

          let ipData = await backendRes.json();
          let ipsData = ipData.data


          let storedIps = localStorage.getItem("visitorIps");
          storedIps = storedIps ? JSON.parse(storedIps) : [];

          if (!storedIps.some(ip => ip.ip === ipsData.ip)) {
            ipsData.id = storedIps.length + 1;

            storedIps.push(ipsData);

            localStorage.setItem("visitorIps", JSON.stringify(storedIps));

            setVisitorIps(storedIps);
          }
        } else {
          console.error("Failed to fetch visitor data from backend");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []); 

  return <></>;
};

export default Visitor;
