import React from 'react';
import { CardText } from 'reactstrap';
import Switch from './switch'

const Dynamic = (props) => {
  const dynamic = props;

  return (
    <div className="input-group">
      <Switch on={dynamic.active} dynamicId={dynamic.id} onClick={dynamic.toggleDynamic} />
      <p>
        {dynamic.name}
      </p>
    </div>
  );
}

export default Dynamic;
