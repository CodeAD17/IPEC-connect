import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';
import './profile.css';

export class Profile extends Component {
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', () => {
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
              item.addEventListener('click', (e) => {
                navItems.forEach(navItem => navItem.classList.remove('active'));
                e.currentTarget.classList.add('active');
              });
            });
      
            const editButton = document.querySelector('.edit-button');
            editButton.addEventListener('click', () => {
              alert('Edit profile functionality coming soon!');
            });
          });
    }
  render() {
    return (
      <div>
        <body>
  <div class="container">
    <header>
      <h1>Profile</h1>
      <button class="edit-button">Edit</button>
    </header>

    <div class="main-content">
      <div class="profile-header">
        <img src="https://images.pexels.com/photos/3280908/pexels-photo-3280908.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User's profile picture" class="profile-picture" width="120" height="120" />
        <div class="profile-name">Alex Johnson</div>
        <div class="profile-major">Computer Science, Class of 2024</div>
        <div class="profile-stats">
          <div class="stat">
            <span class="stat-value">152</span>
            <span class="stat-label">Matches</span>
          </div>
          <div class="stat">
            <span class="stat-value">43</span>
            <span class="stat-label">Connections</span>
          </div>
          <div class="stat">
            <span class="stat-value">89%</span>
            <span class="stat-label">Compatibility</span>
          </div>
        </div>
      </div>

      <div class="profile-section">
        <div class="section-title">About Me</div>
        <p>Hey there! I'm a tech enthusiast with a passion for coding and innovation. When I'm not diving into lines of code, you can find me exploring nature trails or experimenting with new recipes in the kitchen. Always up for engaging conversations and new friendships!</p>
      </div>

      <div class="profile-section">
        <div class="section-title">Interests</div>
        <div class="tag-list">
          <span class="tag">Programming</span>
          <span class="tag">Artificial Intelligence</span>
          <span class="tag">Hiking</span>
          <span class="tag">Cooking</span>
          <span class="tag">Sci-Fi Movies</span>
          <span class="tag">Guitar</span>
        </div>
      </div>

      <div class="profile-section">
        <div class="section-title">Courses</div>
        <div class="tag-list">
          <span class="tag">Advanced Algorithms</span>
          <span class="tag">Machine Learning</span>
          <span class="tag">Web Development</span>
          <span class="tag">Data Structures</span>
        </div>
      </div>
    </div>

    <nav>
      <a href="/" class="nav-item">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9 22V12h6v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Home
      </a>
      <a href="/matches" class="nav-item">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Matches
      </a>
      <a href="/messages" class="nav-item">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Messages
      </a>
      <a href="/profile" class="nav-item active">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Profile
      </a>
    </nav>
    <Outlet/>
  </div>
</body>
      </div>
    )
  }
}

export default Profile