import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from '../Modals/Modal'

function DataTable(props){
    const deleteItem = id => {
        let confirmDelete = window.confirm("Delete Item forever...")
        if (confirmDelete) {
            fetch("https://jsonplaceholder.typicode.com/posts/2", {
                method: "Delete",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id })
            })
            .then(response => response.json())
            .then(item => {
                props.deleteItemState(id)
            })
            .catch(err => console.log(err.message))
        }
    }


    const items = props.items.map(item => { 
        console.log("item.-----", item)
        return (
            <tr key={item}>   
            {console.log("item..", item)}             
                <th scope="row">{item.id}</th>
                    <td>{item.userId}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    <td>
                    <div style={{ width: "110px" }}>
                        <ModalForm buttonLabel="Edit" item={item} updateState={props.updateState} />
                        {' '}
                        <Button color="danger" onClick={() => deleteItem(item.id)}>Del</Button>
                    </div>
                </td>
            </tr>
        )
    })

    return (
        <Table responsive hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>UserId</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {items}
            </tbody>
        </Table>
    )
}


export default DataTable;
