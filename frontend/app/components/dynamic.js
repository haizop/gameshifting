import React from 'react';
import { CardText } from 'reactstrap';

const Dynamic = (props) => {
  const dynamic = props;
  return (
    <CardText>
      {dynamic.name}
    </CardText>
  );
}

export default Dynamic;
