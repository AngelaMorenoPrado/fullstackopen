const Statistics = (props) => {
    const statistics = props.values.map((item, index) => {
        return (
            <p key={index}>
                {item.state} {item.value}
            </p>
        )
    })

    return (
        <>
            {statistics}
        </>
    )
  }
  
export default Statistics