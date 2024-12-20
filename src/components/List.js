import React, { useEffect, useState } from "react";
import UserTile from "./UserTile";
import DetailsButton from "./DetailsButton";

function List() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/auth/getEmployee")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user data.");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setError(error.message); 
        setLoading(false);  
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/deleteEmployee/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      } else {
        const errorMsg = await response.text();
        console.error("Failed to delete the user:", errorMsg);
        alert(`Failed to delete user: ${errorMsg}`);
      }
    } catch (error) {
      console.error("Error during delete request:", error);
      alert("An error occurred while deleting the user.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Details</h1>

      {loading ? (
        <p>Loading user details...</p>
      ) : (
        <>
          {error && <p style={{ color: "red" }}>{error}</p>}

          {users.map((user) => (
            <UserTile
              key={user.id}
              User={user}
              onDelete={handleDelete}
              style={{ backgroundColor: "gray" }}  // Default card style
            />
          ))}

          <DetailsButton child={"Add Employee"} to={"/"} />
        </>
      )}
    </div>
  );
}

export default List;
