import React, { useEffect, useState } from "react";
import CallApi from "../../API/CallApi";

function ListCategory(props) {
  const [cate, setcate] = useState([]);
  const { renderFilterCate, changeTyping } = props;

  useEffect(() => {
    let getData = async () => {
      let resultData = await CallApi("category", "GET");
      setcate(resultData.data);
    };
    getData();
  }, []);

  let handleFilter = (nameCate) => {
    const getInputElement = document.querySelectorAll(
      ".col-collection__wrap-content__list__item input[type='checkbox']"
    );

    for (const e of getInputElement) {
      e.addEventListener("click", () => {
        if (e.checked === true) {
          renderFilterCate(nameCate);
          changeTyping({ nameCate, status: e.checked });
        }
      });
    }
  };

  return (
    <ul className="col-collection__wrap-content__list">
      <li className="col-collection__wrap-content__list__item">
        <h4>Categoty</h4>
      </li>
      {cate.map((cate, index) => {
        return (
          <li
            onClick={() => handleFilter(cate.name)}
            key={index}
            className="col-collection__wrap-content__list__item"
          >
            <input type="checkbox" id={`check-category-${index}`} />
            <label htmlFor={`check-category-${index}`}>{cate.name}</label>
          </li>
        );
      })}
    </ul>
  );
}

export default ListCategory;
