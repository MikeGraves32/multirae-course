import React from "react";
import { Table as BsTable, Pagination, Stack } from "react-bootstrap";

export default function Table({ data, rowsPerPage }) {
     const rows = data.length;
     // use lastPage later to map pagination items and arrows
     const lastPage = Math.ceil(rows / rowsPerPage);
     const [currentPage, setCurrentPage] = React.useState(1);
     const [showedData, showData] = React.useState(data.slice(0, rowsPerPage));
     console.log({ data });
     console.log({ showedData });
     const handleClick = (page) => {
          setCurrentPage(page);
          const pageIndex = page - 1;
          const firstIndex = pageIndex * rowsPerPage;
          const lastIndex = pageIndex * rowsPerPage + rowsPerPage;
          console.log({ firstIndex });
          console.log({ lastIndex });
          showData(data.slice(firstIndex, lastIndex));
     };

     return (
          <Stack gap={3} className='align-items-center'>
               <BsTable bordered striped hover>
                    <thead>
                         <tr>
                              <th>street</th>
                              <th>city</th>
                              <th>zipCode</th>
                              <th>county</th>
                              <th>country</th>
                         </tr>
                    </thead>
                    <tbody>
                         {showedData.map((address, index) => {
                              return (
                                   <tr key={index}>
                                        <td>{address.street}</td>
                                        <td>{address.city}</td>
                                        <td>{address.zipCode}</td>
                                        <td>{address.county}</td>
                                        <td>{address.country}</td>
                                   </tr>
                              );
                         })}
                    </tbody>
               </BsTable>
               <Pagination>
                    <Pagination.Item
                         active={1 === currentPage}
                         onClick={() => handleClick(1)}
                    >
                         {1}
                    </Pagination.Item>
                    <Pagination.Item
                         active={2 === currentPage}
                         onClick={() => handleClick(2)}
                    >
                         {2}
                    </Pagination.Item>
                    <Pagination.Item
                         active={3 === currentPage}
                         onClick={() => handleClick(3)}
                    >
                         {3}
                    </Pagination.Item>
                    <Pagination.Item
                         active={4 === currentPage}
                         onClick={() => handleClick(4)}
                    >
                         4
                    </Pagination.Item>
                    <Pagination.Item
                         active={5 === currentPage}
                         onClick={() => handleClick(5)}
                    >
                         5
                    </Pagination.Item>
               </Pagination>
          </Stack>
     );
}
