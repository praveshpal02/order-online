import { DeleteOutline } from '@material-ui/icons'
import React from 'react'

const Note = (props)=> {
    const deleteNote = ()=>{
        props.deleteItem(props.id);
    }
    return (
        <div className="note">
            <h5>{props.title} <span>{props.id}</span></h5>
            <p>{props.content}</p>
            <div className="text-right">
            <button className="btn btn-danger rounded" onClick={deleteNote}>
                <DeleteOutline></DeleteOutline>
            </button>
            </div> 
        </div>
    )
}

export default Note; 