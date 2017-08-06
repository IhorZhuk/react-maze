const Maze = ({maze}) => {

  let styles = {
    table: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      tableLayout: 'fixed'
    },
    cell: {
      padding: 0,
      border: '0px solid grey'
    }
  }

  let getCellStyles = (e) => {
    return {
      borderTopWidth: ((e.top) ? 1 : 0) + 'px',
      borderRightWidth: ((e.right) ? 1 : 0) + 'px',
      borderBottomWidth:((e.bottom) ? 1 : 0) + 'px',
      borderLeftWidth: ((e.left) ? 1 : 0) + 'px',
    }
  };

  let renderCells = (el) => {
    return el.map((e, i) =>{
      let cellStyles = getCellStyles(e);
      return <td key={i} style={{...styles.cell, ...cellStyles}}></td>
    })
  };

  let renderRow = () => {
    return maze.map((el, i) => {
      return <tr key={i}>{renderCells(el)}</tr>
    })
  };

  
  return(
    <table style={styles.table}>
      <tbody>
        {renderRow()}
      </tbody>
    </table>
  )

}