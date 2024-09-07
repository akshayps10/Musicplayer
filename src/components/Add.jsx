import React, { useState } from 'react';
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadVideoAPI } from '../services/allAPI';

const Add = ({ setUploadVideoResponse }) => {
  const [invalidLink, setInvalidLink] = useState(false);
  const [videoDetails, setVideoDetails] = useState({
    caption: "",
    URL: "",
    link: ""
  });

  const [show, setShow] = useState(false);

  console.log(videoDetails);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbedURL = (link) => {
    if (link.includes("v=")) {
      let videoId = link.split("v=")[1].slice(0, 11);
      console.log(videoId);
      setVideoDetails({ ...videoDetails, link: `https://www.youtube.com/embed/${videoId}` });
      setInvalidLink(false);
    } else {
      // Invalid URL
      console.log("invalid");
      setInvalidLink(true);
      setVideoDetails({ ...videoDetails, link: "" });
    }
  };

  const handleUpload = async () => {
    console.log("inside handle upload function");
    const { caption, url, link } = videoDetails;
    if (caption && url && link) {
      const result = await uploadVideoAPI(videoDetails);
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        handleClose();
        setVideoDetails({ ...videoDetails, caption: "", url: "", link: "" });
        toast.success(`${result.data.caption} added to your collection!!!`);
        setUploadVideoResponse(result); // Added the missing semicolon
      }
    } else {
      toast.warning("please fill the form completely!!!");
    }
  };

  return (
    <>
      <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border rounded p-3'>
            <FloatingLabel className='mb-3' controlId="floatingInputCaption" label="Video Caption">
              <Form.Control
                onChange={e => setVideoDetails({ ...videoDetails, caption: e.target.value })}
                type="text"
                placeholder="Video Caption"
              />
            </FloatingLabel>
            <FloatingLabel className='mb-3' controlId="floatingInputImage" label="Image URL">
              <Form.Control
                onChange={e => setVideoDetails({ ...videoDetails, url: e.target.value })}
                type="text"
                placeholder="Image URL"
              />
            </FloatingLabel>
            <FloatingLabel className='mb-3' controlId="floatingInputLink" label="YouTube Video Link">
              <Form.Control
                onChange={e => getEmbedURL(e.target.value)}
                type="text"
                placeholder="YouTube Video Link"
              />
            </FloatingLabel>
            {invalidLink && <div className="text-danger fw-bolder mt-3">Invalid YouTube Link</div>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </>
  );
};

export default Add;
