import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserProvider, Contract } from 'ethers';
import { CertModuleCert } from "../scdata/deployed_addresses.json";
import { abi } from "../scdata/Cert.json";

const Issuepage = () => {
  const [course, setCourse] = useState('');
  const [cerid, setCerid] = useState('');
  const [cname, setCname] = useState('');
  const [grade, setGrade] = useState('');
  const [date, setDate] = useState('');

  const navigate = useNavigate();

   const provider = new BrowserProvider(window.ethereum);

  async function connectToMetamask() {
    const signer = await provider.getSigner();
    console.log("signer", signer.address);
  }

  async function issueCertificate(e) {
    e.preventDefault()
   
    const signer = await provider.getSigner();
    console.log("signer", signer.address);
    const instance = new Contract(CertModuleCert, abi, signer);
    const txl = await instance.issue(cerid, cname, course, grade, date);
    console.log('form data', txl);
    navigate('/')
  }

  // const submitForm = async (e) => {
  //   e.preventDefault();

  //   const newcerti = {
  //     course,
  //     cerid,
  //     cname,
  //     grade,
  //     date,
  //   };

  //   try {
  //     const res = await addCertificate(newcerti);
  //     if (res.ok) {
  //       navigate("/");
  //     } else {
  //       console.error('Failed to submit certificate');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  // const addCertificate = async (newcerti) => {
  //   const res = await fetch('http://localhost:3004/submitform', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(newcerti),
  //   });
  //   return res;
  // };

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


      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Certificate Dapp</h1>
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Issue New Certificate</h2>
        <form onSubmit={issueCertificate} className="space-y-6">
          <div>
            <label htmlFor="course" className="block text-lg font-medium text-gray-700 mb-2">Select Course*</label>
            <select
              name="course"
              id="course"
              className="w-full h-12 border-gray-300 border-2 rounded-lg px-4"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="cba">Certified Blockchain Associate</option>
              <option value="CED">Certified Ethereum Developer</option>
              <option value="CHF">Certified Hyperledger Fabric Developer</option>
            </select>
          </div>

          <div>
            <label htmlFor="cerid" className="block text-lg font-medium text-gray-700 mb-2">Certificate ID*</label>
            <input
              type="text"
              name="cerid"
              id="cerid"
              className="w-full h-12 border-gray-300 border-2 rounded-lg px-4"
              value={cerid}
              onChange={(e) => setCerid(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="cname" className="block text-lg font-medium text-gray-700 mb-2">Candidate Name*</label>
            <input
              type="text"
              name="cname"
              id="cname"
              className="w-full h-12 border-gray-300 border-2 rounded-lg px-4"
              value={cname}
              onChange={(e) => setCname(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="grade" className="block text-lg font-medium text-gray-700 mb-2">Select Grade*</label>
            <select
              name="grade"
              id="grade"
              className="w-full h-12 border-gray-300 border-2 rounded-lg px-4"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            >
              <option value="s">S</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </div>

          <div>
            <label htmlFor="date" className="block text-lg font-medium text-gray-700 mb-2">Issue Date*</label>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full h-12 border-gray-300 border-2 rounded-lg px-4"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="w-48 h-12 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              Issue Certificate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Issuepage;
