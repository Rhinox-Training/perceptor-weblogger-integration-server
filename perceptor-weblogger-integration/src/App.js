import "./app.css";
import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Sessions from "./components/sessions";

import Debugger from "./components/debugger";
import SessionLog from "./components/sessionlog";

import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Projects from "./components/projects";
import Form from "react-bootstrap/Form";
import SessionInfo from "./components/sessioninfo";

function App() {
  const [currentCategories, setCategoryQuery] = useState([])
  const [multiSelectExpanded, setMultiSelectExpanded] = useState(false);
  const [errorData,setEData] = useState([]);
  const [projectData, setData] = useState([]);

  const apiUrl = "http://localhost/webdebugmaster/";

  function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }

  deleteAllCookies();
  const urlParams = new URLSearchParams(window.location.search);
  const sessionId = urlParams.get("sessionId");
  if (document.cookie.indexOf("sessionId=") === -1) {
    document.cookie = `sessionId=${sessionId}`;
  }



 

  const clearSearch = () => {
    document.getElementById("search").value = "";
  
  };
  async function getApi(url) {
    const project = await fetch(url + "projectsdata.php");
    var data = await project.json();
    await setData(data);
    document.getElementById("search").value = "";

  }

  React.useEffect(() => {
      var checkboxes = document.getElementsByClassName("filter");
   
      for (let index = 0; index < checkboxes.length; index++) {
        if(!checkboxes[index].checked)
        {
          const errors = document.getElementsByClassName(checkboxes[index].type);
          for (let index = 0; index < errors.length; index++) {
            if(errors[index].style.display !== "block")
						errors[index].style.display = "block";				
					}	
            
          }
          
        
        
      }
    
     // document.getElementById("ALL").checked = true;
        getApi(apiUrl);
  },[]);

 
  return (
    <div className="App" onunload="deleteAllCookies()">
      <Navbar bg="light">
        <Container className="d-flex justify-content-between">
      
            <Col  className="text-center">
              <h3 >Debugmaster5000</h3>
            </Col>
            <Col >
              <Button as={Link} to={`/?${document.cookie}`} variant="primary">
                Debugger
              </Button>
            </Col>
            <Col >
              <Dropdown as={ButtonGroup}>
                <Button as={Link} to="/projects" variant="primary">
                  Projects
                </Button>

                <Dropdown.Toggle
                  split
                  variant="primary"
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu id="projects">
                  {projectData.map((p, index) => (
                    <div>
                      <Dropdown.Item
                        as={Link}
                        to={"/sessions?projectid=" + p.id}
                        key={index}
                      >
                        {p.id}. {p.name}
                      </Dropdown.Item>
                      <br />
                    </div>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
           
            <Col className="d-flex">
              <form id="searchform" onSubmit={e => { e.preventDefault(); }}>
              <Form.Control
                type="search"
                placeholder="search"
                className="me-2"
                name="search"
                aria-label="search"
                id="search"
              
              />

            
              </form>
              <form id="clear">
              <Button variant="outline-success" onClick={clearSearch}>
                Clear
              </Button>
              </form>
            </Col>

       
        </Container>
      </Navbar>

      <Container className="Body">
        <Row>
          <Routes>
            <Route path={`/`} element={<Debugger />} />
            <Route path={`/sessions`} element={<Sessions id={1} />} />
            <Route path="/errors" element={<SessionLog id={1} />} />
            <Route path="/projects" element={<Projects id={1} />} />
          </Routes>
        </Row>
      
      </Container>
      <script
        src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
        crossOrigin
      ></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossOrigin
      ></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin
      ></script>
    </div>
  );
}

export default App;
