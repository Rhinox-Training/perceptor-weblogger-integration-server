import React, {useEffect, useState}  from "react";
import ErrorCard from "./errorcard";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";



function SortErrors(){

	var main = document.getElementById( 'errors' );
	if (document.getElementById("errors") != null) {
	[].map.call( main.children, Object ).sort( function ( a, b ) {
		return -b.id.match( /\d+/ ) - -a.id.match( /\d+/ );
	}).forEach( function ( elem ) {
		main.appendChild( elem );
	});}


	
}

export default function errors (props){
   const [errorDat, setErrorMessages] = useState([]);
    const apiUrl = "http://localhost/webdebugmaster/"
    let sessionNr = 0;
    //var errorDat= getData(apiUrl ,"errors");
    //let errorDat = [];

    let params = new URLSearchParams(document.location.search);
    let sessionid = params.get("sessionId");
   



    async function getApi(url) {

        const responseSessions = await fetch(url + "/sessionsdata.php")
        var dataSessions = await responseSessions.json();
        sessionNr = sessionid;
        var sessionData =`<h2>Current Session: `;
        sessionData += sessionNr + " ";
        sessionData += ` ${dataSessions[sessionNr-1].timestamp}`
        sessionData += `</h2>`
        document.getElementById("CurrentSession").innerHTML = sessionData;
      
      // document.getElementById("ALL").checked = true;

       

    };
    


    useEffect(() => {
        getApi(apiUrl);

        const interval = setInterval(() => {    
            const getErrors = async() =>
            {    
           
                const response = await fetch(apiUrl + `errorsdata.php?sessionId=${sessionNr}`);
                var apiErrors = await response.json();

                setErrorMessages(apiErrors);
               
                var errordiv=document.getElementById("errorscards");
                errordiv.scrollTop = errordiv.scrollHeight; 
                
            }
            getErrors();
            SortErrors();
          
     
        }, 2000);
        return () => clearInterval(interval);
    });
       
    

    return (
        
        < >
       <Row className="text-start">
       <Col xs={1} >Type</Col>
                <Col xs={1} >Nr</Col>
                
                <Col xs={2} >Time</Col>
                <Col xs={6} className="message ">Message</Col>
                <Col xs={2}className="message ">LoggerType</Col>
            </Row>
        <div id="errorscards"   className="css-error-cards">
            {errorDat.map((error,index)=> <ErrorCard key={error.id} nr={index}  id={error.id} logType={error.logType} message={error.message} logger={error.logger} timestamp={error.timestamp}></ErrorCard>)}       
        </div>
        </>
    );
}