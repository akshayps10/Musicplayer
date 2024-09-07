import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap'; 
import { removeVideoAPI, StoreHistoryAPI } from '../services/allAPI';


const VideoCard = ({displayData,setDeleteVideoResponse}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () =>{
    setShow(true);
    // save history in json server
    const {caption,link} = displayData
    const sysTime =new Date()
    const timeStamp = sysTime.toLocaleString('en-us',{timeZoneName:'short'})
    console.log(timeStamp);;
    const videoDetails ={ caption,link,timeStamp }
    await StoreHistoryAPI(videoDetails)
    
  }

  const removeVideo = async (videoId)=>{
    const result = await removeVideoAPI(videoId)
    //pass response to view component(child to parent)
    setDeleteVideoResponse(result?.data)
  }
  return (


    <>
      <Card>
        <Card.Img
          onClick={handleShow}
          variant="top"
          src={displayData?.url}
          style={{ height: '150px', objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Text className='d-flex align-items-center justify-content-between'>
            <p>{displayData?.caption}</p>
            <button onClick={()=>removeVideo(displayData?.id)} className='btn'>
              <i className="fa-solid fa-trash text-danger"></i>
            </button>
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="360"
            src={displayData?.link}
            title="LEO - Official Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VideoCard;
