import React from 'react';
import Panel from './panel';

class Board extends React.Component {
  constructor() {
    super();
  }

  buildPanels() {
    const panelList = [
      {
        id: 1,
        placement: {row: 1, order: 1},
        name: "Body",
        description: "body position",
        dynamics: [
          {id: 1, order: 3, name: "sitting", description: "on the ground"},
          {id: 2, order: 1, name: "standing", description: "on your feet"},
          {id: 3, order: 2, name: "dancing", description: "across the room"}
        ]
      },
      {
        id: 2,
        placement: {row: 1, order: 2},
        name: "Speaking",
        description: "how we manage who speaks now",
        dynamics: [
          {id: 1, order: 3, name: "circle", description: "one at a time"},
          {id: 2, order: 2, name: "jump-in", description: "joyful chaos"},
          {id: 3, order: 1, name: "stack", description: "stack keeper makes list"}
        ]
      }
    ];

    const orderedPanels = panelList.sort(function (a, b) {
      if (a.placement.order > b.placement.order ) {
        return 1;
      }
      if (a.placement.order < b.placement.order ) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });

    return orderedPanels.map((panel) => {
      return (<Panel
               key={panel.id}
               name={panel.name}
               description={panel.description}
               dynamics={panel.dynamics} />);
    });
  }

  render() {
    const panels = this.buildPanels()

    return(
      <div className="board">
        {panels}
      </div>
    );
  }
}

export default Board;
