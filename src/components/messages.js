import React, { Component } from 'react';
import "./messages.css";
import { Outlet } from 'react-router-dom';

export class Messages extends Component {
  componentDidMount() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        navItems.forEach(navItem => navItem.classList.remove('active'));
        e.currentTarget.classList.add('active');
      });
    });

    const conversationItems = document.querySelectorAll('.conversation-item');
    conversationItems.forEach(item => {
      item.addEventListener('click', () => {
        const name = item.querySelector('.conversation-name').textContent;
        window.location.href = `/chat?name=${encodeURIComponent(name)}`;
      });
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <header>
            <h1>Messages</h1>
          </header>
            <Outlet/>
          <div className="main-content">
            <div className="conversation-list">
              <div className="conversation-item">
                <img src="https://websim.university.edu/images/emma-avatar.jpg" alt="Emma's avatar" className="avatar" width="50" height="50" />
                <div className="conversation-details">
                  <div className="conversation-name">Emma</div>
                  <div className="conversation-preview">Hey! I saw you're into art too. What's your favorite...</div>
                </div>
                <div className="conversation-time">2m ago</div>
                <div className="unread-indicator"></div>
              </div>

              <div className="conversation-item">
                <img src="https://websim.university.edu/images/jason-avatar.jpg" alt="Jason's avatar" className="avatar" width="50" height="50" />
                <div className="conversation-details">
                  <div className="conversation-name">Jason</div>
                  <div className="conversation-preview">That hackathon idea sounds awesome! When do you...</div>
                </div>
                <div className="conversation-time">1h ago</div>
              </div>

              <div className="conversation-item">
                <img src="https://websim.university.edu/images/sophia-avatar.jpg" alt="Sophia's avatar" className="avatar" width="50" height="50" />
                <div className="conversation-details">
                  <div className="conversation-name">Sophia</div>
                  <div className="conversation-preview">I'd love to join your study group! What time does it...</div>
                </div>
                <div className="conversation-time">3h ago</div>
              </div>

              <div className="conversation-item">
                <img src="https://websim.university.edu/images/ethan-avatar.jpg" alt="Ethan's avatar" className="avatar" width="50" height="50" />
                <div className="conversation-details">
                  <div className="conversation-name">Ethan</div>
                  <div className="conversation-preview">Thanks for the book recommendation! I just started...</div>
                </div>
                <div className="conversation-time">1d ago</div>
              </div>

              <div className="conversation-item">
                <img src="https://websim.university.edu/images/olivia-avatar.jpg" alt="Olivia's avatar" className="avatar" width="50" height="50" />
                <div className="conversation-details">
                  <div className="conversation-name">Olivia</div>
                  <div className="conversation-preview">Hey! Are you going to the campus concert this...</div>
                </div>
                <div className="conversation-time">2d ago</div>
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
            <a href="/matches" className="nav-item">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Matches
            </a>
            <a href="/messages" className="nav-item active">
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
    )
  }
}

export default Messages