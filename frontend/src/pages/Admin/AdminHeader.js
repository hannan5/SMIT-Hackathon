import { Navbar, Container, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const AdminHeader = () =>{
    const Navigate = useNavigate()
    return(
        <>
      <Navbar bg="dark" variant="dark">
        
        <Container>
          <Navbar.Brand href="#home">SMIT</Navbar.Brand>
          <Nav>
          <Nav.Link href="/ChangePassword">
              <p>
                Change Password
        </p>
        </Nav.Link>
        <Nav.Link href="#">
              <p onClick={()=>{
                  Navigate('/AddCourse')
              }}>
                Add Course
        </p>
            </Nav.Link>
            <Nav.Link href="#">
              <p onClick={()=>{
                  Navigate('/AddAdmin')
              }}>
                Add Admin
        </p>
            </Nav.Link>
            <Nav.Link href="#">
              <p onClick={()=>{
                  localStorage.setItem('isLoggedIn',false)
                  Navigate('/admin')
              }}>
                Logout
        </p>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
        </>
    )
}
export default AdminHeader