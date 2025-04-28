import { useState } from "react";
import Filter from "./components/FIlter";
import NewPerson from "./components/NewPerson";
import PhoneNumbers from "./components/PhoneNumbers";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-123456", id: 1 },
    { name: "Ada Lovelace", phone: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", phone: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", phone: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [phone, setPhone] = useState("");
  const [search, setSearch] = useState("");

  const addPerson = (e) => {
    e.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const nameObject = {
      name: newName,
      phone: phone,
      id: persons.length + 1,
    };
    setPersons(persons.concat(nameObject));
    setNewName("");
    setPhone("");
  };

  const handlePhoneInput = (e) => {
    setPhone(e.target.value);
  };

  const handleNameInput = (e) => {
    setNewName(e.target.value);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  //Used just a filter to keep persons updated
  const filteredUsers = persons.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter search={search} handler={handleSearch} />
      </div>
      <h2>Add new Person</h2>
      <NewPerson
        addPerson={addPerson}
        handleNameInput={handleNameInput}
        handlePhoneInput={handlePhoneInput}
        newName={newName}
        phone={phone}
      />
      <h2>Phone Numbers</h2>
      <PhoneNumbers filteredUsers={filteredUsers} />
    </div>
  );
};

export default App;
