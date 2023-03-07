import React, {useEffect, useState}  from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useLocation } from 'react-router-dom';
import data from "./../config.json";
function Sessions(props){
    const [sessionData, setData] = useState([]);
    const location = useLocation()
    const params = new URLSearchParams(location.search);
    const projectid = params.get("projectid");



    function SortErrors(){

        var main = document.getElementById( 'sessions' );
        if (document.getElementById("sessions") != null) {
        [].map.call( main.children, Object ).sort( function ( a, b ) {
            return -a.id.match( /\d+/ ) - -b.id.match( /\d+/ );
        }).forEach( function ( elem ) {
            main.appendChild( elem );
        });}
       
    
        
    }

    async function getApi(url) {

        const responseSessions = await fetch(url + `sessionsdata.php?projectId=${projectid}`);
        var dataSessions = await responseSessions.json();
        setData(dataSessions);

        const responseProject = await fetch(url + `projectsdata.php?id=${projectid}`)
        var dataProject = await responseProject.json();
     
        document.getElementById("name").innerHTML = "sessions for proj " + dataProject[0].name;
    }

    useEffect(  () => {

  
        
            const paramstemp = new URLSearchParams(location.search);
            const newid = paramstemp.get("projectid");
      
            if(newid !==projectid)
        {window.location.reload();}  

        const coroutine = async()=>{
    await getApi(data.serverURL);
   
            
        }
    
        coroutine();
      SortErrors();
      
     
    },[]);

    return (
        <div> 
            <h1 id="name">sessions for proj </h1>
            <div id="sessions">
            {sessionData.map((p, index) => (




    <Card key={index + 1} id={p.id}>
      <Card.Body>
        <Card.Title>Session : {p.id}</Card.Title>
        <Card.Text>
        {p.timestamp}
        </Card.Text>
        <Button key={index} as={Link} to={"/errors?sessionId="+p.id}  variant="primary">see errors</Button>
      </Card.Body>
    </Card>

            ))}
        
        </div></div>
    )
} export default Sessions;