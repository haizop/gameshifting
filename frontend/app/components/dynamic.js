import React from 'react';

const Dynamic = (props) => {
  const dynamic = props;
  return (
    <p className="card-text">
      {dynamic.name}
    </p>
  );
}

export default Dynamic;
