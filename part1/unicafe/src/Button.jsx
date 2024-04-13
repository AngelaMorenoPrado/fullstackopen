const Button = (props) => {
    const buttons = props.buttons.map((item, index) => {
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
  
  export default Button