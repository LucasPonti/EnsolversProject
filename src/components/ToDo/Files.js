import React, {Component} from 'react'
import './Files.css'
import Todo from './ToDo';
import FileList from './FileList'

class Files extends Component {
 constructor(){
     super();
     //Estado inicial
     this.state = {
         files: '',
         items: []
     };
 }

 componentWillMount(){
     this.setState({
         items: [
             {
                 id: Math.random() * (99999-10000),
                 files: 'Tareas',
                 items: <Todo/>
             }
         ]
     })
 }

 handleOnChange = e => {
     const {target: {value}} = e;

     this.setState({
         files: value
     });
 }

 handleOnSubmit = e => {
     e.preventDefault();

     if (this.state.files.trim() !== '') {
        this.setState({
            files: '',
            items: [
                ...this.state.items, 
                {
                    id: Math.random() * (999999-100000),
                    files: this.state.files
                }
            ]
        })
    }
 }

 removeFiles = id => {
     const filteredFiles = this.state.items.filter(
         files => files.id !== id
     );
     this.setState({
         items: filteredFiles
     });
 }



 render() {
     return (
         <div className='Files'>
             <h1>Nueva Carpeta: </h1>
             <form onSubmit={this.handleOnSubmit}>
                <input value={this.state.files} onChange={this.handleOnChange}/>
             </form>
             <FileList items={this.state.items} removeFiles={this.removeFiles}/>
         </div>
     )
 }

}



export default Files;
