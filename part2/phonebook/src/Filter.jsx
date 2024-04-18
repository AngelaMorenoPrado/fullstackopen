const Filter = ({ value, alterFiltering }) => {

    return (
        <>
            <span>filter shown with </span> <input value={value} onChange={alterFiltering} />
        </>
    )
}

export default Filter