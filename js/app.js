
class Labyrinth extends React.Component {

  constructor(props) {
    super(props);
    this.styles = {
      position: 'relative',
      margin: '5vh auto',
      height: '60vh',
      width: '60vw',
      border: '0px solid lightgrey'
    };

    this.state = {
      posLeft: 0,
      posTop: 0,
      dotSize: 10,
      bgColor: '#ff4848',
      maze: newMaze(10,10)
    };

    this.step = 10;

    this.finish = {
      posLeft: 90,
      posTop: 90,
      dotSize: 10,
      bgColor: '#baffb4'
    }
   
  }

  componentDidMount() {
    document.onkeydown = this.checkKey.bind(this);
  }

  componentDidUpdate() {
    this.checkIfWon()
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
    let currentCell = this.state.maze[y][x];

    if (currentCell.top == true && direction == 'top') {
      return false;
    } else if (currentCell.right == true && direction == 'right') {
      return false;
    } else if (currentCell.bottom == true && direction == 'bottom') {
      return false;
    } else if (currentCell.left == true && direction == 'left') {
      return false;
    } else {
      return true;
    }
  }

  checkIfWon() {
    if (this.state.posLeft == this.finish.posLeft && this.state.posTop == this.finish.posTop) {
      alert('You won!');
      this.setState({
        posLeft: 0,
        posTop: 0,
        maze: newMaze(10,10)
      })
    }
  }

  render() {
    return(
      <div style={this.styles}>
        <Maze maze={this.state.maze}/>
        <Dot {...this.finish}/>
        <Dot {...this.state}/>
      </div>
    )
  }
}



ReactDOM.render( 
  <Labyrinth/>,
  document.getElementById('app')
);