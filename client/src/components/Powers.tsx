import React from 'react';
import { motion } from 'framer-motion';
import {
  EyeIcon,
  BoltIcon,
  ShieldCheckIcon,
  SunIcon,
  SparklesIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/solid';

interface Power {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  strengthLevel: number;
  category: 'physical' | 'sensory' | 'defensive' | 'special';
}

const powers: Power[] = [
  {
    id: '1',
    name: 'Heat Vision',
    description: 'Intense beams of heat energy projected from eyes',
    icon: <EyeIcon />,
    strengthLevel: 95,
    category: 'special',
  },
  {
    id: '2',
    name: 'Super Strength',
    description: 'Ability to lift and move incredibly heavy objects',
    icon: <BoltIcon />,
    strengthLevel: 100,
    category: 'physical',
  },
  {
    id: '3',
    name: 'Invulnerability',
    description: 'Near-complete immunity to physical harm',
    icon: <ShieldCheckIcon />,
    strengthLevel: 98,
    category: 'defensive',
  },
  {
    id: '4',
    name: 'Solar Energy Absorption',
    description: 'Powers enhanced by yellow sun radiation',
    icon: <SunIcon />,
    strengthLevel: 90,
    category: 'special',
  },
  {
    id: '5',
    name: 'X-Ray Vision',
    description: 'Ability to see through solid objects',
    icon: <SparklesIcon />,
    strengthLevel: 85,
    category: 'sensory',
  },
  {
    id: '6',
    name: 'Flight',
    description: 'Ability to defy gravity and fly at incredible speeds',
    icon: <ArrowTrendingUpIcon />,
    strengthLevel: 97,
    category: 'physical',
  },
];

const PowerCard: React.FC<{ power: Power }> = ({ power }) => {
  return (
    <motion.div
      className="power-card"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className={`power-icon ${power.category}`}>
        {power.icon}
      </div>
      <div className="power-info">
        <h3>{power.name}</h3>
        <p>{power.description}</p>
        <div className="power-meter">
          <div className="power-level">
            <span>Power Level</span>
            <span className="level-number">{power.strengthLevel}%</span>
          </div>
          <div className="meter-bar">
            <motion.div
              className="meter-fill"
              initial={{ width: 0 }}
              animate={{ width: `${power.strengthLevel}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Powers: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="powers-container"
    >
      <div className="powers-header">
        <h2>Superman's Powers</h2>
        <div className="category-legend">
          <span className="category-item physical">Physical</span>
          <span className="category-item sensory">Sensory</span>
          <span className="category-item defensive">Defensive</span>
          <span className="category-item special">Special</span>
        </div>
      </div>
      <div className="powers-grid">
        {powers.map((power) => (
          <PowerCard key={power.id} power={power} />
        ))}
      </div>
    </motion.div>
  );
};

export default Powers;
