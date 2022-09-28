import React, { useState, useEffect } from "react";

const url = "./novicedNav.json";

export default function Pagination() {
     const [pages, setPages] = useState([]);
     const [error, setError] = useState("");

     useEffect(() => {
          fetch(url)
               .then((response) => {
                    if (response.ok) return response.json();
                    throw new Error(
                         "something went wrong while requesting posts"
                    );
               })
               .then((pages) => setPages(pages))
               .catch((error) => setError(error.message));
     }, []);
     if (error) return <h1>{error}</h1>;

     return <div></div>;
}
