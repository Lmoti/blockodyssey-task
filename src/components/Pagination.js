import React from "react";
import { useSearchParams } from "react-router-dom";
import "./Pagination.css";

const Pagination = ({ total }) => {
  const [params, setParams] = useSearchParams();

  const page = +params.get("page");
  const limit = +params.get("limit");
  const numPages = Math.ceil(total / limit);

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
                  onClick={() => {
                    params.set("page", i + 2);
                    setParams(params);
                  }}
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
                  onClick={() => {
                    params.set("page", page - 1 + i);
                    setParams(params);
                  }}
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
                  onClick={() => {
                    params.set("page", i + 6);
                    setParams(params);
                  }}
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
        defaultValue={limit}
        onChange={(e) => {
          params.set("limit", +e.target.value);
          params.set("page", 1);
          setParams(params);
        }}
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
      {numPages === 10 && limit === 10 ? (
        <>
          <button
            disabled={page === 1}
            onClick={() => {
              params.set("page", page - 1);
              setParams(params);
            }}
          >
            {"<"}
          </button>
          <button
            className={page === 1 ? "current-page" : ""}
            onClick={() => {
              params.set("page", 1);
              setParams(params);
            }}
          >
            1
          </button>
          {mainPagenation(page)}
          <button
            className={page === numPages ? "current-page" : ""}
            onClick={() => {
              params.set("page", numPages);
              setParams(params);
            }}
          >
            {numPages}
          </button>
          <button
            disabled={page === numPages}
            onClick={() => {
              params.set("page", page + 1);
              setParams(params);
            }}
          >
            {">"}
          </button>
        </>
      ) : (
        <>
          <button
            disabled={page === 1}
            onClick={() => {
              params.set("page", page - 1);
              setParams(params);
            }}
          >
            {"<"}
          </button>
          {Array(numPages)
            .fill(1)
            .map((el, i) => {
              return (
                <button
                  className={i + 1 === page ? "current-page" : ""}
                  key={i + 1}
                  onClick={() => {
                    params.set("page", i + 1);
                    setParams(params);
                  }}
                >
                  {i + 1}
                </button>
              );
            })}
          <button
            disabled={page === numPages}
            onClick={() => {
              params.set("page", page + 1);
              setParams(params);
            }}
          >
            {">"}
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;
