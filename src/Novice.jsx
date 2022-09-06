import React, { useState } from "react";
import Spinner from "./Spinner";
import useFetch from "./services/useFetch";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { Link } from "react-router-dom";

export default function NoviceContent() {
  const [title, setTitle] = useState("");
  const { learningTrack } = useParams();

  const {
    data: titles,
    loading,
    error,
  } = useFetch("titles?learningTrack=" + learningTrack);

  function renderTitle(nContent) {
    return (
      <div key={nContent.id} className="title">
        <Link to={`/${learningTrack}/${nContent.id}`}>
          <img src={`/images/${nContent.image}`} alt={nContent.title} />
          <h3>{nContent.title}</h3>
        </Link>
      </div>
    );
  }

  const filteredTitles = title
    ? titles.filter((nContent) =>
        nContent.textContent.find((s) => s.title === title)
      )
    : titles;

  if (error) throw error;
  if (loading) return <Spinner />;
  if (titles.length === 0) return <PageNotFound />;

  return (
    <>
      <section id="filters">
        <label htmlFor="title">Filter by Title:</label>{" "}
        <select
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        >
          <option value="">All titles</option>
          {/* <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option> */}
        </select>
        {title && <h2>Found {filteredTitles.length} items</h2>}
      </section>
      <section id="titles">{filteredTitles.map(renderTitle)}</section>
    </>
  );
}
