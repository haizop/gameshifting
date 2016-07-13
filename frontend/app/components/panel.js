import React from 'react';
import Dynamic from './dynamic';
import ClearButton from './clear-button';
import { Card, CardBlock, CardTitle } from 'reactstrap';

const Panel = (props) => {

  const dynamics = props.dynamics.map((dynamic) => {
    return (<Dynamic
      key={dynamic.id}
      id={dynamic.id}
      name={dynamic.name}
      description={dynamic.description}
      active={dynamic.active}
      toggleDynamic={props.toggleDynamic} />);
  });

  return (
    <Card block>
      <CardTitle>{props.name}</CardTitle>
      <ClearButton
        clearPanel={props.clearPanel}
        panelId={props.id} />
      {dynamics}
    </Card>
  );
}

export default Panel;
