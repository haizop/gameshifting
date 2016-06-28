import React from 'react';
import Dynamic from './dynamic';
import {  Card, CardText, CardBlock, CardTitle, CardSubtitle } from 'reactstrap';

const Panel = (props) => {
  const orderedDynamics = props.dynamics.sort(function (a, b) {
    if (a.order > b.order ) {
      return 1;
    }
    if (a.order < b.order ) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  const dynamics = orderedDynamics.map((dynamic) => {
    return (<Dynamic
             key={dynamic.id}
             name={dynamic.name}
             description={dynamic.description} />);
  });

  return (
    <Card>
      <CardBlock>
        <CardTitle>{props.name}</CardTitle>
        {dynamics}
      </CardBlock>
    </Card>
  );
}

export default Panel;
