const Total = ({ parts }) => {
  console.log(parts);

  return (
    <>
      <p>
        <strong>
          Total of{" "}
          {parts
            .map((part) => part.exercises)
            .reduce((acc, curr) => acc + curr, 0)}{" "}
          exercises
        </strong>
      </p>
    </>
  );
};

export default Total;
