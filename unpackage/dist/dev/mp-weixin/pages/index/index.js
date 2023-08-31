"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    // 检测类型 + 其他验证
    age: {
      type: Number,
      default: 0,
      required: true,
      validator: function(value) {
        return value >= 0;
      }
    }
  },
  emits: ["in-focus", "submit"],
  data() {
    return {
      textvalue: "123",
      buttontype: "primary"
    };
  },
  onLoad() {
    this.textvalue = "456";
  },
  methods: {
    changetextvalue() {
      this.textvalue = "789";
      common_vendor.index.showToast({
        title: "Hello " + this.textvalue + "!"
      });
      this.$emit("submit", { value: this.textvalue });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.textvalue),
    b: common_vendor.o(($event) => $options.changetextvalue())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/zhangyaru/Desktop/workspace/im-self/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
