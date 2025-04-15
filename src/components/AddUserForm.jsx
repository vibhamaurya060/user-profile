import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions';

const AddUserForm = ({ onClose }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(form));
    setForm({ 
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
    onClose();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add New Profile</h2>
      {Object.keys(form).map((key) => (
        <input
          key={key}
          type="text"
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          required={key === 'name' || key === 'email'}
        />
      ))}
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;