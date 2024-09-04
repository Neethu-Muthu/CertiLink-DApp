import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserProvider, Contract } from 'ethers';
import { CertModuleCert } from "../scdata/deployed_addresses.json";
import { abi } from "../scdata/Cert.json";

const Certificate = () => {
  const [student, setStudent] = useState({});
  const {id } = useParams();
  
  const provider = new BrowserProvider(window.ethereum);
  const [cname, setCname] = useState("");
  const [course, setCourse] = useState("");
  const [grade, setGrade] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    async function getCertificate(id){
      try{
         const signer = await provider.getSigner();
         console.log("signer", signer.address);
        const instance = new Contract(CertModuleCert, abi, signer);
        const result=await instance.Certificates(id);
        console.log(result);
        setCname(result[0]);
        setCourse(result[1]);
        setGrade(result[2]);
        setDate(result[3]);
       
      }
      catch(error){
        console.log(error);

      }

    }
    
    if(id){
      getCertificate(id);
    }
    

    
  }, [id]);


  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-8">
       <nav className="bg-gray-800 p-4 shadow-md">
        
      <div className="container mx-auto flex justify-end items-left space-x-4 mt-4">
        <a 
          href="/" 
          className="text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold rounded-lg px-4 py-2 transition duration-300"
        >
          Home
        </a>
       
      </div>
    </nav>
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <img src="/src/assets/images/im2.png" alt="Academy Logo" className="w-16 h-16 mb-4" />
        <h1 className="text-4xl font-semibold text-red-800 mb-6">KERALA BLOCKCHAIN ACADEMY</h1>
        
        <div className="flex flex-col items-center bg-slate-50 p-8 rounded-lg shadow-md w-full">
          <img src="/src/assets/images/images.jpeg" alt="Student" className="w-32 h-32 mb-4 rounded-full border-4 border-gray-200" />
          <p className="text-lg mb-4">This is to certify that</p>
          <p className="text-2xl font-semibold text-violet-700">{cname}</p>
          <p className="text-lg mb-4">has successfully completed</p>
          <p className="text-2xl font-semibold text-violet-700">{course}</p>
          <p className="text-lg mb-4">course on</p>
          <p className="text-2xl font-semibold text-violet-700">{date}</p>
          <p className="text-lg mb-4">with grade</p>
          <p className="text-2xl font-semibold text-violet-700">{grade}</p>
          <p className="text-lg mt-4"><b>KERALA BLOCKCHAIN ACADEMY</b></p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
