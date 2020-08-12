import React, { Component } from 'react';
import '../App.css';
import ReactDOM from "react-dom";
import axios from 'axios';

export default class AddStrain extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            new_strain_name: '',
            id: '', 
        }
      }
      
      handleChange = event => {
        this.setState({ new_strain_name: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const addStrain = {
            new_strain_name: this.state.new_strain_name,
            id: '333'
        };
    
        axios.post(`http://64.227.29.254/strains/`, { addStrain: 'new_strain_name, id' })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
    
      render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Add New Strain:
                <input type="text" name="name" onChange={this.handleChange} />
              </label>
              <button type="submit">Add</button>
            </form>
          </div>
        )
      }
}


