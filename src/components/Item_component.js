import React, { Component } from 'react';
// import PropTypes from 'prop-types'

export default class Item extends Component {
  state = {
    isChecked: false,
  }
  
	toggleCheckboxChange = () => {
    const { handleCheckboxChange, ItemName } = this.props;

		this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
			}
      ));
      
      handleCheckboxChange(ItemName);
    }
    
    render() {
      const { ItemName } = this.props;
      const { isChecked } = this.state;
      
      return (
        <div className ="item">
				<label>
					<input
					type="checkbox"
					value={ItemName}
					checked={isChecked}
          onChange={this.toggleCheckboxChange}
					/>
					{ItemName}
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