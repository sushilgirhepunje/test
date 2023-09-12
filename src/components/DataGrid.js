// src/components/CapsulesDataGrid.js
import React from 'react';

function DataGrid({ capsules }) {
  return (
    <div className="capsules-data-grid">
      <table>
        <thead>
          <tr>
            <th>Capsule Serial</th>
            <th>Status</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {capsules.map((capsule) => (
            <tr key={capsule.capsule_serial}>
              <td>{capsule.capsule_serial}</td>
              <td>{capsule.status}</td>
              <td>{capsule.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataGrid;

// // src/components/DataGrid.js
// import React from 'react';

// function DataGrid({ data, filters }) {
//   const filteredData = data.filter((launch) => {
//     return (
//       (!filters.status || launch.status === filters.status) &&
//       (!filters.original_launch ||
//         launch.original_launch === filters.original_launch) &&
//       (!filters.type || launch.type === filters.type)
//     );
//   });

//   return (
//     <div className="data-grid">
//       <table>
//         <thead>
//           <tr>
//             <th>Flight Number</th>
//             <th>Mission Name</th>
//             <th>Launch Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((launch) => (
//             <tr key={launch.flight_number}>
//               <td>{launch.flight_number}</td>
//               <td>{launch.mission_name}</td>
//               <td>{new Date(launch.launch_date_utc).toLocaleDateString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default DataGrid;
