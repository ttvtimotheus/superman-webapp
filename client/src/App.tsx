import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheckIcon, GlobeAmericasIcon, BoltIcon, NewspaperIcon } from '@heroicons/react/24/solid';
import GlobalMap from './components/GlobalMap';
import Powers from './components/Powers';
import DailyPlanet from './components/DailyPlanet';
import './App.css';

const Dashboard: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="dashboard-content"
    >
      <section className="hero-stats">
        <div className="stat-grid">
          <motion.div 
            className="stat-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="stat-icon emergency">
              <span className="pulse"></span>
              <ShieldCheckIcon />
            </div>
            <h3>Active Threats</h3>
            <p className="stat-number">3</p>
            <p className="stat-description">Critical situations in progress</p>
          </motion.div>

          <motion.div 
            className="stat-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="stat-icon rescue">
              <GlobeAmericasIcon />
            </div>
            <h3>Lives Saved</h3>
            <p className="stat-number">127</p>
            <p className="stat-description">Citizens rescued today</p>
          </motion.div>

          <motion.div 
            className="stat-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="stat-icon threat">
              <BoltIcon />
            </div>
            <h3>Threat Level</h3>
            <p className="stat-number status-low">Low</p>
            <p className="stat-description">Current global threat status</p>
          </motion.div>
        </div>
      </section>

      <section className="recent-activity">
        <div className="section-header">
          <h2>Recent Activity</h2>
          <div className="time-indicator">
            <div className="pulse-dot"></div>
            Live Updates
          </div>
        </div>
        <div className="activity-list">
          <motion.div 
            className="activity-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="activity-time">2 minutes ago</div>
            <div className="activity-content">
              <h4>Bank Robbery Prevented</h4>
              <p>Foiled attempted robbery at Metropolis First National Bank</p>
            </div>
            <div className="activity-status resolved">Resolved</div>
          </motion.div>

          <motion.div 
            className="activity-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="activity-time">15 minutes ago</div>
            <div className="activity-content">
              <h4>Civilian Rescue</h4>
              <p>Rescued family from burning building on 5th Avenue</p>
            </div>
            <div className="activity-status resolved">Resolved</div>
          </motion.div>

          <motion.div 
            className="activity-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="activity-time">1 hour ago</div>
            <div className="activity-content">
              <h4>Lex Corp Investigation</h4>
              <p>Suspicious activity detected near Lex Corp facility</p>
            </div>
            <div className="activity-status ongoing">Ongoing</div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

function App() {
  const [selectedTab, setSelectedTab] = useState('dashboard');

  const renderContent = () => {
    switch (selectedTab) {
      case 'map':
        return (
          <motion.div
            key="map"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <GlobalMap />
          </motion.div>
        );
      case 'powers':
        return (
          <motion.div
            key="powers"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <Powers />
          </motion.div>
        );
      case 'news':
        return (
          <motion.div
            key="news"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <DailyPlanet />
          </motion.div>
        );
      default:
        return (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <Dashboard />
          </motion.div>
        );
    }
  };

  return (
    <div className="App">
      <div className="hero-background">
        <div className="overlay"></div>
      </div>
      
      <header className="App-header">
        <div className="logo-container">
          <div className="superman-logo">S</div>
        </div>
        <h1 className="hero-title">Metropolis Watch</h1>
      </header>

      <main className="main-content">
        <nav className="main-nav">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`nav-button ${selectedTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setSelectedTab('dashboard')}
          >
            <ShieldCheckIcon className="nav-icon" />
            Current Status
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`nav-button ${selectedTab === 'map' ? 'active' : ''}`}
            onClick={() => setSelectedTab('map')}
          >
            <GlobeAmericasIcon className="nav-icon" />
            Global Threats
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`nav-button ${selectedTab === 'powers' ? 'active' : ''}`}
            onClick={() => setSelectedTab('powers')}
          >
            <BoltIcon className="nav-icon" />
            Powers
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`nav-button ${selectedTab === 'news' ? 'active' : ''}`}
            onClick={() => setSelectedTab('news')}
          >
            <NewspaperIcon className="nav-icon" />
            Daily Planet
          </motion.button>
        </nav>

        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
