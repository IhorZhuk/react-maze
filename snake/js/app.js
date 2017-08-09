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
      food: this.getRandomCoordinates(),
      snakeDots: [
        [0,0], [2,0], [4,0]
      ]
    };

    this.updateState = this.updateState.bind(this);
  }

  componentDidUpdate() {
    this.checkIfGameOver()
    this.checkIfEat()
  }

  getRandomCoordinates() {
    let min = 1;
    let max = 98;
    let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
    let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
    return [x,y]
  }

  checkIfGameOver() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      alert('Game Over');
      this.restartGame()
    }
  }

  checkIfEat() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    if (head[0] == food[0] && head[1] == food[1]) {
      this.enlargeSnake();
      this.setState({
        food: this.getRandomCoordinates()
      })
    }
  }

  enlargeSnake() {
    let newSnake = [...this.state.snakeDots];
    let head = newSnake[newSnake.length - 1];
    switch (this.props.direction) {
      case 'RIGHT':
        head = [head[0] + 4, head[1]]
        break;
      case 'LEFT':
        head = [head[0] - 4, head[1]]
        break;
      case 'DOWN':
        head = [head[0], head[1] + 4]
        break;
      case 'UP':
        head = [head[0], head[1] - 4]
        break;
    }
    newSnake.push(head)
    console.log(newSnake)
    this.setState({
      snakeDots: newSnake
    })
  }

  restartGame() {
    this.setState({
      direction: 'RIGHT',
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