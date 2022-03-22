import React from 'react';
import './List.css'
import check from '../../shared/images/check.png'
import cross from '../../shared/images/cross.png'

const List = props => (
    <ul>
        {props.items.map((item, key) => (
            <li key={key} className={`${item.completed ? 'completed' : 'pending'}`}>
            
            <div className='actions'>
            <div className='fullContainer'>
            <div className='tasks'>
            {item.task}
            </div>  
            <div className='options'>
            <span 
                    className={item.completed ? 'hide' : 'done'} 
                    onClick={() => props.markAsCompleted(item.id)}>
                    <i className='check'><img src={check}/></i>
                </span>
                <span 
                    className='trash'
                    onClick={() => props.removeTask(item.id)}>
                    <i className='trash'><img src={cross}/></i>
                </span>
            </div>
            </div>   
            </div>
        </li>
        ))}  
    </ul>
);

export default List;