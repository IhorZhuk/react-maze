class SnakeGame extends React.Component {

  constructor(props) {
    super(props);
    this.styles = {
      position: 'relative',
      margin: '10vh auto',
      height: '60vh',
      maxHeight: '600px',
      maxWidth: '600px',
      width: '60vw',
      border: '2px solid darkgrey'
    };

    this.state = {
      direction: 'RIGHT',
      speed: 200,
      food: this.getRandomCoordinates(),
      snakeDots: [
        [0,0]
      ]
    };

    this.updateState = this.updateState.bind(this);
  }

  componentDidUpdate() {
    this.checkIfOutOfBorders()
    this.checkIfCollapsed()
    this.checkIfEat()
  }

  getRandomCoordinates() {
    let min = 1;
    let max = 98;
    let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
    let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
    return [x,y]
  }

  checkIfOutOfBorders() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      alert('Game Over');
      this.restartGame()
    }
  }

  checkIfCollapsed() {
    var snake = [...this.state.snakeDots],
        head = snake[snake.length - 1];
    snake.pop();
    snake.map(function(dot) {
      let snake = snake;
      if (head[0] == dot[0] && head[1] == dot[1]) {
        alert('Game Over');
        this.restartGame()
      }
    });
  }

  checkIfEat() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    if (head[0] == food[0] && head[1] == food[1]) {
      this.enlargeSnake();
      this.increaseSpeed()
      this.setState({
        food: this.getRandomCoordinates(),
      })
    }
  }

  increaseSpeed() {
    if (this.state.speed > 30) {
      this.setState({
        speed: this.state.speed - 10
      })
    }
  }

  enlargeSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([])
    this.setState({
      snakeDots: newSnake
    })
  }

  restartGame() {
    this.setState({
      direction: 'RIGHT',
      speed: 200,
      food: this.getRandomCoordinates(),
      snakeDots: [
        [0,0]
      ]
    })
  }

  updateState(name, value) {
    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <div style={this.styles}>
        <Snake {...this.state} updateState={this.updateState}/>
        <Food foodPos={this.state.food} />
      </div>
    )
  }

}

ReactDOM.render( 
  <SnakeGame/>,
  document.getElementById('app')
);