import React, { useState } from 'react'
import List from "./List";

export default function TodoList() {
    const [item,setItem]= useState("");
    const [newItem,setNewItem]= useState([]);

    const getValue = (e)=>{
        setItem(e.target.value);
    }

    const setList = ()=>{
        setNewItem( (prev)=>{
            return [...prev, item]
        })
        setItem(" ")
    }
    

    return (
        <div className="wrapper">
           <div className="container">
            <div className="card" style={{width:400+'px'}}>
                    <div className="card-body">
                        <h4 className="card-title">Todo List</h4>
                        <div className="input-group mb-3">
                            <input type="text" value={item} className="form-control" placeholder="Search" onChange={getValue}/>
                            <div className="input-group-append">
                                <button className="btn btn-success" type="submit" onClick={setList}>Create</button>
                            </div>
                        </div>

                        {
                            newItem.map( (val,ind)=>{
                                return <List text={val} key={ind}/>
                            })
                        }

                        
                    </div>
                </div>
           </div>
        </div>
    )
}
