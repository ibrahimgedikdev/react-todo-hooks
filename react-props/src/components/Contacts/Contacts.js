import React, {useState, useEffect} from 'react'
import Filter from '../Filter/Filter';
import Form from '../Form/Form';
import List from '../List/List';

function Contacts() {
    const [contacts, setContacts] = useState([
        {
           fullName:'İbrahim',
           phoneNumber:'1234'     
        },
        {
           fullName: 'Mehmet',
           phoneNumber:'2324'
        }
    ]);
    const [filterText, setFilterText] = useState('');

    useEffect(() => {
        console.log(contacts);
    }, [contacts])

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => {
           return item[key].toString().toLocaleLowerCase().includes(filterText.toLocaleLowerCase());
        });
    });

    console.log('Filtered', filtered);

    return (
        <div>
            <Filter filterText={filterText} setFilterText={setFilterText} />
            <List contacts={contacts} filtered={filtered} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts
