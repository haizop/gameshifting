import React from 'react';

const Switch = (props) => {

  const className = ['switch', ' ', (props.on === "true" ? 'on' : ''), (props.enabled ? '' : 'disabled')].join(' ');
  return (
    <div className={className} onClick={() => {props.handleClick(props.dynamicId)}}>
      <div className="switch-toggle"></div>
    </div>
  );
}

Switch.propTypes = {
  on: React.PropTypes.string,
  handleClick: React.PropTypes.func,
  enabled: React.PropTypes.bool,
  dynamicId: React.PropTypes.number
};

Switch.defaultProps = {
  on: false,
  handleClick: () => {},
  enabled: true,
  className: '',
};

export default Switch;
