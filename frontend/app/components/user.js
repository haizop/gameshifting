import React from 'react';
import { CardText } from 'reactstrap';

const User = (props) => {

  return(
    <CardText>
      {props.name} - {props.role}
    </CardText>
  );
}

export default User;
