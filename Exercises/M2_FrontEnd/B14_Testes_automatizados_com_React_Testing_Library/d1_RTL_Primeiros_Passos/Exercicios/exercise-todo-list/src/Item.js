import React from 'react';
import PropTypes from 'prop-types'

function Item(props) {
  const { content, selectItem } = props
  return (
    <div className="Item" onClick={() => selectItem(content)}>
      {content}
    </div>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
}
