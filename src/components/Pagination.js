import React, { useEffect } from "react";
import "./Pagination.css";

const Pagination = ({ page, setPage, limit, setLimit, total }) => {
  const numPages = Math.ceil(total / limit);

  useEffect(() => {
    if (page > numPages) setPage(numPages);
  }, [numPages]);

  const mainPagenation = (page) => {
    if (page < 5) {
      return (
        <>
          {Array(4)
            .fill(1)
            .map((el, i) => {
              return (
                <button
                  className={i + 2 === page ? "current-page" : ""}
                  key={i + 2}
                  onClick={() => setPage(i + 2)}
                >
                  {i + 2}
                </button>
              );
            })}
          <button className="disabled-btn" disabled={true}>
            ...
          </button>
        </>
      );
    } else if (page >= 5 && page < 7) {
      return (
        <>
          <button className="disabled-btn" disabled={true}>
            ...
          </button>
          {Array(3)
            .fill(1)
            .map((el, i) => {
              return (
                <button
                  className={page - 1 + i === page ? "current-page" : ""}
                  key={page - 1 + i}
                  onClick={() => setPage(page - 1 + i)}
                >
                  {page - 1 + i}
                </button>
              );
            })}
          <button className="disabled-btn" disabled={true}>
            ...
          </button>
        </>
      );
    } else {
      return (
        <>
          <button className="disabled-btn" disabled={true}>
            ...
          </button>
          {Array(4)
            .fill(1)
            .map((el, i) => {
              return (
                <button
                  className={i + 6 === page ? "current-page" : ""}
                  key={i + 6}
                  onClick={() => setPage(i + 6)}
                >
                  {i + 6}
                </button>
              );
            })}
        </>
      );
    }
  };

  return (
    <div className="pagenation-container">
      <span>페이지 당 행:</span>
      <select
        onChange={(e) => {
          setLimit(+e.target.value);
        }}
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
      {numPages === 10 && limit === 10 ? (
        <>
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            {"<"}
          </button>
          <button
            className={page === 1 ? "current-page" : ""}
            onClick={() => setPage(1)}
          >
            1
          </button>
          {mainPagenation(page)}
          <button
            className={page === numPages ? "current-page" : ""}
            onClick={() => setPage(numPages)}
          >
            {numPages}
          </button>
          <button
            disabled={page === numPages}
            onClick={() => setPage(page + 1)}
          >
            {">"}
          </button>
        </>
      ) : (
        <>
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            {"<"}
          </button>
          {Array(numPages)
            .fill(1)
            .map((el, i) => {
              return (
                <button
                  className={i + 1 === page ? "current-page" : ""}
                  key={i + 1}
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </button>
              );
            })}
          <button
            disabled={page === numPages}
            onClick={() => setPage(page + 1)}
          >
            {">"}
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;
