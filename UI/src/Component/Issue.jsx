// import React, { useState } from 'react';
// import { BrowserProvider, Contract } from 'ethers';
// import { CertModuleCert } from "../scdata/deployed_addresses.json";
// import { abi } from "../scdata/Cert.json";


// const Issue = () => {
//   const[id, setId]=useState('');
//   const[name, setName]=useState('');
//   const[course, setCourse]=useState('Select');
//   const[grade, setGrade]=useState('Select');
//   const[date, setDate]=useState('');
//   const navigate=useNavigate();
//   const provider = new BrowserProvider(window.ethereum);

//   async function connectToMetamask() {
//     const signer = await provider.getSigner();
//     console.log("signer", signer.address);
//   }

//   async function issueCertificate(e) {
//     e.preventDefault();
   
//     const signer = await provider.getSigner();
//     console.log("signer", signer.address);
//     const instance = new Contract(CertModuleCert, abi, signer);
//     const txl = await instance.issue(id, name, course, grade, date);
//     console.log('form data', txl);
//   }



//   return (
//     <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
//       <h1 className="text-4xl font-extrabold text-gray-800 mb-12">Certificate Dapp</h1>
//       <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
//         <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Issue New Certificate</h2>
//         <form className="space-y-6">
//           <div>
//             <label htmlFor="course" className="block text-lg font-medium text-gray-700 mb-2">Select Course*</label>
//             <select
//               name="course"
//               id="course"
//               className="w-full h-12 border-gray-300 border-2 rounded-lg px-4 py-2"
//             >
//               <option value="cba" selected>Certified Blockchain Associate</option>
//               <option value="CED">Certified Ethereum Developer</option>
//               <option value="CHF">Certified Hyperledger Fabric Developer</option>
//             </select>
//           </div>

//           <div>
//             <label htmlFor="cer_id" className="block text-lg font-medium text-gray-700 mb-2">Certificate ID*</label>
//             <input
//               type="text"
//               name="cer_id"
//               id="cer_id"
//               className="w-full h-12 border-gray-300 border-2 rounded-lg px-4"
//             />
//           </div>

//           <div>
//             <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Candidate Name*</label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               className="w-full h-12 border-gray-300 border-2 rounded-lg px-4"
//             />
//           </div>

//           <div>
//             <label htmlFor="grade" className="block text-lg font-medium text-gray-700 mb-2">Select Grade*</label>
//             <select
//               name="grade"
//               id="grade"
//               className="w-full h-12 border-gray-300 border-2 rounded-lg px-4 py-2"
//             >
//               <option value="s">S</option>
//               <option value="A">A</option>
//               <option value="B">B</option>
//               <option value="C">C</option>
//               <option value="D">D</option>
//             </select>
//           </div>

//           <div>
//             <label htmlFor="issue_date" className="block text-lg font-medium text-gray-700 mb-2">Issue Date*</label>
//             <input
//               type="date"
//               name="issue_date"
//               id="issue_date"
//               className="w-full h-12 border-gray-300 border-2 rounded-lg px-4"
//             />
//           </div>

//           <div className="flex justify-end">
//             <button
//               type="submit"
//               className="w-48 h-12 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               Issue Certificate
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Issue;
