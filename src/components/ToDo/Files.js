import React, { Component } from 'react';
import './Files.css';
import Todo from './ToDo';
import FileList from './FileList';

class Files extends Component {
  constructor() {
    super();
    //Estado inicial
    this.state = {
      files: '',
      items: [],
    };
  }

  componentWillMount() {
    let items = [];
    const files = this;
    fetch('http://localhost:5500/v1/api/carpetas')
      .then((response) => response.json())
      .then((data) => {
        files.setState({
          items: data,
        });
      });
    this.setState({
      items: items,
    });
  }

  handleOnChange = (e) => {
    const {
      target: { value },
    } = e;

    this.setState({
      files: value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    if (this.state.files.trim() !== '') {
      fetch('http://localhost:5500/v1/api/carpetas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ files: this.state.files }),
      })
        .then((response) => response.json())
        .then((data) => {});
      this.setState({
        files: '',
        items: [
          ...this.state.items,
          {
            id: Math.random() * (999999 - 100000),
            files: this.state.files,
          },
        ],
      });
    }
  };

  removeFiles = (id) => {
    const filteredFiles = this.state.items.filter((files) => files.id !== id);
    this.setState({
      items: filteredFiles,
    });
  };

  render() {
    return (
      <div className="Files">
        <h1>Nueva Carpeta: </h1>
        <form onSubmit={this.handleOnSubmit}>
          <input value={this.state.files} onChange={this.handleOnChange} />
        </form>
        <FileList items={this.state.items} removeFiles={this.removeFiles} />
      </div>
    );
  }
}

export default Files;
