import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import Item from './Item_component';

export default class Category extends Component {
  state = {
    checkedBoxes: new Set()

  }

  componentDidMount() {
    const previousItems = localStorage.getItem(this.props.CategoryName)
    if (previousItems) {
      this.setState({ checkedBoxes: new Set(JSON.parse(previousItems)) })
    }
  }

  toggleCheckbox = itemName => {

    const newValue = new Set([...this.state.checkedBoxes])
    if (this.state.checkedBoxes.has(itemName)) {
      newValue.delete(itemName);
      this.setState({ checkedBoxes: newValue });
    } else {
      newValue.add(itemName);
      this.setState({ checkedBoxes: newValue });
    }
  }

  checkedItem = (itemName) => this.state.checkedBoxes.has(itemName);

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    localStorage.setItem(this.props.CategoryName, JSON.stringify([...this.state.checkedBoxes]))
  }

  createItemElement = itemName => (
    <Item
    itemName={itemName}
    handleCheckboxChange={this.toggleCheckbox}
    key={itemName}
    checkedItem={this.checkedItem(itemName)}
    />
    )
    
  createItemElements = () => {
    console.log(' inside createItemElements ', this.state.checkedBoxes)
    return this.props.data.map(this.createItemElement)
}

  render() {
    const { CategoryName } = this.props;

    return (
      <div id='App-form'>
        <div className="category">
          <h3> {CategoryName} </h3>
          <form className="inner" onSubmit={this.handleFormSubmit}>
            {this.createItemElements(CategoryName)}
            <button className="btn" type="submit">Save</button>
          </form>
        </div>
      </div>
    )
  }
}

/* Category.propTypes = {
  CategoryName: PropTypes.string.isRequired,
};
*/