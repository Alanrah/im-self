"use strict";
const common_vendor = require("../vendor.js");
function getTimeState(time) {
  const now = common_vendor.dayjs();
  const date = common_vendor.dayjs(time);
  const isSameDay = now.isSame(date, "day");
  if (isSameDay) {
    let hours = date.hour();
    if (hours >= 6 && hours <= 10)
      return `早上${date.format("HH:mm")}`;
    if (hours >= 10 && hours <= 14)
      return `中午${date.format("HH:mm")}`;
    if (hours >= 14 && hours <= 18)
      return `下午${date.format("HH:mm")}`;
    if (hours >= 18 && hours <= 24)
      return `晚上${date.format("HH:mm")}`;
    if (hours >= 0 && hours <= 6)
      return `凌晨${date.format("HH:mm")}`;
  } else {
    return date.format("YYYY/MM/DD");
  }
}
exports.getTimeState = getTimeState;
//# sourceMappingURL=transform-time.js.map
