import {  BrowserRouter as Router, Route, Routes as AppRoutes } from "react-router-dom";
import AddAdmin from "../pages/Admin/AddAdmin";
import AddCourse from "../pages/Admin/AddCourse";
import ChangePassword from "../pages/Admin/changepassowrd";
import AdminCourses from "../pages/Admin/Course";
import EditCourse from "../pages/Admin/EditCourse";
import AdminLogin from "../pages/Admin/login/adminlogin";
import Courses from "../pages/Courses/courses";
import Home from "../pages/home";

const Routeslogin = () =>{
return(
    <>
    <Router>
        <AppRoutes>
            <Route path="/" element={<Home/>}/>
            <Route path="/course" element={<Courses/>}/>
            <Route path="/admin" element={<AdminLogin/>}/>
            <Route path="/adminCourse" element={<AdminCourses/>}/>
            <Route path="/ChangePassword" element={<ChangePassword/>}/>
            <Route path="/AddCourse" element={<AddCourse/>}/>
            <Route path="/EditCourse/:id" element={<EditCourse/>}/>
            <Route path="/AddAdmin" element={<AddAdmin/>}/>
        </AppRoutes>
    </Router>
    </>
)}
export default Routeslogin