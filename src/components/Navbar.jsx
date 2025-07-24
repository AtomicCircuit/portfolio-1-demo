
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="nav-logo">
            <span className="logo-text">Shubhmarg</span>
          </Link>

          <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'nav-link-active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="nav-controls">
            <button
              className="theme-toggle"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {darkMode ? '🌙' : '☀️'}
            </button>
            
            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: sticky;
          top: 0;
          background: var(--bg-primary);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
          z-index: 100;
          transition: all var(--transition-normal);
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--space-md) 0;
        }

        .nav-logo {
          font-family: var(--font-accent);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
          text-decoration: none;
        }

        .logo-text {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav-menu {
          display: flex;
          gap: var(--space-lg);
          list-style: none;
        }

        .nav-link {
          color: var(--text-secondary);
          font-weight: 500;
          padding: var(--space-xs) var(--space-sm);
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
          position: relative;
        }

        .nav-link:hover {
          color: var(--primary);
          background: var(--bg-secondary);
        }

        .nav-link-active {
          color: var(--primary);
        }

        .nav-link-active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 2px;
          background: var(--primary);
          border-radius: 1px;
        }

        .nav-controls {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
        }

        .theme-toggle {
          background: none;
          border: none;
          font-size: 1.2rem;
          padding: var(--space-xs);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: background var(--transition-fast);
        }

        .theme-toggle:hover {
          background: var(--bg-secondary);
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          padding: var(--space-xs);
          cursor: pointer;
        }

        .menu-toggle span {
          width: 20px;
          height: 2px;
          background: var(--text-primary);
          transition: all var(--transition-fast);
        }

        @media (max-width: 768px) {
          .nav-menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--bg-primary);
            border-bottom: 1px solid var(--border);
            flex-direction: column;
            padding: var(--space-md);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all var(--transition-normal);
          }

          .nav-menu-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .menu-toggle {
            display: flex;
          }

          .nav-link {
            padding: var(--space-sm);
            text-align: center;
          }
        }
      `}</style>
    </nav>
  );
}
