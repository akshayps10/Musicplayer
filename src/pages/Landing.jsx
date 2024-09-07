import React from 'react';
import { Link } from 'react-router-dom';
import landingImg from '../assets/Clo7.gif';
import featureImage from '../assets/4.webp'; 
import Card from 'react-bootstrap/Card';

const Landing = () => {
  return (
    <div style={{ padding: '100px' }} className='container'>
      <div className="row align-items">
        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa repudiandae dolores, dignissimos esse nulla illo. Id, ipsa hic. Quae doloremque omnis architecto, ad officiis qui impedit dolores nihil sed incidunt!
          </p>
          <Link to='/home' className='btn btn-info'>Get Info</Link>
        </div>
      </div>
      {/* Features */}
      <div className='my-5'>
        <h3 className='text-center'>Features</h3>
        <div className="row mt-5">
          {/* First Card */}
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img variant="top" src={featureImage} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Users can upload, view, and remove videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          {/* Second Card */}
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img variant="top" src={featureImage} /> {/* Using 4.webp again */}
              <Card.Body>
                <Card.Title>Organizing Playlists</Card.Title>
                <Card.Text>
                  Users can create and manage their playlists.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          {/* Third Card */}
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img variant="top" src={featureImage} /> {/* Using 4.webp again */}
              <Card.Body>
                <Card.Title>Discovering Content</Card.Title>
                <Card.Text>
                  Users can explore new videos and playlists.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        {/* Links */}
        <div className="my-5 row align-items-center border rounded p-5">
          <div className="col-lg-5">
            <h3 className='text-warning'>Simple, Fast and Powerful</h3>
            <p style={{ textAlign: 'justify' }}>
              <span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi perspiciatis! Deleniti maxime.
            </p>
            <p style={{ textAlign: 'justify' }}>
              <span className='fs-5'>Categorize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi perspiciatis! Deleniti maxime.
            </p>
            <p style={{ textAlign: 'justify' }}>
              <span className='fs-5'>Managing History</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi perspiciatis! Deleniti maxime.
            </p>
          </div>
          <div className="col-lg-6">
            <iframe
              width="497"
              height="360"
              src="https://www.youtube.com/embed/Po3jStA673E"
              title="LEO - Official Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
