import React from 'react';
import Board from './board';

class Game extends React.Component {
  constructor() {
    super();
  }

  buildBoard() {
    const gameState = {
      board: {
        panelGroups: [
          {
            id: 1,
            placement: {row: 1, order: 1},
            name: "Group 1",
            description: "test panel group 1",
            panels: [
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
              },
              {
                id: 3,
                placement: {row: 1, order: 3},
                name: "Roles",
                description: "formal/informal?",
                dynamics: [
                  {id: 1, order: 3, name: "facilitator", description: "take the reigns"},
                  {id: 2, order: 2, name: "stack-keeper", description: "stack keeper makes list"},
                  {id: 3, order: 1, name: "time master", description: "keep us on track"}
                ]
              }
            ]
          },
          {
            id: 2,
            name: "Group 2",
            description: "test panel group 2",
            placement: {row: 2, order: 1},
            panels: [
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
            ]
          }
        ]
      },
      roles: {},
      options: {}
    };

    return gameState.board
  }


  render() {
    const board = this.buildBoard()

    return(
      <div className="container-fluid">
        <Board panelGroups={board.panelGroups} width={12} />
      </div>
    );
  }
}

export default Game;
