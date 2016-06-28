import React from 'react';
import Dynamic from './dynamic';

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
    <div className="card">
      <div className="card-block">
        <h4 className="card-title">{props.name}</h4>
          {dynamics}
      </div>
    </div>
  );
}

export default Panel;
