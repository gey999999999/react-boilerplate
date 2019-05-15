/**
 * @desc 页面切片
 * @author hiroki.zhu
 * 每新建一个页面,都需要在此处声明对应的切片路径
*/

import ReactLoadable from "react-loadable";

export default {
  "home": loading => ReactLoadable({
    loader: () => import("../pages/home"),
    loading
  }),
  "location": loading => ReactLoadable({
    loader: () => import("../pages/location"),
    loading
  })
};