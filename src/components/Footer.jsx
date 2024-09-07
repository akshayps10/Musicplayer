import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#000000',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: '1000px',
    margin: 'auto',
    flexWrap: 'wrap',
  };

  const sectionStyle = {
    width: '20%',
    marginBottom: '20px',
  };

  const titleStyle = {
    fontWeight: 'bold',
    marginBottom: '15px',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: '0',
    margin: '10px 0',
  };

  const listItemStyle = {
    marginBottom: '10px',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
  };

  const contactStyle = {
    display: 'flex',
    marginTop: '10px',
  };

  const inputStyle = {
    padding: '10px',
    width: '70%',
    border: 'none',
    borderRadius: '4px 0 0 4px',
  };

  const buttonStyle = {
    padding: '10px',
    width: '30%',
    border: 'none',
    backgroundColor: '#6f42c1',
    color: 'white',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
  };

  const socialsStyle = {
    marginTop: '10px',
  };

  const iconStyle = {
    color: 'white',
    marginRight: '15px',
    textDecoration: 'none',
    fontSize: '20px',
  };

  const footerBottomStyle = {
    borderTop: '1px solid #444',
    padding: '10px',
    marginTop: '20px',
    fontSize: '14px',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h3 style={titleStyle}>Media Player</h3>
          <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
          <p>Code licensed Luminar, docs CC BY 3.0.</p>
          <p>Currently v5.3.2.</p>
        </div>
        <div style={sectionStyle}>
          <h3 style={titleStyle}>Links</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}><a style={linkStyle} href="#">Landing Page</a></li>
            <li style={listItemStyle}><a style={linkStyle} href="#">Home Page</a></li>
            <li style={listItemStyle}><a style={linkStyle} href="#">Watch History Page</a></li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <h3 style={titleStyle}>Guides</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}><a style={linkStyle} href="#">React</a></li>
            <li style={listItemStyle}><a style={linkStyle} href="#">React Bootstrap</a></li>
            <li style={listItemStyle}><a style={linkStyle} href="#">React Router</a></li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <h3 style={titleStyle}>Contact Us</h3>
          <div style={contactStyle}>
            <input type="email" placeholder="Enter your email here" style={inputStyle} />
            <button style={buttonStyle}>&rarr;</button>
          </div>
          <div style={socialsStyle}>
            <a style={iconStyle} href="twitter"><i class="fa-brands fa-square-twitter"></i></a>
            <a style={iconStyle} href="#"><i class="fa-brands fa-square-instagram"></i></a>
            <a style={iconStyle} href="#"><i class="fa-brands fa-facebook-messenger"></i></a>
            <a style={iconStyle} href="#"><i class="fa-brands fa-linkedin-in"></i></a>
            <a style={iconStyle} href="#"><i className="fa fa-phone"></i></a>
          </div>
        </div>
      </div>
      <div style={footerBottomStyle}>
        <p>Copyright &copy; Jan 2024 Batch, Media Player. Built with React.</p>
      </div>
    </footer>
  );
};

export default Footer;
