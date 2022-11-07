import { Link, NavLink, HashLink, Outlet } from 'react-router-dom';
// import Navigation from '../components/Navigation.jsx'
// import '../css/ReposPage.css';
import { useState, useEffect } from "react";
import { useErrorHandler } from "react-error-boundary"
import useFetch from '../components/useFetch.js';
import Button from 'react-bootstrap/Button';
import '../assets/repositories.css'


export default function Repos() {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState()

  const total = 3;
  const url = `https://api.github.com/users/randoski/repos?page=${page}&per_page=5`
  const { _, data } = useFetch(url)


  return <>

    <main>
      <div className="repo-list">
      {data && data.map(details =>
        <li key={details.id} className="details-holder">
          <p className='heading-2'>{details.name}</p>
          <p className='description'>{details.description}</p>

          <div className="repos-info">
            <p>Language: {details.language}</p> 
            <p>Forks: {details.forks}</p>
            <p>Stars: {details.stargazers_count}</p>
          </div>

              <Link to="singlerepo" target= "" state={{ details: details }} style={{height: "100%" }} className='cta'>View Repo</Link>
        </li>
      )}
      </div>

      {/* Pagination */}
      <div className='buttons'>
        <Button disabled={page <= 1} onClick={() => setPage(prev => prev - 1)}>Prev</Button>

        {Array.from({ length: total }, (_, index) => index + 1).map((doc) =>
          <Button variant="info" onClick={() => setPage(doc)} key={doc}>{doc}</Button>
        )}
        
        <Button disabled={page >= 3} onClick={() => setPage(prev => prev + 1)}>Next</Button>
      </div>


      <Outlet />
    </main>
  </>

}