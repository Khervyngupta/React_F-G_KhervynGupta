import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FeedbackPage from './pages/FeedbackPage';
import SubmissionsPage from './pages/SubmissionsPage';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Feedback Form</Link>
            </li>
            <li>
              <Link to="/submissions">View Submissions</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<FeedbackPage />} />
          <Route path="/submissions" element={<SubmissionsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
