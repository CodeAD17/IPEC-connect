import React, { Component } from 'react';
import "./match.css";

export class Match extends Component {
  componentDidMount() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        navItems.forEach(navItem => navItem.classList.remove('active'));
        e.currentTarget.classList.add('active');
      });
    });

    const actionButtons = document.querySelectorAll('.action-button');
    actionButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const matchCard = e.currentTarget.closest('.match-card');
        matchCard.style.animation = 'swipeOut 0.5s ease-out';
        setTimeout(() => {
          matchCard.remove();
        }, 500);
      });
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <header>
            <h1>Matches</h1>
          </header>

          <div className="main-content">
            <div className="match-card">
              <img src="https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Emma's profile picture" className="match-photo" width="100%" height="300" />
              <div className="match-info">
                <h2>Emma, 21</h2>
                <p>Psychology • Senior</p>
              </div>
              <div className="match-bio">
                Aspiring therapist with a passion for mental health awareness. Love hiking, painting, and deep conversations over coffee. Looking for someone to explore new cafes and art galleries with!
              </div>
              <div className="match-interests">
                <span className="interest-tag">Psychology</span>
                <span className="interest-tag">Art</span>
                <span className="interest-tag">Hiking</span>
                <span className="interest-tag">Coffee</span>
              </div>
              <div className="action-buttons">
                <button className="action-button">Pass</button>
                <button className="action-button like">Like</button>
              </div>
            </div>

            <div className="match-card">
              <img src="https://images.pexels.com/photos/1580272/pexels-photo-1580272.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Jason's profile picture" className="match-photo" width="100%" height="300" />
              <div className="match-info">
                <h2>Jason, 20</h2>
                <p>Computer Science • Junior</p>
              </div>
              <div className="match-bio">
                Tech enthusiast and aspiring software engineer. When I'm not coding, you'll find me at hackathons or playing ultimate frisbee. Seeking a partner in crime for late-night coding sessions and weekend adventures.
              </div>
              <div className="match-interests">
                <span className="interest-tag">Coding</span>
                <span className="interest-tag">Hackathons</span>
                <span className="interest-tag">Frisbee</span>
                <span className="interest-tag">Tech</span>
              </div>
              <div className="action-buttons">
                <button className="action-button">Pass</button>
                <button className="action-button like">Like</button>
              </div>
            </div>
          </div>

          <nav>
            <a href="/" className="nav-item">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Home
            </a>
            <a href="/matches" className="nav-item active">
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
      </div>
    );
  }
}

export default Match;
