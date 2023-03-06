import React, {useEffect, useState}  from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Sessions(props){
    const [sessionData, setData] = useState([]);

    const params = new URLSearchParams(document.location.search);
    const projectid = params.get("projectid");

    const apiUrl = "http://localhost/webdebugmaster/"

    function SortErrors(){

        var main = document.getElementById( 'sessions' );
        if (document.getElementById("sessions") != null) {
        [].map.call( main.children, Object ).sort( function ( a, b ) {
            return -a.id.match( /\d+/ ) - -b.id.match( /\d+/ );
        }).forEach( function ( elem ) {
            main.appendChild( elem );
        });}
        console.log("errors sorted");
    
        
    }

    async function getApi(url) {

        const responseSessions = await fetch(url + `sessionsdata.php?sessionId=${projectid}`);
        var dataSessions = await responseSessions.json();
        setData(dataSessions);

        const responseProject = await fetch(url + `projectsdata.php?id=${projectid}`)
        var dataProject = await responseProject.json();
     
        document.getElementById("name").innerHTML = "sessions for proj " + dataProject[0].name;
    }

    useEffect(  () => {

  
        
            const paramstemp = new URLSearchParams(document.location.search);
            const newid = paramstemp.get("projectid");
      
            if(newid !==projectid)
        {window.location.reload();}  

        const coroutine = async()=>{
    await getApi(apiUrl);
    await SortErrors();
            
        }
    
        coroutine();
       
      
     
    },[]);

    return (
        <div> 
            <h1 id="name">sessions for proj </h1>
            <div id="sessions">
            {sessionData.map((p, index) => (




    <Card key={index + 1} id={p.id}>
      <Card.Body>
        <Card.Title>Session : {index +1}</Card.Title>
        <Card.Text>
        {p.timestamp}
        </Card.Text>
        <Button key={index} as={Link} to={"/errors/?sessionId="+p.id+"&index="+(index+1)}  variant="primary">see errors</Button>
      </Card.Body>
    </Card>

            ))}
        
        </div></div>
    )
} export default Sessions;