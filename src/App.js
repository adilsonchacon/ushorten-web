import React, { Fragment } from 'react';
import './App.css';
import Main from './components/Main';
import StateMachineProvider from './components/store/StateMachineProvider';

function App() {
  return (
    <Fragment>
      <div className="text-center container mx-auto p-8 m-10">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">u26.io</h1>
        <p className="mb-1 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">URL shortener</p>
      </div>

      <StateMachineProvider>
        <Main/>
      </StateMachineProvider>

    </Fragment>
  );
}
export default App;
