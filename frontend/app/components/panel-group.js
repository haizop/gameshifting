import React from 'react';
import Panel from './panel';
import { Card, CardDeck, CardHeader } from 'reactstrap';

const PanelGroup = (props) => {

  const panels = props.panels.map((panel) => {
    return (<Panel
      key={panel.id}
      id={panel.id}
      name={panel.name}
      description={panel.description}
      dynamics={panel.dynamics}
      toggleDynamic={props.toggleDynamic}
      clearPanel={props.clearPanel} />);
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

PanelGroup.propTypes = {
  name: React.PropTypes.string,
  description: React.PropTypes.string,
  panels: React.PropTypes.array,
  toggleDynamic: React.PropTypes.func,
  clearPanel: React.PropTypes.func
}

PanelGroup.defaultProps = {
  name: '',
  description: '',
  panels: [],
  toggleDynamic: () => {},
  clearPanel: () => {},
}

export default PanelGroup;
