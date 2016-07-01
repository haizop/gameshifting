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
      board: {},
      users: {}
    }
  }

  componentDidMount() {
    this.setTestState();
  }

  // componentDidMount() {
  //   this.getGameState();
  // }

  getGameState() {
    $.getJSON('/v1/game_states/show.json').then((gameState) => {
      this.setState({ ...gameState, loaded: true });
    });
    // $.ajax({
    //   method: 'GET',
    //   dataType: 'json',
    //   contentType: 'application/json',
    //   url: '/v1/game_states/show',
    //   success: (gameState) => {
    //     this.setState({ board: gameState.board, users: gameState.users, loaded: true });
    //   }
    // });
  }

  postGameState(gameState) {
    var xhr = $.ajax({
      method: 'POST',
      data: JSON.stringify(gameState),
      url: '/v1/game_states',
      success: console.log('success'),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  toggleDynamic(dynamicId) {
    const newPanelGroups = this.state.board.panelGroups.map((panelGroup) => {
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

    const newBoard = this.state.board;
    newBoard.panelGroups = newPanelGroups;

    this.setState({board: newBoard});
    this.postGameState(this.state);
  }

  render() {
    if (this.state.loaded === true){
      return(
        <Container fluid>
          <Row className="game">
            <Col xs="12">
              <Board panelGroups={this.state.board.panelGroups} toggleDynamic={this.toggleDynamic.bind(this)}/>
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

  setTestState() {
    const testState = {
      board: {
        name: "GameShifting",
        panelGroups: {
          0: {
            id: 1,
            placement: {row: 1, order: 1},
            name: "Creative Mode",
            description: "test panel group 1",
            panels: {
              0: {
                id: 1,
                placement: {row: 1, order: 1},
                name: "Meta",
                description: "",
                dynamics: {
                  0: {id: 1, order: 1, name: "Open", description: "on the ground", active: "false"},
                  1: {id: 2, order: 2, name: "Prepare", description: "on your feet", active: "false"},
                  2: {id: 3, order: 3, name: "Transition", description: "across the room", active: "false"},
                  3: {id: 4, order: 4, name: "Break", description: "across the room", active: "false"}
                }
              },
              1: {
                id: 2,
                placement: {row: 1, order: 2},
                name: "Broaden",
                description: "",
                dynamics: {
                  0: {id: 5, order: 1, name: "Gather", description: "on the ground", active: "false"},
                  1: {id: 6, order: 2, name: "Explore", description: "on your feet", active: "false"},
                  2: {id: 7, order: 3, name: "Engage", description: "across the room", active: "false"},
                  3: {id: 8, order: 4, name: "Generate", description: "across the room", active: "false"}
                }
              },
              2: {
                id: 3,
                placement: {row: 1, order: 3},
                name: "Transform",
                description: "formal/informal?",
                dynamics: {
                  0: {id: 9, order: 1, name: "Listen / Express", description: "on the ground", active: "false"},
                  1: {id: 10, order: 2, name: "Teach / Learn", description: "on your feet", active: "false"},
                  2: {id: 11, order: 3, name: "Reframe", description: "across the room", active: "false"},
                  3: {id: 12, order: 4, name: "Deepen", description: "across the room", active: "false"}
                }
              },
              3: {
                id: 4,
                placement: {row: 1, order: 4},
                name: "Narrow",
                description: "formal/informal?",
                dynamics: {
                  0: {id: 13, order: 1, name: "Select", description: "on the ground", active: "false"},
                  1: {id: 14, order: 2, name: "Filter", description: "on your feet", active: "false"},
                  2: {id: 15, order: 3, name: "Priortize", description: "across the room", active: "false"},
                  3: {id: 16, order: 4, name: "Vote", description: "across the room", active: "false"}
                }
              },
              4: {
                id: 5,
                placement: {row: 1, order: 5},
                name: "End",
                description: "formal/informal?",
                dynamics: {
                  0: {id: 17, order: 1, name: "Complete", description: "on the ground", active: "false"},
                  1: {id: 18, order: 2, name: "Close", description: "on your feet", active: "false"},
                  2: {id: 19, order: 3, name: "Evaluate", description: "across the room", active: "false"},
                  3: {id: 20, order: 4, name: "Reflect", description: "across the room", active: "false"}
                }
              }
            }
          },
          1: {
            id: 2,
            name: "Conversation Dynamics",
            description: "test panel group 2",
            placement: {row: 2, order: 1},
            panels: {
              0: {
                id: 6,
                placement: {row: 1, order: 1},
                name: "Time Management",
                description: "body position",
                dynamics: {
                  0: {id: 21, order: 3, name: "Start: On Time", description: "on the ground", active: "false"},
                  1: {id: 22, order: 1, name: "Start: Attendence ", description: "on your feet", active: "false"},
                  2: {id: 23, order: 2, name: "End: On Time", description: "across the room", active: "false"},
                  3: {id: 24, order: 2, name: "End: When Done", description: "across the room", active: "false"}
                }
              },
              1: {
                id: 7,
                placement: {row: 1, order: 1},
                name: "Content Source",
                description: "body position",
                dynamics: {
                  0: {id: 25, order: 3, name: "From Agenda", description: "on the ground", active: "false"},
                  1: {id: 26, order: 1, name: "Emergent", description: "on your feet", active: "false"},
                  2: {id: 27, order: 2, name: "Scrum", description: "across the room", active: "false"},
                  3: {id: 28, order: 2, name: "Change Up", description: "across the room", active: "false"}
                }
              },
              2: {
                id: 8,
                placement: {row: 1, order: 2},
                name: "Roles",
                description: "how we manage who speaks now",
                dynamics: {
                  0: {id: 29, order: 3, name: "Game Master", description: "one at a time", active: "false"},
                  1: {id: 30, order: 2, name: "Facilitator", description: "joyful chaos", active: "false"},
                  2: {id: 31, order: 1, name: "Stack Keeper", description: "stack keeper makes list", active: "false"},
                  3: {id: 32, order: 2, name: "Narrator", description: "joyful chaos", active: "false"}
                }
              },
              3: {
                id: 9,
                placement: {row: 1, order: 2},
                name: "Interaction",
                description: "how we manage who speaks now",
                dynamics: {
                  0: {id: 33, order: 3, name: "Babble", description: "one at a time", active: "false"},
                  1: {id: 34, order: 2, name: "Sub-Groups", description: "joyful chaos", active: "false"},
                  2: {id: 35, order: 1, name: "Partners", description: "stack keeper makes list", active: "false"},
                  3: {id: 36, order: 2, name: "Jump-In", description: "joyful chaos", active: "false"},
                  4: {id: 37, order: 2, name: "Circle", description: "joyful chaos", active: "false"},
                  5: {id: 38, order: 2, name: "Breathe First", description: "joyful chaos", active: "false"},
                  6: {id: 39, order: 2, name: "Listening Stick", description: "joyful chaos", active: "false"}
                }
              }
            }
          }
        }
      },
      users: {
        0: {
          id: 1,
          name: "Haiz",
          role: "game master"
        },
        1: {
          id: 2,
          name: "Peanut",
          role: "food beggar"
        },
        2: {
          id: 3,
          name: "Maggie",
          role: "queen"
        }
      },
      loaded: true
    };
    this.setState({...testState});
  }
}

export default Game;
