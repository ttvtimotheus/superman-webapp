import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NewspaperIcon, ClockIcon, UserIcon } from '@heroicons/react/24/solid';

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: 'hero' | 'crime' | 'metropolis' | 'interview';
  image: string;
}

const mockArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Superman Prevents Nuclear Disaster',
    excerpt: 'Man of Steel saves millions in daring reactor rescue',
    content: 'In a spectacular display of heroism, Superman prevented a potential nuclear meltdown at the Metropolis Power Plant...',
    author: 'Lois Lane',
    date: '2 hours ago',
    category: 'hero',
    image: 'https://example.com/superman-reactor.jpg',
  },
  {
    id: '2',
    title: 'Lex Luthor Claims Innocence in Latest Scheme',
    excerpt: 'Billionaire denies involvement in mysterious energy surges',
    content: 'Metropolis billionaire Lex Luthor held a press conference today to address allegations...',
    author: 'Jimmy Olsen',
    date: '5 hours ago',
    category: 'crime',
    image: 'https://example.com/luthor-press.jpg',
  },
  {
    id: '3',
    title: 'Exclusive: Day in the Life of Metropolis\' Guardian',
    excerpt: 'Behind the cape: Our exclusive interview with Superman',
    content: 'In a rare sit-down interview, Superman discusses his role as Metropolis\' protector...',
    author: 'Lois Lane',
    date: '1 day ago',
    category: 'interview',
    image: 'https://example.com/superman-interview.jpg',
  },
];

const NewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className={`news-card ${expanded ? 'expanded' : ''}`}
      whileHover={{ scale: expanded ? 1 : 1.02 }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="news-header">
        <span className={`category-tag ${article.category}`}>
          {article.category}
        </span>
        <h3>{article.title}</h3>
      </div>
      
      <div className="news-meta">
        <span className="author">
          <UserIcon className="meta-icon" />
          {article.author}
        </span>
        <span className="date">
          <ClockIcon className="meta-icon" />
          {article.date}
        </span>
      </div>

      <AnimatePresence>
        {expanded ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="news-content"
          >
            <p>{article.content}</p>
          </motion.div>
        ) : (
          <p className="news-excerpt">{article.excerpt}</p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const DailyPlanet: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredArticles = filter === 'all'
    ? mockArticles
    : mockArticles.filter(article => article.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="daily-planet-container"
    >
      <div className="news-header">
        <div className="title-section">
          <NewspaperIcon className="header-icon" />
          <h2>Daily Planet News</h2>
        </div>
        <div className="news-filters">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All News
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`filter-btn ${filter === 'hero' ? 'active' : ''}`}
            onClick={() => setFilter('hero')}
          >
            Hero Activity
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`filter-btn ${filter === 'crime' ? 'active' : ''}`}
            onClick={() => setFilter('crime')}
          >
            Crime Watch
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`filter-btn ${filter === 'metropolis' ? 'active' : ''}`}
            onClick={() => setFilter('metropolis')}
          >
            Metropolis
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`filter-btn ${filter === 'interview' ? 'active' : ''}`}
            onClick={() => setFilter('interview')}
          >
            Interviews
          </motion.button>
        </div>
      </div>
      <div className="news-grid">
        <AnimatePresence>
          {filteredArticles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <NewsCard article={article} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default DailyPlanet;
