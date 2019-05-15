/**
 * @desc rem 相关工具类
 * @author hiroki.zhu
*/

class Flexible {
  flexible(designWidth, maxWidth) {
    let doc = document,
      win = window,
      docEl = doc.documentElement,
      metaEl = doc.querySelector("meta[name='viewport']"),
      flexibleEl = doc.querySelector("meta[name='flexible']"),
      remStyle = document.querySelector("style#rem-root") || document.createElement("style"),
      dpr = 0,
      scale = 0,
      tid;

    if (metaEl) {
      let match = metaEl.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
      if (match) {
        scale = parseFloat(match[1]);
        dpr = parseInt(1 / scale);
      }
    } else if (flexibleEl) {
      let content = flexibleEl.getAttribute("content");
      if (content) {
        let initialDpr = content.match(/initial\-dpr=([\d\.]+)/),
          maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
        if (initialDpr) {
          dpr = parseFloat(initialDpr[1]);
          scale = parseFloat((1 / dpr).toFixed(2));
        }
        if (maximumDpr) {
          dpr = parseFloat(maximumDpr[1]);
          scale = parseFloat((1 / dpr).toFixed(2));
        }
      }
    }
    if (!dpr && !scale) {
      let
        { iphone } = /iphone/.test(navigator.userAgent),
        devicePixelRatio = win.devicePixelRatio;
      if (iphone) {
        if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
          dpr = 3;
        } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
          dpr = 2;
        } else {
          dpr = 1;
        }
      } else {
        dpr = 1;
      }
      scale = 1 / dpr;
    }
    docEl.setAttribute("data-dpr", dpr);
    function refreshRem() {
      let width = docEl.getBoundingClientRect().width;
      maxWidth = maxWidth || 750;
      width > maxWidth && (width = maxWidth);
      let rem = Math.floor(width * 100 / designWidth);
      remStyle.innerHTML = "html{font-size:" + rem + "px !important;}";
      remStyle.id = "rem-root";
    }
    if (docEl.firstElementChild) {
      docEl.firstElementChild.appendChild(remStyle);
    } else {
      let wrap = doc.createDocumentFragment();
      wrap.appendChild(remStyle);
      doc.write(wrap.innerHTML);
      //解除内存占用
      doc.close();
      wrap = null;
    }
    refreshRem();
    win.addEventListener("pageshow", e => {
      if (e.persisted) {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
      }
    }, false);

    win.addEventListener("resize", e => {
      refreshRem();
    }, false);

    if (doc.readyState === "complete") {
      doc.body.style.fontSize = "16px";
    } else {
      doc.addEventListener("DOMContentLoaded", () => {
        doc.body.style.fontSize = "16px";
      }, false);
    }
  }
}

new Flexible().flexible(750, 640);