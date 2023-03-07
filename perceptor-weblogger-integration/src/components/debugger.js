
import React, {useState}from "react";
import Errors from './errors';
import ShowErrorComponent from './showerrorcomponent';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import SessionInfo from "./sessioninfo";
import Container from "react-bootstrap/esm/Container";
function Debugger(){
  const [currentCategories, setCategoryQuery] = useState([])
  const [multiSelectExpanded, setMultiSelectExpanded] = useState(false);
  let params = new URLSearchParams(document.location.search);
  let sessionid = params.get("sessionId");

    return(
  <Col> <Container>  <Row>
  <Col>
          <div id="CurrentSession"></div>

          <Row>
                        <form id="checkboxes">
       
          <ShowErrorComponent text={"All"} type={"ALL"}>All</ShowErrorComponent>
          <ShowErrorComponent text={"Trace"} type={"TRAC"}>Trace</ShowErrorComponent>
          <ShowErrorComponent text={"Debug"} type={"DEBG"}>Debug</ShowErrorComponent>
          <ShowErrorComponent text={"Info"} type={"INFO"}>Info</ShowErrorComponent>
          <ShowErrorComponent text={"Warning"} type={"WARN"}>Warning</ShowErrorComponent>
          <ShowErrorComponent text={"Error"} type={"ERRO"}>Error</ShowErrorComponent>
          <ShowErrorComponent text={"Fatal"} type={"FATL"}>Fa</ShowErrorComponent>
          </form>
          </Row></Col><Col className="d-flex align-items-center" xs={2}><SessionInfo  sessionId={sessionid}></SessionInfo></Col></Row></Container>
          <Card className={"css-container"}>
          <Errors></Errors></Card>
          </Col>
  
    );

} export default Debugger;