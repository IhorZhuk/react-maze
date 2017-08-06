class SnakeGame extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      direction: 'RIGHT'
    }
  }

  render() {
    return(
      <h1>{this.state.direction}</h1>
    )
  }

}

ReactDOM.render( 
  <SnakeGame/>,
  document.getElementById('app')
);