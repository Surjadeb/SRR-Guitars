import React from 'react'
// import './CSS/Artists.css'
import banner from '../Components/Assets/mg.jpg'
export default function Artists() {
  const styles = {
    page: {
      minHeight: '100vh',
      backgroundColor: '#0b0f19',
      color: '#f1f5f9',
      fontFamily: 'Arial, Helvetica, sans-serif'
      
    },
    hero: {
      padding: '200px 90px',
      textAlign: 'center',
      background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://wallpapers.com/images/featured-full/red-dead-redemption-2-desktop-jbf0ia8tlq5lfvqz.jpg') center/cover no-repeat"
      
    },
    heroTitle: {
      fontSize: '3rem',
      color: '#facc15'
    },
    heroText: {
      marginTop: '10px',
      color: '#cbd5f5'
    },
    container: {
      maxWidth: '1200px',
      margin: 'auto',
      padding: '60px 20px'
    },
    card: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: '30px',
      marginBottom: '60px',
      alignItems: 'center'
    },
    image: {
      width: '100%',
      borderRadius: '16px',
      boxShadow: '0 15px 30px rgba(0,0,0,0.4)'
    },
    name: {
      color: '#facc15',
      marginBottom: '10px'
    },
    desc: {
      color: '#d1d5db',
      marginBottom: '15px'
    },
    skills: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px'
    },
    skill: {
      background: '#020617',
      padding: '8px 16px',
      borderRadius: '20px',
      fontSize: '0.9rem'
    },
    footer: {
      textAlign: 'center',
      padding: '25px',
      background: '#020617',
      color: '#94a3b8'
    }
  };

  return (
    <div style={styles.page}>
      <header style={styles.hero}>
        <h1 style={styles.heroTitle}>Our  Artists</h1>
        <p style={styles.heroText}>Meet the professionals who teach and perform worldwide</p>
      </header>

      <section style={styles.container}>
        {/* Artist 1 */}
        <div style={styles.card}>
          <img style={styles.image} src={banner} alt="Ryan Steel" />
          <div>
            <h2 style={styles.name}>Surjadeb Singh</h2>
            <p style={styles.desc}>Professional lead guitarist known for expressive solos and powerful stage presence.</p>
            <div style={styles.skills}>
              <span style={styles.skill}>Lead Guitar</span>
              <span style={styles.skill}>Rock</span>
              <span style={styles.skill}>Blues</span>
              <span style={styles.skill}>Live Shows</span>
            </div>
          </div>
        </div>

        {/* Artist 2 */}
        <div style={styles.card}>
          <img style={styles.image} src={banner} alt="Alex Rivera" />
          <div>
            <h2 style={styles.name}>Rohit Ghosh</h2>
            <p style={styles.desc}>plays drums professionalyy across the globe</p>
            <div style={styles.skills}>
              <span style={styles.skill}>rhythm</span>
              <span style={styles.skill}>time sequence</span>
              <span style={styles.skill}>Songwriting</span>
              <span style={styles.skill}>Online Teaching</span>
            </div>
          </div>
        </div>

        {/* Artist 3 */}
        <div style={styles.card}>
          <img style={styles.image} src={banner} alt="Daniel Frost" />
          <div>
            <h2 style={styles.name}>Ripan Gharai</h2>
            <p style={styles.desc}>professional synth player well known and performs across the world.</p>
            <div style={styles.skills}>
              <span style={styles.skill}>Jazz</span>
              <span style={styles.skill}>Fusion</span>
              <span style={styles.skill}>Improvisation</span>
              <span style={styles.skill}>Studio Recording</span>
            </div>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>© 2026 Online Guitar Studio</footer>
    </div>
  );
}
