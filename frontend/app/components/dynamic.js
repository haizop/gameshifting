import React from 'react';
import { CardText } from 'reactstrap';
import Switch from './switch'

const Dynamic = (props) => {

  return (
    <div className="input-group">
      <Switch
        on={props.active}
        dynamicId={props.id}
        handleClick={props.toggleDynamic} />
      <p>
        {props.name}
      </p>
    </div>
  );
}

Dynamic.propTypes = {
  id: React.PropTypes.number,
  name: React.PropTypes.string,
  description: React.PropTypes.string,
  active: React.PropTypes.string,
  toggleDynamic: React.PropTypes.func,
}

Dynamic.defaultProps = {
  name: '',
  description: '',
  active: 'false',
  toggleDynamic: () => {}
}

export default Dynamic;
