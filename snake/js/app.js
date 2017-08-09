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
        [0,0]
      ]
    };

    this.updateState = this.updateState.bind(this);
  }

  componentDidUpdate() {
    this.checkIfGameOver()
  }

  getRandomCoordinates() {
    let min = 1;
    let max = 98;
    let x = Math.floor(Math.random()*(max-min+1)+min);
    let y = Math.floor(Math.random()*(max-min+1)+min);
    return [x,y]
  }

  checkIfGameOver() {
    let head = this.state.snakeDots[0];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      alert('Game Over');
      this.restartGame()
    }
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