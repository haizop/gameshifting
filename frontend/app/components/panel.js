import React from 'react';
import Dynamic from './dynamic';

const Panel = (props) => {
  const dynamics = props.dynamics

  return (
    <ol>
      {dynamics}
    </ol>
  );
}

export default Panel;
