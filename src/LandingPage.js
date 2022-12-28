import { MDBTypography } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import BatasCard from './Components/BatasCard';
import Project from './Components/Project/ProjectExp';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LandingPage() {
    return (

        <>
            <div className='first container-fluid'>
                <figure className='mb-0'>
                    <MDBTypography blockquote>
                        <h2>Hello, I'am Ilham S.Kom</h2>
                    </MDBTypography>
                    <figcaption className='blockquote-footer mb-0'>
                        Web Development Enthusiast
                    </figcaption>
                </figure>
            </div>
            <Card border="primary">
                <Card.Body>
                    <Card.Title>Tentang Saya</Card.Title>
                </Card.Body>
            </Card>

            <div className='about'>
                <Container>
                    <Row>
                        <Col xs="4"><img src="Images/aku.jpeg" className='bg-primary myFoto img-fluid' /></Col>
                        <Col className='aboutMe'>
                            <h3 className='judul'>About Me</h3>
                            <p>I am a bachelor’s degree in Informatics Engineering from the Sumatera Institute of Technology. I have an
                                interest in Web development, front-end development, web design, computer network and UI / UX. I am
                                curious about new things, constantly learning, have big motivation to be a better person, and want to
                                grow. I am very familiar with a team or individual work. I have skills in the use of the Laravel framework,
                                know the use of PHP, CSS, MySQL, Mikrotik and Figma



                            </p>

                        </Col>

                    </Row>
                </Container>

            </div>

            <BatasCard></BatasCard>

            <Project></Project>

            <Button className='col-md-12' variant="info" size="lg" text-center>Lihat Detail dan Project Lain</Button>

            <Card border="primary">
                <Card.Body>
                    <Card.Title>Kontak</Card.Title>
                    <h6> Informasi Kontak yang dapat di Hubungi</h6>
                </Card.Body>
            </Card>
        </>
    );
}

export default LandingPage;