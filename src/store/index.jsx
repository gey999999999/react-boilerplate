import { action, runInAction } from "mobx";

class Store {
  /**
     * @author hiroki.zhu
     * @desc 用于设置远端数据到store
     * @param {Array} name observable变量
     * @param {String} item 远端数据的子项,没有可不传,为空则写入data.data,否则写入data.data[item]
     * @param {promise} axios 远端请求promise
     * @return {promise} promise 用完以后扔出去
     * @example
     * setData({
     *   name: "sidebar",
     *   item: 0,
     *   action: axios.get("v1/ui/home?tags=mobile"),
     *   progress: ... //在这里对data进一步处理,这里的返回值也是最终被返回的数据
     * })
     * //上面这句调用的意思,是将v1/ui/home?tags=mobile返回数据的第[0]个放入@observable sidebar=[]中
    */

  @action setValue = (k, v) => {
    this[k] = v;
  }

  @action setData = async ({name, item, action, progress}) => {
    const
      data = await action,
      { setValue } = this;
    let remoteData;
    // setValue(name, []);
    await runInAction(() => {
      remoteData = data.data;
      remoteData = (item && remoteData[item]) ? remoteData[item] : remoteData;
      remoteData = "function" === typeof progress ? progress(remoteData) : remoteData;
      setValue(name, remoteData);
    });
    return remoteData;
  }

  @action setSubData = async ({name, key, item, action, progress}) => {
    const data = await action,
      { setSubValue } = this;
    let remoteData;
    // setSubValue(name, key, []);
    await runInAction(() => {
      remoteData = data.data;
      remoteData = (item && remoteData[item]) ? remoteData[item] : remoteData;
      remoteData = "function" === typeof progress ? progress(remoteData) : remoteData;
      setSubValue(name, key, remoteData);
    });
    return remoteData;
  }
}

export default Store;