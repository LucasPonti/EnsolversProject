import React, {Component} from 'react';
import List from './List';
import './ToDo.css';

class Todo extends Component {
    constructor() {
        super();
        //Estado Inicial
        this.state = {
            task: '',
            items: []
        };
    }

    componentWillMount(){
        //Configuracion de tareas
        this.setState({
            items: []
        })
    }

    handleOnChange = e => {
        const {target: {value}} = e;
        //Actualiza el estado
        this.setState({
            task: value
        });
    }

    handleOnSubmit = e => {
        e.preventDefault();
        if (this.state.task.trim() !== '') {
            this.setState({
                task: '',
                items: [
                    ...this.state.items, 
                    {
                        id: Math.random() * (999999-100000),
                        task: this.state.task,
                        complete: false
                    }
                ]
            })
        }
    }

    markAsCompleted = id => {
        const foundTask = this.state.items.find(
            task => task.id === id
        );
        foundTask.complete = true;
        //Actualizar Estadp
        this.setState({
            items: [
                ...this.state.items,
                ...foundTask
            ]
        });
    };

    removeTask = id => {
        const filteredTasks = this.state.items.filter(
            task => task.id !== id
        );
        //Actualizar estado
        this.setState({
            items: filteredTasks
        });
    }


    render () {
        return (
            <div className='Todo'>
                <h1>Nueva Tarea: </h1>
                <form onSubmit={this.handleOnSubmit}>
                    <input value={this.state.task} onChange={this.handleOnChange}/>    
                </form>
                <List items={this.state.items} markAsCompleted={this.markAsCompleted} removeTask={this.removeTask}/>    
            </div>
        );
    }
}

export default Todo;