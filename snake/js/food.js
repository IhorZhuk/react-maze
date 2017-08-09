const Food = ({foodPos}) => {

  let left = foodPos[0] + '%';
  let top = foodPos[1] + '%';

  let styles = {
    position: 'absolute',
    top: top,
    left: left,
    width: '2%',
    height: '2%',
    backgroundColor: 'red',
    border: '1px solid #fff',
    zIndex: 1
  }

  return(
    <div style={styles}></div>
  )

}