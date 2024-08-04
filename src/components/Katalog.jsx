import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Katalog1 from "../../public/Katalog 1.svg";
import Katalog2 from "../../public/Katalog 2.svg";
import Katalog3 from "../../public/Katalog 3.svg";
import KatalogBG from "../../public/Katalog BG.svg";
import '../styles/Katalog.css'; 

const Katalog = () => {
  return (
    <section id="katalog" className="katalog-section">
      <Container>
        <h2>Katalog</h2>
        <div className="divider"></div>
        <Row>
          <Col md={4}>
            <Card className="katalog-card">
              <Card.Img variant="top" src={Katalog1} />
              <Card.Body>
                <Card.Title className='judul'>Kue Hajatan</Card.Title>
                <Card.Text className='paragraph'>
                  Kue Hajatan Kastara dibuat dengan bahan berkualitas tinggi dan resep tradisional yang sudah diwariskan turun-temurun. Cocok untuk segala jenis perayaan, dari arisan keluarga hingga pesta besar. Setiap gigitan akan memberikan rasa nostalgia yang hangat.
                </Card.Text>
                <Link to="kontak" smooth={true} duration={500}>
                  <Button variant='Link' className='order-btn'>
                    <div className="order-content">
                      <span>Order Sekarang</span>
                      <span>&rarr;</span>
                    </div>
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="katalog-card">
              <Card.Img variant="top" src={Katalog2} />
              <Card.Body>
                <Card.Title className='judul'>Kue Ulang Tahun</Card.Title>
                <Card.Text className='paragraph'>
                  Rayakan momen spesial Anda dengan Kue Ulang Tahun Kastara yang cantik dan lezat. Kami menawarkan berbagai desain menarik dan rasa yang bervariasi sesuai keinginan Anda. Pesan sekarang dan buat ulang tahun Anda lebih berkesan.
                </Card.Text>
                <Link to="kontak" smooth={true} duration={500}>
                  <Button variant='Link' className='order-btn'>
                    <div className="order-content">
                      <span>Order Sekarang</span>
                      <span>&rarr;</span>
                    </div>
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="katalog-card">
              <Card.Img variant="top" src={Katalog3} />
              <Card.Body>
                <Card.Title className='judul'>Kue Custom</Card.Title>
                <Card.Text className='paragraph'>
                  Ingin kue yang sesuai dengan tema atau ide unik Anda? Kue Custom Kastara hadir untuk mewujudkan impian kuliner Anda. Dari bentuk hingga rasa, kami siap memenuhi setiap detail keinginan Anda dengan sentuhan khusus. Segera order sebelum kehabisan.
                </Card.Text>
                <Link to="kontak" smooth={true} duration={500}>
                  <Button variant='Link' className='order-btn'>
                    <div className="order-content">
                      <span>Order Sekarang</span>
                      <span>&rarr;</span>
                    </div>
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="rotated-text">Kastara's Services</div>
        <div className="katalog-background">
          <img src={KatalogBG} alt="background" />
        </div>
      </Container>
    </section>
  );
};

export default Katalog;
