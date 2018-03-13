import React, { Component } from "react";
import smartphone from "./smartphone.png";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { sendLog, setDirection, setMove } from "./actions";

class CanvasTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      1: "NORTH",
      2: "EAST",
      3: "SOUTH",
      4: "WEST",

      topCo: 580,
      leftCo: -250
    };
  }

  async onSaveLog() {
    var wayDirection = "";
    var way = this.props.direction;
    if (way.robotDirection == 1) {
      wayDirection = "NORTH";
    } else if (way.robotDirection == 2) {
      wayDirection = "EAST";
    } else if (way.robotDirection == 3) {
      wayDirection = "SOUTH";
    } else if (way.robotDirection == 4) {
      wayDirection = "WEST";
    }

    await console.log(this.props.forward, wayDirection);
    await this.props.sendLog(this.props.forward, this.props.direction);
  }

  async onTurnLeft(event) {
    if (this.props.direction.robotDirection > 1) {
      await this.props.setDirection(-1, -90);
    } else if ((this.props.direction.robotDirection = 1)) {
      await this.props.setDirection(+3, 270);
    }
  }

  async onTurnRight(event) {
    if (this.props.direction.robotDirection < 4) {
      await this.props.setDirection(1, 90);
    } else if ((this.props.direction.robotDirection = 4)) {
      await this.props.setDirection(-3, -270);
    }
  }

  onMove() {
    if (this.props.direction.robotDirection === 1) {
      if (this.props.forward.topCo >= 229) {
        this.props.setMove(-117, 0);
      }
    } else if (this.props.direction.robotDirection === 2) {
      if (this.props.forward.leftCo < 102) {
        this.props.setMove(0, 117);
      }
    } else if (this.props.direction.robotDirection === 3) {
      if (this.props.forward.topCo <= 570) {
        this.props.setMove(117, 0);
      }
    } else if (this.props.direction.robotDirection === 4) {
      if (this.props.forward.leftCo > -250) {
        this.props.setMove(0, -117);
      }
    }
    console.log(this.props.forward);
  }

  render() {
    return (
      <div className="table">
        <div>
          <Button color="info" onClick={this.onTurnLeft.bind(this)}>
            Left
          </Button>
          <Button outline color="danger" onClick={this.onMove.bind(this)}>
            Move
          </Button>
          <Button color="info" onClick={this.onTurnRight.bind(this)}>
            Right
          </Button>
        </div>
        <br />
        <hr />
        <div>
          <Button size="lg" color="success" onClick={this.onSaveLog.bind(this)}>
            SAVE
          </Button>
        </div>
        <img
          src={smartphone}
          className="robotLogo"
          alt="logo"
          style={{
            top: `${this.props.forward.topCo}px`,
            left: `${this.props.forward.leftCo}px`,
            transform: `rotate(${this.props.direction.rotation}deg)`
          }}
        />
        <div className="tableRow">
          <p className="tableLeft">Y</p>
          <ul className="flex-container">
            <li className="flex-item">5, 1</li>
            <li className="flex-item">5, 2</li>
            <li className="flex-item">5, 3</li>
            <li className="flex-item">5, 4</li>
            <li className="flex-item">5, 5</li>
            <li className="flex-item">4, 1</li>
            <li className="flex-item">4, 2</li>
            <li className="flex-item">4, 3</li>
            <li className="flex-item">4, 4</li>
            <li className="flex-item">4, 5</li>
            <li className="flex-item">3, 1</li>
            <li className="flex-item">3, 2</li>
            <li className="flex-item">3, 3</li>
            <li className="flex-item">3, 4</li>
            <li className="flex-item">3, 5</li>
            <li className="flex-item">2, 1</li>
            <li className="flex-item">2, 2</li>
            <li className="flex-item">2, 3</li>
            <li className="flex-item">2, 4</li>
            <li className="flex-item">2, 5</li>
            <li className="flex-item">1, 1</li>
            <li className="flex-item">1, 2</li>
            <li className="flex-item">1, 3</li>
            <li className="flex-item">1, 4</li>
            <li className="flex-item">1, 5</li>
          </ul>
        </div>
        <p className="tableRight">X</p>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  direction: state.direction,
  forward: state.forward
});

const mapDispatchToProps = dispatch => ({
  setDirection: (robotDirection, rotation) =>
    dispatch(setDirection(robotDirection, rotation)),
  setMove: (topCo, leftCo) => dispatch(setMove(topCo, leftCo)),
  sendLog: item => dispatch(sendLog(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(CanvasTable);
