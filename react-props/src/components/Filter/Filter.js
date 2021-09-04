import React from 'react'

function Filter({filterText, setFilterText}) {    
    const handleFilter = (e) => {
        setFilterText(e.target.value);
    }
    return (
        <div>
            <input type="text" onChange={handleFilter} value={filterText} placeholder="Filter" />
        </div>
    )
}

export default Filter
