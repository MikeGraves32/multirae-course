import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./style.css";

const url = "./novicedNav.json";
const PER_PAGE = 10;

export default function GrabPage() {
     const [currentPage, setCurrentPage] = useState(0);
     const [data, setData] = useState([]);

     useEffect(() => {
          fetchData();
     }, []);

     function fetchData() {
          fetch("./novicedNav.json")
               .then((res) => res.json())
               .then((data) => {
                    console.log(data);
                    const {
                         course: { uploads },
                    } = data;
                    setData(uploads);
               });
     }

     function handlePageClick({ selected: selectedPage }) {
          setCurrentPage(selectedPage);
     }

     const offset = currentPage * PER_PAGE;

     const currentPageData = data
          .slice(offset, offset + PER_PAGE)
          .map(({ thumburl }) => <img src={thumburl} />);

     const pageCount = Math.ceil(data.length / PER_PAGE);

     return (
          <div className='GrabPage'>
               <h1>React Paginate Example</h1>
               <ReactPaginate
                    previousLabel={"← Previous"}
                    nextLabel={"Next →"}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}
               />
               {currentPageData}
          </div>
     );
}
