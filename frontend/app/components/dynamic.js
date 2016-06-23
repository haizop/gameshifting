import React from 'react';

const Dynamic = (props) => {
  const dynamic = props.dynamic

  return (
    <li>
      {dynamic.name}
    </li>
  );
}

export default Dynamic;
