import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Testi from "../../public/TestiGambar.svg";
import '../styles/Testimoni.css';

const Testimoni = () => {
  const testimoniList = [
    { text: 'Kue Kastara selalu menjadi pilihan pertama keluarga kami untuk setiap acara.', name: 'Andi – Jakarta' },
    { text: 'Rasanya enak dan bentuknya cantik, anak-anak suka sekali!', name: 'Siti, Bandung' },
    { text: 'Pelayanan cepat dan hasilnya memuaskan, sangat direkomendasikan!', name: 'Budi, Surabaya' },
    { text: 'Kue custom-nya sesuai dengan yang saya inginkan, terima kasih Kastara!', name: 'Lina, Malang' },
    { text: 'Kualitas rotinya luar biasa, selalu segar dan lembut.', name: 'Rina, Semarang' },
    { text: 'Kue hajatan yang saya pesan sangat enak dan dihargai oleh semua tamu.', name: 'Hasan, Makassar' },
    { text: 'Kue ulang tahun anak saya dari Kastara sangat mengesankan.', name: 'Dewi, Yogyakarta' },
    { text: 'Desain kuenya unik dan rasanya pun tidak mengecewakan.', name: 'Arya, Medan' },
    { text: 'Kue hajatan yang saya pesan sangat enak dan dihargai oleh semua tamu.', name: 'Hasan, Makassar' },
  ];

  return (
    <section id="testimoni" className="testimoni-section">
      <Container>
        <h2>Apa yang mereka katakan tentang Kastara</h2>
        <div className="divider"></div>
        <Row className="align-items-center">
          <Col md={12} lg={7} className='testi-img-container'>
            <img src={Testi} alt="testimoni" className="testimoni-image" />
          </Col>
          <Col xs={12} md={12} lg={5}>
            <Row className="testi-container">
              {testimoniList.map((testimoni, index) => (
                <Col xs={12} sm={6} md={4} lg={4} key={index} className="testimoni-item">
                  <div className="testimoni-content">
                    <p>"{testimoni.text}"</p>
                    <p className="testimoni-name">- {testimoni.name}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimoni;
