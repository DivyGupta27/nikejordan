import React, { useState, useEffect } from 'react';
import shoedata from './shoedata'; // Context created with createContext
import { ToastContainer, toast } from 'react-toastify';

const Providershoe = ({ children }) => {
  const [fetchdata, setfetchedata] = useState([]);




  const fetchshoedata = async () => {
    try {
      const response = await fetch('http://localhost:8000/add/shoes/getshoes', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token') 
        }
      });
      const data = await response.json();
      setfetchedata(data);
    } catch (error) {
      console.log('Error fetching shoes:', error);
    }
  };

  useEffect(() => {
    fetchshoedata();
  }, []);


  return (
    <>
      <shoedata.Provider
        value={{
          fetchdata,
        }}
      >
        {children}
      </shoedata.Provider>
      <ToastContainer />
    </>
  );
};

export default Providershoe;
