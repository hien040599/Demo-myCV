import React, { useEffect, useRef, useState } from "react";
import "./Css/style.css";
import MyLink from "../../Constants/CustomLink";

function DealItem(props) {
  const [timeDeal, settimeDeal] = useState("");
  let hh = useRef(48);
  let mm = useRef(59);
  let ss = useRef(59);
  let timeDealHh = timeDeal.slice(0, 2);
  let timeDealMm = timeDeal.slice(2, 4);
  let timeDealSs = timeDeal.slice(4);
  useEffect(() => {
    let getM = 0;
    let getMinute;
    let time = setInterval(() => {
      let getS = (ss.current -= 1);
      let getSeconds = getS < 10 ? "0" + getS : getS;
      if (getSeconds === "0" + 0) {
        getM = mm.current -= 1;
        ss.current = 59;
        getMinute = getM < 10 ? "0" + getM : getM;
      }

      let dateTime = `${hh.current}${
        getM !== 0 ? getMinute : mm.current
      }${getSeconds}`;

      settimeDeal(dateTime);
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, [hh]);

  return (
    <div className="wrapper-deal">
      <div className="wrapper-deal__content">
        <p className="wrapper-deal__content__label">50% Off</p>
        <h2>Deal Of The Week</h2>
        <div className="wrapper-deal__content__time">
          <div className="wrapper-deal__content__time__deal">
            <p>{timeDealHh}</p>
            <p>HRS</p>
          </div>
          <div className="wrapper-deal__content__time__deal">
            <p>{timeDealMm}</p>
            <p>MIN</p>
          </div>
          <div className="wrapper-deal__content__time__deal">
            <p>{timeDealSs}</p>
            <p>SEC</p>
          </div>
        </div>
        <button className="wrapper-deal__content__btn">
          <MyLink lable={"Shop Now"} to={"/collection"} activeExact={true} />
        </button>
      </div>
    </div>
  );
}

export default DealItem;
