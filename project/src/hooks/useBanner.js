import { useState, useEffect } from "react";
import $ from "jquery";

let animateBtn = (btnClass, animateIn, animeteOut) => {
  $(btnClass)
    .addClass(animateIn)
    .one("webkitAnimationEnd", function () {
      $(this)
        .removeClass(animateIn)
        .addClass(animeteOut)
        .one("webkitAnimationEnd", function () {
          $(btnClass).removeClass(animeteOut);
        });
    });
};

let animateBanner = (
  cActi,
  cAniOut,
  cAni,
  cAniIn,
  cAniInLast,
  cNextActi,
  cAniInLastRemove,
  cActRemove = "activity"
) => {
  $(cActi)
    .addClass(cAniOut)
    .one("webkitAnimationEnd", function (e) {
      $(cAni).removeClass(cAniOut);
      $(this).removeClass(cActRemove);
    });
  cNextActi
    .addClass(cAniIn)
    .addClass(cActRemove)
    .one("webkitAnimationEnd", function (e) {
      $(cAniInLast).addClass(cActRemove).removeClass(cAniInLastRemove);
    });
};

let animateBannerloop = (
  cActi,
  cAniOut,
  cAni,
  cAniIn,
  cAniInLast,
  cNextActi,
  cAniInLastRemove,
  cActRemove = "activity"
) => {
  $(cActi)
    .addClass(cAniOut)
    .one("webkitAnimationEnd", function (e) {
      $(cAni).removeClass(cAniOut);
      $(this).removeClass(cActRemove);
    });
  $(cAniIn)
    .addClass(cAniInLast)
    .addClass(cActRemove)
    .one("webkitAnimationEnd", function (e) {
      $(cNextActi).addClass(cActRemove).removeClass(cAniInLastRemove);
    });
};

