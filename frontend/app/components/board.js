import React from 'react';
import PanelGroup from './panel-group';

const Board = (props) => {

  console.log("in board")

  const orderedPanelGroups = props.panelGroups.sort(function (a, b) {
    if (a.placement.order > b.placement.order ) {
      return 1;
    }
    if (a.placement.order < b.placement.order ) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  const panelGroups = orderedPanelGroups.map((panelGroup) => {
    return (<PanelGroup
             key={panelGroup.id}
             name={panelGroup.name}
             placement={panelGroup.placement}
             description={panelGroup.description}
             panels={panelGroup.panels} />);
  });

  return(
    <div className="panel-group">
      {panelGroups}
    </div>
  );
}

export default Board;
