import $ from "jquery";
import { useEffect, useState } from "react";

function useSearchBox(props) {
  const [data, setdata] = useState("");

  useEffect(() => {
    let qr = $(function () {
      $('.search-box input[type="text"]').on("click", () => {
        $(".search-box").addClass("show-search");
      });

      $('.search-box input[type="text"] + span').on("click", () => {
        $(".search-box").removeClass("show-search");
        $('.search-box input[type="text"]').val("");
      });

      $(".header-shop__wrap-menu__wrap-icon-item__btn-view-cart").on(
        "click",
        () => {
          $(".wrapper-list-cart").toggleClass("wrapper-list-cart__active");
        }
      );
    });

    setdata(qr);
  }, []);

  return data;
}

export default useSearchBox;
