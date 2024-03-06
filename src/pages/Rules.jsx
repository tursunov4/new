import React, { useEffect, useState } from "react";
import http from "../axios";

const Rules = () => {
  const [data, setData] = useState({});
  const getData = () => {
    http
      .get("/api/v1/rules/")
      .then((res) => {
        console.log(res.data);
        setData(res?.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <p>
        {data.description?.split("\r\n").map((item, index) => (
          <p
            style={{ marginBottom: "6px" }}
            key={index}
            dangerouslySetInnerHTML={{ __html: item }}
          ></p>
        ))}
      </p>
    </div>
  );
};

export default Rules;
