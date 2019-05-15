/**
 * @file open a dialog when the router will leave.
 */



/**
 * @desc dialog with antd-mobile.
 * @param {String} msg an information to ask the user confirm
 * @param {Function} callback the jump continue receiver with a param of boolean typed
 * @return {Object} antd-mobile Modal
 */

export default (msg = "确定离开该页面?", callback) => {
  // if(window.routerWillLeave){
  //   window.routerWillLeave.close();
  // }

  // window.routerWillLeave = Modal.alert("离开页面", msg, [
  //   { "text": "我再看看", "onPress": () => callback(false) },
  //   { "text": "确定离开", "onPress": () => callback(true) }
  // ]);

  return window.routerWillLeave;
};