const SnakeDot = ({posLeft, posTop}) => {

  let left = posLeft + '%';
  let top = posTop + '%';

  let styles = {
    position: 'absolute',
    top: top,
    left: left,
    width: '2%',
    height: '2%',
    backgroundColor: 'black',
    border: '1px solid #fff',
    zIndex: 2
  }
  
  return(
    <div style={styles}></div>
  )

}