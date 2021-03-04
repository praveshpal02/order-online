import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props)=> {
    const [note, setNote] = useState({
        title:'',
        content:'',
    });

    const InputEvent = (e)=>{
        const {name, value}= e.target;

        setNote( (prev)=>{
            return {
                ...prev,
                [name]:value,
            }
        })

    }

    const addItem = ()=>{
        props.passNote(note);
        setNote({
            title:'',
            content:''
        })
    }

    return (
        <div className="main-note">
            <form className="form-wrap">

                <input 
                    value={note.title}
                    name="title"
                    onChange={InputEvent}
                    className="form-control note-title"
                    type="text"
                    placeholder="Title"
                    autoComplete="off"/>

                <textarea 
                    value={note.content}
                    name="content"
                    onChange={InputEvent} 
                    className="form-control" 
                    placeholder="write a note...">
                </textarea>
                
                <Button variant="contained" color="secondary" onClick={addItem}>
                    <AddIcon className="plus-btn"></AddIcon>
                </Button>
            </form>
        </div>
    )
}


export default CreateNote;