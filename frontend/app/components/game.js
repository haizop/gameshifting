import React from 'react';
import Board from './board';
import Sidebar from './sidebar';
import { Container, Col, Row } from 'reactstrap';

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
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
      users: [
        {
          id: 1,
          name: "Haiz",
          role: "game master"
        },
        {
          id: 2,
          name: "Peanut",
          role: "food beggar"
        },
        {
          id: 3,
          name: "Maggie",
          role: "queen"
        }
      ],
      options: {}
    };
  }

  render() {
    return(
      <Container fluid>
        <Row>
          <Col xs="12" md="9">
            <Board panelGroups={this.state.board.panelGroups} />
          </Col>
          <Col xs="12" md="3">
            <Sidebar users={this.state.users} width="3" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Game;
