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
             panels={panelGroup.panels}
             width={12} />);
  });

  return(
    <div className={"board col-xs-12 col-md-" + props.width}>
      {panelGroups}
    </div>
  );
}

export default Board;
