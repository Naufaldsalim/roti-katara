import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Histori from "../../public/History.svg";
import '../styles/History.css';

const History = () => {
  return (
    <section id="history" className="history-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="content">
              <p className="small-text">KASTARA BAKERY</p>
              <h2>Roti Khas Wonogiri</h2>
              <div className="divider"></div>
              <p>
                Kastara didirikan pada tahun 2015 dengan visi untuk menghadirkan kue-kue berkualitas tinggi yang dapat dinikmati oleh semua kalangan. Berawal dari dapur kecil, kami terus berkembang dan selalu berinovasi untuk memenuhi kebutuhan pelanggan.
              </p>
              <p>
                Seiring waktu, kami semakin dikenal sebagai toko roti terpercaya yang selalu mengedepankan kualitas bahan dan proses pembuatan yang higienis. Kami bangga dapat menjadi bagian dari momen-momen istimewa dalam kehidupan Anda.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="image-container">
              <img src={Histori} alt="history" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default History;
