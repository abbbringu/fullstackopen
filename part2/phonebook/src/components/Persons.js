const Persons = ({ persons }) => {
    return (
        <>
            {persons.map(person => <p key={person.id}>{person.name}: {person.num}</p>)}
        </>
    )
}

export default Persons