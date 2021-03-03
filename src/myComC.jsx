import React from 'react';
import { FirstName } from './App';

export default function MyComC() {
    return (
        <div>
            <FirstName.consumer>
                {(fname)=>{
                    return <h1>I am the Beast {fname}</h1>;
                }}
            </FirstName.consumer>
            
        </div>
    )
}
