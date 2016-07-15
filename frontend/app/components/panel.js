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

  // const showClearButton = dynamics.reduce((isActive, nextDynamic) => {
  //   if (isActive.props.active == "true") {
  //     return true
  //   } else {return nextDynamic.props.active}
  // });
  //
  // console.log(showClearButton);

  return (
    <Card block>
      <CardTitle>
        {props.name}
        <ClearButton
          handleClick={props.clearPanel}
          targetId={props.id} />
      </CardTitle>
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
