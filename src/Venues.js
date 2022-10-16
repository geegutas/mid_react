

import useFetch from "./useFetch";
import {Link} from 'react-router-dom'

const Venues = () => {
  const { data, loading, error } = useFetch(
    "https://sis.materdeicollege.com/api/venues"
  );


  return (
    <>
    <div className="card bg-light col-md-9 mx-auto mt-3 mb-5">
      <h1 className="text-center bg-primary">
        Mater Dei College Venues
      </h1>
      {error && (
        <p className="text-danger text-center">Something wrong from the API</p>
      )}
      {loading && (
        <div className=" text-center bg-secondary text-darkcol-md">
          Loading Venues...
        </div>
      )}
      <table className="table table-striped text-center">
        <thead>
          <tr>
          <td class="table-dark">#</td>
              <td class="table-primary">Name</td>
              <td class="table-active">Building</td>
              <td class="table-secondary">Capacity</td>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data)?.map((venue, index) => {
            return (
              <tr key={index} className="hover-effect">
                <td class="table-dark">{data[venue].id}</td>
                <td class="table-primary">{data[venue].name}</td>
                <td class="table-active">{data[venue].building}</td>
                <td className="d-flex justify-content-between  align-items-center">
                  <div>{data[venue].capacity}</div>
                  <Link to={`/venues/${data[venue].id}`} className="btn btn-sm btn-primary mt-1 bg-dark">
                        View
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </>

  
  );
};


export default Venues;