import React from 'react';

export default class Switch extends React.Component {
  static propTypes = {
    on: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    enabled: React.PropTypes.bool,
    className: React.PropTypes.string
  };

  static defaultProps = {
    on: false,
    onClick: () => {},
    enabled: true,
    className: ''
  };

  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    e.preventDefault();
    if(this.props.enabled) {
      this.props.onClick(this.props.dynamicId);
    }
  };

  render() {
    const className = ['switch', this.props.className, (this.props.on ? 'on ' : ''), (this.props.enabled ? '' : 'disabled ')].join(' ');
    return (
      <div className={className} onClick={this.handleClick}>
        <div className="switch-toggle" children={this.props.children}></div>
      </div>
    );
  }
}
