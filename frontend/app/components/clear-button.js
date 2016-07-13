import React from 'react';
import { Button } from 'reactstrap';

const ClearButton = (props) => {

  return (
    <Button color="primary" onClick={() => {props.handleClick(props.panelId)}}>Clear Dynamics</Button>
  );
}

export default ClearButton;
