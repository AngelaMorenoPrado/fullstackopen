const Statistics = (props) => {
    const isFeedbackMissing = props.values.slice(0, 3).every(item => item.value === 0)
    if (isFeedbackMissing) {
        return (
            <p>
                No feedback given
            </p>
        )
    }

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