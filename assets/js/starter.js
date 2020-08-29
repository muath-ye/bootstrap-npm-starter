/* Importing JavaScript*/
/**/
/* You have two choices for including Bootstrap's JS files—the whole thing,*/
/* or just the bits that you need.*/


/* Option 1*/
/**/
/* Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)*/

import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


/* Option 2*/
/**/
/* Import just what we need */

/* If you're importing tooltips or popovers, be sure to include our Popper.js dependency*/
/* import "../../node_modules/popper.js/dist/popper.min.js";*/

import "../../node_modules/bootstrap/js/dist/util.js";
import "../../node_modules/bootstrap/js/dist/modal.js";


/**
 * Nice Scroll
 */
import "../../node_modules/jquery.nicescroll/dist/jquery.nicescroll.js"
/* 1. Simple mode, it styles document scrollbar:*/
$(function() {
  $("body").niceScroll(
    {
      /* background: "#F2F3F5",*/
      cursorborder: "0",
      cursorwidth: "10px",
      cursorcolor: "#ced0d4",
      rtlmode: "auto",
      smoothscroll: true,
      cursoropacitymin: 0.5,
      autohidemode: "false",
    }
  ).resize();
  $(".nicescroll-box").niceScroll(
    ".nicescroll-box-wrap",
    {
      cursorborder: "0",
      cursorwidth: "10px",
      cursorcolor: "#ced0d4",
      rtlmode: "auto",
      nativeparentscrolling: true,
      smoothscroll: true,
      cursoropacitymin: 0.5,
      scrollbarid: "#container-row-right-sticky",
      autohidemode: "false",
    }
  );
});
/**
 * ./Nice Scroll
 */
