const Textuppercase = ({text, color = 'red'}, ) => {
  return (
    <p style={{color: color, fontSize: '32px'}}>{text.toUpperCase()}</p>
  )
}

export default Textuppercase