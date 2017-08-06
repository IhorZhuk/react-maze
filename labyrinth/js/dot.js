const Dot = ({posLeft, posTop, bgColor, dotSize}) => {

  let top = posTop + '%';
  let left = posLeft + '%';
  let size = dotSize + '%';

  let styles = {
    wrapper: {
      transition: 'all .2s',
      position: 'absolute',
      top: top,
      left: left,
      width: size,
      height: size,
    },
    box: {
      position: 'absolute',
      top: '10%',
      left: '10%',
      height: '80%',
      width: '80%',
      background: bgColor,
    }
    
  };

  return(
    <div style={styles.wrapper}>
      <div style={styles.box}></div>
    </div>
  )
}