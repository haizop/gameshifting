import React from 'react';
import { CardText } from 'reactstrap';
import Switch from './switch'

const Dynamic = (props) => {

  return (
    <div className="input-group">
      <Switch
        on={props.active}
        dynamicId={props.id}
        toggleDynamic={props.toggleDynamic} />
      <p>
        {props.name}
      </p>
    </div>
  );
}

export default Dynamic;
