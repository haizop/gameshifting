import React from 'react';
import Board from './board';
import Sidebar from './sidebar';
import { Container, Col, Row } from 'reactstrap';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.gameState
  }


  toggleDynamic(dynamicId) {
    const newPanelGroups = this.state.board.panelGroups.map((panelGroup) => {
      panelGroup.panels.map((panel) => {
        panel.dynamics.map((dynamic) => {
          if (dynamic.id === dynamicId) {
            dynamic.active === true ? dynamic.active = false : dynamic.active = true;
          }
          return dynamic;
        });
        return panel;
      });
      return panelGroup;
    });

    const newBoard = this.state.board
    newBoard.panelGroups = newPanelGroups

    this.setState({board: newBoard})
  }

  render() {
    return(
      <Container fluid>
        <Row>
          <Col xs="12" md="9" lg="10">
            <Board panelGroups={this.state.board.panelGroups} toggleDynamic={this.toggleDynamic.bind(this)}/>
          </Col>
          <Col xs="12" md="3" lg="2">
            <Sidebar users={this.state.users} width="3" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Game;
