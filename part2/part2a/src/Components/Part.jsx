import React from "react";

const Part = ({ name, exercises, id }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

export default Part;
