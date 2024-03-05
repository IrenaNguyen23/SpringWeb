import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResult.css'
const SearchResults = ({ results }) => (
  <table className="search-results-table ms-3">
    <tbody>
      {results.slice(0, 5).map((result) => {
        console.log('Result:', result); // Log để kiểm tra giá trị của result
        return (
          <div key={result.id} className="row justify-content-md-center">
            <div className="col-md-9">
              <Link to={`/detail?productId=${result.id}`}>
              <div className='row p-3'>{result.title}</div>
              </Link>
              <div className='row p-3'><strong>$ {result.price}</strong></div>
            </div>
            <div className="col-md-3">
              <Link to={`/detail?productId=${result.id}`}>
                <img src={`./images/items/${result.thumbnail}`} className='p-1' alt={`Thumbnail for ${result.title}`} style={{ height: '100px' }}/>
              </Link>
            </div>
          </div>
        );
      })}
    </tbody>
  </table>
);

export default SearchResults;
