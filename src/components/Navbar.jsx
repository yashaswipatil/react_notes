import React from 'react';
import './Navbar.css'; 

function Navbar() {
  return (
    <div className="navbar">
      <img src="https://cdn.simpleicons.org/starbucks/008248" alt="logo" />
      <input type="search" name="search" placeholder="Search..." />
      <img src="/account-avatar-profile-user.svg" alt="User Icon" />
    </div>
  );
}

export default Navbar;
