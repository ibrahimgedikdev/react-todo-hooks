import React from 'react'

function List({contacts, filtered}) {
    return (
        <div>
            <ul>
                {filtered.map((contact, index) => (
                    <li key={index}>{contact.fullName} - {contact.phoneNumber}</li>
                ))}
            </ul>
        </div>
    )
}

export default List
