import React, { Fragment } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";


const AddCourses=()=>{
return(
<Fragment>
    <h3 className="text-center">ADD COURSE DETAILS</h3>
<Form>
    <FormGroup>
        <label for="userID">Course ID</label>
        <Input type="text" placeholder="Enter Here" name="userId" id="userId"></Input>
    </FormGroup>
    <FormGroup>
         <label for="title">Course Title</label>
         <Input type="text" placeholder="Enter Here..." name="title" id="dtitle"></Input>
    </FormGroup>
    <FormGroup>
        <label for="description">Course Description</label>
        <Input type="textarea" placeholder="write here" name="description" id="description"></Input>
    </FormGroup>
    <Container className="text-center">
        <Button color="success">AddCourse</Button>
        <Button color="warning ms-2">Clear</Button>
    </Container>
</Form>
</Fragment>
);
}
export default AddCourses;