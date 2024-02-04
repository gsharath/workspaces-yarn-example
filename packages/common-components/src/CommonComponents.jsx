import React from 'react';
// import PropTypes from 'prop-types';

const handleVariant = color => {
  switch (color) {
      case "primary":
          return "blue";
      case "secondary":
          return "brown";
      default:
          return "grey";
  }
};

const Button = (props) => {
  const {children, variant} = props;
    return (
        <button style={{backgroundColor: handleVariant(variant)}}>{children}</button>
    )
}

Button.defaultProps = {
  variant: 'primary'
}

// Button.propTypes = {
//   variant:  PropTypes.oneOf(['primary', 'secondary', 'teritiary']),
//   children: PropTypes.any
// }
export {Button};
