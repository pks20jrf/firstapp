import React from "react";
import { Card, CardBody } from "reactstrap";
function Header() {
return(
    <Card>  
       <CardBody className=" my-1 text-center bg-secondary fixed">
        <h1 className="text-light" >
            Welcome to Punit Learnings
        </h1>
       </CardBody>
    </Card>
);
}
export default Header;