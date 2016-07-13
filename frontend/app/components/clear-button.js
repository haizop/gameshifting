import React from 'react';
import { Button } from 'reactstrap';

const ClearButton = (props) => {

  return (
    <Button color="primary" onClick={() => {props.handleClick(props.targetId)}}>Clear Dynamics</Button>
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
