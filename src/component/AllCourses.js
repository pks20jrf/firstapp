import React, { useState, useEffect } from "react";
import base_url from "../api/bootapi";
import Course from "./course";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
const AllCourses=()=>{
    // function to call server
    const getAllCourses=()=>{
        axios.get(`${base_url}/courses`).then(
          (response)=>{
           // console.log(response);
            console.log(response.data);
            setCourse(response.data);
            toast.success("Data Loading From Server...");
            
          },
          (error)=>{
          //for error
            console.log(error);
            toast.error("somthing is wrong");
          }
         
        );
    };
    //calling loading function
    useEffect(()=>{
        getAllCourses();
    },[]);

    const[courses,setCourse]=useState([]);
return(
<div>
    <h4>All Courses</h4>
     {
        courses.length>0?courses.map((item)=><Course key={item.id} courses={item}/>): "No Courses"
     }
     <ToastContainer/>
</div>
);
}
export default AllCourses;