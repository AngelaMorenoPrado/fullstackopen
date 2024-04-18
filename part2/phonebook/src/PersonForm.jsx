const PersonForm = ({ addPerson, newName, alterName, newNumber, alterNumber }) => {

    return (
        <form onSubmit={addPerson}>
            <div>
                <span>name: </span>
                <input value={newName} onChange={alterName} />
            </div>
            <div>
                <span>number: </span>
                <input value={newNumber} onChange={alterNumber} />
            </div>
            <button type="submit">add</button>
        </form>
    )

}

export default PersonForm