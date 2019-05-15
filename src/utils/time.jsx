class Time {
  format(UnixTime){
    UnixTime = UnixTime.toString();
    let
      a = UnixTime.replace("/Date(", "").replace(")/", ""),
      date = new Date(parseInt(a)),
      y = date.getFullYear(),
      m = date.getMonth() + 1;
    m = m < 10 ? ("0" + m) : m;

    let d = date.getDate();
    d = d < 10 ? ("0" + d) : d;

    let h = date.getHours();
    h = h < 10 ? ("0" + h) : h;

    let
      minute = date.getMinutes(),
      second = date.getSeconds();

    minute = minute < 10 ? ("0" + minute) : minute;
    second = second < 10 ? ("0" + second) : second;
    return `${m}-${d}`;
  }
}

export default new Time();