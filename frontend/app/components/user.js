import React from 'react';
import { CardText } from 'reactstrap';

const User = (props) => {
  const user = props;

  return(
    <CardText>
      {user.name}
    </CardText>
  );
}

export default User;
