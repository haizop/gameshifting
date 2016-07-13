import React from 'react';
import $ from 'jquery';
import Board from './board';
import Sidebar from './sidebar';
import { Container, Col, Row } from 'reactstrap';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      board: [],
      users: []
    }
  }

  // componentDidMount() {
  //   this.setTestStateArr();
  // }

  componentDidMount() {
    this.getGameState();
  }

  clearPanel(panelId){
    const newBoard = this.state.board
    newBoard.panelGroups = this.state.board.panelGroups.map((panelGroup) => {
      panelGroup.panels.map((panel) => {
        console.log(panelId);
        if (panel.id == panelId) {
          panel.dynamics.map((dynamic) => {
            dynamic.active = "false";
            return dynamic;
          });
        } else { return panel.dynamics; }
        return panel;
      });
      return panelGroup;
    });

    this.setState({board: newBoard});
    this.postGameState(this.state);
  }

  getGameState() {
    $.ajax({
      method: 'GET',
      dataType: 'json',
      url: '/v1/game_states/show',
      success: (gameState) => {
        this.setState({ ...gameState, loaded: true });
      }
    });
  }

  postGameState(gameState) {
    $.ajax({
      method: 'POST',
      contentType: 'application/json; charset=UTF-8',
      data: JSON.stringify(gameState),
      url: '/v1/game_states',
      success: console.log('state posted'),
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  toggleDynamic(dynamicId) {
    const newBoard = this.state.board
    newBoard.panelGroups = this.state.board.panelGroups.map((panelGroup) => {
      panelGroup.panels.map((panel) => {
        panel.dynamics.map((dynamic) => {
          if (dynamic.id === dynamicId) {
            dynamic.active === "true" ? dynamic.active = "false" : dynamic.active = "true";
          }
          return dynamic;
        });
        return panel;
      });
      return panelGroup;
    });

    this.setState({board: newBoard});
    this.postGameState(this.state);
  }

  render() {
    if (this.state.loaded === true){
      return(
        <Container fluid>
          <Row className="game">
            <Col xs="12">
              <Board
                panelGroups={this.state.board.panelGroups}
                toggleDynamic={this.toggleDynamic.bind(this)}
                clearPanel={this.clearPanel.bind(this)} />
            </Col>
            {/*<Col xs="12" md="3" lg="2">
              <Sidebar users={this.state.users} width="3" />
            </Col>*/}
          </Row>
        </Container>
      );
    } else {
      return <div>Loading...</div>;
    }
  }

  setTestStateArr() {
    const testState = {
      board: {
        name: "GameShifting",
        panelGroups: [
          {
            id: 1,
            placement: {row: 1, order: 1},
            name: "Creative Mode",
            description: "test panel group 1",
            panels: [
              {
                id: 1,
                placement: {row: 1, order: 1},
                name: "Meta",
                description: "",
                dynamics: [
                  {id: 1, order: 1, name: "Open", description: "on the ground", active: "false"},
                  {id: 2, order: 2, name: "Prepare", description: "on your feet", active: "false"},
                  {id: 3, order: 3, name: "Transition", description: "across the room", active: "false"},
                  {id: 4, order: 4, name: "Break", description: "across the room", active: "false"}
                ]
              },
              {
                id: 2,
                placement: {row: 1, order: 2},
                name: "Broaden",
                description: "",
                dynamics: [
                  {id: 5, order: 1, name: "Gather", description: "on the ground", active: "false"},
                  {id: 6, order: 2, name: "Explore", description: "on your feet", active: "false"},
                  {id: 7, order: 3, name: "Engage", description: "across the room", active: "false"},
                  {id: 8, order: 4, name: "Generate", description: "across the room", active: "false"}
                ]
              },
              {
                id: 3,
                placement: {row: 1, order: 3},
                name: "Transform",
                description: "formal/informal?",
                dynamics: [
                  {id: 9, order: 1, name: "Listen / Express", description: "on the ground", active: "false"},
                  {id: 10, order: 2, name: "Teach / Learn", description: "on your feet", active: "false"},
                  {id: 11, order: 3, name: "Reframe", description: "across the room", active: "false"},
                  {id: 12, order: 4, name: "Deepen", description: "across the room", active: "false"}
                ]
              },
              {
                id: 4,
                placement: {row: 1, order: 4},
                name: "Narrow",
                description: "formal/informal?",
                dynamics: [
                  {id: 13, order: 1, name: "Select", description: "on the ground", active: "false"},
                  {id: 14, order: 2, name: "Filter", description: "on your feet", active: "false"},
                  {id: 15, order: 3, name: "Priortize", description: "across the room", active: "false"},
                  {id: 16, order: 4, name: "Vote", description: "across the room", active: "false"}
                ]
              },
              {
                id: 5,
                placement: {row: 1, order: 5},
                name: "End",
                description: "formal/informal?",
                dynamics: [
                  {id: 17, order: 1, name: "Complete", description: "on the ground", active: "false"},
                  {id: 18, order: 2, name: "Close", description: "on your feet", active: "false"},
                  {id: 19, order: 3, name: "Evaluate", description: "across the room", active: "false"},
                  {id: 20, order: 4, name: "Reflect", description: "across the room", active: "false"}
                ]
              }
            ]
          },
          {
            id: 2,
            name: "Conversation Dynamics",
            description: "test panel group 2",
            placement: {row: 2, order: 1},
            panels: [
              {
                id: 6,
                placement: {row: 1, order: 1},
                name: "Time Management",
                description: "body position",
                dynamics: [
                  {id: 21, order: 3, name: "Start: On Time", description: "on the ground", active: "false"},
                  {id: 22, order: 1, name: "Start: Attendence ", description: "on your feet", active: "false"},
                  {id: 23, order: 2, name: "End: On Time", description: "across the room", active: "false"},
                  {id: 24, order: 2, name: "End: When Done", description: "across the room", active: "false"}
                ]
              },
              {
                id: 7,
                placement: {row: 1, order: 1},
                name: "Content Source",
                description: "body position",
                dynamics: [
                  {id: 25, order: 3, name: "From Agenda", description: "on the ground", active: "false"},
                  {id: 26, order: 1, name: "Emergent", description: "on your feet", active: "false"},
                  {id: 27, order: 2, name: "Scrum", description: "across the room", active: "false"},
                  {id: 28, order: 2, name: "Change Up", description: "across the room", active: "false"}
                ]
              },
              {
                id: 8,
                placement: {row: 1, order: 2},
                name: "Roles",
                description: "how we manage who speaks now",
                dynamics: [
                  {id: 29, order: 3, name: "Game Master", description: "one at a time", active: "false"},
                  {id: 30, order: 2, name: "Facilitator", description: "joyful chaos", active: "false"},
                  {id: 31, order: 1, name: "Stack Keeper", description: "stack keeper makes list", active: "false"},
                  {id: 32, order: 2, name: "Narrator", description: "joyful chaos", active: "false"}
                ]
              },
              {
                id: 9,
                placement: {row: 1, order: 2},
                name: "Interaction",
                description: "how we manage who speaks now",
                dynamics: [
                  {id: 33, order: 3, name: "Babble", description: "one at a time", active: "false"},
                  {id: 34, order: 2, name: "Sub-Groups", description: "joyful chaos", active: "false"},
                  {id: 35, order: 1, name: "Partners", description: "stack keeper makes list", active: "false"},
                  {id: 36, order: 2, name: "Jump-In", description: "joyful chaos", active: "false"},
                  {id: 37, order: 2, name: "Circle", description: "joyful chaos", active: "false"},
                  {id: 38, order: 2, name: "Breathe First", description: "joyful chaos", active: "false"},
                  {id: 39, order: 2, name: "Listening Stick", description: "joyful chaos", active: "false"}
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
          role: "booger"
        },
        {
          id: 3,
          name: "Maggie",
          role: "queen"
        }
      ],
      loaded: true
    };
    this.setState({...testState});
  }
}

export default Game;
