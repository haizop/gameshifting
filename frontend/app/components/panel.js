import React from 'react';
import Dynamic from './dynamic';

const Panel = (props) => {
  const dynamics = props.dynamics

  return (
    <ol className="panel">
      {dynamics}
    </ol>
  );
}

export default Panel;
