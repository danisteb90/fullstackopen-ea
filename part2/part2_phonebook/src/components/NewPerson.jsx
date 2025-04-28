const NewPerson = ({
  addPerson,
  newName,
  phone,
  handleNameInput,
  handlePhoneInput,
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        <p>
          name: <input value={newName} onChange={handleNameInput} />
        </p>
        <p>
          phone: <input value={phone} onChange={handlePhoneInput} />
        </p>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default NewPerson;
