import React from 'react';
import Panel from './panel';
import { Card, CardDeck, CardHeader } from 'reactstrap';

const PanelGroup = (props) => {

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
      dynamics={panel.dynamics}
      toggleDynamic={props.toggleDynamic} />);
  });

  return(
    <Card className="card-info">
      <CardHeader><h3 className="text-xs-center">{props.name}</h3></CardHeader>
      <CardDeck flex>
        {panels}
      </CardDeck>
    </Card>

  );
}

export default PanelGroup;
