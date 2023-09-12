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
        <div className="capsules-search-form flex flex-row  justify-evenly p-4  shadow-sm shadow-current rounded-xl">
        <form onSubmit={handleSubmit} className='flex flex-row justify-evenly'>
          <div>
            <lable > Capsule Serial No</lable> <br/>
            <input
              type="text"
              name="capsule_serial"
              value={filters.capsule_serial}
              onChange={handleInputChange}
              placeholder="Search by capsule serial..."
            />
          </div>
          <div>
          <label >Capsule Status</label> <br/>
            <input
              type="text"
              name="status"
              value={filters.status}
              onChange={handleInputChange}
              placeholder="Search by capsule status..."
            />
          </div>
          <div>
          <lable >Capsule Type</lable> <br/>
            <input
              type="text"
              name="type"
              value={filters.type}
              onChange={handleInputChange}
              placeholder="Search by capsule type..."
            />
          </div>
          <div>
            <button type="submit" className='bg-gray-600 text-white px-2 my-3 rounded-xl'>Search</button>
          </div>
        </form>
        </div>
      );
    }
    

export default SearchForm