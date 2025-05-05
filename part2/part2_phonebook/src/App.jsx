import { useEffect, useState } from "react";
import Filter from "./components/FIlter";
import NewPerson from "./components/NewPerson";
import PhoneNumbers from "./components/PhoneNumbers";
import personService from "./services/persons";
import "./style.css";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [phone, setPhone] = useState("");
  const [search, setSearch] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((data) => {
      setPersons(data);
      console.log(data);
    });
  }, []);

  const addPerson = (e) => {
    e.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const personToUpdate = persons.find(
          (person) => person.name === newName
        );
        const updatedPerson = { ...personToUpdate, phone: phone };
        personService.update(personToUpdate.id, updatedPerson).then((data) => {
          setPersons(
            persons.map((person) =>
              person.id !== personToUpdate.id ? person : data
            )
          );
        });
      }
      return;
    }
    const nameObject = {
      name: newName,
      phone: phone,
    };
    personService.create(nameObject).then((data) => {
      setPersons(persons.concat(data));
      setNewName("");
      setPhone("");
    });
    setSuccessMessage(`Added ${newName} to phonebook`);
    setTimeout(() => {
      setSuccessMessage(null);
    }, 5000);
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

  const handleDelete = (id) => {
    const personToDelete = persons.find((user) => user.id === id);
    if (
      window.confirm(`Are you sure you want to delete ${personToDelete.name}?`)
    ) {
      personService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter((user) => user.id !== id));
          setSuccessMessage(`Deleted ${personToDelete.name} from phonebook`);
          setTimeout(() => {
            setSuccessMessage(null);
          }, 5000);
        })
        .catch((error) => {
          setErrorMessage(
            `Information of ${personToDelete.name} has already been removed from server`
          );
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
          setPersons(persons.filter((user) => user.id !== id));
        });
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      {successMessage && (
        <Notification message={successMessage} color="green" />
      )}
      {errorMessage && <Notification message={errorMessage} color="red" />}
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
      <PhoneNumbers filteredUsers={filteredUsers} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
