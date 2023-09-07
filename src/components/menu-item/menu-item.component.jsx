import React from "react";
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate(); // Use the useNavigate hook to get the navigation function

  const handleClick = () => {
    navigate(linkUrl); // Use the navigate function to navigate to the specified URL
  };

  return (
    <div className={`${size} menu-item`} onClick={handleClick}>
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
