import React from 'react';


const subjects = [
  { name: 'MATH', total: 28, studied: 0 },
  { name: 'BIT MANIPULATION', total: 63, studied: 0 },
  { name: 'Sorting', total: 28, studied: 0 },
  { name: 'Array', total: 28, studied: 0 },
  { name: 'Matrix', total: 28, studied: 0 },
  { name: 'Binary Search', total: 28, studied: 0 },
  { name: 'Sliding Window', total: 28, studied: 0 },
  { name: 'Singly Linked List', total: 28, studied: 0 },
  { name: 'Doubly Linked List', total: 28, studied: 0 },
  { name: 'Stack', total: 28, studied: 0 },
  { name: 'Recursion', total: 46, studied: 0 },
  { name: 'Tree', total: 117, studied: 0 },
  { name: 'Binary Search Tree', total: 34, studied: 0 },
  { name: 'Heap', total: 29, studied: 0 },
  { name: 'Segment Tree', total: 126, studied: 0 },
  { name: 'GRAPH', total: 47, studied: 0 },
  { name: 'Greedy', total: 65, studied: 0 },
  { name: 'Knapsack DP', total: 37, studied: 0 },
  { name: 'LIS & GRID DP', total: 37, studied: 0 },
  { name: 'Buy or Sell Dynamic Programming', total: 58, studied: 0 },
  { name: 'MCM Dynamic Programming', total: 41, studied: 0 },
  { name: 'Digit Dynamic Programming', total: 71, studied: 0 },
  { name: 'String', total: 31, studied: 0 },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Your Dashboard</h1>
      <div className="progress-list">
        {subjects.map((subject, index) => {
          const progress = (subject.studied / subject.total) * 100;

          return (
            <div key={index} className="progress-item">
              <div className="subject-name">{subject.name}</div>
              <div className="subject-stats">
                {subject.studied} of {subject.total} unique cards studied
              </div>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="progress-percent">{progress.toFixed(2)}%</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
