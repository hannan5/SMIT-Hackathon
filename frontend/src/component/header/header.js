import { Navbar, Container, Nav } from 'react-bootstrap'
import './header.css'
import Signin from '../modal/signin'
import Signup from '../modal/signup'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const [modalShow, setModalShow] = useState(false);
  const [signShow, setsignShow] = useState(false);
  const[login,setLogin] = useState(false)
  const Navigate = useNavigate()

  return (

    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">SMTSP</Navbar.Brand>
          <Nav>
              <Nav.Link href="#">
              <Link to='/course' style={{color:'#fff', textDecoration:'none'}}>
              <p>
                New Courses
        </p>
              </Link>
              
            </Nav.Link>
            {!login?
            <>
                        <Nav.Link href="#">
                        <p onClick={()=>setModalShow(true)}>
                          Login
                  </p>
                      </Nav.Link>
                      <Nav.Link href="#">
                        <p onClick={()=>setsignShow(true)}>
                          Signup
                  </p>
                      </Nav.Link>
                      </>
            :''}
      {/* //       <Nav.Link href="#">

      //       <p onClick={()=>{localStorage.setItem('userisLoggedIn',false); Navigate('/')}}>
      //         Logout
      // </p>
      //     </Nav.Link>} */}

                 
          {/* } */}

          

          </Nav>
        </Container>
      </Navbar>
      <Signin
              show={modalShow}
              onHide={() => setModalShow(false)}
              singinvar={setsignShow}
              login={login}
              setlogin={setLogin}/>
              <Signup
 show={signShow}
 onHide={() => setsignShow(false)}/>
    </>
  )
}
export default Header