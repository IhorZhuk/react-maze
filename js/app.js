
class Labyrinth extends React.Component {

  constructor(props) {
    super(props);
    this.styles = {
      position: 'relative',
      margin: '5vh auto',
      height: '60vh',
      width: '80vh',
      border: '0px solid lightgrey'
    };

    this.state = {
      posLeft: 0,
      posTop: 0,
      dotSize: 10
    };

    this.step = 10;

    this.maze = newMaze(10,10);
   
  }

  componentDidMount() {
    document.onkeydown = this.checkKey.bind(this);
  }

  checkKey(e) {
    e = e || window.event;
    let newPos = {
      top: this.state.posTop,
      left: this.state.posLeft,
      direction: ''
    }
    switch (e.keyCode) {
      case 38:
        newPos.top = this.state.posTop - this.step;
        newPos.direction = 'top';
        break;
      case 40:
        newPos.top = this.state.posTop + this.step;
        newPos.direction = 'bottom';
        break;
      case 37:
        newPos.left = this.state.posLeft - this.step;
        newPos.direction = 'left';
        break;
      case 39:
        newPos.left = this.state.posLeft + this.step;
        newPos.direction = 'right';
        break;
    }
    this.makeMove(newPos)
  }

  makeMove(pos) {
    let isWithin = this.isWithinMaze(pos);
    let isFreeSpace = this.isFreeSpace(pos)
    if (isWithin && isFreeSpace) {
      this.setState({
        posTop: pos.top,
        posLeft: pos.left
      })
    }
  }

  isWithinMaze({top, left}) {
    return (top >= 0 && top <= 90 && left >= 0 && left <= 90) 
  }

  isFreeSpace({top, left, direction}) {
    let y = this.state.posTop/10;
    let x = this.state.posLeft/10;
    let currentCell = this.maze[y][x];

    if (currentCell[0] == 1 && direction == 'top') {
      return false;
    } else if (currentCell[1] == 1 && direction == 'right') {
      return false;
    } else if (currentCell[2] == 1 && direction == 'bottom') {
      return false;
    } else if (currentCell[3] == 1 && direction == 'left') {
      return false;
    } else {
      return true;
    }

  }

  render() {
    return(
      <div style={this.styles}>
        <Maze maze={this.maze}/>
        <Dot {...this.state} bgColor='#ff4848'/>
      </div>
    )
  }
}



ReactDOM.render( 
  <Labyrinth/>,
  document.getElementById('app')
);