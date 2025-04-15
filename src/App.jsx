import React, { useState } from 'react';
import AddUserForm from './components/AddUserForm';
import UserCard from './components/UserCard';
import EditUserModal from './components/EditUserModal';
import SearchAndFilter from './components/SearchAndFilter';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from './redux/actions';
import './components/styles.css';
import ProfileDetailsModal from './components/ProfileDetailsModal ';

const App = () => {
  const users = useSelector((state) => state.users);
  const searchFilter = useSelector((state) => state.searchFilter.toLowerCase());
  const [selectedUser, setSelectedUser] = useState(null);
  const [detailUser, setDetailUser] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const dispatch = useDispatch();
  
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchFilter) ||
    user.email.toLowerCase().includes(searchFilter) ||
    user.specialization?.toLowerCase().includes(searchFilter)
  );
  
  const handleDelete = (email) => {
    if (window.confirm('Are you sure you want to delete this profile?')) {
      dispatch(deleteUser(email));
    }
  };
  
  const handleViewDetails = (user) => {
    setDetailUser(user);
  };
  
  return (
    <div className="app-container">
      <h1>Profile Manager</h1>
      <div className="top-controls">
        <button className="add-btn" onClick={() => setShowAddForm(true)}>+ Add Profile</button>
        <SearchAndFilter />
      </div>
      
      <div className="card-section">
        <h2>User Profiles</h2>
        <div className="card-container">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <UserCard
                key={user.email || index}
                user={user}
                onClick={() => setSelectedUser(user)}
                onViewDetails={handleViewDetails}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <p className="no-results">No profiles found. Add a new profile or adjust your search.</p>
          )}
        </div>
      </div>
      
      {showAddForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowAddForm(false)}>X</button>
            <AddUserForm onClose={() => setShowAddForm(false)} />
          </div>
        </div>
      )}
      
      {selectedUser && (
        <EditUserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
      
      {detailUser && (
        <ProfileDetailsModal user={detailUser} onClose={() => setDetailUser(null)} />
      )}
    </div>
  );
};

export default App;