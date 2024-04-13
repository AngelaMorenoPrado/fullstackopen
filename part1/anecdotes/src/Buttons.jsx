const Buttons = (props) => {
    const buttons = props.data.map((item, index) => {
        return (
            <button onClick={item.function} key={index}>
                {item.text}
            </button>
        )
    })
    return (
      <>
        {buttons}
      </>
    )
  }
  
  export default Buttons