"use strict";
const common_js_indexMessages = require("../../common/js/index-messages.js");
const common_utils_transformTime = require("../../common/utils/transform-time.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "index-message-list",
  data() {
    return {
      newFriends: {},
      messageList: []
    };
  },
  methods: {
    getMessages: function() {
      const res = common_js_indexMessages.getIndexMessages();
      this.newFriends = res.newFriends;
      this.messageList = res.messageList;
    },
    getTime: function(time) {
      return common_utils_transformTime.getTimeState(time);
    }
  },
  // 注意：组件生命周期和页面生命周期不一样
  mounted() {
    this.getMessages();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.newFriends.unread
  }, $data.newFriends.unread ? {
    b: common_vendor.t($data.newFriends.unread > 99 ? "99+" : $data.newFriends.unread)
  } : {}, {
    c: $data.newFriends.avatar,
    d: common_vendor.t($data.newFriends.name),
    e: common_vendor.t($data.newFriends.news),
    f: common_vendor.f($data.messageList, (message, k0, i0) => {
      return common_vendor.e({
        a: message.unread
      }, message.unread ? {
        b: common_vendor.t(message.unread > 99 ? "99+" : message.unread)
      } : {}, {
        c: message.avatar,
        d: common_vendor.t(message.name),
        e: common_vendor.t(message.news),
        f: common_vendor.t($options.getTime(message.time))
      });
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-20c3761b"], ["__file", "/Users/zhangyaru/Desktop/workspace/im-self/components/index-message-list/index-message-list.vue"]]);
wx.createComponent(Component);
//# sourceMappingURL=index-message-list.js.map
