import React from 'react';

class Product extends React.Component {
  render() {
    return (<div></div>)
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName) {
    if ( !props[propName] || typeof props[propName] !== 'number' || props[propName] <= 80 || props[propName] >= 300 ) {
      console.error()
    }
  }
};

module.exports = Product;
