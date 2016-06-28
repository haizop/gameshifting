import React from 'react';
import Panel from './panel';

const PanelGroup = (props) => {

  const panelWidth = props.width / props.panels.length;

  const orderedPanels = props.panels.sort(function (a, b) {
    if (a.placement.order > b.placement.order ) {
      return 1;
    }
    if (a.placement.order < b.placement.order ) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  const panels = orderedPanels.map((panel) => {
    return (<Panel
             key={panel.id}
             name={panel.name}
             description={panel.description}
             dynamics={panel.dynamics} />);
  });

  return(
    <div className="card-deck">
      {panels}
    </div>

  );
}

export default PanelGroup;
