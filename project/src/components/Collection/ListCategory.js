import React, { useEffect, useState } from "react";
import CallApi from "../../API/CallApi";

function ListCategory(props) {
  const [cate, setcate] = useState([]);
  const { renderFilterCate, changeTyping, changeGetNameCate } = props;

  useEffect(() => {
    let getData = async () => {
      try {
        let resultData = await CallApi("category", "GET");
        setcate(resultData.data);
      } catch (error) {
        alert("A data download error has occurred. Please reload the page");
      }
    };
    getData();
  }, []);

  let handleFilter = (nameCate) => {
    const getInputElement = document.querySelectorAll(
      ".col-collection__wrap-content__list__item__category-list"
    );

    for (const e of getInputElement) {
      e.addEventListener("click", () => {
        if (e.checked === true) {
          renderFilterCate(nameCate);
          changeTyping({ nameCate, status: e.checked });
        }
      });
    }
    changeGetNameCate(nameCate);
  };

  return (
    <ul className="col-collection__wrap-content__list">
      <li className="col-collection__wrap-content__list__item">
        <h4>Category</h4>
      </li>
      {cate.map((cate, index) => {
        return (
          <li
            onClick={() => handleFilter(cate.name)}
            key={index}
            className="col-collection__wrap-content__list__item"
          >
            <input
              type="radio"
              id={`check-category-${index}`}
              name={"choose-category"}
              className="col-collection__wrap-content__list__item__category-list"
            />
            <label htmlFor={`check-category-${index}`}>{cate.name}</label>
          </li>
        );
      })}
    </ul>
  );
}

export default ListCategory;
