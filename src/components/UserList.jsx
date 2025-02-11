import React from "react";
import defaultImage from "/default-avatar.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

function UserList({ users, onEdit, onDelete }) {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">User List</h2>

      <div className="table-responsive">
        <table className="table table-bordered table-hover text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={user.profile_pic || defaultImage}
                    alt={`${user.name}'s profile`}
                    className="rounded-circle"
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => onEdit(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
