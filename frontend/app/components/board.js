import React from 'react';
import PanelGroup from './panel-group';
import { Col } from 'reactstrap';
import $ from 'jquery';


const Board = (props) => {

  const panelGroups = props.panelGroups.map((panelGroup) => {
    return (<PanelGroup
      key={panelGroup.id}
      name={panelGroup.name}
      placement={panelGroup.placement}
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
  panelGroups: React.PropTypes.object
}

Board.defaultProps = {
  panelGroups: {}
}

export default Board;
