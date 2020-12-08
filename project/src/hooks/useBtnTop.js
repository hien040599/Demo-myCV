import $ from "jquery";
import { useEffect, useState } from "react";

function useBtnTop(props) {
  const [data, setdata] = useState("");
  useEffect(() => {
    let qr = $(function () {
      $(window).on("scroll", () => {
        let positionHlml = $("html,body").scrollTop();
        if (positionHlml > 175) {
          $(".back-to-top").addClass("show-btn-back-to-top");
        } else {
          $(".back-to-top").removeClass("show-btn-back-to-top");
        }
      });
      $(".back-to-top").on("click", () => {
        $("html,body").animate(
          {
            scrollTop: 0,
          },
          1400
        ); 
      });
    });

    setdata(qr);
  }, []);

  return data;
}

export default useBtnTop;
