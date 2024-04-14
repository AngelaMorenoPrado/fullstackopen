import Part from './Part'
import Total from './Total'

const Content = ({ data }) => {

    const total = data.reduce((acc, current) => {
        return acc + current.exercises
    }, 0)

    return (
        <>
            {data.map(note => {
                return <Part data={note} key={note.id} />
            })}
            <Total total={total} />
        </>
    )
}

export default Content