import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Thêm nhiều pháo hoa hơn */}
      {[...Array(6)].map((_, i) => (
        <div 
          key={`firework-${i}`} 
          className="firework"
          style={{
            '--delay': `${Math.random() * 2}s`,
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 40 + 10}%`
          }}
        />
      ))}

      {/* Thêm hoa mai rơi */}
      {[...Array(10)].map((_, i) => (
        <div key={i} className="flower"></div>
      ))}

      {/* Video background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        preload="auto"
        className="background-video"
      >
        <source src="https://phucansolutions.vn/wp-content/uploads/2023/12/phucan.mp4" type="video/mp4"/>
        Trình duyệt của bạn không hỗ trợ video tag.
      </video>
      
      {/* Logo */}
      <div className="logo-container">
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" className="logo" />
      </div>
      
      <div className="content">
        <h1>Welcome to Phuc An Solutions</h1>
        <p>Discover amazing things with us</p>
        <div className="buttons-container">
          <a 
            href="https://pasolutions.vn/"
            className="cta-button primary"
            rel="noopener noreferrer"
          >
            Doanh Nghiệp
          </a>
          <a 
            href="https://phucansolutions.com.vn"
            className="cta-button secondary"
            rel="noopener noreferrer"
          >
            Thiết Kế
          </a>
          <a 
            href="https://phucansolutions.com.vn"
            className="cta-button outline"
            rel="noopener noreferrer"
          >
            Giải Pháp
          </a>
          <a 
            href="https://phucansolutions.com"
            className="cta-button ghost"
            rel="noopener noreferrer"
          >
            Bán Lẻ
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 
