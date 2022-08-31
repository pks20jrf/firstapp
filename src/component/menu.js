import React from "react";
import { ListGroup } from "reactstrap";
import {Link} from "react-router-dom";

const menus=()=>{
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action >
                HOME
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-courses" action >
                ADD COURSES
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-courses" action >
                VIEW COURSES
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#!" action >
                ABOUT
                </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>
                CONTACT
            </Link>
        </ListGroup>
    );
}
export default menus; 