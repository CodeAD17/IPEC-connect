import React, { Component } from 'react';
import "./main.css";
import { Link, Outlet } from 'react-router-dom';

export class Main extends Component {
  componentDidMount() {
      document.addEventListener('DOMContentLoaded', () => {
          const navItems = document.querySelectorAll('.nav-item');
          navItems.forEach(item => {
              item.addEventListener('click', (e) => {
                  navItems.forEach(navItem => navItem.classList.remove('active'));
                  e.currentTarget.classList.add('active');
              });
          });
      });
  }

  render() {
      return (
          <div>
              <div className="container">
                  <header>
                      <h1>IPEC CONNECT</h1>
                  </header>

                  <div className="main-content">
                      <div className="card profile-card">
                          <img src="https://images.pexels.com/photos/3280908/pexels-photo-3280908.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your profile picture" className="profile-picture" width="80" height="80" />
                          <div className="profile-info">
                              <h2>Alex Johnson</h2>
                              <p>Computer Science • Junior</p>
                          </div>
                      </div>

                      <div className="card">
                       <h3>New Matches</h3>
                          <div className="action-buttons">
                          <Link to="/profile"><button className="action-button">View Matches</button></Link>  
                          </div>
                      </div>

                      <div className="feed-card card">
                          <div className="feed-header">
                              <img src="https://images.pexels.com/photos/5317290/pexels-photo-5317290.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Sarah's profile picture" className="feed-profile-picture" width="40" height="40" />
                              <span className="feed-username">Sarah</span>
                          </div>
                          <div className="feed-content">
                              <p>Just aced my midterm! Time to celebrate! 🎉📚</p>
                              <img src="https://images.pexels.com/photos/27629386/pexels-photo-27629386/free-photo-of-a-view-of-a-valley-with-rice-fields-and-mountains.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Sarah celebrating her midterm success" className="feed-image" width="100%" height="auto" />
                          </div>
                          <div className="feed-actions">
                              <a href="#" className="feed-action">Like</a>
                              <a href="#" className="feed-action">Comment</a>
                              <a href="#" className="feed-action">Share</a>
                          </div>
                      </div>

                      <div className="feed-card card">
                          <div className="feed-header">
                              <img src="https://images.pexels.com/photos/5317290/pexels-photo-5317290.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Mike's profile picture" className="feed-profile-picture" width="40" height="40" />
                              <span className="feed-username">Mike</span>
                          </div>
                          <div className="feed-content">
                              <p>Looking for study buddies for tomorrow's hackathon. Anyone interested? 💻🤓</p>
                          </div>
                          <div className="feed-actions">
                              <a href="#" className="feed-action">Like</a>
                              <a href="#" className="feed-action">Comment</a>
                              <a href="#" className="feed-action">Share</a>
                          </div>
                      </div>
                  </div>

                  <nav>
                      <a href="/home" className="nav-item active">
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Home
                      </a>
                      <a href="/matches" className="nav-item">
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Matches
                      </a>
                      <a href="/messages" className="nav-item">
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Messages
                      </a>
                      <a href="/profile" className="nav-item">
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Profile
                      </a>
                  </nav>
              </div>
              <Outlet/>
          </div>
      );
  }
}

export default Main;
