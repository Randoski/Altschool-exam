import React from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import "../assets/single-repo.css";

// import '../css/SingleRepo.css'

export default function Repo() {
  const myRepos = useLocation();
  const { details } = myRepos.state;
  console.log(details);
  return (
    <div className="container">
      <div className="details-holder">
        <div className="extra">
          <img src={details.owner.avatar_url} alt={details.owner.login} className="user-img" />
          <ul>
            <li>
              <h2>{details.owner.login}</h2>
            </li>

            <div className="project-name">
              <p>{details.name}</p>
              {details.private ? <p> Private</p> : <p> Public</p>}
            </div>

            <li className="date-info">
              <p>
                Date created: {format(new Date(details.created_at), "dd MMMM yyyy")} by {details.owner.login}
              </p>
            </li>


          </ul>
        </div>

        <ul className="my-repo">
          <li className="li-item">{details.stargazers_count.toLocaleString()} stars</li>
          <li className="li-item">{details.watchers_count.toLocaleString()} Watchers</li>
          <li>{details.language}</li>
        </ul>

        <div>
          <ul>
            {details.topics &&
              details.topics.map((topic, index) => (
                <React.Fragment key={index}>
                  <li>{topic}</li>
                </React.Fragment>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
