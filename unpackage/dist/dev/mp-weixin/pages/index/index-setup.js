"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_counter = require("../../stores/counter.js");
const _sfc_main = {
  __name: "index-setup",
  props: {
    id: String
  },
  setup(__props) {
    const counter = stores_counter.useCounterStore();
    counter.count++;
    counter.$patch({ count: counter.count + 1 });
    counter.increment();
    const title1 = common_vendor.ref("Hello");
    common_vendor.onReady(() => {
      console.log("onReady");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(title1.value),
        b: common_vendor.t(common_vendor.unref(counter).count),
        c: common_vendor.o((...args) => _ctx.onClick && _ctx.onClick(...args))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhangyaru/Desktop/workspace/im-self/pages/index/index-setup.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index-setup.js.map
