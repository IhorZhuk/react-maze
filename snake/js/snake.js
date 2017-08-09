class Snake extends React.Component {

  componentDidMount() {
    document.onkeydown = this.checkKey.bind(this);
    this.timerID = setInterval(
      () => this.moveSnake(),
      200
    );
  }

  moveSnake() {
    this.dots = [...this.props.snakeDots];
    switch (this.props.direction) {
      case 'RIGHT':
        this.moveSnakeRight()
        break;
      case 'LEFT':
        this.moveSnakeLeft()
        break;
      case 'DOWN':
        this.moveSnakeDown()
        break;
      case 'UP':
        this.moveSnakeUp()
        break;
    }
    this.props.updateState('snakeDots', [...this.dots])
  }

  moveSnakeRight() {
    this.dots.map(dot => {
      dot[0] = dot[0] + 1;
    });
  }

  moveSnakeLeft() {
    this.dots.map(dot => {
      dot[0] = dot[0] - 1;
    });
  }

  moveSnakeDown() {
     this.dots.map(dot => {
      dot[1] = dot[1] + 1;
    });
  }

  moveSnakeUp() {
     this.dots.map(dot => {
      dot[1] = dot[1] - 1;
    });
  }

  checkKey(e) {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        this.props.updateState('direction', 'UP');
        break;
      case 40:
        this.props.updateState('direction', 'DOWN');
        break;
      case 37:
        this.props.updateState('direction', 'LEFT');
        break;
      case 39:
        this.props.updateState('direction', 'RIGHT');
        break;
    }
  }

  render() {
    let snakeDots = this.props.snakeDots
    return(
      <div>
        {snakeDots.map((dot, i) => {
          return <SnakeDot key={i} posLeft={dot[0]} posTop={dot[1]}/>
        })}
      </div>
    )
  }

}