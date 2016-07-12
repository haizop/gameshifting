import React from 'react';
import Dynamic from './dynamic';
import { Card, CardBlock, CardTitle } from 'reactstrap';

const Panel = (props) => {

  const dynamics = Object.keys(props.dynamics).map(key => props.dynamics[key]).map((dynamic) => {
    return (<Dynamic
      key={dynamic.id}
      id={dynamic.id}
      name={dynamic.name}
      description={dynamic.description}
      active={dynamic.active}
      {...props} />);
  });

  return (
    <Card block>
      <CardTitle>{props.name}</CardTitle>
      
      {dynamics}
    </Card>
  );
}

export default Panel;
