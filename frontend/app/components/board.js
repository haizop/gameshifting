import React from 'react';
import PanelGroup from './panel-group';
import { Col } from 'reactstrap';

const Board = (props) => {

  const panelGroups = Array.from(props.panelGroups).map((panelGroup) => {
    return (<PanelGroup
      key={panelGroup.id}
      name={panelGroup.name}
      placement={panelGroup.placement}
      description={panelGroup.description}
      panels={panelGroup.panels}
      toggleDynamic={props.toggleDynamic} />);
  });

  return(
    <div className="board">
      {panelGroups}
    </div>
  );
}

Board.propTypes = {
  panelGroups: React.PropTypes.array
}

Board.defaultProps = {
  panelGroups: []
}

export default Board;
