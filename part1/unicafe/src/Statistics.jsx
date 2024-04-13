import StatisticLine from './StatisticLine'

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
            <StatisticLine text={item.state} value={item.value} key={index} />
        )
    })

    return (
        <table>
            <tbody>
                {statistics}
            </tbody>
        </table>
    )
  }
  
export default Statistics