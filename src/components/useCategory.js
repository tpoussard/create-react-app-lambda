import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types'
import Item from './Item_component';

function Category(props) {

  const [checkedBoxes, setCheckedBoxes] = useState(new Set())

  useEffect(() => {
    const previousItems = localStorage.getItem(props.CategoryName)
    if (previousItems) {
      setCheckedBoxes(new Set(JSON.parse(previousItems)));
    }
  }, [props.CategoryName])

  const toggleCheckbox = itemName => {
    const newValue = new Set([...checkedBoxes])
    if (checkedBoxes.has(itemName)) {
      newValue.delete(itemName);
    } else {
      newValue.add(itemName);
    }
    setCheckedBoxes(newValue);
    localStorage.setItem(props.CategoryName, JSON.stringify([...newValue]))
  }

  const createItemElement = itemName => (
    <Item
      itemName={itemName}
      handleCheckboxChange={toggleCheckbox}
      key={itemName}
      checkedItem={checkedItem(itemName)}
    />
  )

  const createItemElements = () => props.data.map(createItemElement);

  const checkedItem = (itemName) => checkedBoxes.has(itemName);

  return (
    <div id="App-form">
      <div className="container">
        <div className="category">
          <form className="inner">
            <h3> {props.CategoryName} </h3>
            {createItemElements(props.CategoryName)}
          </form>
        </div>
      </div>
    </div>
  )

}

export default Category;

/* Category.propTypes = {
  CategoryName: PropTypes.string.isRequired,
};
*/