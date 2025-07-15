import React from 'react';

const App = () => {
  console.log('App component is rendering');
  
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">
          Pranab Portfolio
        </h1>
        <p className="text-gray-300 mb-4">
          If you can see this, React is working!
        </p>
        <p className="text-sm text-gray-500">
          Check the browser console for any errors
        </p>
      </div>
    </div>
  );
};

export default App; 