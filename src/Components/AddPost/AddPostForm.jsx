import React, { useState } from 'react';


const AddPostForm = (props) => {

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            name: name,
            date: date,
            message: message
        };
        console.log(newPost)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
            <label>Date</label>
            <input type='date' value={date} onChange={(event) => setDate(event.target.value)} />
            <label>Post</label>
            <input type='text' value={message} onChange={(event) => setMessage(event.target.value)} />  
            <button type='submit'>Create</button>
        </form>
     );
}
 
export default AddPostForm;