import React from "react";

function UserTile({ User, onDelete }) {
  return (
    <div
      className="tile"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        background: "#e0e5ec",
        borderRadius: "15px",
        margin: "10px auto",
        padding: "20px",
        maxWidth: "600px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
      }}
    >
      <div
        className="img"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          backgroundImage: `url(${process.env.PUBLIC_URL + "/default.png"}), url('https://via.placeholder.com/120')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginRight: "20px",
        }}
      ></div>

      <div style={userCardStyle}>
        <p
          className="name"
          style={{
            fontFamily: "sans-serif",
            fontSize: "28px",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          {User.first_name} {User.last_name}
        </p>

        <p className="details" style={details}>
          <strong>Employee ID: </strong>{User.employee_id}
        </p>
        <p className="details" style={details}>
          <strong>Role: </strong>{User.roles || "No role assigned"}
        </p>
        <p className="details" style={details}>
          <strong>Email: </strong>{User.email}
        </p>
        <p className="details" style={details}>
          <strong>Phone: </strong>{User.phone_number}
        </p>
      </div>

      <button
        aria-label={`Delete ${User.first_name} ${User.last_name}`}
        style={deleteButtonStyle}
        onMouseEnter={(e) => (e.target.style.background = "#e33d3f")}
        onMouseLeave={(e) => (e.target.style.background = "#ff4d4f")}
        onClick={() => onDelete(User.id)}
      >
        Delete
      </button>
    </div>
  );
}

const details = {
  fontFamily: "Arial, sans-serif",
  fontSize: "18px",
  color: "#333",
  marginBottom: "6px",
};

const userCardStyle = {
  padding: "10px",
  borderRadius: "8px",
  width: "100%", 
};

const deleteButtonStyle = {
  background: "#ff4d4f",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

export default UserTile;
