import React from 'react';
import Dynamic from './dynamic';
import { Card, CardBlock, CardTitle } from 'reactstrap';

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
      description={dynamic.description}
      active={dynamic.active} />);
  });

  return (
    <Card block>
      <CardTitle>{props.name}</CardTitle>
      {dynamics}
    </Card>
  );
}

export default Panel;
