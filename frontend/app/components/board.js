import React from 'react';
import PanelGroup from './panel-group';
import { Col } from 'reactstrap';
import $ from 'jquery';


const Board = (props) => {

  const panelGroups = props.panelGroups.map((panelGroup) => {
    return (<PanelGroup
      key={panelGroup.id}
      name={panelGroup.name}
      description={panelGroup.description}
      panels={panelGroup.panels}
      toggleDynamic={props.toggleDynamic}
      clearPanel={props.clearPanel} />);
  });

  return(
    <div className="board">
      {panelGroups}
    </div>
  );
}

Board.propTypes = {
  name: React.PropTypes.string,
  panelGroups: React.PropTypes.array,
  toggleDynamic: React.PropTypes.func,
  clearPanel: React.PropTypes.func
}

Board.defaultProps = {
  name: '',
  panelGroups: [],
  toggleDynamic: () => {},
  clearPanel: () => {},
}

export default Board;
