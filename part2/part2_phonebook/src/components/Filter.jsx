const Filter = ({ search, handler }) => {
  return (
    <div>
      <h3>
        Search a person: <input value={search} onChange={handler} />
      </h3>
    </div>
  );
};

export default Filter;
