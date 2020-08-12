import React from 'react';
import '../App.css';
//import ReactDOM from "react-dom";
import axios from 'axios';

export default class DisplayStrain extends React.Component {

  state = {
    strains: []
  }

  componentDidMount() {
    axios.get(`http://64.227.29.254/strains`)
      .then(res => {
        console.log(res.data);
        const strains = res.data;
        this.setState({ strains });
      })
  }

  render() {
    return (
      <ul>
        { this.state.strains.map(strain => <li key={strain.id}>{strain.id}</li>)}
      </ul>
    )
  }
}


