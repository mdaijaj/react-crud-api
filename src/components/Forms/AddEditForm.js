import e from 'cors';
import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function AddEditForm(props){
    const[form, setValues] = useState({
        id: "",
        title: "",
        body: "",
        userId: 1
    })


    const onChange = e => {
        setValues({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitFormAdd = e => {
        console.log("form", form)
        e.preventDefault();
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: form.id,
                title: form.title,
                body:   form.body,
                userId: form.userId
            })
        })
        .then(response => response.json())
        .then(item => {
            // console.log("item", item)
            console.log(Array.isArray([item]))
            if (Array.isArray([item])) {
                // console.log("item......", item)
                props.addItemToState(item[0]);
                props.toggle()
            } else {
                console.log("failure..")
            }
        })
        .catch(err => {
            console.log(err.message)
        })
    }


    const submitFormEdit = e => {
        // console.log(this.state.id)
        e.preventDefault()
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: form.title,
                body: form.body,
                userId: form.userId
            })
        })
        .then(response => response.json())
        .then(item => {
            console.log("item,...", item)
            console.log("king khan", Array.isArray([item]))
            if (Array.isArray((item))) {
                props.addItemToState(item[0])
                props.toggle()
        } else {
            console.log("failure")
        }
    })
    .catch(err => console.log(err))
}


useEffect(() => {
    if(props.item){
        const {id, title, body, userId} = props.item
        setValues({id, title, body, userId})
    } 
}, [])

    return (
        <Form onSubmit={props.item ? submitFormEdit : submitFormAdd}>
            <FormGroup>
                <Label for="userId">userId</Label>
                <Input type="number" name="userId" id="userId" onChange={onChange} value={form.userId === null ? '' : form.userId} />
            </FormGroup>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input type="text" name="title" id="title" onChange={onChange} value={form.title === null ? '' : form.title} />
            </FormGroup>
            <FormGroup>
                <Label for="body">Body</Label>
                <Input type="text" name="body" id="body" onChange={onChange} value={form.body === null ? '' : form.body} />
            </FormGroup>
            <FormGroup>
                <Label for="id">Id</Label>
                <Input type="number" name="id" id="id" onChange={onChange} value={form.id === null ? '' : form.id} placeholder="ex. 555-555-5555" />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    )
}


export default AddEditForm; 