import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/WelcomingNote.css';

const WelcomingNote = () => {
  return (
    <section id="kastara" className="welcoming-note-section">
      <Container>
        <h2>Selamat Datang di Kastara</h2>
        <div className="divider"></div>
        <p>
          Selamat datang di website Roti Kastara, tempat Anda menemukan berbagai macam kue lezat yang dibuat dengan cinta dan dedikasi. Kami berkomitmen untuk memberikan pengalaman terbaik melalui produk-produk berkualitas yang cocok untuk segala acara. Jelajahi berbagai pilihan kami dan temukan kue favorit Anda.
        </p>
      </Container>
    </section>
  );
};

export default WelcomingNote;