import React from "react";
import {
        Card,
        CardBody,
        CardTitle,
        CardText,
        Button,
        Container,
    
    } from "reactstrap";
    const course=({courses})=>{
     return(
       <Card>
          <CardBody>
             <CardTitle className="text-center"> <h5>{courses.title}</h5> </CardTitle>
                <CardText className="text-center">
                     {courses.description}
                </CardText>
                <Container className="text-center">
                    <Button color="danger">Delete</Button> 
                    <Button color="warning ms-2">Update</Button>
                </Container>
          </CardBody>
       </Card>
     );
    };
    export default course;