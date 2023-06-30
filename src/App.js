import React, { useEffect, useState } from 'react';
import './App.css'; 
import Navbar from './Navbar';

function App() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch employees data from the API
    fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(data => {
        setEmployees(data.data);
        setFilteredEmployees(data.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleSearch = e => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
  
    const filteredResults = employees.filter(employee =>
      employee.first_name.toLowerCase().includes(searchTerm)
    );
    setFilteredEmployees(filteredResults);
  };
  
  const handleSearchInputFocus = () => {
    setSearchTerm('');
  };
  
  const handleSearchInputBlur = () => {
    if (searchTerm === '') {
      setSearchTerm('');
    }
  };

  
  

  return (
    <div>
     <Navbar searchTerm={searchTerm} onSearchChange={handleSearch} onFocus={handleSearchInputFocus} onBlur={handleSearchInputBlur} />

    <div className="container">
      <div className="employees">
        {filteredEmployees.map(employee => (
          <div key={employee.id} className="employee">
            <div className="id-container">
              <div className="dot"></div>
              <p className="id">{employee.id}</p>
            </div>
            <div className="photo-container">
            <img src={employee.avatar} alt={employee.first_name} className="photo"/>
          </div>
          <div className="name-container">
          <p className="name">{employee.first_name}</p>
          <p className="name">{employee.last_name}</p>
        </div>
        </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;
