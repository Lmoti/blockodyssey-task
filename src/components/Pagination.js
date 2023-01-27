import React, { useEffect } from "react";

const Pagination = ({ page, setPage, limit, setLimit, total }) => {
  const numPages = Math.ceil(total / limit);

  useEffect(() => {
    if (page > numPages) setPage(numPages);
  }, [numPages]);
  return (
    <>
      <div>
        페이지 당 행:
        <select
          onChange={(e) => {
            setLimit(+e.target.value);
          }}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          {"<"}
        </button>
        {Array(numPages)
          .fill(1)
          .map((el, i) => {
            return (
              <button key={i + 1} onClick={() => setPage(i + 1)}>
                {i + 1}
              </button>
            );
          })}
        <button disabled={page === numPages} onClick={() => setPage(page + 1)}>
          {">"}
        </button>
      </div>
    </>
  );
};

export default Pagination;
