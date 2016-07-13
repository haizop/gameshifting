import React from 'react';

const ClearButton = (props) => {

  return (
    <a aria-label="Clear Active Dynamics" onClick={() => {props.handleClick(props.targetId)}}>
      <i className="fa fa-toggle-off"></i>
    </a>
  );
}

ClearButton.propTypes = {
  handleClick: React.PropTypes.func,
  targetId: React.PropTypes.number
};

ClearButton.defaultProps = {
  handleClick: () => {}
};

export default ClearButton;
