import React,{useState} from "react";
import {AiOutlineInfoCircle,AiOutlineBug} from "react-icons/ai";

import {BiError,BiErrorCircle,BiErrorAlt,} from "react-icons/bi";
import {BsSearch} from "react-icons/bs";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";


const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        console.log("toggled");
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 30) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };

export default function ErrorCard(props) {
    function getIcon(type) {
        if(type === "INFO"){
        return( < AiOutlineInfoCircle/>);}
        else if (type === "DEBG"){
        return( <AiOutlineBug />);}
        else if (type === "WARN"){
            return( <BiError />);}
            else if (type === "ERRO"){
                return( <BiErrorCircle />);
            }
            else if (type === "FATL"){
                return( <BiErrorAlt />);}
          
                    else if (type === "TRAC"){
                        return( <BsSearch />);}
            
    }

const icon = getIcon(props.logType);



return (
        
    

        <Container className={`${props.logType} errors`} key={props.id} id={props.id}>

            <Row>
                <Col xs={1}><div className={`${props.logType}color text-center`}> {icon}</div></Col>
                <Col xs={1}>{props.nr}. </Col>
                
                <Col xs={2}>{props.timestamp.split(" ")[1]}</Col>
                <Col xs={6}className="message"><div ><ReadMore >{props.message}</ReadMore></div></Col>
                <Col xs={2}className="message">{props.logger}</Col>
            </Row>
                </Container>

   
   
 
 );

}