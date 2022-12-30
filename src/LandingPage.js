import { MDBTypography } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import BatasCard from './Components/BatasCard';
import Project from './Components/Project/ProjectExp';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Components/Footer/Footer';


function LandingPage() {
    return (

        <>
            <div className='homebody container-fluid'>
                <div className="row">
                    <div className='hometext col-4'>
                        <figure className='mb-0'>
                            <MDBTypography blockquote>
                                <h2>Hello, I'am Ilham S.Kom</h2>
                            </MDBTypography>
                            <figcaption className='blockquote-footer mb-0'>
                                Web Development Enthusiast
                            </figcaption>
                            <a href="https://api.whatsapp.com/send/?phone=%2B6282271056498&text&type=phone_number&app_absent=0">
                                <button className='btn btn-success'>Chat Me</button>
                            </a>
                            <a href='CV-ilham.pdf' download='Curriculum Vitae ilham.pdf'>
                                <button className='btn btn-outline-success'>Curriculum Vitae</button>
                            </a>
                        </figure>
                    </div>
                    <div className='homebg col-8'></div>
                </div>

            </div>
            <Card>
                <Card.Body>
                    <Card.Title>Summary Objective</Card.Title>
                    <h6> Short summary about me, interests and skills. </h6>
                </Card.Body>
            </Card>
            <div className='about'>
                <Container>
                    <Row>
                        <Col xs="4"><img src="Images/aku.jpeg" className='bg-primary myFoto img-fluid' /></Col>
                        <Col className='aboutMe'>
                            <h3 className='judul'>About Me</h3>

                            <p>
                                I graduated with a bachelor's degree in Informatics Engineering from the Sumatra Institute of Technology.
                                I have interest in Web development, front-end development, database queries, computer networking and UI/UX.
                                I have experience in developing web-based information systems using the Laravel framework and
                                I'm currently actively looking for work that is relevant to my interests and education.
                                to support my interest, I have curiosity about new things, keep learning to broaden my knowledge in technology
                                and have great motivation to be a better person and want to develop. I am very familiar with team or individual work.
                            </p>
                            <h4 className='judul'> Skills </h4>
                            <div className='skill'>
                                <ul>
                                    <li>Html</li>
                                    <li>CSS</li>
                                    <li>JavaScript ( Basic )</li>
                                    <li>React JS ( Basic )</li>
                                    <li>Framework Laravel</li>
                                    <li>C++</li>

                                </ul>
                                <ul>
                                    <li>MySql</li>
                                    <li>Query and Sub-Query Database</li>
                                    <li>Tailwind</li>
                                    <li>Bootstrap</li>
                                    <li>Figma</li>
                                    <li>Canva</li>
                                </ul>
                                <ul><button type='button' className='btn btn-primary' >Full my profile</button></ul>

                            </div>

                        </Col>

                    </Row>
                </Container>

            </div>

            <BatasCard></BatasCard>

            <Project ></Project>

            <div className='d-grid gap-2 col-4 mx-auto'>

                <button type="button" className="btn btn-primary">See All Project and Detail</button>

            </div>

            <Card>
                <Card.Body>
                    <Card.Title>Information</Card.Title>
                    <h6> Contact information, social media and work tools.</h6>
                </Card.Body>
            </Card>

            <Footer></Footer>
        </>
    );
}



export default LandingPage;