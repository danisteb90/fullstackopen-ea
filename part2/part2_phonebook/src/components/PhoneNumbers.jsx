import React from "react";

const PhoneNumbers = ({ filteredUsers }) => {
  return (
    <div>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhoneNumbers;
