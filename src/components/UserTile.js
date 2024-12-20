import React from "react";

function UserTile({ User, onDelete }) {
  const today = new Date();
  const dateOfJoining = new Date(User.date_of_joining);
  const isFutureCandidate = dateOfJoining > today;

  return (
    <div
      className={`tile ${isFutureCandidate ? 'future-candidate' : ''}`}
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
        position: "relative", 
      }}
    >
      <div
        className="img"
        style={{
          width: "130px",
          height: "100px",
          borderRadius: "100%",
          backgroundImage: `url(${process.env.PUBLIC_URL + "/default.png"}), url('https://via.placeholder.com/120')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          margin: "10px",
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
        onClick={() => onDelete(User.id)}
      >
        Delete
      </button>

      {isFutureCandidate && (
        <span className="badge badge-warning" style={badgeStyle}>
          Future Candidate
        </span>
      )}
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
};

const badgeStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "lightgreen",
  color: "black",
  padding: "5px 10px",
  borderRadius: "8px",
  fontSize: "12px",
  whiteSpace: "nowrap",
};

export default UserTile;
