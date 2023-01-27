import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { searchActions } from "../store/search-slice";

const Search = () => {
  const dispatch = useDispatch();
  const keywordRef = useRef();

  return (
    <div>
      <h3>상품검색</h3>
      <div>
        <span>검색</span>
        <select
          onChange={(e) => {
            e.preventDefault();
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
          onClick={() =>
            dispatch(searchActions.setKeyword(keywordRef.current.value))
          }
        >
          조회
        </button>
      </div>
    </div>
  );
};

export default Search;
