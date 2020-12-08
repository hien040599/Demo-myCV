import $ from "jquery";
import { useEffect, useState } from "react";

function useSelectSort(props) {
  const [data, setdata] = useState("");

  useEffect(() => {
    let qr = $(function () {
      let getObjTagli = $(
        ".col-collection-items__sort__select__list .col-collection-items__sort__select__list__item"
      );

      $(".col-collection-items__sort__select__wrap-header").on("click", () => {
        $(".col-collection-items__sort__select__list").toggleClass(
          "show-list-item"
        );
      });

      $.each(getObjTagli, function (index, value) {
        $(value).on("click", () => {
          let textItem = $(this).text();
          $(".col-collection-items__sort__select__list").removeClass(
            "show-list-item"
          );
          $(".col-collection-items__sort__select__wrap-header p").empty();
          $(".col-collection-items__sort__select__wrap-header p").text(
            textItem
          );
        });
      });
    });

    setdata(qr);
  }, []);

  return data;
}

export default useSelectSort;
