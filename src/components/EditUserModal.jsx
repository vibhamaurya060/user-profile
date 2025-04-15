import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../redux/actions';

const EditUserModal = ({ user, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    description: '',
    languages: '',
    education: '',
    specialization: '',
    twitter: '',
    instagram: '',
    imageUrl: ''
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || '',
        email: user.email || '',
        description: user.description || '',
        languages: user.languages || '',
        education: user.education || '',
        specialization: user.specialization || '',
        twitter: user.twitter || '',
        instagram: user.instagram || '',
        imageUrl: user.imageUrl || ''
      });
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(form));
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <form className="form" onSubmit={handleSubmit}>
          <h2>Edit Profile</h2>
          {Object.keys(form).map((key) => (
            <input
              key={key}
              type="text"
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              value={form[key]}
              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
              required={key === 'name' || key === 'email'}
              disabled={key === 'email'} // Email cannot be changed as it's our identifier
            />
          ))}
          <button type="submit">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;