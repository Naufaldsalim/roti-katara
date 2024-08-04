import React from 'react';
import { Container, Button, Image } from 'react-bootstrap';
import KastaraLogo from "../../public/Logo Kastara Fix.svg";
import Instagram from "../../public/Instagram.svg"
import TikTok from "../../public/Tiktok.svg"
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer id="kontak" className="footer-section">
      <Container>
        <p className="small-text">KONTAK KAMI</p>
        <h2>Pesan Sekarang, Nikmati Kelezatannya</h2>
        <p className="location-text">
          Dusun Kendung, Desa Kopen, Kecamatan Jatipurno, Kabupaten Wonogiri, Jawa Tengah.
        </p>
        <a href="https://wa.me/6282136470349" target='_blank'><Button className="order-button">Pesan Sekarang</Button></a>
        <p className="copyright-text">Copyright © 2024 Roti Kastara | All Rights Reserved</p>
        <div className="divider"></div>
        <div className="footer-bottom">
          <img src={KastaraLogo} alt="Kastara logo" className="footer-logo" />
          <div className="social-media">
            <a href="https://www.instagram.com/inikastara/" target='_blank'><Image src={Instagram} /></a>
            <a href="https://www.tiktok.com/@inikastara" target='_blank'><Image src={TikTok}/></a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;