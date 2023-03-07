import React from "react";
import { useState,useEffect } from "react";

import  Dropdown from "react-bootstrap/Dropdown";
import DropdownItem from "react-bootstrap/DropdownItem";
import DropdownMenu from "react-bootstrap/DropdownMenu";

import ChartFps from './chartfps.js';

export default function SessionInfo(props){
    const [sessionInfoDat, setSessionInfoDat] = useState([]);
    //const [sessionInfoDatId, setSessionInfoDatId] = useState(0);
    
 
    function CutString(input) {
        return input.toString().replace(/\.(\d{1,2}).*$/, '.$1');
      }

    async function getApi(url){
    
    const responseSessionInfo = await fetch(url + "sessioninfosdata.php?sessionId="+props.sessionId);
    var dataSessionInfo = await responseSessionInfo.json();

    //await setSessionInfoDatId(dataSessionInfo[dataSessionInfo.length-1].id)
    await setSessionInfoDat(dataSessionInfo);

 
  
}
 
useEffect(()=>{

   
        const interval = setInterval(() => { 
           
    getApi("http://localhost/webdebugmaster/");
    showSessionInfo();
        }, 1000);
        return () => clearInterval(interval);
});
     





function showSessionInfo() {
    if(sessionInfoDat.length !== 0){
        var fps = `
        Avg: ${sessionInfoDat[sessionInfoDat.length-1].averageFps} FPS<br />
        Fps: ${sessionInfoDat[sessionInfoDat.length-1].fps} FPS  ${CutString(sessionInfoDat[sessionInfoDat.length-1].time)} ms<br />
        Max: ${sessionInfoDat[sessionInfoDat.length-1].maxFps} FPS<br />
        Min: ${sessionInfoDat[sessionInfoDat.length-1].fps} FPS<br />
        `;
     if (document.getElementById("fps")){
            document.getElementById("fps").innerHTML = fps;}
     
            var mem=`
            Reserved: ${CutString(sessionInfoDat[sessionInfoDat.length-1].totalReservedMemory)} mb<br />
            Allocated: ${CutString(sessionInfoDat[sessionInfoDat.length-1].AllocatedMemory)} mb<br />
            Mono: ${CutString(sessionInfoDat[sessionInfoDat.length-1].MonoMemory)} mb<br />
            `;
    
            if (document.getElementById("mem"))
            document.getElementById("mem").innerHTML = mem;
    
            var bat = `
            Batches: ${sessionInfoDat[sessionInfoDat.length-1].batches}`
    
            if (document.getElementById("bat"))
            document.getElementById("bat").innerHTML = bat;}

}

return(
<>
    <Dropdown  className={props.className}>
    <Dropdown.Toggle  variant="primary">
          Session Info
        </Dropdown.Toggle>
        <DropdownMenu>
    <DropdownItem id="fps"></DropdownItem>
    <DropdownItem id="chart">
    <ChartFps sessionId={props.sessionId}></ChartFps>
    </DropdownItem>
    <DropdownItem id="mem"></DropdownItem>
    <DropdownItem id="bat"></DropdownItem>

    </DropdownMenu>

    </Dropdown></>)
}



