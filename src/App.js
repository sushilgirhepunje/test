import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import CapsulesDataGrid from './components/DataGrid'; // Import the CapsulesDataGrid component
import CapsulesSearchForm from './components/SearchForm'; // Import the CapsulesSearchForm component
import axios from 'axios';
import 'tailwindcss/tailwind.css'

function App() {
  const [capsules, setCapsules] = useState([]); // Change 'data' to 'capsules'
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    capsule_serial: '',
    status: '',
    type: '',
  });

  useEffect(() => {
    // Fetch data from the SpaceX API for capsules when the component mounts
    axios.get('https://api.spacexdata.com/v3/capsules') // Update the API URL
      .then((response) => {
        setCapsules(response.data); // Update to set capsules
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching capsule data:', error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (newFilters) => {
    setFilters(newFilters);
  };

  // Function to filter capsules based on search criteria
  const filteredCapsules = capsules.filter((capsule) => {
    return (
      (!filters.capsule_serial || capsule.capsule_serial.includes(filters.capsule_serial)) &&
      (!filters.status || capsule.status.includes(filters.status)) &&
      (!filters.type || capsule.type.includes(filters.type))
    );
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App ">
      <NavBar />
      <Banner />
      <CapsulesSearchForm onSearch={handleSearch} />
      <CapsulesDataGrid capsules={filteredCapsules} /> {/* Use the CapsulesDataGrid component */}
    </div>
  );
}

export default App;
