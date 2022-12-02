import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// @ts-ignore
const GoogleMapItem = ({item}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{marginTop: "5px", marginBottom: "5px"}}>
            <Button variant="primary" onClick={handleShow}>
                {item.name}
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                dialogClassName="my-modal" style={{marginTop: "50px", alignSelf: "center", paddingBottom: "100px", overflow: "scroll"}}
            >
                <Modal.Body>
                    {item.image}
                </Modal.Body>
                <Modal.Footer>
                    <a href={item.link} download>Télécharger</a>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default GoogleMapItem;