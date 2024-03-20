const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
      {sat.map((data) => {
        if(data.operational === false) {
          return (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.launchDate}</td>
              <td>Inactive</td>
            </tr>
          );
        } else if(data.operational === true) {
          return (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.launchDate}</td>
              <td>Active</td>
            </tr>
          );
        }
      })}

     </tbody>
   </table>
  );
};

export default Table;
