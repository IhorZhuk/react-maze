class Snake extends React.Component {

  componentDidMount() {
    document.onkeydown = this.checkKey.bind(this);
    this.timerID = setInterval(
      () => this.moveSnake(),
      200
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  moveSnake() {
    this.dots = [...this.props.snakeDots];
    let head = this.dots[this.dots.length - 1];
    switch (this.props.direction) {
      case 'RIGHT':
        head = [head[0] + 2, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - 2, head[1]];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 2];
        break;
      case 'UP':
        head = [head[0], head[1] - 2];
        break;
    }
    this.dots.push(head)
    this.dots.shift();
    this.props.updateState('snakeDots', [...this.dots])
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