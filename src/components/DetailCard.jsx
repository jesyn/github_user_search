import { useQuery } from "react-query";
import EmptyCard from "./EmptyCard";

export default function DetaildCard({ user, handleHistory }) {
  return (
    <div className="detail">
      <div className="left">
        <img className="avatar" src="#" alt="" />
      </div>
      <div className="right">
        <div className="title">
          <h2>Octocat</h2>
          <a href="#">@octocat</a>
        </div>
        <div className="stats">
          <div className="item">
            <small>Repos</small>
            <span>1</span>
          </div>
          <div className="item">
            <small>Followers</small>
            <span>15</span>
          </div>
          <div className="item">
            <small>Following</small>
            <span>24</span>
          </div>
        </div>
        <ul>
          <li>
            <i className="fas fa-map-marker-alt"> "Not available"</i>
          </li>
          <li>
            <i className="fab fa-twitter"> "Not available"</i>{" "}
          </li>
          <li>
            <i className="fas fa-link">"Not available"</i>{" "}
          </li>
          <li>
            <i className="fas fa-building"> "Not available" </i>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
