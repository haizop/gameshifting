import React from 'react';

const Dynamic = (props) => {
  const dynamic = props;
  return (
    <li className="dynamic">
      {dynamic.name}
    </li>
  );
}

export default Dynamic;
