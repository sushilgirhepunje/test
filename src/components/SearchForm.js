import React,{useState} from 'react'

const SearchForm = ({onSearch}) => {
    const [filters, setFilters] = useState({
        capsule_serial: '',
        status: '',
        type: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(filters);
      };
    
      return (
        <div className="capsules-search-form">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="capsule_serial"
              value={filters.capsule_serial}
              onChange={handleInputChange}
              placeholder="Search by capsule serial..."
            />
          </div>
          <div>
            <input
              type="text"
              name="status"
              value={filters.status}
              onChange={handleInputChange}
              placeholder="Search by capsule status..."
            />
          </div>
          <div>
            <input
              type="text"
              name="type"
              value={filters.type}
              onChange={handleInputChange}
              placeholder="Search by capsule type..."
            />
          </div>
          <div>
            <button type="submit">Search</button>
          </div>
        </form>
        </div>
      );
    }
    

export default SearchForm