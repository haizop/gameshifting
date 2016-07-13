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
        handleClick={props.clearPanel}
        panelId={props.id} />
      {dynamics}
    </Card>
  );
}

Panel.propTypes = {
  id: React.PropTypes.number,
  name: React.PropTypes.string,
  description: React.PropTypes.string,
  dynamics: React.PropTypes.array,
  toggleDynamic: React.PropTypes.func,
  clearPanel: React.PropTypes.func
}

Panel.defaultProps = {
  name: '',
  description: '',
  dynamics: [],
  toggleDynamic: () => {},
  clearPanel: () => {},
}

export default Panel;
