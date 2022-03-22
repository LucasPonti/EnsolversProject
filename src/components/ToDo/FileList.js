import React from 'react';
import './FileList.css'
import cross from '../../shared/images/cross.png'
import Todo from './ToDo';
import carpeta from '../../shared/images/carpeta.png'

const List = props => (
    <ul>
        {props.items.map((item, key) => (
            <li key={key} className={`${item.completed ? 'completed' : 'pending'}`}>
            
            <div className='actions'>
            <div className='title'>
            <div>
            <img src={carpeta}/>{item.files}
            </div>
                <div>
                <span 
                    className='trash'
                    onClick={() => props.removeFiles(item.id)}>
                    <i className='trash'><img src={cross}/></i>
                </span>
                </div>
            </div>
            
            
                
                <div className='TodoContainer'>
                    <Todo/>
                </div>
                
            </div>
        </li>
        ))}  
    </ul>
);

export default List;