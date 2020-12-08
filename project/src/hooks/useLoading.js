import $ from "jquery";
import { useEffect, useState } from "react";

function useLoading(props) {
  const [data, setdata] = useState("");
  useEffect(() => {
    let qr = $(window).on("load", function () {
        $(".wrap-loading").delay(1400).fadeOut("slow/800/fast");
      });
    setdata(qr);
  }, []);

  return data;
}

export default useLoading;
