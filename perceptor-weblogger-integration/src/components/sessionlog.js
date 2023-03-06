import React, {useEffect}  from "react";
import ErrorCard from "./errorcard";
import ShowErrorComponent from "./showerrorcomponent";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
export default function SessionLog (props) {
    const [errorData, setData] = React.useState([]);
    const [sessionData, setSData] = React.useState([]);
    const params = new URLSearchParams(document.location.search);
    const sessionid = params.get("sessionId");
    const index = params.get("index");

    const apiUrl = "http://localhost/webdebugmaster/"
    async function getApi(url) {

        const responseErrors = await fetch(url + `errorsdata.php?sessionId=${sessionid}`);
   
        var dataErrors = await responseErrors.json();
        setData(dataErrors);

        const responseSessions = await fetch(url + `sessionsdata.php?id=${sessionid}`)
        var dataSession = await responseSessions.json();
        var time = dataSession[0].timestamp;

        setSData(dataSession);
        console.log(sessionData);
        var sessioninfo =`<h2 >Session: `;
        sessioninfo += index + " ";
    
        sessioninfo += time;
        sessioninfo += `</h2>`;
        document.getElementById("CurrentSession").innerHTML = sessioninfo;
        //console.log(dataSessions);
    }
    useEffect(() => {
        getApi(apiUrl);
    },[]);

  

        return (
        <Col>
           
            <div id="CurrentSession"></div>

               <Row>
            <Form >
              
          <ShowErrorComponent text={"All"} type={"ALL"}>All</ShowErrorComponent>
          <ShowErrorComponent text={"Trace"} type={"TRAC"}>Trace</ShowErrorComponent>
          <ShowErrorComponent text={"Debug"} type={"DEBG"}>Debug</ShowErrorComponent>
          <ShowErrorComponent text={"Info"} type={"INFO"}>Info</ShowErrorComponent>
          <ShowErrorComponent text={"Warning"} type={"WARN"}>Warning</ShowErrorComponent>
          <ShowErrorComponent text={"Error"} type={"ERRO"}>Error</ShowErrorComponent>
          <ShowErrorComponent text={"Fatal"} type={"FATL"}>Fa</ShowErrorComponent>
          </Form>
          </Row>
          <Card className={"css-container"}>
          <Row className="text-start">
                <Col xs={1} >Nr</Col>
                
                <Col xs={2} >Time</Col>
                <Col className="message ">Message</Col>
                <Col className="message ">LoggerType</Col>
            </Row>
          <div id="errorscards" className="css-error-cards">

           {errorData.map((p, index) => 
           (
           <ErrorCard key={index + 1} logger={p.logger} logType={p.logType} id={p.id} message={p.message} nr={index + 1} timestamp={p.timestamp}/>
          

          ))}</div>
           </Card></Col>
        
        );
    
}