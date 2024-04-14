import Part from './Part'

const Content = ({ data }) => {
    return (
        <>
            {data.map(note => {
                return <Part data={note} key={note.id} />
            })}
        </>
    )
}

export default Content