import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import AllCourses from './component/AllCourses';
import AddCourse from './component/AddCourses';
import { Col, Container, Row } from 'reactstrap';
import Header from './component/Header';
import Menus from './component/menu';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App"> 
    <Router>
      <Container>
      <Header /> 
        <Row>
          <Col md={4}>
             <Menus/>
          </Col>
          <Col md={8}>
             <Routes>
               <Route path="/" element={<Home />} exact />
               <Route path="/add-courses" element={<AddCourse />} exact />
               <Route path="/view-courses" element={<AllCourses />} exact />
             </Routes>
          </Col>
        </Row>
      </Container>
      </Router>
    </div>
  );
}

export default App;
