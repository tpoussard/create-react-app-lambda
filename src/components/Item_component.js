import React, { Component } from 'react';
// import PropTypes from 'prop-types'

export default class Item extends Component {

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, itemName } = this.props;
    handleCheckboxChange(itemName);
  }

  render() {
    const { itemName, checkedItem } = this.props;

    return (
      <div className="item">
        <label>
          <input
            type="checkbox"
            value={itemName}
            checked={checkedItem}
            onChange={this.toggleCheckboxChange}
          />
          {itemName}
        </label>
      </div>
    )
  }
}

/*
Item.propTypes = {
  ItemName: PropTypes.string.isRequired,
	handleCheckboxChange: PropTypes.func.isRequired,
};
*/