import React, {useEffect, useState}  from "react";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
export default function Projects (props) {
    const [projectData, setData] = useState([]);
    const [sessionData, setSData] = useState([]);

    const apiUrl = "http://localhost/webdebugmaster/"
    async function getApi(url) {

        const responseProjects = await fetch(url + `projectsdata.php`);
        var dataProjects = await responseProjects.json();
        setData(dataProjects);

        const responseSessions = await fetch(url + `sessionsdata.php`);
        var dataSessions = await responseSessions.json();
        setSData(dataSessions);
    
        
    }
    useEffect(() => {
        getApi(apiUrl);
    },[1]);
        return (
            <Col>
            <div className={"css-container-header"}>
                <h1>Projects</h1></div>
                <Card className={"css-container"}>
                <ol className='text-start' id="projects">
                 
      {projectData.map((p, index) => (<div>
              < Link to={"/sessions?projectid="+p.id}  key={index}>
                <Card >
                <Card.Title>{p.id}. {p.name}</Card.Title>
                <Card.Body>Amount of Sessions: {sessionData.filter(function(session){
                    return session.projectId === p.id;
                }).length}</Card.Body>
                </Card>
                </Link><br />
        </div>
          ))}
                </ol></Card>
        
            </Col>

         
        
        );
    
}
