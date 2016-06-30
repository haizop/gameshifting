import React from 'react';

class Switch extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    e.preventDefault();
    if(this.props.enabled) {
      this.props.onClick(parseInt(this.props.dynamicId));
    }
  };

  render() {
    const className = ['switch', this.props.className, (this.props.on === "true" ? 'on ' : ''), (this.props.enabled ? '' : 'disabled ')].join(' ');
    return (
      <div className={className} onClick={this.handleClick}>
        <div className="switch-toggle" children={this.props.children}></div>
      </div>
    );
  }
}

Switch.propTypes = {
  on: React.PropTypes.string,
  onClick: React.PropTypes.func,
  enabled: React.PropTypes.bool,
  className: React.PropTypes.string,
  dynamicId: React.PropTypes.number
};

Switch.defaultProps = {
  on: false,
  onClick: () => {},
  enabled: true,
  className: '',
};

export default Switch;
