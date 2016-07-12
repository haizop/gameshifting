import React from 'react';
import Panel from './panel';
import { Card, CardDeck, CardHeader } from 'reactstrap';

const PanelGroup = (props) => {

  const panels = Object.keys(props.panels).map(key => props.panels[key]).map((panel) => {
    return (<Panel
      key={panel.id}
      name={panel.name}
      description={panel.description}
      dynamics={panel.dynamics}
      {...props} />);
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
