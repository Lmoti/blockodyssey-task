import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { searchActions } from "../store/search-slice";
import { pageActions } from "../store/page-slice";
import "./Search.css";

const Search = () => {
  const dispatch = useDispatch();
  const keywordRef = useRef();

  return (
    <div className="search-container">
      <h3>상품검색</h3>
      <div className="search">
        <span>검색</span>
        <select
          onChange={(e) => {
            dispatch(searchActions.setCondition(e.target.value));
          }}
        >
          <option value="all">전체</option>
          <option value="title">상품명</option>
          <option value="brand">브랜드</option>
          <option value="description">상품내용</option>
        </select>
        <input ref={keywordRef} />
        <button
          onClick={() => {
            dispatch(searchActions.setKeyword(keywordRef.current.value));
            dispatch(pageActions.setPage(1));
          }}
        >
          조회
        </button>
      </div>
    </div>
  );
};

export default Search;
