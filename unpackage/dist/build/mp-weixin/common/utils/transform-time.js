"use strict";const r=require("../vendor.js");exports.getTimeState=function(t){const m=r.dayjs(),e=r.dayjs(t);if(!m.isSame(e,"day"))return e.format("YYYY/MM/DD");{let r=e.hour();if(r>=6&&r<=10)return`早上${e.format("HH:mm")}`;if(r>=10&&r<=14)return`中午${e.format("HH:mm")}`;if(r>=14&&r<=18)return`下午${e.format("HH:mm")}`;if(r>=18&&r<=24)return`晚上${e.format("HH:mm")}`;if(r>=0&&r<=6)return`凌晨${e.format("HH:mm")}`}};
//# sourceMappingURL=transform-time.js.map
