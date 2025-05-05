import React from "react";

const PhoneNumbers = ({ filteredUsers, handleDelete }) => {
  return (
    <div>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} {user.phone}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhoneNumbers;
