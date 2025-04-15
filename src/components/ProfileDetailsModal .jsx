import React from 'react';
import '../components/profileDetail.css'

const ProfileDetailsModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content details-modal">
        <button className="close-btn" onClick={onClose}>X</button>
        <div className="profile-details">
          <h2>{user.name}'s Profile</h2>
          
          {user.imageUrl && (
            <div className="profile-image">
              <img src={user.imageUrl} alt={`${user.name}'s profile`} />
            </div>
          )}
          
          <div className="profile-info">
            <div className="info-row">
              <span className="info-label">Name:</span>
              <span className="info-value">{user.name}</span>
            </div>
            
            <div className="info-row">
              <span className="info-label">Email:</span>
              <span className="info-value">{user.email}</span>
            </div>
            
            {user.specialization && (
              <div className="info-row">
                <span className="info-label">Specialization:</span>
                <span className="info-value">{user.specialization}</span>
              </div>
            )}
            
            {user.languages && (
              <div className="info-row">
                <span className="info-label">Languages:</span>
                <span className="info-value">{user.languages}</span>
              </div>
            )}
            
            {user.education && (
              <div className="info-row">
                <span className="info-label">Education:</span>
                <span className="info-value">{user.education}</span>
              </div>
            )}
            
            {user.description && (
              <div className="info-row description">
                <span className="info-label">Description:</span>
                <p className="info-value">{user.description}</p>
              </div>
            )}
          </div>
          
          {(user.twitter || user.instagram) && (
            <div className="social-links">
              <h3>Social Media</h3>
              {user.twitter && (
                <div className="social-link">
                  <span className="social-label">Twitter:</span>
                  <span className="social-value">{user.twitter}</span>
                </div>
              )}
              
              {user.instagram && (
                <div className="social-link">
                  <span className="social-label">Instagram:</span>
                  <span className="social-value">{user.instagram}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailsModal;