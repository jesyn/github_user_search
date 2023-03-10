import { useQuery } from "react-query";
import { getUser } from "../api/getUser";
import EmptyCard from "./EmptyCard";

export default function DetaildCard({ user, handleHistory }) {
  const { isLoading, isError, isSuccess, data } = useQuery(
    ["getUser", user],
    () => getUser(user)
  );

  if (isLoading) {
    return <EmptyCard text="Loading..." />;
  }
  if (isError) {
    return <EmptyCard text="There's some error. Try again, please." />;
  }
  if (data.message === "Not Found") {
    return <EmptyCard text="No dev were found. Try 'octocat'." />;
  }

  //console.log(data);

  return (
    <div className="detail">
      <div className="left">
        <img className="avatar" src={data.avatar_url} alt="" />
      </div>
      <div className="right">
        <div className="title">
          <h2>{data.name}</h2>
          <a href={data.html_url}>@{data.login}</a>
        </div>
        <div className="stats">
          <div className="item">
            <small>Repos</small>
            <span>{data.public_repos}</span>
          </div>
          <div className="item">
            <small>Followers</small>
            <span>{data.followers}</span>
          </div>
          <div className="item">
            <small>Following</small>
            <span>{data.following}</span>
          </div>
        </div>
        <ul>
          <li>
            <i className="fas fa-map-marker-alt">
              {" "}
              {data.location ?? " Not available"}
            </i>
          </li>
          <li>
            <i className="fab fa-twitter">
              {" "}
              {data.twitter_username ?? " Not available"}
            </i>{" "}
          </li>
          <li>
            <i className="fas fa-link">
              {data.blog.split("//")[1] ?? " Not available"}
            </i>{" "}
          </li>
          <li>
            <i className="fas fa-building">
              {" "}
              {data.company ?? " Not available"}{" "}
            </i>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
