import React, { useState, useEffect } from "react";

import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
const ChartFps = (props) => {
  const [chartData, setChartData] = useState( {datasets: []});
  const [sessionInfoDat, setSessionInfoDat] = useState([]);

  async function getApi(url){
    const response = await fetch(url+"sessioninfosdata.php?sessionId="+props.sessionId)

    const responseData = await response.json();
    await setSessionInfoDat(responseData);   

}
  const ChartF =  async () => {
    let time = [];
    let fps = [];
    let maxfps=[];
    let minfps=[];
    let averagefps=[];
    await getApi("http://localhost/webdebugmaster/");


    
    for (let index = 0; index < sessionInfoDat.length; index++) {
        time.push(sessionInfoDat[index].timestamp.split(" ")[1]);
        fps.push(sessionInfoDat[index].fps);
        maxfps.push(sessionInfoDat[index].maxFps);
        minfps.push(sessionInfoDat[index].minFps);
        averagefps.push(sessionInfoDat[index].averageFps)
        console.log(time);
        
    }
    
    setChartData({
          labels: time,
          datasets: [
            {
              label: "fps",
              data: fps,
              fill: true,
              backgroundColor: ["rgba(54, 162, 235, 0.2)"],
              borderColor: ["rgba(54, 162, 235, 0.2)"],
              borderWidth: 1
            },
            {
              label: "average fps",
              data: averagefps,
              backgroundColor: ["rgba(90, 223, 123, 0.2)"],
              borderColor: ["rgba(90, 223, 123, 0.2)"],
              borderWidth: 1
            }
          ]
        });
    
      }


  useEffect(() => {
    const interval = setInterval(() => { 
    ChartF();
  }, 1000);
  return () => clearInterval(interval);
  });

  return (
   
        <Chart
        type="line"
          data={chartData}
          
        />

  );
}
export default ChartFps;
