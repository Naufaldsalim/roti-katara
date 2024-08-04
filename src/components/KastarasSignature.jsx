import React from 'react';
import { Container } from 'react-bootstrap';
import SignBG from "../../public/Sign BG.svg"
import '../styles/KastarasSignature.css';

const KastarasSignature = () => {
  return (
    <section className="kastaras-signature-section">
      <Container>
        <h2>Roti Pilihan Keluarga</h2>
        <p>
          Kastara adalah pilihan utama keluarga karena kami mengutamakan kualitas, kelezatan, dan keanekaragaman rasa yang cocok untuk dinikmati oleh semua anggota keluarga.
        </p>
        <div className="background-image">
          <img src={SignBG} alt="background" />
        </div>
        <div className="rotated-text">Kastara’s Signatures</div>
      </Container>
    </section>
  );
};

export default KastarasSignature;