function useBanner(props) {
  const [data, setdata] = useState("");
  useEffect(() => {
    let autoPlay = setInterval(function () {
      animateBtn(
        ".btn-banner",
        "animate__animated animate__bounceOutUp",
        "animate__animated animate__bounceInUp"
      );

      let actAfter = $(".activity").next();
      let showAfter = $(".show-banner").next();

      let pos = $(".check").index() + 1;
      if (pos === 3) {
        pos = 0;
      }

      $(".wp-banner__list li").removeClass("check");
      $(".wp-banner__list li:nth-child(" + ++pos + ")").addClass("check");

      if (actAfter.length === 1) {
        animateBanner(
          ".activity",
          "animate__animated animate__fadeOut",
          ".animate__animated",
          "animate__animated animate__fadeInUp",
          ".animate__fadeInUp",
          actAfter,
          "animate__fadeInUp"
        );
        animateBanner(
          ".show-banner",
          "animate__animated animate__flipOutX",
          ".animate__flipOutX",
          "animate__animated animate__flipInX",
          ".animate__flipInX",
          showAfter,
          "animate__flipInX",
          "show-banner"
        );
      } else {
        animateBannerloop(
          ".activity",
          "animate__animated animate__fadeOut",
          ".animate__animated",
          ".wp-banner__wp-imgs_img:first-child",
          "animate__animated animate__fadeInUp",
          ".animate__fadeInUp",
          "animate__fadeInUp"
        );
        animateBannerloop(
          ".show-banner",
          "animate__animated animate__flipOutX",
          ".animate__flipOutX",
          ".wp-banner__wp-sales__sale:first-child",
          "animate__animated animate__flipInX",
          ".animate__flipInX",
          "animate__flipInX",
          "show-banner"
        );
      }
    }, 3800);

    let qr = $(function () {
      $(".wp-banner").on("mouseover", () => {
        clearInterval(autoPlay);
      });

      $(".wp-banner").on("mouseleave", () => {
        autoPlay = setInterval(function () {
          animateBtn(
            ".btn-banner",
            "animate__animated animate__bounceOutUp",
            "animate__animated animate__bounceInUp"
          );

          let actAfter = $(".activity").next();
          let showAfter = $(".show-banner").next();

          let pos = $(".check").index() + 1;
          if (pos === 3) {
            pos = 0;
          }

          $(".wp-banner__list li").removeClass("check");
          $(".wp-banner__list li:nth-child(" + ++pos + ")").addClass("check");

          if (actAfter.length === 1) {
            animateBanner(
              ".activity",
              "animate__animated animate__fadeOut",
              ".animate__animated",
              "animate__animated animate__fadeInUp",
              ".animate__fadeInUp",
              actAfter,
              "animate__fadeInUp"
            );
            animateBanner(
              ".show-banner",
              "animate__animated animate__flipOutX",
              ".animate__flipOutX",
              "animate__animated animate__flipInX",
              ".animate__flipInX",
              showAfter,
              "animate__flipInX",
              "show-banner"
            );
          } else {
            animateBannerloop(
              ".activity",
              "animate__animated animate__fadeOut",
              ".animate__animated",
              ".wp-banner__wp-imgs_img:first-child",
              "animate__animated animate__fadeInUp",
              ".animate__fadeInUp",
              "animate__fadeInUp"
            );
            animateBannerloop(
              ".show-banner",
              "animate__animated animate__flipOutX",
              ".animate__flipOutX",
              ".wp-banner__wp-sales__sale:first-child",
              "animate__animated animate__flipInX",
              ".animate__flipInX",
              "animate__flipInX",
              "show-banner"
            );
          }
        }, 3800);
      });

      $(".btn-banner")
        .addClass("animate__animated animate__bounceInUp")
        .one("webkitAnimationEnd", function () {
          $(".btn-banner").removeClass("animate__animated animate__bounceInUp");
        });

      $(".arr-right").on("click", function () {
        animateBtn(
          ".btn-banner",
          "animate__animated animate__bounceOutUp",
          "animate__animated animate__bounceInUp"
        );
        clearInterval(autoPlay);

        let actAfter = $(".activity").next();
        let showAfter = $(".show-banner").next();

        let pos = $(".check").index() + 1;
        if (pos === 3) {
          pos = 0;
        }

        $(".wp-banner__list li").removeClass("check");
        $(".wp-banner__list li:nth-child(" + ++pos + ")").addClass("check");

        if (actAfter.length === 1) {
          animateBanner(
            ".activity",
            "animate__animated animate__fadeOut",
            ".animate__animated",
            "animate__animated animate__fadeInUp",
            ".animate__fadeInUp",
            actAfter,
            "animate__fadeInUp"
          );
          animateBanner(
            ".show-banner",
            "animate__animated animate__flipOutX",
            ".animate__flipOutX",
            "animate__animated animate__flipInX",
            ".animate__flipInX",
            showAfter,
            "animate__flipInX",
            "show-banner"
          );
        } else {
          animateBannerloop(
            ".activity",
            "animate__animated animate__fadeOut",
            ".animate__animated",
            ".wp-banner__wp-imgs_img:first-child",
            "animate__animated animate__fadeInUp",
            ".animate__fadeInUp",
            "animate__fadeInUp"
          );
          animateBannerloop(
            ".show-banner",
            "animate__animated animate__flipOutX",
            ".animate__flipOutX",
            ".wp-banner__wp-sales__sale:first-child",
            "animate__animated animate__flipInX",
            ".animate__flipInX",
            "animate__flipInX",
            "show-banner"
          );
        }
      });

      $(".arr-left").on("click", function () {
        animateBtn(
          ".btn-banner",
          "animate__animated animate__bounceOutUp",
          "animate__animated animate__bounceInUp"
        );

        clearInterval(autoPlay);

        let actBefore = $(".activity").prev();
        let showBefoer = $(".show-banner").prev();
        let pos = $(".check").index() + 1;
        if (pos === 1) {
          pos = ++$(".wp-banner__list li").length;
        }

        $(".wp-banner__list li").removeClass("check");
        $(".wp-banner__list li:nth-child(" + --pos + ")").addClass("check");

        if (actBefore.length !== 0) {
          animateBanner(
            ".activity",
            "animate__animated animate__backOutRight",
            ".animate__animated",
            "animate__animated animate__backInLeft",
            ".animate__backInLeft",
            actBefore,
            "animate__backInLeft"
          );
          animateBanner(
            ".show-banner",
            "animate__animated animate__flipOutX",
            ".animate__flipOutX",
            "animate__animated animate__flipInX",
            ".animate__flipInX",
            showBefoer,
            "animate__flipInX",
            "show-banner"
          );
        } else {
          animateBannerloop(
            ".activity",
            "animate__animated animate__backOutRight",
            ".animate__animated",
            ".wp-banner__wp-imgs_img:last-child",
            "animate__animated animate__backInLeft",
            ".animate__backInLeft",
            "animate__backInLeft"
          );
          animateBannerloop(
            ".show-banner",
            "animate__animated animate__flipOutX",
            ".animate__flipOutX",
            ".wp-banner__wp-sales__sale:last-child",
            "animate__animated animate__flipInX",
            ".animate__flipInX",
            "animate__flipInX",
            "show-banner"
          );
        }
      });

      $(".wp-banner__list li").on("click", function () {
        $(".wp-banner__list li").removeClass("check");
        $(this).addClass("check");
        let indexEl = $(this).index() + 1;

        animateBannerloop(
          ".activity",
          "animate__animated animate__fadeOut",
          ".animate__animated",
          ".wp-banner__wp-imgs_img:nth-child(" + indexEl + ")",
          "animate__animated animate__fadeInUp",
          ".animate__fadeInUp",
          "animate__fadeInUp"
        );
        animateBtn(
          ".btn-banner",
          "animate__animated animate__bounceOutUp",
          "animate__animated animate__bounceInUp"
        );
        animateBannerloop(
          ".show-banner",
          "animate__animated animate__flipOutX",
          ".animate__flipOutX",
          ".wp-banner__wp-sales__sale:nth-child(" + indexEl + ")",
          "animate__animated animate__flipInX",
          ".animate__flipInX",
          "animate__flipInX",
          "show-banner"
        );
      });
    });
    setdata(qr);
    return () => {
      clearInterval(autoPlay);
    };
  }, []);
  return data;
}

export default useBanner;
