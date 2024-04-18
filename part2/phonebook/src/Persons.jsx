const Persons = ({ persons, filterValue }) => {
    return (
        <>
            {
                filterValue.length == 0
                ? persons.map(person => {
                    return <p key={person.id}>{ person.name } { person.number }</p>
                })
                : persons.map(person => {
                    const containsFilteringValue = person.name.toLowerCase().includes(filterValue.toLowerCase())
                    return containsFilteringValue
                    ? <p key={person.id}>{ person.name } { person.number }</p>
                    : []
                })
            }
        </>
    )
}

export default Persons