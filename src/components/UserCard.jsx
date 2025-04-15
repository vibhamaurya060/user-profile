import React from 'react';

const UserCard = ({ user, onClick, onDelete, onViewDetails }) => {
  const handleViewDetails = (e) => {
    e.stopPropagation();
    if (typeof onViewDetails === 'function') {
      onViewDetails(user);
    } else {
      console.log('View details handler not provided');
    }
  };

  return (
    <div className="user-card">
      {user.imageUrl && (
            <div style={{width:"40px", height:"40px"}}>
              <img style={{width:"40px", height:"40px"}} src={user.imageUrl} alt={`${user.name}'s profile`} />
            </div>
          )}
      <h3>{user.name}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Specialization:</strong> {user.specialization}</p>
      <div className="card-buttons">
        <button 
          className="edit-btn" 
          onClick={(e) => {
            e.stopPropagation();
            onClick(user);
          }}
        >
          Edit
        </button>
        <button 
          className="details-btn" 
          onClick={handleViewDetails}
        >
          Details
        </button>
        <button 
          className="delete-btn" 
          onClick={(e) => {
            e.stopPropagation();
            onDelete(user.email);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;