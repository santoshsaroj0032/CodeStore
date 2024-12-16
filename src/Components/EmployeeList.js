import React, { useEffect, useState } from 'react';
import { getEmployees } from '../services/apiService';
import { postData, getData } from '../services/apiService';

import './styles.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const data = await getEmployees();
      setEmployees(data.slice(0, 10));  
    };
    fetchEmployees();
  }, []);

  return (
    <div className="list-container">
      <h2>Employee List</h2>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            <strong>ID:</strong> {emp.id}, <strong>Title:</strong> {emp.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
