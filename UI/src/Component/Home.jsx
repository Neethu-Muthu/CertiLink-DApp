import { BrowserProvider } from 'ethers';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [id, setId] = useState('');

  const provider = new BrowserProvider(window.ethereum);

  async function connectToMetamask() {
    const signer = await provider.getSigner();
    console.log("signer", signer.address);
  }
 

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
        <nav className="bg-gray-800 p-4 shadow-md w-full">
  <div className="container mx-auto flex flex-wrap items-center justify-between">
    <button 
      onClick={connectToMetamask} 
      className="text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold rounded-lg px-4 py-2 transition duration-400 mb-2 sm:mb-0"
    >
      Connect to Metamask
    </button>
    <div className="flex space-x-4">
      <a 
        href="/" 
        className="text-white hover:text-blue-300 font-semibold transition duration-300"
      >
        Home
      </a>
      <a 
        href="/issue"
        className="text-white hover:text-blue-300 font-semibold transition duration-300"
      >
        Issue Certificate
      </a>
    </div>
  </div>
</nav>
      <h1 className="text-4xl font-bold text-gray-800 mb-10 mt-8">Certificate DApp</h1>
      <img 
        src="/src/assets/images/Dapp.png" 
        alt="Certificate Illustration" 
        className="w-48 h-48 mb-6 shadow-lg rounded-full border-2 border-gray-300"
      />
      <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <label htmlFor="idno" className="block text-lg font-medium text-gray-700 mb-2">Enter your ID:</label>
          <input
            type="text"
            id="id"
            placeholder="Enter your ID"
            className="w-full h-12 border-gray-300 border-2 rounded-lg text-xl p-4 shadow-sm focus:outline-none focus:border-blue-500"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <Link 
          to={`/certificate/${id}`}
        >
          <input 
          type="button"
          name='search'
          value='Submit'
          className="w-full h-12 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
 
          />
          
        </Link>
      </form>
    </div>
  );
};

export default Home;
