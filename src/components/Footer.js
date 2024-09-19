import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/samyak-bahade-712187286/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100005422008161"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/samyakbahade/?utm_source=qr&igsh=MWxybnZiZjVxNmZtMQ%3D%3D"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p><a href="samlinkin19@gmail.com">samlinkin19@gmail.com</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
