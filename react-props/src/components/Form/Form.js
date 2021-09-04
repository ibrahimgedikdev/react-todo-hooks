import React, { useState } from "react";

function Form({ addContact, contacts }) {
  const [form, setForm] = useState({ fullName: "", phoneNumber: "" });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    if (form.fullName === "" || form.phoneNumber === "") {
      return false;
    }
    addContact([...contacts, form]);
    setForm({fullName:'', phoneNumber:''})
  };

  return (
    <div>
      <input
        onChange={handleChange}
        value={form.fullName}
        type="text"
        name="fullName"
        placeholder="Full Name"
      />
      <input
        onChange={handleChange}
        value={form.phoneNumber}
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
      />
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}

export default Form;
