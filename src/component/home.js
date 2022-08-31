import React from "react";
import { Button, Card, CardBody } from "reactstrap";
const Home=()=>{
return(
<div className="text-center" >
  <Card>
    <CardBody className="bg-warning">
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button color="primary">Learn more</Button>
  </p>
  </CardBody>
  </Card>
</div>

);
};
export default Home;