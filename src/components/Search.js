import React, { useRef } from "react";
import "./Search.css";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [params, setParams] = useSearchParams();
  const keywordRef = useRef();
  const keyword = params.get("keyword");

  return (
    <div className="search-container">
      <h3>상품검색</h3>
      <div className="search">
        <span>검색</span>
        <select
          defaultValue={params.get("condition")}
          onChange={(e) => {
            params.set("condition", e.target.value);
          }}
        >
          <option value="all">전체</option>
          <option value="title">상품명</option>
          <option value="brand">브랜드</option>
          <option value="description">상품내용</option>
        </select>
        <input defaultValue={keyword} ref={keywordRef} />
        <button
          onClick={() => {
            params.set("keyword", keywordRef.current.value);
            params.set("page", 1);
            setParams(params);
          }}
        >
          조회
        </button>
      </div>
    </div>
  );
};

export default Search;
