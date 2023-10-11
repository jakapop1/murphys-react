import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Navbar, Nav, NavDropdown, Image, Row, Col, Dropdown, Button } from 'react-bootstrap';

// <div class="px-0 justify-content-center pb-2" id="topMenu">
//   <div class="navbar">
//     <div class="container">
//       <ul class="nav justify-content-start">
//         <li><a class="navbar-brand" href="#"><img src="murphyslogowhite.png" width="200px"></a></li>
//       </ul>
//       <ul class="nav justify-content-end">
//         <li class="nav-item nav-link">Home
//         </li>
//         <li class="nav-item nav-link">
//           About Us
//         </li>
//         <li class="nav-item nav-link">St. Patrick's Day
//         </li>
//         <li class="nav-item nav-link">
//           To Go Ordering
//         </li>
//         <li class="nav-item nav-link"><i class="bi bi-instagram"></i></li>
//         <li class="nav-item nav-link"><i class="bi bi-facebook"></i></li>
//         <li class="nav-item nav-link"><i class="bi bi-twitter"></i></li>
//       </ul>
//     </div>
//   </div>
// </div>
// <div class="row d-flex align-items-center justify-content-center" id="centerText">
//     <div class="col-8 text-center">
//       <h1>Now accepting reservations for St Patrick's Day</h1>
//       <h1 class="h1">Please call 808-531-0422 for reservations</h1>
//       <h1 class="h1">St Patrick's Day To-Go Orders can be ordered on our website menu.</h1>
//     </div>
// </div>
// <footer class="footer mt-auto py-3" id="bottomMenu">
//   <div class="container">
//     <div class="row">
//       <div class="col">
//         Lunch
//         <hr/>
//         Monday - Friday: 11:00am - 2:30pm<br/>
//         Saturday - Sunday: Not open
//       </div>
//       <div class="col">
//         Bar
//         <hr/>
//         Monday - Friday: From 11:00am to closing<br/>
//         Saturday - Sunday: Not open
//       </div>
//       <div class="col">
//         Dinner
//         <hr/>
//         Monday - Friday: 5:00pm - 9:00pm<br/>
//         Saturday - Sunday: Not open
//       </div>
//     </div>
//   </div>
// </footer>//

const TopMenu = () => (
  <div className="TopMenu"> {/* Remove the # symbol */}
    <Navbar expand="lg" bg="success">
      <Container>
        <Row>
          <Col>
            <Image src="/images/snowlogo.png" fluid />;
          </Col>
        </Row>
      </Container>
    </Navbar>
  </div>
);






const Murphys = () => (
  <Container fluid>
    <TopMenu/>
    <h1 className="text-center">Murphy's</h1>
  </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Murphys />);