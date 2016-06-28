import React from 'react';
import { CardText } from 'reactstrap';
import Switch from 'react-toggle-switch'

const Dynamic = (props) => {
  const dynamic = props;

  return (
    <div className="input-group">
      <Switch on={dynamic.active} onClick={dynamic.toggleDynamic(dynamic.id)} />
      <p>
        {dynamic.name}
      </p>
    </div>

  );
}

export default Dynamic;
