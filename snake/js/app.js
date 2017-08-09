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
      snakeDots: [
        [0,0]
      ]
    };
    this.updateState = this.updateState.bind(this);
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
      </div>
    )
  }

}

ReactDOM.render( 
  <SnakeGame/>,
  document.getElementById('app')
);