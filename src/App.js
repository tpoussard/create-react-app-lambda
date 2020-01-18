import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Category from './components/Category_component';
const jsonData = require('./fr.json');

class App extends Component {
  state = {
    data: [{
      "key": "Waiting for data …",
      "data": [
        {
          "key": "item"
        }]
    }]
  }
  componentDidMount() {
    // Call our fetch function below once the component mounts
    /*
    this.callBackendAPI()
    .then(res => this.setState({ data: res }))
    .catch(err => console.log(err));
    */
    if (!localStorage.getItem('categories')) {
      this.setState({ data: jsonData.categories })
      localStorage.setItem('categories', JSON.stringify(jsonData.categories))
    } else {
      this.setState({ data: JSON.parse(localStorage.getItem('categories')) })
    }
    // console.log(localStorage)
  }
  /*
  callBackendAPI = async () => {
      let body = Error('could not fetch data');
      try {
        const response = await fetch('http://checkngo.ighilr.fr/api/items/');
        body = await response.json();
        const now = new Date();
        console.log("Data has been fetched !", now);
  
      } catch (error) {
        console.error("Could'nt fetch data", error)
        // if (response.status !== 200) {
        //   throw Error(body.message);
        // }
      }
      return body;
    }
    */


  createCategoryElement = categoryName => (
    <Category
      CategoryName={categoryName}
      data={this.getCategoryData(categoryName)}
      key={categoryName}
    />
  )

  filterCategories = () => {
    const { data } = this.state;
    console.log('data', data)
    if (data && data.length > 0) {
      return [...new Set(data.map(item => item.key))];
      // return [...new Set(data.map(item => item.category_name))];
    }
  }

  getCategoryData = (categoryName) => this.state.data
    .filter(cat => cat.key === categoryName)[0].data
    .map(obj => obj.key);

  createCategoryElements = () => (
    this.filterCategories().map(this.createCategoryElement)
  )

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className='App-title'>Let's pack !</h1>
        </header>
        <div id='App-form' data={data}>
          {this.createCategoryElements()}
        </div>
      </div>
    );
  }
}

export default App;
