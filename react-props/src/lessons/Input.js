import React, {useState} from 'react'

function Input() {
    const [form, setForm] = useState({name:'', surname:''});

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    return (
        <div>
            <input name="name" value={form.name} type="text" placeholder="Name" onChange={handleChange}  />
            <input name="surname" value={form.surname} type="text" placeholder="Surname" onChange={handleChange}  />
        </div>
    )
}

export default Input
