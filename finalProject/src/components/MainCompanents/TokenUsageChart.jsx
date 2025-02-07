import React from "react";
import { useEffect,useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";


function TokenUsageChart({crypto,data}) {

  const[filtredData,setFiltredData]=useState([])

  useEffect(() => {
    const filtered = data
      .filter(item => item.symbol === crypto.symbol)
      .map(item => ({ date: item.date, value: item.value }));

    console.log("filtered: ", filtered);
    setFiltredData(filtered);
  }, [data]);



  return (
    <LineChart
      width={400}
      height={300}
      data={filtredData}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
    </LineChart>
  );
}

export default TokenUsageChart;