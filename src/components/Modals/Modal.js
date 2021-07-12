import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import AddEditForm from '../Forms/AddEditForm'


function ModalForm(props) {
    const [modal, setModal] = useState(false)
    const toggle = () => {
        setModal(!modal)
    }
    
    const closeBtn= <button className="close" onClick={toggle}>&times;</button>
    const lable= props.buttonLabel;

    let button=""
    let title=""

    if(lable==="Edit"){
        button= <Button
                    color="warning"
                    onClick={toggle}
                    style={{float: "left", marginRight:"10px"}}>{lable}
                </Button>
    }
    else{
        button= <Button
                    color="success"
                    onClick={toggle}
                    style={{float: "left", marginRight:"10px"}}>{lable}
                </Button>
        title = 'Add New Items'
    }


    return(
        <div>
        {button}
        <Modal isOpen={modal} toggle={toggle} className={props.className}>
            <ModalHeader toggle={toggle} close={closeBtn}>{title}</ModalHeader>
            <ModalBody>
            <AddEditForm
                addItemToState={props.addItemToState}
                updateState={props.updateState}
                toggle={toggle}
                item={props.item}
                value={props.item} />
            </ModalBody>
        </Modal>
        </div>
    )
}


export default ModalForm;