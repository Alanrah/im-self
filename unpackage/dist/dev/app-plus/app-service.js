if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$5 = {
    name: "index-topbar"
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "top-bar" }, [
        vue.createElementVNode("view", { class: "top-bar-left" }, [
          vue.createElementVNode("image", { src: "http://47.98.128.255:3001/png/default-avatar.png" })
        ]),
        vue.createElementVNode("view", { class: "top-bar-center" }, [
          vue.createElementVNode("image", { src: "http://47.98.128.255:3001/png/logo.png" })
        ]),
        vue.createElementVNode("view", { class: "top-bar-right" }, [
          vue.createElementVNode("view", { class: "search" }, [
            vue.createElementVNode("image", { src: "http://47.98.128.255:3001/svg/search.svg" })
          ]),
          vue.createElementVNode("view", { class: "add" }, [
            vue.createElementVNode("image", { src: "http://47.98.128.255:3001/svg/add.svg" })
          ])
        ])
      ])
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$3], ["__scopeId", "data-v-5dc2e25d"], ["__file", "/Users/zhangyaru/Desktop/workspace/im-self/components/index-topbar/index-topbar.vue"]]);
  const ON_READY = "onReady";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onReady = /* @__PURE__ */ createHook(ON_READY);
  function getIndexMessages() {
    return {
      newFriends: {
        unread: 2,
        name: "好友申请",
        avatar: "http://47.98.128.255:3001/svg/friend_add.svg",
        news: "您有新的好友请求"
      },
      messageList: [
        {
          avatar: "http://47.98.128.255:3001/png/logo.png",
          name: "开发的实力",
          news: "1cascsacascascasdcascasdcascasd就是你开发的实力就是你开发的实力就是你开发的实力就是你开发的实力就是你开发的实力就是你开发的实力",
          unread: 0,
          time: 1649088e6
        },
        {
          avatar: "http://47.98.128.255:3001/png/logo.png",
          name: "开发的实力",
          news: "1cascsacas力",
          unread: 100,
          time: 1649088e6
        },
        {
          avatar: "http://47.98.128.255:3001/png/logo.png",
          name: "开发的实力",
          news: "1cascsacas力",
          unread: 100,
          time: 1694142883347
        },
        {
          avatar: "http://47.98.128.255:3001/png/logo.png",
          name: "开发的实力",
          news: "1cascsacas力",
          unread: 100,
          time: 1694142883347
        },
        {
          avatar: "http://47.98.128.255:3001/png/logo.png",
          name: "开发的实力",
          news: "1cascsacas力",
          unread: 100,
          time: 1694142883347
        },
        {
          avatar: "http://47.98.128.255:3001/png/logo.png",
          name: "开发的实力",
          news: "1cascsacas力",
          unread: 100,
          time: 1694142883347
        },
        {
          avatar: "http://47.98.128.255:3001/png/logo.png",
          name: "开发的实力",
          news: "1cascsacas力",
          unread: 100,
          time: 1694142883347
        },
        {
          avatar: "http://47.98.128.255:3001/png/logo.png",
          name: "开发的实力",
          news: "1cascsacas力",
          unread: 100,
          time: 1694142883347
        },
        {
          avatar: "http://47.98.128.255:3001/png/logo.png",
          name: "开发的实力",
          news: "1cascsacas力",
          unread: 100,
          time: 1694142883347
        },
        {
          avatar: "http://47.98.128.255:3001/png/logo.png",
          name: "开发的实力",
          news: "1cascsacas力",
          unread: 100,
          time: 1694142883347
        },
        {
          avatar: "http://47.98.128.255:3001/png/logo.png",
          name: "开发的实力",
          news: "1cascsacas力",
          unread: 100,
          time: 1694142883347
        },
        {
          avatar: "http://47.98.128.255:3001/png/logo.png",
          name: "开发的实力",
          news: "1cascsacas力",
          unread: 100,
          time: 1694142883347
        },
        {
          avatar: "http://47.98.128.255:3001/png/logo.png",
          name: "开发的实力",
          news: "1cascsacas力",
          unread: 100,
          time: 1694142883347
        }
      ]
    };
  }
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var dayjs_minExports = {};
  var dayjs_min = {
    get exports() {
      return dayjs_minExports;
    },
    set exports(v) {
      dayjs_minExports = v;
    }
  };
  (function(module, exports) {
    !function(t, e) {
      module.exports = e();
    }(commonjsGlobal, function() {
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v = { s: m, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date())
          return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p = function(t2) {
        return t2 instanceof b;
      }, S = function t2(e2, n2, r2) {
        var i2;
        if (!e2)
          return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1)
            return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i2 = a2;
        }
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
      }, w = function(t2, e2) {
        if (p(t2))
          return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new b(n2);
      }, O = v;
      O.l = S, O.i = p, O.w = function(t2, e2) {
        return w(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var b = function() {
        function M2(t2) {
          this.$L = S(t2.locale, null, true), this.parse(t2);
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2)
              return /* @__PURE__ */ new Date(NaN);
            if (O.u(e2))
              return /* @__PURE__ */ new Date();
            if (e2 instanceof Date)
              return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          }(t2), this.$x = t2.x || {}, this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return O;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t2, e2) {
          var n2 = w(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m2.isAfter = function(t2, e2) {
          return w(t2) < this.startOf(e2);
        }, m2.isBefore = function(t2, e2) {
          return this.endOf(e2) < w(t2);
        }, m2.$g = function(t2, e2, n2) {
          return O.u(t2) ? this[e2] : this.set(n2, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e2) {
          var n2 = this, r2 = !!O.u(e2) || e2, f2 = O.p(t2), l2 = function(t3, e3) {
            var i2 = O.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e3) {
            return O.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h:
              return r2 ? l2(1, 0) : l2(31, 11);
            case c:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s:
              return $2(v2 + "Seconds", 2);
            case i:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e2) {
          var n2, o2 = O.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else
            l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[O.p(t2)]();
        }, m2.add = function(r2, f2) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $2 = O.p(f2), y2 = function(t2) {
            var e2 = w(l2);
            return O.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
          };
          if ($2 === c)
            return this.set(c, this.$M + r2);
          if ($2 === h)
            return this.set(h, this.$y + r2);
          if ($2 === a)
            return y2(1);
          if ($2 === o)
            return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
          return O.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid())
            return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = O.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return O.s(s2 % 12 || 12, t3, "0");
          }, $2 = f2 || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y, function(t3, r3) {
            return r3 || function(t4) {
              switch (t4) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return O.s(e2.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return O.s(a2 + 1, 2, "0");
                case "MMM":
                  return h2(n2.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h2(c2, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return O.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h2(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h2(n2.weekdaysShort, e2.$W, o2, 3);
                case "dddd":
                  return o2[e2.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return O.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $2(s2, u2, true);
                case "A":
                  return $2(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return O.s(u2, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return O.s(e2.$s, 2, "0");
                case "SSS":
                  return O.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            }(t3) || i2.replace(":", "");
          });
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r2, d2, l2) {
          var $2, y2 = this, M3 = O.p(d2), m3 = w(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
            return O.m(y2, m3);
          };
          switch (M3) {
            case h:
              $2 = D2() / 12;
              break;
            case c:
              $2 = D2();
              break;
            case f:
              $2 = D2() / 3;
              break;
            case o:
              $2 = (g2 - v2) / 6048e5;
              break;
            case a:
              $2 = (g2 - v2) / 864e5;
              break;
            case u:
              $2 = g2 / n;
              break;
            case s:
              $2 = g2 / e;
              break;
            case i:
              $2 = g2 / t;
              break;
            default:
              $2 = g2;
          }
          return l2 ? $2 : O.a($2);
        }, m2.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e2) {
          if (!t2)
            return this.$L;
          var n2 = this.clone(), r2 = S(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m2.clone = function() {
          return O.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      }(), _ = b.prototype;
      return w.prototype = _, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function(t2) {
        _[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      }), w.extend = function(t2, e2) {
        return t2.$i || (t2(e2, b, w), t2.$i = true), w;
      }, w.locale = S, w.isDayjs = p, w.unix = function(t2) {
        return w(1e3 * t2);
      }, w.en = D[g], w.Ls = D, w.p = {}, w;
    });
  })(dayjs_min);
  const dayjs = dayjs_minExports;
  function getTimeState(time) {
    const now2 = dayjs();
    const date = dayjs(time);
    const isSameDay = now2.isSame(date, "day");
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
  const _sfc_main$4 = {
    name: "index-message-list",
    data() {
      return {
        newFriends: {},
        messageList: []
      };
    },
    methods: {
      getMessages: function() {
        const res = getIndexMessages();
        this.newFriends = res.newFriends;
        this.messageList = res.messageList;
      },
      getTime: function(time) {
        return getTimeState(time);
      }
    },
    // 注意：组件生命周期和页面生命周期不一样
    mounted() {
      this.getMessages();
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "main" }, [
      vue.createElementVNode("view", { class: "messages" }, [
        vue.createElementVNode("view", { class: "messages-list" }, [
          vue.createCommentVNode(" 好友申请 "),
          vue.createElementVNode("view", { class: "messages-list-item" }, [
            vue.createElementVNode("view", { class: "left" }, [
              $data.newFriends.unread ? (vue.openBlock(), vue.createElementBlock(
                "text",
                {
                  key: 0,
                  class: "unread"
                },
                vue.toDisplayString($data.newFriends.unread > 99 ? "99+" : $data.newFriends.unread),
                1
                /* TEXT */
              )) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("image", {
                src: $data.newFriends.avatar
              }, null, 8, ["src"])
            ]),
            vue.createElementVNode("view", { class: "right" }, [
              vue.createElementVNode(
                "text",
                { class: "name" },
                vue.toDisplayString($data.newFriends.name),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "text",
                { class: "desc" },
                vue.toDisplayString($data.newFriends.news),
                1
                /* TEXT */
              )
            ])
          ]),
          vue.createCommentVNode(" 消息列表 "),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.messageList, (message) => {
              return vue.openBlock(), vue.createElementBlock("view", { class: "messages-list-item" }, [
                vue.createElementVNode("view", { class: "left" }, [
                  message.unread ? (vue.openBlock(), vue.createElementBlock(
                    "text",
                    {
                      key: 0,
                      class: "unread"
                    },
                    vue.toDisplayString(message.unread > 99 ? "99+" : message.unread),
                    1
                    /* TEXT */
                  )) : vue.createCommentVNode("v-if", true),
                  vue.createElementVNode("image", {
                    src: message.avatar
                  }, null, 8, ["src"])
                ]),
                vue.createElementVNode("view", { class: "right" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "name" },
                    vue.toDisplayString(message.name),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    { class: "desc" },
                    vue.toDisplayString(message.news),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    { class: "time" },
                    vue.toDisplayString($options.getTime(message.time)),
                    1
                    /* TEXT */
                  )
                ])
              ]);
            }),
            256
            /* UNKEYED_FRAGMENT */
          ))
        ])
      ])
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$2], ["__scopeId", "data-v-20c3761b"], ["__file", "/Users/zhangyaru/Desktop/workspace/im-self/components/index-message-list/index-message-list.vue"]]);
  const _sfc_main$3 = {};
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_index_topbar = resolveEasycom(vue.resolveDynamicComponent("index-topbar"), __easycom_0);
    const _component_index_message_list = resolveEasycom(vue.resolveDynamicComponent("index-message-list"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "index-content" }, [
      vue.createVNode(_component_index_topbar),
      vue.createVNode(_component_index_message_list)
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1], ["__scopeId", "data-v-1cf27b2a"], ["__file", "/Users/zhangyaru/Desktop/workspace/im-self/pages/index/index.vue"]]);
  var isVue2 = false;
  function set(target, key, val) {
    if (Array.isArray(target)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    target[key] = val;
    return val;
  }
  function del(target, key) {
    if (Array.isArray(target)) {
      target.splice(key, 1);
      return;
    }
    delete target[key];
  }
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  let supported;
  let perf;
  function isPerformanceSupported() {
    var _a;
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
      supported = true;
      perf = global.perf_hooks.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
  }
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = Object.assign({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        },
        now() {
          return now();
        }
      };
      if (hook) {
        hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
          if (pluginId === this.plugin.id) {
            this.fallbacks.setSettings(value);
          }
        });
      }
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor: descriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
    * pinia v2.0.33
    * (c) 2023 Eduardo San Martin Morote
    * @license MIT
    */
  let activePinia;
  const setActivePinia = (pinia) => activePinia = pinia;
  const getActivePinia = () => vue.getCurrentInstance() && vue.inject(piniaSymbol) || activePinia;
  const piniaSymbol = Symbol("pinia");
  function isPlainObject(o) {
    return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
  }
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  const IS_CLIENT = typeof window !== "undefined";
  const USE_DEVTOOLS = IS_CLIENT;
  const _global = /* @__PURE__ */ (() => typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : typeof globalThis === "object" ? globalThis : { HTMLElement: null })();
  function bom(blob, { autoBom = false } = {}) {
    if (autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
      return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
    }
    return blob;
  }
  function download(url, name, opts) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.onload = function() {
      saveAs(xhr.response, name, opts);
    };
    xhr.onerror = function() {
      console.error("could not download file");
    };
    xhr.send();
  }
  function corsEnabled(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", url, false);
    try {
      xhr.send();
    } catch (e) {
    }
    return xhr.status >= 200 && xhr.status <= 299;
  }
  function click(node) {
    try {
      node.dispatchEvent(new MouseEvent("click"));
    } catch (e) {
      const evt = document.createEvent("MouseEvents");
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
      node.dispatchEvent(evt);
    }
  }
  const _navigator = typeof navigator === "object" ? navigator : { userAgent: "" };
  const isMacOSWebView = /* @__PURE__ */ (() => /Macintosh/.test(_navigator.userAgent) && /AppleWebKit/.test(_navigator.userAgent) && !/Safari/.test(_navigator.userAgent))();
  const saveAs = !IS_CLIENT ? () => {
  } : (
    // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
    typeof HTMLAnchorElement !== "undefined" && "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? downloadSaveAs : (
      // Use msSaveOrOpenBlob as a second approach
      "msSaveOrOpenBlob" in _navigator ? msSaveAs : (
        // Fallback to using FileReader and a popup
        fileSaverSaveAs
      )
    )
  );
  function downloadSaveAs(blob, name = "download", opts) {
    const a = document.createElement("a");
    a.download = name;
    a.rel = "noopener";
    if (typeof blob === "string") {
      a.href = blob;
      if (a.origin !== location.origin) {
        if (corsEnabled(a.href)) {
          download(blob, name, opts);
        } else {
          a.target = "_blank";
          click(a);
        }
      } else {
        click(a);
      }
    } else {
      a.href = URL.createObjectURL(blob);
      setTimeout(function() {
        URL.revokeObjectURL(a.href);
      }, 4e4);
      setTimeout(function() {
        click(a);
      }, 0);
    }
  }
  function msSaveAs(blob, name = "download", opts) {
    if (typeof blob === "string") {
      if (corsEnabled(blob)) {
        download(blob, name, opts);
      } else {
        const a = document.createElement("a");
        a.href = blob;
        a.target = "_blank";
        setTimeout(function() {
          click(a);
        });
      }
    } else {
      navigator.msSaveOrOpenBlob(bom(blob, opts), name);
    }
  }
  function fileSaverSaveAs(blob, name, opts, popup) {
    popup = popup || open("", "_blank");
    if (popup) {
      popup.document.title = popup.document.body.innerText = "downloading...";
    }
    if (typeof blob === "string")
      return download(blob, name, opts);
    const force = blob.type === "application/octet-stream";
    const isSafari = /constructor/i.test(String(_global.HTMLElement)) || "safari" in _global;
    const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
      const reader = new FileReader();
      reader.onloadend = function() {
        let url = reader.result;
        if (typeof url !== "string") {
          popup = null;
          throw new Error("Wrong reader.result type");
        }
        url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, "data:attachment/file;");
        if (popup) {
          popup.location.href = url;
        } else {
          location.assign(url);
        }
        popup = null;
      };
      reader.readAsDataURL(blob);
    } else {
      const url = URL.createObjectURL(blob);
      if (popup)
        popup.location.assign(url);
      else
        location.href = url;
      popup = null;
      setTimeout(function() {
        URL.revokeObjectURL(url);
      }, 4e4);
    }
  }
  function toastMessage(message, type) {
    const piniaMessage = "🍍 " + message;
    if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
      __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
    } else if (type === "error") {
      console.error(piniaMessage);
    } else if (type === "warn") {
      console.warn(piniaMessage);
    } else {
      console.log(piniaMessage);
    }
  }
  function isPinia(o) {
    return "_a" in o && "install" in o;
  }
  function checkClipboardAccess() {
    if (!("clipboard" in navigator)) {
      toastMessage(`Your browser doesn't support the Clipboard API`, "error");
      return true;
    }
  }
  function checkNotFocusedError(error) {
    if (error instanceof Error && error.message.toLowerCase().includes("document is not focused")) {
      toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
      return true;
    }
    return false;
  }
  async function actionGlobalCopyState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(pinia.state.value));
      toastMessage("Global state copied to clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalPasteState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      pinia.state.value = JSON.parse(await navigator.clipboard.readText());
      toastMessage("Global state pasted from clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalSaveState(pinia) {
    try {
      saveAs(new Blob([JSON.stringify(pinia.state.value)], {
        type: "text/plain;charset=utf-8"
      }), "pinia-state.json");
    } catch (error) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  let fileInput;
  function getFileOpener() {
    if (!fileInput) {
      fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".json";
    }
    function openFile() {
      return new Promise((resolve, reject) => {
        fileInput.onchange = async () => {
          const files = fileInput.files;
          if (!files)
            return resolve(null);
          const file = files.item(0);
          if (!file)
            return resolve(null);
          return resolve({ text: await file.text(), file });
        };
        fileInput.oncancel = () => resolve(null);
        fileInput.onerror = reject;
        fileInput.click();
      });
    }
    return openFile;
  }
  async function actionGlobalOpenStateFile(pinia) {
    try {
      const open2 = await getFileOpener();
      const result = await open2();
      if (!result)
        return;
      const { text, file } = result;
      pinia.state.value = JSON.parse(text);
      toastMessage(`Global state imported from "${file.name}".`);
    } catch (error) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  function formatDisplay(display) {
    return {
      _custom: {
        display
      }
    };
  }
  const PINIA_ROOT_LABEL = "🍍 Pinia (root)";
  const PINIA_ROOT_ID = "_root";
  function formatStoreForInspectorTree(store) {
    return isPinia(store) ? {
      id: PINIA_ROOT_ID,
      label: PINIA_ROOT_LABEL
    } : {
      id: store.$id,
      label: store.$id
    };
  }
  function formatStoreForInspectorState(store) {
    if (isPinia(store)) {
      const storeNames = Array.from(store._s.keys());
      const storeMap = store._s;
      const state2 = {
        state: storeNames.map((storeId) => ({
          editable: true,
          key: storeId,
          value: store.state.value[storeId]
        })),
        getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
          const store2 = storeMap.get(id);
          return {
            editable: false,
            key: id,
            value: store2._getters.reduce((getters, key) => {
              getters[key] = store2[key];
              return getters;
            }, {})
          };
        })
      };
      return state2;
    }
    const state = {
      state: Object.keys(store.$state).map((key) => ({
        editable: true,
        key,
        value: store.$state[key]
      }))
    };
    if (store._getters && store._getters.length) {
      state.getters = store._getters.map((getterName) => ({
        editable: false,
        key: getterName,
        value: store[getterName]
      }));
    }
    if (store._customProperties.size) {
      state.customProperties = Array.from(store._customProperties).map((key) => ({
        editable: true,
        key,
        value: store[key]
      }));
    }
    return state;
  }
  function formatEventData(events) {
    if (!events)
      return {};
    if (Array.isArray(events)) {
      return events.reduce((data, event) => {
        data.keys.push(event.key);
        data.operations.push(event.type);
        data.oldValue[event.key] = event.oldValue;
        data.newValue[event.key] = event.newValue;
        return data;
      }, {
        oldValue: {},
        keys: [],
        operations: [],
        newValue: {}
      });
    } else {
      return {
        operation: formatDisplay(events.type),
        key: formatDisplay(events.key),
        oldValue: events.oldValue,
        newValue: events.newValue
      };
    }
  }
  function formatMutationType(type) {
    switch (type) {
      case MutationType.direct:
        return "mutation";
      case MutationType.patchFunction:
        return "$patch";
      case MutationType.patchObject:
        return "$patch";
      default:
        return "unknown";
    }
  }
  let isTimelineActive = true;
  const componentStateTypes = [];
  const MUTATIONS_LAYER_ID = "pinia:mutations";
  const INSPECTOR_ID = "pinia";
  const { assign: assign$1 } = Object;
  const getStoreType = (id) => "🍍 " + id;
  function registerPiniaDevtools(app, pinia) {
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app
    }, (api) => {
      if (typeof api.now !== "function") {
        toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
      }
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: `Pinia 🍍`,
        color: 15064968
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Pinia 🍍",
        icon: "storage",
        treeFilterPlaceholder: "Search stores",
        actions: [
          {
            icon: "content_copy",
            action: () => {
              actionGlobalCopyState(pinia);
            },
            tooltip: "Serialize and copy the state"
          },
          {
            icon: "content_paste",
            action: async () => {
              await actionGlobalPasteState(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Replace the state with the content of your clipboard"
          },
          {
            icon: "save",
            action: () => {
              actionGlobalSaveState(pinia);
            },
            tooltip: "Save the state as a JSON file"
          },
          {
            icon: "folder_open",
            action: async () => {
              await actionGlobalOpenStateFile(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Import the state from a JSON file"
          }
        ],
        nodeActions: [
          {
            icon: "restore",
            tooltip: "Reset the state (option store only)",
            action: (nodeId) => {
              const store = pinia._s.get(nodeId);
              if (!store) {
                toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
              } else if (!store._isOptionsAPI) {
                toastMessage(`Cannot reset "${nodeId}" store because it's a setup store.`, "warn");
              } else {
                store.$reset();
                toastMessage(`Store "${nodeId}" reset.`);
              }
            }
          }
        ]
      });
      api.on.inspectComponent((payload, ctx) => {
        const proxy = payload.componentInstance && payload.componentInstance.proxy;
        if (proxy && proxy._pStores) {
          const piniaStores = payload.componentInstance.proxy._pStores;
          Object.values(piniaStores).forEach((store) => {
            payload.instanceData.state.push({
              type: getStoreType(store.$id),
              key: "state",
              editable: true,
              value: store._isOptionsAPI ? {
                _custom: {
                  value: vue.toRaw(store.$state),
                  actions: [
                    {
                      icon: "restore",
                      tooltip: "Reset the state of this store",
                      action: () => store.$reset()
                    }
                  ]
                }
              } : (
                // NOTE: workaround to unwrap transferred refs
                Object.keys(store.$state).reduce((state, key) => {
                  state[key] = store.$state[key];
                  return state;
                }, {})
              )
            });
            if (store._getters && store._getters.length) {
              payload.instanceData.state.push({
                type: getStoreType(store.$id),
                key: "getters",
                editable: false,
                value: store._getters.reduce((getters, key) => {
                  try {
                    getters[key] = store[key];
                  } catch (error) {
                    getters[key] = error;
                  }
                  return getters;
                }, {})
              });
            }
          });
        }
      });
      api.on.getInspectorTree((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          let stores = [pinia];
          stores = stores.concat(Array.from(pinia._s.values()));
          payload.rootNodes = (payload.filter ? stores.filter((store) => "$id" in store ? store.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
        }
      });
      api.on.getInspectorState((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return;
          }
          if (inspectedStore) {
            payload.state = formatStoreForInspectorState(inspectedStore);
          }
        }
      });
      api.on.editInspectorState((payload, ctx) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return toastMessage(`store "${payload.nodeId}" not found`, "error");
          }
          const { path } = payload;
          if (!isPinia(inspectedStore)) {
            if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
              path.unshift("$state");
            }
          } else {
            path.unshift("state");
          }
          isTimelineActive = false;
          payload.set(inspectedStore, path, payload.state.value);
          isTimelineActive = true;
        }
      });
      api.on.editComponentState((payload) => {
        if (payload.type.startsWith("🍍")) {
          const storeId = payload.type.replace(/^🍍\s*/, "");
          const store = pinia._s.get(storeId);
          if (!store) {
            return toastMessage(`store "${storeId}" not found`, "error");
          }
          const { path } = payload;
          if (path[0] !== "state") {
            return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
          }
          path[0] = "$state";
          isTimelineActive = false;
          payload.set(store, path, payload.state.value);
          isTimelineActive = true;
        }
      });
    });
  }
  function addStoreToDevtools(app, store) {
    if (!componentStateTypes.includes(getStoreType(store.$id))) {
      componentStateTypes.push(getStoreType(store.$id));
    }
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app,
      settings: {
        logStoreChanges: {
          label: "Notify about new/deleted stores",
          type: "boolean",
          defaultValue: true
        }
        // useEmojis: {
        //   label: 'Use emojis in messages ⚡️',
        //   type: 'boolean',
        //   defaultValue: true,
        // },
      }
    }, (api) => {
      const now2 = typeof api.now === "function" ? api.now.bind(api) : Date.now;
      store.$onAction(({ after, onError, name, args }) => {
        const groupId = runningActionId++;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🛫 " + name,
            subtitle: "start",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args
            },
            groupId
          }
        });
        after((result) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              title: "🛬 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                result
              },
              groupId
            }
          });
        });
        onError((error) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              logType: "error",
              title: "💥 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                error
              },
              groupId
            }
          });
        });
      }, true);
      store._customProperties.forEach((name) => {
        vue.watch(() => vue.unref(store[name]), (newValue, oldValue) => {
          api.notifyComponentUpdate();
          api.sendInspectorState(INSPECTOR_ID);
          if (isTimelineActive) {
            api.addTimelineEvent({
              layerId: MUTATIONS_LAYER_ID,
              event: {
                time: now2(),
                title: "Change",
                subtitle: name,
                data: {
                  newValue,
                  oldValue
                },
                groupId: activeAction
              }
            });
          }
        }, { deep: true });
      });
      store.$subscribe(({ events, type }, state) => {
        api.notifyComponentUpdate();
        api.sendInspectorState(INSPECTOR_ID);
        if (!isTimelineActive)
          return;
        const eventData = {
          time: now2(),
          title: formatMutationType(type),
          data: assign$1({ store: formatDisplay(store.$id) }, formatEventData(events)),
          groupId: activeAction
        };
        activeAction = void 0;
        if (type === MutationType.patchFunction) {
          eventData.subtitle = "⤵️";
        } else if (type === MutationType.patchObject) {
          eventData.subtitle = "🧩";
        } else if (events && !Array.isArray(events)) {
          eventData.subtitle = events.type;
        }
        if (events) {
          eventData.data["rawEvent(s)"] = {
            _custom: {
              display: "DebuggerEvent",
              type: "object",
              tooltip: "raw DebuggerEvent[]",
              value: events
            }
          };
        }
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: eventData
        });
      }, { detached: true, flush: "sync" });
      const hotUpdate = store._hotUpdate;
      store._hotUpdate = vue.markRaw((newStore) => {
        hotUpdate(newStore);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🔥 " + store.$id,
            subtitle: "HMR update",
            data: {
              store: formatDisplay(store.$id),
              info: formatDisplay(`HMR update`)
            }
          }
        });
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
      });
      const { $dispose } = store;
      store.$dispose = () => {
        $dispose();
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.getSettings().logStoreChanges && toastMessage(`Disposed "${store.$id}" store 🗑`);
      };
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.getSettings().logStoreChanges && toastMessage(`"${store.$id}" store installed 🆕`);
    });
  }
  let runningActionId = 0;
  let activeAction;
  function patchActionForGrouping(store, actionNames) {
    const actions = actionNames.reduce((storeActions, actionName) => {
      storeActions[actionName] = vue.toRaw(store)[actionName];
      return storeActions;
    }, {});
    for (const actionName in actions) {
      store[actionName] = function() {
        const _actionId = runningActionId;
        const trackedStore = new Proxy(store, {
          get(...args) {
            activeAction = _actionId;
            return Reflect.get(...args);
          },
          set(...args) {
            activeAction = _actionId;
            return Reflect.set(...args);
          }
        });
        return actions[actionName].apply(trackedStore, arguments);
      };
    }
  }
  function devtoolsPlugin({ app, store, options }) {
    if (store.$id.startsWith("__hot:")) {
      return;
    }
    if (options.state) {
      store._isOptionsAPI = true;
    }
    if (typeof options.state === "function") {
      patchActionForGrouping(
        // @ts-expect-error: can cast the store...
        store,
        Object.keys(options.actions)
      );
      const originalHotUpdate = store._hotUpdate;
      vue.toRaw(store)._hotUpdate = function(newStore) {
        originalHotUpdate.apply(this, arguments);
        patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions));
      };
    }
    addStoreToDevtools(
      app,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      store
    );
  }
  function createPinia() {
    const scope = vue.effectScope(true);
    const state = scope.run(() => vue.ref({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia = vue.markRaw({
      install(app) {
        setActivePinia(pinia);
        {
          pinia._a = app;
          app.provide(piniaSymbol, pinia);
          app.config.globalProperties.$pinia = pinia;
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(app, pinia);
          }
          toBeInstalled.forEach((plugin) => _p.push(plugin));
          toBeInstalled = [];
        }
      },
      use(plugin) {
        if (!this._a && !isVue2) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      // it's actually undefined here
      // @ts-expect-error
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
      pinia.use(devtoolsPlugin);
    }
    return pinia;
  }
  const isUseStore = (fn) => {
    return typeof fn === "function" && typeof fn.$id === "string";
  };
  function patchObject(newState, oldState) {
    for (const key in oldState) {
      const subPatch = oldState[key];
      if (!(key in newState)) {
        continue;
      }
      const targetValue = newState[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        newState[key] = patchObject(targetValue, subPatch);
      } else {
        {
          newState[key] = subPatch;
        }
      }
    }
    return newState;
  }
  function acceptHMRUpdate(initialUseStore, hot) {
    return (newModule) => {
      const pinia = hot.data.pinia || initialUseStore._pinia;
      if (!pinia) {
        return;
      }
      hot.data.pinia = pinia;
      for (const exportName in newModule) {
        const useStore = newModule[exportName];
        if (isUseStore(useStore) && pinia._s.has(useStore.$id)) {
          const id = useStore.$id;
          if (id !== initialUseStore.$id) {
            console.warn(`The id of the store changed from "${initialUseStore.$id}" to "${id}". Reloading.`);
            return hot.invalidate();
          }
          const existingStore = pinia._s.get(id);
          if (!existingStore) {
            console.log(`[Pinia]: skipping hmr because store doesn't exist yet`);
            return;
          }
          useStore(pinia, existingStore);
        }
      }
    };
  }
  const noop = () => {
  };
  function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
    subscriptions.push(callback);
    const removeSubscription = () => {
      const idx = subscriptions.indexOf(callback);
      if (idx > -1) {
        subscriptions.splice(idx, 1);
        onCleanup();
      }
    };
    if (!detached && vue.getCurrentScope()) {
      vue.onScopeDispose(removeSubscription);
    }
    return removeSubscription;
  }
  function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
      callback(...args);
    });
  }
  function mergeReactiveObjects(target, patchToApply) {
    if (target instanceof Map && patchToApply instanceof Map) {
      patchToApply.forEach((value, key) => target.set(key, value));
    }
    if (target instanceof Set && patchToApply instanceof Set) {
      patchToApply.forEach(target.add, target);
    }
    for (const key in patchToApply) {
      if (!patchToApply.hasOwnProperty(key))
        continue;
      const subPatch = patchToApply[key];
      const targetValue = target[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        target[key] = mergeReactiveObjects(targetValue, subPatch);
      } else {
        target[key] = subPatch;
      }
    }
    return target;
  }
  const skipHydrateSymbol = Symbol("pinia:skipHydration");
  function skipHydrate(obj) {
    return Object.defineProperty(obj, skipHydrateSymbol, {});
  }
  function shouldHydrate(obj) {
    return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
  }
  const { assign } = Object;
  function isComputed(o) {
    return !!(vue.isRef(o) && o.effect);
  }
  function createOptionsStore(id, options, pinia, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia.state.value[id];
    let store;
    function setup() {
      if (!initialState && !hot) {
        {
          pinia.state.value[id] = state ? state() : {};
        }
      }
      const localState = hot ? (
        // use ref() to unwrap refs inside state TODO: check if this is still necessary
        vue.toRefs(vue.ref(state ? state() : {}).value)
      ) : vue.toRefs(pinia.state.value[id]);
      return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
        if (name in localState) {
          console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
        }
        computedGetters[name] = vue.markRaw(vue.computed(() => {
          setActivePinia(pinia);
          const store2 = pinia._s.get(id);
          return getters[name].call(store2, store2);
        }));
        return computedGetters;
      }, {}));
    }
    store = createSetupStore(id, setup, options, pinia, hot, true);
    return store;
  }
  function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({ actions: {} }, options);
    if (!pinia._e.active) {
      throw new Error("Pinia destroyed");
    }
    const $subscribeOptions = {
      deep: true
      // flush: 'post',
    };
    {
      $subscribeOptions.onTrigger = (event) => {
        if (isListening) {
          debuggerEvents = event;
        } else if (isListening == false && !store._hotUpdating) {
          if (Array.isArray(debuggerEvents)) {
            debuggerEvents.push(event);
          } else {
            console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.");
          }
        }
      };
    }
    let isListening;
    let isSyncListening;
    let subscriptions = vue.markRaw([]);
    let actionSubscriptions = vue.markRaw([]);
    let debuggerEvents;
    const initialState = pinia.state.value[$id];
    if (!isOptionsStore && !initialState && !hot) {
      {
        pinia.state.value[$id] = {};
      }
    }
    const hotState = vue.ref({});
    let activeListener;
    function $patch(partialStateOrMutator) {
      let subscriptionMutation;
      isListening = isSyncListening = false;
      {
        debuggerEvents = [];
      }
      if (typeof partialStateOrMutator === "function") {
        partialStateOrMutator(pinia.state.value[$id]);
        subscriptionMutation = {
          type: MutationType.patchFunction,
          storeId: $id,
          events: debuggerEvents
        };
      } else {
        mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
        subscriptionMutation = {
          type: MutationType.patchObject,
          payload: partialStateOrMutator,
          storeId: $id,
          events: debuggerEvents
        };
      }
      const myListenerId = activeListener = Symbol();
      vue.nextTick().then(() => {
        if (activeListener === myListenerId) {
          isListening = true;
        }
      });
      isSyncListening = true;
      triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
    }
    const $reset = isOptionsStore ? function $reset2() {
      const { state } = options;
      const newState = state ? state() : {};
      this.$patch(($state) => {
        assign($state, newState);
      });
    } : (
      /* istanbul ignore next */
      () => {
        throw new Error(`🍍: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
      }
    );
    function $dispose() {
      scope.stop();
      subscriptions = [];
      actionSubscriptions = [];
      pinia._s.delete($id);
    }
    function wrapAction(name, action) {
      return function() {
        setActivePinia(pinia);
        const args = Array.from(arguments);
        const afterCallbackList = [];
        const onErrorCallbackList = [];
        function after(callback) {
          afterCallbackList.push(callback);
        }
        function onError(callback) {
          onErrorCallbackList.push(callback);
        }
        triggerSubscriptions(actionSubscriptions, {
          args,
          name,
          store,
          after,
          onError
        });
        let ret;
        try {
          ret = action.apply(this && this.$id === $id ? this : store, args);
        } catch (error) {
          triggerSubscriptions(onErrorCallbackList, error);
          throw error;
        }
        if (ret instanceof Promise) {
          return ret.then((value) => {
            triggerSubscriptions(afterCallbackList, value);
            return value;
          }).catch((error) => {
            triggerSubscriptions(onErrorCallbackList, error);
            return Promise.reject(error);
          });
        }
        triggerSubscriptions(afterCallbackList, ret);
        return ret;
      };
    }
    const _hmrPayload = /* @__PURE__ */ vue.markRaw({
      actions: {},
      getters: {},
      state: [],
      hotState
    });
    const partialStore = {
      _p: pinia,
      // _s: scope,
      $id,
      $onAction: addSubscription.bind(null, actionSubscriptions),
      $patch,
      $reset,
      $subscribe(callback, options2 = {}) {
        const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
        const stopWatcher = scope.run(() => vue.watch(() => pinia.state.value[$id], (state) => {
          if (options2.flush === "sync" ? isSyncListening : isListening) {
            callback({
              storeId: $id,
              type: MutationType.direct,
              events: debuggerEvents
            }, state);
          }
        }, assign({}, $subscribeOptions, options2)));
        return removeSubscription;
      },
      $dispose
    };
    const store = vue.reactive(
      assign(
        {
          _hmrPayload,
          _customProperties: vue.markRaw(/* @__PURE__ */ new Set())
          // devtools custom properties
        },
        partialStore
        // must be added later
        // setupStore
      )
    );
    pinia._s.set($id, store);
    const setupStore = pinia._e.run(() => {
      scope = vue.effectScope();
      return scope.run(() => setup());
    });
    for (const key in setupStore) {
      const prop = setupStore[key];
      if (vue.isRef(prop) && !isComputed(prop) || vue.isReactive(prop)) {
        if (hot) {
          set(hotState.value, key, vue.toRef(setupStore, key));
        } else if (!isOptionsStore) {
          if (initialState && shouldHydrate(prop)) {
            if (vue.isRef(prop)) {
              prop.value = initialState[key];
            } else {
              mergeReactiveObjects(prop, initialState[key]);
            }
          }
          {
            pinia.state.value[$id][key] = prop;
          }
        }
        {
          _hmrPayload.state.push(key);
        }
      } else if (typeof prop === "function") {
        const actionValue = hot ? prop : wrapAction(key, prop);
        {
          setupStore[key] = actionValue;
        }
        {
          _hmrPayload.actions[key] = prop;
        }
        optionsForPlugin.actions[key] = prop;
      } else {
        if (isComputed(prop)) {
          _hmrPayload.getters[key] = isOptionsStore ? (
            // @ts-expect-error
            options.getters[key]
          ) : prop;
          if (IS_CLIENT) {
            const getters = setupStore._getters || // @ts-expect-error: same
            (setupStore._getters = vue.markRaw([]));
            getters.push(key);
          }
        }
      }
    }
    {
      assign(store, setupStore);
      assign(vue.toRaw(store), setupStore);
    }
    Object.defineProperty(store, "$state", {
      get: () => hot ? hotState.value : pinia.state.value[$id],
      set: (state) => {
        if (hot) {
          throw new Error("cannot set hotState");
        }
        $patch(($state) => {
          assign($state, state);
        });
      }
    });
    {
      store._hotUpdate = vue.markRaw((newStore) => {
        store._hotUpdating = true;
        newStore._hmrPayload.state.forEach((stateKey) => {
          if (stateKey in store.$state) {
            const newStateTarget = newStore.$state[stateKey];
            const oldStateSource = store.$state[stateKey];
            if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
              patchObject(newStateTarget, oldStateSource);
            } else {
              newStore.$state[stateKey] = oldStateSource;
            }
          }
          set(store, stateKey, vue.toRef(newStore.$state, stateKey));
        });
        Object.keys(store.$state).forEach((stateKey) => {
          if (!(stateKey in newStore.$state)) {
            del(store, stateKey);
          }
        });
        isListening = false;
        isSyncListening = false;
        pinia.state.value[$id] = vue.toRef(newStore._hmrPayload, "hotState");
        isSyncListening = true;
        vue.nextTick().then(() => {
          isListening = true;
        });
        for (const actionName in newStore._hmrPayload.actions) {
          const action = newStore[actionName];
          set(store, actionName, wrapAction(actionName, action));
        }
        for (const getterName in newStore._hmrPayload.getters) {
          const getter = newStore._hmrPayload.getters[getterName];
          const getterValue = isOptionsStore ? (
            // special handling of options api
            vue.computed(() => {
              setActivePinia(pinia);
              return getter.call(store, store);
            })
          ) : getter;
          set(store, getterName, getterValue);
        }
        Object.keys(store._hmrPayload.getters).forEach((key) => {
          if (!(key in newStore._hmrPayload.getters)) {
            del(store, key);
          }
        });
        Object.keys(store._hmrPayload.actions).forEach((key) => {
          if (!(key in newStore._hmrPayload.actions)) {
            del(store, key);
          }
        });
        store._hmrPayload = newStore._hmrPayload;
        store._getters = newStore._getters;
        store._hotUpdating = false;
      });
    }
    if (USE_DEVTOOLS) {
      const nonEnumerable = {
        writable: true,
        configurable: true,
        // avoid warning on devtools trying to display this property
        enumerable: false
      };
      ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p) => {
        Object.defineProperty(store, p, assign({ value: store[p] }, nonEnumerable));
      });
    }
    pinia._p.forEach((extender) => {
      if (USE_DEVTOOLS) {
        const extensions = scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        }));
        Object.keys(extensions || {}).forEach((key) => store._customProperties.add(key));
        assign(store, extensions);
      } else {
        assign(store, scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        })));
      }
    });
    if (store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
      console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
    }
    if (initialState && isOptionsStore && options.hydrate) {
      options.hydrate(store.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store;
  }
  function defineStore(idOrOptions, setup, setupOptions) {
    let id;
    let options;
    const isSetupStore = typeof setup === "function";
    if (typeof idOrOptions === "string") {
      id = idOrOptions;
      options = isSetupStore ? setupOptions : setup;
    } else {
      options = idOrOptions;
      id = idOrOptions.id;
    }
    function useStore(pinia, hot) {
      const currentInstance = vue.getCurrentInstance();
      pinia = // in test mode, ignore the argument provided as we can always retrieve a
      // pinia instance with getActivePinia()
      pinia || currentInstance && vue.inject(piniaSymbol, null);
      if (pinia)
        setActivePinia(pinia);
      if (!activePinia) {
        throw new Error(`[🍍]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
      }
      pinia = activePinia;
      if (!pinia._s.has(id)) {
        if (isSetupStore) {
          createSetupStore(id, setup, options, pinia);
        } else {
          createOptionsStore(id, options, pinia);
        }
        {
          useStore._pinia = pinia;
        }
      }
      const store = pinia._s.get(id);
      if (hot) {
        const hotId = "__hot:" + id;
        const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
        hot._hotUpdate(newStore);
        delete pinia.state.value[hotId];
        pinia._s.delete(hotId);
      }
      if (IS_CLIENT && currentInstance && currentInstance.proxy && // avoid adding stores that are just built for hot module replacement
      !hot) {
        const vm = currentInstance.proxy;
        const cache = "_pStores" in vm ? vm._pStores : vm._pStores = {};
        cache[id] = store;
      }
      return store;
    }
    useStore.$id = id;
    return useStore;
  }
  let mapStoreSuffix = "Store";
  function setMapStoreSuffix(suffix) {
    mapStoreSuffix = suffix;
  }
  function mapStores(...stores) {
    if (Array.isArray(stores[0])) {
      console.warn(`[🍍]: Directly pass all stores to "mapStores()" without putting them in an array:
Replace
	mapStores([useAuthStore, useCartStore])
with
	mapStores(useAuthStore, useCartStore)
This will fail in production if not fixed.`);
      stores = stores[0];
    }
    return stores.reduce((reduced, useStore) => {
      reduced[useStore.$id + mapStoreSuffix] = function() {
        return useStore(this.$pinia);
      };
      return reduced;
    }, {});
  }
  function mapState(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = function() {
        return useStore(this.$pinia)[key];
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = function() {
        const store = useStore(this.$pinia);
        const storeKey = keysOrMapper[key];
        return typeof storeKey === "function" ? storeKey.call(this, store) : store[storeKey];
      };
      return reduced;
    }, {});
  }
  const mapGetters = mapState;
  function mapActions(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = function(...args) {
        return useStore(this.$pinia)[key](...args);
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = function(...args) {
        return useStore(this.$pinia)[keysOrMapper[key]](...args);
      };
      return reduced;
    }, {});
  }
  function mapWritableState(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = {
        get() {
          return useStore(this.$pinia)[key];
        },
        set(value) {
          return useStore(this.$pinia)[key] = value;
        }
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = {
        get() {
          return useStore(this.$pinia)[keysOrMapper[key]];
        },
        set(value) {
          return useStore(this.$pinia)[keysOrMapper[key]] = value;
        }
      };
      return reduced;
    }, {});
  }
  function storeToRefs(store) {
    {
      store = vue.toRaw(store);
      const refs = {};
      for (const key in store) {
        const value = store[key];
        if (vue.isRef(value) || vue.isReactive(value)) {
          refs[key] = // ---
          vue.toRef(store, key);
        }
      }
      return refs;
    }
  }
  const PiniaVuePlugin = function(_Vue) {
    _Vue.mixin({
      beforeCreate() {
        const options = this.$options;
        if (options.pinia) {
          const pinia = options.pinia;
          if (!this._provided) {
            const provideCache = {};
            Object.defineProperty(this, "_provided", {
              get: () => provideCache,
              set: (v) => Object.assign(provideCache, v)
            });
          }
          this._provided[piniaSymbol] = pinia;
          if (!this.$pinia) {
            this.$pinia = pinia;
          }
          pinia._a = this;
          if (IS_CLIENT) {
            setActivePinia(pinia);
          }
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(pinia._a, pinia);
          }
        } else if (!this.$pinia && options.parent && options.parent.$pinia) {
          this.$pinia = options.parent.$pinia;
        }
      },
      destroyed() {
        delete this._pStores;
      }
    });
  };
  const Pinia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    get MutationType() {
      return MutationType;
    },
    PiniaVuePlugin,
    acceptHMRUpdate,
    createPinia,
    defineStore,
    getActivePinia,
    mapActions,
    mapGetters,
    mapState,
    mapStores,
    mapWritableState,
    setActivePinia,
    setMapStoreSuffix,
    skipHydrate,
    storeToRefs
  }, Symbol.toStringTag, { value: "Module" }));
  const useCounterStore = defineStore("counter", {
    state: () => {
      return { count: 0 };
    },
    // 也可以这样定义
    // state: () => ({ count: 0 })
    actions: {
      increment() {
        this.count++;
      }
    }
  });
  const _sfc_main$2 = {
    __name: "index-setup",
    props: {
      id: String
    },
    setup(__props) {
      const counter = useCounterStore();
      counter.count++;
      counter.$patch({ count: counter.count + 1 });
      counter.increment();
      const title1 = vue.ref("Hello");
      onReady(() => {
        formatAppLog("log", "at pages/index/index-setup.vue:34", "onReady");
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("image", {
            class: "logo",
            src: "http://47.98.128.255:3001/png/logo.png"
          }),
          vue.createElementVNode("view", { class: "text-area" }, [
            vue.createElementVNode(
              "text",
              { class: "title" },
              vue.toDisplayString(title1.value),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "div",
              null,
              "Current Count: " + vue.toDisplayString(vue.unref(counter).count),
              1
              /* TEXT */
            ),
            vue.createElementVNode("button", {
              onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args)),
              "data-eventsync": "true"
            }, "OK")
          ])
        ]);
      };
    }
  };
  const PagesIndexIndexSetup = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "/Users/zhangyaru/Desktop/workspace/im-self/pages/index/index-setup.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/Users/zhangyaru/Desktop/workspace/im-self/pages/login/login.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/index/index-setup", PagesIndexIndexSetup);
  __definePage("pages/login/login", PagesLoginLogin);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/zhangyaru/Desktop/workspace/im-self/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(createPinia());
    return {
      app,
      Pinia
      // 此处必须将 Pinia 返回
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNlcnZpY2UuanMiLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9pbmRleC10b3BiYXIvaW5kZXgtdG9wYmFyLnZ1ZSIsIiIsIiIsInVuaS1hcHA6Ly8vY29tbW9uL2pzL2luZGV4LW1lc3NhZ2VzLmpzIiwiIiwidW5pLWFwcDovLy9jb21tb24vdXRpbHMvdHJhbnNmb3JtLXRpbWUuanMiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvaW5kZXgtbWVzc2FnZS1saXN0L2luZGV4LW1lc3NhZ2UtbGlzdC52dWUiLCJ1bmktYXBwOi8vL3BhZ2VzL2luZGV4L2luZGV4LnZ1ZSIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsInVuaS1hcHA6Ly8vc3RvcmVzL2NvdW50ZXIuanMiLCJ1bmktYXBwOi8vL3BhZ2VzL2luZGV4L2luZGV4LXNldHVwLnZ1ZSIsInVuaS1hcHA6Ly8vcGFnZXMvbG9naW4vbG9naW4udnVlIiwidW5pLWFwcDovLy9BcHAudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XG5cdFx0PHZpZXcgY2xhc3M9XCJ0b3AtYmFyXCI+XG5cdFx0XHQ8dmlldyBjbGFzcz1cInRvcC1iYXItbGVmdFwiPlxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiaHR0cDovLzQ3Ljk4LjEyOC4yNTU6MzAwMS9wbmcvZGVmYXVsdC1hdmF0YXIucG5nXCI+PC9pbWFnZT5cblx0XHRcdDwvdmlldz5cblx0XHRcdDx2aWV3IGNsYXNzPVwidG9wLWJhci1jZW50ZXJcIj5cblx0XHRcdFx0PGltYWdlIHNyYz1cImh0dHA6Ly80Ny45OC4xMjguMjU1OjMwMDEvcG5nL2xvZ28ucG5nXCI+PC9pbWFnZT5cblx0XHRcdDwvdmlldz5cblx0XHRcdDx2aWV3IGNsYXNzPVwidG9wLWJhci1yaWdodFwiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlYXJjaFwiPlxuXHRcdFx0XHRcdDxpbWFnZSBzcmM9XCJodHRwOi8vNDcuOTguMTI4LjI1NTozMDAxL3N2Zy9zZWFyY2guc3ZnXCI+PC9pbWFnZT5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImFkZFwiPlxuXHRcdFx0XHRcdDxpbWFnZSBzcmM9XCJodHRwOi8vNDcuOTguMTI4LjI1NTozMDAxL3N2Zy9hZGQuc3ZnXCI+PC9pbWFnZT5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC92aWV3PlxuXHRcdDwvdmlldz5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6IFwiaW5kZXgtdG9wYmFyXCIsXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi5jb250ZW50IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGhlaWdodDpmaXQtY29udGVudDtcbn1cblxuLnRvcC1iYXIge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHRvcDogMDtcblx0bGVmdDogMDtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogODhycHg7XG5cdGJhY2tncm91bmQ6ICR1bmktYmctY29sb3I7XG5cdGJveC1zaGFkb3c6IDBweCAxcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cdHotaW5kZXg6IDk5O1xuXHRwYWRkaW5nLXRvcDogdmFyKC0tc3RhdHVzLWJhci1oZWlnaHQpO1xuXG5cdC50b3AtYmFyLWxlZnQge1xuXHRcdGZsb2F0OiBsZWZ0O1xuXG5cdFx0aW1hZ2Uge1xuXHRcdFx0d2lkdGg6IDYycnB4O1xuXHRcdFx0aGVpZ2h0OiA2MnJweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDE2cnB4O1xuXHRcdFx0bWFyZ2luOiAxNXJweDtcblx0XHR9XG5cdH1cblxuXHQudG9wLWJhci1jZW50ZXIge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHR0b3A6IGNhbGMoMTJycHggKyB2YXIoLS1zdGF0dXMtYmFyLWhlaWdodCkpO1xuXHRcdG1hcmdpbjogYXV0bztcblxuXHRcdGltYWdlIHtcblx0XHRcdHdpZHRoOiA2OHJweDtcblx0XHRcdGhlaWdodDogNjhycHg7XG5cdFx0fVxuXHR9XG5cblx0LnRvcC1iYXItcmlnaHQge1xuXHRcdGZsb2F0OiByaWdodDtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cblx0XHQuc2VhcmNoIHtcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdG1hcmdpbi1yaWdodDogJHVuaS1zcGFjaW5nLXJvdy1iYXNlO1xuXHRcdH1cblxuXHRcdC5hZGQge1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdH1cblxuXHRcdGltYWdlIHtcblx0XHRcdHdpZHRoOiA1NnJweDtcblx0XHRcdGhlaWdodDogNTZycHg7XG5cdFx0XHRtYXJnaW4tdG9wOiAxOHJweDtcblx0XHR9XG5cdH1cbn08L3N0eWxlPiIsImltcG9ydCB7IGlzSFRNTFRhZywgaXNTVkdUYWcsIGh5cGhlbmF0ZSwgY2FtZWxpemUsIGlzU3RyaW5nLCBpc0Z1bmN0aW9uLCBpc1BsYWluT2JqZWN0LCBleHRlbmQsIGlzQXJyYXksIGNhcGl0YWxpemUgfSBmcm9tICdAdnVlL3NoYXJlZCc7XG5cbmNvbnN0IEJVSUxUX0lOX1RBR19OQU1FUyA9IFtcbiAgICAnYWQnLFxuICAgICdhZC1jb250ZW50LXBhZ2UnLFxuICAgICdhZC1kcmF3JyxcbiAgICAnYXVkaW8nLFxuICAgICdidXR0b24nLFxuICAgICdjYW1lcmEnLFxuICAgICdjYW52YXMnLFxuICAgICdjaGVja2JveCcsXG4gICAgJ2NoZWNrYm94LWdyb3VwJyxcbiAgICAnY292ZXItaW1hZ2UnLFxuICAgICdjb3Zlci12aWV3JyxcbiAgICAnZWRpdG9yJyxcbiAgICAnZm9ybScsXG4gICAgJ2Z1bmN0aW9uYWwtcGFnZS1uYXZpZ2F0b3InLFxuICAgICdpY29uJyxcbiAgICAnaW1hZ2UnLFxuICAgICdpbnB1dCcsXG4gICAgJ2xhYmVsJyxcbiAgICAnbGl2ZS1wbGF5ZXInLFxuICAgICdsaXZlLXB1c2hlcicsXG4gICAgJ21hcCcsXG4gICAgJ21vdmFibGUtYXJlYScsXG4gICAgJ21vdmFibGUtdmlldycsXG4gICAgJ25hdmlnYXRvcicsXG4gICAgJ29mZmljaWFsLWFjY291bnQnLFxuICAgICdvcGVuLWRhdGEnLFxuICAgICdwaWNrZXInLFxuICAgICdwaWNrZXItdmlldycsXG4gICAgJ3BpY2tlci12aWV3LWNvbHVtbicsXG4gICAgJ3Byb2dyZXNzJyxcbiAgICAncmFkaW8nLFxuICAgICdyYWRpby1ncm91cCcsXG4gICAgJ3JpY2gtdGV4dCcsXG4gICAgJ3Njcm9sbC12aWV3JyxcbiAgICAnc2xpZGVyJyxcbiAgICAnc3dpcGVyJyxcbiAgICAnc3dpcGVyLWl0ZW0nLFxuICAgICdzd2l0Y2gnLFxuICAgICd0ZXh0JyxcbiAgICAndGV4dGFyZWEnLFxuICAgICd2aWRlbycsXG4gICAgJ3ZpZXcnLFxuICAgICd3ZWItdmlldycsXG5dO1xuY29uc3QgQlVJTFRfSU5fVEFHUyA9IEJVSUxUX0lOX1RBR19OQU1FUy5tYXAoKHRhZykgPT4gJ3VuaS0nICsgdGFnKTtcbmNvbnN0IFRBR1MgPSBbXG4gICAgJ2FwcCcsXG4gICAgJ2xheW91dCcsXG4gICAgJ2NvbnRlbnQnLFxuICAgICdtYWluJyxcbiAgICAndG9wLXdpbmRvdycsXG4gICAgJ2xlZnQtd2luZG93JyxcbiAgICAncmlnaHQtd2luZG93JyxcbiAgICAndGFiYmFyJyxcbiAgICAncGFnZScsXG4gICAgJ3BhZ2UtaGVhZCcsXG4gICAgJ3BhZ2Utd3JhcHBlcicsXG4gICAgJ3BhZ2UtYm9keScsXG4gICAgJ3BhZ2UtcmVmcmVzaCcsXG4gICAgJ2FjdGlvbnNoZWV0JyxcbiAgICAnbW9kYWwnLFxuICAgICd0b2FzdCcsXG4gICAgJ3Jlc2l6ZS1zZW5zb3InLFxuICAgICdzaGFkb3ctcm9vdCcsXG5dLm1hcCgodGFnKSA9PiAndW5pLScgKyB0YWcpO1xuY29uc3QgTlZVRV9CVUlMVF9JTl9UQUdTID0gW1xuICAgICdzdmcnLFxuICAgICd2aWV3JyxcbiAgICAnYScsXG4gICAgJ2RpdicsXG4gICAgJ2ltZycsXG4gICAgJ2ltYWdlJyxcbiAgICAndGV4dCcsXG4gICAgJ3NwYW4nLFxuICAgICdpbnB1dCcsXG4gICAgJ3RleHRhcmVhJyxcbiAgICAnc3Bpbm5lcicsXG4gICAgJ3NlbGVjdCcsXG4gICAgLy8gc2xpZGVyIOiiq+iHquWumuS5iSB1LXNsaWRlciDmm7/ku6NcbiAgICAvLyAnc2xpZGVyJyxcbiAgICAnc2xpZGVyLW5laWdoYm9yJyxcbiAgICAnaW5kaWNhdG9yJyxcbiAgICAnY2FudmFzJyxcbiAgICAnbGlzdCcsXG4gICAgJ2NlbGwnLFxuICAgICdoZWFkZXInLFxuICAgICdsb2FkaW5nJyxcbiAgICAnbG9hZGluZy1pbmRpY2F0b3InLFxuICAgICdyZWZyZXNoJyxcbiAgICAnc2Nyb2xsYWJsZScsXG4gICAgJ3Njcm9sbGVyJyxcbiAgICAndmlkZW8nLFxuICAgICd3ZWInLFxuICAgICdlbWJlZCcsXG4gICAgJ3RhYmJhcicsXG4gICAgJ3RhYmhlYWRlcicsXG4gICAgJ2RhdGVwaWNrZXInLFxuICAgICd0aW1lcGlja2VyJyxcbiAgICAnbWFycXVlZScsXG4gICAgJ2NvdW50ZG93bicsXG4gICAgJ2RjLXN3aXRjaCcsXG4gICAgJ3dhdGVyZmFsbCcsXG4gICAgJ3JpY2h0ZXh0JyxcbiAgICAncmVjeWNsZS1saXN0JyxcbiAgICAndS1zY2FsYWJsZScsXG4gICAgJ2JhcmNvZGUnLFxuICAgICdnY2FudmFzJyxcbl07XG5jb25zdCBVVlVFX0JVSUxUX0lOX1RBR1MgPSBbJ2xvYWRpbmctaW5kaWNhdG9yJ107XG5jb25zdCBOVlVFX1VfQlVJTFRfSU5fVEFHUyA9IFtcbiAgICAndS10ZXh0JyxcbiAgICAndS1pbWFnZScsXG4gICAgJ3UtaW5wdXQnLFxuICAgICd1LXRleHRhcmVhJyxcbiAgICAndS12aWRlbycsXG4gICAgJ3Utd2ViLXZpZXcnLFxuICAgICd1LXNsaWRlcicsXG4gICAgJ3UtYWQnLFxuICAgICd1LWFkLWRyYXcnLFxuICAgICd1LXJpY2gtdGV4dCcsXG5dO1xuZnVuY3Rpb24gaXNCdWlsdEluQ29tcG9uZW50KHRhZykge1xuICAgIC8vIGg1IOW5s+WPsOS8muiiq+i9rOaNouS4uiB2LXVuaS1cbiAgICByZXR1cm4gQlVJTFRfSU5fVEFHUy5pbmRleE9mKCd1bmktJyArIHRhZy5yZXBsYWNlKCd2LXVuaS0nLCAnJykpICE9PSAtMTtcbn1cbmZ1bmN0aW9uIGlzSDVDdXN0b21FbGVtZW50KHRhZykge1xuICAgIHJldHVybiBUQUdTLmluZGV4T2YodGFnKSAhPT0gLTEgfHwgQlVJTFRfSU5fVEFHUy5pbmRleE9mKHRhZykgIT09IC0xO1xufVxuZnVuY3Rpb24gaXNINU5hdGl2ZVRhZyh0YWcpIHtcbiAgICByZXR1cm4gKHRhZyAhPT0gJ2hlYWQnICYmXG4gICAgICAgIChpc0hUTUxUYWcodGFnKSB8fCBpc1NWR1RhZyh0YWcpKSAmJlxuICAgICAgICAhaXNCdWlsdEluQ29tcG9uZW50KHRhZykpO1xufVxuZnVuY3Rpb24gaXNBcHBOYXRpdmVUYWcodGFnKSB7XG4gICAgcmV0dXJuIGlzSFRNTFRhZyh0YWcpIHx8IGlzU1ZHVGFnKHRhZykgfHwgaXNCdWlsdEluQ29tcG9uZW50KHRhZyk7XG59XG5jb25zdCBOVlVFX0NVU1RPTV9DT01QT05FTlRTID0gW1xuICAgICdhZCcsXG4gICAgJ2FkLWRyYXcnLFxuICAgICdidXR0b24nLFxuICAgICdjaGVja2JveC1ncm91cCcsXG4gICAgJ2NoZWNrYm94JyxcbiAgICAnZm9ybScsXG4gICAgJ2ljb24nLFxuICAgICdsYWJlbCcsXG4gICAgJ21vdmFibGUtYXJlYScsXG4gICAgJ21vdmFibGUtdmlldycsXG4gICAgJ25hdmlnYXRvcicsXG4gICAgJ3BpY2tlcicsXG4gICAgJ3Byb2dyZXNzJyxcbiAgICAncmFkaW8tZ3JvdXAnLFxuICAgICdyYWRpbycsXG4gICAgJ3JpY2gtdGV4dCcsXG4gICAgJ3N3aXBlci1pdGVtJyxcbiAgICAnc3dpcGVyJyxcbiAgICAnc3dpdGNoJyxcbiAgICAnc2xpZGVyJyxcbiAgICAncGlja2VyLXZpZXcnLFxuICAgICdwaWNrZXItdmlldy1jb2x1bW4nLFxuXTtcbmZ1bmN0aW9uIGlzQXBwVVZ1ZU5hdGl2ZVRhZyh0YWcpIHtcbiAgICBpZiAoVVZVRV9CVUlMVF9JTl9UQUdTLmluY2x1ZGVzKHRhZykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChOVlVFX0NVU1RPTV9DT01QT05FTlRTLmluY2x1ZGVzKHRhZykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXNCdWlsdEluQ29tcG9uZW50KHRhZykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIHUtdGV4dCx1LXZpZGVvLi4uXG4gICAgaWYgKE5WVUVfVV9CVUlMVF9JTl9UQUdTLmluY2x1ZGVzKHRhZykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQXBwTlZ1ZU5hdGl2ZVRhZyh0YWcpIHtcbiAgICBpZiAoTlZVRV9CVUlMVF9JTl9UQUdTLmluY2x1ZGVzKHRhZykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChOVlVFX0NVU1RPTV9DT01QT05FTlRTLmluY2x1ZGVzKHRhZykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXNCdWlsdEluQ29tcG9uZW50KHRhZykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIHUtdGV4dCx1LXZpZGVvLi4uXG4gICAgaWYgKE5WVUVfVV9CVUlMVF9JTl9UQUdTLmluY2x1ZGVzKHRhZykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzTWluaVByb2dyYW1OYXRpdmVUYWcodGFnKSB7XG4gICAgcmV0dXJuIGlzQnVpbHRJbkNvbXBvbmVudCh0YWcpO1xufVxuZnVuY3Rpb24gY3JlYXRlSXNDdXN0b21FbGVtZW50KHRhZ3MgPSBbXSkge1xuICAgIHJldHVybiBmdW5jdGlvbiBpc0N1c3RvbUVsZW1lbnQodGFnKSB7XG4gICAgICAgIHJldHVybiB0YWdzLmluY2x1ZGVzKHRhZyk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGlzQ29tcG9uZW50VGFnKHRhZykge1xuICAgIHJldHVybiB0YWdbMF0udG9Mb3dlckNhc2UoKSArIHRhZy5zbGljZSgxKSA9PT0gJ2NvbXBvbmVudCc7XG59XG5jb25zdCBDT01QT05FTlRfU0VMRUNUT1JfUFJFRklYID0gJ3VuaS0nO1xuY29uc3QgQ09NUE9ORU5UX1BSRUZJWCA9ICd2LScgKyBDT01QT05FTlRfU0VMRUNUT1JfUFJFRklYO1xuXG5jb25zdCBMSU5FRkVFRCA9ICdcXG4nO1xuY29uc3QgTkFWQkFSX0hFSUdIVCA9IDQ0O1xuY29uc3QgVEFCQkFSX0hFSUdIVCA9IDUwO1xuY29uc3QgT05fUkVBQ0hfQk9UVE9NX0RJU1RBTkNFID0gNTA7XG5jb25zdCBSRVNQT05TSVZFX01JTl9XSURUSCA9IDc2ODtcbmNvbnN0IFVOSV9TVE9SQUdFX0xPQ0FMRSA9ICdVTklfTE9DQUxFJztcbi8vIHF1aWNrYXBwLXdlYnZpZXcg5LiN6IO95L2/55SoIGRlZmF1bHQg5L2c5Li65o+S5qe95ZCN56ewXG5jb25zdCBTTE9UX0RFRkFVTFRfTkFNRSA9ICdkJztcbmNvbnN0IENPTVBPTkVOVF9OQU1FX1BSRUZJWCA9ICdWVW5pJztcbmNvbnN0IEkxOE5fSlNPTl9ERUxJTUlURVJTID0gWyclJywgJyUnXTtcbmNvbnN0IFBSSU1BUllfQ09MT1IgPSAnIzAwN2FmZic7XG5jb25zdCBTRUxFQ1RFRF9DT0xPUiA9ICcjMDA2MmNjJzsgLy8g6YCJ5Lit55qE6aKc6Imy77yM5aaC6YCJ6aG55Y2h6buY6K6k55qE6YCJ5Lit6aKc6ImyXG5jb25zdCBCQUNLR1JPVU5EX0NPTE9SID0gJyNmN2Y3ZjcnOyAvLyDog4zmma/oibLvvIzlpoLmoIfpopjmoI/pu5jorqTog4zmma/oibJcbmNvbnN0IFVOSV9TU1IgPSAnX191bmlTU1InO1xuY29uc3QgVU5JX1NTUl9USVRMRSA9ICd0aXRsZSc7XG5jb25zdCBVTklfU1NSX1NUT1JFID0gJ3N0b3JlJztcbmNvbnN0IFVOSV9TU1JfREFUQSA9ICdkYXRhJztcbmNvbnN0IFVOSV9TU1JfR0xPQkFMX0RBVEEgPSAnZ2xvYmFsRGF0YSc7XG5jb25zdCBTQ0hFTUVfUkUgPSAvXihbYS16LV0rOik/XFwvXFwvL2k7XG5jb25zdCBEQVRBX1JFID0gL15kYXRhOi4qLC4qLztcbmNvbnN0IFdFQl9JTlZPS0VfQVBQU0VSVklDRSA9ICdXRUJfSU5WT0tFX0FQUFNFUlZJQ0UnO1xuY29uc3QgV1hTX1BST1RPQ09MID0gJ3d4czovLyc7XG5jb25zdCBKU09OX1BST1RPQ09MID0gJ2pzb246Ly8nO1xuY29uc3QgV1hTX01PRFVMRVMgPSAnd3hzTW9kdWxlcyc7XG5jb25zdCBSRU5ERVJKU19NT0RVTEVTID0gJ3JlbmRlcmpzTW9kdWxlcyc7XG4vLyBsaWZlY3ljbGVcbi8vIEFwcCBhbmQgUGFnZVxuY29uc3QgT05fU0hPVyA9ICdvblNob3cnO1xuY29uc3QgT05fSElERSA9ICdvbkhpZGUnO1xuLy9BcHBcbmNvbnN0IE9OX0xBVU5DSCA9ICdvbkxhdW5jaCc7XG5jb25zdCBPTl9FUlJPUiA9ICdvbkVycm9yJztcbmNvbnN0IE9OX1RIRU1FX0NIQU5HRSA9ICdvblRoZW1lQ2hhbmdlJztcbmNvbnN0IE9GRl9USEVNRV9DSEFOR0UgPSAnb2ZmVGhlbWVDaGFuZ2UnO1xuY29uc3QgT05fS0VZQk9BUkRfSEVJR0hUX0NIQU5HRSA9ICdvbktleWJvYXJkSGVpZ2h0Q2hhbmdlJztcbmNvbnN0IE9OX1BBR0VfTk9UX0ZPVU5EID0gJ29uUGFnZU5vdEZvdW5kJztcbmNvbnN0IE9OX1VOSEFORExFX1JFSkVDVElPTiA9ICdvblVuaGFuZGxlZFJlamVjdGlvbic7XG4vL1BhZ2VcbmNvbnN0IE9OX0xPQUQgPSAnb25Mb2FkJztcbmNvbnN0IE9OX1JFQURZID0gJ29uUmVhZHknO1xuY29uc3QgT05fVU5MT0FEID0gJ29uVW5sb2FkJztcbi8vIOeZvuW6pueJueaciVxuY29uc3QgT05fSU5JVCA9ICdvbkluaXQnO1xuLy8g5b6u5L+h54m55pyJXG5jb25zdCBPTl9TQVZFX0VYSVRfU1RBVEUgPSAnb25TYXZlRXhpdFN0YXRlJztcbmNvbnN0IE9OX1JFU0laRSA9ICdvblJlc2l6ZSc7XG5jb25zdCBPTl9CQUNLX1BSRVNTID0gJ29uQmFja1ByZXNzJztcbmNvbnN0IE9OX1BBR0VfU0NST0xMID0gJ29uUGFnZVNjcm9sbCc7XG5jb25zdCBPTl9UQUJfSVRFTV9UQVAgPSAnb25UYWJJdGVtVGFwJztcbmNvbnN0IE9OX1JFQUNIX0JPVFRPTSA9ICdvblJlYWNoQm90dG9tJztcbmNvbnN0IE9OX1BVTExfRE9XTl9SRUZSRVNIID0gJ29uUHVsbERvd25SZWZyZXNoJztcbmNvbnN0IE9OX1NIQVJFX1RJTUVMSU5FID0gJ29uU2hhcmVUaW1lbGluZSc7XG5jb25zdCBPTl9BRERfVE9fRkFWT1JJVEVTID0gJ29uQWRkVG9GYXZvcml0ZXMnO1xuY29uc3QgT05fU0hBUkVfQVBQX01FU1NBR0UgPSAnb25TaGFyZUFwcE1lc3NhZ2UnO1xuLy8gbmF2aWdhdGlvbkJhclxuY29uc3QgT05fTkFWSUdBVElPTl9CQVJfQlVUVE9OX1RBUCA9ICdvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAnO1xuY29uc3QgT05fTkFWSUdBVElPTl9CQVJfQ0hBTkdFID0gJ29uTmF2aWdhdGlvbkJhckNoYW5nZSc7XG5jb25zdCBPTl9OQVZJR0FUSU9OX0JBUl9TRUFSQ0hfSU5QVVRfQ0xJQ0tFRCA9ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQnO1xuY29uc3QgT05fTkFWSUdBVElPTl9CQVJfU0VBUkNIX0lOUFVUX0NIQU5HRUQgPSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkJztcbmNvbnN0IE9OX05BVklHQVRJT05fQkFSX1NFQVJDSF9JTlBVVF9DT05GSVJNRUQgPSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQnO1xuY29uc3QgT05fTkFWSUdBVElPTl9CQVJfU0VBUkNIX0lOUFVUX0ZPQ1VTX0NIQU5HRUQgPSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRGb2N1c0NoYW5nZWQnO1xuLy8gZnJhbWV3b3JrXG5jb25zdCBPTl9BUFBfRU5URVJfRk9SRUdST1VORCA9ICdvbkFwcEVudGVyRm9yZWdyb3VuZCc7XG5jb25zdCBPTl9BUFBfRU5URVJfQkFDS0dST1VORCA9ICdvbkFwcEVudGVyQmFja2dyb3VuZCc7XG5jb25zdCBPTl9XRUJfSU5WT0tFX0FQUF9TRVJWSUNFID0gJ29uV2ViSW52b2tlQXBwU2VydmljZSc7XG5jb25zdCBPTl9XWFNfSU5WT0tFX0NBTExfTUVUSE9EID0gJ29uV3hzSW52b2tlQ2FsbE1ldGhvZCc7XG5cbmZ1bmN0aW9uIGlzQ29tcG9uZW50SW50ZXJuYWxJbnN0YW5jZSh2bSkge1xuICAgIHJldHVybiAhIXZtLmFwcENvbnRleHQ7XG59XG5mdW5jdGlvbiByZXNvbHZlQ29tcG9uZW50SW5zdGFuY2UoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gKGluc3RhbmNlICYmXG4gICAgICAgIChpc0NvbXBvbmVudEludGVybmFsSW5zdGFuY2UoaW5zdGFuY2UpID8gaW5zdGFuY2UucHJveHkgOiBpbnN0YW5jZSkpO1xufVxuZnVuY3Rpb24gcmVzb2x2ZU93bmVyVm0odm0pIHtcbiAgICBpZiAoIXZtKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGNvbXBvbmVudE5hbWUgPSB2bS50eXBlLm5hbWU7XG4gICAgd2hpbGUgKGNvbXBvbmVudE5hbWUgJiYgaXNCdWlsdEluQ29tcG9uZW50KGh5cGhlbmF0ZShjb21wb25lbnROYW1lKSkpIHtcbiAgICAgICAgLy8gb3duZXJJbnN0YW5jZSDlhoXnva7nu4Tku7bpnIDopoHkvb/nlKjniLYgdm1cbiAgICAgICAgdm0gPSB2bS5wYXJlbnQ7XG4gICAgICAgIGNvbXBvbmVudE5hbWUgPSB2bS50eXBlLm5hbWU7XG4gICAgfVxuICAgIHJldHVybiB2bS5wcm94eTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChlbCkge1xuICAgIC8vIEVsZW1lbnRcbiAgICByZXR1cm4gZWwubm9kZVR5cGUgPT09IDE7XG59XG5mdW5jdGlvbiByZXNvbHZlT3duZXJFbChpbnN0YW5jZSwgbXVsdGkgPSBmYWxzZSkge1xuICAgIGNvbnN0IHsgdm5vZGUgfSA9IGluc3RhbmNlO1xuICAgIGlmIChpc0VsZW1lbnQodm5vZGUuZWwpKSB7XG4gICAgICAgIHJldHVybiBtdWx0aSA/ICh2bm9kZS5lbCA/IFt2bm9kZS5lbF0gOiBbXSkgOiB2bm9kZS5lbDtcbiAgICB9XG4gICAgY29uc3QgeyBzdWJUcmVlIH0gPSBpbnN0YW5jZTtcbiAgICAvLyBTaGFwZUZsYWdzLkFSUkFZX0NISUxEUkVOID0gMTw8NFxuICAgIGlmIChzdWJUcmVlLnNoYXBlRmxhZyAmIDE2KSB7XG4gICAgICAgIGNvbnN0IGVsZW1WTm9kZXMgPSBzdWJUcmVlLmNoaWxkcmVuLmZpbHRlcigodm5vZGUpID0+IHZub2RlLmVsICYmIGlzRWxlbWVudCh2bm9kZS5lbCkpO1xuICAgICAgICBpZiAoZWxlbVZOb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAobXVsdGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbVZOb2Rlcy5tYXAoKG5vZGUpID0+IG5vZGUuZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVsZW1WTm9kZXNbMF0uZWw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG11bHRpID8gKHZub2RlLmVsID8gW3Zub2RlLmVsXSA6IFtdKSA6IHZub2RlLmVsO1xufVxuZnVuY3Rpb24gZHluYW1pY1Nsb3ROYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZSA9PT0gJ2RlZmF1bHQnID8gU0xPVF9ERUZBVUxUX05BTUUgOiBuYW1lO1xufVxuY29uc3QgY3VzdG9taXplUkUgPSAvOi9nO1xuZnVuY3Rpb24gY3VzdG9taXplRXZlbnQoc3RyKSB7XG4gICAgcmV0dXJuIGNhbWVsaXplKHN0ci5yZXBsYWNlKGN1c3RvbWl6ZVJFLCAnLScpKTtcbn1cblxubGV0IGxhc3RMb2dUaW1lID0gMDtcbmZ1bmN0aW9uIGZvcm1hdExvZyhtb2R1bGUsIC4uLmFyZ3MpIHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IGRpZmYgPSBsYXN0TG9nVGltZSA/IG5vdyAtIGxhc3RMb2dUaW1lIDogMDtcbiAgICBsYXN0TG9nVGltZSA9IG5vdztcbiAgICByZXR1cm4gYFske25vd31dWyR7ZGlmZn1tc11bJHttb2R1bGV9Xe+8miR7YXJnc1xuICAgICAgICAubWFwKChhcmcpID0+IEpTT04uc3RyaW5naWZ5KGFyZykpXG4gICAgICAgIC5qb2luKCcgJyl9YDtcbn1cblxuZnVuY3Rpb24gY2FjaGUoZm4pIHtcbiAgICBjb25zdCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgcmV0dXJuIChzdHIpID0+IHtcbiAgICAgICAgY29uc3QgaGl0ID0gY2FjaGVbc3RyXTtcbiAgICAgICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpO1xuICAgIH07XG59XG5mdW5jdGlvbiBjYWNoZVN0cmluZ0Z1bmN0aW9uKGZuKSB7XG4gICAgcmV0dXJuIGNhY2hlKGZuKTtcbn1cbmZ1bmN0aW9uIGdldExlbihzdHIgPSAnJykge1xuICAgIHJldHVybiAoJycgKyBzdHIpLnJlcGxhY2UoL1teXFx4MDAtXFx4ZmZdL2csICcqKicpLmxlbmd0aDtcbn1cbmZ1bmN0aW9uIGhhc0xlYWRpbmdTbGFzaChzdHIpIHtcbiAgICByZXR1cm4gc3RyLmluZGV4T2YoJy8nKSA9PT0gMDtcbn1cbmZ1bmN0aW9uIGFkZExlYWRpbmdTbGFzaChzdHIpIHtcbiAgICByZXR1cm4gaGFzTGVhZGluZ1NsYXNoKHN0cikgPyBzdHIgOiAnLycgKyBzdHI7XG59XG5mdW5jdGlvbiByZW1vdmVMZWFkaW5nU2xhc2goc3RyKSB7XG4gICAgcmV0dXJuIGhhc0xlYWRpbmdTbGFzaChzdHIpID8gc3RyLnNsaWNlKDEpIDogc3RyO1xufVxuY29uc3QgaW52b2tlQXJyYXlGbnMgPSAoZm5zLCBhcmcpID0+IHtcbiAgICBsZXQgcmV0O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJldCA9IGZuc1tpXShhcmcpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufTtcbmZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnRTdHlsZShlbGVtZW50LCBzdHlsZXMpIHtcbiAgICBmb3IgKGNvbnN0IGF0dHJOYW1lIGluIHN0eWxlcykge1xuICAgICAgICBlbGVtZW50LnN0eWxlW2F0dHJOYW1lXSA9IHN0eWxlc1thdHRyTmFtZV07XG4gICAgfVxufVxuZnVuY3Rpb24gb25jZShmbiwgY3R4ID0gbnVsbCkge1xuICAgIGxldCByZXM7XG4gICAgcmV0dXJuICgoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgIHJlcyA9IGZuLmFwcGx5KGN0eCwgYXJncyk7XG4gICAgICAgICAgICBmbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9KTtcbn1cbmNvbnN0IHNhbml0aXNlID0gKHZhbCkgPT4gKHZhbCAmJiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbCkpKSB8fCB2YWw7XG5jb25zdCBfY29tcGxldGVWYWx1ZSA9ICh2YWx1ZSkgPT4gKHZhbHVlID4gOSA/IHZhbHVlIDogJzAnICsgdmFsdWUpO1xuZnVuY3Rpb24gZm9ybWF0RGF0ZVRpbWUoeyBkYXRlID0gbmV3IERhdGUoKSwgbW9kZSA9ICdkYXRlJyB9KSB7XG4gICAgaWYgKG1vZGUgPT09ICd0aW1lJykge1xuICAgICAgICByZXR1cm4gKF9jb21wbGV0ZVZhbHVlKGRhdGUuZ2V0SG91cnMoKSkgKyAnOicgKyBfY29tcGxldGVWYWx1ZShkYXRlLmdldE1pbnV0ZXMoKSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChkYXRlLmdldEZ1bGxZZWFyKCkgK1xuICAgICAgICAgICAgJy0nICtcbiAgICAgICAgICAgIF9jb21wbGV0ZVZhbHVlKGRhdGUuZ2V0TW9udGgoKSArIDEpICtcbiAgICAgICAgICAgICctJyArXG4gICAgICAgICAgICBfY29tcGxldGVWYWx1ZShkYXRlLmdldERhdGUoKSkpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNhbGxPcHRpb25zKG9wdGlvbnMsIGRhdGEpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBpZiAoaXNTdHJpbmcoZGF0YSkpIHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGVyck1zZzogZGF0YSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKC86b2skLy50ZXN0KGRhdGEuZXJyTXNnKSkge1xuICAgICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLnN1Y2Nlc3MpKSB7XG4gICAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MoZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuZmFpbCkpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZmFpbChkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLmNvbXBsZXRlKSkge1xuICAgICAgICBvcHRpb25zLmNvbXBsZXRlKGRhdGEpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldFZhbHVlQnlEYXRhUGF0aChvYmosIHBhdGgpIHtcbiAgICBpZiAoIWlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFxbKFxcZCspXFxdL2csICcuJDEnKTtcbiAgICBjb25zdCBwYXJ0cyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgICBsZXQga2V5ID0gcGFydHNbMF07XG4gICAgaWYgKCFvYmopIHtcbiAgICAgICAgb2JqID0ge307XG4gICAgfVxuICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIG9ialtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0VmFsdWVCeURhdGFQYXRoKG9ialtrZXldLCBwYXJ0cy5zbGljZSgxKS5qb2luKCcuJykpO1xufVxuZnVuY3Rpb24gc29ydE9iamVjdChvYmopIHtcbiAgICBsZXQgc29ydE9iaiA9IHt9O1xuICAgIGlmIChpc1BsYWluT2JqZWN0KG9iaikpIHtcbiAgICAgICAgT2JqZWN0LmtleXMob2JqKVxuICAgICAgICAgICAgLnNvcnQoKVxuICAgICAgICAgICAgLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgX2tleSA9IGtleTtcbiAgICAgICAgICAgIHNvcnRPYmpbX2tleV0gPSBvYmpbX2tleV07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gIU9iamVjdC5rZXlzKHNvcnRPYmopID8gb2JqIDogc29ydE9iajtcbn1cblxuZnVuY3Rpb24gZm9ybWF0S2V5KGtleSkge1xuICAgIHJldHVybiBjYW1lbGl6ZShrZXkuc3Vic3RyaW5nKDUpKTtcbn1cbi8vIHF1ZXN0aW9uLzEzOTE4Me+8jOWinuWKoOWJr+S9nOeUqO+8jOmBv+WFjSBpbml0Q3VzdG9tRGF0YXNldCDlnKggYnVpbGQg5LiL6KKrIHRyZWUtc2hha2luZ1xuY29uc3QgaW5pdEN1c3RvbURhdGFzZXRPbmNlID0gLyojX19QVVJFX18qLyBvbmNlKCgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBIVE1MRWxlbWVudC5wcm90b3R5cGU7XG4gICAgY29uc3Qgc2V0QXR0cmlidXRlID0gcHJvdG90eXBlLnNldEF0dHJpYnV0ZTtcbiAgICBwcm90b3R5cGUuc2V0QXR0cmlidXRlID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKCdkYXRhLScpICYmIHRoaXMudGFnTmFtZS5zdGFydHNXaXRoKCdVTkktJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFzZXQgPSB0aGlzLl9fdW5pRGF0YXNldCB8fFxuICAgICAgICAgICAgICAgICh0aGlzLl9fdW5pRGF0YXNldCA9IHt9KTtcbiAgICAgICAgICAgIGRhdGFzZXRbZm9ybWF0S2V5KGtleSldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgc2V0QXR0cmlidXRlLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVBdHRyaWJ1dGUgPSBwcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlO1xuICAgIHByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICh0aGlzLl9fdW5pRGF0YXNldCAmJlxuICAgICAgICAgICAga2V5LnN0YXJ0c1dpdGgoJ2RhdGEtJykgJiZcbiAgICAgICAgICAgIHRoaXMudGFnTmFtZS5zdGFydHNXaXRoKCdVTkktJykpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9fdW5pRGF0YXNldFtmb3JtYXRLZXkoa2V5KV07XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlQXR0cmlidXRlLmNhbGwodGhpcywga2V5KTtcbiAgICB9O1xufSk7XG5mdW5jdGlvbiBnZXRDdXN0b21EYXRhc2V0KGVsKSB7XG4gICAgcmV0dXJuIGV4dGVuZCh7fSwgZWwuZGF0YXNldCwgZWwuX191bmlEYXRhc2V0KTtcbn1cblxuY29uc3QgdW5pdFJFID0gbmV3IFJlZ0V4cChgXCJbXlwiXStcInwnW14nXSsnfHVybFxcXFwoW14pXStcXFxcKXwoXFxcXGQqXFxcXC4/XFxcXGQrKVtyfHVdcHhgLCAnZycpO1xuZnVuY3Rpb24gdG9GaXhlZChudW1iZXIsIHByZWNpc2lvbikge1xuICAgIGNvbnN0IG11bHRpcGxpZXIgPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uICsgMSk7XG4gICAgY29uc3Qgd2hvbGVOdW1iZXIgPSBNYXRoLmZsb29yKG51bWJlciAqIG11bHRpcGxpZXIpO1xuICAgIHJldHVybiAoTWF0aC5yb3VuZCh3aG9sZU51bWJlciAvIDEwKSAqIDEwKSAvIG11bHRpcGxpZXI7XG59XG5jb25zdCBkZWZhdWx0UnB4MlVuaXQgPSB7XG4gICAgdW5pdDogJ3JlbScsXG4gICAgdW5pdFJhdGlvOiAxMCAvIDMyMCxcbiAgICB1bml0UHJlY2lzaW9uOiA1LFxufTtcbmNvbnN0IGRlZmF1bHRNaW5pUHJvZ3JhbVJweDJVbml0ID0ge1xuICAgIHVuaXQ6ICdycHgnLFxuICAgIHVuaXRSYXRpbzogMSxcbiAgICB1bml0UHJlY2lzaW9uOiAxLFxufTtcbmNvbnN0IGRlZmF1bHROVnVlUnB4MlVuaXQgPSBkZWZhdWx0TWluaVByb2dyYW1ScHgyVW5pdDtcbmZ1bmN0aW9uIGNyZWF0ZVJweDJVbml0KHVuaXQsIHVuaXRSYXRpbywgdW5pdFByZWNpc2lvbikge1xuICAgIC8vIGlnbm9yZTogcnB4Q2FsY0luY2x1ZGVXaWR0aFxuICAgIHJldHVybiAodmFsKSA9PiB2YWwucmVwbGFjZSh1bml0UkUsIChtLCAkMSkgPT4ge1xuICAgICAgICBpZiAoISQxKSB7XG4gICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodW5pdFJhdGlvID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7JDF9JHt1bml0fWA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSB0b0ZpeGVkKHBhcnNlRmxvYXQoJDEpICogdW5pdFJhdGlvLCB1bml0UHJlY2lzaW9uKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSAwID8gJzAnIDogYCR7dmFsdWV9JHt1bml0fWA7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHBhc3NpdmUocGFzc2l2ZSkge1xuICAgIHJldHVybiB7IHBhc3NpdmUgfTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZURhdGFzZXQoZWwpIHtcbiAgICAvLyBUT0RPXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZWwuZGF0YXNldCB8fCB7fSkpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplVGFyZ2V0KGVsKSB7XG4gICAgY29uc3QgeyBpZCwgb2Zmc2V0VG9wLCBvZmZzZXRMZWZ0IH0gPSBlbDtcbiAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgZGF0YXNldDogZ2V0Q3VzdG9tRGF0YXNldChlbCksXG4gICAgICAgIG9mZnNldFRvcCxcbiAgICAgICAgb2Zmc2V0TGVmdCxcbiAgICB9O1xufVxuZnVuY3Rpb24gYWRkRm9udChmYW1pbHksIHNvdXJjZSwgZGVzYykge1xuICAgIGNvbnN0IGZvbnRzID0gZG9jdW1lbnQuZm9udHM7XG4gICAgaWYgKGZvbnRzKSB7XG4gICAgICAgIGNvbnN0IGZvbnRGYWNlID0gbmV3IEZvbnRGYWNlKGZhbWlseSwgc291cmNlLCBkZXNjKTtcbiAgICAgICAgcmV0dXJuIGZvbnRGYWNlLmxvYWQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGZvbnRzLmFkZCAmJiBmb250cy5hZGQoZm9udEZhY2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gW107XG4gICAgICAgIGlmIChkZXNjKSB7XG4gICAgICAgICAgICBjb25zdCB7IHN0eWxlLCB3ZWlnaHQsIHN0cmV0Y2gsIHVuaWNvZGVSYW5nZSwgdmFyaWFudCwgZmVhdHVyZVNldHRpbmdzIH0gPSBkZXNjO1xuICAgICAgICAgICAgc3R5bGUgJiYgdmFsdWVzLnB1c2goYGZvbnQtc3R5bGU6JHtzdHlsZX1gKTtcbiAgICAgICAgICAgIHdlaWdodCAmJiB2YWx1ZXMucHVzaChgZm9udC13ZWlnaHQ6JHt3ZWlnaHR9YCk7XG4gICAgICAgICAgICBzdHJldGNoICYmIHZhbHVlcy5wdXNoKGBmb250LXN0cmV0Y2g6JHtzdHJldGNofWApO1xuICAgICAgICAgICAgdW5pY29kZVJhbmdlICYmIHZhbHVlcy5wdXNoKGB1bmljb2RlLXJhbmdlOiR7dW5pY29kZVJhbmdlfWApO1xuICAgICAgICAgICAgdmFyaWFudCAmJiB2YWx1ZXMucHVzaChgZm9udC12YXJpYW50OiR7dmFyaWFudH1gKTtcbiAgICAgICAgICAgIGZlYXR1cmVTZXR0aW5ncyAmJiB2YWx1ZXMucHVzaChgZm9udC1mZWF0dXJlLXNldHRpbmdzOiR7ZmVhdHVyZVNldHRpbmdzfWApO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlLmlubmVyVGV4dCA9IGBAZm9udC1mYWNle2ZvbnQtZmFtaWx5OlwiJHtmYW1pbHl9XCI7c3JjOiR7c291cmNlfTske3ZhbHVlcy5qb2luKCc7Jyl9fWA7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzY3JvbGxUbyhzY3JvbGxUb3AsIGR1cmF0aW9uLCBpc0g1KSB7XG4gICAgaWYgKGlzU3RyaW5nKHNjcm9sbFRvcCkpIHtcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNjcm9sbFRvcCk7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgY29uc3QgeyBoZWlnaHQsIHRvcCB9ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBzY3JvbGxUb3AgPSB0b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICBpZiAoaXNINSkge1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcCAtPSBoZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNjcm9sbFRvcCA8IDApIHtcbiAgICAgICAgc2Nyb2xsVG9wID0gMDtcbiAgICB9XG4gICAgY29uc3QgZG9jdW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIGNvbnN0IHsgY2xpZW50SGVpZ2h0LCBzY3JvbGxIZWlnaHQgfSA9IGRvY3VtZW50RWxlbWVudDtcbiAgICBzY3JvbGxUb3AgPSBNYXRoLm1pbihzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCAtIGNsaWVudEhlaWdodCk7XG4gICAgaWYgKGR1cmF0aW9uID09PSAwKSB7XG4gICAgICAgIC8vIOmDqOWIhua1j+iniOWZqO+8iOavlOWmguW+ruS/oe+8ieS4rSBzY3JvbGxUb3Ag55qE5YC86ZyA6KaB6YCa6L+HIGRvY3VtZW50LmJvZHkg5p2l5o6n5Yi2XG4gICAgICAgIGRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAod2luZG93LnNjcm9sbFkgPT09IHNjcm9sbFRvcCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNjcm9sbFRvID0gKGR1cmF0aW9uKSA9PiB7XG4gICAgICAgIGlmIChkdXJhdGlvbiA8PSAwKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsVG9wKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkaXN0YWluY2UgPSBzY3JvbGxUb3AgLSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCB3aW5kb3cuc2Nyb2xsWSArIChkaXN0YWluY2UgLyBkdXJhdGlvbikgKiAxMCk7XG4gICAgICAgICAgICBzY3JvbGxUbyhkdXJhdGlvbiAtIDEwKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBzY3JvbGxUbyhkdXJhdGlvbik7XG59XG5cbmNvbnN0IGVuY29kZSA9IGVuY29kZVVSSUNvbXBvbmVudDtcbmZ1bmN0aW9uIHN0cmluZ2lmeVF1ZXJ5KG9iaiwgZW5jb2RlU3RyID0gZW5jb2RlKSB7XG4gICAgY29uc3QgcmVzID0gb2JqXG4gICAgICAgID8gT2JqZWN0LmtleXMob2JqKVxuICAgICAgICAgICAgLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBsZXQgdmFsID0gb2JqW2tleV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhbCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gSlNPTi5zdHJpbmdpZnkodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbmNvZGVTdHIoa2V5KSArICc9JyArIGVuY29kZVN0cih2YWwpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcigoeCkgPT4geC5sZW5ndGggPiAwKVxuICAgICAgICAgICAgLmpvaW4oJyYnKVxuICAgICAgICA6IG51bGw7XG4gICAgcmV0dXJuIHJlcyA/IGA/JHtyZXN9YCA6ICcnO1xufVxuLyoqXG4gKiBEZWNvZGUgdGV4dCB1c2luZyBgZGVjb2RlVVJJQ29tcG9uZW50YC4gUmV0dXJucyB0aGUgb3JpZ2luYWwgdGV4dCBpZiBpdFxuICogZmFpbHMuXG4gKlxuICogQHBhcmFtIHRleHQgLSBzdHJpbmcgdG8gZGVjb2RlXG4gKiBAcmV0dXJucyBkZWNvZGVkIHN0cmluZ1xuICovXG5mdW5jdGlvbiBkZWNvZGUodGV4dCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoJycgKyB0ZXh0KTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikgeyB9XG4gICAgcmV0dXJuICcnICsgdGV4dDtcbn1cbmZ1bmN0aW9uIGRlY29kZWRRdWVyeShxdWVyeSA9IHt9KSB7XG4gICAgY29uc3QgZGVjb2RlZFF1ZXJ5ID0ge307XG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRlY29kZWRRdWVyeVtuYW1lXSA9IGRlY29kZShxdWVyeVtuYW1lXSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGRlY29kZWRRdWVyeVtuYW1lXSA9IHF1ZXJ5W25hbWVdO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlY29kZWRRdWVyeTtcbn1cbmNvbnN0IFBMVVNfUkUgPSAvXFwrL2c7IC8vICUyQlxuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVlLXJvdXRlci1uZXh0L2Jsb2IvbWFzdGVyL3NyYy9xdWVyeS50c1xuICogQGludGVybmFsXG4gKlxuICogQHBhcmFtIHNlYXJjaCAtIHNlYXJjaCBzdHJpbmcgdG8gcGFyc2VcbiAqIEByZXR1cm5zIGEgcXVlcnkgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIHBhcnNlUXVlcnkoc2VhcmNoKSB7XG4gICAgY29uc3QgcXVlcnkgPSB7fTtcbiAgICAvLyBhdm9pZCBjcmVhdGluZyBhbiBvYmplY3Qgd2l0aCBhbiBlbXB0eSBrZXkgYW5kIGVtcHR5IHZhbHVlXG4gICAgLy8gYmVjYXVzZSBvZiBzcGxpdCgnJicpXG4gICAgaWYgKHNlYXJjaCA9PT0gJycgfHwgc2VhcmNoID09PSAnPycpXG4gICAgICAgIHJldHVybiBxdWVyeTtcbiAgICBjb25zdCBoYXNMZWFkaW5nSU0gPSBzZWFyY2hbMF0gPT09ICc/JztcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSAoaGFzTGVhZGluZ0lNID8gc2VhcmNoLnNsaWNlKDEpIDogc2VhcmNoKS5zcGxpdCgnJicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VhcmNoUGFyYW1zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIC8vIHByZSBkZWNvZGUgdGhlICsgaW50byBzcGFjZVxuICAgICAgICBjb25zdCBzZWFyY2hQYXJhbSA9IHNlYXJjaFBhcmFtc1tpXS5yZXBsYWNlKFBMVVNfUkUsICcgJyk7XG4gICAgICAgIC8vIGFsbG93IHRoZSA9IGNoYXJhY3RlclxuICAgICAgICBsZXQgZXFQb3MgPSBzZWFyY2hQYXJhbS5pbmRleE9mKCc9Jyk7XG4gICAgICAgIGxldCBrZXkgPSBkZWNvZGUoZXFQb3MgPCAwID8gc2VhcmNoUGFyYW0gOiBzZWFyY2hQYXJhbS5zbGljZSgwLCBlcVBvcykpO1xuICAgICAgICBsZXQgdmFsdWUgPSBlcVBvcyA8IDAgPyBudWxsIDogZGVjb2RlKHNlYXJjaFBhcmFtLnNsaWNlKGVxUG9zICsgMSkpO1xuICAgICAgICBpZiAoa2V5IGluIHF1ZXJ5KSB7XG4gICAgICAgICAgICAvLyBhbiBleHRyYSB2YXJpYWJsZSBmb3IgdHMgdHlwZXNcbiAgICAgICAgICAgIGxldCBjdXJyZW50VmFsdWUgPSBxdWVyeVtrZXldO1xuICAgICAgICAgICAgaWYgKCFpc0FycmF5KGN1cnJlbnRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWUgPSBxdWVyeVtrZXldID0gW2N1cnJlbnRWYWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50VmFsdWUucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBxdWVyeVtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5O1xufVxuXG5mdW5jdGlvbiBwYXJzZVVybCh1cmwpIHtcbiAgICBjb25zdCBbcGF0aCwgcXVlcnlzdHJpbmddID0gdXJsLnNwbGl0KCc/JywgMik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aCxcbiAgICAgICAgcXVlcnk6IHBhcnNlUXVlcnkocXVlcnlzdHJpbmcgfHwgJycpLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlTlZ1ZURhdGFzZXQoYXR0cikge1xuICAgIGNvbnN0IGRhdGFzZXQgPSB7fTtcbiAgICBpZiAoYXR0cikge1xuICAgICAgICBPYmplY3Qua2V5cyhhdHRyKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZignZGF0YS0nKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGRhdGFzZXRba2V5LnJlcGxhY2UoJ2RhdGEtJywgJycpXSA9IGF0dHJba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhc2V0O1xufVxuXG5mdW5jdGlvbiBwbHVzUmVhZHkoY2FsbGJhY2spIHtcbiAgICBpZiAoIWlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5wbHVzKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwbHVzcmVhZHknLCBjYWxsYmFjayk7XG59XG5cbmNsYXNzIERPTUV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnRE9NRXhjZXB0aW9uJztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUV2ZW50VHlwZSh0eXBlLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuY2FwdHVyZSkge1xuICAgICAgICAgICAgdHlwZSArPSAnQ2FwdHVyZSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMub25jZSkge1xuICAgICAgICAgICAgdHlwZSArPSAnT25jZSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMucGFzc2l2ZSkge1xuICAgICAgICAgICAgdHlwZSArPSAnUGFzc2l2ZSc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGBvbiR7Y2FwaXRhbGl6ZShjYW1lbGl6ZSh0eXBlKSl9YDtcbn1cbmNsYXNzIFVuaUV2ZW50IHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBvcHRzKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWVTdGFtcCA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuX3N0b3AgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZW5kID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuYnViYmxlcyA9ICEhb3B0cy5idWJibGVzO1xuICAgICAgICB0aGlzLmNhbmNlbGFibGUgPSAhIW9wdHMuY2FuY2VsYWJsZTtcbiAgICB9XG4gICAgcHJldmVudERlZmF1bHQoKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XG4gICAgfVxuICAgIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpIHtcbiAgICAgICAgdGhpcy5fZW5kID0gdGhpcy5fc3RvcCA9IHRydWU7XG4gICAgfVxuICAgIHN0b3BQcm9wYWdhdGlvbigpIHtcbiAgICAgICAgdGhpcy5fc3RvcCA9IHRydWU7XG4gICAgfVxufVxuZnVuY3Rpb24gY3JlYXRlVW5pRXZlbnQoZXZ0KSB7XG4gICAgaWYgKGV2dCBpbnN0YW5jZW9mIFVuaUV2ZW50KSB7XG4gICAgICAgIHJldHVybiBldnQ7XG4gICAgfVxuICAgIGNvbnN0IFt0eXBlXSA9IHBhcnNlRXZlbnROYW1lKGV2dC50eXBlKTtcbiAgICBjb25zdCB1bmlFdmVudCA9IG5ldyBVbmlFdmVudCh0eXBlLCB7XG4gICAgICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcbiAgICB9KTtcbiAgICBleHRlbmQodW5pRXZlbnQsIGV2dCk7XG4gICAgcmV0dXJuIHVuaUV2ZW50O1xufVxuY2xhc3MgVW5pRXZlbnRUYXJnZXQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQoZXZ0KSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzW2V2dC50eXBlXTtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGlmICgocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdExvZygnZGlzcGF0Y2hFdmVudCcsIHRoaXMubm9kZUlkKSwgZXZ0LnR5cGUsICdub3QgZm91bmQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyDmoLzlvI/ljJbkuovku7bnsbvlnotcbiAgICAgICAgY29uc3QgZXZlbnQgPSBjcmVhdGVVbmlFdmVudChldnQpO1xuICAgICAgICBjb25zdCBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnNbaV0uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQuX2VuZCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBldmVudC5jYW5jZWxhYmxlICYmIGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQ7XG4gICAgfVxuICAgIGFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgdHlwZSA9IG5vcm1hbGl6ZUV2ZW50VHlwZSh0eXBlLCBvcHRpb25zKTtcbiAgICAgICAgKHRoaXMubGlzdGVuZXJzW3R5cGVdIHx8ICh0aGlzLmxpc3RlbmVyc1t0eXBlXSA9IFtdKSkucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICAgICAgdHlwZSA9IG5vcm1hbGl6ZUV2ZW50VHlwZSh0eXBlLCBvcHRpb25zKTtcbiAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnNbdHlwZV07XG4gICAgICAgIGlmICghbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IG9wdGlvbnNNb2RpZmllclJFID0gLyg/Ok9uY2V8UGFzc2l2ZXxDYXB0dXJlKSQvO1xuZnVuY3Rpb24gcGFyc2VFdmVudE5hbWUobmFtZSkge1xuICAgIGxldCBvcHRpb25zO1xuICAgIGlmIChvcHRpb25zTW9kaWZpZXJSRS50ZXN0KG5hbWUpKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgbGV0IG07XG4gICAgICAgIHdoaWxlICgobSA9IG5hbWUubWF0Y2gob3B0aW9uc01vZGlmaWVyUkUpKSkge1xuICAgICAgICAgICAgbmFtZSA9IG5hbWUuc2xpY2UoMCwgbmFtZS5sZW5ndGggLSBtWzBdLmxlbmd0aCk7XG4gICAgICAgICAgICBvcHRpb25zW21bMF0udG9Mb3dlckNhc2UoKV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbaHlwaGVuYXRlKG5hbWUuc2xpY2UoMikpLCBvcHRpb25zXTtcbn1cblxuY29uc3QgRXZlbnRNb2RpZmllckZsYWdzID0gLyojX19QVVJFX18qLyAoKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHN0b3A6IDEsXG4gICAgICAgIHByZXZlbnQ6IDEgPDwgMSxcbiAgICAgICAgc2VsZjogMSA8PCAyLFxuICAgIH07XG59KSgpO1xuZnVuY3Rpb24gZW5jb2RlTW9kaWZpZXIobW9kaWZpZXJzKSB7XG4gICAgbGV0IGZsYWcgPSAwO1xuICAgIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoJ3N0b3AnKSkge1xuICAgICAgICBmbGFnIHw9IEV2ZW50TW9kaWZpZXJGbGFncy5zdG9wO1xuICAgIH1cbiAgICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKCdwcmV2ZW50JykpIHtcbiAgICAgICAgZmxhZyB8PSBFdmVudE1vZGlmaWVyRmxhZ3MucHJldmVudDtcbiAgICB9XG4gICAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcygnc2VsZicpKSB7XG4gICAgICAgIGZsYWcgfD0gRXZlbnRNb2RpZmllckZsYWdzLnNlbGY7XG4gICAgfVxuICAgIHJldHVybiBmbGFnO1xufVxuXG5jb25zdCBOT0RFX1RZUEVfUEFHRSA9IDA7XG5jb25zdCBOT0RFX1RZUEVfRUxFTUVOVCA9IDE7XG5jb25zdCBOT0RFX1RZUEVfVEVYVCA9IDM7XG5jb25zdCBOT0RFX1RZUEVfQ09NTUVOVCA9IDg7XG5mdW5jdGlvbiBzaWJsaW5nKG5vZGUsIHR5cGUpIHtcbiAgICBjb25zdCB7IHBhcmVudE5vZGUgfSA9IG5vZGU7XG4gICAgaWYgKCFwYXJlbnROb2RlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB7IGNoaWxkTm9kZXMgfSA9IHBhcmVudE5vZGU7XG4gICAgcmV0dXJuIGNoaWxkTm9kZXNbY2hpbGROb2Rlcy5pbmRleE9mKG5vZGUpICsgKHR5cGUgPT09ICduJyA/IDEgOiAtMSldIHx8IG51bGw7XG59XG5mdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcbiAgICBjb25zdCB7IHBhcmVudE5vZGUgfSA9IG5vZGU7XG4gICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZE5vZGVzIH0gPSBwYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihub2RlKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIG5vZGUucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgICAgICBjaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBjaGVja05vZGVJZChub2RlKSB7XG4gICAgaWYgKCFub2RlLm5vZGVJZCAmJiBub2RlLnBhZ2VOb2RlKSB7XG4gICAgICAgIG5vZGUubm9kZUlkID0gbm9kZS5wYWdlTm9kZS5nZW5JZCgpO1xuICAgIH1cbn1cbi8vIOS4uuS8mOWMluaAp+iDve+8jOWQhOW5s+WPsOS4jeS9v+eUqHByb3h55p2l5a6e546wbm9kZeeahOaTjeS9nOaLpuaIqu+8jOiAjOaYr+ebtOaOpemAmui/h3BhZ2VOb2Rl5a6a5Yi2XG5jbGFzcyBVbmlOb2RlIGV4dGVuZHMgVW5pRXZlbnRUYXJnZXQge1xuICAgIGNvbnN0cnVjdG9yKG5vZGVUeXBlLCBub2RlTmFtZSwgY29udGFpbmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucGFnZU5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLl90ZXh0ID0gbnVsbDtcbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgY29uc3QgeyBwYWdlTm9kZSB9ID0gY29udGFpbmVyO1xuICAgICAgICAgICAgaWYgKHBhZ2VOb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTm9kZSA9IHBhZ2VOb2RlO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZUlkID0gcGFnZU5vZGUuZ2VuSWQoKTtcbiAgICAgICAgICAgICAgICAhcGFnZU5vZGUuaXNVbm1vdW50ZWQgJiYgcGFnZU5vZGUub25DcmVhdGUodGhpcywgbm9kZU5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZVR5cGUgPSBub2RlVHlwZTtcbiAgICAgICAgdGhpcy5ub2RlTmFtZSA9IG5vZGVOYW1lO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcbiAgICB9XG4gICAgZ2V0IGZpcnN0Q2hpbGQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXNbMF0gfHwgbnVsbDtcbiAgICB9XG4gICAgZ2V0IGxhc3RDaGlsZCgpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZE5vZGVzIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIGxlbmd0aCA/IGNoaWxkTm9kZXNbbGVuZ3RoIC0gMV0gOiBudWxsO1xuICAgIH1cbiAgICBnZXQgbmV4dFNpYmxpbmcoKSB7XG4gICAgICAgIHJldHVybiBzaWJsaW5nKHRoaXMsICduJyk7XG4gICAgfVxuICAgIGdldCBub2RlVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBzZXQgbm9kZVZhbHVlKF92YWwpIHsgfVxuICAgIGdldCB0ZXh0Q29udGVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHQgfHwgJyc7XG4gICAgfVxuICAgIHNldCB0ZXh0Q29udGVudCh0ZXh0KSB7XG4gICAgICAgIHRoaXMuX3RleHQgPSB0ZXh0O1xuICAgICAgICBpZiAodGhpcy5wYWdlTm9kZSAmJiAhdGhpcy5wYWdlTm9kZS5pc1VubW91bnRlZCkge1xuICAgICAgICAgICAgdGhpcy5wYWdlTm9kZS5vblRleHRDb250ZW50KHRoaXMsIHRleHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBwYXJlbnRFbGVtZW50KCkge1xuICAgICAgICBjb25zdCB7IHBhcmVudE5vZGUgfSA9IHRoaXM7XG4gICAgICAgIGlmIChwYXJlbnROb2RlICYmIHBhcmVudE5vZGUubm9kZVR5cGUgPT09IE5PREVfVFlQRV9FTEVNRU5UKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZ2V0IHByZXZpb3VzU2libGluZygpIHtcbiAgICAgICAgcmV0dXJuIHNpYmxpbmcodGhpcywgJ3AnKTtcbiAgICB9XG4gICAgYXBwZW5kQ2hpbGQobmV3Q2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLCBudWxsKTtcbiAgICB9XG4gICAgY2xvbmVOb2RlKGRlZXApIHtcbiAgICAgICAgY29uc3QgY2xvbmVkID0gZXh0ZW5kKE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpKSwgdGhpcyk7XG4gICAgICAgIGNvbnN0IHsgYXR0cmlidXRlcyB9ID0gY2xvbmVkO1xuICAgICAgICBpZiAoYXR0cmlidXRlcykge1xuICAgICAgICAgICAgY2xvbmVkLmF0dHJpYnV0ZXMgPSBleHRlbmQoe30sIGF0dHJpYnV0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWVwKSB7XG4gICAgICAgICAgICBjbG9uZWQuY2hpbGROb2RlcyA9IGNsb25lZC5jaGlsZE5vZGVzLm1hcCgoY2hpbGROb2RlKSA9PiBjaGlsZE5vZGUuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xvbmVkO1xuICAgIH1cbiAgICBpbnNlcnRCZWZvcmUobmV3Q2hpbGQsIHJlZkNoaWxkKSB7XG4gICAgICAgIC8vIOWFiOS7jueOsOWcqOeahOeItuiKgueCueenu+mZpO+8iOazqOaEj++8muS4jeiDveinpuWPkW9uUmVtb3ZlQ2hpbGTvvIzlkKbliJnkvJrnlJ/miJDlhYhyZW1vdmXor6UgaWTvvIzlho0gaW5zZXJ077yJXG4gICAgICAgIHJlbW92ZU5vZGUobmV3Q2hpbGQpO1xuICAgICAgICBuZXdDaGlsZC5wYWdlTm9kZSA9IHRoaXMucGFnZU5vZGU7XG4gICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xuICAgICAgICBjaGVja05vZGVJZChuZXdDaGlsZCk7XG4gICAgICAgIGNvbnN0IHsgY2hpbGROb2RlcyB9ID0gdGhpcztcbiAgICAgICAgaWYgKHJlZkNoaWxkKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihyZWZDaGlsZCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihgRmFpbGVkIHRvIGV4ZWN1dGUgJ2luc2VydEJlZm9yZScgb24gJ05vZGUnOiBUaGUgbm9kZSBiZWZvcmUgd2hpY2ggdGhlIG5ldyBub2RlIGlzIHRvIGJlIGluc2VydGVkIGlzIG5vdCBhIGNoaWxkIG9mIHRoaXMgbm9kZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAwLCBuZXdDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjaGlsZE5vZGVzLnB1c2gobmV3Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2VOb2RlICYmICF0aGlzLnBhZ2VOb2RlLmlzVW5tb3VudGVkXG4gICAgICAgICAgICA/IHRoaXMucGFnZU5vZGUub25JbnNlcnRCZWZvcmUodGhpcywgbmV3Q2hpbGQsIHJlZkNoaWxkKVxuICAgICAgICAgICAgOiBuZXdDaGlsZDtcbiAgICB9XG4gICAgcmVtb3ZlQ2hpbGQob2xkQ2hpbGQpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZE5vZGVzIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihvbGRDaGlsZCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oYEZhaWxlZCB0byBleGVjdXRlICdyZW1vdmVDaGlsZCcgb24gJ05vZGUnOiBUaGUgbm9kZSB0byBiZSByZW1vdmVkIGlzIG5vdCBhIGNoaWxkIG9mIHRoaXMgbm9kZS5gKTtcbiAgICAgICAgfVxuICAgICAgICBvbGRDaGlsZC5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdlTm9kZSAmJiAhdGhpcy5wYWdlTm9kZS5pc1VubW91bnRlZFxuICAgICAgICAgICAgPyB0aGlzLnBhZ2VOb2RlLm9uUmVtb3ZlQ2hpbGQob2xkQ2hpbGQpXG4gICAgICAgICAgICA6IG9sZENoaWxkO1xuICAgIH1cbn1cbmNvbnN0IEFUVFJfQ0xBU1MgPSAnY2xhc3MnO1xuY29uc3QgQVRUUl9TVFlMRSA9ICdzdHlsZSc7XG5jb25zdCBBVFRSX0lOTkVSX0hUTUwgPSAnaW5uZXJIVE1MJztcbmNvbnN0IEFUVFJfVEVYVF9DT05URU5UID0gJ3RleHRDb250ZW50JztcbmNvbnN0IEFUVFJfVl9TSE9XID0gJy52U2hvdyc7XG5jb25zdCBBVFRSX1ZfT1dORVJfSUQgPSAnLnZPd25lcklkJztcbmNvbnN0IEFUVFJfVl9SRU5ERVJKUyA9ICcudlJlbmRlcmpzJztcbmNvbnN0IEFUVFJfQ0hBTkdFX1BSRUZJWCA9ICdjaGFuZ2U6JztcbmNsYXNzIFVuaUJhc2VOb2RlIGV4dGVuZHMgVW5pTm9kZSB7XG4gICAgY29uc3RydWN0b3Iobm9kZVR5cGUsIG5vZGVOYW1lLCBjb250YWluZXIpIHtcbiAgICAgICAgc3VwZXIobm9kZVR5cGUsIG5vZGVOYW1lLCBjb250YWluZXIpO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLnN0eWxlID0gbnVsbDtcbiAgICAgICAgdGhpcy52U2hvdyA9IG51bGw7XG4gICAgICAgIHRoaXMuX2h0bWwgPSBudWxsO1xuICAgIH1cbiAgICBnZXQgY2xhc3NOYW1lKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuYXR0cmlidXRlc1tBVFRSX0NMQVNTXSB8fCAnJyk7XG4gICAgfVxuICAgIHNldCBjbGFzc05hbWUodmFsKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKEFUVFJfQ0xBU1MsIHZhbCk7XG4gICAgfVxuICAgIGdldCBpbm5lckhUTUwoKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgc2V0IGlubmVySFRNTChodG1sKSB7XG4gICAgICAgIHRoaXMuX2h0bWwgPSBodG1sO1xuICAgIH1cbiAgICBhZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgICAgICBpZiAodGhpcy5wYWdlTm9kZSAmJiAhdGhpcy5wYWdlTm9kZS5pc1VubW91bnRlZCkge1xuICAgICAgICAgICAgaWYgKGxpc3RlbmVyLnd4c0V2ZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTm9kZS5vbkFkZFd4c0V2ZW50KHRoaXMsIG5vcm1hbGl6ZUV2ZW50VHlwZSh0eXBlLCBvcHRpb25zKSwgbGlzdGVuZXIud3hzRXZlbnQsIGVuY29kZU1vZGlmaWVyKGxpc3RlbmVyLm1vZGlmaWVycyB8fCBbXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTm9kZS5vbkFkZEV2ZW50KHRoaXMsIG5vcm1hbGl6ZUV2ZW50VHlwZSh0eXBlLCBvcHRpb25zKSwgZW5jb2RlTW9kaWZpZXIobGlzdGVuZXIubW9kaWZpZXJzIHx8IFtdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgICAgICBzdXBlci5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgICAgICAgaWYgKHRoaXMucGFnZU5vZGUgJiYgIXRoaXMucGFnZU5vZGUuaXNVbm1vdW50ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZU5vZGUub25SZW1vdmVFdmVudCh0aGlzLCBub3JtYWxpemVFdmVudFR5cGUodHlwZSwgb3B0aW9ucykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldEF0dHJpYnV0ZShxdWFsaWZpZWROYW1lKSB7XG4gICAgICAgIGlmIChxdWFsaWZpZWROYW1lID09PSBBVFRSX1NUWUxFKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHlsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzW3F1YWxpZmllZE5hbWVdO1xuICAgIH1cbiAgICByZW1vdmVBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZSkge1xuICAgICAgICBpZiAocXVhbGlmaWVkTmFtZSA9PSBBVFRSX1NUWUxFKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmF0dHJpYnV0ZXNbcXVhbGlmaWVkTmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGFnZU5vZGUgJiYgIXRoaXMucGFnZU5vZGUuaXNVbm1vdW50ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZU5vZGUub25SZW1vdmVBdHRyaWJ1dGUodGhpcywgcXVhbGlmaWVkTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0QXR0cmlidXRlKHF1YWxpZmllZE5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGlmIChxdWFsaWZpZWROYW1lID09PSBBVFRSX1NUWUxFKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbcXVhbGlmaWVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wYWdlTm9kZSAmJiAhdGhpcy5wYWdlTm9kZS5pc1VubW91bnRlZCkge1xuICAgICAgICAgICAgdGhpcy5wYWdlTm9kZS5vblNldEF0dHJpYnV0ZSh0aGlzLCBxdWFsaWZpZWROYW1lLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9KU09OKHsgYXR0ciwgbm9ybWFsaXplLCB9ID0ge30pIHtcbiAgICAgICAgY29uc3QgeyBhdHRyaWJ1dGVzLCBzdHlsZSwgbGlzdGVuZXJzLCBfdGV4dCB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgcmVzID0ge307XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJlcy5hID0gbm9ybWFsaXplID8gbm9ybWFsaXplKGF0dHJpYnV0ZXMpIDogYXR0cmlidXRlcztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBldmVudHMgPSBPYmplY3Qua2V5cyhsaXN0ZW5lcnMpO1xuICAgICAgICBpZiAoZXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjb25zdCBlID0ge307XG4gICAgICAgICAgICBldmVudHMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZXJzID0gbGlzdGVuZXJzW25hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5Y+v6IO95a2Y5Zyo5aSa5LiqIGhhbmRsZXIg5LiU5LiN5ZCMIG1vZGlmaWVycyDlkJfvvJ9cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB3eHNFdmVudCwgbW9kaWZpZXJzIH0gPSBoYW5kbGVyc1swXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kaWZpZXIgPSBlbmNvZGVNb2RpZmllcihtb2RpZmllcnMgfHwgW10pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXd4c0V2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlW25hbWVdID0gbW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB3W25hbWVdID0gW25vcm1hbGl6ZSA/IG5vcm1hbGl6ZSh3eHNFdmVudCkgOiB3eHNFdmVudCwgbW9kaWZpZXJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXMuZSA9IG5vcm1hbGl6ZSA/IG5vcm1hbGl6ZShlLCBmYWxzZSkgOiBlO1xuICAgICAgICAgICAgaWYgKHcpIHtcbiAgICAgICAgICAgICAgICByZXMudyA9IG5vcm1hbGl6ZSA/IG5vcm1hbGl6ZSh3LCBmYWxzZSkgOiB3O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzdHlsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmVzLnMgPSBub3JtYWxpemUgPyBub3JtYWxpemUoc3R5bGUpIDogc3R5bGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhdHRyKSB7XG4gICAgICAgICAgICByZXMuaSA9IHRoaXMubm9kZUlkO1xuICAgICAgICAgICAgcmVzLm4gPSB0aGlzLm5vZGVOYW1lO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfdGV4dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmVzLnQgPSBub3JtYWxpemUgPyBub3JtYWxpemUoX3RleHQpIDogX3RleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG59XG5cbmNsYXNzIFVuaUNvbW1lbnROb2RlIGV4dGVuZHMgVW5pTm9kZSB7XG4gICAgY29uc3RydWN0b3IodGV4dCwgY29udGFpbmVyKSB7XG4gICAgICAgIHN1cGVyKE5PREVfVFlQRV9DT01NRU5ULCAnI2NvbW1lbnQnLCBjb250YWluZXIpO1xuICAgICAgICB0aGlzLl90ZXh0ID0gKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpID8gdGV4dCA6ICcnO1xuICAgIH1cbiAgICB0b0pTT04ob3B0cyA9IHt9KSB7XG4gICAgICAgIC8vIOaaguaXtuS4jeS8oOmAkiB0ZXh0IOWIsCB2aWV3IOWxgu+8jOayoeWVpeaEj+S5ie+8jOiKguecgeeCueaVsOaNrumHj1xuICAgICAgICByZXR1cm4gb3B0cy5hdHRyXG4gICAgICAgICAgICA/IHt9XG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBpOiB0aGlzLm5vZGVJZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIC8vIHJldHVybiBvcHRzLmF0dHJcbiAgICAgICAgLy8gICA/IHsgdDogdGhpcy5fdGV4dCBhcyBzdHJpbmcgfVxuICAgICAgICAvLyAgIDoge1xuICAgICAgICAvLyAgICAgICBpOiB0aGlzLm5vZGVJZCEsXG4gICAgICAgIC8vICAgICAgIHQ6IHRoaXMuX3RleHQgYXMgc3RyaW5nLFxuICAgICAgICAvLyAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgVW5pRWxlbWVudCBleHRlbmRzIFVuaUJhc2VOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcihub2RlTmFtZSwgY29udGFpbmVyKSB7XG4gICAgICAgIHN1cGVyKE5PREVfVFlQRV9FTEVNRU5ULCBub2RlTmFtZS50b1VwcGVyQ2FzZSgpLCBjb250YWluZXIpO1xuICAgICAgICB0aGlzLnRhZ05hbWUgPSB0aGlzLm5vZGVOYW1lO1xuICAgIH1cbn1cbmNsYXNzIFVuaUlucHV0RWxlbWVudCBleHRlbmRzIFVuaUVsZW1lbnQge1xuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgIH1cbiAgICBzZXQgdmFsdWUodmFsKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbCk7XG4gICAgfVxufVxuY2xhc3MgVW5pVGV4dEFyZWFFbGVtZW50IGV4dGVuZHMgVW5pSW5wdXRFbGVtZW50IHtcbn1cblxuY2xhc3MgVW5pVGV4dE5vZGUgZXh0ZW5kcyBVbmlCYXNlTm9kZSB7XG4gICAgY29uc3RydWN0b3IodGV4dCwgY29udGFpbmVyKSB7XG4gICAgICAgIHN1cGVyKE5PREVfVFlQRV9URVhULCAnI3RleHQnLCBjb250YWluZXIpO1xuICAgICAgICB0aGlzLl90ZXh0ID0gdGV4dDtcbiAgICB9XG4gICAgZ2V0IG5vZGVWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHQgfHwgJyc7XG4gICAgfVxuICAgIHNldCBub2RlVmFsdWUodGV4dCkge1xuICAgICAgICB0aGlzLl90ZXh0ID0gdGV4dDtcbiAgICAgICAgaWYgKHRoaXMucGFnZU5vZGUgJiYgIXRoaXMucGFnZU5vZGUuaXNVbm1vdW50ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZU5vZGUub25Ob2RlVmFsdWUodGhpcywgdGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGZvcmNlUGF0Y2hQcm9wcyA9IHtcbiAgICBBRDogWydkYXRhJ10sXG4gICAgJ0FELURSQVcnOiBbJ2RhdGEnXSxcbiAgICAnTElWRS1QTEFZRVInOiBbJ3BpY3R1cmUtaW4tcGljdHVyZS1tb2RlJ10sXG4gICAgTUFQOiBbXG4gICAgICAgICdtYXJrZXJzJyxcbiAgICAgICAgJ3BvbHlsaW5lJyxcbiAgICAgICAgJ2NpcmNsZXMnLFxuICAgICAgICAnY29udHJvbHMnLFxuICAgICAgICAnaW5jbHVkZS1wb2ludHMnLFxuICAgICAgICAncG9seWdvbnMnLFxuICAgIF0sXG4gICAgUElDS0VSOiBbJ3JhbmdlJywgJ3ZhbHVlJ10sXG4gICAgJ1BJQ0tFUi1WSUVXJzogWyd2YWx1ZSddLFxuICAgICdSSUNILVRFWFQnOiBbJ25vZGVzJ10sXG4gICAgVklERU86IFsnZGFubXUtbGlzdCcsICdoZWFkZXInXSxcbiAgICAnV0VCLVZJRVcnOiBbJ3dlYnZpZXctc3R5bGVzJ10sXG59O1xuY29uc3QgZm9yY2VQYXRjaFByb3BLZXlzID0gWydhbmltYXRpb24nXTtcblxuY29uc3QgZm9yY2VQYXRjaFByb3AgPSAoZWwsIGtleSkgPT4ge1xuICAgIGlmIChmb3JjZVBhdGNoUHJvcEtleXMuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IGtleXMgPSBmb3JjZVBhdGNoUHJvcHNbZWwubm9kZU5hbWVdO1xuICAgIGlmIChrZXlzICYmIGtleXMuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IEFDVElPTl9UWVBFX1BBR0VfQ1JFQVRFID0gMTtcbmNvbnN0IEFDVElPTl9UWVBFX1BBR0VfQ1JFQVRFRCA9IDI7XG5jb25zdCBBQ1RJT05fVFlQRV9DUkVBVEUgPSAzO1xuY29uc3QgQUNUSU9OX1RZUEVfSU5TRVJUID0gNDtcbmNvbnN0IEFDVElPTl9UWVBFX1JFTU9WRSA9IDU7XG5jb25zdCBBQ1RJT05fVFlQRV9TRVRfQVRUUklCVVRFID0gNjtcbmNvbnN0IEFDVElPTl9UWVBFX1JFTU9WRV9BVFRSSUJVVEUgPSA3O1xuY29uc3QgQUNUSU9OX1RZUEVfQUREX0VWRU5UID0gODtcbmNvbnN0IEFDVElPTl9UWVBFX1JFTU9WRV9FVkVOVCA9IDk7XG5jb25zdCBBQ1RJT05fVFlQRV9TRVRfVEVYVCA9IDEwO1xuY29uc3QgQUNUSU9OX1RZUEVfQUREX1dYU19FVkVOVCA9IDEyO1xuY29uc3QgQUNUSU9OX1RZUEVfUEFHRV9TQ1JPTEwgPSAxNTtcbmNvbnN0IEFDVElPTl9UWVBFX0VWRU5UID0gMjA7XG5cbi8qKlxuICog6ZyA6KaB5omL5Yqo5Lyg5YWlIHRpbWVyLOS4u+imgeaYr+ino+WGsyBBcHAg5bmz5Y+w55qE5a6a5Yi2IHRpbWVyXG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZuLCBkZWxheSwgeyBjbGVhclRpbWVvdXQsIHNldFRpbWVvdXQgfSkge1xuICAgIGxldCB0aW1lb3V0O1xuICAgIGNvbnN0IG5ld0ZuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIGNvbnN0IHRpbWVyRm4gPSAoKSA9PiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dCh0aW1lckZuLCBkZWxheSk7XG4gICAgfTtcbiAgICBuZXdGbi5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB9O1xuICAgIHJldHVybiBuZXdGbjtcbn1cblxuY2xhc3MgRXZlbnRDaGFubmVsIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgZXZlbnRzKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IHt9O1xuICAgICAgICB0aGlzLmVtaXRDYWNoZSA9IFtdO1xuICAgICAgICBpZiAoZXZlbnRzKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhldmVudHMpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uKG5hbWUsIGV2ZW50c1tuYW1lXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbWl0KGV2ZW50TmFtZSwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBmbnMgPSB0aGlzLmxpc3RlbmVyW2V2ZW50TmFtZV07XG4gICAgICAgIGlmICghZm5zKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbWl0Q2FjaGUucHVzaCh7XG4gICAgICAgICAgICAgICAgZXZlbnROYW1lLFxuICAgICAgICAgICAgICAgIGFyZ3MsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmbnMuZm9yRWFjaCgob3B0KSA9PiB7XG4gICAgICAgICAgICBvcHQuZm4uYXBwbHkob3B0LmZuLCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdGVuZXJbZXZlbnROYW1lXSA9IGZucy5maWx0ZXIoKG9wdCkgPT4gb3B0LnR5cGUgIT09ICdvbmNlJyk7XG4gICAgfVxuICAgIG9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICAgICAgdGhpcy5fYWRkTGlzdGVuZXIoZXZlbnROYW1lLCAnb24nLCBmbik7XG4gICAgICAgIHRoaXMuX2NsZWFyQ2FjaGUoZXZlbnROYW1lKTtcbiAgICB9XG4gICAgb25jZShldmVudE5hbWUsIGZuKSB7XG4gICAgICAgIHRoaXMuX2FkZExpc3RlbmVyKGV2ZW50TmFtZSwgJ29uY2UnLCBmbik7XG4gICAgICAgIHRoaXMuX2NsZWFyQ2FjaGUoZXZlbnROYW1lKTtcbiAgICB9XG4gICAgb2ZmKGV2ZW50TmFtZSwgZm4pIHtcbiAgICAgICAgY29uc3QgZm5zID0gdGhpcy5saXN0ZW5lcltldmVudE5hbWVdO1xuICAgICAgICBpZiAoIWZucykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmbikge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmbnMubGVuZ3RoOykge1xuICAgICAgICAgICAgICAgIGlmIChmbnNbaV0uZm4gPT09IGZuKSB7XG4gICAgICAgICAgICAgICAgICAgIGZucy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMubGlzdGVuZXJbZXZlbnROYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfY2xlYXJDYWNoZShldmVudE5hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuZW1pdENhY2hlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmVtaXRDYWNoZVtpbmRleF07XG4gICAgICAgICAgICBjb25zdCBfbmFtZSA9IGV2ZW50TmFtZVxuICAgICAgICAgICAgICAgID8gY2FjaGUuZXZlbnROYW1lID09PSBldmVudE5hbWVcbiAgICAgICAgICAgICAgICAgICAgPyBldmVudE5hbWVcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgOiBjYWNoZS5ldmVudE5hbWU7XG4gICAgICAgICAgICBpZiAoIV9uYW1lKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLmVtaXQuYXBwbHkodGhpcywgW19uYW1lLCAuLi5jYWNoZS5hcmdzXSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGxvY2F0aW9uID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdENhY2hlLnBvcCgpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbWl0Q2FjaGUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2FkZExpc3RlbmVyKGV2ZW50TmFtZSwgdHlwZSwgZm4pIHtcbiAgICAgICAgKHRoaXMubGlzdGVuZXJbZXZlbnROYW1lXSB8fCAodGhpcy5saXN0ZW5lcltldmVudE5hbWVdID0gW10pKS5wdXNoKHtcbiAgICAgICAgICAgIGZuLFxuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jb25zdCBQQUdFX0hPT0tTID0gW1xuICAgIE9OX0lOSVQsXG4gICAgT05fTE9BRCxcbiAgICBPTl9TSE9XLFxuICAgIE9OX0hJREUsXG4gICAgT05fVU5MT0FELFxuICAgIE9OX0JBQ0tfUFJFU1MsXG4gICAgT05fUEFHRV9TQ1JPTEwsXG4gICAgT05fVEFCX0lURU1fVEFQLFxuICAgIE9OX1JFQUNIX0JPVFRPTSxcbiAgICBPTl9QVUxMX0RPV05fUkVGUkVTSCxcbiAgICBPTl9TSEFSRV9USU1FTElORSxcbiAgICBPTl9TSEFSRV9BUFBfTUVTU0FHRSxcbiAgICBPTl9BRERfVE9fRkFWT1JJVEVTLFxuICAgIE9OX1NBVkVfRVhJVF9TVEFURSxcbiAgICBPTl9OQVZJR0FUSU9OX0JBUl9CVVRUT05fVEFQLFxuICAgIE9OX05BVklHQVRJT05fQkFSX1NFQVJDSF9JTlBVVF9DTElDS0VELFxuICAgIE9OX05BVklHQVRJT05fQkFSX1NFQVJDSF9JTlBVVF9DSEFOR0VELFxuICAgIE9OX05BVklHQVRJT05fQkFSX1NFQVJDSF9JTlBVVF9DT05GSVJNRUQsXG4gICAgT05fTkFWSUdBVElPTl9CQVJfU0VBUkNIX0lOUFVUX0ZPQ1VTX0NIQU5HRUQsXG5dO1xuY29uc3QgUEFHRV9TWU5DX0hPT0tTID0gW09OX0xPQUQsIE9OX1NIT1ddO1xuZnVuY3Rpb24gaXNSb290SW1tZWRpYXRlSG9vayhuYW1lKSB7XG4gICAgcmV0dXJuIFBBR0VfU1lOQ19IT09LUy5pbmRleE9mKG5hbWUpID4gLTE7XG59XG5mdW5jdGlvbiBpc1Jvb3RIb29rKG5hbWUpIHtcbiAgICByZXR1cm4gUEFHRV9IT09LUy5pbmRleE9mKG5hbWUpID4gLTE7XG59XG5jb25zdCBVbmlMaWZlY3ljbGVIb29rcyA9IFtcbiAgICBPTl9TSE9XLFxuICAgIE9OX0hJREUsXG4gICAgT05fTEFVTkNILFxuICAgIE9OX0VSUk9SLFxuICAgIE9OX1RIRU1FX0NIQU5HRSxcbiAgICBPTl9QQUdFX05PVF9GT1VORCxcbiAgICBPTl9VTkhBTkRMRV9SRUpFQ1RJT04sXG4gICAgT05fSU5JVCxcbiAgICBPTl9MT0FELFxuICAgIE9OX1JFQURZLFxuICAgIE9OX1VOTE9BRCxcbiAgICBPTl9SRVNJWkUsXG4gICAgT05fQkFDS19QUkVTUyxcbiAgICBPTl9QQUdFX1NDUk9MTCxcbiAgICBPTl9UQUJfSVRFTV9UQVAsXG4gICAgT05fUkVBQ0hfQk9UVE9NLFxuICAgIE9OX1BVTExfRE9XTl9SRUZSRVNILFxuICAgIE9OX1NIQVJFX1RJTUVMSU5FLFxuICAgIE9OX0FERF9UT19GQVZPUklURVMsXG4gICAgT05fU0hBUkVfQVBQX01FU1NBR0UsXG4gICAgT05fU0FWRV9FWElUX1NUQVRFLFxuICAgIE9OX05BVklHQVRJT05fQkFSX0JVVFRPTl9UQVAsXG4gICAgT05fTkFWSUdBVElPTl9CQVJfU0VBUkNIX0lOUFVUX0NMSUNLRUQsXG4gICAgT05fTkFWSUdBVElPTl9CQVJfU0VBUkNIX0lOUFVUX0NIQU5HRUQsXG4gICAgT05fTkFWSUdBVElPTl9CQVJfU0VBUkNIX0lOUFVUX0NPTkZJUk1FRCxcbiAgICBPTl9OQVZJR0FUSU9OX0JBUl9TRUFSQ0hfSU5QVVRfRk9DVVNfQ0hBTkdFRCxcbl07XG5jb25zdCBNSU5JX1BST0dSQU1fUEFHRV9SVU5USU1FX0hPT0tTID0gLyojX19QVVJFX18qLyAoKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uUGFnZVNjcm9sbDogMSxcbiAgICAgICAgb25TaGFyZUFwcE1lc3NhZ2U6IDEgPDwgMSxcbiAgICAgICAgb25TaGFyZVRpbWVsaW5lOiAxIDw8IDIsXG4gICAgfTtcbn0pKCk7XG5mdW5jdGlvbiBpc1VuaUxpZmVjeWNsZUhvb2sobmFtZSwgdmFsdWUsIGNoZWNrVHlwZSA9IHRydWUpIHtcbiAgICAvLyDmo4Dmn6XnsbvlnotcbiAgICBpZiAoY2hlY2tUeXBlICYmICFpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChVbmlMaWZlY3ljbGVIb29rcy5pbmRleE9mKG5hbWUpID4gLTEpIHtcbiAgICAgICAgLy8g5bey6aKE5a6a5LmJXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChuYW1lLmluZGV4T2YoJ29uJykgPT09IDApIHtcbiAgICAgICAgLy8g5LulIG9uIOW8gOWktFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5sZXQgdnVlQXBwO1xuY29uc3QgY3JlYXRlVnVlQXBwSG9va3MgPSBbXTtcbi8qKlxuICog5o+Q5L6bIGNyZWF0ZUFwcCDnmoTlm57osIPkuovku7bvvIzmlrnkvr/kuInmlrnmj5Lku7bmjqXmlLYgQXBwIOWvueixoe+8jOWkhOeQhuaMgumdoOWFqOWxgCBtaXhpbiDkuYvnsbvnmoTpgLvovpFcbiAqL1xuZnVuY3Rpb24gb25DcmVhdGVWdWVBcHAoaG9vaykge1xuICAgIC8vIFRPRE8g5q+P5LiqIG52dWUg6aG16Z2i6YO95Lya6Kem5Y+RXG4gICAgaWYgKHZ1ZUFwcCkge1xuICAgICAgICByZXR1cm4gaG9vayh2dWVBcHApO1xuICAgIH1cbiAgICBjcmVhdGVWdWVBcHBIb29rcy5wdXNoKGhvb2spO1xufVxuZnVuY3Rpb24gaW52b2tlQ3JlYXRlVnVlQXBwSG9vayhhcHApIHtcbiAgICB2dWVBcHAgPSBhcHA7XG4gICAgY3JlYXRlVnVlQXBwSG9va3MuZm9yRWFjaCgoaG9vaykgPT4gaG9vayhhcHApKTtcbn1cbmNvbnN0IGludm9rZUNyZWF0ZUVycm9ySGFuZGxlciA9IG9uY2UoKGFwcCwgY3JlYXRlRXJyb3JIYW5kbGVyKSA9PiB7XG4gICAgaWYgKGlzRnVuY3Rpb24oYXBwLl9jb21wb25lbnQub25FcnJvcikpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVycm9ySGFuZGxlcihhcHApO1xuICAgIH1cbn0pO1xuXG5jb25zdCBFID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIEtlZXAgdGhpcyBlbXB0eSBzbyBpdCdzIGVhc2llciB0byBpbmhlcml0IGZyb21cbiAgICAvLyAodmlhIGh0dHBzOi8vZ2l0aHViLmNvbS9saXBzbWFjayBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvaXNzdWVzLzMpXG59O1xuRS5wcm90b3R5cGUgPSB7XG4gICAgb246IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG4gICAgICAgIChlW25hbWVdIHx8IChlW25hbWVdID0gW10pKS5wdXNoKHtcbiAgICAgICAgICAgIGZuOiBjYWxsYmFjayxcbiAgICAgICAgICAgIGN0eDogY3R4LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBvbmNlOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgICAgICAgICAgc2VsZi5vZmYobmFtZSwgbGlzdGVuZXIpO1xuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkoY3R4LCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIGxpc3RlbmVyLl8gPSBjYWxsYmFjaztcbiAgICAgICAgcmV0dXJuIHRoaXMub24obmFtZSwgbGlzdGVuZXIsIGN0eCk7XG4gICAgfSxcbiAgICBlbWl0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB2YXIgZGF0YSA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgdmFyIGV2dEFyciA9ICgodGhpcy5lIHx8ICh0aGlzLmUgPSB7fSkpW25hbWVdIHx8IFtdKS5zbGljZSgpO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBsZW4gPSBldnRBcnIubGVuZ3RoO1xuICAgICAgICBmb3IgKGk7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgZXZ0QXJyW2ldLmZuLmFwcGx5KGV2dEFycltpXS5jdHgsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgb2ZmOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcbiAgICAgICAgdmFyIGV2dHMgPSBlW25hbWVdO1xuICAgICAgICB2YXIgbGl2ZUV2ZW50cyA9IFtdO1xuICAgICAgICBpZiAoZXZ0cyAmJiBjYWxsYmFjaykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV2dHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZ0c1tpXS5mbiAhPT0gY2FsbGJhY2sgJiYgZXZ0c1tpXS5mbi5fICE9PSBjYWxsYmFjaylcbiAgICAgICAgICAgICAgICAgICAgbGl2ZUV2ZW50cy5wdXNoKGV2dHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZSBldmVudCBmcm9tIHF1ZXVlIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICAgICAgLy8gU3VnZ2VzdGVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9sYXpkXG4gICAgICAgIC8vIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9jb21taXQvYzZlYmZhYTliYzk3M2IzM2QxMTBhODRhMzA3NzQyYjdjZjk0Yzk1MyNjb21taXRjb21tZW50LTUwMjQ5MTBcbiAgICAgICAgbGl2ZUV2ZW50cy5sZW5ndGggPyAoZVtuYW1lXSA9IGxpdmVFdmVudHMpIDogZGVsZXRlIGVbbmFtZV07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG59O1xudmFyIEUkMSA9IEU7XG5cbmNvbnN0IGJvcmRlclN0eWxlcyA9IHtcbiAgICBibGFjazogJ3JnYmEoMCwwLDAsMC40KScsXG4gICAgd2hpdGU6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNCknLFxufTtcbmZ1bmN0aW9uIG5vcm1hbGl6ZVRhYkJhclN0eWxlcyhib3JkZXJTdHlsZSkge1xuICAgIGlmIChib3JkZXJTdHlsZSAmJiBib3JkZXJTdHlsZSBpbiBib3JkZXJTdHlsZXMpIHtcbiAgICAgICAgcmV0dXJuIGJvcmRlclN0eWxlc1tib3JkZXJTdHlsZV07XG4gICAgfVxuICAgIHJldHVybiBib3JkZXJTdHlsZTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVRpdGxlQ29sb3IodGl0bGVDb2xvcikge1xuICAgIHJldHVybiB0aXRsZUNvbG9yID09PSAnYmxhY2snID8gJyMwMDAwMDAnIDogJyNmZmZmZmYnO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplU3R5bGVzKHBhZ2VTdHlsZSwgdGhlbWVDb25maWcgPSB7fSwgbW9kZSA9ICdsaWdodCcpIHtcbiAgICBjb25zdCBtb2RlU3R5bGUgPSB0aGVtZUNvbmZpZ1ttb2RlXTtcbiAgICBjb25zdCBzdHlsZXMgPSB7fTtcbiAgICBpZiAoIW1vZGVTdHlsZSkge1xuICAgICAgICByZXR1cm4gcGFnZVN0eWxlO1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyhwYWdlU3R5bGUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBsZXQgc3R5bGVJdGVtID0gcGFnZVN0eWxlW2tleV0gLy8gT2JqZWN0IEFycmF5IFN0cmluZ1xuICAgICAgICA7XG4gICAgICAgIHN0eWxlc1trZXldID0gKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChpc1BsYWluT2JqZWN0KHN0eWxlSXRlbSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9ybWFsaXplU3R5bGVzKHN0eWxlSXRlbSwgdGhlbWVDb25maWcsIG1vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNBcnJheShzdHlsZUl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlSXRlbS5tYXAoKGl0ZW0pID0+IGlzUGxhaW5PYmplY3QoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgPyBub3JtYWxpemVTdHlsZXMoaXRlbSwgdGhlbWVDb25maWcsIG1vZGUpXG4gICAgICAgICAgICAgICAgICAgIDogaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc1N0cmluZyhzdHlsZUl0ZW0pICYmIHN0eWxlSXRlbS5zdGFydHNXaXRoKCdAJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBfa2V5ID0gc3R5bGVJdGVtLnJlcGxhY2UoJ0AnLCAnJyk7XG4gICAgICAgICAgICAgICAgbGV0IF9zdHlsZUl0ZW0gPSBtb2RlU3R5bGVbX2tleV0gfHwgc3R5bGVJdGVtO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RpdGxlQ29sb3InOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3N0eWxlSXRlbSA9IG5vcm1hbGl6ZVRpdGxlQ29sb3IoX3N0eWxlSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYm9yZGVyU3R5bGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3N0eWxlSXRlbSA9IG5vcm1hbGl6ZVRhYkJhclN0eWxlcyhfc3R5bGVJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gX3N0eWxlSXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHlsZUl0ZW07XG4gICAgICAgIH0pKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gZ2V0RW52TG9jYWxlKCkge1xuICAgIGNvbnN0IHsgZW52IH0gPSBwcm9jZXNzO1xuICAgIGNvbnN0IGxhbmcgPSBlbnYuTENfQUxMIHx8IGVudi5MQ19NRVNTQUdFUyB8fCBlbnYuTEFORyB8fCBlbnYuTEFOR1VBR0U7XG4gICAgcmV0dXJuIChsYW5nICYmIGxhbmcucmVwbGFjZSgvWy46XS4qLywgJycpKSB8fCAnZW4nO1xufVxuXG5leHBvcnQgeyBBQ1RJT05fVFlQRV9BRERfRVZFTlQsIEFDVElPTl9UWVBFX0FERF9XWFNfRVZFTlQsIEFDVElPTl9UWVBFX0NSRUFURSwgQUNUSU9OX1RZUEVfRVZFTlQsIEFDVElPTl9UWVBFX0lOU0VSVCwgQUNUSU9OX1RZUEVfUEFHRV9DUkVBVEUsIEFDVElPTl9UWVBFX1BBR0VfQ1JFQVRFRCwgQUNUSU9OX1RZUEVfUEFHRV9TQ1JPTEwsIEFDVElPTl9UWVBFX1JFTU9WRSwgQUNUSU9OX1RZUEVfUkVNT1ZFX0FUVFJJQlVURSwgQUNUSU9OX1RZUEVfUkVNT1ZFX0VWRU5ULCBBQ1RJT05fVFlQRV9TRVRfQVRUUklCVVRFLCBBQ1RJT05fVFlQRV9TRVRfVEVYVCwgQVRUUl9DSEFOR0VfUFJFRklYLCBBVFRSX0NMQVNTLCBBVFRSX0lOTkVSX0hUTUwsIEFUVFJfU1RZTEUsIEFUVFJfVEVYVF9DT05URU5ULCBBVFRSX1ZfT1dORVJfSUQsIEFUVFJfVl9SRU5ERVJKUywgQVRUUl9WX1NIT1csIEJBQ0tHUk9VTkRfQ09MT1IsIEJVSUxUX0lOX1RBR1MsIEJVSUxUX0lOX1RBR19OQU1FUywgQ09NUE9ORU5UX05BTUVfUFJFRklYLCBDT01QT05FTlRfUFJFRklYLCBDT01QT05FTlRfU0VMRUNUT1JfUFJFRklYLCBEQVRBX1JFLCBFJDEgYXMgRW1pdHRlciwgRXZlbnRDaGFubmVsLCBFdmVudE1vZGlmaWVyRmxhZ3MsIEkxOE5fSlNPTl9ERUxJTUlURVJTLCBKU09OX1BST1RPQ09MLCBMSU5FRkVFRCwgTUlOSV9QUk9HUkFNX1BBR0VfUlVOVElNRV9IT09LUywgTkFWQkFSX0hFSUdIVCwgTk9ERV9UWVBFX0NPTU1FTlQsIE5PREVfVFlQRV9FTEVNRU5ULCBOT0RFX1RZUEVfUEFHRSwgTk9ERV9UWVBFX1RFWFQsIE5WVUVfQlVJTFRfSU5fVEFHUywgTlZVRV9VX0JVSUxUX0lOX1RBR1MsIE9GRl9USEVNRV9DSEFOR0UsIE9OX0FERF9UT19GQVZPUklURVMsIE9OX0FQUF9FTlRFUl9CQUNLR1JPVU5ELCBPTl9BUFBfRU5URVJfRk9SRUdST1VORCwgT05fQkFDS19QUkVTUywgT05fRVJST1IsIE9OX0hJREUsIE9OX0lOSVQsIE9OX0tFWUJPQVJEX0hFSUdIVF9DSEFOR0UsIE9OX0xBVU5DSCwgT05fTE9BRCwgT05fTkFWSUdBVElPTl9CQVJfQlVUVE9OX1RBUCwgT05fTkFWSUdBVElPTl9CQVJfQ0hBTkdFLCBPTl9OQVZJR0FUSU9OX0JBUl9TRUFSQ0hfSU5QVVRfQ0hBTkdFRCwgT05fTkFWSUdBVElPTl9CQVJfU0VBUkNIX0lOUFVUX0NMSUNLRUQsIE9OX05BVklHQVRJT05fQkFSX1NFQVJDSF9JTlBVVF9DT05GSVJNRUQsIE9OX05BVklHQVRJT05fQkFSX1NFQVJDSF9JTlBVVF9GT0NVU19DSEFOR0VELCBPTl9QQUdFX05PVF9GT1VORCwgT05fUEFHRV9TQ1JPTEwsIE9OX1BVTExfRE9XTl9SRUZSRVNILCBPTl9SRUFDSF9CT1RUT00sIE9OX1JFQUNIX0JPVFRPTV9ESVNUQU5DRSwgT05fUkVBRFksIE9OX1JFU0laRSwgT05fU0FWRV9FWElUX1NUQVRFLCBPTl9TSEFSRV9BUFBfTUVTU0FHRSwgT05fU0hBUkVfVElNRUxJTkUsIE9OX1NIT1csIE9OX1RBQl9JVEVNX1RBUCwgT05fVEhFTUVfQ0hBTkdFLCBPTl9VTkhBTkRMRV9SRUpFQ1RJT04sIE9OX1VOTE9BRCwgT05fV0VCX0lOVk9LRV9BUFBfU0VSVklDRSwgT05fV1hTX0lOVk9LRV9DQUxMX01FVEhPRCwgUExVU19SRSwgUFJJTUFSWV9DT0xPUiwgUkVOREVSSlNfTU9EVUxFUywgUkVTUE9OU0lWRV9NSU5fV0lEVEgsIFNDSEVNRV9SRSwgU0VMRUNURURfQ09MT1IsIFNMT1RfREVGQVVMVF9OQU1FLCBUQUJCQVJfSEVJR0hULCBUQUdTLCBVTklfU1NSLCBVTklfU1NSX0RBVEEsIFVOSV9TU1JfR0xPQkFMX0RBVEEsIFVOSV9TU1JfU1RPUkUsIFVOSV9TU1JfVElUTEUsIFVOSV9TVE9SQUdFX0xPQ0FMRSwgVVZVRV9CVUlMVF9JTl9UQUdTLCBVbmlCYXNlTm9kZSwgVW5pQ29tbWVudE5vZGUsIFVuaUVsZW1lbnQsIFVuaUV2ZW50LCBVbmlJbnB1dEVsZW1lbnQsIFVuaUxpZmVjeWNsZUhvb2tzLCBVbmlOb2RlLCBVbmlUZXh0QXJlYUVsZW1lbnQsIFVuaVRleHROb2RlLCBXRUJfSU5WT0tFX0FQUFNFUlZJQ0UsIFdYU19NT0RVTEVTLCBXWFNfUFJPVE9DT0wsIGFkZEZvbnQsIGFkZExlYWRpbmdTbGFzaCwgYm9yZGVyU3R5bGVzLCBjYWNoZSwgY2FjaGVTdHJpbmdGdW5jdGlvbiwgY2FsbE9wdGlvbnMsIGNyZWF0ZUlzQ3VzdG9tRWxlbWVudCwgY3JlYXRlUnB4MlVuaXQsIGNyZWF0ZVVuaUV2ZW50LCBjdXN0b21pemVFdmVudCwgZGVib3VuY2UsIGRlY29kZSwgZGVjb2RlZFF1ZXJ5LCBkZWZhdWx0TWluaVByb2dyYW1ScHgyVW5pdCwgZGVmYXVsdE5WdWVScHgyVW5pdCwgZGVmYXVsdFJweDJVbml0LCBkeW5hbWljU2xvdE5hbWUsIGZvcmNlUGF0Y2hQcm9wLCBmb3JtYXREYXRlVGltZSwgZm9ybWF0TG9nLCBnZXRDdXN0b21EYXRhc2V0LCBnZXRFbnZMb2NhbGUsIGdldExlbiwgZ2V0VmFsdWVCeURhdGFQYXRoLCBpbml0Q3VzdG9tRGF0YXNldE9uY2UsIGludm9rZUFycmF5Rm5zLCBpbnZva2VDcmVhdGVFcnJvckhhbmRsZXIsIGludm9rZUNyZWF0ZVZ1ZUFwcEhvb2ssIGlzQXBwTlZ1ZU5hdGl2ZVRhZywgaXNBcHBOYXRpdmVUYWcsIGlzQXBwVVZ1ZU5hdGl2ZVRhZywgaXNCdWlsdEluQ29tcG9uZW50LCBpc0NvbXBvbmVudEludGVybmFsSW5zdGFuY2UsIGlzQ29tcG9uZW50VGFnLCBpc0g1Q3VzdG9tRWxlbWVudCwgaXNINU5hdGl2ZVRhZywgaXNNaW5pUHJvZ3JhbU5hdGl2ZVRhZywgaXNSb290SG9vaywgaXNSb290SW1tZWRpYXRlSG9vaywgaXNVbmlMaWZlY3ljbGVIb29rLCBub3JtYWxpemVEYXRhc2V0LCBub3JtYWxpemVFdmVudFR5cGUsIG5vcm1hbGl6ZVN0eWxlcywgbm9ybWFsaXplVGFiQmFyU3R5bGVzLCBub3JtYWxpemVUYXJnZXQsIG5vcm1hbGl6ZVRpdGxlQ29sb3IsIG9uQ3JlYXRlVnVlQXBwLCBvbmNlLCBwYXJzZUV2ZW50TmFtZSwgcGFyc2VOVnVlRGF0YXNldCwgcGFyc2VRdWVyeSwgcGFyc2VVcmwsIHBhc3NpdmUsIHBsdXNSZWFkeSwgcmVtb3ZlTGVhZGluZ1NsYXNoLCByZXNvbHZlQ29tcG9uZW50SW5zdGFuY2UsIHJlc29sdmVPd25lckVsLCByZXNvbHZlT3duZXJWbSwgc2FuaXRpc2UsIHNjcm9sbFRvLCBzb3J0T2JqZWN0LCBzdHJpbmdpZnlRdWVyeSwgdXBkYXRlRWxlbWVudFN0eWxlIH07XG4iLCJpbXBvcnQgeyBzaGFsbG93UmVmLCByZWYsIGdldEN1cnJlbnRJbnN0YW5jZSwgaXNJblNTUkNvbXBvbmVudFNldHVwLCBpbmplY3RIb29rIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IGhhc093biwgaXNTdHJpbmcgfSBmcm9tICdAdnVlL3NoYXJlZCc7XG5leHBvcnQgeyBjYXBpdGFsaXplLCBleHRlbmQsIGhhc093biwgaXNQbGFpbk9iamVjdCB9IGZyb20gJ0B2dWUvc2hhcmVkJztcbmltcG9ydCB7IHNhbml0aXNlLCBVTklfU1NSX0RBVEEsIFVOSV9TU1JfR0xPQkFMX0RBVEEsIFVOSV9TU1IsIE9OX1NIT1csIE9OX0hJREUsIE9OX0xBVU5DSCwgT05fRVJST1IsIE9OX1RIRU1FX0NIQU5HRSwgT05fUEFHRV9OT1RfRk9VTkQsIE9OX1VOSEFORExFX1JFSkVDVElPTiwgT05fSU5JVCwgT05fTE9BRCwgT05fUkVBRFksIE9OX1VOTE9BRCwgT05fUkVTSVpFLCBPTl9CQUNLX1BSRVNTLCBPTl9QQUdFX1NDUk9MTCwgT05fVEFCX0lURU1fVEFQLCBPTl9SRUFDSF9CT1RUT00sIE9OX1BVTExfRE9XTl9SRUZSRVNILCBPTl9TQVZFX0VYSVRfU1RBVEUsIE9OX1NIQVJFX1RJTUVMSU5FLCBPTl9BRERfVE9fRkFWT1JJVEVTLCBPTl9TSEFSRV9BUFBfTUVTU0FHRSwgT05fTkFWSUdBVElPTl9CQVJfQlVUVE9OX1RBUCwgT05fTkFWSUdBVElPTl9CQVJfU0VBUkNIX0lOUFVUX0NIQU5HRUQsIE9OX05BVklHQVRJT05fQkFSX1NFQVJDSF9JTlBVVF9DTElDS0VELCBPTl9OQVZJR0FUSU9OX0JBUl9TRUFSQ0hfSU5QVVRfQ09ORklSTUVELCBPTl9OQVZJR0FUSU9OX0JBUl9TRUFSQ0hfSU5QVVRfRk9DVVNfQ0hBTkdFRCB9IGZyb20gJ0BkY2xvdWRpby91bmktc2hhcmVkJztcblxuZnVuY3Rpb24gZ2V0U1NSRGF0YVR5cGUoKSB7XG4gICAgcmV0dXJuIGdldEN1cnJlbnRJbnN0YW5jZSgpID8gVU5JX1NTUl9EQVRBIDogVU5JX1NTUl9HTE9CQUxfREFUQTtcbn1cbmZ1bmN0aW9uIGFzc2VydEtleShrZXksIHNoYWxsb3cgPSBmYWxzZSkge1xuICAgIGlmICgha2V5KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtzaGFsbG93ID8gJ3NoYWxsb3dTc3JSZWYnIDogJ3NzclJlZid9OiBZb3UgbXVzdCBwcm92aWRlIGEga2V5LmApO1xuICAgIH1cbn1cbmNvbnN0IHNzckNsaWVudFJlZiA9ICh2YWx1ZSwga2V5LCBzaGFsbG93ID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCB2YWxSZWYgPSBzaGFsbG93ID8gc2hhbGxvd1JlZih2YWx1ZSkgOiByZWYodmFsdWUpO1xuICAgIC8vIOmdniBoNSDlubPlj7BcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHZhbFJlZjtcbiAgICB9XG4gICAgY29uc3QgX191bmlTU1IgPSB3aW5kb3dbVU5JX1NTUl07XG4gICAgaWYgKCFfX3VuaVNTUikge1xuICAgICAgICByZXR1cm4gdmFsUmVmO1xuICAgIH1cbiAgICBjb25zdCB0eXBlID0gZ2V0U1NSRGF0YVR5cGUoKTtcbiAgICBhc3NlcnRLZXkoa2V5LCBzaGFsbG93KTtcbiAgICBpZiAoaGFzT3duKF9fdW5pU1NSW3R5cGVdLCBrZXkpKSB7XG4gICAgICAgIHZhbFJlZi52YWx1ZSA9IF9fdW5pU1NSW3R5cGVdW2tleV07XG4gICAgICAgIGlmICh0eXBlID09PSBVTklfU1NSX0RBVEEpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBfX3VuaVNTUlt0eXBlXVtrZXldOyAvLyBUT0RPIOmdnuWFqOWxgOaVsOaNruS7heS9v+eUqOS4gOasoe+8n+WQpuWImeS4i+asoei/mOS8muWGjeasoeS9v+eUqOivpeaVsOaNrlxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWxSZWY7XG59O1xuY29uc3QgZ2xvYmFsRGF0YSA9IHt9O1xuY29uc3Qgc3NyUmVmID0gKHZhbHVlLCBrZXkpID0+IHtcbiAgICByZXR1cm4gc3NyQ2xpZW50UmVmKHZhbHVlLCBrZXkpO1xufTtcbmNvbnN0IHNoYWxsb3dTc3JSZWYgPSAodmFsdWUsIGtleSkgPT4ge1xuICAgIHJldHVybiBzc3JDbGllbnRSZWYodmFsdWUsIGtleSwgdHJ1ZSk7XG59O1xuZnVuY3Rpb24gZ2V0U3NyR2xvYmFsRGF0YSgpIHtcbiAgICByZXR1cm4gc2FuaXRpc2UoZ2xvYmFsRGF0YSk7XG59XG5cbi8qKlxuICogdW5pIOWvueixoeaYr+i3qOWunuS+i+eahO+8jOiAjOatpOWkhOWIl+eahCBBUEkg5Z2H5piv6ZyA6KaB6Lef5b2T5YmN5a6e5L6L5YWz6IGU55qE77yM5q+U5aaCIHJlcXVpcmVOYXRpdmVQbHVnaW4g6I635Y+WIGRvbSDml7bvvIzkvp3otZblvZPliY0gd2VleCDlrp7kvotcbiAqL1xuZnVuY3Rpb24gZ2V0Q3VycmVudFN1Yk5WdWUoKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiB1bmkuZ2V0U3ViTlZ1ZUJ5SWQocGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQpO1xufVxuZnVuY3Rpb24gcmVxdWlyZU5hdGl2ZVBsdWdpbihuYW1lKSB7XG4gICAgcmV0dXJuIHdlZXgucmVxdWlyZU1vZHVsZShuYW1lKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0QXBwTG9nKHR5cGUsIGZpbGVuYW1lLCAuLi5hcmdzKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmICh1bmkuX19sb2dfXykge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHVuaS5fX2xvZ19fKHR5cGUsIGZpbGVuYW1lLCAuLi5hcmdzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGVbdHlwZV0uYXBwbHkoY29uc29sZSwgWy4uLmFyZ3MsIGZpbGVuYW1lXSk7XG4gICAgfVxufVxuZnVuY3Rpb24gZm9ybWF0SDVMb2codHlwZSwgZmlsZW5hbWUsIC4uLmFyZ3MpIHtcbiAgICBjb25zb2xlW3R5cGVdLmFwcGx5KGNvbnNvbGUsIFsuLi5hcmdzLCBmaWxlbmFtZV0pO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRWFzeWNvbShjb21wb25lbnQsIGVhc3ljb20pIHtcbiAgICByZXR1cm4gaXNTdHJpbmcoY29tcG9uZW50KSA/IGVhc3ljb20gOiBjb21wb25lbnQ7XG59XG5cbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiQGRjbG91ZGlvL3R5cGVzXCIgLz5cbmNvbnN0IGNyZWF0ZUhvb2sgPSAobGlmZWN5Y2xlKSA9PiAoaG9vaywgdGFyZ2V0ID0gZ2V0Q3VycmVudEluc3RhbmNlKCkpID0+IHtcbiAgICAvLyBwb3N0LWNyZWF0ZSBsaWZlY3ljbGUgcmVnaXN0cmF0aW9ucyBhcmUgbm9vcHMgZHVyaW5nIFNTUlxuICAgICFpc0luU1NSQ29tcG9uZW50U2V0dXAgJiYgaW5qZWN0SG9vayhsaWZlY3ljbGUsIGhvb2ssIHRhcmdldCk7XG59O1xuY29uc3Qgb25TaG93ID0gLyojX19QVVJFX18qLyBjcmVhdGVIb29rKE9OX1NIT1cpO1xuY29uc3Qgb25IaWRlID0gLyojX19QVVJFX18qLyBjcmVhdGVIb29rKE9OX0hJREUpO1xuY29uc3Qgb25MYXVuY2ggPSBcbi8qI19fUFVSRV9fKi8gY3JlYXRlSG9vayhPTl9MQVVOQ0gpO1xuY29uc3Qgb25FcnJvciA9IFxuLyojX19QVVJFX18qLyBjcmVhdGVIb29rKE9OX0VSUk9SKTtcbmNvbnN0IG9uVGhlbWVDaGFuZ2UgPSBcbi8qI19fUFVSRV9fKi8gY3JlYXRlSG9vayhPTl9USEVNRV9DSEFOR0UpO1xuY29uc3Qgb25QYWdlTm90Rm91bmQgPSBcbi8qI19fUFVSRV9fKi8gY3JlYXRlSG9vayhPTl9QQUdFX05PVF9GT1VORCk7XG5jb25zdCBvblVuaGFuZGxlZFJlamVjdGlvbiA9IC8qI19fUFVSRV9fKi8gY3JlYXRlSG9vayhPTl9VTkhBTkRMRV9SRUpFQ1RJT04pO1xuY29uc3Qgb25Jbml0ID0gXG4vKiNfX1BVUkVfXyovIGNyZWF0ZUhvb2soT05fSU5JVCk7XG4vLyDlsI/nqIvluo/lpoLmnpzmg7PlnKggc2V0dXAg55qEIHByb3BzIOS8oOmAkumhtemdouWPguaVsO+8jOmcgOimgeWumuS5iSBwcm9wc++8jOaVheWQjOaXtuaatOmcsiBvbkxvYWQg5ZCnXG5jb25zdCBvbkxvYWQgPSBcbi8qI19fUFVSRV9fKi8gY3JlYXRlSG9vayhPTl9MT0FEKTtcbmNvbnN0IG9uUmVhZHkgPSAvKiNfX1BVUkVfXyovIGNyZWF0ZUhvb2soT05fUkVBRFkpO1xuY29uc3Qgb25VbmxvYWQgPSAvKiNfX1BVUkVfXyovIGNyZWF0ZUhvb2soT05fVU5MT0FEKTtcbmNvbnN0IG9uUmVzaXplID0gXG4vKiNfX1BVUkVfXyovIGNyZWF0ZUhvb2soT05fUkVTSVpFKTtcbmNvbnN0IG9uQmFja1ByZXNzID0gXG4vKiNfX1BVUkVfXyovIGNyZWF0ZUhvb2soT05fQkFDS19QUkVTUyk7XG5jb25zdCBvblBhZ2VTY3JvbGwgPSBcbi8qI19fUFVSRV9fKi8gY3JlYXRlSG9vayhPTl9QQUdFX1NDUk9MTCk7XG5jb25zdCBvblRhYkl0ZW1UYXAgPSBcbi8qI19fUFVSRV9fKi8gY3JlYXRlSG9vayhPTl9UQUJfSVRFTV9UQVApO1xuY29uc3Qgb25SZWFjaEJvdHRvbSA9IC8qI19fUFVSRV9fKi8gY3JlYXRlSG9vayhPTl9SRUFDSF9CT1RUT00pO1xuY29uc3Qgb25QdWxsRG93blJlZnJlc2ggPSAvKiNfX1BVUkVfXyovIGNyZWF0ZUhvb2soT05fUFVMTF9ET1dOX1JFRlJFU0gpO1xuY29uc3Qgb25TYXZlRXhpdFN0YXRlID0gXG4vKiNfX1BVUkVfXyovIGNyZWF0ZUhvb2soT05fU0FWRV9FWElUX1NUQVRFKTtcbmNvbnN0IG9uU2hhcmVUaW1lbGluZSA9IFxuLyojX19QVVJFX18qLyBjcmVhdGVIb29rKE9OX1NIQVJFX1RJTUVMSU5FKTtcbmNvbnN0IG9uQWRkVG9GYXZvcml0ZXMgPSBcbi8qI19fUFVSRV9fKi8gY3JlYXRlSG9vayhPTl9BRERfVE9fRkFWT1JJVEVTKTtcbmNvbnN0IG9uU2hhcmVBcHBNZXNzYWdlID0gXG4vKiNfX1BVUkVfXyovIGNyZWF0ZUhvb2soT05fU0hBUkVfQVBQX01FU1NBR0UpO1xuY29uc3Qgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwID0gLyojX19QVVJFX18qLyBjcmVhdGVIb29rKE9OX05BVklHQVRJT05fQkFSX0JVVFRPTl9UQVApO1xuY29uc3Qgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkID0gLyojX19QVVJFX18qLyBjcmVhdGVIb29rKE9OX05BVklHQVRJT05fQkFSX1NFQVJDSF9JTlBVVF9DSEFOR0VEKTtcbmNvbnN0IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCA9IC8qI19fUFVSRV9fKi8gY3JlYXRlSG9vayhPTl9OQVZJR0FUSU9OX0JBUl9TRUFSQ0hfSU5QVVRfQ0xJQ0tFRCk7XG5jb25zdCBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCA9IC8qI19fUFVSRV9fKi8gY3JlYXRlSG9vayhPTl9OQVZJR0FUSU9OX0JBUl9TRUFSQ0hfSU5QVVRfQ09ORklSTUVEKTtcbmNvbnN0IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Rm9jdXNDaGFuZ2VkID0gXG4vKiNfX1BVUkVfXyovIGNyZWF0ZUhvb2soT05fTkFWSUdBVElPTl9CQVJfU0VBUkNIX0lOUFVUX0ZPQ1VTX0NIQU5HRUQpO1xuXG5leHBvcnQgeyBmb3JtYXRBcHBMb2csIGZvcm1hdEg1TG9nLCBnZXRDdXJyZW50U3ViTlZ1ZSwgZ2V0U3NyR2xvYmFsRGF0YSwgb25BZGRUb0Zhdm9yaXRlcywgb25CYWNrUHJlc3MsIG9uRXJyb3IsIG9uSGlkZSwgb25Jbml0LCBvbkxhdW5jaCwgb25Mb2FkLCBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAsIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZCwgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkLCBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCwgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRGb2N1c0NoYW5nZWQsIG9uUGFnZU5vdEZvdW5kLCBvblBhZ2VTY3JvbGwsIG9uUHVsbERvd25SZWZyZXNoLCBvblJlYWNoQm90dG9tLCBvblJlYWR5LCBvblJlc2l6ZSwgb25TYXZlRXhpdFN0YXRlLCBvblNoYXJlQXBwTWVzc2FnZSwgb25TaGFyZVRpbWVsaW5lLCBvblNob3csIG9uVGFiSXRlbVRhcCwgb25UaGVtZUNoYW5nZSwgb25VbmhhbmRsZWRSZWplY3Rpb24sIG9uVW5sb2FkLCByZXF1aXJlTmF0aXZlUGx1Z2luLCByZXNvbHZlRWFzeWNvbSwgc2hhbGxvd1NzclJlZiwgc3NyUmVmIH07XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0SW5kZXhNZXNzYWdlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuZXdGcmllbmRzOiB7XG4gICAgICAgICAgICB1bnJlYWQ6IDIsXG4gICAgICAgICAgICBuYW1lOiAn5aW95Y+L55Sz6K+3JyxcbiAgICAgICAgICAgIGF2YXRhcjonaHR0cDovLzQ3Ljk4LjEyOC4yNTU6MzAwMS9zdmcvZnJpZW5kX2FkZC5zdmcnLFxuICAgICAgICAgICAgbmV3czogJ+aCqOacieaWsOeahOWlveWPi+ivt+axgidcbiAgICAgICAgfSxcbiAgICAgICAgbWVzc2FnZUxpc3QgOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXZhdGFyOiAnaHR0cDovLzQ3Ljk4LjEyOC4yNTU6MzAwMS9wbmcvbG9nby5wbmcnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICflvIDlj5HnmoTlrp7lipsnLFxuICAgICAgICAgICAgICAgIG5ld3M6ICcxY2FzY3NhY2FzY2FzY2FzZGNhc2Nhc2RjYXNjYXNk5bCx5piv5L2g5byA5Y+R55qE5a6e5Yqb5bCx5piv5L2g5byA5Y+R55qE5a6e5Yqb5bCx5piv5L2g5byA5Y+R55qE5a6e5Yqb5bCx5piv5L2g5byA5Y+R55qE5a6e5Yqb5bCx5piv5L2g5byA5Y+R55qE5a6e5Yqb5bCx5piv5L2g5byA5Y+R55qE5a6e5YqbJyxcbiAgICAgICAgICAgICAgICB1bnJlYWQ6IDAsXG4gICAgICAgICAgICAgICAgdGltZTogMTY0OTA4ODAwMDAwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdmF0YXI6ICdodHRwOi8vNDcuOTguMTI4LjI1NTozMDAxL3BuZy9sb2dvLnBuZycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ+W8gOWPkeeahOWunuWKmycsXG4gICAgICAgICAgICAgICAgbmV3czogJzFjYXNjc2FjYXPlipsnLFxuICAgICAgICAgICAgICAgIHVucmVhZDogMTAwLFxuICAgICAgICAgICAgICAgIHRpbWU6IDE2NDkwODgwMDAwMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXZhdGFyOiAnaHR0cDovLzQ3Ljk4LjEyOC4yNTU6MzAwMS9wbmcvbG9nby5wbmcnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICflvIDlj5HnmoTlrp7lipsnLFxuICAgICAgICAgICAgICAgIG5ld3M6ICcxY2FzY3NhY2Fz5YqbJyxcbiAgICAgICAgICAgICAgICB1bnJlYWQ6IDEwMCxcbiAgICAgICAgICAgICAgICB0aW1lOiAxNjk0MTQyODgzMzQ3XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF2YXRhcjogJ2h0dHA6Ly80Ny45OC4xMjguMjU1OjMwMDEvcG5nL2xvZ28ucG5nJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAn5byA5Y+R55qE5a6e5YqbJyxcbiAgICAgICAgICAgICAgICBuZXdzOiAnMWNhc2NzYWNhc+WKmycsXG4gICAgICAgICAgICAgICAgdW5yZWFkOiAxMDAsXG4gICAgICAgICAgICAgICAgdGltZTogMTY5NDE0Mjg4MzM0N1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdmF0YXI6ICdodHRwOi8vNDcuOTguMTI4LjI1NTozMDAxL3BuZy9sb2dvLnBuZycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ+W8gOWPkeeahOWunuWKmycsXG4gICAgICAgICAgICAgICAgbmV3czogJzFjYXNjc2FjYXPlipsnLFxuICAgICAgICAgICAgICAgIHVucmVhZDogMTAwLFxuICAgICAgICAgICAgICAgIHRpbWU6IDE2OTQxNDI4ODMzNDdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXZhdGFyOiAnaHR0cDovLzQ3Ljk4LjEyOC4yNTU6MzAwMS9wbmcvbG9nby5wbmcnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICflvIDlj5HnmoTlrp7lipsnLFxuICAgICAgICAgICAgICAgIG5ld3M6ICcxY2FzY3NhY2Fz5YqbJyxcbiAgICAgICAgICAgICAgICB1bnJlYWQ6IDEwMCxcbiAgICAgICAgICAgICAgICB0aW1lOiAxNjk0MTQyODgzMzQ3XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF2YXRhcjogJ2h0dHA6Ly80Ny45OC4xMjguMjU1OjMwMDEvcG5nL2xvZ28ucG5nJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAn5byA5Y+R55qE5a6e5YqbJyxcbiAgICAgICAgICAgICAgICBuZXdzOiAnMWNhc2NzYWNhc+WKmycsXG4gICAgICAgICAgICAgICAgdW5yZWFkOiAxMDAsXG4gICAgICAgICAgICAgICAgdGltZTogMTY5NDE0Mjg4MzM0N1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdmF0YXI6ICdodHRwOi8vNDcuOTguMTI4LjI1NTozMDAxL3BuZy9sb2dvLnBuZycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ+W8gOWPkeeahOWunuWKmycsXG4gICAgICAgICAgICAgICAgbmV3czogJzFjYXNjc2FjYXPlipsnLFxuICAgICAgICAgICAgICAgIHVucmVhZDogMTAwLFxuICAgICAgICAgICAgICAgIHRpbWU6IDE2OTQxNDI4ODMzNDdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXZhdGFyOiAnaHR0cDovLzQ3Ljk4LjEyOC4yNTU6MzAwMS9wbmcvbG9nby5wbmcnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICflvIDlj5HnmoTlrp7lipsnLFxuICAgICAgICAgICAgICAgIG5ld3M6ICcxY2FzY3NhY2Fz5YqbJyxcbiAgICAgICAgICAgICAgICB1bnJlYWQ6IDEwMCxcbiAgICAgICAgICAgICAgICB0aW1lOiAxNjk0MTQyODgzMzQ3XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF2YXRhcjogJ2h0dHA6Ly80Ny45OC4xMjguMjU1OjMwMDEvcG5nL2xvZ28ucG5nJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAn5byA5Y+R55qE5a6e5YqbJyxcbiAgICAgICAgICAgICAgICBuZXdzOiAnMWNhc2NzYWNhc+WKmycsXG4gICAgICAgICAgICAgICAgdW5yZWFkOiAxMDAsXG4gICAgICAgICAgICAgICAgdGltZTogMTY5NDE0Mjg4MzM0N1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdmF0YXI6ICdodHRwOi8vNDcuOTguMTI4LjI1NTozMDAxL3BuZy9sb2dvLnBuZycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ+W8gOWPkeeahOWunuWKmycsXG4gICAgICAgICAgICAgICAgbmV3czogJzFjYXNjc2FjYXPlipsnLFxuICAgICAgICAgICAgICAgIHVucmVhZDogMTAwLFxuICAgICAgICAgICAgICAgIHRpbWU6IDE2OTQxNDI4ODMzNDdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXZhdGFyOiAnaHR0cDovLzQ3Ljk4LjEyOC4yNTU6MzAwMS9wbmcvbG9nby5wbmcnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICflvIDlj5HnmoTlrp7lipsnLFxuICAgICAgICAgICAgICAgIG5ld3M6ICcxY2FzY3NhY2Fz5YqbJyxcbiAgICAgICAgICAgICAgICB1bnJlYWQ6IDEwMCxcbiAgICAgICAgICAgICAgICB0aW1lOiAxNjk0MTQyODgzMzQ3XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF2YXRhcjogJ2h0dHA6Ly80Ny45OC4xMjguMjU1OjMwMDEvcG5nL2xvZ28ucG5nJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAn5byA5Y+R55qE5a6e5YqbJyxcbiAgICAgICAgICAgICAgICBuZXdzOiAnMWNhc2NzYWNhc+WKmycsXG4gICAgICAgICAgICAgICAgdW5yZWFkOiAxMDAsXG4gICAgICAgICAgICAgICAgdGltZTogMTY5NDE0Mjg4MzM0N1xuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxufSIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOih0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6dHx8c2VsZikuZGF5anM9ZSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PTFlMyxlPTZlNCxuPTM2ZTUscj1cIm1pbGxpc2Vjb25kXCIsaT1cInNlY29uZFwiLHM9XCJtaW51dGVcIix1PVwiaG91clwiLGE9XCJkYXlcIixvPVwid2Vla1wiLGM9XCJtb250aFwiLGY9XCJxdWFydGVyXCIsaD1cInllYXJcIixkPVwiZGF0ZVwiLGw9XCJJbnZhbGlkIERhdGVcIiwkPS9eKFxcZHs0fSlbLS9dPyhcXGR7MSwyfSk/Wy0vXT8oXFxkezAsMn0pW1R0XFxzXSooXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Wy46XT8oXFxkKyk/JC8seT0vXFxbKFteXFxdXSspXXxZezEsNH18TXsxLDR9fER7MSwyfXxkezEsNH18SHsxLDJ9fGh7MSwyfXxhfEF8bXsxLDJ9fHN7MSwyfXxaezEsMn18U1NTL2csTT17bmFtZTpcImVuXCIsd2Vla2RheXM6XCJTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheVwiLnNwbGl0KFwiX1wiKSxtb250aHM6XCJKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyXCIuc3BsaXQoXCJfXCIpLG9yZGluYWw6ZnVuY3Rpb24odCl7dmFyIGU9W1widGhcIixcInN0XCIsXCJuZFwiLFwicmRcIl0sbj10JTEwMDtyZXR1cm5cIltcIit0KyhlWyhuLTIwKSUxMF18fGVbbl18fGVbMF0pK1wiXVwifX0sbT1mdW5jdGlvbih0LGUsbil7dmFyIHI9U3RyaW5nKHQpO3JldHVybiFyfHxyLmxlbmd0aD49ZT90OlwiXCIrQXJyYXkoZSsxLXIubGVuZ3RoKS5qb2luKG4pK3R9LHY9e3M6bSx6OmZ1bmN0aW9uKHQpe3ZhciBlPS10LnV0Y09mZnNldCgpLG49TWF0aC5hYnMoZSkscj1NYXRoLmZsb29yKG4vNjApLGk9biU2MDtyZXR1cm4oZTw9MD9cIitcIjpcIi1cIikrbShyLDIsXCIwXCIpK1wiOlwiK20oaSwyLFwiMFwiKX0sbTpmdW5jdGlvbiB0KGUsbil7aWYoZS5kYXRlKCk8bi5kYXRlKCkpcmV0dXJuLXQobixlKTt2YXIgcj0xMioobi55ZWFyKCktZS55ZWFyKCkpKyhuLm1vbnRoKCktZS5tb250aCgpKSxpPWUuY2xvbmUoKS5hZGQocixjKSxzPW4taTwwLHU9ZS5jbG9uZSgpLmFkZChyKyhzPy0xOjEpLGMpO3JldHVybisoLShyKyhuLWkpLyhzP2ktdTp1LWkpKXx8MCl9LGE6ZnVuY3Rpb24odCl7cmV0dXJuIHQ8MD9NYXRoLmNlaWwodCl8fDA6TWF0aC5mbG9vcih0KX0scDpmdW5jdGlvbih0KXtyZXR1cm57TTpjLHk6aCx3Om8sZDphLEQ6ZCxoOnUsbTpzLHM6aSxtczpyLFE6Zn1bdF18fFN0cmluZyh0fHxcIlwiKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL3MkLyxcIlwiKX0sdTpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dH19LGc9XCJlblwiLEQ9e307RFtnXT1NO3ZhciBwPWZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgYn0sUz1mdW5jdGlvbiB0KGUsbixyKXt2YXIgaTtpZighZSlyZXR1cm4gZztpZihcInN0cmluZ1wiPT10eXBlb2YgZSl7dmFyIHM9ZS50b0xvd2VyQ2FzZSgpO0Rbc10mJihpPXMpLG4mJihEW3NdPW4saT1zKTt2YXIgdT1lLnNwbGl0KFwiLVwiKTtpZighaSYmdS5sZW5ndGg+MSlyZXR1cm4gdCh1WzBdKX1lbHNle3ZhciBhPWUubmFtZTtEW2FdPWUsaT1hfXJldHVybiFyJiZpJiYoZz1pKSxpfHwhciYmZ30sdz1mdW5jdGlvbih0LGUpe2lmKHAodCkpcmV0dXJuIHQuY2xvbmUoKTt2YXIgbj1cIm9iamVjdFwiPT10eXBlb2YgZT9lOnt9O3JldHVybiBuLmRhdGU9dCxuLmFyZ3M9YXJndW1lbnRzLG5ldyBiKG4pfSxPPXY7Ty5sPVMsTy5pPXAsTy53PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHcodCx7bG9jYWxlOmUuJEwsdXRjOmUuJHUseDplLiR4LCRvZmZzZXQ6ZS4kb2Zmc2V0fSl9O3ZhciBiPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gTSh0KXt0aGlzLiRMPVModC5sb2NhbGUsbnVsbCwhMCksdGhpcy5wYXJzZSh0KX12YXIgbT1NLnByb3RvdHlwZTtyZXR1cm4gbS5wYXJzZT1mdW5jdGlvbih0KXt0aGlzLiRkPWZ1bmN0aW9uKHQpe3ZhciBlPXQuZGF0ZSxuPXQudXRjO2lmKG51bGw9PT1lKXJldHVybiBuZXcgRGF0ZShOYU4pO2lmKE8udShlKSlyZXR1cm4gbmV3IERhdGU7aWYoZSBpbnN0YW5jZW9mIERhdGUpcmV0dXJuIG5ldyBEYXRlKGUpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYhL1okL2kudGVzdChlKSl7dmFyIHI9ZS5tYXRjaCgkKTtpZihyKXt2YXIgaT1yWzJdLTF8fDAscz0ocls3XXx8XCIwXCIpLnN1YnN0cmluZygwLDMpO3JldHVybiBuP25ldyBEYXRlKERhdGUuVVRDKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpKTpuZXcgRGF0ZShyWzFdLGksclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxzKX19cmV0dXJuIG5ldyBEYXRlKGUpfSh0KSx0aGlzLiR4PXQueHx8e30sdGhpcy5pbml0KCl9LG0uaW5pdD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuJGQ7dGhpcy4keT10LmdldEZ1bGxZZWFyKCksdGhpcy4kTT10LmdldE1vbnRoKCksdGhpcy4kRD10LmdldERhdGUoKSx0aGlzLiRXPXQuZ2V0RGF5KCksdGhpcy4kSD10LmdldEhvdXJzKCksdGhpcy4kbT10LmdldE1pbnV0ZXMoKSx0aGlzLiRzPXQuZ2V0U2Vjb25kcygpLHRoaXMuJG1zPXQuZ2V0TWlsbGlzZWNvbmRzKCl9LG0uJHV0aWxzPWZ1bmN0aW9uKCl7cmV0dXJuIE99LG0uaXNWYWxpZD1mdW5jdGlvbigpe3JldHVybiEodGhpcy4kZC50b1N0cmluZygpPT09bCl9LG0uaXNTYW1lPWZ1bmN0aW9uKHQsZSl7dmFyIG49dyh0KTtyZXR1cm4gdGhpcy5zdGFydE9mKGUpPD1uJiZuPD10aGlzLmVuZE9mKGUpfSxtLmlzQWZ0ZXI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdyh0KTx0aGlzLnN0YXJ0T2YoZSl9LG0uaXNCZWZvcmU9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5lbmRPZihlKTx3KHQpfSxtLiRnPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gTy51KHQpP3RoaXNbZV06dGhpcy5zZXQobix0KX0sbS51bml4PWZ1bmN0aW9uKCl7cmV0dXJuIE1hdGguZmxvb3IodGhpcy52YWx1ZU9mKCkvMWUzKX0sbS52YWx1ZU9mPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQuZ2V0VGltZSgpfSxtLnN0YXJ0T2Y9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLHI9ISFPLnUoZSl8fGUsZj1PLnAodCksbD1mdW5jdGlvbih0LGUpe3ZhciBpPU8udyhuLiR1P0RhdGUuVVRDKG4uJHksZSx0KTpuZXcgRGF0ZShuLiR5LGUsdCksbik7cmV0dXJuIHI/aTppLmVuZE9mKGEpfSwkPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE8udyhuLnRvRGF0ZSgpW3RdLmFwcGx5KG4udG9EYXRlKFwic1wiKSwocj9bMCwwLDAsMF06WzIzLDU5LDU5LDk5OV0pLnNsaWNlKGUpKSxuKX0seT10aGlzLiRXLE09dGhpcy4kTSxtPXRoaXMuJEQsdj1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIik7c3dpdGNoKGYpe2Nhc2UgaDpyZXR1cm4gcj9sKDEsMCk6bCgzMSwxMSk7Y2FzZSBjOnJldHVybiByP2woMSxNKTpsKDAsTSsxKTtjYXNlIG86dmFyIGc9dGhpcy4kbG9jYWxlKCkud2Vla1N0YXJ0fHwwLEQ9KHk8Zz95Kzc6eSktZztyZXR1cm4gbChyP20tRDptKyg2LUQpLE0pO2Nhc2UgYTpjYXNlIGQ6cmV0dXJuICQoditcIkhvdXJzXCIsMCk7Y2FzZSB1OnJldHVybiAkKHYrXCJNaW51dGVzXCIsMSk7Y2FzZSBzOnJldHVybiAkKHYrXCJTZWNvbmRzXCIsMik7Y2FzZSBpOnJldHVybiAkKHYrXCJNaWxsaXNlY29uZHNcIiwzKTtkZWZhdWx0OnJldHVybiB0aGlzLmNsb25lKCl9fSxtLmVuZE9mPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnN0YXJ0T2YodCwhMSl9LG0uJHNldD1mdW5jdGlvbih0LGUpe3ZhciBuLG89Ty5wKHQpLGY9XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpLGw9KG49e30sblthXT1mK1wiRGF0ZVwiLG5bZF09ZitcIkRhdGVcIixuW2NdPWYrXCJNb250aFwiLG5baF09ZitcIkZ1bGxZZWFyXCIsblt1XT1mK1wiSG91cnNcIixuW3NdPWYrXCJNaW51dGVzXCIsbltpXT1mK1wiU2Vjb25kc1wiLG5bcl09ZitcIk1pbGxpc2Vjb25kc1wiLG4pW29dLCQ9bz09PWE/dGhpcy4kRCsoZS10aGlzLiRXKTplO2lmKG89PT1jfHxvPT09aCl7dmFyIHk9dGhpcy5jbG9uZSgpLnNldChkLDEpO3kuJGRbbF0oJCkseS5pbml0KCksdGhpcy4kZD15LnNldChkLE1hdGgubWluKHRoaXMuJEQseS5kYXlzSW5Nb250aCgpKSkuJGR9ZWxzZSBsJiZ0aGlzLiRkW2xdKCQpO3JldHVybiB0aGlzLmluaXQoKSx0aGlzfSxtLnNldD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmNsb25lKCkuJHNldCh0LGUpfSxtLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpc1tPLnAodCldKCl9LG0uYWRkPWZ1bmN0aW9uKHIsZil7dmFyIGQsbD10aGlzO3I9TnVtYmVyKHIpO3ZhciAkPU8ucChmKSx5PWZ1bmN0aW9uKHQpe3ZhciBlPXcobCk7cmV0dXJuIE8udyhlLmRhdGUoZS5kYXRlKCkrTWF0aC5yb3VuZCh0KnIpKSxsKX07aWYoJD09PWMpcmV0dXJuIHRoaXMuc2V0KGMsdGhpcy4kTStyKTtpZigkPT09aClyZXR1cm4gdGhpcy5zZXQoaCx0aGlzLiR5K3IpO2lmKCQ9PT1hKXJldHVybiB5KDEpO2lmKCQ9PT1vKXJldHVybiB5KDcpO3ZhciBNPShkPXt9LGRbc109ZSxkW3VdPW4sZFtpXT10LGQpWyRdfHwxLG09dGhpcy4kZC5nZXRUaW1lKCkrcipNO3JldHVybiBPLncobSx0aGlzKX0sbS5zdWJ0cmFjdD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmFkZCgtMSp0LGUpfSxtLmZvcm1hdD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLG49dGhpcy4kbG9jYWxlKCk7aWYoIXRoaXMuaXNWYWxpZCgpKXJldHVybiBuLmludmFsaWREYXRlfHxsO3ZhciByPXR8fFwiWVlZWS1NTS1ERFRISDptbTpzc1pcIixpPU8ueih0aGlzKSxzPXRoaXMuJEgsdT10aGlzLiRtLGE9dGhpcy4kTSxvPW4ud2Vla2RheXMsYz1uLm1vbnRocyxmPW4ubWVyaWRpZW0saD1mdW5jdGlvbih0LG4saSxzKXtyZXR1cm4gdCYmKHRbbl18fHQoZSxyKSl8fGlbbl0uc2xpY2UoMCxzKX0sZD1mdW5jdGlvbih0KXtyZXR1cm4gTy5zKHMlMTJ8fDEyLHQsXCIwXCIpfSwkPWZ8fGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10PDEyP1wiQU1cIjpcIlBNXCI7cmV0dXJuIG4/ci50b0xvd2VyQ2FzZSgpOnJ9O3JldHVybiByLnJlcGxhY2UoeSwoZnVuY3Rpb24odCxyKXtyZXR1cm4gcnx8ZnVuY3Rpb24odCl7c3dpdGNoKHQpe2Nhc2VcIllZXCI6cmV0dXJuIFN0cmluZyhlLiR5KS5zbGljZSgtMik7Y2FzZVwiWVlZWVwiOnJldHVybiBPLnMoZS4keSw0LFwiMFwiKTtjYXNlXCJNXCI6cmV0dXJuIGErMTtjYXNlXCJNTVwiOnJldHVybiBPLnMoYSsxLDIsXCIwXCIpO2Nhc2VcIk1NTVwiOnJldHVybiBoKG4ubW9udGhzU2hvcnQsYSxjLDMpO2Nhc2VcIk1NTU1cIjpyZXR1cm4gaChjLGEpO2Nhc2VcIkRcIjpyZXR1cm4gZS4kRDtjYXNlXCJERFwiOnJldHVybiBPLnMoZS4kRCwyLFwiMFwiKTtjYXNlXCJkXCI6cmV0dXJuIFN0cmluZyhlLiRXKTtjYXNlXCJkZFwiOnJldHVybiBoKG4ud2Vla2RheXNNaW4sZS4kVyxvLDIpO2Nhc2VcImRkZFwiOnJldHVybiBoKG4ud2Vla2RheXNTaG9ydCxlLiRXLG8sMyk7Y2FzZVwiZGRkZFwiOnJldHVybiBvW2UuJFddO2Nhc2VcIkhcIjpyZXR1cm4gU3RyaW5nKHMpO2Nhc2VcIkhIXCI6cmV0dXJuIE8ucyhzLDIsXCIwXCIpO2Nhc2VcImhcIjpyZXR1cm4gZCgxKTtjYXNlXCJoaFwiOnJldHVybiBkKDIpO2Nhc2VcImFcIjpyZXR1cm4gJChzLHUsITApO2Nhc2VcIkFcIjpyZXR1cm4gJChzLHUsITEpO2Nhc2VcIm1cIjpyZXR1cm4gU3RyaW5nKHUpO2Nhc2VcIm1tXCI6cmV0dXJuIE8ucyh1LDIsXCIwXCIpO2Nhc2VcInNcIjpyZXR1cm4gU3RyaW5nKGUuJHMpO2Nhc2VcInNzXCI6cmV0dXJuIE8ucyhlLiRzLDIsXCIwXCIpO2Nhc2VcIlNTU1wiOnJldHVybiBPLnMoZS4kbXMsMyxcIjBcIik7Y2FzZVwiWlwiOnJldHVybiBpfXJldHVybiBudWxsfSh0KXx8aS5yZXBsYWNlKFwiOlwiLFwiXCIpfSkpfSxtLnV0Y09mZnNldD1mdW5jdGlvbigpe3JldHVybiAxNSotTWF0aC5yb3VuZCh0aGlzLiRkLmdldFRpbWV6b25lT2Zmc2V0KCkvMTUpfSxtLmRpZmY9ZnVuY3Rpb24ocixkLGwpe3ZhciAkLHk9dGhpcyxNPU8ucChkKSxtPXcociksdj0obS51dGNPZmZzZXQoKS10aGlzLnV0Y09mZnNldCgpKSplLGc9dGhpcy1tLEQ9ZnVuY3Rpb24oKXtyZXR1cm4gTy5tKHksbSl9O3N3aXRjaChNKXtjYXNlIGg6JD1EKCkvMTI7YnJlYWs7Y2FzZSBjOiQ9RCgpO2JyZWFrO2Nhc2UgZjokPUQoKS8zO2JyZWFrO2Nhc2UgbzokPShnLXYpLzYwNDhlNTticmVhaztjYXNlIGE6JD0oZy12KS84NjRlNTticmVhaztjYXNlIHU6JD1nL247YnJlYWs7Y2FzZSBzOiQ9Zy9lO2JyZWFrO2Nhc2UgaTokPWcvdDticmVhaztkZWZhdWx0OiQ9Z31yZXR1cm4gbD8kOk8uYSgkKX0sbS5kYXlzSW5Nb250aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVuZE9mKGMpLiREfSxtLiRsb2NhbGU9ZnVuY3Rpb24oKXtyZXR1cm4gRFt0aGlzLiRMXX0sbS5sb2NhbGU9ZnVuY3Rpb24odCxlKXtpZighdClyZXR1cm4gdGhpcy4kTDt2YXIgbj10aGlzLmNsb25lKCkscj1TKHQsZSwhMCk7cmV0dXJuIHImJihuLiRMPXIpLG59LG0uY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gTy53KHRoaXMuJGQsdGhpcyl9LG0udG9EYXRlPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKX0sbS50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pc1ZhbGlkKCk/dGhpcy50b0lTT1N0cmluZygpOm51bGx9LG0udG9JU09TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b0lTT1N0cmluZygpfSxtLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9VVENTdHJpbmcoKX0sTX0oKSxfPWIucHJvdG90eXBlO3JldHVybiB3LnByb3RvdHlwZT1fLFtbXCIkbXNcIixyXSxbXCIkc1wiLGldLFtcIiRtXCIsc10sW1wiJEhcIix1XSxbXCIkV1wiLGFdLFtcIiRNXCIsY10sW1wiJHlcIixoXSxbXCIkRFwiLGRdXS5mb3JFYWNoKChmdW5jdGlvbih0KXtfW3RbMV1dPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLiRnKGUsdFswXSx0WzFdKX19KSksdy5leHRlbmQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC4kaXx8KHQoZSxiLHcpLHQuJGk9ITApLHd9LHcubG9jYWxlPVMsdy5pc0RheWpzPXAsdy51bml4PWZ1bmN0aW9uKHQpe3JldHVybiB3KDFlMyp0KX0sdy5lbj1EW2ddLHcuTHM9RCx3LnA9e30sd30pKTsiLCJpbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZVN0YXRlKHRpbWUpIHtcclxuICBjb25zdCBub3cgPSBkYXlqcygpO1xyXG4gIGNvbnN0IGRhdGUgPSBkYXlqcyh0aW1lKTtcclxuICBjb25zdCBpc1NhbWVEYXkgPSBub3cuaXNTYW1lKGRhdGUsIFwiZGF5XCIpO1xyXG5cclxuICBpZiAoaXNTYW1lRGF5KSB7XHJcbiAgICBsZXQgaG91cnMgPSBkYXRlLmhvdXIoKTtcclxuICAgIGlmIChob3VycyA+PSA2ICYmIGhvdXJzIDw9IDEwKSByZXR1cm4gYOaXqeS4iiR7ZGF0ZS5mb3JtYXQoXCJISDptbVwiKX1gO1xyXG4gICAgaWYgKGhvdXJzID49IDEwICYmIGhvdXJzIDw9IDE0KSByZXR1cm4gYOS4reWNiCR7ZGF0ZS5mb3JtYXQoXCJISDptbVwiKX1gO1xyXG4gICAgaWYgKGhvdXJzID49IDE0ICYmIGhvdXJzIDw9IDE4KSByZXR1cm4gYOS4i+WNiCR7ZGF0ZS5mb3JtYXQoXCJISDptbVwiKX1gO1xyXG4gICAgaWYgKGhvdXJzID49IDE4ICYmIGhvdXJzIDw9IDI0KSByZXR1cm4gYOaZmuS4iiR7ZGF0ZS5mb3JtYXQoXCJISDptbVwiKX1gO1xyXG4gICAgaWYgKGhvdXJzID49IDAgJiYgaG91cnMgPD0gNikgcmV0dXJuIGDlh4zmmagke2RhdGUuZm9ybWF0KFwiSEg6bW1cIil9YDtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGRhdGUuZm9ybWF0KFwiWVlZWS9NTS9ERFwiKTtcclxuICB9XHJcbn1cclxuIiwiPHRlbXBsYXRlPlxuXHQ8dmlldyBjbGFzcz1cIm1haW5cIj5cblx0XHQ8dmlldyBjbGFzcz1cIm1lc3NhZ2VzXCI+XG5cdFx0XHQ8dmlldyBjbGFzcz1cIm1lc3NhZ2VzLWxpc3RcIiA+XG5cdFx0XHRcdDwhLS0g5aW95Y+L55Sz6K+3IC0tPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lc3NhZ2VzLWxpc3QtaXRlbVwiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGVmdFwiPlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ1bnJlYWRcIiB2LWlmPVwibmV3RnJpZW5kcy51bnJlYWRcIj57eyBuZXdGcmllbmRzLnVucmVhZCAgPiA5OSA/ICc5OSsnIDogbmV3RnJpZW5kcy51bnJlYWQgfX08L3RleHQ+XG5cdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIm5ld0ZyaWVuZHMuYXZhdGFyXCI+PC9pbWFnZT5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyaWdodFwiPlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJuYW1lXCI+e3sgbmV3RnJpZW5kcy5uYW1lIH19PC90ZXh0PlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJkZXNjXCI+e3sgbmV3RnJpZW5kcy5uZXdzIH19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8IS0tIOa2iOaBr+WIl+ihqCAtLT5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZXNzYWdlcy1saXN0LWl0ZW1cIiB2LWZvcj1cIm1lc3NhZ2UgaW4gbWVzc2FnZUxpc3RcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxlZnRcIj5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidW5yZWFkXCIgdi1pZj1cIm1lc3NhZ2UudW5yZWFkXCI+e3sgbWVzc2FnZS51bnJlYWQgPjk5ID8gJzk5KycgOiBtZXNzYWdlLnVucmVhZCB9fTwvdGV4dD5cblx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwibWVzc2FnZS5hdmF0YXJcIj48L2ltYWdlPlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJpZ2h0XCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm5hbWVcIj57eyBtZXNzYWdlLm5hbWUgfX08L3RleHQ+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImRlc2NcIj57eyBtZXNzYWdlLm5ld3MgfX08L3RleHQ+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpbWVcIj57eyBnZXRUaW1lKG1lc3NhZ2UudGltZSkgfX08L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC92aWV3PlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHtnZXRJbmRleE1lc3NhZ2VzfSBmcm9tICcuLi8uLi9jb21tb24vanMvaW5kZXgtbWVzc2FnZXMuanMnO1xuaW1wb3J0IHtnZXRUaW1lU3RhdGV9IGZyb20gJy4uLy4uL2NvbW1vbi91dGlscy90cmFuc2Zvcm0tdGltZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ2luZGV4LW1lc3NhZ2UtbGlzdCcsXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5ld0ZyaWVuZHM6IHt9LFxuXHRcdFx0bWVzc2FnZUxpc3Q6IFtdXG5cdFx0fTtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGdldE1lc3NhZ2VzOiBmdW5jdGlvbigpIHtcblx0XHRcdGNvbnN0IHJlcyA9IGdldEluZGV4TWVzc2FnZXMoKTtcblx0XHRcdHRoaXMubmV3RnJpZW5kcyA9IHJlcy5uZXdGcmllbmRzO1xuXHRcdFx0dGhpcy5tZXNzYWdlTGlzdCA9IHJlcy5tZXNzYWdlTGlzdDtcblx0XHR9LFxuXHRcdGdldFRpbWU6IGZ1bmN0aW9uICh0aW1lKXtcblx0XHRcdHJldHVybiBnZXRUaW1lU3RhdGUodGltZSlcblx0XHR9XG5cdH0sXG5cdC8vIOazqOaEj++8mue7hOS7tueUn+WRveWRqOacn+WSjOmhtemdoueUn+WRveWRqOacn+S4jeS4gOagt1xuXHRtb3VudGVkKCkge1xuXHRcdHRoaXMuZ2V0TWVzc2FnZXMoKTtcblx0fSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLm1haW4ge1xuXHR3aWR0aDoxMDAlO1xuXHRtYXJnaW4tdG9wOiAxMDhycHg7XG5cdHBhZGRpbmc6IHZhcigtLXN0YXR1cy1iYXItaGVpZ2h0KSAkdW5pLXNwYWNpbmctcm93LWJhc2UgMCAkdW5pLXNwYWNpbmctcm93LWJhc2U7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ubWVzc2FnZXMtbGlzdCB7XG5cdHdpZHRoOiAxMDAlO1xuXHQubWVzc2FnZXMtbGlzdC1pdGVtIHtcblx0XHR3aWR0aDoxMDAlO1xuXHRcdGhlaWdodDoxMjhycHg7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHQubGVmdHtcblx0XHRcdG1hcmdpbi1yaWdodDokdW5pLXNwYWNpbmctcm93LWJhc2U7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRoZWlnaHQ6IDk2cnB4O1xuXHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIxN2RlZywgcmdiYSgyMjA1LDE4OSw5MiwuOCksIHJnYmEoMjU1LDAsMCwwKSA3MC43MSUpLGxpbmVhci1ncmFkaWVudCgyN2RlZywgcmdiYSgxMTMsMTY4LDEyMywuOCksIHJnYmEoMCwyNTUsMCwwKSA3MC43MSUpLGxpbmVhci1ncmFkaWVudCgxMzZkZWcsIHJnYmEoMTYwLDE4NSwxMTAsLjgpLCByZ2JhKDAsMCwyNTUsMCkgNzAuNzElKTtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcnB4O1xuXHRcdFx0aW1hZ2Uge1xuXHRcdFx0XHR3aWR0aDogOTZycHg7XG5cdFx0XHRcdGhlaWdodDo5NnJweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTBycHg7XG5cdFx0XHR9XG5cdFx0XHQudW5yZWFke1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkdW5pLWNvbG9yLXdhcm5pbmc7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDE4cnB4O1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHJpZ2h0Oi0xNXJweDtcblx0XHRcdFx0dG9wOi0xMnJweDtcblx0XHRcdFx0ei1pbmRleDogMjtcblx0XHRcdFx0Zm9udC1zaXplOiAkdW5pLWZvbnQtc2l6ZS1zbTtcblx0XHRcdFx0Y29sb3I6JHVuaS10ZXh0LWNvbG9yLWludmVyc2U7XG5cdFx0XHRcdHBhZGRpbmc6IDBycHggOHJweDtcblx0XHRcdFx0bWluLXdpZHRoOiAzNnJweDtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRoZWlnaHQ6IDM2cnB4O1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMzZycHg7XG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5yaWdodHtcblx0XHRcdGZsZXg6MTtcblx0XHRcdG1hcmdpbi1yaWdodDoyMHJweDtcblx0XHRcdC5uYW1lIHtcblx0XHRcdFx0Zm9udC1zaXplOiAkdW5pLWZvbnQtc2l6ZS1sZztcblx0XHRcdFx0cGFkZGluZy1yaWdodDozMHJweDtcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0Y29sb3I6ICR1bmktdGV4dC1jb2xvcjtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDUwcnB4O1xuXHRcdFx0XHRcblx0XHRcdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XG5cdFx0XHRcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG5cdFx0XHRcdC13ZWJraXQtbGluZS1jbGFtcDogMTtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdH1cblx0XHRcdC5kZXNjIHtcblx0XHRcdFx0Zm9udC1zaXplOiAkdW5pLWZvbnQtc2l6ZS1iYXNlO1xuXHRcdFx0XHRsaW5lLWhlaWdodDo0MHJweDtcblx0XHRcdFx0aGVpZ2h0OjQwcnB4O1xuXHRcdFx0XHRjb2xvcjokdW5pLXRleHQtY29sb3ItZ3JleTtcblx0XHRcdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XG5cdFx0XHRcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG5cdFx0XHRcdC13ZWJraXQtbGluZS1jbGFtcDogMTtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdH1cblx0XHRcdC50aW1le1xuXHRcdFx0XHRtaW4td2lkdGg6IDE0MHJweDtcblx0XHRcdFx0Zm9udC1zaXplOiAkdW5pLWZvbnQtc2l6ZS1zbTtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRyaWdodDogMHJweDtcblx0XHRcdFx0Ym90dG9tOjcwcnB4O1xuXHRcdFx0XHRjb2xvcjogJHVuaS10ZXh0LWNvbG9yLWRpc2FibGU7XG5cdFx0XHRcdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0fVxufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJpbmRleC1jb250ZW50XCI+XG5cdFx0PGluZGV4LXRvcGJhcj48L2luZGV4LXRvcGJhcj5cblx0XHQ8aW5kZXgtbWVzc2FnZS1saXN0PjwvaW5kZXgtbWVzc2FnZS1saXN0PlxuXHQ8L3ZpZXc+XG5cdFxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLmluZGV4LWNvbnRlbnQge1xuXHRwYWRkaW5nLWJvdHRvbTogJHVuaS1zcGFjaW5nLWNvbC1iYXNlO1xuXHRoZWlnaHQ6IDEwMCU7XG59XG48L3N0eWxlPiIsImltcG9ydCAqIGFzIFZ1ZSBmcm9tICd2dWUnXG5cbnZhciBpc1Z1ZTIgPSBmYWxzZVxudmFyIGlzVnVlMyA9IHRydWVcbnZhciBWdWUyID0gdW5kZWZpbmVkXG5cbmZ1bmN0aW9uIGluc3RhbGwoKSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0KHRhcmdldCwga2V5LCB2YWwpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSkge1xuICAgIHRhcmdldC5sZW5ndGggPSBNYXRoLm1heCh0YXJnZXQubGVuZ3RoLCBrZXkpXG4gICAgdGFyZ2V0LnNwbGljZShrZXksIDEsIHZhbClcbiAgICByZXR1cm4gdmFsXG4gIH1cbiAgdGFyZ2V0W2tleV0gPSB2YWxcbiAgcmV0dXJuIHZhbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsKHRhcmdldCwga2V5KSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkpIHtcbiAgICB0YXJnZXQuc3BsaWNlKGtleSwgMSlcbiAgICByZXR1cm5cbiAgfVxuICBkZWxldGUgdGFyZ2V0W2tleV1cbn1cblxuZXhwb3J0ICogZnJvbSAndnVlJ1xuZXhwb3J0IHtcbiAgVnVlLFxuICBWdWUyLFxuICBpc1Z1ZTIsXG4gIGlzVnVlMyxcbiAgaW5zdGFsbCxcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXREZXZ0b29sc0dsb2JhbEhvb2soKSB7XG4gICAgcmV0dXJuIGdldFRhcmdldCgpLl9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX187XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICA/IHdpbmRvd1xuICAgICAgICA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IGdsb2JhbFxuICAgICAgICAgICAgOiB7fTtcbn1cbmV4cG9ydCBjb25zdCBpc1Byb3h5QXZhaWxhYmxlID0gdHlwZW9mIFByb3h5ID09PSAnZnVuY3Rpb24nO1xuIiwiZXhwb3J0IGNvbnN0IEhPT0tfU0VUVVAgPSAnZGV2dG9vbHMtcGx1Z2luOnNldHVwJztcbmV4cG9ydCBjb25zdCBIT09LX1BMVUdJTl9TRVRUSU5HU19TRVQgPSAncGx1Z2luOnNldHRpbmdzOnNldCc7XG4iLCJsZXQgc3VwcG9ydGVkO1xubGV0IHBlcmY7XG5leHBvcnQgZnVuY3Rpb24gaXNQZXJmb3JtYW5jZVN1cHBvcnRlZCgpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKHN1cHBvcnRlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBzdXBwb3J0ZWQ7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucGVyZm9ybWFuY2UpIHtcbiAgICAgICAgc3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgcGVyZiA9IHdpbmRvdy5wZXJmb3JtYW5jZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgKChfYSA9IGdsb2JhbC5wZXJmX2hvb2tzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGVyZm9ybWFuY2UpKSB7XG4gICAgICAgIHN1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgIHBlcmYgPSBnbG9iYWwucGVyZl9ob29rcy5wZXJmb3JtYW5jZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN1cHBvcnRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gc3VwcG9ydGVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG5vdygpIHtcbiAgICByZXR1cm4gaXNQZXJmb3JtYW5jZVN1cHBvcnRlZCgpID8gcGVyZi5ub3coKSA6IERhdGUubm93KCk7XG59XG4iLCJpbXBvcnQgeyBIT09LX1BMVUdJTl9TRVRUSU5HU19TRVQgfSBmcm9tICcuL2NvbnN0LmpzJztcbmltcG9ydCB7IG5vdyB9IGZyb20gJy4vdGltZS5qcyc7XG5leHBvcnQgY2xhc3MgQXBpUHJveHkge1xuICAgIGNvbnN0cnVjdG9yKHBsdWdpbiwgaG9vaykge1xuICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XG4gICAgICAgIHRoaXMudGFyZ2V0UXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5vblF1ZXVlID0gW107XG4gICAgICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgICAgICB0aGlzLmhvb2sgPSBob29rO1xuICAgICAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSB7fTtcbiAgICAgICAgaWYgKHBsdWdpbi5zZXR0aW5ncykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpZCBpbiBwbHVnaW4uc2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gcGx1Z2luLnNldHRpbmdzW2lkXTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0U2V0dGluZ3NbaWRdID0gaXRlbS5kZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbG9jYWxTZXR0aW5nc1NhdmVJZCA9IGBfX3Z1ZS1kZXZ0b29scy1wbHVnaW4tc2V0dGluZ3NfXyR7cGx1Z2luLmlkfWA7XG4gICAgICAgIGxldCBjdXJyZW50U2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0U2V0dGluZ3MpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmF3ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTZXR0aW5nc1NhdmVJZCk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyYXcpO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjdXJyZW50U2V0dGluZ3MsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBub29wXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mYWxsYmFja3MgPSB7XG4gICAgICAgICAgICBnZXRTZXR0aW5ncygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFNldHRpbmdzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldFNldHRpbmdzKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYWxTZXR0aW5nc1NhdmVJZCwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbm9vcFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50U2V0dGluZ3MgPSB2YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub3coKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vdygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGhvb2spIHtcbiAgICAgICAgICAgIGhvb2sub24oSE9PS19QTFVHSU5fU0VUVElOR1NfU0VULCAocGx1Z2luSWQsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBsdWdpbklkID09PSB0aGlzLnBsdWdpbi5pZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZhbGxiYWNrcy5zZXRTZXR0aW5ncyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm94aWVkT24gPSBuZXcgUHJveHkoe30sIHtcbiAgICAgICAgICAgIGdldDogKF90YXJnZXQsIHByb3ApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0Lm9uW3Byb3BdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBwcm9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcm94aWVkVGFyZ2V0ID0gbmV3IFByb3h5KHt9LCB7XG4gICAgICAgICAgICBnZXQ6IChfdGFyZ2V0LCBwcm9wKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvcCA9PT0gJ29uJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm94aWVkT247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKE9iamVjdC5rZXlzKHRoaXMuZmFsbGJhY2tzKS5pbmNsdWRlcyhwcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0UXVldWUucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBwcm9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZTogKCkgPT4geyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mYWxsYmFja3NbcHJvcF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFF1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHByb3AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgc2V0UmVhbFRhcmdldCh0YXJnZXQpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLm9uUXVldWUpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0Lm9uW2l0ZW0ubWV0aG9kXSguLi5pdGVtLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLnRhcmdldFF1ZXVlKSB7XG4gICAgICAgICAgICBpdGVtLnJlc29sdmUoYXdhaXQgdGhpcy50YXJnZXRbaXRlbS5tZXRob2RdKC4uLml0ZW0uYXJncykpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0VGFyZ2V0LCBnZXREZXZ0b29sc0dsb2JhbEhvb2ssIGlzUHJveHlBdmFpbGFibGUgfSBmcm9tICcuL2Vudi5qcyc7XG5pbXBvcnQgeyBIT09LX1NFVFVQIH0gZnJvbSAnLi9jb25zdC5qcyc7XG5pbXBvcnQgeyBBcGlQcm94eSB9IGZyb20gJy4vcHJveHkuanMnO1xuZXhwb3J0ICogZnJvbSAnLi9hcGkvaW5kZXguanMnO1xuZXhwb3J0ICogZnJvbSAnLi9wbHVnaW4uanMnO1xuZXhwb3J0ICogZnJvbSAnLi90aW1lLmpzJztcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cERldnRvb2xzUGx1Z2luKHBsdWdpbkRlc2NyaXB0b3IsIHNldHVwRm4pIHtcbiAgICBjb25zdCBkZXNjcmlwdG9yID0gcGx1Z2luRGVzY3JpcHRvcjtcbiAgICBjb25zdCB0YXJnZXQgPSBnZXRUYXJnZXQoKTtcbiAgICBjb25zdCBob29rID0gZ2V0RGV2dG9vbHNHbG9iYWxIb29rKCk7XG4gICAgY29uc3QgZW5hYmxlUHJveHkgPSBpc1Byb3h5QXZhaWxhYmxlICYmIGRlc2NyaXB0b3IuZW5hYmxlRWFybHlQcm94eTtcbiAgICBpZiAoaG9vayAmJiAodGFyZ2V0Ll9fVlVFX0RFVlRPT0xTX1BMVUdJTl9BUElfQVZBSUxBQkxFX18gfHwgIWVuYWJsZVByb3h5KSkge1xuICAgICAgICBob29rLmVtaXQoSE9PS19TRVRVUCwgcGx1Z2luRGVzY3JpcHRvciwgc2V0dXBGbik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBwcm94eSA9IGVuYWJsZVByb3h5ID8gbmV3IEFwaVByb3h5KGRlc2NyaXB0b3IsIGhvb2spIDogbnVsbDtcbiAgICAgICAgY29uc3QgbGlzdCA9IHRhcmdldC5fX1ZVRV9ERVZUT09MU19QTFVHSU5TX18gPSB0YXJnZXQuX19WVUVfREVWVE9PTFNfUExVR0lOU19fIHx8IFtdO1xuICAgICAgICBsaXN0LnB1c2goe1xuICAgICAgICAgICAgcGx1Z2luRGVzY3JpcHRvcjogZGVzY3JpcHRvcixcbiAgICAgICAgICAgIHNldHVwRm4sXG4gICAgICAgICAgICBwcm94eSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChwcm94eSlcbiAgICAgICAgICAgIHNldHVwRm4ocHJveHkucHJveGllZFRhcmdldCk7XG4gICAgfVxufVxuIiwiLyohXG4gICogcGluaWEgdjIuMC4zM1xuICAqIChjKSAyMDIzIEVkdWFyZG8gU2FuIE1hcnRpbiBNb3JvdGVcbiAgKiBAbGljZW5zZSBNSVRcbiAgKi9cbmltcG9ydCB7IGdldEN1cnJlbnRJbnN0YW5jZSwgaW5qZWN0LCB0b1Jhdywgd2F0Y2gsIHVucmVmLCBtYXJrUmF3LCBlZmZlY3RTY29wZSwgcmVmLCBpc1Z1ZTIsIGlzUmVmLCBpc1JlYWN0aXZlLCBzZXQsIGdldEN1cnJlbnRTY29wZSwgb25TY29wZURpc3Bvc2UsIHJlYWN0aXZlLCB0b1JlZiwgZGVsLCBuZXh0VGljaywgY29tcHV0ZWQsIHRvUmVmcyB9IGZyb20gJ3Z1ZS1kZW1pJztcbmltcG9ydCB7IHNldHVwRGV2dG9vbHNQbHVnaW4gfSBmcm9tICdAdnVlL2RldnRvb2xzLWFwaSc7XG5cbi8qKlxyXG4gKiBzZXRBY3RpdmVQaW5pYSBtdXN0IGJlIGNhbGxlZCB0byBoYW5kbGUgU1NSIGF0IHRoZSB0b3Agb2YgZnVuY3Rpb25zIGxpa2VcclxuICogYGZldGNoYCwgYHNldHVwYCwgYHNlcnZlclByZWZldGNoYCBhbmQgb3RoZXJzXHJcbiAqL1xyXG5sZXQgYWN0aXZlUGluaWE7XHJcbi8qKlxyXG4gKiBTZXRzIG9yIHVuc2V0cyB0aGUgYWN0aXZlIHBpbmlhLiBVc2VkIGluIFNTUiBhbmQgaW50ZXJuYWxseSB3aGVuIGNhbGxpbmdcclxuICogYWN0aW9ucyBhbmQgZ2V0dGVyc1xyXG4gKlxyXG4gKiBAcGFyYW0gcGluaWEgLSBQaW5pYSBpbnN0YW5jZVxyXG4gKi9cclxuY29uc3Qgc2V0QWN0aXZlUGluaWEgPSAocGluaWEpID0+IChhY3RpdmVQaW5pYSA9IHBpbmlhKTtcclxuLyoqXHJcbiAqIEdldCB0aGUgY3VycmVudGx5IGFjdGl2ZSBwaW5pYSBpZiB0aGVyZSBpcyBhbnkuXHJcbiAqL1xyXG5jb25zdCBnZXRBY3RpdmVQaW5pYSA9ICgpID0+IChnZXRDdXJyZW50SW5zdGFuY2UoKSAmJiBpbmplY3QocGluaWFTeW1ib2wpKSB8fCBhY3RpdmVQaW5pYTtcclxuY29uc3QgcGluaWFTeW1ib2wgPSAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpID8gU3ltYm9sKCdwaW5pYScpIDogLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gU3ltYm9sKCkpO1xuXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KFxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG5vKSB7XHJcbiAgICByZXR1cm4gKG8gJiZcclxuICAgICAgICB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiZcclxuICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykgPT09ICdbb2JqZWN0IE9iamVjdF0nICYmXHJcbiAgICAgICAgdHlwZW9mIG8udG9KU09OICE9PSAnZnVuY3Rpb24nKTtcclxufVxyXG4vLyB0eXBlIERlZXBSZWFkb25seTxUPiA9IHsgcmVhZG9ubHkgW1AgaW4ga2V5b2YgVF06IERlZXBSZWFkb25seTxUW1BdPiB9XHJcbi8vIFRPRE86IGNhbiB3ZSBjaGFuZ2UgdGhlc2UgdG8gbnVtYmVycz9cclxuLyoqXHJcbiAqIFBvc3NpYmxlIHR5cGVzIGZvciBTdWJzY3JpcHRpb25DYWxsYmFja1xyXG4gKi9cclxudmFyIE11dGF0aW9uVHlwZTtcclxuKGZ1bmN0aW9uIChNdXRhdGlvblR5cGUpIHtcclxuICAgIC8qKlxyXG4gICAgICogRGlyZWN0IG11dGF0aW9uIG9mIHRoZSBzdGF0ZTpcclxuICAgICAqXHJcbiAgICAgKiAtIGBzdG9yZS5uYW1lID0gJ25ldyBuYW1lJ2BcclxuICAgICAqIC0gYHN0b3JlLiRzdGF0ZS5uYW1lID0gJ25ldyBuYW1lJ2BcclxuICAgICAqIC0gYHN0b3JlLmxpc3QucHVzaCgnbmV3IGl0ZW0nKWBcclxuICAgICAqL1xyXG4gICAgTXV0YXRpb25UeXBlW1wiZGlyZWN0XCJdID0gXCJkaXJlY3RcIjtcclxuICAgIC8qKlxyXG4gICAgICogTXV0YXRlZCB0aGUgc3RhdGUgd2l0aCBgJHBhdGNoYCBhbmQgYW4gb2JqZWN0XHJcbiAgICAgKlxyXG4gICAgICogLSBgc3RvcmUuJHBhdGNoKHsgbmFtZTogJ25ld05hbWUnIH0pYFxyXG4gICAgICovXHJcbiAgICBNdXRhdGlvblR5cGVbXCJwYXRjaE9iamVjdFwiXSA9IFwicGF0Y2ggb2JqZWN0XCI7XHJcbiAgICAvKipcclxuICAgICAqIE11dGF0ZWQgdGhlIHN0YXRlIHdpdGggYCRwYXRjaGAgYW5kIGEgZnVuY3Rpb25cclxuICAgICAqXHJcbiAgICAgKiAtIGBzdG9yZS4kcGF0Y2goc3RhdGUgPT4gc3RhdGUubmFtZSA9ICduZXdOYW1lJylgXHJcbiAgICAgKi9cclxuICAgIE11dGF0aW9uVHlwZVtcInBhdGNoRnVuY3Rpb25cIl0gPSBcInBhdGNoIGZ1bmN0aW9uXCI7XHJcbiAgICAvLyBtYXliZSByZXNldD8gZm9yICRzdGF0ZSA9IHt9IGFuZCAkcmVzZXRcclxufSkoTXV0YXRpb25UeXBlIHx8IChNdXRhdGlvblR5cGUgPSB7fSkpO1xuXG5jb25zdCBJU19DTElFTlQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcclxuLyoqXHJcbiAqIFNob3VsZCB3ZSBhZGQgdGhlIGRldnRvb2xzIHBsdWdpbnMuXHJcbiAqIC0gb25seSBpZiBkZXYgbW9kZSBvciBmb3JjZWQgdGhyb3VnaCB0aGUgcHJvZCBkZXZ0b29scyBmbGFnXHJcbiAqIC0gbm90IGluIHRlc3RcclxuICogLSBvbmx5IGlmIHdpbmRvdyBleGlzdHMgKGNvdWxkIGNoYW5nZSBpbiB0aGUgZnV0dXJlKVxyXG4gKi9cclxuY29uc3QgVVNFX0RFVlRPT0xTID0gKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB8fCAodHlwZW9mIF9fVlVFX1BST0RfREVWVE9PTFNfXyAhPT0gJ3VuZGVmaW5lZCcgJiYgX19WVUVfUFJPRF9ERVZUT09MU19fKSkgJiYgIShwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnKSAmJiBJU19DTElFTlQ7XG5cbi8qXHJcbiAqIEZpbGVTYXZlci5qcyBBIHNhdmVBcygpIEZpbGVTYXZlciBpbXBsZW1lbnRhdGlvbi5cclxuICpcclxuICogT3JpZ2luYWxseSBieSBFbGkgR3JleSwgYWRhcHRlZCBhcyBhbiBFU00gbW9kdWxlIGJ5IEVkdWFyZG8gU2FuIE1hcnRpblxyXG4gKiBNb3JvdGUuXHJcbiAqXHJcbiAqIExpY2Vuc2UgOiBNSVRcclxuICovXHJcbi8vIFRoZSBvbmUgYW5kIG9ubHkgd2F5IG9mIGdldHRpbmcgZ2xvYmFsIHNjb3BlIGluIGFsbCBlbnZpcm9ubWVudHNcclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzMyNzcxODIvMTAwODk5OVxyXG5jb25zdCBfZ2xvYmFsID0gLyojX19QVVJFX18qLyAoKCkgPT4gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93LndpbmRvdyA9PT0gd2luZG93XHJcbiAgICA/IHdpbmRvd1xyXG4gICAgOiB0eXBlb2Ygc2VsZiA9PT0gJ29iamVjdCcgJiYgc2VsZi5zZWxmID09PSBzZWxmXHJcbiAgICAgICAgPyBzZWxmXHJcbiAgICAgICAgOiB0eXBlb2YgZ2xvYmFsID09PSAnb2JqZWN0JyAmJiBnbG9iYWwuZ2xvYmFsID09PSBnbG9iYWxcclxuICAgICAgICAgICAgPyBnbG9iYWxcclxuICAgICAgICAgICAgOiB0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCdcclxuICAgICAgICAgICAgICAgID8gZ2xvYmFsVGhpc1xyXG4gICAgICAgICAgICAgICAgOiB7IEhUTUxFbGVtZW50OiBudWxsIH0pKCk7XHJcbmZ1bmN0aW9uIGJvbShibG9iLCB7IGF1dG9Cb20gPSBmYWxzZSB9ID0ge30pIHtcclxuICAgIC8vIHByZXBlbmQgQk9NIGZvciBVVEYtOCBYTUwgYW5kIHRleHQvKiB0eXBlcyAoaW5jbHVkaW5nIEhUTUwpXHJcbiAgICAvLyBub3RlOiB5b3VyIGJyb3dzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IGNvbnZlcnQgVVRGLTE2IFUrRkVGRiB0byBFRiBCQiBCRlxyXG4gICAgaWYgKGF1dG9Cb20gJiZcclxuICAgICAgICAvXlxccyooPzp0ZXh0XFwvXFxTKnxhcHBsaWNhdGlvblxcL3htbHxcXFMqXFwvXFxTKlxcK3htbClcXHMqOy4qY2hhcnNldFxccyo9XFxzKnV0Zi04L2kudGVzdChibG9iLnR5cGUpKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCbG9iKFtTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZmVmZiksIGJsb2JdLCB7IHR5cGU6IGJsb2IudHlwZSB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBibG9iO1xyXG59XHJcbmZ1bmN0aW9uIGRvd25sb2FkKHVybCwgbmFtZSwgb3B0cykge1xyXG4gICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub3BlbignR0VUJywgdXJsKTtcclxuICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XHJcbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNhdmVBcyh4aHIucmVzcG9uc2UsIG5hbWUsIG9wdHMpO1xyXG4gICAgfTtcclxuICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NvdWxkIG5vdCBkb3dubG9hZCBmaWxlJyk7XHJcbiAgICB9O1xyXG4gICAgeGhyLnNlbmQoKTtcclxufVxyXG5mdW5jdGlvbiBjb3JzRW5hYmxlZCh1cmwpIHtcclxuICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgLy8gdXNlIHN5bmMgdG8gYXZvaWQgcG9wdXAgYmxvY2tlclxyXG4gICAgeGhyLm9wZW4oJ0hFQUQnLCB1cmwsIGZhbHNlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7IH1cclxuICAgIHJldHVybiB4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDw9IDI5OTtcclxufVxyXG4vLyBgYS5jbGljaygpYCBkb2Vzbid0IHdvcmsgZm9yIGFsbCBicm93c2VycyAoIzQ2NSlcclxuZnVuY3Rpb24gY2xpY2sobm9kZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBub2RlLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoJ2NsaWNrJykpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zdCBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnTW91c2VFdmVudHMnKTtcclxuICAgICAgICBldnQuaW5pdE1vdXNlRXZlbnQoJ2NsaWNrJywgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAwLCAwLCAwLCA4MCwgMjAsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAwLCBudWxsKTtcclxuICAgICAgICBub2RlLmRpc3BhdGNoRXZlbnQoZXZ0KTtcclxuICAgIH1cclxufVxyXG5jb25zdCBfbmF2aWdhdG9yID0gXHJcbiB0eXBlb2YgbmF2aWdhdG9yID09PSAnb2JqZWN0JyA/IG5hdmlnYXRvciA6IHsgdXNlckFnZW50OiAnJyB9O1xyXG4vLyBEZXRlY3QgV2ViVmlldyBpbnNpZGUgYSBuYXRpdmUgbWFjT1MgYXBwIGJ5IHJ1bGluZyBvdXQgYWxsIGJyb3dzZXJzXHJcbi8vIFdlIGp1c3QgbmVlZCB0byBjaGVjayBmb3IgJ1NhZmFyaScgYmVjYXVzZSBhbGwgb3RoZXIgYnJvd3NlcnMgKGJlc2lkZXMgRmlyZWZveCkgaW5jbHVkZSB0aGF0IHRvb1xyXG4vLyBodHRwczovL3d3dy53aGF0aXNteWJyb3dzZXIuY29tL2d1aWRlcy90aGUtbGF0ZXN0LXVzZXItYWdlbnQvbWFjb3NcclxuY29uc3QgaXNNYWNPU1dlYlZpZXcgPSAvKiNfX1BVUkVfXyovICgoKSA9PiAvTWFjaW50b3NoLy50ZXN0KF9uYXZpZ2F0b3IudXNlckFnZW50KSAmJlxyXG4gICAgL0FwcGxlV2ViS2l0Ly50ZXN0KF9uYXZpZ2F0b3IudXNlckFnZW50KSAmJlxyXG4gICAgIS9TYWZhcmkvLnRlc3QoX25hdmlnYXRvci51c2VyQWdlbnQpKSgpO1xyXG5jb25zdCBzYXZlQXMgPSAhSVNfQ0xJRU5UXHJcbiAgICA/ICgpID0+IHsgfSAvLyBub29wXHJcbiAgICA6IC8vIFVzZSBkb3dubG9hZCBhdHRyaWJ1dGUgZmlyc3QgaWYgcG9zc2libGUgKCMxOTMgTHVtaWEgbW9iaWxlKSB1bmxlc3MgdGhpcyBpcyBhIG1hY09TIFdlYlZpZXcgb3IgbWluaSBwcm9ncmFtXHJcbiAgICAgICAgdHlwZW9mIEhUTUxBbmNob3JFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgICAgICAgICAnZG93bmxvYWQnIGluIEhUTUxBbmNob3JFbGVtZW50LnByb3RvdHlwZSAmJlxyXG4gICAgICAgICAgICAhaXNNYWNPU1dlYlZpZXdcclxuICAgICAgICAgICAgPyBkb3dubG9hZFNhdmVBc1xyXG4gICAgICAgICAgICA6IC8vIFVzZSBtc1NhdmVPck9wZW5CbG9iIGFzIGEgc2Vjb25kIGFwcHJvYWNoXHJcbiAgICAgICAgICAgICAgICAnbXNTYXZlT3JPcGVuQmxvYicgaW4gX25hdmlnYXRvclxyXG4gICAgICAgICAgICAgICAgICAgID8gbXNTYXZlQXNcclxuICAgICAgICAgICAgICAgICAgICA6IC8vIEZhbGxiYWNrIHRvIHVzaW5nIEZpbGVSZWFkZXIgYW5kIGEgcG9wdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVNhdmVyU2F2ZUFzO1xyXG5mdW5jdGlvbiBkb3dubG9hZFNhdmVBcyhibG9iLCBuYW1lID0gJ2Rvd25sb2FkJywgb3B0cykge1xyXG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGEuZG93bmxvYWQgPSBuYW1lO1xyXG4gICAgYS5yZWwgPSAnbm9vcGVuZXInOyAvLyB0YWJuYWJiaW5nXHJcbiAgICAvLyBUT0RPOiBkZXRlY3QgY2hyb21lIGV4dGVuc2lvbnMgJiBwYWNrYWdlZCBhcHBzXHJcbiAgICAvLyBhLnRhcmdldCA9ICdfYmxhbmsnXHJcbiAgICBpZiAodHlwZW9mIGJsb2IgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgLy8gU3VwcG9ydCByZWd1bGFyIGxpbmtzXHJcbiAgICAgICAgYS5ocmVmID0gYmxvYjtcclxuICAgICAgICBpZiAoYS5vcmlnaW4gIT09IGxvY2F0aW9uLm9yaWdpbikge1xyXG4gICAgICAgICAgICBpZiAoY29yc0VuYWJsZWQoYS5ocmVmKSkge1xyXG4gICAgICAgICAgICAgICAgZG93bmxvYWQoYmxvYiwgbmFtZSwgb3B0cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhLnRhcmdldCA9ICdfYmxhbmsnO1xyXG4gICAgICAgICAgICAgICAgY2xpY2soYSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNsaWNrKGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIFN1cHBvcnQgYmxvYnNcclxuICAgICAgICBhLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKGEuaHJlZik7XHJcbiAgICAgICAgfSwgNGU0KTsgLy8gNDBzXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNsaWNrKGEpO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIG1zU2F2ZUFzKGJsb2IsIG5hbWUgPSAnZG93bmxvYWQnLCBvcHRzKSB7XHJcbiAgICBpZiAodHlwZW9mIGJsb2IgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgaWYgKGNvcnNFbmFibGVkKGJsb2IpKSB7XHJcbiAgICAgICAgICAgIGRvd25sb2FkKGJsb2IsIG5hbWUsIG9wdHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICAgICAgYS5ocmVmID0gYmxvYjtcclxuICAgICAgICAgICAgYS50YXJnZXQgPSAnX2JsYW5rJztcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjbGljayhhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogd29ya3Mgb24gd2luZG93c1xyXG4gICAgICAgIG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGJvbShibG9iLCBvcHRzKSwgbmFtZSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZmlsZVNhdmVyU2F2ZUFzKGJsb2IsIG5hbWUsIG9wdHMsIHBvcHVwKSB7XHJcbiAgICAvLyBPcGVuIGEgcG9wdXAgaW1tZWRpYXRlbHkgZG8gZ28gYXJvdW5kIHBvcHVwIGJsb2NrZXJcclxuICAgIC8vIE1vc3RseSBvbmx5IGF2YWlsYWJsZSBvbiB1c2VyIGludGVyYWN0aW9uIGFuZCB0aGUgZmlsZVJlYWRlciBpcyBhc3luYyBzby4uLlxyXG4gICAgcG9wdXAgPSBwb3B1cCB8fCBvcGVuKCcnLCAnX2JsYW5rJyk7XHJcbiAgICBpZiAocG9wdXApIHtcclxuICAgICAgICBwb3B1cC5kb2N1bWVudC50aXRsZSA9IHBvcHVwLmRvY3VtZW50LmJvZHkuaW5uZXJUZXh0ID0gJ2Rvd25sb2FkaW5nLi4uJztcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgYmxvYiA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgcmV0dXJuIGRvd25sb2FkKGJsb2IsIG5hbWUsIG9wdHMpO1xyXG4gICAgY29uc3QgZm9yY2UgPSBibG9iLnR5cGUgPT09ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nO1xyXG4gICAgY29uc3QgaXNTYWZhcmkgPSAvY29uc3RydWN0b3IvaS50ZXN0KFN0cmluZyhfZ2xvYmFsLkhUTUxFbGVtZW50KSkgfHwgJ3NhZmFyaScgaW4gX2dsb2JhbDtcclxuICAgIGNvbnN0IGlzQ2hyb21lSU9TID0gL0NyaU9TXFwvW1xcZF0rLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gICAgaWYgKChpc0Nocm9tZUlPUyB8fCAoZm9yY2UgJiYgaXNTYWZhcmkpIHx8IGlzTWFjT1NXZWJWaWV3KSAmJlxyXG4gICAgICAgIHR5cGVvZiBGaWxlUmVhZGVyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8vIFNhZmFyaSBkb2Vzbid0IGFsbG93IGRvd25sb2FkaW5nIG9mIGJsb2IgVVJMc1xyXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IHVybCA9IHJlYWRlci5yZXN1bHQ7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgcG9wdXAgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdXcm9uZyByZWFkZXIucmVzdWx0IHR5cGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1cmwgPSBpc0Nocm9tZUlPU1xyXG4gICAgICAgICAgICAgICAgPyB1cmxcclxuICAgICAgICAgICAgICAgIDogdXJsLnJlcGxhY2UoL15kYXRhOlteO10qOy8sICdkYXRhOmF0dGFjaG1lbnQvZmlsZTsnKTtcclxuICAgICAgICAgICAgaWYgKHBvcHVwKSB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cC5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24uYXNzaWduKHVybCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcG9wdXAgPSBudWxsOyAvLyByZXZlcnNlLXRhYm5hYmJpbmcgIzQ2MFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIGlmIChwb3B1cClcclxuICAgICAgICAgICAgcG9wdXAubG9jYXRpb24uYXNzaWduKHVybCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgIHBvcHVwID0gbnVsbDsgLy8gcmV2ZXJzZS10YWJuYWJiaW5nICM0NjBcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xyXG4gICAgICAgIH0sIDRlNCk7IC8vIDQwc1xyXG4gICAgfVxyXG59XG5cbi8qKlxyXG4gKiBTaG93cyBhIHRvYXN0IG9yIGNvbnNvbGUubG9nXHJcbiAqXHJcbiAqIEBwYXJhbSBtZXNzYWdlIC0gbWVzc2FnZSB0byBsb2dcclxuICogQHBhcmFtIHR5cGUgLSBkaWZmZXJlbnQgY29sb3Igb2YgdGhlIHRvb2x0aXBcclxuICovXHJcbmZ1bmN0aW9uIHRvYXN0TWVzc2FnZShtZXNzYWdlLCB0eXBlKSB7XHJcbiAgICBjb25zdCBwaW5pYU1lc3NhZ2UgPSAn8J+NjSAnICsgbWVzc2FnZTtcclxuICAgIGlmICh0eXBlb2YgX19WVUVfREVWVE9PTFNfVE9BU1RfXyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIF9fVlVFX0RFVlRPT0xTX1RPQVNUX18ocGluaWFNZXNzYWdlLCB0eXBlKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKHBpbmlhTWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnd2FybicpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4ocGluaWFNZXNzYWdlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBpbmlhTWVzc2FnZSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaXNQaW5pYShvKSB7XHJcbiAgICByZXR1cm4gJ19hJyBpbiBvICYmICdpbnN0YWxsJyBpbiBvO1xyXG59XG5cbmZ1bmN0aW9uIGNoZWNrQ2xpcGJvYXJkQWNjZXNzKCkge1xyXG4gICAgaWYgKCEoJ2NsaXBib2FyZCcgaW4gbmF2aWdhdG9yKSkge1xyXG4gICAgICAgIHRvYXN0TWVzc2FnZShgWW91ciBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCB0aGUgQ2xpcGJvYXJkIEFQSWAsICdlcnJvcicpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNoZWNrTm90Rm9jdXNlZEVycm9yKGVycm9yKSB7XHJcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJlxyXG4gICAgICAgIGVycm9yLm1lc3NhZ2UudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnZG9jdW1lbnQgaXMgbm90IGZvY3VzZWQnKSkge1xyXG4gICAgICAgIHRvYXN0TWVzc2FnZSgnWW91IG5lZWQgdG8gYWN0aXZhdGUgdGhlIFwiRW11bGF0ZSBhIGZvY3VzZWQgcGFnZVwiIHNldHRpbmcgaW4gdGhlIFwiUmVuZGVyaW5nXCIgcGFuZWwgb2YgZGV2dG9vbHMuJywgJ3dhcm4nKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5hc3luYyBmdW5jdGlvbiBhY3Rpb25HbG9iYWxDb3B5U3RhdGUocGluaWEpIHtcclxuICAgIGlmIChjaGVja0NsaXBib2FyZEFjY2VzcygpKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoSlNPTi5zdHJpbmdpZnkocGluaWEuc3RhdGUudmFsdWUpKTtcclxuICAgICAgICB0b2FzdE1lc3NhZ2UoJ0dsb2JhbCBzdGF0ZSBjb3BpZWQgdG8gY2xpcGJvYXJkLicpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgaWYgKGNoZWNrTm90Rm9jdXNlZEVycm9yKGVycm9yKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRvYXN0TWVzc2FnZShgRmFpbGVkIHRvIHNlcmlhbGl6ZSB0aGUgc3RhdGUuIENoZWNrIHRoZSBjb25zb2xlIGZvciBtb3JlIGRldGFpbHMuYCwgJ2Vycm9yJyk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gYWN0aW9uR2xvYmFsUGFzdGVTdGF0ZShwaW5pYSkge1xyXG4gICAgaWYgKGNoZWNrQ2xpcGJvYXJkQWNjZXNzKCkpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBwaW5pYS5zdGF0ZS52YWx1ZSA9IEpTT04ucGFyc2UoYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC5yZWFkVGV4dCgpKTtcclxuICAgICAgICB0b2FzdE1lc3NhZ2UoJ0dsb2JhbCBzdGF0ZSBwYXN0ZWQgZnJvbSBjbGlwYm9hcmQuJyk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBpZiAoY2hlY2tOb3RGb2N1c2VkRXJyb3IoZXJyb3IpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdG9hc3RNZXNzYWdlKGBGYWlsZWQgdG8gZGVzZXJpYWxpemUgdGhlIHN0YXRlIGZyb20gY2xpcGJvYXJkLiBDaGVjayB0aGUgY29uc29sZSBmb3IgbW9yZSBkZXRhaWxzLmAsICdlcnJvcicpO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGFjdGlvbkdsb2JhbFNhdmVTdGF0ZShwaW5pYSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBzYXZlQXMobmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KHBpbmlhLnN0YXRlLnZhbHVlKV0sIHtcclxuICAgICAgICAgICAgdHlwZTogJ3RleHQvcGxhaW47Y2hhcnNldD11dGYtOCcsXHJcbiAgICAgICAgfSksICdwaW5pYS1zdGF0ZS5qc29uJyk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB0b2FzdE1lc3NhZ2UoYEZhaWxlZCB0byBleHBvcnQgdGhlIHN0YXRlIGFzIEpTT04uIENoZWNrIHRoZSBjb25zb2xlIGZvciBtb3JlIGRldGFpbHMuYCwgJ2Vycm9yJyk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbn1cclxubGV0IGZpbGVJbnB1dDtcclxuZnVuY3Rpb24gZ2V0RmlsZU9wZW5lcigpIHtcclxuICAgIGlmICghZmlsZUlucHV0KSB7XHJcbiAgICAgICAgZmlsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBmaWxlSW5wdXQudHlwZSA9ICdmaWxlJztcclxuICAgICAgICBmaWxlSW5wdXQuYWNjZXB0ID0gJy5qc29uJztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9wZW5GaWxlKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGZpbGVJbnB1dC5vbmNoYW5nZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVzID0gZmlsZUlucHV0LmZpbGVzO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmaWxlcylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBmaWxlcy5pdGVtKDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmaWxlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyB0ZXh0OiBhd2FpdCBmaWxlLnRleHQoKSwgZmlsZSB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogVE9ETzogY2hhbmdlZCBmcm9tIDQuMyB0byA0LjRcclxuICAgICAgICAgICAgZmlsZUlucHV0Lm9uY2FuY2VsID0gKCkgPT4gcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgZmlsZUlucHV0Lm9uZXJyb3IgPSByZWplY3Q7XHJcbiAgICAgICAgICAgIGZpbGVJbnB1dC5jbGljaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9wZW5GaWxlO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGFjdGlvbkdsb2JhbE9wZW5TdGF0ZUZpbGUocGluaWEpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3BlbiA9IGF3YWl0IGdldEZpbGVPcGVuZXIoKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBvcGVuKCk7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBjb25zdCB7IHRleHQsIGZpbGUgfSA9IHJlc3VsdDtcclxuICAgICAgICBwaW5pYS5zdGF0ZS52YWx1ZSA9IEpTT04ucGFyc2UodGV4dCk7XHJcbiAgICAgICAgdG9hc3RNZXNzYWdlKGBHbG9iYWwgc3RhdGUgaW1wb3J0ZWQgZnJvbSBcIiR7ZmlsZS5uYW1lfVwiLmApO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgdG9hc3RNZXNzYWdlKGBGYWlsZWQgdG8gZXhwb3J0IHRoZSBzdGF0ZSBhcyBKU09OLiBDaGVjayB0aGUgY29uc29sZSBmb3IgbW9yZSBkZXRhaWxzLmAsICdlcnJvcicpO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG59XG5cbmZ1bmN0aW9uIGZvcm1hdERpc3BsYXkoZGlzcGxheSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBfY3VzdG9tOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXksXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxuY29uc3QgUElOSUFfUk9PVF9MQUJFTCA9ICfwn42NIFBpbmlhIChyb290KSc7XHJcbmNvbnN0IFBJTklBX1JPT1RfSUQgPSAnX3Jvb3QnO1xyXG5mdW5jdGlvbiBmb3JtYXRTdG9yZUZvckluc3BlY3RvclRyZWUoc3RvcmUpIHtcclxuICAgIHJldHVybiBpc1BpbmlhKHN0b3JlKVxyXG4gICAgICAgID8ge1xyXG4gICAgICAgICAgICBpZDogUElOSUFfUk9PVF9JRCxcclxuICAgICAgICAgICAgbGFiZWw6IFBJTklBX1JPT1RfTEFCRUwsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDoge1xyXG4gICAgICAgICAgICBpZDogc3RvcmUuJGlkLFxyXG4gICAgICAgICAgICBsYWJlbDogc3RvcmUuJGlkLFxyXG4gICAgICAgIH07XHJcbn1cclxuZnVuY3Rpb24gZm9ybWF0U3RvcmVGb3JJbnNwZWN0b3JTdGF0ZShzdG9yZSkge1xyXG4gICAgaWYgKGlzUGluaWEoc3RvcmUpKSB7XHJcbiAgICAgICAgY29uc3Qgc3RvcmVOYW1lcyA9IEFycmF5LmZyb20oc3RvcmUuX3Mua2V5cygpKTtcclxuICAgICAgICBjb25zdCBzdG9yZU1hcCA9IHN0b3JlLl9zO1xyXG4gICAgICAgIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgICAgICAgICBzdGF0ZTogc3RvcmVOYW1lcy5tYXAoKHN0b3JlSWQpID0+ICh7XHJcbiAgICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGtleTogc3RvcmVJZCxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBzdG9yZS5zdGF0ZS52YWx1ZVtzdG9yZUlkXSxcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICBnZXR0ZXJzOiBzdG9yZU5hbWVzXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChpZCkgPT4gc3RvcmVNYXAuZ2V0KGlkKS5fZ2V0dGVycylcclxuICAgICAgICAgICAgICAgIC5tYXAoKGlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdG9yZSA9IHN0b3JlTWFwLmdldChpZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzdG9yZS5fZ2V0dGVycy5yZWR1Y2UoKGdldHRlcnMsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXR0ZXJzW2tleV0gPSBzdG9yZVtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0dGVycztcclxuICAgICAgICAgICAgICAgICAgICB9LCB7fSksXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgICAgIHN0YXRlOiBPYmplY3Qua2V5cyhzdG9yZS4kc3RhdGUpLm1hcCgoa2V5KSA9PiAoe1xyXG4gICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICB2YWx1ZTogc3RvcmUuJHN0YXRlW2tleV0sXHJcbiAgICAgICAgfSkpLFxyXG4gICAgfTtcclxuICAgIC8vIGF2b2lkIGFkZGluZyBlbXB0eSBnZXR0ZXJzXHJcbiAgICBpZiAoc3RvcmUuX2dldHRlcnMgJiYgc3RvcmUuX2dldHRlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgc3RhdGUuZ2V0dGVycyA9IHN0b3JlLl9nZXR0ZXJzLm1hcCgoZ2V0dGVyTmFtZSkgPT4gKHtcclxuICAgICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBrZXk6IGdldHRlck5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiBzdG9yZVtnZXR0ZXJOYW1lXSxcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc3RvcmUuX2N1c3RvbVByb3BlcnRpZXMuc2l6ZSkge1xyXG4gICAgICAgIHN0YXRlLmN1c3RvbVByb3BlcnRpZXMgPSBBcnJheS5mcm9tKHN0b3JlLl9jdXN0b21Qcm9wZXJ0aWVzKS5tYXAoKGtleSkgPT4gKHtcclxuICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgdmFsdWU6IHN0b3JlW2tleV0sXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG59XHJcbmZ1bmN0aW9uIGZvcm1hdEV2ZW50RGF0YShldmVudHMpIHtcclxuICAgIGlmICghZXZlbnRzKVxyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGV2ZW50cykpIHtcclxuICAgICAgICAvLyBUT0RPOiBoYW5kbGUgYWRkIGFuZCBkZWxldGUgZm9yIGFycmF5cyBhbmQgb2JqZWN0c1xyXG4gICAgICAgIHJldHVybiBldmVudHMucmVkdWNlKChkYXRhLCBldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBkYXRhLmtleXMucHVzaChldmVudC5rZXkpO1xyXG4gICAgICAgICAgICBkYXRhLm9wZXJhdGlvbnMucHVzaChldmVudC50eXBlKTtcclxuICAgICAgICAgICAgZGF0YS5vbGRWYWx1ZVtldmVudC5rZXldID0gZXZlbnQub2xkVmFsdWU7XHJcbiAgICAgICAgICAgIGRhdGEubmV3VmFsdWVbZXZlbnQua2V5XSA9IGV2ZW50Lm5ld1ZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG9sZFZhbHVlOiB7fSxcclxuICAgICAgICAgICAga2V5czogW10sXHJcbiAgICAgICAgICAgIG9wZXJhdGlvbnM6IFtdLFxyXG4gICAgICAgICAgICBuZXdWYWx1ZToge30sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvcGVyYXRpb246IGZvcm1hdERpc3BsYXkoZXZlbnRzLnR5cGUpLFxyXG4gICAgICAgICAgICBrZXk6IGZvcm1hdERpc3BsYXkoZXZlbnRzLmtleSksXHJcbiAgICAgICAgICAgIG9sZFZhbHVlOiBldmVudHMub2xkVmFsdWUsXHJcbiAgICAgICAgICAgIG5ld1ZhbHVlOiBldmVudHMubmV3VmFsdWUsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBmb3JtYXRNdXRhdGlvblR5cGUodHlwZSkge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSBNdXRhdGlvblR5cGUuZGlyZWN0OlxyXG4gICAgICAgICAgICByZXR1cm4gJ211dGF0aW9uJztcclxuICAgICAgICBjYXNlIE11dGF0aW9uVHlwZS5wYXRjaEZ1bmN0aW9uOlxyXG4gICAgICAgICAgICByZXR1cm4gJyRwYXRjaCc7XHJcbiAgICAgICAgY2FzZSBNdXRhdGlvblR5cGUucGF0Y2hPYmplY3Q6XHJcbiAgICAgICAgICAgIHJldHVybiAnJHBhdGNoJztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gJ3Vua25vd24nO1xyXG4gICAgfVxyXG59XG5cbi8vIHRpbWVsaW5lIGNhbiBiZSBwYXVzZWQgd2hlbiBkaXJlY3RseSBjaGFuZ2luZyB0aGUgc3RhdGVcclxubGV0IGlzVGltZWxpbmVBY3RpdmUgPSB0cnVlO1xyXG5jb25zdCBjb21wb25lbnRTdGF0ZVR5cGVzID0gW107XHJcbmNvbnN0IE1VVEFUSU9OU19MQVlFUl9JRCA9ICdwaW5pYTptdXRhdGlvbnMnO1xyXG5jb25zdCBJTlNQRUNUT1JfSUQgPSAncGluaWEnO1xyXG5jb25zdCB7IGFzc2lnbjogYXNzaWduJDEgfSA9IE9iamVjdDtcclxuLyoqXHJcbiAqIEdldHMgdGhlIGRpc3BsYXllZCBuYW1lIG9mIGEgc3RvcmUgaW4gZGV2dG9vbHNcclxuICpcclxuICogQHBhcmFtIGlkIC0gaWQgb2YgdGhlIHN0b3JlXHJcbiAqIEByZXR1cm5zIGEgZm9ybWF0dGVkIHN0cmluZ1xyXG4gKi9cclxuY29uc3QgZ2V0U3RvcmVUeXBlID0gKGlkKSA9PiAn8J+NjSAnICsgaWQ7XHJcbi8qKlxyXG4gKiBBZGQgdGhlIHBpbmlhIHBsdWdpbiB3aXRob3V0IGFueSBzdG9yZS4gQWxsb3dzIGRpc3BsYXlpbmcgYSBQaW5pYSBwbHVnaW4gdGFiXHJcbiAqIGFzIHNvb24gYXMgaXQgaXMgYWRkZWQgdG8gdGhlIGFwcGxpY2F0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0gYXBwIC0gVnVlIGFwcGxpY2F0aW9uXHJcbiAqIEBwYXJhbSBwaW5pYSAtIHBpbmlhIGluc3RhbmNlXHJcbiAqL1xyXG5mdW5jdGlvbiByZWdpc3RlclBpbmlhRGV2dG9vbHMoYXBwLCBwaW5pYSkge1xyXG4gICAgc2V0dXBEZXZ0b29sc1BsdWdpbih7XHJcbiAgICAgICAgaWQ6ICdkZXYuZXNtLnBpbmlhJyxcclxuICAgICAgICBsYWJlbDogJ1BpbmlhIPCfjY0nLFxyXG4gICAgICAgIGxvZ286ICdodHRwczovL3BpbmlhLnZ1ZWpzLm9yZy9sb2dvLnN2ZycsXHJcbiAgICAgICAgcGFja2FnZU5hbWU6ICdwaW5pYScsXHJcbiAgICAgICAgaG9tZXBhZ2U6ICdodHRwczovL3BpbmlhLnZ1ZWpzLm9yZycsXHJcbiAgICAgICAgY29tcG9uZW50U3RhdGVUeXBlcyxcclxuICAgICAgICBhcHAsXHJcbiAgICB9LCAoYXBpKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhcGkubm93ICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSgnWW91IHNlZW0gdG8gYmUgdXNpbmcgYW4gb3V0ZGF0ZWQgdmVyc2lvbiBvZiBWdWUgRGV2dG9vbHMuIEFyZSB5b3Ugc3RpbGwgdXNpbmcgdGhlIEJldGEgcmVsZWFzZSBpbnN0ZWFkIG9mIHRoZSBzdGFibGUgb25lPyBZb3UgY2FuIGZpbmQgdGhlIGxpbmtzIGF0IGh0dHBzOi8vZGV2dG9vbHMudnVlanMub3JnL2d1aWRlL2luc3RhbGxhdGlvbi5odG1sLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhcGkuYWRkVGltZWxpbmVMYXllcih7XHJcbiAgICAgICAgICAgIGlkOiBNVVRBVElPTlNfTEFZRVJfSUQsXHJcbiAgICAgICAgICAgIGxhYmVsOiBgUGluaWEg8J+NjWAsXHJcbiAgICAgICAgICAgIGNvbG9yOiAweGU1ZGY4OCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBhcGkuYWRkSW5zcGVjdG9yKHtcclxuICAgICAgICAgICAgaWQ6IElOU1BFQ1RPUl9JRCxcclxuICAgICAgICAgICAgbGFiZWw6ICdQaW5pYSDwn42NJyxcclxuICAgICAgICAgICAgaWNvbjogJ3N0b3JhZ2UnLFxyXG4gICAgICAgICAgICB0cmVlRmlsdGVyUGxhY2Vob2xkZXI6ICdTZWFyY2ggc3RvcmVzJyxcclxuICAgICAgICAgICAgYWN0aW9uczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdjb250ZW50X2NvcHknLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25HbG9iYWxDb3B5U3RhdGUocGluaWEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogJ1NlcmlhbGl6ZSBhbmQgY29weSB0aGUgc3RhdGUnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnY29udGVudF9wYXN0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGFjdGlvbkdsb2JhbFBhc3RlU3RhdGUocGluaWEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGkuc2VuZEluc3BlY3RvclRyZWUoSU5TUEVDVE9SX0lEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpLnNlbmRJbnNwZWN0b3JTdGF0ZShJTlNQRUNUT1JfSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogJ1JlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIGNvbnRlbnQgb2YgeW91ciBjbGlwYm9hcmQnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc2F2ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbkdsb2JhbFNhdmVTdGF0ZShwaW5pYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiAnU2F2ZSB0aGUgc3RhdGUgYXMgYSBKU09OIGZpbGUnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZm9sZGVyX29wZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBhY3Rpb25HbG9iYWxPcGVuU3RhdGVGaWxlKHBpbmlhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpLnNlbmRJbnNwZWN0b3JUcmVlKElOU1BFQ1RPUl9JRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaS5zZW5kSW5zcGVjdG9yU3RhdGUoSU5TUEVDVE9SX0lEKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6ICdJbXBvcnQgdGhlIHN0YXRlIGZyb20gYSBKU09OIGZpbGUnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgbm9kZUFjdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAncmVzdG9yZScsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogJ1Jlc2V0IHRoZSBzdGF0ZSAob3B0aW9uIHN0b3JlIG9ubHkpJyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IChub2RlSWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSBwaW5pYS5fcy5nZXQobm9kZUlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdG9yZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RNZXNzYWdlKGBDYW5ub3QgcmVzZXQgXCIke25vZGVJZH1cIiBzdG9yZSBiZWNhdXNlIGl0IHdhc24ndCBmb3VuZC5gLCAnd2FybicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFzdG9yZS5faXNPcHRpb25zQVBJKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdE1lc3NhZ2UoYENhbm5vdCByZXNldCBcIiR7bm9kZUlkfVwiIHN0b3JlIGJlY2F1c2UgaXQncyBhIHNldHVwIHN0b3JlLmAsICd3YXJuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS4kcmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0TWVzc2FnZShgU3RvcmUgXCIke25vZGVJZH1cIiByZXNldC5gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFwaS5vbi5pbnNwZWN0Q29tcG9uZW50KChwYXlsb2FkLCBjdHgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJveHkgPSAocGF5bG9hZC5jb21wb25lbnRJbnN0YW5jZSAmJlxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZC5jb21wb25lbnRJbnN0YW5jZS5wcm94eSk7XHJcbiAgICAgICAgICAgIGlmIChwcm94eSAmJiBwcm94eS5fcFN0b3Jlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGluaWFTdG9yZXMgPSBwYXlsb2FkLmNvbXBvbmVudEluc3RhbmNlLnByb3h5Ll9wU3RvcmVzO1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhwaW5pYVN0b3JlcykuZm9yRWFjaCgoc3RvcmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkLmluc3RhbmNlRGF0YS5zdGF0ZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZ2V0U3RvcmVUeXBlKHN0b3JlLiRpZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3N0YXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzdG9yZS5faXNPcHRpb25zQVBJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY3VzdG9tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0b1JhdyhzdG9yZS4kc3RhdGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3Jlc3RvcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6ICdSZXNldCB0aGUgc3RhdGUgb2YgdGhpcyBzdG9yZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAoKSA9PiBzdG9yZS4kcmVzZXQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogLy8gTk9URTogd29ya2Fyb3VuZCB0byB1bndyYXAgdHJhbnNmZXJyZWQgcmVmc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHN0b3JlLiRzdGF0ZSkucmVkdWNlKChzdGF0ZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlW2tleV0gPSBzdG9yZS4kc3RhdGVba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHt9KSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcmUuX2dldHRlcnMgJiYgc3RvcmUuX2dldHRlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQuaW5zdGFuY2VEYXRhLnN0YXRlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZ2V0U3RvcmVUeXBlKHN0b3JlLiRpZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdnZXR0ZXJzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzdG9yZS5fZ2V0dGVycy5yZWR1Y2UoKGdldHRlcnMsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldHRlcnNba2V5XSA9IHN0b3JlW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiB3ZSBqdXN0IHdhbnQgdG8gc2hvdyBpdCBpbiBkZXZ0b29sc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXR0ZXJzW2tleV0gPSBlcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldHRlcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7fSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXBpLm9uLmdldEluc3BlY3RvclRyZWUoKHBheWxvYWQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBheWxvYWQuYXBwID09PSBhcHAgJiYgcGF5bG9hZC5pbnNwZWN0b3JJZCA9PT0gSU5TUEVDVE9SX0lEKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RvcmVzID0gW3BpbmlhXTtcclxuICAgICAgICAgICAgICAgIHN0b3JlcyA9IHN0b3Jlcy5jb25jYXQoQXJyYXkuZnJvbShwaW5pYS5fcy52YWx1ZXMoKSkpO1xyXG4gICAgICAgICAgICAgICAgcGF5bG9hZC5yb290Tm9kZXMgPSAocGF5bG9hZC5maWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICA/IHN0b3Jlcy5maWx0ZXIoKHN0b3JlKSA9PiAnJGlkJyBpbiBzdG9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHN0b3JlLiRpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhwYXlsb2FkLmZpbHRlci50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFBJTklBX1JPT1RfTEFCRUwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwYXlsb2FkLmZpbHRlci50b0xvd2VyQ2FzZSgpKSlcclxuICAgICAgICAgICAgICAgICAgICA6IHN0b3JlcykubWFwKGZvcm1hdFN0b3JlRm9ySW5zcGVjdG9yVHJlZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBhcGkub24uZ2V0SW5zcGVjdG9yU3RhdGUoKHBheWxvYWQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBheWxvYWQuYXBwID09PSBhcHAgJiYgcGF5bG9hZC5pbnNwZWN0b3JJZCA9PT0gSU5TUEVDVE9SX0lEKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnNwZWN0ZWRTdG9yZSA9IHBheWxvYWQubm9kZUlkID09PSBQSU5JQV9ST09UX0lEXHJcbiAgICAgICAgICAgICAgICAgICAgPyBwaW5pYVxyXG4gICAgICAgICAgICAgICAgICAgIDogcGluaWEuX3MuZ2V0KHBheWxvYWQubm9kZUlkKTtcclxuICAgICAgICAgICAgICAgIGlmICghaW5zcGVjdGVkU3RvcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGNvdWxkIGJlIHRoZSBzZWxlY3RlZCBzdG9yZSByZXN0b3JlZCBmb3IgYSBkaWZmZXJlbnQgcHJvamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIGl0J3MgYmV0dGVyIG5vdCB0byBzYXkgYW55dGhpbmcgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpbnNwZWN0ZWRTdG9yZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQuc3RhdGUgPSBmb3JtYXRTdG9yZUZvckluc3BlY3RvclN0YXRlKGluc3BlY3RlZFN0b3JlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFwaS5vbi5lZGl0SW5zcGVjdG9yU3RhdGUoKHBheWxvYWQsIGN0eCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGF5bG9hZC5hcHAgPT09IGFwcCAmJiBwYXlsb2FkLmluc3BlY3RvcklkID09PSBJTlNQRUNUT1JfSUQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluc3BlY3RlZFN0b3JlID0gcGF5bG9hZC5ub2RlSWQgPT09IFBJTklBX1JPT1RfSURcclxuICAgICAgICAgICAgICAgICAgICA/IHBpbmlhXHJcbiAgICAgICAgICAgICAgICAgICAgOiBwaW5pYS5fcy5nZXQocGF5bG9hZC5ub2RlSWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpbnNwZWN0ZWRTdG9yZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b2FzdE1lc3NhZ2UoYHN0b3JlIFwiJHtwYXlsb2FkLm5vZGVJZH1cIiBub3QgZm91bmRgLCAnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aCB9ID0gcGF5bG9hZDtcclxuICAgICAgICAgICAgICAgIGlmICghaXNQaW5pYShpbnNwZWN0ZWRTdG9yZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhY2Nlc3Mgb25seSB0aGUgc3RhdGVcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGF0aC5sZW5ndGggIT09IDEgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIWluc3BlY3RlZFN0b3JlLl9jdXN0b21Qcm9wZXJ0aWVzLmhhcyhwYXRoWzBdKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoWzBdIGluIGluc3BlY3RlZFN0b3JlLiRzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoLnVuc2hpZnQoJyRzdGF0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJvb3QgYWNjZXNzLCB3ZSBjYW4gb21pdCB0aGUgYC52YWx1ZWAgYmVjYXVzZSB0aGUgZGV2dG9vbHMgQVBJIGRvZXMgaXQgZm9yIHVzXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aC51bnNoaWZ0KCdzdGF0ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaXNUaW1lbGluZUFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcGF5bG9hZC5zZXQoaW5zcGVjdGVkU3RvcmUsIHBhdGgsIHBheWxvYWQuc3RhdGUudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaXNUaW1lbGluZUFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBhcGkub24uZWRpdENvbXBvbmVudFN0YXRlKChwYXlsb2FkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLnR5cGUuc3RhcnRzV2l0aCgn8J+NjScpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdG9yZUlkID0gcGF5bG9hZC50eXBlLnJlcGxhY2UoL17wn42NXFxzKi8sICcnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gcGluaWEuX3MuZ2V0KHN0b3JlSWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdG9yZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b2FzdE1lc3NhZ2UoYHN0b3JlIFwiJHtzdG9yZUlkfVwiIG5vdCBmb3VuZGAsICdlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRoIH0gPSBwYXlsb2FkO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhdGhbMF0gIT09ICdzdGF0ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9hc3RNZXNzYWdlKGBJbnZhbGlkIHBhdGggZm9yIHN0b3JlIFwiJHtzdG9yZUlkfVwiOlxcbiR7cGF0aH1cXG5Pbmx5IHN0YXRlIGNhbiBiZSBtb2RpZmllZC5gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHJld3JpdGUgdGhlIGZpcnN0IGVudHJ5IHRvIGJlIGFibGUgdG8gZGlyZWN0bHkgc2V0IHRoZSBzdGF0ZSBhc1xyXG4gICAgICAgICAgICAgICAgLy8gd2VsbCBhcyBhbnkgb3RoZXIgcGF0aFxyXG4gICAgICAgICAgICAgICAgcGF0aFswXSA9ICckc3RhdGUnO1xyXG4gICAgICAgICAgICAgICAgaXNUaW1lbGluZUFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcGF5bG9hZC5zZXQoc3RvcmUsIHBhdGgsIHBheWxvYWQuc3RhdGUudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaXNUaW1lbGluZUFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZFN0b3JlVG9EZXZ0b29scyhhcHAsIHN0b3JlKSB7XHJcbiAgICBpZiAoIWNvbXBvbmVudFN0YXRlVHlwZXMuaW5jbHVkZXMoZ2V0U3RvcmVUeXBlKHN0b3JlLiRpZCkpKSB7XHJcbiAgICAgICAgY29tcG9uZW50U3RhdGVUeXBlcy5wdXNoKGdldFN0b3JlVHlwZShzdG9yZS4kaWQpKTtcclxuICAgIH1cclxuICAgIHNldHVwRGV2dG9vbHNQbHVnaW4oe1xyXG4gICAgICAgIGlkOiAnZGV2LmVzbS5waW5pYScsXHJcbiAgICAgICAgbGFiZWw6ICdQaW5pYSDwn42NJyxcclxuICAgICAgICBsb2dvOiAnaHR0cHM6Ly9waW5pYS52dWVqcy5vcmcvbG9nby5zdmcnLFxyXG4gICAgICAgIHBhY2thZ2VOYW1lOiAncGluaWEnLFxyXG4gICAgICAgIGhvbWVwYWdlOiAnaHR0cHM6Ly9waW5pYS52dWVqcy5vcmcnLFxyXG4gICAgICAgIGNvbXBvbmVudFN0YXRlVHlwZXMsXHJcbiAgICAgICAgYXBwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIGxvZ1N0b3JlQ2hhbmdlczoge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdOb3RpZnkgYWJvdXQgbmV3L2RlbGV0ZWQgc3RvcmVzJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gdXNlRW1vamlzOiB7XHJcbiAgICAgICAgICAgIC8vICAgbGFiZWw6ICdVc2UgZW1vamlzIGluIG1lc3NhZ2VzIOKaoe+4jycsXHJcbiAgICAgICAgICAgIC8vICAgdHlwZTogJ2Jvb2xlYW4nLFxyXG4gICAgICAgICAgICAvLyAgIGRlZmF1bHRWYWx1ZTogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICB9LFxyXG4gICAgfSwgKGFwaSkgPT4ge1xyXG4gICAgICAgIC8vIGdyYWNlZnVsbHkgaGFuZGxlIGVycm9yc1xyXG4gICAgICAgIGNvbnN0IG5vdyA9IHR5cGVvZiBhcGkubm93ID09PSAnZnVuY3Rpb24nID8gYXBpLm5vdy5iaW5kKGFwaSkgOiBEYXRlLm5vdztcclxuICAgICAgICBzdG9yZS4kb25BY3Rpb24oKHsgYWZ0ZXIsIG9uRXJyb3IsIG5hbWUsIGFyZ3MgfSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBncm91cElkID0gcnVubmluZ0FjdGlvbklkKys7XHJcbiAgICAgICAgICAgIGFwaS5hZGRUaW1lbGluZUV2ZW50KHtcclxuICAgICAgICAgICAgICAgIGxheWVySWQ6IE1VVEFUSU9OU19MQVlFUl9JRCxcclxuICAgICAgICAgICAgICAgIGV2ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogbm93KCksXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfwn5urICcgKyBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlOiAnc3RhcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU6IGZvcm1hdERpc3BsYXkoc3RvcmUuJGlkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBmb3JtYXREaXNwbGF5KG5hbWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBJZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhZnRlcigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVBY3Rpb24gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBhcGkuYWRkVGltZWxpbmVFdmVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJJZDogTVVUQVRJT05TX0xBWUVSX0lELFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IG5vdygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ/Cfm6wgJyArIG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlOiAnZW5kJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU6IGZvcm1hdERpc3BsYXkoc3RvcmUuJGlkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogZm9ybWF0RGlzcGxheShuYW1lKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgb25FcnJvcigoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUFjdGlvbiA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGFwaS5hZGRUaW1lbGluZUV2ZW50KHtcclxuICAgICAgICAgICAgICAgICAgICBsYXllcklkOiBNVVRBVElPTlNfTEFZRVJfSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogbm93KCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ1R5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn8J+SpSAnICsgbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VidGl0bGU6ICdlbmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZTogZm9ybWF0RGlzcGxheShzdG9yZS4kaWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBmb3JtYXREaXNwbGF5KG5hbWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cElkLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICAgICAgc3RvcmUuX2N1c3RvbVByb3BlcnRpZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICAgICAgICB3YXRjaCgoKSA9PiB1bnJlZihzdG9yZVtuYW1lXSksIChuZXdWYWx1ZSwgb2xkVmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGFwaS5ub3RpZnlDb21wb25lbnRVcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgIGFwaS5zZW5kSW5zcGVjdG9yU3RhdGUoSU5TUEVDVE9SX0lEKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc1RpbWVsaW5lQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpLmFkZFRpbWVsaW5lRXZlbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllcklkOiBNVVRBVElPTlNfTEFZRVJfSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiBub3coKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQ2hhbmdlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwSWQ6IGFjdGl2ZUFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgeyBkZWVwOiB0cnVlIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN0b3JlLiRzdWJzY3JpYmUoKHsgZXZlbnRzLCB0eXBlIH0sIHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGFwaS5ub3RpZnlDb21wb25lbnRVcGRhdGUoKTtcclxuICAgICAgICAgICAgYXBpLnNlbmRJbnNwZWN0b3JTdGF0ZShJTlNQRUNUT1JfSUQpO1xyXG4gICAgICAgICAgICBpZiAoIWlzVGltZWxpbmVBY3RpdmUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIC8vIHJvb3RTdG9yZS5zdGF0ZVtzdG9yZS5pZF0gPSBzdGF0ZVxyXG4gICAgICAgICAgICBjb25zdCBldmVudERhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICB0aW1lOiBub3coKSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBmb3JtYXRNdXRhdGlvblR5cGUodHlwZSksXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBhc3NpZ24kMSh7IHN0b3JlOiBmb3JtYXREaXNwbGF5KHN0b3JlLiRpZCkgfSwgZm9ybWF0RXZlbnREYXRhKGV2ZW50cykpLFxyXG4gICAgICAgICAgICAgICAgZ3JvdXBJZDogYWN0aXZlQWN0aW9uLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvLyByZXNldCBmb3IgdGhlIG5leHQgbXV0YXRpb25cclxuICAgICAgICAgICAgYWN0aXZlQWN0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gTXV0YXRpb25UeXBlLnBhdGNoRnVuY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50RGF0YS5zdWJ0aXRsZSA9ICfipLXvuI8nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IE11dGF0aW9uVHlwZS5wYXRjaE9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnREYXRhLnN1YnRpdGxlID0gJ/Cfp6knO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50cyAmJiAhQXJyYXkuaXNBcnJheShldmVudHMpKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudERhdGEuc3VidGl0bGUgPSBldmVudHMudHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZXZlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudERhdGEuZGF0YVsncmF3RXZlbnQocyknXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBfY3VzdG9tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdEZWJ1Z2dlckV2ZW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6ICdyYXcgRGVidWdnZXJFdmVudFtdJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGV2ZW50cyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcGkuYWRkVGltZWxpbmVFdmVudCh7XHJcbiAgICAgICAgICAgICAgICBsYXllcklkOiBNVVRBVElPTlNfTEFZRVJfSUQsXHJcbiAgICAgICAgICAgICAgICBldmVudDogZXZlbnREYXRhLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCB7IGRldGFjaGVkOiB0cnVlLCBmbHVzaDogJ3N5bmMnIH0pO1xyXG4gICAgICAgIGNvbnN0IGhvdFVwZGF0ZSA9IHN0b3JlLl9ob3RVcGRhdGU7XHJcbiAgICAgICAgc3RvcmUuX2hvdFVwZGF0ZSA9IG1hcmtSYXcoKG5ld1N0b3JlKSA9PiB7XHJcbiAgICAgICAgICAgIGhvdFVwZGF0ZShuZXdTdG9yZSk7XHJcbiAgICAgICAgICAgIGFwaS5hZGRUaW1lbGluZUV2ZW50KHtcclxuICAgICAgICAgICAgICAgIGxheWVySWQ6IE1VVEFUSU9OU19MQVlFUl9JRCxcclxuICAgICAgICAgICAgICAgIGV2ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogbm93KCksXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfwn5SlICcgKyBzdG9yZS4kaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VidGl0bGU6ICdITVIgdXBkYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlOiBmb3JtYXREaXNwbGF5KHN0b3JlLiRpZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm86IGZvcm1hdERpc3BsYXkoYEhNUiB1cGRhdGVgKSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgZGV2dG9vbHMgdG9vXHJcbiAgICAgICAgICAgIGFwaS5ub3RpZnlDb21wb25lbnRVcGRhdGUoKTtcclxuICAgICAgICAgICAgYXBpLnNlbmRJbnNwZWN0b3JUcmVlKElOU1BFQ1RPUl9JRCk7XHJcbiAgICAgICAgICAgIGFwaS5zZW5kSW5zcGVjdG9yU3RhdGUoSU5TUEVDVE9SX0lEKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7ICRkaXNwb3NlIH0gPSBzdG9yZTtcclxuICAgICAgICBzdG9yZS4kZGlzcG9zZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgJGRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgYXBpLm5vdGlmeUNvbXBvbmVudFVwZGF0ZSgpO1xyXG4gICAgICAgICAgICBhcGkuc2VuZEluc3BlY3RvclRyZWUoSU5TUEVDVE9SX0lEKTtcclxuICAgICAgICAgICAgYXBpLnNlbmRJbnNwZWN0b3JTdGF0ZShJTlNQRUNUT1JfSUQpO1xyXG4gICAgICAgICAgICBhcGkuZ2V0U2V0dGluZ3MoKS5sb2dTdG9yZUNoYW5nZXMgJiZcclxuICAgICAgICAgICAgICAgIHRvYXN0TWVzc2FnZShgRGlzcG9zZWQgXCIke3N0b3JlLiRpZH1cIiBzdG9yZSDwn5eRYCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyB0cmlnZ2VyIGFuIHVwZGF0ZSBzbyBpdCBjYW4gZGlzcGxheSBuZXcgcmVnaXN0ZXJlZCBzdG9yZXNcclxuICAgICAgICBhcGkubm90aWZ5Q29tcG9uZW50VXBkYXRlKCk7XHJcbiAgICAgICAgYXBpLnNlbmRJbnNwZWN0b3JUcmVlKElOU1BFQ1RPUl9JRCk7XHJcbiAgICAgICAgYXBpLnNlbmRJbnNwZWN0b3JTdGF0ZShJTlNQRUNUT1JfSUQpO1xyXG4gICAgICAgIGFwaS5nZXRTZXR0aW5ncygpLmxvZ1N0b3JlQ2hhbmdlcyAmJlxyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UoYFwiJHtzdG9yZS4kaWR9XCIgc3RvcmUgaW5zdGFsbGVkIPCfhpVgKTtcclxuICAgIH0pO1xyXG59XHJcbmxldCBydW5uaW5nQWN0aW9uSWQgPSAwO1xyXG5sZXQgYWN0aXZlQWN0aW9uO1xyXG4vKipcclxuICogUGF0Y2hlcyBhIHN0b3JlIHRvIGVuYWJsZSBhY3Rpb24gZ3JvdXBpbmcgaW4gZGV2dG9vbHMgYnkgd3JhcHBpbmcgdGhlIHN0b3JlIHdpdGggYSBQcm94eSB0aGF0IGlzIHBhc3NlZCBhcyB0aGVcclxuICogY29udGV4dCBvZiBhbGwgYWN0aW9ucywgYWxsb3dpbmcgdXMgdG8gc2V0IGBydW5uaW5nQWN0aW9uYCBvbiBlYWNoIGFjY2VzcyBhbmQgZWZmZWN0aXZlbHkgYXNzb2NpYXRpbmcgYW55IHN0YXRlXHJcbiAqIG11dGF0aW9uIHRvIHRoZSBhY3Rpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSBzdG9yZSAtIHN0b3JlIHRvIHBhdGNoXHJcbiAqIEBwYXJhbSBhY3Rpb25OYW1lcyAtIGxpc3Qgb2YgYWN0aW9uc3QgdG8gcGF0Y2hcclxuICovXHJcbmZ1bmN0aW9uIHBhdGNoQWN0aW9uRm9yR3JvdXBpbmcoc3RvcmUsIGFjdGlvbk5hbWVzKSB7XHJcbiAgICAvLyBvcmlnaW5hbCBhY3Rpb25zIG9mIHRoZSBzdG9yZSBhcyB0aGV5IGFyZSBnaXZlbiBieSBwaW5pYS4gV2UgYXJlIGdvaW5nIHRvIG92ZXJyaWRlIHRoZW1cclxuICAgIGNvbnN0IGFjdGlvbnMgPSBhY3Rpb25OYW1lcy5yZWR1Y2UoKHN0b3JlQWN0aW9ucywgYWN0aW9uTmFtZSkgPT4ge1xyXG4gICAgICAgIC8vIHVzZSB0b1JhdyB0byBhdm9pZCB0cmFja2luZyAjNTQxXHJcbiAgICAgICAgc3RvcmVBY3Rpb25zW2FjdGlvbk5hbWVdID0gdG9SYXcoc3RvcmUpW2FjdGlvbk5hbWVdO1xyXG4gICAgICAgIHJldHVybiBzdG9yZUFjdGlvbnM7XHJcbiAgICB9LCB7fSk7XHJcbiAgICBmb3IgKGNvbnN0IGFjdGlvbk5hbWUgaW4gYWN0aW9ucykge1xyXG4gICAgICAgIHN0b3JlW2FjdGlvbk5hbWVdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBzZXRBY3RpdmVQaW5pYShzdG9yZS5fcClcclxuICAgICAgICAgICAgLy8gdGhlIHJ1bm5pbmcgYWN0aW9uIGlkIGlzIGluY3JlbWVudGVkIGluIGEgYmVmb3JlIGFjdGlvbiBob29rXHJcbiAgICAgICAgICAgIGNvbnN0IF9hY3Rpb25JZCA9IHJ1bm5pbmdBY3Rpb25JZDtcclxuICAgICAgICAgICAgY29uc3QgdHJhY2tlZFN0b3JlID0gbmV3IFByb3h5KHN0b3JlLCB7XHJcbiAgICAgICAgICAgICAgICBnZXQoLi4uYXJncykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUFjdGlvbiA9IF9hY3Rpb25JZDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQoLi4uYXJncyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2V0KC4uLmFyZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVBY3Rpb24gPSBfYWN0aW9uSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3Quc2V0KC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25zW2FjdGlvbk5hbWVdLmFwcGx5KHRyYWNrZWRTdG9yZSwgYXJndW1lbnRzKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBwaW5pYS51c2UoZGV2dG9vbHNQbHVnaW4pXHJcbiAqL1xyXG5mdW5jdGlvbiBkZXZ0b29sc1BsdWdpbih7IGFwcCwgc3RvcmUsIG9wdGlvbnMgfSkge1xyXG4gICAgLy8gSE1SIG1vZHVsZVxyXG4gICAgaWYgKHN0b3JlLiRpZC5zdGFydHNXaXRoKCdfX2hvdDonKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIGRldGVjdCBvcHRpb24gYXBpIHZzIHNldHVwIGFwaVxyXG4gICAgaWYgKG9wdGlvbnMuc3RhdGUpIHtcclxuICAgICAgICBzdG9yZS5faXNPcHRpb25zQVBJID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8vIG9ubHkgd3JhcCBhY3Rpb25zIGluIG9wdGlvbi1kZWZpbmVkIHN0b3JlcyBhcyB0aGlzIHRlY2huaXF1ZSByZWxpZXMgb25cclxuICAgIC8vIHdyYXBwaW5nIHRoZSBjb250ZXh0IG9mIHRoZSBhY3Rpb24gd2l0aCBhIHByb3h5XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuc3RhdGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBwYXRjaEFjdGlvbkZvckdyb3VwaW5nKFxyXG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IGNhbiBjYXN0IHRoZSBzdG9yZS4uLlxyXG4gICAgICAgIHN0b3JlLCBPYmplY3Qua2V5cyhvcHRpb25zLmFjdGlvbnMpKTtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbEhvdFVwZGF0ZSA9IHN0b3JlLl9ob3RVcGRhdGU7XHJcbiAgICAgICAgLy8gVXBncmFkZSB0aGUgSE1SIHRvIGFsc28gdXBkYXRlIHRoZSBuZXcgYWN0aW9uc1xyXG4gICAgICAgIHRvUmF3KHN0b3JlKS5faG90VXBkYXRlID0gZnVuY3Rpb24gKG5ld1N0b3JlKSB7XHJcbiAgICAgICAgICAgIG9yaWdpbmFsSG90VXBkYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIHBhdGNoQWN0aW9uRm9yR3JvdXBpbmcoc3RvcmUsIE9iamVjdC5rZXlzKG5ld1N0b3JlLl9obXJQYXlsb2FkLmFjdGlvbnMpKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgYWRkU3RvcmVUb0RldnRvb2xzKGFwcCwgXHJcbiAgICAvLyBGSVhNRTogaXMgdGhlcmUgYSB3YXkgdG8gYWxsb3cgdGhlIGFzc2lnbm1lbnQgZnJvbSBTdG9yZTxJZCwgUywgRywgQT4gdG8gU3RvcmVHZW5lcmljP1xyXG4gICAgc3RvcmUpO1xyXG59XG5cbi8qKlxyXG4gKiBDcmVhdGVzIGEgUGluaWEgaW5zdGFuY2UgdG8gYmUgdXNlZCBieSB0aGUgYXBwbGljYXRpb25cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVBpbmlhKCkge1xyXG4gICAgY29uc3Qgc2NvcGUgPSBlZmZlY3RTY29wZSh0cnVlKTtcclxuICAgIC8vIE5PVEU6IGhlcmUgd2UgY291bGQgY2hlY2sgdGhlIHdpbmRvdyBvYmplY3QgZm9yIGEgc3RhdGUgYW5kIGRpcmVjdGx5IHNldCBpdFxyXG4gICAgLy8gaWYgdGhlcmUgaXMgYW55dGhpbmcgbGlrZSBpdCB3aXRoIFZ1ZSAzIFNTUlxyXG4gICAgY29uc3Qgc3RhdGUgPSBzY29wZS5ydW4oKCkgPT4gcmVmKHt9KSk7XHJcbiAgICBsZXQgX3AgPSBbXTtcclxuICAgIC8vIHBsdWdpbnMgYWRkZWQgYmVmb3JlIGNhbGxpbmcgYXBwLnVzZShwaW5pYSlcclxuICAgIGxldCB0b0JlSW5zdGFsbGVkID0gW107XHJcbiAgICBjb25zdCBwaW5pYSA9IG1hcmtSYXcoe1xyXG4gICAgICAgIGluc3RhbGwoYXBwKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMgYWxsb3dzIGNhbGxpbmcgdXNlU3RvcmUoKSBvdXRzaWRlIG9mIGEgY29tcG9uZW50IHNldHVwIGFmdGVyXHJcbiAgICAgICAgICAgIC8vIGluc3RhbGxpbmcgcGluaWEncyBwbHVnaW5cclxuICAgICAgICAgICAgc2V0QWN0aXZlUGluaWEocGluaWEpO1xyXG4gICAgICAgICAgICBpZiAoIWlzVnVlMikge1xyXG4gICAgICAgICAgICAgICAgcGluaWEuX2EgPSBhcHA7XHJcbiAgICAgICAgICAgICAgICBhcHAucHJvdmlkZShwaW5pYVN5bWJvbCwgcGluaWEpO1xyXG4gICAgICAgICAgICAgICAgYXBwLmNvbmZpZy5nbG9iYWxQcm9wZXJ0aWVzLiRwaW5pYSA9IHBpbmlhO1xyXG4gICAgICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgICAgICAgICAgICAgIGlmIChVU0VfREVWVE9PTFMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWdpc3RlclBpbmlhRGV2dG9vbHMoYXBwLCBwaW5pYSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0b0JlSW5zdGFsbGVkLmZvckVhY2goKHBsdWdpbikgPT4gX3AucHVzaChwbHVnaW4pKTtcclxuICAgICAgICAgICAgICAgIHRvQmVJbnN0YWxsZWQgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXNlKHBsdWdpbikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2EgJiYgIWlzVnVlMikge1xyXG4gICAgICAgICAgICAgICAgdG9CZUluc3RhbGxlZC5wdXNoKHBsdWdpbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBfcC5wdXNoKHBsdWdpbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBfcCxcclxuICAgICAgICAvLyBpdCdzIGFjdHVhbGx5IHVuZGVmaW5lZCBoZXJlXHJcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgICAgIF9hOiBudWxsLFxyXG4gICAgICAgIF9lOiBzY29wZSxcclxuICAgICAgICBfczogbmV3IE1hcCgpLFxyXG4gICAgICAgIHN0YXRlLFxyXG4gICAgfSk7XHJcbiAgICAvLyBwaW5pYSBkZXZ0b29scyByZWx5IG9uIGRldiBvbmx5IGZlYXR1cmVzIHNvIHRoZXkgY2Fubm90IGJlIGZvcmNlZCB1bmxlc3NcclxuICAgIC8vIHRoZSBkZXYgYnVpbGQgb2YgVnVlIGlzIHVzZWQuIEF2b2lkIG9sZCBicm93c2VycyBsaWtlIElFMTEuXHJcbiAgICBpZiAoVVNFX0RFVlRPT0xTICYmIHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBwaW5pYS51c2UoZGV2dG9vbHNQbHVnaW4pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBpbmlhO1xyXG59XG5cbi8qKlxyXG4gKiBDaGVja3MgaWYgYSBmdW5jdGlvbiBpcyBhIGBTdG9yZURlZmluaXRpb25gLlxyXG4gKlxyXG4gKiBAcGFyYW0gZm4gLSBvYmplY3QgdG8gdGVzdFxyXG4gKiBAcmV0dXJucyB0cnVlIGlmIGBmbmAgaXMgYSBTdG9yZURlZmluaXRpb25cclxuICovXHJcbmNvbnN0IGlzVXNlU3RvcmUgPSAoZm4pID0+IHtcclxuICAgIHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGZuLiRpZCA9PT0gJ3N0cmluZyc7XHJcbn07XHJcbi8qKlxyXG4gKiBNdXRhdGVzIGluIHBsYWNlIGBuZXdTdGF0ZWAgd2l0aCBgb2xkU3RhdGVgIHRvIF9ob3QgdXBkYXRlXyBpdC4gSXQgd2lsbFxyXG4gKiByZW1vdmUgYW55IGtleSBub3QgZXhpc3RpbmcgaW4gYG5ld1N0YXRlYCBhbmQgcmVjdXJzaXZlbHkgbWVyZ2UgcGxhaW5cclxuICogb2JqZWN0cy5cclxuICpcclxuICogQHBhcmFtIG5ld1N0YXRlIC0gbmV3IHN0YXRlIG9iamVjdCB0byBiZSBwYXRjaGVkXHJcbiAqIEBwYXJhbSBvbGRTdGF0ZSAtIG9sZCBzdGF0ZSB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIHBhdGNoIG5ld1N0YXRlXHJcbiAqIEByZXR1cm5zIC0gbmV3U3RhdGVcclxuICovXHJcbmZ1bmN0aW9uIHBhdGNoT2JqZWN0KG5ld1N0YXRlLCBvbGRTdGF0ZSkge1xyXG4gICAgLy8gbm8gbmVlZCB0byBnbyB0aHJvdWdoIHN5bWJvbHMgYmVjYXVzZSB0aGV5IGNhbm5vdCBiZSBzZXJpYWxpemVkIGFueXdheVxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2xkU3RhdGUpIHtcclxuICAgICAgICBjb25zdCBzdWJQYXRjaCA9IG9sZFN0YXRlW2tleV07XHJcbiAgICAgICAgLy8gc2tpcCB0aGUgd2hvbGUgc3ViIHRyZWVcclxuICAgICAgICBpZiAoIShrZXkgaW4gbmV3U3RhdGUpKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0YXJnZXRWYWx1ZSA9IG5ld1N0YXRlW2tleV07XHJcbiAgICAgICAgaWYgKGlzUGxhaW5PYmplY3QodGFyZ2V0VmFsdWUpICYmXHJcbiAgICAgICAgICAgIGlzUGxhaW5PYmplY3Qoc3ViUGF0Y2gpICYmXHJcbiAgICAgICAgICAgICFpc1JlZihzdWJQYXRjaCkgJiZcclxuICAgICAgICAgICAgIWlzUmVhY3RpdmUoc3ViUGF0Y2gpKSB7XHJcbiAgICAgICAgICAgIG5ld1N0YXRlW2tleV0gPSBwYXRjaE9iamVjdCh0YXJnZXRWYWx1ZSwgc3ViUGF0Y2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gb2JqZWN0cyBhcmUgZWl0aGVyIGEgYml0IG1vcmUgY29tcGxleCAoZS5nLiByZWZzKSBvciBwcmltaXRpdmVzLCBzbyB3ZVxyXG4gICAgICAgICAgICAvLyBqdXN0IHNldCB0aGUgd2hvbGUgdGhpbmdcclxuICAgICAgICAgICAgaWYgKGlzVnVlMikge1xyXG4gICAgICAgICAgICAgICAgc2V0KG5ld1N0YXRlLCBrZXksIHN1YlBhdGNoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlW2tleV0gPSBzdWJQYXRjaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBuZXdTdGF0ZTtcclxufVxyXG4vKipcclxuICogQ3JlYXRlcyBhbiBfYWNjZXB0XyBmdW5jdGlvbiB0byBwYXNzIHRvIGBpbXBvcnQubWV0YS5ob3RgIGluIFZpdGUgYXBwbGljYXRpb25zLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGBqc1xyXG4gKiBjb25zdCB1c2VVc2VyID0gZGVmaW5lU3RvcmUoLi4uKVxyXG4gKiBpZiAoaW1wb3J0Lm1ldGEuaG90KSB7XHJcbiAqICAgaW1wb3J0Lm1ldGEuaG90LmFjY2VwdChhY2NlcHRITVJVcGRhdGUodXNlVXNlciwgaW1wb3J0Lm1ldGEuaG90KSlcclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogQHBhcmFtIGluaXRpYWxVc2VTdG9yZSAtIHJldHVybiBvZiB0aGUgZGVmaW5lU3RvcmUgdG8gaG90IHVwZGF0ZVxyXG4gKiBAcGFyYW0gaG90IC0gYGltcG9ydC5tZXRhLmhvdGBcclxuICovXHJcbmZ1bmN0aW9uIGFjY2VwdEhNUlVwZGF0ZShpbml0aWFsVXNlU3RvcmUsIGhvdCkge1xyXG4gICAgLy8gc3RyaXAgYXMgbXVjaCBhcyBwb3NzaWJsZSBmcm9tIGlpZmUucHJvZFxyXG4gICAgaWYgKCEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykpIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4geyB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChuZXdNb2R1bGUpID0+IHtcclxuICAgICAgICBjb25zdCBwaW5pYSA9IGhvdC5kYXRhLnBpbmlhIHx8IGluaXRpYWxVc2VTdG9yZS5fcGluaWE7XHJcbiAgICAgICAgaWYgKCFwaW5pYSkge1xyXG4gICAgICAgICAgICAvLyB0aGlzIHN0b3JlIGlzIHN0aWxsIG5vdCB1c2VkXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcHJlc2VydmUgdGhlIHBpbmlhIGluc3RhbmNlIGFjcm9zcyBsb2Fkc1xyXG4gICAgICAgIGhvdC5kYXRhLnBpbmlhID0gcGluaWE7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2dvdCBkYXRhJywgbmV3U3RvcmUpXHJcbiAgICAgICAgZm9yIChjb25zdCBleHBvcnROYW1lIGluIG5ld01vZHVsZSkge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VTdG9yZSA9IG5ld01vZHVsZVtleHBvcnROYW1lXTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NoZWNraW5nIGZvcicsIGV4cG9ydE5hbWUpXHJcbiAgICAgICAgICAgIGlmIChpc1VzZVN0b3JlKHVzZVN0b3JlKSAmJiBwaW5pYS5fcy5oYXModXNlU3RvcmUuJGlkKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0FjY2VwdGluZyB1cGRhdGUgZm9yJywgdXNlU3RvcmUuJGlkKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSB1c2VTdG9yZS4kaWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWQgIT09IGluaXRpYWxVc2VTdG9yZS4kaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFRoZSBpZCBvZiB0aGUgc3RvcmUgY2hhbmdlZCBmcm9tIFwiJHtpbml0aWFsVXNlU3RvcmUuJGlkfVwiIHRvIFwiJHtpZH1cIi4gUmVsb2FkaW5nLmApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBpbXBvcnQubWV0YS5ob3QuaW52YWxpZGF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhvdC5pbnZhbGlkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ1N0b3JlID0gcGluaWEuX3MuZ2V0KGlkKTtcclxuICAgICAgICAgICAgICAgIGlmICghZXhpc3RpbmdTdG9yZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbUGluaWFdOiBza2lwcGluZyBobXIgYmVjYXVzZSBzdG9yZSBkb2Vzbid0IGV4aXN0IHlldGApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHVzZVN0b3JlKHBpbmlhLCBleGlzdGluZ1N0b3JlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cblxuY29uc3Qgbm9vcCA9ICgpID0+IHsgfTtcclxuZnVuY3Rpb24gYWRkU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbnMsIGNhbGxiYWNrLCBkZXRhY2hlZCwgb25DbGVhbnVwID0gbm9vcCkge1xyXG4gICAgc3Vic2NyaXB0aW9ucy5wdXNoKGNhbGxiYWNrKTtcclxuICAgIGNvbnN0IHJlbW92ZVN1YnNjcmlwdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBpZHggPSBzdWJzY3JpcHRpb25zLmluZGV4T2YoY2FsbGJhY2spO1xyXG4gICAgICAgIGlmIChpZHggPiAtMSkge1xyXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25zLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgICAgICBvbkNsZWFudXAoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgaWYgKCFkZXRhY2hlZCAmJiBnZXRDdXJyZW50U2NvcGUoKSkge1xyXG4gICAgICAgIG9uU2NvcGVEaXNwb3NlKHJlbW92ZVN1YnNjcmlwdGlvbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVtb3ZlU3Vic2NyaXB0aW9uO1xyXG59XHJcbmZ1bmN0aW9uIHRyaWdnZXJTdWJzY3JpcHRpb25zKHN1YnNjcmlwdGlvbnMsIC4uLmFyZ3MpIHtcclxuICAgIHN1YnNjcmlwdGlvbnMuc2xpY2UoKS5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xyXG4gICAgICAgIGNhbGxiYWNrKC4uLmFyZ3MpO1xyXG4gICAgfSk7XHJcbn1cblxuZnVuY3Rpb24gbWVyZ2VSZWFjdGl2ZU9iamVjdHModGFyZ2V0LCBwYXRjaFRvQXBwbHkpIHtcclxuICAgIC8vIEhhbmRsZSBNYXAgaW5zdGFuY2VzXHJcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgTWFwICYmIHBhdGNoVG9BcHBseSBpbnN0YW5jZW9mIE1hcCkge1xyXG4gICAgICAgIHBhdGNoVG9BcHBseS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuc2V0KGtleSwgdmFsdWUpKTtcclxuICAgIH1cclxuICAgIC8vIEhhbmRsZSBTZXQgaW5zdGFuY2VzXHJcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgU2V0ICYmIHBhdGNoVG9BcHBseSBpbnN0YW5jZW9mIFNldCkge1xyXG4gICAgICAgIHBhdGNoVG9BcHBseS5mb3JFYWNoKHRhcmdldC5hZGQsIHRhcmdldCk7XHJcbiAgICB9XHJcbiAgICAvLyBubyBuZWVkIHRvIGdvIHRocm91Z2ggc3ltYm9scyBiZWNhdXNlIHRoZXkgY2Fubm90IGJlIHNlcmlhbGl6ZWQgYW55d2F5XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBwYXRjaFRvQXBwbHkpIHtcclxuICAgICAgICBpZiAoIXBhdGNoVG9BcHBseS5oYXNPd25Qcm9wZXJ0eShrZXkpKVxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICBjb25zdCBzdWJQYXRjaCA9IHBhdGNoVG9BcHBseVtrZXldO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFZhbHVlID0gdGFyZ2V0W2tleV07XHJcbiAgICAgICAgaWYgKGlzUGxhaW5PYmplY3QodGFyZ2V0VmFsdWUpICYmXHJcbiAgICAgICAgICAgIGlzUGxhaW5PYmplY3Qoc3ViUGF0Y2gpICYmXHJcbiAgICAgICAgICAgIHRhcmdldC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmXHJcbiAgICAgICAgICAgICFpc1JlZihzdWJQYXRjaCkgJiZcclxuICAgICAgICAgICAgIWlzUmVhY3RpdmUoc3ViUGF0Y2gpKSB7XHJcbiAgICAgICAgICAgIC8vIE5PVEU6IGhlcmUgSSB3YW50ZWQgdG8gd2FybiBhYm91dCBpbmNvbnNpc3RlbnQgdHlwZXMgYnV0IGl0J3Mgbm90IHBvc3NpYmxlIGJlY2F1c2UgaW4gc2V0dXAgc3RvcmVzIG9uZSBtaWdodFxyXG4gICAgICAgICAgICAvLyBzdGFydCB0aGUgdmFsdWUgb2YgYSBwcm9wZXJ0eSBhcyBhIGNlcnRhaW4gdHlwZSBlLmcuIGEgTWFwLCBhbmQgdGhlbiBmb3Igc29tZSByZWFzb24sIGR1cmluZyBTU1IsIGNoYW5nZSB0aGF0XHJcbiAgICAgICAgICAgIC8vIHRvIGB1bmRlZmluZWRgLiBXaGVuIHRyeWluZyB0byBoeWRyYXRlLCB3ZSB3YW50IHRvIG92ZXJyaWRlIHRoZSBNYXAgd2l0aCBgdW5kZWZpbmVkYC5cclxuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBtZXJnZVJlYWN0aXZlT2JqZWN0cyh0YXJnZXRWYWx1ZSwgc3ViUGF0Y2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogc3ViUGF0Y2ggaXMgYSB2YWxpZCB2YWx1ZVxyXG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHN1YlBhdGNoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuY29uc3Qgc2tpcEh5ZHJhdGVTeW1ib2wgPSAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJylcclxuICAgID8gU3ltYm9sKCdwaW5pYTpza2lwSHlkcmF0aW9uJylcclxuICAgIDogLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gU3ltYm9sKCk7XHJcbmNvbnN0IHNraXBIeWRyYXRlTWFwID0gLyojX19QVVJFX18qLyBuZXcgV2Vha01hcCgpO1xyXG4vKipcclxuICogVGVsbHMgUGluaWEgdG8gc2tpcCB0aGUgaHlkcmF0aW9uIHByb2Nlc3Mgb2YgYSBnaXZlbiBvYmplY3QuIFRoaXMgaXMgdXNlZnVsIGluIHNldHVwIHN0b3JlcyAob25seSkgd2hlbiB5b3UgcmV0dXJuIGFcclxuICogc3RhdGVmdWwgb2JqZWN0IGluIHRoZSBzdG9yZSBidXQgaXQgaXNuJ3QgcmVhbGx5IHN0YXRlLiBlLmcuIHJldHVybmluZyBhIHJvdXRlciBpbnN0YW5jZSBpbiBhIHNldHVwIHN0b3JlLlxyXG4gKlxyXG4gKiBAcGFyYW0gb2JqIC0gdGFyZ2V0IG9iamVjdFxyXG4gKiBAcmV0dXJucyBvYmpcclxuICovXHJcbmZ1bmN0aW9uIHNraXBIeWRyYXRlKG9iaikge1xyXG4gICAgcmV0dXJuIGlzVnVlMlxyXG4gICAgICAgID8gLy8gaW4gQHZ1ZS9jb21wb3NpdGlvbi1hcGksIHRoZSByZWZzIGFyZSBzZWFsZWQgc28gZGVmaW5lUHJvcGVydHkgZG9lc24ndCB3b3JrLi4uXHJcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIHNraXBIeWRyYXRlTWFwLnNldChvYmosIDEpICYmIG9ialxyXG4gICAgICAgIDogT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgc2tpcEh5ZHJhdGVTeW1ib2wsIHt9KTtcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIGEgdmFsdWUgc2hvdWxkIGJlIGh5ZHJhdGVkXHJcbiAqXHJcbiAqIEBwYXJhbSBvYmogLSB0YXJnZXQgdmFyaWFibGVcclxuICogQHJldHVybnMgdHJ1ZSBpZiBgb2JqYCBzaG91bGQgYmUgaHlkcmF0ZWRcclxuICovXHJcbmZ1bmN0aW9uIHNob3VsZEh5ZHJhdGUob2JqKSB7XHJcbiAgICByZXR1cm4gaXNWdWUyXHJcbiAgICAgICAgPyAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyAhc2tpcEh5ZHJhdGVNYXAuaGFzKG9iailcclxuICAgICAgICA6ICFpc1BsYWluT2JqZWN0KG9iaikgfHwgIW9iai5oYXNPd25Qcm9wZXJ0eShza2lwSHlkcmF0ZVN5bWJvbCk7XHJcbn1cclxuY29uc3QgeyBhc3NpZ24gfSA9IE9iamVjdDtcclxuZnVuY3Rpb24gaXNDb21wdXRlZChvKSB7XHJcbiAgICByZXR1cm4gISEoaXNSZWYobykgJiYgby5lZmZlY3QpO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbnNTdG9yZShpZCwgb3B0aW9ucywgcGluaWEsIGhvdCkge1xyXG4gICAgY29uc3QgeyBzdGF0ZSwgYWN0aW9ucywgZ2V0dGVycyB9ID0gb3B0aW9ucztcclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHBpbmlhLnN0YXRlLnZhbHVlW2lkXTtcclxuICAgIGxldCBzdG9yZTtcclxuICAgIGZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgICAgIGlmICghaW5pdGlhbFN0YXRlICYmICghKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHx8ICFob3QpKSB7XHJcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgICAgICBpZiAoaXNWdWUyKSB7XHJcbiAgICAgICAgICAgICAgICBzZXQocGluaWEuc3RhdGUudmFsdWUsIGlkLCBzdGF0ZSA/IHN0YXRlKCkgOiB7fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwaW5pYS5zdGF0ZS52YWx1ZVtpZF0gPSBzdGF0ZSA/IHN0YXRlKCkgOiB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBhdm9pZCBjcmVhdGluZyBhIHN0YXRlIGluIHBpbmlhLnN0YXRlLnZhbHVlXHJcbiAgICAgICAgY29uc3QgbG9jYWxTdGF0ZSA9IChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSAmJiBob3RcclxuICAgICAgICAgICAgPyAvLyB1c2UgcmVmKCkgdG8gdW53cmFwIHJlZnMgaW5zaWRlIHN0YXRlIFRPRE86IGNoZWNrIGlmIHRoaXMgaXMgc3RpbGwgbmVjZXNzYXJ5XHJcbiAgICAgICAgICAgICAgICB0b1JlZnMocmVmKHN0YXRlID8gc3RhdGUoKSA6IHt9KS52YWx1ZSlcclxuICAgICAgICAgICAgOiB0b1JlZnMocGluaWEuc3RhdGUudmFsdWVbaWRdKTtcclxuICAgICAgICByZXR1cm4gYXNzaWduKGxvY2FsU3RhdGUsIGFjdGlvbnMsIE9iamVjdC5rZXlzKGdldHRlcnMgfHwge30pLnJlZHVjZSgoY29tcHV0ZWRHZXR0ZXJzLCBuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgJiYgbmFtZSBpbiBsb2NhbFN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFvwn42NXTogQSBnZXR0ZXIgY2Fubm90IGhhdmUgdGhlIHNhbWUgbmFtZSBhcyBhbm90aGVyIHN0YXRlIHByb3BlcnR5LiBSZW5hbWUgb25lIG9mIHRoZW0uIEZvdW5kIHdpdGggXCIke25hbWV9XCIgaW4gc3RvcmUgXCIke2lkfVwiLmApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbXB1dGVkR2V0dGVyc1tuYW1lXSA9IG1hcmtSYXcoY29tcHV0ZWQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlUGluaWEocGluaWEpO1xyXG4gICAgICAgICAgICAgICAgLy8gaXQgd2FzIGNyZWF0ZWQganVzdCBiZWZvcmVcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gcGluaWEuX3MuZ2V0KGlkKTtcclxuICAgICAgICAgICAgICAgIC8vIGFsbG93IGNyb3NzIHVzaW5nIHN0b3Jlc1xyXG4gICAgICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICAgICAgICAgICAgICAgIGlmIChpc1Z1ZTIgJiYgIXN0b3JlLl9yKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiBnZXR0ZXJzIVtuYW1lXS5jYWxsKGNvbnRleHQsIGNvbnRleHQpXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBhdm9pZCByZWFkaW5nIHRoZSBnZXR0ZXIgd2hpbGUgYXNzaWduaW5nIHdpdGggYSBnbG9iYWwgdmFyaWFibGVcclxuICAgICAgICAgICAgICAgIHJldHVybiBnZXR0ZXJzW25hbWVdLmNhbGwoc3RvcmUsIHN0b3JlKTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gY29tcHV0ZWRHZXR0ZXJzO1xyXG4gICAgICAgIH0sIHt9KSk7XHJcbiAgICB9XHJcbiAgICBzdG9yZSA9IGNyZWF0ZVNldHVwU3RvcmUoaWQsIHNldHVwLCBvcHRpb25zLCBwaW5pYSwgaG90LCB0cnVlKTtcclxuICAgIHJldHVybiBzdG9yZTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVTZXR1cFN0b3JlKCRpZCwgc2V0dXAsIG9wdGlvbnMgPSB7fSwgcGluaWEsIGhvdCwgaXNPcHRpb25zU3RvcmUpIHtcclxuICAgIGxldCBzY29wZTtcclxuICAgIGNvbnN0IG9wdGlvbnNGb3JQbHVnaW4gPSBhc3NpZ24oeyBhY3Rpb25zOiB7fSB9LCBvcHRpb25zKTtcclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgaWYgKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSAmJiAhcGluaWEuX2UuYWN0aXZlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQaW5pYSBkZXN0cm95ZWQnKTtcclxuICAgIH1cclxuICAgIC8vIHdhdGNoZXIgb3B0aW9ucyBmb3IgJHN1YnNjcmliZVxyXG4gICAgY29uc3QgJHN1YnNjcmliZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgZGVlcDogdHJ1ZSxcclxuICAgICAgICAvLyBmbHVzaDogJ3Bvc3QnLFxyXG4gICAgfTtcclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpICYmICFpc1Z1ZTIpIHtcclxuICAgICAgICAkc3Vic2NyaWJlT3B0aW9ucy5vblRyaWdnZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgICAgICAgICAgaWYgKGlzTGlzdGVuaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlckV2ZW50cyA9IGV2ZW50O1xyXG4gICAgICAgICAgICAgICAgLy8gYXZvaWQgdHJpZ2dlcmluZyB0aGlzIHdoaWxlIHRoZSBzdG9yZSBpcyBiZWluZyBidWlsdCBhbmQgdGhlIHN0YXRlIGlzIGJlaW5nIHNldCBpbiBwaW5pYVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzTGlzdGVuaW5nID09IGZhbHNlICYmICFzdG9yZS5faG90VXBkYXRpbmcpIHtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBwYXRjaCBzZW5kIGFsbCB0aGUgZXZlbnRzIHRvZ2V0aGVyIGxhdGVyXHJcbiAgICAgICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGVidWdnZXJFdmVudHMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVidWdnZXJFdmVudHMucHVzaChldmVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCfwn42NIGRlYnVnZ2VyRXZlbnRzIHNob3VsZCBiZSBhbiBhcnJheS4gVGhpcyBpcyBtb3N0IGxpa2VseSBhbiBpbnRlcm5hbCBQaW5pYSBidWcuJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8gaW50ZXJuYWwgc3RhdGVcclxuICAgIGxldCBpc0xpc3RlbmluZzsgLy8gc2V0IHRvIHRydWUgYXQgdGhlIGVuZFxyXG4gICAgbGV0IGlzU3luY0xpc3RlbmluZzsgLy8gc2V0IHRvIHRydWUgYXQgdGhlIGVuZFxyXG4gICAgbGV0IHN1YnNjcmlwdGlvbnMgPSBtYXJrUmF3KFtdKTtcclxuICAgIGxldCBhY3Rpb25TdWJzY3JpcHRpb25zID0gbWFya1JhdyhbXSk7XHJcbiAgICBsZXQgZGVidWdnZXJFdmVudHM7XHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSBwaW5pYS5zdGF0ZS52YWx1ZVskaWRdO1xyXG4gICAgLy8gYXZvaWQgc2V0dGluZyB0aGUgc3RhdGUgZm9yIG9wdGlvbiBzdG9yZXMgaWYgaXQgaXMgc2V0XHJcbiAgICAvLyBieSB0aGUgc2V0dXBcclxuICAgIGlmICghaXNPcHRpb25zU3RvcmUgJiYgIWluaXRpYWxTdGF0ZSAmJiAoIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB8fCAhaG90KSkge1xyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgIGlmIChpc1Z1ZTIpIHtcclxuICAgICAgICAgICAgc2V0KHBpbmlhLnN0YXRlLnZhbHVlLCAkaWQsIHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHBpbmlhLnN0YXRlLnZhbHVlWyRpZF0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBob3RTdGF0ZSA9IHJlZih7fSk7XHJcbiAgICAvLyBhdm9pZCB0cmlnZ2VyaW5nIHRvbyBtYW55IGxpc3RlbmVyc1xyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3BpbmlhL2lzc3Vlcy8xMTI5XHJcbiAgICBsZXQgYWN0aXZlTGlzdGVuZXI7XHJcbiAgICBmdW5jdGlvbiAkcGF0Y2gocGFydGlhbFN0YXRlT3JNdXRhdG9yKSB7XHJcbiAgICAgICAgbGV0IHN1YnNjcmlwdGlvbk11dGF0aW9uO1xyXG4gICAgICAgIGlzTGlzdGVuaW5nID0gaXNTeW5jTGlzdGVuaW5nID0gZmFsc2U7XHJcbiAgICAgICAgLy8gcmVzZXQgdGhlIGRlYnVnZ2VyIGV2ZW50cyBzaW5jZSBwYXRjaGVzIGFyZSBzeW5jXHJcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgICAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpKSB7XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyRXZlbnRzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgcGFydGlhbFN0YXRlT3JNdXRhdG9yID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHBhcnRpYWxTdGF0ZU9yTXV0YXRvcihwaW5pYS5zdGF0ZS52YWx1ZVskaWRdKTtcclxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uTXV0YXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBNdXRhdGlvblR5cGUucGF0Y2hGdW5jdGlvbixcclxuICAgICAgICAgICAgICAgIHN0b3JlSWQ6ICRpZCxcclxuICAgICAgICAgICAgICAgIGV2ZW50czogZGVidWdnZXJFdmVudHMsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBtZXJnZVJlYWN0aXZlT2JqZWN0cyhwaW5pYS5zdGF0ZS52YWx1ZVskaWRdLCBwYXJ0aWFsU3RhdGVPck11dGF0b3IpO1xyXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25NdXRhdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE11dGF0aW9uVHlwZS5wYXRjaE9iamVjdCxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHBhcnRpYWxTdGF0ZU9yTXV0YXRvcixcclxuICAgICAgICAgICAgICAgIHN0b3JlSWQ6ICRpZCxcclxuICAgICAgICAgICAgICAgIGV2ZW50czogZGVidWdnZXJFdmVudHMsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG15TGlzdGVuZXJJZCA9IChhY3RpdmVMaXN0ZW5lciA9IFN5bWJvbCgpKTtcclxuICAgICAgICBuZXh0VGljaygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYWN0aXZlTGlzdGVuZXIgPT09IG15TGlzdGVuZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgaXNMaXN0ZW5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaXNTeW5jTGlzdGVuaW5nID0gdHJ1ZTtcclxuICAgICAgICAvLyBiZWNhdXNlIHdlIHBhdXNlZCB0aGUgd2F0Y2hlciwgd2UgbmVlZCB0byBtYW51YWxseSBjYWxsIHRoZSBzdWJzY3JpcHRpb25zXHJcbiAgICAgICAgdHJpZ2dlclN1YnNjcmlwdGlvbnMoc3Vic2NyaXB0aW9ucywgc3Vic2NyaXB0aW9uTXV0YXRpb24sIHBpbmlhLnN0YXRlLnZhbHVlWyRpZF0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgJHJlc2V0ID0gaXNPcHRpb25zU3RvcmVcclxuICAgICAgICA/IGZ1bmN0aW9uICRyZXNldCgpIHtcclxuICAgICAgICAgICAgY29uc3QgeyBzdGF0ZSB9ID0gb3B0aW9ucztcclxuICAgICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBzdGF0ZSA/IHN0YXRlKCkgOiB7fTtcclxuICAgICAgICAgICAgLy8gd2UgdXNlIGEgcGF0Y2ggdG8gZ3JvdXAgYWxsIGNoYW5nZXMgaW50byBvbmUgc2luZ2xlIHN1YnNjcmlwdGlvblxyXG4gICAgICAgICAgICB0aGlzLiRwYXRjaCgoJHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhc3NpZ24oJHN0YXRlLCBuZXdTdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICA6IC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgICAgICAgICAgIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKVxyXG4gICAgICAgICAgICAgICAgPyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGDwn42NOiBTdG9yZSBcIiR7JGlkfVwiIGlzIGJ1aWx0IHVzaW5nIHRoZSBzZXR1cCBzeW50YXggYW5kIGRvZXMgbm90IGltcGxlbWVudCAkcmVzZXQoKS5gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDogbm9vcDtcclxuICAgIGZ1bmN0aW9uICRkaXNwb3NlKCkge1xyXG4gICAgICAgIHNjb3BlLnN0b3AoKTtcclxuICAgICAgICBzdWJzY3JpcHRpb25zID0gW107XHJcbiAgICAgICAgYWN0aW9uU3Vic2NyaXB0aW9ucyA9IFtdO1xyXG4gICAgICAgIHBpbmlhLl9zLmRlbGV0ZSgkaWQpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBXcmFwcyBhbiBhY3Rpb24gdG8gaGFuZGxlIHN1YnNjcmlwdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWUgLSBuYW1lIG9mIHRoZSBhY3Rpb25cclxuICAgICAqIEBwYXJhbSBhY3Rpb24gLSBhY3Rpb24gdG8gd3JhcFxyXG4gICAgICogQHJldHVybnMgYSB3cmFwcGVkIGFjdGlvbiB0byBoYW5kbGUgc3Vic2NyaXB0aW9uc1xyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiB3cmFwQWN0aW9uKG5hbWUsIGFjdGlvbikge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNldEFjdGl2ZVBpbmlhKHBpbmlhKTtcclxuICAgICAgICAgICAgY29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgY29uc3QgYWZ0ZXJDYWxsYmFja0xpc3QgPSBbXTtcclxuICAgICAgICAgICAgY29uc3Qgb25FcnJvckNhbGxiYWNrTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBhZnRlcihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgYWZ0ZXJDYWxsYmFja0xpc3QucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gb25FcnJvcihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgb25FcnJvckNhbGxiYWNrTGlzdC5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICAgICAgICAgIHRyaWdnZXJTdWJzY3JpcHRpb25zKGFjdGlvblN1YnNjcmlwdGlvbnMsIHtcclxuICAgICAgICAgICAgICAgIGFyZ3MsXHJcbiAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgc3RvcmUsXHJcbiAgICAgICAgICAgICAgICBhZnRlcixcclxuICAgICAgICAgICAgICAgIG9uRXJyb3IsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgcmV0O1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmV0ID0gYWN0aW9uLmFwcGx5KHRoaXMgJiYgdGhpcy4kaWQgPT09ICRpZCA/IHRoaXMgOiBzdG9yZSwgYXJncyk7XHJcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgc3luYyBlcnJvcnNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRyaWdnZXJTdWJzY3JpcHRpb25zKG9uRXJyb3JDYWxsYmFja0xpc3QsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0XHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlclN1YnNjcmlwdGlvbnMoYWZ0ZXJDYWxsYmFja0xpc3QsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyU3Vic2NyaXB0aW9ucyhvbkVycm9yQ2FsbGJhY2tMaXN0LCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHRyaWdnZXIgYWZ0ZXIgY2FsbGJhY2tzXHJcbiAgICAgICAgICAgIHRyaWdnZXJTdWJzY3JpcHRpb25zKGFmdGVyQ2FsbGJhY2tMaXN0LCByZXQpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCBfaG1yUGF5bG9hZCA9IC8qI19fUFVSRV9fKi8gbWFya1Jhdyh7XHJcbiAgICAgICAgYWN0aW9uczoge30sXHJcbiAgICAgICAgZ2V0dGVyczoge30sXHJcbiAgICAgICAgc3RhdGU6IFtdLFxyXG4gICAgICAgIGhvdFN0YXRlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwYXJ0aWFsU3RvcmUgPSB7XHJcbiAgICAgICAgX3A6IHBpbmlhLFxyXG4gICAgICAgIC8vIF9zOiBzY29wZSxcclxuICAgICAgICAkaWQsXHJcbiAgICAgICAgJG9uQWN0aW9uOiBhZGRTdWJzY3JpcHRpb24uYmluZChudWxsLCBhY3Rpb25TdWJzY3JpcHRpb25zKSxcclxuICAgICAgICAkcGF0Y2gsXHJcbiAgICAgICAgJHJlc2V0LFxyXG4gICAgICAgICRzdWJzY3JpYmUoY2FsbGJhY2ssIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgICAgICBjb25zdCByZW1vdmVTdWJzY3JpcHRpb24gPSBhZGRTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9ucywgY2FsbGJhY2ssIG9wdGlvbnMuZGV0YWNoZWQsICgpID0+IHN0b3BXYXRjaGVyKCkpO1xyXG4gICAgICAgICAgICBjb25zdCBzdG9wV2F0Y2hlciA9IHNjb3BlLnJ1bigoKSA9PiB3YXRjaCgoKSA9PiBwaW5pYS5zdGF0ZS52YWx1ZVskaWRdLCAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmZsdXNoID09PSAnc3luYycgPyBpc1N5bmNMaXN0ZW5pbmcgOiBpc0xpc3RlbmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVJZDogJGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBNdXRhdGlvblR5cGUuZGlyZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudHM6IGRlYnVnZ2VyRXZlbnRzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHN0YXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgYXNzaWduKHt9LCAkc3Vic2NyaWJlT3B0aW9ucywgb3B0aW9ucykpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlbW92ZVN1YnNjcmlwdGlvbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgICRkaXNwb3NlLFxyXG4gICAgfTtcclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgaWYgKGlzVnVlMikge1xyXG4gICAgICAgIC8vIHN0YXJ0IGFzIG5vbiByZWFkeVxyXG4gICAgICAgIHBhcnRpYWxTdG9yZS5fciA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3RvcmUgPSByZWFjdGl2ZSgocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgfHwgVVNFX0RFVlRPT0xTXHJcbiAgICAgICAgPyBhc3NpZ24oe1xyXG4gICAgICAgICAgICBfaG1yUGF5bG9hZCxcclxuICAgICAgICAgICAgX2N1c3RvbVByb3BlcnRpZXM6IG1hcmtSYXcobmV3IFNldCgpKSwgLy8gZGV2dG9vbHMgY3VzdG9tIHByb3BlcnRpZXNcclxuICAgICAgICB9LCBwYXJ0aWFsU3RvcmVcclxuICAgICAgICAvLyBtdXN0IGJlIGFkZGVkIGxhdGVyXHJcbiAgICAgICAgLy8gc2V0dXBTdG9yZVxyXG4gICAgICAgIClcclxuICAgICAgICA6IHBhcnRpYWxTdG9yZSk7XHJcbiAgICAvLyBzdG9yZSB0aGUgcGFydGlhbCBzdG9yZSBub3cgc28gdGhlIHNldHVwIG9mIHN0b3JlcyBjYW4gaW5zdGFudGlhdGUgZWFjaCBvdGhlciBiZWZvcmUgdGhleSBhcmUgZmluaXNoZWQgd2l0aG91dFxyXG4gICAgLy8gY3JlYXRpbmcgaW5maW5pdGUgbG9vcHMuXHJcbiAgICBwaW5pYS5fcy5zZXQoJGlkLCBzdG9yZSk7XHJcbiAgICAvLyBUT0RPOiBpZGVhIGNyZWF0ZSBza2lwU2VyaWFsaXplIHRoYXQgbWFya3MgcHJvcGVydGllcyBhcyBub24gc2VyaWFsaXphYmxlIGFuZCB0aGV5IGFyZSBza2lwcGVkXHJcbiAgICBjb25zdCBzZXR1cFN0b3JlID0gcGluaWEuX2UucnVuKCgpID0+IHtcclxuICAgICAgICBzY29wZSA9IGVmZmVjdFNjb3BlKCk7XHJcbiAgICAgICAgcmV0dXJuIHNjb3BlLnJ1bigoKSA9PiBzZXR1cCgpKTtcclxuICAgIH0pO1xyXG4gICAgLy8gb3ZlcndyaXRlIGV4aXN0aW5nIGFjdGlvbnMgdG8gc3VwcG9ydCAkb25BY3Rpb25cclxuICAgIGZvciAoY29uc3Qga2V5IGluIHNldHVwU3RvcmUpIHtcclxuICAgICAgICBjb25zdCBwcm9wID0gc2V0dXBTdG9yZVtrZXldO1xyXG4gICAgICAgIGlmICgoaXNSZWYocHJvcCkgJiYgIWlzQ29tcHV0ZWQocHJvcCkpIHx8IGlzUmVhY3RpdmUocHJvcCkpIHtcclxuICAgICAgICAgICAgLy8gbWFyayBpdCBhcyBhIHBpZWNlIG9mIHN0YXRlIHRvIGJlIHNlcmlhbGl6ZWRcclxuICAgICAgICAgICAgaWYgKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSAmJiBob3QpIHtcclxuICAgICAgICAgICAgICAgIHNldChob3RTdGF0ZS52YWx1ZSwga2V5LCB0b1JlZihzZXR1cFN0b3JlLCBrZXkpKTtcclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZU9wdGlvblN0b3JlIGRpcmVjdGx5IHNldHMgdGhlIHN0YXRlIGluIHBpbmlhLnN0YXRlLnZhbHVlIHNvIHdlXHJcbiAgICAgICAgICAgICAgICAvLyBjYW4ganVzdCBza2lwIHRoYXRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICghaXNPcHRpb25zU3RvcmUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGluIHNldHVwIHN0b3JlcyB3ZSBtdXN0IGh5ZHJhdGUgdGhlIHN0YXRlIGFuZCBzeW5jIHBpbmlhIHN0YXRlIHRyZWUgd2l0aCB0aGUgcmVmcyB0aGUgdXNlciBqdXN0IGNyZWF0ZWRcclxuICAgICAgICAgICAgICAgIGlmIChpbml0aWFsU3RhdGUgJiYgc2hvdWxkSHlkcmF0ZShwcm9wKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1JlZihwcm9wKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wLnZhbHVlID0gaW5pdGlhbFN0YXRlW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm9iYWJseSBhIHJlYWN0aXZlIG9iamVjdCwgbGV0cyByZWN1cnNpdmVseSBhc3NpZ25cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogcHJvcCBpcyB1bmtub3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlUmVhY3RpdmVPYmplY3RzKHByb3AsIGluaXRpYWxTdGF0ZVtrZXldKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB0cmFuc2ZlciB0aGUgcmVmIHRvIHRoZSBwaW5pYSBzdGF0ZSB0byBrZWVwIGV2ZXJ5dGhpbmcgaW4gc3luY1xyXG4gICAgICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNWdWUyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0KHBpbmlhLnN0YXRlLnZhbHVlWyRpZF0sIGtleSwgcHJvcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwaW5pYS5zdGF0ZS52YWx1ZVskaWRdW2tleV0gPSBwcm9wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICAgICAgICAgIGlmICgocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykpIHtcclxuICAgICAgICAgICAgICAgIF9obXJQYXlsb2FkLnN0YXRlLnB1c2goa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBhY3Rpb25cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHByb3AgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogd2UgYXJlIG92ZXJyaWRpbmcgdGhlIGZ1bmN0aW9uIHdlIGF2b2lkIHdyYXBwaW5nIGlmXHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvblZhbHVlID0gKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpICYmIGhvdCA/IHByb3AgOiB3cmFwQWN0aW9uKGtleSwgcHJvcCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMgYSBob3QgbW9kdWxlIHJlcGxhY2VtZW50IHN0b3JlIGJlY2F1c2UgdGhlIGhvdFVwZGF0ZSBtZXRob2QgbmVlZHNcclxuICAgICAgICAgICAgLy8gdG8gZG8gaXQgd2l0aCB0aGUgcmlnaHQgY29udGV4dFxyXG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICAgICAgaWYgKGlzVnVlMikge1xyXG4gICAgICAgICAgICAgICAgc2V0KHNldHVwU3RvcmUsIGtleSwgYWN0aW9uVmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgICAgICAgICAgICAgc2V0dXBTdG9yZVtrZXldID0gYWN0aW9uVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgICAgICAgICAgaWYgKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgX2htclBheWxvYWQuYWN0aW9uc1trZXldID0gcHJvcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBsaXN0IGFjdGlvbnMgc28gdGhleSBjYW4gYmUgdXNlZCBpbiBwbHVnaW5zXHJcbiAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgICAgICAgICAgb3B0aW9uc0ZvclBsdWdpbi5hY3Rpb25zW2tleV0gPSBwcm9wO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykpIHtcclxuICAgICAgICAgICAgLy8gYWRkIGdldHRlcnMgZm9yIGRldnRvb2xzXHJcbiAgICAgICAgICAgIGlmIChpc0NvbXB1dGVkKHByb3ApKSB7XHJcbiAgICAgICAgICAgICAgICBfaG1yUGF5bG9hZC5nZXR0ZXJzW2tleV0gPSBpc09wdGlvbnNTdG9yZVxyXG4gICAgICAgICAgICAgICAgICAgID8gLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmdldHRlcnNba2V5XVxyXG4gICAgICAgICAgICAgICAgICAgIDogcHJvcDtcclxuICAgICAgICAgICAgICAgIGlmIChJU19DTElFTlQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZXR0ZXJzID0gc2V0dXBTdG9yZS5fZ2V0dGVycyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBzYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzZXR1cFN0b3JlLl9nZXR0ZXJzID0gbWFya1JhdyhbXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdldHRlcnMucHVzaChrZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gYWRkIHRoZSBzdGF0ZSwgZ2V0dGVycywgYW5kIGFjdGlvbiBwcm9wZXJ0aWVzXHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgIGlmIChpc1Z1ZTIpIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhzZXR1cFN0b3JlKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgc2V0KHN0b3JlLCBrZXksIHNldHVwU3RvcmVba2V5XSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhc3NpZ24oc3RvcmUsIHNldHVwU3RvcmUpO1xyXG4gICAgICAgIC8vIGFsbG93cyByZXRyaWV2aW5nIHJlYWN0aXZlIG9iamVjdHMgd2l0aCBgc3RvcmVUb1JlZnMoKWAuIE11c3QgYmUgY2FsbGVkIGFmdGVyIGFzc2lnbmluZyB0byB0aGUgcmVhY3RpdmUgb2JqZWN0LlxyXG4gICAgICAgIC8vIE1ha2UgYHN0b3JlVG9SZWZzKClgIHdvcmsgd2l0aCBgcmVhY3RpdmUoKWAgIzc5OVxyXG4gICAgICAgIGFzc2lnbih0b1JhdyhzdG9yZSksIHNldHVwU3RvcmUpO1xyXG4gICAgfVxyXG4gICAgLy8gdXNlIHRoaXMgaW5zdGVhZCBvZiBhIGNvbXB1dGVkIHdpdGggc2V0dGVyIHRvIGJlIGFibGUgdG8gY3JlYXRlIGl0IGFueXdoZXJlXHJcbiAgICAvLyB3aXRob3V0IGxpbmtpbmcgdGhlIGNvbXB1dGVkIGxpZmVzcGFuIHRvIHdoZXJldmVyIHRoZSBzdG9yZSBpcyBmaXJzdFxyXG4gICAgLy8gY3JlYXRlZC5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdG9yZSwgJyRzdGF0ZScsIHtcclxuICAgICAgICBnZXQ6ICgpID0+ICgocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgJiYgaG90ID8gaG90U3RhdGUudmFsdWUgOiBwaW5pYS5zdGF0ZS52YWx1ZVskaWRdKSxcclxuICAgICAgICBzZXQ6IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICAgICAgaWYgKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSAmJiBob3QpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY2Fubm90IHNldCBob3RTdGF0ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRwYXRjaCgoJHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhc3NpZ24oJHN0YXRlLCBzdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIC8vIGFkZCB0aGUgaG90VXBkYXRlIGJlZm9yZSBwbHVnaW5zIHRvIGFsbG93IHRoZW0gdG8gb3ZlcnJpZGUgaXRcclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpKSB7XHJcbiAgICAgICAgc3RvcmUuX2hvdFVwZGF0ZSA9IG1hcmtSYXcoKG5ld1N0b3JlKSA9PiB7XHJcbiAgICAgICAgICAgIHN0b3JlLl9ob3RVcGRhdGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIG5ld1N0b3JlLl9obXJQYXlsb2FkLnN0YXRlLmZvckVhY2goKHN0YXRlS2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGVLZXkgaW4gc3RvcmUuJHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U3RhdGVUYXJnZXQgPSBuZXdTdG9yZS4kc3RhdGVbc3RhdGVLZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9sZFN0YXRlU291cmNlID0gc3RvcmUuJHN0YXRlW3N0YXRlS2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5ld1N0YXRlVGFyZ2V0ID09PSAnb2JqZWN0JyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1BsYWluT2JqZWN0KG5ld1N0YXRlVGFyZ2V0KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1BsYWluT2JqZWN0KG9sZFN0YXRlU291cmNlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRjaE9iamVjdChuZXdTdGF0ZVRhcmdldCwgb2xkU3RhdGVTb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNmZXIgdGhlIHJlZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTdG9yZS4kc3RhdGVbc3RhdGVLZXldID0gb2xkU3RhdGVTb3VyY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gcGF0Y2ggZGlyZWN0IGFjY2VzcyBwcm9wZXJ0aWVzIHRvIGFsbG93IHN0b3JlLnN0YXRlUHJvcGVydHkgdG8gd29yayBhc1xyXG4gICAgICAgICAgICAgICAgLy8gc3RvcmUuJHN0YXRlLnN0YXRlUHJvcGVydHlcclxuICAgICAgICAgICAgICAgIHNldChzdG9yZSwgc3RhdGVLZXksIHRvUmVmKG5ld1N0b3JlLiRzdGF0ZSwgc3RhdGVLZXkpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBkZWxldGVkIHN0YXRlIHByb3BlcnRpZXNcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3RvcmUuJHN0YXRlKS5mb3JFYWNoKChzdGF0ZUtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoc3RhdGVLZXkgaW4gbmV3U3RvcmUuJHN0YXRlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbChzdG9yZSwgc3RhdGVLZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gYXZvaWQgZGV2dG9vbHMgbG9nZ2luZyB0aGlzIGFzIGEgbXV0YXRpb25cclxuICAgICAgICAgICAgaXNMaXN0ZW5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgaXNTeW5jTGlzdGVuaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHBpbmlhLnN0YXRlLnZhbHVlWyRpZF0gPSB0b1JlZihuZXdTdG9yZS5faG1yUGF5bG9hZCwgJ2hvdFN0YXRlJyk7XHJcbiAgICAgICAgICAgIGlzU3luY0xpc3RlbmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIG5leHRUaWNrKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpc0xpc3RlbmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFjdGlvbk5hbWUgaW4gbmV3U3RvcmUuX2htclBheWxvYWQuYWN0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gbmV3U3RvcmVbYWN0aW9uTmFtZV07XHJcbiAgICAgICAgICAgICAgICBzZXQoc3RvcmUsIGFjdGlvbk5hbWUsIHdyYXBBY3Rpb24oYWN0aW9uTmFtZSwgYWN0aW9uKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gVE9ETzogZG9lcyB0aGlzIHdvcmsgaW4gYm90aCBzZXR1cCBhbmQgb3B0aW9uIHN0b3JlP1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGdldHRlck5hbWUgaW4gbmV3U3RvcmUuX2htclBheWxvYWQuZ2V0dGVycykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ2V0dGVyID0gbmV3U3RvcmUuX2htclBheWxvYWQuZ2V0dGVyc1tnZXR0ZXJOYW1lXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdldHRlclZhbHVlID0gaXNPcHRpb25zU3RvcmVcclxuICAgICAgICAgICAgICAgICAgICA/IC8vIHNwZWNpYWwgaGFuZGxpbmcgb2Ygb3B0aW9ucyBhcGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcHV0ZWQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlUGluaWEocGluaWEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldHRlci5jYWxsKHN0b3JlLCBzdG9yZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgOiBnZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICBzZXQoc3RvcmUsIGdldHRlck5hbWUsIGdldHRlclZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyByZW1vdmUgZGVsZXRlZCBnZXR0ZXJzXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHN0b3JlLl9obXJQYXlsb2FkLmdldHRlcnMpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoa2V5IGluIG5ld1N0b3JlLl9obXJQYXlsb2FkLmdldHRlcnMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsKHN0b3JlLCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gcmVtb3ZlIG9sZCBhY3Rpb25zXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHN0b3JlLl9obXJQYXlsb2FkLmFjdGlvbnMpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoa2V5IGluIG5ld1N0b3JlLl9obXJQYXlsb2FkLmFjdGlvbnMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsKHN0b3JlLCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSB2YWx1ZXMgdXNlZCBpbiBkZXZ0b29scyBhbmQgdG8gYWxsb3cgZGVsZXRpbmcgbmV3IHByb3BlcnRpZXMgbGF0ZXIgb25cclxuICAgICAgICAgICAgc3RvcmUuX2htclBheWxvYWQgPSBuZXdTdG9yZS5faG1yUGF5bG9hZDtcclxuICAgICAgICAgICAgc3RvcmUuX2dldHRlcnMgPSBuZXdTdG9yZS5fZ2V0dGVycztcclxuICAgICAgICAgICAgc3RvcmUuX2hvdFVwZGF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoVVNFX0RFVlRPT0xTKSB7XHJcbiAgICAgICAgY29uc3Qgbm9uRW51bWVyYWJsZSA9IHtcclxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gYXZvaWQgd2FybmluZyBvbiBkZXZ0b29scyB0cnlpbmcgdG8gZGlzcGxheSB0aGlzIHByb3BlcnR5XHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgWydfcCcsICdfaG1yUGF5bG9hZCcsICdfZ2V0dGVycycsICdfY3VzdG9tUHJvcGVydGllcyddLmZvckVhY2goKHApID0+IHtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN0b3JlLCBwLCBhc3NpZ24oeyB2YWx1ZTogc3RvcmVbcF0gfSwgbm9uRW51bWVyYWJsZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICBpZiAoaXNWdWUyKSB7XHJcbiAgICAgICAgLy8gbWFyayB0aGUgc3RvcmUgYXMgcmVhZHkgYmVmb3JlIHBsdWdpbnNcclxuICAgICAgICBzdG9yZS5fciA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAvLyBhcHBseSBhbGwgcGx1Z2luc1xyXG4gICAgcGluaWEuX3AuZm9yRWFjaCgoZXh0ZW5kZXIpID0+IHtcclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gICAgICAgIGlmIChVU0VfREVWVE9PTFMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9ucyA9IHNjb3BlLnJ1bigoKSA9PiBleHRlbmRlcih7XHJcbiAgICAgICAgICAgICAgICBzdG9yZSxcclxuICAgICAgICAgICAgICAgIGFwcDogcGluaWEuX2EsXHJcbiAgICAgICAgICAgICAgICBwaW5pYSxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNGb3JQbHVnaW4sXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZXh0ZW5zaW9ucyB8fCB7fSkuZm9yRWFjaCgoa2V5KSA9PiBzdG9yZS5fY3VzdG9tUHJvcGVydGllcy5hZGQoa2V5KSk7XHJcbiAgICAgICAgICAgIGFzc2lnbihzdG9yZSwgZXh0ZW5zaW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhc3NpZ24oc3RvcmUsIHNjb3BlLnJ1bigoKSA9PiBleHRlbmRlcih7XHJcbiAgICAgICAgICAgICAgICBzdG9yZSxcclxuICAgICAgICAgICAgICAgIGFwcDogcGluaWEuX2EsXHJcbiAgICAgICAgICAgICAgICBwaW5pYSxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNGb3JQbHVnaW4sXHJcbiAgICAgICAgICAgIH0pKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpICYmXHJcbiAgICAgICAgc3RvcmUuJHN0YXRlICYmXHJcbiAgICAgICAgdHlwZW9mIHN0b3JlLiRzdGF0ZSA9PT0gJ29iamVjdCcgJiZcclxuICAgICAgICB0eXBlb2Ygc3RvcmUuJHN0YXRlLmNvbnN0cnVjdG9yID09PSAnZnVuY3Rpb24nICYmXHJcbiAgICAgICAgIXN0b3JlLiRzdGF0ZS5jb25zdHJ1Y3Rvci50b1N0cmluZygpLmluY2x1ZGVzKCdbbmF0aXZlIGNvZGVdJykpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oYFvwn42NXTogVGhlIFwic3RhdGVcIiBtdXN0IGJlIGEgcGxhaW4gb2JqZWN0LiBJdCBjYW5ub3QgYmVcXG5gICtcclxuICAgICAgICAgICAgYFxcdHN0YXRlOiAoKSA9PiBuZXcgTXlDbGFzcygpXFxuYCArXHJcbiAgICAgICAgICAgIGBGb3VuZCBpbiBzdG9yZSBcIiR7c3RvcmUuJGlkfVwiLmApO1xyXG4gICAgfVxyXG4gICAgLy8gb25seSBhcHBseSBoeWRyYXRlIHRvIG9wdGlvbiBzdG9yZXMgd2l0aCBhbiBpbml0aWFsIHN0YXRlIGluIHBpbmlhXHJcbiAgICBpZiAoaW5pdGlhbFN0YXRlICYmXHJcbiAgICAgICAgaXNPcHRpb25zU3RvcmUgJiZcclxuICAgICAgICBvcHRpb25zLmh5ZHJhdGUpIHtcclxuICAgICAgICBvcHRpb25zLmh5ZHJhdGUoc3RvcmUuJHN0YXRlLCBpbml0aWFsU3RhdGUpO1xyXG4gICAgfVxyXG4gICAgaXNMaXN0ZW5pbmcgPSB0cnVlO1xyXG4gICAgaXNTeW5jTGlzdGVuaW5nID0gdHJ1ZTtcclxuICAgIHJldHVybiBzdG9yZTtcclxufVxyXG5mdW5jdGlvbiBkZWZpbmVTdG9yZShcclxuLy8gVE9ETzogYWRkIHByb3BlciB0eXBlcyBmcm9tIGFib3ZlXHJcbmlkT3JPcHRpb25zLCBzZXR1cCwgc2V0dXBPcHRpb25zKSB7XHJcbiAgICBsZXQgaWQ7XHJcbiAgICBsZXQgb3B0aW9ucztcclxuICAgIGNvbnN0IGlzU2V0dXBTdG9yZSA9IHR5cGVvZiBzZXR1cCA9PT0gJ2Z1bmN0aW9uJztcclxuICAgIGlmICh0eXBlb2YgaWRPck9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgaWQgPSBpZE9yT3B0aW9ucztcclxuICAgICAgICAvLyB0aGUgb3B0aW9uIHN0b3JlIHNldHVwIHdpbGwgY29udGFpbiB0aGUgYWN0dWFsIG9wdGlvbnMgaW4gdGhpcyBjYXNlXHJcbiAgICAgICAgb3B0aW9ucyA9IGlzU2V0dXBTdG9yZSA/IHNldHVwT3B0aW9ucyA6IHNldHVwO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgb3B0aW9ucyA9IGlkT3JPcHRpb25zO1xyXG4gICAgICAgIGlkID0gaWRPck9wdGlvbnMuaWQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1c2VTdG9yZShwaW5pYSwgaG90KSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEluc3RhbmNlID0gZ2V0Q3VycmVudEluc3RhbmNlKCk7XHJcbiAgICAgICAgcGluaWEgPVxyXG4gICAgICAgICAgICAvLyBpbiB0ZXN0IG1vZGUsIGlnbm9yZSB0aGUgYXJndW1lbnQgcHJvdmlkZWQgYXMgd2UgY2FuIGFsd2F5cyByZXRyaWV2ZSBhXHJcbiAgICAgICAgICAgIC8vIHBpbmlhIGluc3RhbmNlIHdpdGggZ2V0QWN0aXZlUGluaWEoKVxyXG4gICAgICAgICAgICAoKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcpICYmIGFjdGl2ZVBpbmlhICYmIGFjdGl2ZVBpbmlhLl90ZXN0aW5nID8gbnVsbCA6IHBpbmlhKSB8fFxyXG4gICAgICAgICAgICAgICAgKGN1cnJlbnRJbnN0YW5jZSAmJiBpbmplY3QocGluaWFTeW1ib2wsIG51bGwpKTtcclxuICAgICAgICBpZiAocGluaWEpXHJcbiAgICAgICAgICAgIHNldEFjdGl2ZVBpbmlhKHBpbmlhKTtcclxuICAgICAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpICYmICFhY3RpdmVQaW5pYSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFvwn42NXTogZ2V0QWN0aXZlUGluaWEgd2FzIGNhbGxlZCB3aXRoIG5vIGFjdGl2ZSBQaW5pYS4gRGlkIHlvdSBmb3JnZXQgdG8gaW5zdGFsbCBwaW5pYT9cXG5gICtcclxuICAgICAgICAgICAgICAgIGBcXHRjb25zdCBwaW5pYSA9IGNyZWF0ZVBpbmlhKClcXG5gICtcclxuICAgICAgICAgICAgICAgIGBcXHRhcHAudXNlKHBpbmlhKVxcbmAgK1xyXG4gICAgICAgICAgICAgICAgYFRoaXMgd2lsbCBmYWlsIGluIHByb2R1Y3Rpb24uYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBpbmlhID0gYWN0aXZlUGluaWE7XHJcbiAgICAgICAgaWYgKCFwaW5pYS5fcy5oYXMoaWQpKSB7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0aW5nIHRoZSBzdG9yZSByZWdpc3RlcnMgaXQgaW4gYHBpbmlhLl9zYFxyXG4gICAgICAgICAgICBpZiAoaXNTZXR1cFN0b3JlKSB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVTZXR1cFN0b3JlKGlkLCBzZXR1cCwgb3B0aW9ucywgcGluaWEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlT3B0aW9uc1N0b3JlKGlkLCBvcHRpb25zLCBwaW5pYSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgICAgICAgICAgaWYgKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogbm90IHRoZSByaWdodCBpbmZlcnJlZCB0eXBlXHJcbiAgICAgICAgICAgICAgICB1c2VTdG9yZS5fcGluaWEgPSBwaW5pYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdG9yZSA9IHBpbmlhLl9zLmdldChpZCk7XHJcbiAgICAgICAgaWYgKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSAmJiBob3QpIHtcclxuICAgICAgICAgICAgY29uc3QgaG90SWQgPSAnX19ob3Q6JyArIGlkO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdTdG9yZSA9IGlzU2V0dXBTdG9yZVxyXG4gICAgICAgICAgICAgICAgPyBjcmVhdGVTZXR1cFN0b3JlKGhvdElkLCBzZXR1cCwgb3B0aW9ucywgcGluaWEsIHRydWUpXHJcbiAgICAgICAgICAgICAgICA6IGNyZWF0ZU9wdGlvbnNTdG9yZShob3RJZCwgYXNzaWduKHt9LCBvcHRpb25zKSwgcGluaWEsIHRydWUpO1xyXG4gICAgICAgICAgICBob3QuX2hvdFVwZGF0ZShuZXdTdG9yZSk7XHJcbiAgICAgICAgICAgIC8vIGNsZWFudXAgdGhlIHN0YXRlIHByb3BlcnRpZXMgYW5kIHRoZSBzdG9yZSBmcm9tIHRoZSBjYWNoZVxyXG4gICAgICAgICAgICBkZWxldGUgcGluaWEuc3RhdGUudmFsdWVbaG90SWRdO1xyXG4gICAgICAgICAgICBwaW5pYS5fcy5kZWxldGUoaG90SWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzYXZlIHN0b3JlcyBpbiBpbnN0YW5jZXMgdG8gYWNjZXNzIHRoZW0gZGV2dG9vbHNcclxuICAgICAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpICYmXHJcbiAgICAgICAgICAgIElTX0NMSUVOVCAmJlxyXG4gICAgICAgICAgICBjdXJyZW50SW5zdGFuY2UgJiZcclxuICAgICAgICAgICAgY3VycmVudEluc3RhbmNlLnByb3h5ICYmXHJcbiAgICAgICAgICAgIC8vIGF2b2lkIGFkZGluZyBzdG9yZXMgdGhhdCBhcmUganVzdCBidWlsdCBmb3IgaG90IG1vZHVsZSByZXBsYWNlbWVudFxyXG4gICAgICAgICAgICAhaG90KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZtID0gY3VycmVudEluc3RhbmNlLnByb3h5O1xyXG4gICAgICAgICAgICBjb25zdCBjYWNoZSA9ICdfcFN0b3JlcycgaW4gdm0gPyB2bS5fcFN0b3JlcyA6ICh2bS5fcFN0b3JlcyA9IHt9KTtcclxuICAgICAgICAgICAgY2FjaGVbaWRdID0gc3RvcmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFN0b3JlR2VuZXJpYyBjYW5ub3QgYmUgY2FzdGVkIHRvd2FyZHMgU3RvcmVcclxuICAgICAgICByZXR1cm4gc3RvcmU7XHJcbiAgICB9XHJcbiAgICB1c2VTdG9yZS4kaWQgPSBpZDtcclxuICAgIHJldHVybiB1c2VTdG9yZTtcclxufVxuXG5sZXQgbWFwU3RvcmVTdWZmaXggPSAnU3RvcmUnO1xyXG4vKipcclxuICogQ2hhbmdlcyB0aGUgc3VmZml4IGFkZGVkIGJ5IGBtYXBTdG9yZXMoKWAuIENhbiBiZSBzZXQgdG8gYW4gZW1wdHkgc3RyaW5nLlxyXG4gKiBEZWZhdWx0cyB0byBgXCJTdG9yZVwiYC4gTWFrZSBzdXJlIHRvIGV4dGVuZCB0aGUgTWFwU3RvcmVzQ3VzdG9taXphdGlvblxyXG4gKiBpbnRlcmZhY2UgaWYgeW91IGFyZSB1c2luZyBUeXBlU2NyaXB0LlxyXG4gKlxyXG4gKiBAcGFyYW0gc3VmZml4IC0gbmV3IHN1ZmZpeFxyXG4gKi9cclxuZnVuY3Rpb24gc2V0TWFwU3RvcmVTdWZmaXgoc3VmZml4IC8vIGNvdWxkIGJlICdTdG9yZScgYnV0IHRoYXQgd291bGQgYmUgYW5ub3lpbmcgZm9yIEpTXHJcbikge1xyXG4gICAgbWFwU3RvcmVTdWZmaXggPSBzdWZmaXg7XHJcbn1cclxuLyoqXHJcbiAqIEFsbG93cyB1c2luZyBzdG9yZXMgd2l0aG91dCB0aGUgY29tcG9zaXRpb24gQVBJIChgc2V0dXAoKWApIGJ5IGdlbmVyYXRpbmcgYW5cclxuICogb2JqZWN0IHRvIGJlIHNwcmVhZCBpbiB0aGUgYGNvbXB1dGVkYCBmaWVsZCBvZiBhIGNvbXBvbmVudC4gSXQgYWNjZXB0cyBhIGxpc3RcclxuICogb2Ygc3RvcmUgZGVmaW5pdGlvbnMuXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGBgYGpzXHJcbiAqIGV4cG9ydCBkZWZhdWx0IHtcclxuICogICBjb21wdXRlZDoge1xyXG4gKiAgICAgLy8gb3RoZXIgY29tcHV0ZWQgcHJvcGVydGllc1xyXG4gKiAgICAgLi4ubWFwU3RvcmVzKHVzZVVzZXJTdG9yZSwgdXNlQ2FydFN0b3JlKVxyXG4gKiAgIH0sXHJcbiAqXHJcbiAqICAgY3JlYXRlZCgpIHtcclxuICogICAgIHRoaXMudXNlclN0b3JlIC8vIHN0b3JlIHdpdGggaWQgXCJ1c2VyXCJcclxuICogICAgIHRoaXMuY2FydFN0b3JlIC8vIHN0b3JlIHdpdGggaWQgXCJjYXJ0XCJcclxuICogICB9XHJcbiAqIH1cclxuICogYGBgXHJcbiAqXHJcbiAqIEBwYXJhbSBzdG9yZXMgLSBsaXN0IG9mIHN0b3JlcyB0byBtYXAgdG8gYW4gb2JqZWN0XHJcbiAqL1xyXG5mdW5jdGlvbiBtYXBTdG9yZXMoLi4uc3RvcmVzKSB7XHJcbiAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpICYmIEFycmF5LmlzQXJyYXkoc3RvcmVzWzBdKSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihgW/CfjY1dOiBEaXJlY3RseSBwYXNzIGFsbCBzdG9yZXMgdG8gXCJtYXBTdG9yZXMoKVwiIHdpdGhvdXQgcHV0dGluZyB0aGVtIGluIGFuIGFycmF5OlxcbmAgK1xyXG4gICAgICAgICAgICBgUmVwbGFjZVxcbmAgK1xyXG4gICAgICAgICAgICBgXFx0bWFwU3RvcmVzKFt1c2VBdXRoU3RvcmUsIHVzZUNhcnRTdG9yZV0pXFxuYCArXHJcbiAgICAgICAgICAgIGB3aXRoXFxuYCArXHJcbiAgICAgICAgICAgIGBcXHRtYXBTdG9yZXModXNlQXV0aFN0b3JlLCB1c2VDYXJ0U3RvcmUpXFxuYCArXHJcbiAgICAgICAgICAgIGBUaGlzIHdpbGwgZmFpbCBpbiBwcm9kdWN0aW9uIGlmIG5vdCBmaXhlZC5gKTtcclxuICAgICAgICBzdG9yZXMgPSBzdG9yZXNbMF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RvcmVzLnJlZHVjZSgocmVkdWNlZCwgdXNlU3RvcmUpID0+IHtcclxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiAkaWQgaXMgYWRkZWQgYnkgZGVmaW5lU3RvcmVcclxuICAgICAgICByZWR1Y2VkW3VzZVN0b3JlLiRpZCArIG1hcFN0b3JlU3VmZml4XSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZVN0b3JlKHRoaXMuJHBpbmlhKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiByZWR1Y2VkO1xyXG4gICAgfSwge30pO1xyXG59XHJcbi8qKlxyXG4gKiBBbGxvd3MgdXNpbmcgc3RhdGUgYW5kIGdldHRlcnMgZnJvbSBvbmUgc3RvcmUgd2l0aG91dCB1c2luZyB0aGUgY29tcG9zaXRpb25cclxuICogQVBJIChgc2V0dXAoKWApIGJ5IGdlbmVyYXRpbmcgYW4gb2JqZWN0IHRvIGJlIHNwcmVhZCBpbiB0aGUgYGNvbXB1dGVkYCBmaWVsZFxyXG4gKiBvZiBhIGNvbXBvbmVudC5cclxuICpcclxuICogQHBhcmFtIHVzZVN0b3JlIC0gc3RvcmUgdG8gbWFwIGZyb21cclxuICogQHBhcmFtIGtleXNPck1hcHBlciAtIGFycmF5IG9yIG9iamVjdFxyXG4gKi9cclxuZnVuY3Rpb24gbWFwU3RhdGUodXNlU3RvcmUsIGtleXNPck1hcHBlcikge1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoa2V5c09yTWFwcGVyKVxyXG4gICAgICAgID8ga2V5c09yTWFwcGVyLnJlZHVjZSgocmVkdWNlZCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJlZHVjZWRba2V5XSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VTdG9yZSh0aGlzLiRwaW5pYSlba2V5XTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlZHVjZWQ7XHJcbiAgICAgICAgfSwge30pXHJcbiAgICAgICAgOiBPYmplY3Qua2V5cyhrZXlzT3JNYXBwZXIpLnJlZHVjZSgocmVkdWNlZCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgICAgICAgICAgcmVkdWNlZFtrZXldID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSh0aGlzLiRwaW5pYSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdG9yZUtleSA9IGtleXNPck1hcHBlcltrZXldO1xyXG4gICAgICAgICAgICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIFRTIGlzIHVuYWJsZSB0byBpbmZlciB0aGUgdHlwZSBvZiBzdG9yZUtleSB0byBiZSBhXHJcbiAgICAgICAgICAgICAgICAvLyBmdW5jdGlvblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBzdG9yZUtleSA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgID8gc3RvcmVLZXkuY2FsbCh0aGlzLCBzdG9yZSlcclxuICAgICAgICAgICAgICAgICAgICA6IHN0b3JlW3N0b3JlS2V5XTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlZHVjZWQ7XHJcbiAgICAgICAgfSwge30pO1xyXG59XHJcbi8qKlxyXG4gKiBBbGlhcyBmb3IgYG1hcFN0YXRlKClgLiBZb3Ugc2hvdWxkIHVzZSBgbWFwU3RhdGUoKWAgaW5zdGVhZC5cclxuICogQGRlcHJlY2F0ZWQgdXNlIGBtYXBTdGF0ZSgpYCBpbnN0ZWFkLlxyXG4gKi9cclxuY29uc3QgbWFwR2V0dGVycyA9IG1hcFN0YXRlO1xyXG4vKipcclxuICogQWxsb3dzIGRpcmVjdGx5IHVzaW5nIGFjdGlvbnMgZnJvbSB5b3VyIHN0b3JlIHdpdGhvdXQgdXNpbmcgdGhlIGNvbXBvc2l0aW9uXHJcbiAqIEFQSSAoYHNldHVwKClgKSBieSBnZW5lcmF0aW5nIGFuIG9iamVjdCB0byBiZSBzcHJlYWQgaW4gdGhlIGBtZXRob2RzYCBmaWVsZFxyXG4gKiBvZiBhIGNvbXBvbmVudC5cclxuICpcclxuICogQHBhcmFtIHVzZVN0b3JlIC0gc3RvcmUgdG8gbWFwIGZyb21cclxuICogQHBhcmFtIGtleXNPck1hcHBlciAtIGFycmF5IG9yIG9iamVjdFxyXG4gKi9cclxuZnVuY3Rpb24gbWFwQWN0aW9ucyh1c2VTdG9yZSwga2V5c09yTWFwcGVyKSB7XHJcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShrZXlzT3JNYXBwZXIpXHJcbiAgICAgICAgPyBrZXlzT3JNYXBwZXIucmVkdWNlKChyZWR1Y2VkLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgICAgICAgICByZWR1Y2VkW2tleV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZVN0b3JlKHRoaXMuJHBpbmlhKVtrZXldKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gcmVkdWNlZDtcclxuICAgICAgICB9LCB7fSlcclxuICAgICAgICA6IE9iamVjdC5rZXlzKGtleXNPck1hcHBlcikucmVkdWNlKChyZWR1Y2VkLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgICAgICAgICByZWR1Y2VkW2tleV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZVN0b3JlKHRoaXMuJHBpbmlhKVtrZXlzT3JNYXBwZXJba2V5XV0oLi4uYXJncyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiByZWR1Y2VkO1xyXG4gICAgICAgIH0sIHt9KTtcclxufVxyXG4vKipcclxuICogQWxsb3dzIHVzaW5nIHN0YXRlIGFuZCBnZXR0ZXJzIGZyb20gb25lIHN0b3JlIHdpdGhvdXQgdXNpbmcgdGhlIGNvbXBvc2l0aW9uXHJcbiAqIEFQSSAoYHNldHVwKClgKSBieSBnZW5lcmF0aW5nIGFuIG9iamVjdCB0byBiZSBzcHJlYWQgaW4gdGhlIGBjb21wdXRlZGAgZmllbGRcclxuICogb2YgYSBjb21wb25lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB1c2VTdG9yZSAtIHN0b3JlIHRvIG1hcCBmcm9tXHJcbiAqIEBwYXJhbSBrZXlzT3JNYXBwZXIgLSBhcnJheSBvciBvYmplY3RcclxuICovXHJcbmZ1bmN0aW9uIG1hcFdyaXRhYmxlU3RhdGUodXNlU3RvcmUsIGtleXNPck1hcHBlcikge1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoa2V5c09yTWFwcGVyKVxyXG4gICAgICAgID8ga2V5c09yTWFwcGVyLnJlZHVjZSgocmVkdWNlZCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgcmVkdWNlZFtrZXldID0ge1xyXG4gICAgICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VTdG9yZSh0aGlzLiRwaW5pYSlba2V5XTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzZXQodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIGVhc2llciB0byB0eXBlIGl0IGhlcmUgYXMgYW55XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh1c2VTdG9yZSh0aGlzLiRwaW5pYSlba2V5XSA9IHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiByZWR1Y2VkO1xyXG4gICAgICAgIH0sIHt9KVxyXG4gICAgICAgIDogT2JqZWN0LmtleXMoa2V5c09yTWFwcGVyKS5yZWR1Y2UoKHJlZHVjZWQsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJlZHVjZWRba2V5XSA9IHtcclxuICAgICAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXNlU3RvcmUodGhpcy4kcGluaWEpW2tleXNPck1hcHBlcltrZXldXTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzZXQodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIGVhc2llciB0byB0eXBlIGl0IGhlcmUgYXMgYW55XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh1c2VTdG9yZSh0aGlzLiRwaW5pYSlba2V5c09yTWFwcGVyW2tleV1dID0gdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlZHVjZWQ7XHJcbiAgICAgICAgfSwge30pO1xyXG59XG5cbi8qKlxyXG4gKiBDcmVhdGVzIGFuIG9iamVjdCBvZiByZWZlcmVuY2VzIHdpdGggYWxsIHRoZSBzdGF0ZSwgZ2V0dGVycywgYW5kIHBsdWdpbi1hZGRlZFxyXG4gKiBzdGF0ZSBwcm9wZXJ0aWVzIG9mIHRoZSBzdG9yZS4gU2ltaWxhciB0byBgdG9SZWZzKClgIGJ1dCBzcGVjaWZpY2FsbHlcclxuICogZGVzaWduZWQgZm9yIFBpbmlhIHN0b3JlcyBzbyBtZXRob2RzIGFuZCBub24gcmVhY3RpdmUgcHJvcGVydGllcyBhcmVcclxuICogY29tcGxldGVseSBpZ25vcmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0gc3RvcmUgLSBzdG9yZSB0byBleHRyYWN0IHRoZSByZWZzIGZyb21cclxuICovXHJcbmZ1bmN0aW9uIHN0b3JlVG9SZWZzKHN0b3JlKSB7XHJcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3BpbmlhL2lzc3Vlcy84NTJcclxuICAgIC8vIEl0J3MgZWFzaWVyIHRvIGp1c3QgdXNlIHRvUmVmcygpIGV2ZW4gaWYgaXQgaW5jbHVkZXMgbW9yZSBzdHVmZlxyXG4gICAgaWYgKGlzVnVlMikge1xyXG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IHRvUmVmcyBpbmNsdWRlIG1ldGhvZHMgYW5kIG90aGVyc1xyXG4gICAgICAgIHJldHVybiB0b1JlZnMoc3RvcmUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgc3RvcmUgPSB0b1JhdyhzdG9yZSk7XHJcbiAgICAgICAgY29uc3QgcmVmcyA9IHt9O1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHN0b3JlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc3RvcmVba2V5XTtcclxuICAgICAgICAgICAgaWYgKGlzUmVmKHZhbHVlKSB8fCBpc1JlYWN0aXZlKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogdGhlIGtleSBpcyBzdGF0ZSBvciBnZXR0ZXJcclxuICAgICAgICAgICAgICAgIHJlZnNba2V5XSA9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLS0tXHJcbiAgICAgICAgICAgICAgICAgICAgdG9SZWYoc3RvcmUsIGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlZnM7XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIFZ1ZSAyIFBsdWdpbiB0aGF0IG11c3QgYmUgaW5zdGFsbGVkIGZvciBwaW5pYSB0byB3b3JrLiBOb3RlICoqeW91IGRvbid0IG5lZWRcclxuICogdGhpcyBwbHVnaW4gaWYgeW91IGFyZSB1c2luZyBOdXh0LmpzKiouIFVzZSB0aGUgYGJ1aWxkTW9kdWxlYCBpbnN0ZWFkOlxyXG4gKiBodHRwczovL3BpbmlhLnZ1ZWpzLm9yZy9zc3IvbnV4dC5odG1sLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGBqc1xyXG4gKiBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuICogaW1wb3J0IHsgUGluaWFWdWVQbHVnaW4sIGNyZWF0ZVBpbmlhIH0gZnJvbSAncGluaWEnXHJcbiAqXHJcbiAqIFZ1ZS51c2UoUGluaWFWdWVQbHVnaW4pXHJcbiAqIGNvbnN0IHBpbmlhID0gY3JlYXRlUGluaWEoKVxyXG4gKlxyXG4gKiBuZXcgVnVlKHtcclxuICogICBlbDogJyNhcHAnLFxyXG4gKiAgIC8vIC4uLlxyXG4gKiAgIHBpbmlhLFxyXG4gKiB9KVxyXG4gKiBgYGBcclxuICpcclxuICogQHBhcmFtIF9WdWUgLSBgVnVlYCBpbXBvcnRlZCBmcm9tICd2dWUnLlxyXG4gKi9cclxuY29uc3QgUGluaWFWdWVQbHVnaW4gPSBmdW5jdGlvbiAoX1Z1ZSkge1xyXG4gICAgLy8gRXF1aXZhbGVudCBvZlxyXG4gICAgLy8gYXBwLmNvbmZpZy5nbG9iYWxQcm9wZXJ0aWVzLiRwaW5pYSA9IHBpbmlhXHJcbiAgICBfVnVlLm1peGluKHtcclxuICAgICAgICBiZWZvcmVDcmVhdGUoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLiRvcHRpb25zO1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5waW5pYSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGluaWEgPSBvcHRpb25zLnBpbmlhO1xyXG4gICAgICAgICAgICAgICAgLy8gSEFDSzogdGFrZW4gZnJvbSBwcm92aWRlKCk6IGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy9jb21wb3NpdGlvbi1hcGkvYmxvYi9tYWluL3NyYy9hcGlzL2luamVjdC50cyNMMzFcclxuICAgICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3Byb3ZpZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvdmlkZUNhY2hlID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdfcHJvdmlkZWQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldDogKCkgPT4gcHJvdmlkZUNhY2hlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQ6ICh2KSA9PiBPYmplY3QuYXNzaWduKHByb3ZpZGVDYWNoZSwgdiksXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm92aWRlZFtwaW5pYVN5bWJvbF0gPSBwaW5pYTtcclxuICAgICAgICAgICAgICAgIC8vIHByb3BhZ2F0ZSB0aGUgcGluaWEgaW5zdGFuY2UgaW4gYW4gU1NSIGZyaWVuZGx5IHdheVxyXG4gICAgICAgICAgICAgICAgLy8gYXZvaWQgYWRkaW5nIGl0IHRvIG51eHQgdHdpY2VcclxuICAgICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuJHBpbmlhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGluaWEgPSBwaW5pYTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBpbmlhLl9hID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGlmIChJU19DTElFTlQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGFsbG93cyBjYWxsaW5nIHVzZVN0b3JlKCkgb3V0c2lkZSBvZiBhIGNvbXBvbmVudCBzZXR1cCBhZnRlclxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGluc3RhbGxpbmcgcGluaWEncyBwbHVnaW5cclxuICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVQaW5pYShwaW5pYSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoVVNFX0RFVlRPT0xTKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJQaW5pYURldnRvb2xzKHBpbmlhLl9hLCBwaW5pYSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMuJHBpbmlhICYmIG9wdGlvbnMucGFyZW50ICYmIG9wdGlvbnMucGFyZW50LiRwaW5pYSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcGluaWEgPSBvcHRpb25zLnBhcmVudC4kcGluaWE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlc3Ryb3llZCgpIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3BTdG9yZXM7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59O1xuXG5leHBvcnQgeyBNdXRhdGlvblR5cGUsIFBpbmlhVnVlUGx1Z2luLCBhY2NlcHRITVJVcGRhdGUsIGNyZWF0ZVBpbmlhLCBkZWZpbmVTdG9yZSwgZ2V0QWN0aXZlUGluaWEsIG1hcEFjdGlvbnMsIG1hcEdldHRlcnMsIG1hcFN0YXRlLCBtYXBTdG9yZXMsIG1hcFdyaXRhYmxlU3RhdGUsIHNldEFjdGl2ZVBpbmlhLCBzZXRNYXBTdG9yZVN1ZmZpeCwgc2tpcEh5ZHJhdGUsIHN0b3JlVG9SZWZzIH07XG4iLCIvLyBzdG9yZXMvY291bnRlci5qc1xuaW1wb3J0IHsgZGVmaW5lU3RvcmUgfSBmcm9tICdwaW5pYSc7XG5cbmV4cG9ydCBjb25zdCB1c2VDb3VudGVyU3RvcmUgPSBkZWZpbmVTdG9yZSgnY291bnRlcicsIHtcblx0c3RhdGU6ICgpID0+IHtcblx0XHRyZXR1cm4geyBjb3VudDogMCB9O1xuXHR9LFxuXHQvLyDkuZ/lj6/ku6Xov5nmoLflrprkuYlcblx0Ly8gc3RhdGU6ICgpID0+ICh7IGNvdW50OiAwIH0pXG5cdGFjdGlvbnM6IHtcblx0XHRpbmNyZW1lbnQoKSB7XG5cdFx0XHR0aGlzLmNvdW50Kys7XG5cdFx0fSxcblx0fSxcbn0pOyIsIjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XG5cdFx0PGltYWdlIGNsYXNzPVwibG9nb1wiIHNyYz1cImh0dHA6Ly80Ny45OC4xMjguMjU1OjMwMDEvcG5nL2xvZ28ucG5nXCI+PC9pbWFnZT5cblx0XHQ8dmlldyBjbGFzcz1cInRleHQtYXJlYVwiPlxuXHRcdFx0PHRleHQgY2xhc3M9XCJ0aXRsZVwiPnt7IHRpdGxlMSB9fTwvdGV4dD5cblx0XHRcdCA8ZGl2PkN1cnJlbnQgQ291bnQ6IHt7IGNvdW50ZXIuY291bnQgfX08L2Rpdj5cblx0XHRcdCAgPGJ1dHRvbiBAY2xpY2s9XCJvbkNsaWNrXCIgZGF0YS1ldmVudHN5bmM9XCJ0cnVlXCI+T0s8L2J1dHRvbj5cblx0XHQ8L3ZpZXc+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyBvblJlYWR5LG9uTG9hZCxvblNob3cgfSBmcm9tICdAZGNsb3VkaW8vdW5pLWFwcCdcbmltcG9ydCB7IHVzZUNvdW50ZXJTdG9yZSB9IGZyb20gJ0Avc3RvcmVzL2NvdW50ZXInXG5cblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgaWQ6IFN0cmluZyxcbiAgfSk7XG4gIFxuY29uc3QgdGl0bGUgPSBpbXBvcnQubWV0YS5lbnYuVklURV9HTE9CX0FQUF9USVRMRTtcbmNvbnN0IGNvdW50ZXIgPSB1c2VDb3VudGVyU3RvcmUoKVxuY291bnRlci5jb3VudCsrXG4vLyDoh6rliqjooaXlhajvvIEg4pyoXG5jb3VudGVyLiRwYXRjaCh7IGNvdW50OiBjb3VudGVyLmNvdW50ICsgMSB9KVxuLy8g5oiW5L2/55SoIGFjdGlvbiDku6Pmm79cbmNvdW50ZXIuaW5jcmVtZW50KClcblxuY29uc3QgdGl0bGUxID0gcmVmKCdIZWxsbycpO1xuZW1pdHM6IFtcImNsaWNrXCJdLFxuIFxub25SZWFkeSgoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdvblJlYWR5Jylcbn0pXG48L3NjcmlwdD5cbjxzdHlsZT5cbi5jb250ZW50IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sb2dvIHtcblx0aGVpZ2h0OiAyMDBycHg7XG5cdHdpZHRoOiAyMDBycHg7XG5cdG1hcmdpbi10b3A6IDIwMHJweDtcblx0bWFyZ2luLWxlZnQ6IGF1dG87XG5cdG1hcmdpbi1yaWdodDogYXV0bztcblx0bWFyZ2luLWJvdHRvbTogNTBycHg7XG59XG5cbi50ZXh0LWFyZWEge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRpdGxlIHtcblx0Zm9udC1zaXplOiAzNnJweDtcblx0Y29sb3I6ICM4ZjhmOTQ7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuXHQ8dmlldz5cblx0XHRcblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcblx0XHRcdH07XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5cbjwvc3R5bGU+XG4iLCI8c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0FwcCBMYXVuY2gnKVxyXG5cdFx0fSxcclxuXHRcdG9uU2hvdzogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdBcHAgU2hvdycpXHJcblx0XHR9LFxyXG5cdFx0b25IaWRlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0FwcCBIaWRlJylcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC8q5q+P5Liq6aG16Z2i5YWs5YWxY3NzICovXHJcblx0dW5pLXBhZ2UtYm9keSxodG1sLGJvZHl7ICBcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7ICBcclxuICAgIH1cclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbIl9zZmNfbWFpbiIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiaXNTdHJpbmciLCJnZXRDdXJyZW50SW5zdGFuY2UiLCJpc0luU1NSQ29tcG9uZW50U2V0dXAiLCJpbmplY3RIb29rIiwidGhpcyIsInQiLCJlIiwibiIsInIiLCJpIiwicyIsInUiLCJhIiwiTSIsIm0iLCJmIiwibCIsIiQiLCJ5IiwidiIsImciLCJEIiwibyIsImQiLCJjIiwiaCIsIm5vdyIsIl9jcmVhdGVDb21tZW50Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfY3JlYXRlVk5vZGUiLCJpbmplY3QiLCJNdXRhdGlvblR5cGUiLCJvcGVuIiwic3RhdGUiLCJzdG9yZSIsInRvUmF3Iiwid2F0Y2giLCJ1bnJlZiIsIm1hcmtSYXciLCJlZmZlY3RTY29wZSIsInJlZiIsImlzUmVmIiwiaXNSZWFjdGl2ZSIsImdldEN1cnJlbnRTY29wZSIsIm9uU2NvcGVEaXNwb3NlIiwidG9SZWZzIiwiY29tcHV0ZWQiLCJuZXh0VGljayIsIiRyZXNldCIsIm9wdGlvbnMiLCJyZWFjdGl2ZSIsInRvUmVmIiwiX19mX18iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkEsUUFBS0EsY0FBVTtBQUFBLElBQ2QsTUFBTTtBQUFBLEVBQ1A7OzRCQXRCQ0MsSUFpQk8sbUJBQUEsUUFBQSxFQWpCRCxPQUFNLGFBQVM7QUFBQSxNQUNwQkMsSUFBQUEsbUJBZU8sUUFBQSxFQWZELE9BQU0sVUFBUyxHQUFBO0FBQUEsUUFDcEJBLElBQUFBLG1CQUVPLFFBQUEsRUFGRCxPQUFNLGVBQWMsR0FBQTtBQUFBLFVBQ3pCQSxJQUFBQSxtQkFBc0UsU0FBQSxFQUEvRCxLQUFJLG1EQUFrRCxDQUFBO0FBQUE7UUFFOURBLElBQUFBLG1CQUVPLFFBQUEsRUFGRCxPQUFNLGlCQUFnQixHQUFBO0FBQUEsVUFDM0JBLElBQUFBLG1CQUE0RCxTQUFBLEVBQXJELEtBQUkseUNBQXdDLENBQUE7QUFBQTtRQUVwREEsSUFBQUEsbUJBT08sUUFBQSxFQVBELE9BQU0sZ0JBQWUsR0FBQTtBQUFBLFVBQzFCQSxJQUFBQSxtQkFFTyxRQUFBLEVBRkQsT0FBTSxTQUFRLEdBQUE7QUFBQSxZQUNuQkEsSUFBQUEsbUJBQThELFNBQUEsRUFBdkQsS0FBSSwyQ0FBMEMsQ0FBQTtBQUFBO1VBRXREQSxJQUFBQSxtQkFFTyxRQUFBLEVBRkQsT0FBTSxNQUFLLEdBQUE7QUFBQSxZQUNoQkEsSUFBQUEsbUJBQTJELFNBQUEsRUFBcEQsS0FBSSx3Q0FBdUMsQ0FBQTtBQUFBOzs7Ozs7QUMwT3ZELFFBQU0sV0FBVztBQ2pNakIsV0FBQSxhQUFBLE1BQUEsYUFBQSxNQUFBO0FBRUEsUUFBQSxJQUFBLFNBQUE7QUFFQSxVQUFBLFFBQUEsTUFBQSxVQUFBLEdBQUEsSUFBQTtBQUFBLElBQ0EsT0FDQTtBQUNBLGNBQUEsSUFBQSxFQUFBLE1BQUEsU0FBQSxDQUFBLEdBQUEsTUFBQSxRQUFBLENBQUE7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUtBLFdBQUEsZUFBQSxXQUFBLFNBQUE7QUFDQSxXQUFBQyxnQkFBQSxTQUFBLElBQUEsVUFBQTtBQUFBLEVBQ0E7QUFHQSxRQUFBLGFBQUEsQ0FBQSxjQUFBLENBQUEsTUFBQSxTQUFBQyxJQUFBLG1CQUFBLE1BQUE7QUFFQSxLQUFBQyxJQUFBLHlCQUFBQyxJQUFBLFdBQUEsV0FBQSxNQUFBLE1BQUE7QUFBQSxFQUNBO0FBaUJBLFFBQUEsVUFBQSwyQkFBQSxRQUFBO0FDOUZPLFdBQVMsbUJBQW1CO0FBQy9CLFdBQU87QUFBQSxNQUNILFlBQVk7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLFFBQU87QUFBQSxRQUNQLE1BQU07QUFBQSxNQUNUO0FBQUEsTUFDRCxhQUFjO0FBQUEsUUFDVjtBQUFBLFVBQ0ksUUFBUTtBQUFBLFVBQ1IsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sUUFBUTtBQUFBLFVBQ1IsTUFBTTtBQUFBLFFBQ1Q7QUFBQSxRQUNEO0FBQUEsVUFDSSxRQUFRO0FBQUEsVUFDUixNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixNQUFNO0FBQUEsUUFDVDtBQUFBLFFBQ0Q7QUFBQSxVQUNJLFFBQVE7QUFBQSxVQUNSLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLFFBQVE7QUFBQSxVQUNSLE1BQU07QUFBQSxRQUNUO0FBQUEsUUFDRDtBQUFBLFVBQ0ksUUFBUTtBQUFBLFVBQ1IsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sUUFBUTtBQUFBLFVBQ1IsTUFBTTtBQUFBLFFBQ1Q7QUFBQSxRQUNEO0FBQUEsVUFDSSxRQUFRO0FBQUEsVUFDUixNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixNQUFNO0FBQUEsUUFDVDtBQUFBLFFBQ0Q7QUFBQSxVQUNJLFFBQVE7QUFBQSxVQUNSLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLFFBQVE7QUFBQSxVQUNSLE1BQU07QUFBQSxRQUNUO0FBQUEsUUFDRDtBQUFBLFVBQ0ksUUFBUTtBQUFBLFVBQ1IsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sUUFBUTtBQUFBLFVBQ1IsTUFBTTtBQUFBLFFBQ1Q7QUFBQSxRQUNEO0FBQUEsVUFDSSxRQUFRO0FBQUEsVUFDUixNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixNQUFNO0FBQUEsUUFDVDtBQUFBLFFBQ0Q7QUFBQSxVQUNJLFFBQVE7QUFBQSxVQUNSLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLFFBQVE7QUFBQSxVQUNSLE1BQU07QUFBQSxRQUNUO0FBQUEsUUFDRDtBQUFBLFVBQ0ksUUFBUTtBQUFBLFVBQ1IsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sUUFBUTtBQUFBLFVBQ1IsTUFBTTtBQUFBLFFBQ1Q7QUFBQSxRQUNEO0FBQUEsVUFDSSxRQUFRO0FBQUEsVUFDUixNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixNQUFNO0FBQUEsUUFDVDtBQUFBLFFBQ0Q7QUFBQSxVQUNJLFFBQVE7QUFBQSxVQUNSLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLFFBQVE7QUFBQSxVQUNSLE1BQU07QUFBQSxRQUNUO0FBQUEsUUFDRDtBQUFBLFVBQ0ksUUFBUTtBQUFBLFVBQ1IsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sUUFBUTtBQUFBLFVBQ1IsTUFBTTtBQUFBLFFBQ1Q7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLEVBQ0w7Ozs7Ozs7Ozs7OztBQ3RHQSxLQUFDLFNBQVMsR0FBRSxHQUFFO0FBQXNELHVCQUFlLEVBQW1IO0FBQUEsSUFBQSxFQUFFQyxnQkFBTSxXQUFVO0FBQWMsVUFBSSxJ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QSxHQUFFLFVBQVEsV0FBVTtBQUFDLGlCQUFPLEVBQUUsS0FBSyxFQUFFO0FBQUEsUUFBQyxHQUFFQSxHQUFFLFNBQU8sU0FBU1QsSUFBRUMsSUFBRTtBQUFDLGNBQUcsQ0FBQ0Q7QUFBRSxtQkFBTyxLQUFLO0FBQUcsY0FBSUUsS0FBRSxLQUFLLE1BQU8sR0FBQ0MsS0FBRSxFQUFFSCxJQUFFQyxJQUFFLElBQUU7QUFBRSxpQkFBT0UsT0FBSUQsR0FBRSxLQUFHQyxLQUFHRDtBQUFBLFFBQUMsR0FBRU8sR0FBRSxRQUFNLFdBQVU7QUFBQyxpQkFBTyxFQUFFLEVBQUUsS0FBSyxJQUFHLElBQUk7QUFBQSxRQUFDLEdBQUVBLEdBQUUsU0FBTyxXQUFVO0FBQUMsaUJBQU8sSUFBSSxLQUFLLEtBQUssUUFBUyxDQUFBO0FBQUEsUUFBQyxHQUFFQSxHQUFFLFNBQU8sV0FBVTtBQUFDLGlCQUFPLEtBQUssUUFBTyxJQUFHLEtBQUssWUFBYSxJQUFDO0FBQUEsUUFBSSxHQUFFQSxHQUFFLGNBQVksV0FBVTtBQUFDLGlCQUFPLEtBQUssR0FBRyxZQUFXO0FBQUEsUUFBRSxHQUFFQSxHQUFFLFdBQVMsV0FBVTtBQUFDLGlCQUFPLEtBQUssR0FBRyxZQUFXO0FBQUEsUUFBRSxHQUFFRDtBQUFBLE1BQUMsRUFBQyxHQUFHLElBQUUsRUFBRTtBQUFVLGFBQU8sRUFBRSxZQUFVLEdBQUUsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxHQUFFLENBQUMsTUFBSyxDQUFDLEdBQUUsQ0FBQyxNQUFLLENBQUMsR0FBRSxDQUFDLE1BQUssQ0FBQyxHQUFFLENBQUMsTUFBSyxDQUFDLEdBQUUsQ0FBQyxNQUFLLENBQUMsR0FBRSxDQUFDLE1BQUssQ0FBQyxHQUFFLENBQUMsTUFBSyxDQUFDLENBQUMsRUFBRSxRQUFTLFNBQVNSLElBQUU7QUFBQyxVQUFFQSxHQUFFLENBQUMsQ0FBQyxJQUFFLFNBQVNDLElBQUU7QUFBQyxpQkFBTyxLQUFLLEdBQUdBLElBQUVELEdBQUUsQ0FBQyxHQUFFQSxHQUFFLENBQUMsQ0FBQztBQUFBLFFBQUM7QUFBQSxNQUFDLElBQUksRUFBRSxTQUFPLFNBQVNBLElBQUVDLElBQUU7QUFBQyxlQUFPRCxHQUFFLE9BQUtBLEdBQUVDLElBQUUsR0FBRSxDQUFDLEdBQUVELEdBQUUsS0FBRyxPQUFJO0FBQUEsTUFBQyxHQUFFLEVBQUUsU0FBTyxHQUFFLEVBQUUsVUFBUSxHQUFFLEVBQUUsT0FBSyxTQUFTQSxJQUFFO0FBQUMsZUFBTyxFQUFFLE1BQUlBLEVBQUM7QUFBQSxNQUFDLEdBQUUsRUFBRSxLQUFHLEVBQUUsQ0FBQyxHQUFFLEVBQUUsS0FBRyxHQUFFLEVBQUUsSUFBRSxJQUFHO0FBQUEsSUFBQyxDQUFDO0FBQUE7O0FDRXo3TixXQUFTLGFBQWEsTUFBTTtBQUNqQyxVQUFNcUIsT0FBTTtBQUNaLFVBQU0sT0FBTyxNQUFNLElBQUk7QUFDdkIsVUFBTSxZQUFZQSxLQUFJLE9BQU8sTUFBTSxLQUFLO0FBRXhDLFFBQUksV0FBVztBQUNiLFVBQUksUUFBUSxLQUFLO0FBQ2pCLFVBQUksU0FBUyxLQUFLLFNBQVM7QUFBSSxlQUFPLEtBQUssS0FBSyxPQUFPLE9BQU87QUFDOUQsVUFBSSxTQUFTLE1BQU0sU0FBUztBQUFJLGVBQU8sS0FBSyxLQUFLLE9BQU8sT0FBTztBQUMvRCxVQUFJLFNBQVMsTUFBTSxTQUFTO0FBQUksZUFBTyxLQUFLLEtBQUssT0FBTyxPQUFPO0FBQy9ELFVBQUksU0FBUyxNQUFNLFNBQVM7QUFBSSxlQUFPLEtBQUssS0FBSyxPQUFPLE9BQU87QUFDL0QsVUFBSSxTQUFTLEtBQUssU0FBUztBQUFHLGVBQU8sS0FBSyxLQUFLLE9BQU8sT0FBTztBQUFBLElBQ2pFLE9BQVM7QUFDTCxhQUFPLEtBQUssT0FBTyxZQUFZO0FBQUEsSUFDaEM7QUFBQSxFQUNIO0FDbUJBLFFBQUs3QixjQUFVO0FBQUEsSUFDZCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQ04sYUFBTztBQUFBLFFBQ04sWUFBWSxDQUFFO0FBQUEsUUFDZCxhQUFhLENBQUM7QUFBQTtJQUVmO0FBQUEsSUFDRCxTQUFTO0FBQUEsTUFDUixhQUFhLFdBQVc7QUFDdkIsY0FBTSxNQUFNO0FBQ1osYUFBSyxhQUFhLElBQUk7QUFDdEIsYUFBSyxjQUFjLElBQUk7QUFBQSxNQUN2QjtBQUFBLE1BQ0QsU0FBUyxTQUFVLE1BQUs7QUFDdkIsZUFBTyxhQUFhLElBQUk7QUFBQSxNQUN6QjtBQUFBLElBQ0E7QUFBQTtBQUFBLElBRUQsVUFBVTtBQUNULFdBQUssWUFBVztBQUFBLElBQ2hCO0FBQUEsRUFDRjs7NEJBekRDQyxJQTRCTyxtQkFBQSxRQUFBLEVBNUJELE9BQU0sVUFBTTtBQUFBLE1BQ2pCQyxJQUFBQSxtQkEwQk8sUUFBQSxFQTFCRCxPQUFNLFdBQVUsR0FBQTtBQUFBLFFBQ3JCQSxJQUFBQSxtQkF3Qk8sUUFBQSxFQXhCRCxPQUFNLGdCQUFlLEdBQUE7QUFBQSxVQUMxQjRCLElBQUFBLG1CQUFhLFFBQUE7QUFBQSxVQUNiNUIsSUFBQUEsbUJBU08sUUFBQSxFQVRELE9BQU0scUJBQW9CLEdBQUE7QUFBQSxZQUMvQkEsSUFBQUEsbUJBR08sUUFBQSxFQUhELE9BQU0sT0FBTSxHQUFBO0FBQUEsY0FDVSxNQUFBLFdBQVcsMkJBQXRDRCxJQUE4RztBQUFBLGdCQUFBO0FBQUEsZ0JBQUE7QUFBQTtrQkFBeEcsT0FBTTtBQUFBLGdCQUFxQztBQUFBLGdCQUFBOEIsb0JBQUEsTUFBQSxXQUFXLFNBQXVCLEtBQUEsUUFBQSxNQUFBLFdBQVcsTUFBTTtBQUFBLGdCQUFBO0FBQUE7QUFBQSxjQUFBO2NBQ3BHN0IsSUFBQUEsbUJBQXdDLFNBQUE7QUFBQSxnQkFBaEMsS0FBSyxNQUFVLFdBQUM7QUFBQTs7WUFFekJBLElBQUFBLG1CQUdPLFFBQUEsRUFIRCxPQUFNLFFBQU8sR0FBQTtBQUFBLGNBQ2xCQSxJQUFBQTtBQUFBQSxnQkFBK0M7QUFBQSxrQkFBekMsT0FBTSxPQUFVO0FBQUEsZ0JBQUE2QixvQkFBQSxNQUFBLFdBQVcsSUFBSTtBQUFBLGdCQUFBO0FBQUE7QUFBQSxjQUFBO0FBQUEsY0FDckM3QixJQUFBQTtBQUFBQSxnQkFBK0M7QUFBQSxrQkFBekMsT0FBTSxPQUFVO0FBQUEsZ0JBQUE2QixvQkFBQSxNQUFBLFdBQVcsSUFBSTtBQUFBLGdCQUFBO0FBQUE7QUFBQSxjQUFBO0FBQUE7O1VBR3ZDRCxJQUFBQSxtQkFBYSxRQUFBO0FBQUEsZ0NBQ2I3QixJQUFBQTtBQUFBQSxZQVVPK0IsSUFBQTtBQUFBLFlBQUE7QUFBQSxZQUFBQyxJQUFBQSxXQVY0QyxNQUFXLGFBQUEsQ0FBdEIsWUFBTztzQ0FBL0NoQyxJQVVPLG1CQUFBLFFBQUEsRUFWRCxPQUFNLHdCQUFvQjtBQUFBLGdCQUMvQkMsSUFBQUEsbUJBR08sUUFBQSxFQUhELE9BQU0sT0FBTSxHQUFBO0FBQUEsa0JBQ1UsUUFBUSwyQkFBbkNELElBQW1HO0FBQUEsb0JBQUE7QUFBQSxvQkFBQTtBQUFBO3NCQUE3RixPQUFNO0FBQUEsb0JBQWtDO0FBQUEsb0JBQUE4QixJQUFBLGdCQUFBLFFBQVEsU0FBcUIsS0FBQSxRQUFBLFFBQVEsTUFBTTtBQUFBLG9CQUFBO0FBQUE7QUFBQSxrQkFBQTtrQkFDekY3QixJQUFBQSxtQkFBcUMsU0FBQTtBQUFBLG9CQUE3QixLQUFLLFFBQVE7QUFBQTs7Z0JBRXRCQSxJQUFBQSxtQkFJTyxRQUFBLEVBSkQsT0FBTSxRQUFPLEdBQUE7QUFBQSxrQkFDbEJBO29CQUE0QztBQUFBLHNCQUF0QyxPQUFNLE9BQU07QUFBQSxvQkFBSTZCLElBQUFBLGdCQUFBLFFBQVEsSUFBSTtBQUFBLG9CQUFBO0FBQUE7QUFBQSxrQkFBQTtBQUFBLGtCQUNsQzdCO29CQUE0QztBQUFBLHNCQUF0QyxPQUFNLE9BQU07QUFBQSxvQkFBSTZCLElBQUFBLGdCQUFBLFFBQVEsSUFBSTtBQUFBLG9CQUFBO0FBQUE7QUFBQSxrQkFBQTtBQUFBLGtCQUNsQzdCLElBQUFBO0FBQUFBLG9CQUFxRDtBQUFBLG9CQUFBLEVBQS9DLE9BQU0sT0FBTTtBQUFBLHdDQUFJLFNBQU8sUUFBQyxRQUFRLElBQUksQ0FBQTtBQUFBLG9CQUFBO0FBQUE7QUFBQSxrQkFBQTtBQUFBOzs7Ozs7Ozs7OztBQ2hCaEQsUUFBS0YsY0FBVSxDQUVmOzs7OzRCQVRDQyxJQUdPLG1CQUFBLFFBQUEsRUFIRCxPQUFNLG1CQUFlO0FBQUEsTUFDMUJpQyxJQUFBQSxZQUE2Qix1QkFBQTtBQUFBLE1BQzdCQSxJQUFBQSxZQUF5Qyw2QkFBQTtBQUFBOzs7QUNEM0MsTUFBSSxTQUFTO0FBTU4sV0FBUyxJQUFJLFFBQVEsS0FBSyxLQUFLO0FBQ3BDLFFBQUksTUFBTSxRQUFRLE1BQU0sR0FBRztBQUN6QixhQUFPLFNBQVMsS0FBSyxJQUFJLE9BQU8sUUFBUSxHQUFHO0FBQzNDLGFBQU8sT0FBTyxLQUFLLEdBQUcsR0FBRztBQUN6QixhQUFPO0FBQUEsSUFDUjtBQUNELFdBQU8sR0FBRyxJQUFJO0FBQ2QsV0FBTztBQUFBLEVBQ1Q7QUFFTyxXQUFTLElBQUksUUFBUSxLQUFLO0FBQy9CLFFBQUksTUFBTSxRQUFRLE1BQU0sR0FBRztBQUN6QixhQUFPLE9BQU8sS0FBSyxDQUFDO0FBQ3BCO0FBQUEsSUFDRDtBQUNELFdBQU8sT0FBTyxHQUFHO0FBQUEsRUFDbkI7QUN4Qk8sV0FBUyx3QkFBd0I7QUFDcEMsV0FBTyxVQUFXLEVBQUM7QUFBQSxFQUN2QjtBQUNPLFdBQVMsWUFBWTtBQUV4QixXQUFRLE9BQU8sY0FBYyxlQUFlLE9BQU8sV0FBVyxjQUN4RCxTQUNBLE9BQU8sV0FBVyxjQUNkLFNBQ0E7RUFDZDtBQUNPLFFBQU0sbUJBQW1CLE9BQU8sVUFBVTtBQ1gxQyxRQUFNLGFBQWE7QUFDbkIsUUFBTSwyQkFBMkI7QUNEeEMsTUFBSTtBQUNKLE1BQUk7QUFDRyxXQUFTLHlCQUF5QjtBQUNyQyxRQUFJO0FBQ0osUUFBSSxjQUFjLFFBQVc7QUFDekIsYUFBTztBQUFBLElBQ1Y7QUFDRCxRQUFJLE9BQU8sV0FBVyxlQUFlLE9BQU8sYUFBYTtBQUNyRCxrQkFBWTtBQUNaLGFBQU8sT0FBTztBQUFBLElBQ2pCLFdBQ1EsT0FBTyxXQUFXLGlCQUFpQixLQUFLLE9BQU8sZ0JBQWdCLFFBQVEsT0FBTyxTQUFTLFNBQVMsR0FBRyxjQUFjO0FBQ3RILGtCQUFZO0FBQ1osYUFBTyxPQUFPLFdBQVc7QUFBQSxJQUM1QixPQUNJO0FBQ0Qsa0JBQVk7QUFBQSxJQUNmO0FBQ0QsV0FBTztBQUFBLEVBQ1g7QUFDTyxXQUFTLE1BQU07QUFDbEIsV0FBTyx1QkFBd0IsSUFBRyxLQUFLLElBQUcsSUFBSyxLQUFLO0VBQ3hEO0FDcEJPLFFBQU0sU0FBUztBQUFBLElBQ2xCLFlBQVksUUFBUSxNQUFNO0FBQ3RCLFdBQUssU0FBUztBQUNkLFdBQUssY0FBYztBQUNuQixXQUFLLFVBQVU7QUFDZixXQUFLLFNBQVM7QUFDZCxXQUFLLE9BQU87QUFDWixZQUFNLGtCQUFrQixDQUFBO0FBQ3hCLFVBQUksT0FBTyxVQUFVO0FBQ2pCLG1CQUFXLE1BQU0sT0FBTyxVQUFVO0FBQzlCLGdCQUFNLE9BQU8sT0FBTyxTQUFTLEVBQUU7QUFDL0IsMEJBQWdCLEVBQUUsSUFBSSxLQUFLO0FBQUEsUUFDOUI7QUFBQSxNQUNKO0FBQ0QsWUFBTSxzQkFBc0IsbUNBQW1DLE9BQU87QUFDdEUsVUFBSSxrQkFBa0IsT0FBTyxPQUFPLENBQUUsR0FBRSxlQUFlO0FBQ3ZELFVBQUk7QUFDQSxjQUFNLE1BQU0sYUFBYSxRQUFRLG1CQUFtQjtBQUNwRCxjQUFNLE9BQU8sS0FBSyxNQUFNLEdBQUc7QUFDM0IsZUFBTyxPQUFPLGlCQUFpQixJQUFJO0FBQUEsTUFDdEMsU0FDTSxHQUFQO0FBQUEsTUFFQztBQUNELFdBQUssWUFBWTtBQUFBLFFBQ2IsY0FBYztBQUNWLGlCQUFPO0FBQUEsUUFDVjtBQUFBLFFBQ0QsWUFBWSxPQUFPO0FBQ2YsY0FBSTtBQUNBLHlCQUFhLFFBQVEscUJBQXFCLEtBQUssVUFBVSxLQUFLLENBQUM7QUFBQSxVQUNsRSxTQUNNLEdBQVA7QUFBQSxVQUVDO0FBQ0QsNEJBQWtCO0FBQUEsUUFDckI7QUFBQSxRQUNELE1BQU07QUFDRixpQkFBTyxJQUFHO0FBQUEsUUFDYjtBQUFBLE1BQ2I7QUFDUSxVQUFJLE1BQU07QUFDTixhQUFLLEdBQUcsMEJBQTBCLENBQUMsVUFBVSxVQUFVO0FBQ25ELGNBQUksYUFBYSxLQUFLLE9BQU8sSUFBSTtBQUM3QixpQkFBSyxVQUFVLFlBQVksS0FBSztBQUFBLFVBQ25DO0FBQUEsUUFDakIsQ0FBYTtBQUFBLE1BQ0o7QUFDRCxXQUFLLFlBQVksSUFBSSxNQUFNLElBQUk7QUFBQSxRQUMzQixLQUFLLENBQUMsU0FBUyxTQUFTO0FBQ3BCLGNBQUksS0FBSyxRQUFRO0FBQ2IsbUJBQU8sS0FBSyxPQUFPLEdBQUcsSUFBSTtBQUFBLFVBQzdCLE9BQ0k7QUFDRCxtQkFBTyxJQUFJLFNBQVM7QUFDaEIsbUJBQUssUUFBUSxLQUFLO0FBQUEsZ0JBQ2QsUUFBUTtBQUFBLGdCQUNSO0FBQUEsY0FDNUIsQ0FBeUI7QUFBQSxZQUN6QjtBQUFBLFVBQ2lCO0FBQUEsUUFDSjtBQUFBLE1BQ2IsQ0FBUztBQUNELFdBQUssZ0JBQWdCLElBQUksTUFBTSxJQUFJO0FBQUEsUUFDL0IsS0FBSyxDQUFDLFNBQVMsU0FBUztBQUNwQixjQUFJLEtBQUssUUFBUTtBQUNiLG1CQUFPLEtBQUssT0FBTyxJQUFJO0FBQUEsVUFDMUIsV0FDUSxTQUFTLE1BQU07QUFDcEIsbUJBQU8sS0FBSztBQUFBLFVBQ2YsV0FDUSxPQUFPLEtBQUssS0FBSyxTQUFTLEVBQUUsU0FBUyxJQUFJLEdBQUc7QUFDakQsbUJBQU8sSUFBSSxTQUFTO0FBQ2hCLG1CQUFLLFlBQVksS0FBSztBQUFBLGdCQUNsQixRQUFRO0FBQUEsZ0JBQ1I7QUFBQSxnQkFDQSxTQUFTLE1BQU07QUFBQSxnQkFBRztBQUFBLGNBQzlDLENBQXlCO0FBQ0QscUJBQU8sS0FBSyxVQUFVLElBQUksRUFBRSxHQUFHLElBQUk7QUFBQSxZQUMzRDtBQUFBLFVBQ2lCLE9BQ0k7QUFDRCxtQkFBTyxJQUFJLFNBQVM7QUFDaEIscUJBQU8sSUFBSSxRQUFRLGFBQVc7QUFDMUIscUJBQUssWUFBWSxLQUFLO0FBQUEsa0JBQ2xCLFFBQVE7QUFBQSxrQkFDUjtBQUFBLGtCQUNBO0FBQUEsZ0JBQ2hDLENBQTZCO0FBQUEsY0FDN0IsQ0FBeUI7QUFBQSxZQUN6QjtBQUFBLFVBQ2lCO0FBQUEsUUFDSjtBQUFBLE1BQ2IsQ0FBUztBQUFBLElBQ0o7QUFBQSxJQUNELE1BQU0sY0FBYyxRQUFRO0FBQ3hCLFdBQUssU0FBUztBQUNkLGlCQUFXLFFBQVEsS0FBSyxTQUFTO0FBQzdCLGFBQUssT0FBTyxHQUFHLEtBQUssTUFBTSxFQUFFLEdBQUcsS0FBSyxJQUFJO0FBQUEsTUFDM0M7QUFDRCxpQkFBVyxRQUFRLEtBQUssYUFBYTtBQUNqQyxhQUFLLFFBQVEsTUFBTSxLQUFLLE9BQU8sS0FBSyxNQUFNLEVBQUUsR0FBRyxLQUFLLElBQUksQ0FBQztBQUFBLE1BQzVEO0FBQUEsSUFDSjtBQUFBLEVBQ0w7QUNwR08sV0FBUyxvQkFBb0Isa0JBQWtCLFNBQVM7QUFDM0QsVUFBTSxhQUFhO0FBQ25CLFVBQU0sU0FBUztBQUNmLFVBQU0sT0FBTztBQUNiLFVBQU0sY0FBYyxvQkFBb0IsV0FBVztBQUNuRCxRQUFJLFNBQVMsT0FBTyx5Q0FBeUMsQ0FBQyxjQUFjO0FBQ3hFLFdBQUssS0FBSyxZQUFZLGtCQUFrQixPQUFPO0FBQUEsSUFDbEQsT0FDSTtBQUNELFlBQU0sUUFBUSxjQUFjLElBQUksU0FBUyxZQUFZLElBQUksSUFBSTtBQUM3RCxZQUFNLE9BQU8sT0FBTywyQkFBMkIsT0FBTyw0QkFBNEIsQ0FBQTtBQUNsRixXQUFLLEtBQUs7QUFBQSxRQUNOLGtCQUFrQjtBQUFBLFFBQ2xCO0FBQUEsUUFDQTtBQUFBLE1BQ1osQ0FBUztBQUNELFVBQUk7QUFDQSxnQkFBUSxNQUFNLGFBQWE7QUFBQSxJQUNsQztBQUFBLEVBQ0w7QUFBQSxFQ3pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUEsTUFBSTtBQU9KLFFBQU0saUJBQWlCLENBQUMsVUFBVyxjQUFjO0FBSWpELFFBQU0saUJBQWlCLE1BQU85QixJQUFrQixtQkFBQSxLQUFNK0IsSUFBQUEsT0FBTyxXQUFXLEtBQU07QUFDOUUsUUFBTSxjQUF5RCxPQUFPLE9BQU87QUFFN0UsV0FBUyxjQUVULEdBQUc7QUFDQyxXQUFRLEtBQ0osT0FBTyxNQUFNLFlBQ2IsT0FBTyxVQUFVLFNBQVMsS0FBSyxDQUFDLE1BQU0scUJBQ3RDLE9BQU8sRUFBRSxXQUFXO0FBQUEsRUFDNUI7QUFNQSxNQUFJO0FBQ0osR0FBQyxTQUFVQyxlQUFjO0FBUXJCLElBQUFBLGNBQWEsUUFBUSxJQUFJO0FBTXpCLElBQUFBLGNBQWEsYUFBYSxJQUFJO0FBTTlCLElBQUFBLGNBQWEsZUFBZSxJQUFJO0FBQUEsRUFFcEMsR0FBRyxpQkFBaUIsZUFBZSxDQUFFLEVBQUM7QUFFdEMsUUFBTSxZQUFZLE9BQU8sV0FBVztBQU9wQyxRQUFNLGVBQTZLO0FBWW5MLFFBQU0sVUFBeUIsdUJBQU0sT0FBTyxXQUFXLFlBQVksT0FBTyxXQUFXLFNBQy9FLFNBQ0EsT0FBTyxTQUFTLFlBQVksS0FBSyxTQUFTLE9BQ3RDLE9BQ0EsT0FBTyxXQUFXLFlBQVksT0FBTyxXQUFXLFNBQzVDLFNBQ0EsT0FBTyxlQUFlLFdBQ2xCLGFBQ0EsRUFBRSxhQUFhLEtBQUk7QUFDckMsV0FBUyxJQUFJLE1BQU0sRUFBRSxVQUFVLE1BQUssSUFBSyxDQUFBLEdBQUk7QUFHekMsUUFBSSxXQUNBLDZFQUE2RSxLQUFLLEtBQUssSUFBSSxHQUFHO0FBQzlGLGFBQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxhQUFhLEtBQU0sR0FBRyxJQUFJLEdBQUcsRUFBRSxNQUFNLEtBQUssS0FBTSxDQUFBO0FBQUEsSUFDM0U7QUFDRCxXQUFPO0FBQUEsRUFDWDtBQUNBLFdBQVMsU0FBUyxLQUFLLE1BQU0sTUFBTTtBQUMvQixVQUFNLE1BQU0sSUFBSTtBQUNoQixRQUFJLEtBQUssT0FBTyxHQUFHO0FBQ25CLFFBQUksZUFBZTtBQUNuQixRQUFJLFNBQVMsV0FBWTtBQUNyQixhQUFPLElBQUksVUFBVSxNQUFNLElBQUk7QUFBQSxJQUN2QztBQUNJLFFBQUksVUFBVSxXQUFZO0FBQ3RCLGNBQVEsTUFBTSx5QkFBeUI7QUFBQSxJQUMvQztBQUNJLFFBQUksS0FBSTtBQUFBLEVBQ1o7QUFDQSxXQUFTLFlBQVksS0FBSztBQUN0QixVQUFNLE1BQU0sSUFBSTtBQUVoQixRQUFJLEtBQUssUUFBUSxLQUFLLEtBQUs7QUFDM0IsUUFBSTtBQUNBLFVBQUksS0FBSTtBQUFBLElBQ1gsU0FDTSxHQUFQO0FBQUEsSUFBYTtBQUNiLFdBQU8sSUFBSSxVQUFVLE9BQU8sSUFBSSxVQUFVO0FBQUEsRUFDOUM7QUFFQSxXQUFTLE1BQU0sTUFBTTtBQUNqQixRQUFJO0FBQ0EsV0FBSyxjQUFjLElBQUksV0FBVyxPQUFPLENBQUM7QUFBQSxJQUM3QyxTQUNNLEdBQVA7QUFDSSxZQUFNLE1BQU0sU0FBUyxZQUFZLGFBQWE7QUFDOUMsVUFBSSxlQUFlLFNBQVMsTUFBTSxNQUFNLFFBQVEsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLE9BQU8sT0FBTyxPQUFPLE9BQU8sR0FBRyxJQUFJO0FBQ3BHLFdBQUssY0FBYyxHQUFHO0FBQUEsSUFDekI7QUFBQSxFQUNMO0FBQ0EsUUFBTSxhQUNMLE9BQU8sY0FBYyxXQUFXLFlBQVksRUFBRSxXQUFXLEdBQUU7QUFJNUQsUUFBTSxpQkFBZ0MsdUJBQU0sWUFBWSxLQUFLLFdBQVcsU0FBUyxLQUM3RSxjQUFjLEtBQUssV0FBVyxTQUFTLEtBQ3ZDLENBQUMsU0FBUyxLQUFLLFdBQVcsU0FBUyxHQUFDO0FBQ3hDLFFBQU0sU0FBUyxDQUFDLFlBQ1YsTUFBTTtBQUFBLEVBQUc7QUFBQTtBQUFBLElBRVAsT0FBTyxzQkFBc0IsZUFDekIsY0FBYyxrQkFBa0IsYUFDaEMsQ0FBQyxpQkFDQztBQUFBO0FBQUEsTUFFRSxzQkFBc0IsYUFDaEI7QUFBQTtBQUFBLFFBRUU7QUFBQTtBQUFBO0FBQUE7QUFDeEIsV0FBUyxlQUFlLE1BQU0sT0FBTyxZQUFZLE1BQU07QUFDbkQsVUFBTSxJQUFJLFNBQVMsY0FBYyxHQUFHO0FBQ3BDLE1BQUUsV0FBVztBQUNiLE1BQUUsTUFBTTtBQUdSLFFBQUksT0FBTyxTQUFTLFVBQVU7QUFFMUIsUUFBRSxPQUFPO0FBQ1QsVUFBSSxFQUFFLFdBQVcsU0FBUyxRQUFRO0FBQzlCLFlBQUksWUFBWSxFQUFFLElBQUksR0FBRztBQUNyQixtQkFBUyxNQUFNLE1BQU0sSUFBSTtBQUFBLFFBQzVCLE9BQ0k7QUFDRCxZQUFFLFNBQVM7QUFDWCxnQkFBTSxDQUFDO0FBQUEsUUFDVjtBQUFBLE1BQ0osT0FDSTtBQUNELGNBQU0sQ0FBQztBQUFBLE1BQ1Y7QUFBQSxJQUNKLE9BQ0k7QUFFRCxRQUFFLE9BQU8sSUFBSSxnQkFBZ0IsSUFBSTtBQUNqQyxpQkFBVyxXQUFZO0FBQ25CLFlBQUksZ0JBQWdCLEVBQUUsSUFBSTtBQUFBLE1BQzdCLEdBQUUsR0FBRztBQUNOLGlCQUFXLFdBQVk7QUFDbkIsY0FBTSxDQUFDO0FBQUEsTUFDVixHQUFFLENBQUM7QUFBQSxJQUNQO0FBQUEsRUFDTDtBQUNBLFdBQVMsU0FBUyxNQUFNLE9BQU8sWUFBWSxNQUFNO0FBQzdDLFFBQUksT0FBTyxTQUFTLFVBQVU7QUFDMUIsVUFBSSxZQUFZLElBQUksR0FBRztBQUNuQixpQkFBUyxNQUFNLE1BQU0sSUFBSTtBQUFBLE1BQzVCLE9BQ0k7QUFDRCxjQUFNLElBQUksU0FBUyxjQUFjLEdBQUc7QUFDcEMsVUFBRSxPQUFPO0FBQ1QsVUFBRSxTQUFTO0FBQ1gsbUJBQVcsV0FBWTtBQUNuQixnQkFBTSxDQUFDO0FBQUEsUUFDdkIsQ0FBYTtBQUFBLE1BQ0o7QUFBQSxJQUNKLE9BQ0k7QUFFRCxnQkFBVSxpQkFBaUIsSUFBSSxNQUFNLElBQUksR0FBRyxJQUFJO0FBQUEsSUFDbkQ7QUFBQSxFQUNMO0FBQ0EsV0FBUyxnQkFBZ0IsTUFBTSxNQUFNLE1BQU0sT0FBTztBQUc5QyxZQUFRLFNBQVMsS0FBSyxJQUFJLFFBQVE7QUFDbEMsUUFBSSxPQUFPO0FBQ1AsWUFBTSxTQUFTLFFBQVEsTUFBTSxTQUFTLEtBQUssWUFBWTtBQUFBLElBQzFEO0FBQ0QsUUFBSSxPQUFPLFNBQVM7QUFDaEIsYUFBTyxTQUFTLE1BQU0sTUFBTSxJQUFJO0FBQ3BDLFVBQU0sUUFBUSxLQUFLLFNBQVM7QUFDNUIsVUFBTSxXQUFXLGVBQWUsS0FBSyxPQUFPLFFBQVEsV0FBVyxDQUFDLEtBQUssWUFBWTtBQUNqRixVQUFNLGNBQWMsZUFBZSxLQUFLLFVBQVUsU0FBUztBQUMzRCxTQUFLLGVBQWdCLFNBQVMsWUFBYSxtQkFDdkMsT0FBTyxlQUFlLGFBQWE7QUFFbkMsWUFBTSxTQUFTLElBQUk7QUFDbkIsYUFBTyxZQUFZLFdBQVk7QUFDM0IsWUFBSSxNQUFNLE9BQU87QUFDakIsWUFBSSxPQUFPLFFBQVEsVUFBVTtBQUN6QixrQkFBUTtBQUNSLGdCQUFNLElBQUksTUFBTSwwQkFBMEI7QUFBQSxRQUM3QztBQUNELGNBQU0sY0FDQSxNQUNBLElBQUksUUFBUSxnQkFBZ0IsdUJBQXVCO0FBQ3pELFlBQUksT0FBTztBQUNQLGdCQUFNLFNBQVMsT0FBTztBQUFBLFFBQ3pCLE9BQ0k7QUFDRCxtQkFBUyxPQUFPLEdBQUc7QUFBQSxRQUN0QjtBQUNELGdCQUFRO0FBQUEsTUFDcEI7QUFDUSxhQUFPLGNBQWMsSUFBSTtBQUFBLElBQzVCLE9BQ0k7QUFDRCxZQUFNLE1BQU0sSUFBSSxnQkFBZ0IsSUFBSTtBQUNwQyxVQUFJO0FBQ0EsY0FBTSxTQUFTLE9BQU8sR0FBRztBQUFBO0FBRXpCLGlCQUFTLE9BQU87QUFDcEIsY0FBUTtBQUNSLGlCQUFXLFdBQVk7QUFDbkIsWUFBSSxnQkFBZ0IsR0FBRztBQUFBLE1BQzFCLEdBQUUsR0FBRztBQUFBLElBQ1Q7QUFBQSxFQUNMO0FBUUEsV0FBUyxhQUFhLFNBQVMsTUFBTTtBQUNqQyxVQUFNLGVBQWUsUUFBUTtBQUM3QixRQUFJLE9BQU8sMkJBQTJCLFlBQVk7QUFDOUMsNkJBQXVCLGNBQWMsSUFBSTtBQUFBLElBQzVDLFdBQ1EsU0FBUyxTQUFTO0FBQ3ZCLGNBQVEsTUFBTSxZQUFZO0FBQUEsSUFDN0IsV0FDUSxTQUFTLFFBQVE7QUFDdEIsY0FBUSxLQUFLLFlBQVk7QUFBQSxJQUM1QixPQUNJO0FBQ0QsY0FBUSxJQUFJLFlBQVk7QUFBQSxJQUMzQjtBQUFBLEVBQ0w7QUFDQSxXQUFTLFFBQVEsR0FBRztBQUNoQixXQUFPLFFBQVEsS0FBSyxhQUFhO0FBQUEsRUFDckM7QUFFQSxXQUFTLHVCQUF1QjtBQUM1QixRQUFJLEVBQUUsZUFBZSxZQUFZO0FBQzdCLG1CQUFhLGtEQUFrRCxPQUFPO0FBQ3RFLGFBQU87QUFBQSxJQUNWO0FBQUEsRUFDTDtBQUNBLFdBQVMscUJBQXFCLE9BQU87QUFDakMsUUFBSSxpQkFBaUIsU0FDakIsTUFBTSxRQUFRLFlBQWEsRUFBQyxTQUFTLHlCQUF5QixHQUFHO0FBQ2pFLG1CQUFhLG1HQUFtRyxNQUFNO0FBQ3RILGFBQU87QUFBQSxJQUNWO0FBQ0QsV0FBTztBQUFBLEVBQ1g7QUFDQSxpQkFBZSxzQkFBc0IsT0FBTztBQUN4QyxRQUFJLHFCQUFzQjtBQUN0QjtBQUNKLFFBQUk7QUFDQSxZQUFNLFVBQVUsVUFBVSxVQUFVLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxDQUFDO0FBQ3JFLG1CQUFhLG1DQUFtQztBQUFBLElBQ25ELFNBQ00sT0FBUDtBQUNJLFVBQUkscUJBQXFCLEtBQUs7QUFDMUI7QUFDSixtQkFBYSxzRUFBc0UsT0FBTztBQUMxRixjQUFRLE1BQU0sS0FBSztBQUFBLElBQ3RCO0FBQUEsRUFDTDtBQUNBLGlCQUFlLHVCQUF1QixPQUFPO0FBQ3pDLFFBQUkscUJBQXNCO0FBQ3RCO0FBQ0osUUFBSTtBQUNBLFlBQU0sTUFBTSxRQUFRLEtBQUssTUFBTSxNQUFNLFVBQVUsVUFBVSxTQUFRLENBQUU7QUFDbkUsbUJBQWEscUNBQXFDO0FBQUEsSUFDckQsU0FDTSxPQUFQO0FBQ0ksVUFBSSxxQkFBcUIsS0FBSztBQUMxQjtBQUNKLG1CQUFhLHVGQUF1RixPQUFPO0FBQzNHLGNBQVEsTUFBTSxLQUFLO0FBQUEsSUFDdEI7QUFBQSxFQUNMO0FBQ0EsaUJBQWUsc0JBQXNCLE9BQU87QUFDeEMsUUFBSTtBQUNBLGFBQU8sSUFBSSxLQUFLLENBQUMsS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLENBQUMsR0FBRztBQUFBLFFBQ2pELE1BQU07QUFBQSxNQUNsQixDQUFTLEdBQUcsa0JBQWtCO0FBQUEsSUFDekIsU0FDTSxPQUFQO0FBQ0ksbUJBQWEsMkVBQTJFLE9BQU87QUFDL0YsY0FBUSxNQUFNLEtBQUs7QUFBQSxJQUN0QjtBQUFBLEVBQ0w7QUFDQSxNQUFJO0FBQ0osV0FBUyxnQkFBZ0I7QUFDckIsUUFBSSxDQUFDLFdBQVc7QUFDWixrQkFBWSxTQUFTLGNBQWMsT0FBTztBQUMxQyxnQkFBVSxPQUFPO0FBQ2pCLGdCQUFVLFNBQVM7QUFBQSxJQUN0QjtBQUNELGFBQVMsV0FBVztBQUNoQixhQUFPLElBQUksUUFBUSxDQUFDLFNBQVMsV0FBVztBQUNwQyxrQkFBVSxXQUFXLFlBQVk7QUFDN0IsZ0JBQU0sUUFBUSxVQUFVO0FBQ3hCLGNBQUksQ0FBQztBQUNELG1CQUFPLFFBQVEsSUFBSTtBQUN2QixnQkFBTSxPQUFPLE1BQU0sS0FBSyxDQUFDO0FBQ3pCLGNBQUksQ0FBQztBQUNELG1CQUFPLFFBQVEsSUFBSTtBQUN2QixpQkFBTyxRQUFRLEVBQUUsTUFBTSxNQUFNLEtBQUssS0FBTSxHQUFFLEtBQUksQ0FBRTtBQUFBLFFBQ2hFO0FBRVksa0JBQVUsV0FBVyxNQUFNLFFBQVEsSUFBSTtBQUN2QyxrQkFBVSxVQUFVO0FBQ3BCLGtCQUFVLE1BQUs7QUFBQSxNQUMzQixDQUFTO0FBQUEsSUFDSjtBQUNELFdBQU87QUFBQSxFQUNYO0FBQ0EsaUJBQWUsMEJBQTBCLE9BQU87QUFDNUMsUUFBSTtBQUNBLFlBQU1DLFFBQU8sTUFBTTtBQUNuQixZQUFNLFNBQVMsTUFBTUE7QUFDckIsVUFBSSxDQUFDO0FBQ0Q7QUFDSixZQUFNLEVBQUUsTUFBTSxLQUFNLElBQUc7QUFDdkIsWUFBTSxNQUFNLFFBQVEsS0FBSyxNQUFNLElBQUk7QUFDbkMsbUJBQWEsK0JBQStCLEtBQUssUUFBUTtBQUFBLElBQzVELFNBQ00sT0FBUDtBQUNJLG1CQUFhLDJFQUEyRSxPQUFPO0FBQy9GLGNBQVEsTUFBTSxLQUFLO0FBQUEsSUFDdEI7QUFBQSxFQUNMO0FBRUEsV0FBUyxjQUFjLFNBQVM7QUFDNUIsV0FBTztBQUFBLE1BQ0gsU0FBUztBQUFBLFFBQ0w7QUFBQSxNQUNIO0FBQUEsSUFDVDtBQUFBLEVBQ0E7QUFDQSxRQUFNLG1CQUFtQjtBQUN6QixRQUFNLGdCQUFnQjtBQUN0QixXQUFTLDRCQUE0QixPQUFPO0FBQ3hDLFdBQU8sUUFBUSxLQUFLLElBQ2Q7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxJQUNWLElBQ0M7QUFBQSxNQUNFLElBQUksTUFBTTtBQUFBLE1BQ1YsT0FBTyxNQUFNO0FBQUEsSUFDekI7QUFBQSxFQUNBO0FBQ0EsV0FBUyw2QkFBNkIsT0FBTztBQUN6QyxRQUFJLFFBQVEsS0FBSyxHQUFHO0FBQ2hCLFlBQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxHQUFHLEtBQUksQ0FBRTtBQUM3QyxZQUFNLFdBQVcsTUFBTTtBQUN2QixZQUFNQyxTQUFRO0FBQUEsUUFDVixPQUFPLFdBQVcsSUFBSSxDQUFDLGFBQWE7QUFBQSxVQUNoQyxVQUFVO0FBQUEsVUFDVixLQUFLO0FBQUEsVUFDTCxPQUFPLE1BQU0sTUFBTSxNQUFNLE9BQU87QUFBQSxRQUNoRCxFQUFjO0FBQUEsUUFDRixTQUFTLFdBQ0osT0FBTyxDQUFDLE9BQU8sU0FBUyxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQ3hDLElBQUksQ0FBQyxPQUFPO0FBQ2IsZ0JBQU1DLFNBQVEsU0FBUyxJQUFJLEVBQUU7QUFDN0IsaUJBQU87QUFBQSxZQUNILFVBQVU7QUFBQSxZQUNWLEtBQUs7QUFBQSxZQUNMLE9BQU9BLE9BQU0sU0FBUyxPQUFPLENBQUMsU0FBUyxRQUFRO0FBQzNDLHNCQUFRLEdBQUcsSUFBSUEsT0FBTSxHQUFHO0FBQ3hCLHFCQUFPO0FBQUEsWUFDVixHQUFFLEVBQUU7QUFBQSxVQUN6QjtBQUFBLFFBQ0EsQ0FBYTtBQUFBLE1BQ2I7QUFDUSxhQUFPRDtBQUFBLElBQ1Y7QUFDRCxVQUFNLFFBQVE7QUFBQSxNQUNWLE9BQU8sT0FBTyxLQUFLLE1BQU0sTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTO0FBQUEsUUFDM0MsVUFBVTtBQUFBLFFBQ1Y7QUFBQSxRQUNBLE9BQU8sTUFBTSxPQUFPLEdBQUc7QUFBQSxNQUNuQyxFQUFVO0FBQUEsSUFDVjtBQUVJLFFBQUksTUFBTSxZQUFZLE1BQU0sU0FBUyxRQUFRO0FBQ3pDLFlBQU0sVUFBVSxNQUFNLFNBQVMsSUFBSSxDQUFDLGdCQUFnQjtBQUFBLFFBQ2hELFVBQVU7QUFBQSxRQUNWLEtBQUs7QUFBQSxRQUNMLE9BQU8sTUFBTSxVQUFVO0FBQUEsTUFDMUIsRUFBQztBQUFBLElBQ0w7QUFDRCxRQUFJLE1BQU0sa0JBQWtCLE1BQU07QUFDOUIsWUFBTSxtQkFBbUIsTUFBTSxLQUFLLE1BQU0saUJBQWlCLEVBQUUsSUFBSSxDQUFDLFNBQVM7QUFBQSxRQUN2RSxVQUFVO0FBQUEsUUFDVjtBQUFBLFFBQ0EsT0FBTyxNQUFNLEdBQUc7QUFBQSxNQUNuQixFQUFDO0FBQUEsSUFDTDtBQUNELFdBQU87QUFBQSxFQUNYO0FBQ0EsV0FBUyxnQkFBZ0IsUUFBUTtBQUM3QixRQUFJLENBQUM7QUFDRCxhQUFPO0FBQ1gsUUFBSSxNQUFNLFFBQVEsTUFBTSxHQUFHO0FBRXZCLGFBQU8sT0FBTyxPQUFPLENBQUMsTUFBTSxVQUFVO0FBQ2xDLGFBQUssS0FBSyxLQUFLLE1BQU0sR0FBRztBQUN4QixhQUFLLFdBQVcsS0FBSyxNQUFNLElBQUk7QUFDL0IsYUFBSyxTQUFTLE1BQU0sR0FBRyxJQUFJLE1BQU07QUFDakMsYUFBSyxTQUFTLE1BQU0sR0FBRyxJQUFJLE1BQU07QUFDakMsZUFBTztBQUFBLE1BQ25CLEdBQVc7QUFBQSxRQUNDLFVBQVUsQ0FBRTtBQUFBLFFBQ1osTUFBTSxDQUFFO0FBQUEsUUFDUixZQUFZLENBQUU7QUFBQSxRQUNkLFVBQVUsQ0FBRTtBQUFBLE1BQ3hCLENBQVM7QUFBQSxJQUNKLE9BQ0k7QUFDRCxhQUFPO0FBQUEsUUFDSCxXQUFXLGNBQWMsT0FBTyxJQUFJO0FBQUEsUUFDcEMsS0FBSyxjQUFjLE9BQU8sR0FBRztBQUFBLFFBQzdCLFVBQVUsT0FBTztBQUFBLFFBQ2pCLFVBQVUsT0FBTztBQUFBLE1BQzdCO0FBQUEsSUFDSztBQUFBLEVBQ0w7QUFDQSxXQUFTLG1CQUFtQixNQUFNO0FBQzlCLFlBQVEsTUFBSTtBQUFBLE1BQ1IsS0FBSyxhQUFhO0FBQ2QsZUFBTztBQUFBLE1BQ1gsS0FBSyxhQUFhO0FBQ2QsZUFBTztBQUFBLE1BQ1gsS0FBSyxhQUFhO0FBQ2QsZUFBTztBQUFBLE1BQ1g7QUFDSSxlQUFPO0FBQUEsSUFDZDtBQUFBLEVBQ0w7QUFHQSxNQUFJLG1CQUFtQjtBQUN2QixRQUFNLHNCQUFzQixDQUFBO0FBQzVCLFFBQU0scUJBQXFCO0FBQzNCLFFBQU0sZUFBZTtBQUNyQixRQUFNLEVBQUUsUUFBUSxTQUFVLElBQUc7QUFPN0IsUUFBTSxlQUFlLENBQUMsT0FBTyxRQUFRO0FBUXJDLFdBQVMsc0JBQXNCLEtBQUssT0FBTztBQUN2Qyx3QkFBb0I7QUFBQSxNQUNoQixJQUFJO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsTUFDVjtBQUFBLE1BQ0E7QUFBQSxJQUNILEdBQUUsQ0FBQyxRQUFRO0FBQ1IsVUFBSSxPQUFPLElBQUksUUFBUSxZQUFZO0FBQy9CLHFCQUFhLHlNQUF5TTtBQUFBLE1BQ3pOO0FBQ0QsVUFBSSxpQkFBaUI7QUFBQSxRQUNqQixJQUFJO0FBQUEsUUFDSixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsTUFDbkIsQ0FBUztBQUNELFVBQUksYUFBYTtBQUFBLFFBQ2IsSUFBSTtBQUFBLFFBQ0osT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sdUJBQXVCO0FBQUEsUUFDdkIsU0FBUztBQUFBLFVBQ0w7QUFBQSxZQUNJLE1BQU07QUFBQSxZQUNOLFFBQVEsTUFBTTtBQUNWLG9DQUFzQixLQUFLO0FBQUEsWUFDOUI7QUFBQSxZQUNELFNBQVM7QUFBQSxVQUNaO0FBQUEsVUFDRDtBQUFBLFlBQ0ksTUFBTTtBQUFBLFlBQ04sUUFBUSxZQUFZO0FBQ2hCLG9CQUFNLHVCQUF1QixLQUFLO0FBQ2xDLGtCQUFJLGtCQUFrQixZQUFZO0FBQ2xDLGtCQUFJLG1CQUFtQixZQUFZO0FBQUEsWUFDdEM7QUFBQSxZQUNELFNBQVM7QUFBQSxVQUNaO0FBQUEsVUFDRDtBQUFBLFlBQ0ksTUFBTTtBQUFBLFlBQ04sUUFBUSxNQUFNO0FBQ1Ysb0NBQXNCLEtBQUs7QUFBQSxZQUM5QjtBQUFBLFlBQ0QsU0FBUztBQUFBLFVBQ1o7QUFBQSxVQUNEO0FBQUEsWUFDSSxNQUFNO0FBQUEsWUFDTixRQUFRLFlBQVk7QUFDaEIsb0JBQU0sMEJBQTBCLEtBQUs7QUFDckMsa0JBQUksa0JBQWtCLFlBQVk7QUFDbEMsa0JBQUksbUJBQW1CLFlBQVk7QUFBQSxZQUN0QztBQUFBLFlBQ0QsU0FBUztBQUFBLFVBQ1o7QUFBQSxRQUNKO0FBQUEsUUFDRCxhQUFhO0FBQUEsVUFDVDtBQUFBLFlBQ0ksTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFlBQ1QsUUFBUSxDQUFDLFdBQVc7QUFDaEIsb0JBQU0sUUFBUSxNQUFNLEdBQUcsSUFBSSxNQUFNO0FBQ2pDLGtCQUFJLENBQUMsT0FBTztBQUNSLDZCQUFhLGlCQUFpQiwwQ0FBMEMsTUFBTTtBQUFBLGNBQ2pGLFdBQ1EsQ0FBQyxNQUFNLGVBQWU7QUFDM0IsNkJBQWEsaUJBQWlCLDZDQUE2QyxNQUFNO0FBQUEsY0FDcEYsT0FDSTtBQUNELHNCQUFNLE9BQU07QUFDWiw2QkFBYSxVQUFVLGdCQUFnQjtBQUFBLGNBQzFDO0FBQUEsWUFDSjtBQUFBLFVBQ0o7QUFBQSxRQUNKO0FBQUEsTUFDYixDQUFTO0FBQ0QsVUFBSSxHQUFHLGlCQUFpQixDQUFDLFNBQVMsUUFBUTtBQUN0QyxjQUFNLFFBQVMsUUFBUSxxQkFDbkIsUUFBUSxrQkFBa0I7QUFDOUIsWUFBSSxTQUFTLE1BQU0sVUFBVTtBQUN6QixnQkFBTSxjQUFjLFFBQVEsa0JBQWtCLE1BQU07QUFDcEQsaUJBQU8sT0FBTyxXQUFXLEVBQUUsUUFBUSxDQUFDLFVBQVU7QUFDMUMsb0JBQVEsYUFBYSxNQUFNLEtBQUs7QUFBQSxjQUM1QixNQUFNLGFBQWEsTUFBTSxHQUFHO0FBQUEsY0FDNUIsS0FBSztBQUFBLGNBQ0wsVUFBVTtBQUFBLGNBQ1YsT0FBTyxNQUFNLGdCQUNQO0FBQUEsZ0JBQ0UsU0FBUztBQUFBLGtCQUNMLE9BQU9FLElBQUFBLE1BQU0sTUFBTSxNQUFNO0FBQUEsa0JBQ3pCLFNBQVM7QUFBQSxvQkFDTDtBQUFBLHNCQUNJLE1BQU07QUFBQSxzQkFDTixTQUFTO0FBQUEsc0JBQ1QsUUFBUSxNQUFNLE1BQU0sT0FBUTtBQUFBLG9CQUMvQjtBQUFBLGtCQUNKO0FBQUEsZ0JBQ0o7QUFBQSxjQUNKO0FBQUE7QUFBQSxnQkFFRyxPQUFPLEtBQUssTUFBTSxNQUFNLEVBQUUsT0FBTyxDQUFDLE9BQU8sUUFBUTtBQUM3Qyx3QkFBTSxHQUFHLElBQUksTUFBTSxPQUFPLEdBQUc7QUFDN0IseUJBQU87QUFBQSxnQkFDVixHQUFFLEVBQUU7QUFBQTtBQUFBLFlBQ3JDLENBQXFCO0FBQ0QsZ0JBQUksTUFBTSxZQUFZLE1BQU0sU0FBUyxRQUFRO0FBQ3pDLHNCQUFRLGFBQWEsTUFBTSxLQUFLO0FBQUEsZ0JBQzVCLE1BQU0sYUFBYSxNQUFNLEdBQUc7QUFBQSxnQkFDNUIsS0FBSztBQUFBLGdCQUNMLFVBQVU7QUFBQSxnQkFDVixPQUFPLE1BQU0sU0FBUyxPQUFPLENBQUMsU0FBUyxRQUFRO0FBQzNDLHNCQUFJO0FBQ0EsNEJBQVEsR0FBRyxJQUFJLE1BQU0sR0FBRztBQUFBLGtCQUMzQixTQUNNLE9BQVA7QUFFSSw0QkFBUSxHQUFHLElBQUk7QUFBQSxrQkFDbEI7QUFDRCx5QkFBTztBQUFBLGdCQUNWLEdBQUUsRUFBRTtBQUFBLGNBQ2pDLENBQXlCO0FBQUEsWUFDSjtBQUFBLFVBQ3JCLENBQWlCO0FBQUEsUUFDSjtBQUFBLE1BQ2IsQ0FBUztBQUNELFVBQUksR0FBRyxpQkFBaUIsQ0FBQyxZQUFZO0FBQ2pDLFlBQUksUUFBUSxRQUFRLE9BQU8sUUFBUSxnQkFBZ0IsY0FBYztBQUM3RCxjQUFJLFNBQVMsQ0FBQyxLQUFLO0FBQ25CLG1CQUFTLE9BQU8sT0FBTyxNQUFNLEtBQUssTUFBTSxHQUFHLE9BQVEsQ0FBQSxDQUFDO0FBQ3BELGtCQUFRLGFBQWEsUUFBUSxTQUN2QixPQUFPLE9BQU8sQ0FBQyxVQUFVLFNBQVMsUUFDOUIsTUFBTSxJQUNILFlBQWEsRUFDYixTQUFTLFFBQVEsT0FBTyxhQUFhLElBQ3hDLGlCQUFpQixZQUFXLEVBQUcsU0FBUyxRQUFRLE9BQU8sWUFBVyxDQUFFLENBQUMsSUFDekUsUUFBUSxJQUFJLDJCQUEyQjtBQUFBLFFBQ2hEO0FBQUEsTUFDYixDQUFTO0FBQ0QsVUFBSSxHQUFHLGtCQUFrQixDQUFDLFlBQVk7QUFDbEMsWUFBSSxRQUFRLFFBQVEsT0FBTyxRQUFRLGdCQUFnQixjQUFjO0FBQzdELGdCQUFNLGlCQUFpQixRQUFRLFdBQVcsZ0JBQ3BDLFFBQ0EsTUFBTSxHQUFHLElBQUksUUFBUSxNQUFNO0FBQ2pDLGNBQUksQ0FBQyxnQkFBZ0I7QUFHakI7QUFBQSxVQUNIO0FBQ0QsY0FBSSxnQkFBZ0I7QUFDaEIsb0JBQVEsUUFBUSw2QkFBNkIsY0FBYztBQUFBLFVBQzlEO0FBQUEsUUFDSjtBQUFBLE1BQ2IsQ0FBUztBQUNELFVBQUksR0FBRyxtQkFBbUIsQ0FBQyxTQUFTLFFBQVE7QUFDeEMsWUFBSSxRQUFRLFFBQVEsT0FBTyxRQUFRLGdCQUFnQixjQUFjO0FBQzdELGdCQUFNLGlCQUFpQixRQUFRLFdBQVcsZ0JBQ3BDLFFBQ0EsTUFBTSxHQUFHLElBQUksUUFBUSxNQUFNO0FBQ2pDLGNBQUksQ0FBQyxnQkFBZ0I7QUFDakIsbUJBQU8sYUFBYSxVQUFVLFFBQVEscUJBQXFCLE9BQU87QUFBQSxVQUNyRTtBQUNELGdCQUFNLEVBQUUsS0FBTSxJQUFHO0FBQ2pCLGNBQUksQ0FBQyxRQUFRLGNBQWMsR0FBRztBQUUxQixnQkFBSSxLQUFLLFdBQVcsS0FDaEIsQ0FBQyxlQUFlLGtCQUFrQixJQUFJLEtBQUssQ0FBQyxDQUFDLEtBQzdDLEtBQUssQ0FBQyxLQUFLLGVBQWUsUUFBUTtBQUNsQyxtQkFBSyxRQUFRLFFBQVE7QUFBQSxZQUN4QjtBQUFBLFVBQ0osT0FDSTtBQUVELGlCQUFLLFFBQVEsT0FBTztBQUFBLFVBQ3ZCO0FBQ0QsNkJBQW1CO0FBQ25CLGtCQUFRLElBQUksZ0JBQWdCLE1BQU0sUUFBUSxNQUFNLEtBQUs7QUFDckQsNkJBQW1CO0FBQUEsUUFDdEI7QUFBQSxNQUNiLENBQVM7QUFDRCxVQUFJLEdBQUcsbUJBQW1CLENBQUMsWUFBWTtBQUNuQyxZQUFJLFFBQVEsS0FBSyxXQUFXLElBQUksR0FBRztBQUMvQixnQkFBTSxVQUFVLFFBQVEsS0FBSyxRQUFRLFVBQVUsRUFBRTtBQUNqRCxnQkFBTSxRQUFRLE1BQU0sR0FBRyxJQUFJLE9BQU87QUFDbEMsY0FBSSxDQUFDLE9BQU87QUFDUixtQkFBTyxhQUFhLFVBQVUsc0JBQXNCLE9BQU87QUFBQSxVQUM5RDtBQUNELGdCQUFNLEVBQUUsS0FBTSxJQUFHO0FBQ2pCLGNBQUksS0FBSyxDQUFDLE1BQU0sU0FBUztBQUNyQixtQkFBTyxhQUFhLDJCQUEyQjtBQUFBLEVBQWM7QUFBQSw0QkFBbUM7QUFBQSxVQUNuRztBQUdELGVBQUssQ0FBQyxJQUFJO0FBQ1YsNkJBQW1CO0FBQ25CLGtCQUFRLElBQUksT0FBTyxNQUFNLFFBQVEsTUFBTSxLQUFLO0FBQzVDLDZCQUFtQjtBQUFBLFFBQ3RCO0FBQUEsTUFDYixDQUFTO0FBQUEsSUFDVCxDQUFLO0FBQUEsRUFDTDtBQUNBLFdBQVMsbUJBQW1CLEtBQUssT0FBTztBQUNwQyxRQUFJLENBQUMsb0JBQW9CLFNBQVMsYUFBYSxNQUFNLEdBQUcsQ0FBQyxHQUFHO0FBQ3hELDBCQUFvQixLQUFLLGFBQWEsTUFBTSxHQUFHLENBQUM7QUFBQSxJQUNuRDtBQUNELHdCQUFvQjtBQUFBLE1BQ2hCLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLE1BQ0EsVUFBVTtBQUFBLFFBQ04saUJBQWlCO0FBQUEsVUFDYixPQUFPO0FBQUEsVUFDUCxNQUFNO0FBQUEsVUFDTixjQUFjO0FBQUEsUUFDakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNSjtBQUFBLElBQ0osR0FBRSxDQUFDLFFBQVE7QUFFUixZQUFNWCxPQUFNLE9BQU8sSUFBSSxRQUFRLGFBQWEsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUs7QUFDckUsWUFBTSxVQUFVLENBQUMsRUFBRSxPQUFPLFNBQVMsTUFBTSxXQUFXO0FBQ2hELGNBQU0sVUFBVTtBQUNoQixZQUFJLGlCQUFpQjtBQUFBLFVBQ2pCLFNBQVM7QUFBQSxVQUNULE9BQU87QUFBQSxZQUNILE1BQU1BLEtBQUs7QUFBQSxZQUNYLE9BQU8sUUFBUTtBQUFBLFlBQ2YsVUFBVTtBQUFBLFlBQ1YsTUFBTTtBQUFBLGNBQ0YsT0FBTyxjQUFjLE1BQU0sR0FBRztBQUFBLGNBQzlCLFFBQVEsY0FBYyxJQUFJO0FBQUEsY0FDMUI7QUFBQSxZQUNIO0FBQUEsWUFDRDtBQUFBLFVBQ0g7QUFBQSxRQUNqQixDQUFhO0FBQ0QsY0FBTSxDQUFDLFdBQVc7QUFDZCx5QkFBZTtBQUNmLGNBQUksaUJBQWlCO0FBQUEsWUFDakIsU0FBUztBQUFBLFlBQ1QsT0FBTztBQUFBLGNBQ0gsTUFBTUEsS0FBSztBQUFBLGNBQ1gsT0FBTyxRQUFRO0FBQUEsY0FDZixVQUFVO0FBQUEsY0FDVixNQUFNO0FBQUEsZ0JBQ0YsT0FBTyxjQUFjLE1BQU0sR0FBRztBQUFBLGdCQUM5QixRQUFRLGNBQWMsSUFBSTtBQUFBLGdCQUMxQjtBQUFBLGdCQUNBO0FBQUEsY0FDSDtBQUFBLGNBQ0Q7QUFBQSxZQUNIO0FBQUEsVUFDckIsQ0FBaUI7QUFBQSxRQUNqQixDQUFhO0FBQ0QsZ0JBQVEsQ0FBQyxVQUFVO0FBQ2YseUJBQWU7QUFDZixjQUFJLGlCQUFpQjtBQUFBLFlBQ2pCLFNBQVM7QUFBQSxZQUNULE9BQU87QUFBQSxjQUNILE1BQU1BLEtBQUs7QUFBQSxjQUNYLFNBQVM7QUFBQSxjQUNULE9BQU8sUUFBUTtBQUFBLGNBQ2YsVUFBVTtBQUFBLGNBQ1YsTUFBTTtBQUFBLGdCQUNGLE9BQU8sY0FBYyxNQUFNLEdBQUc7QUFBQSxnQkFDOUIsUUFBUSxjQUFjLElBQUk7QUFBQSxnQkFDMUI7QUFBQSxnQkFDQTtBQUFBLGNBQ0g7QUFBQSxjQUNEO0FBQUEsWUFDSDtBQUFBLFVBQ3JCLENBQWlCO0FBQUEsUUFDakIsQ0FBYTtBQUFBLE1BQ0osR0FBRSxJQUFJO0FBQ1AsWUFBTSxrQkFBa0IsUUFBUSxDQUFDLFNBQVM7QUFDdENZLFlBQUssTUFBQyxNQUFNQyxJQUFBQSxNQUFNLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLGFBQWE7QUFDcEQsY0FBSSxzQkFBcUI7QUFDekIsY0FBSSxtQkFBbUIsWUFBWTtBQUNuQyxjQUFJLGtCQUFrQjtBQUNsQixnQkFBSSxpQkFBaUI7QUFBQSxjQUNqQixTQUFTO0FBQUEsY0FDVCxPQUFPO0FBQUEsZ0JBQ0gsTUFBTWIsS0FBSztBQUFBLGdCQUNYLE9BQU87QUFBQSxnQkFDUCxVQUFVO0FBQUEsZ0JBQ1YsTUFBTTtBQUFBLGtCQUNGO0FBQUEsa0JBQ0E7QUFBQSxnQkFDSDtBQUFBLGdCQUNELFNBQVM7QUFBQSxjQUNaO0FBQUEsWUFDekIsQ0FBcUI7QUFBQSxVQUNKO0FBQUEsUUFDakIsR0FBZSxFQUFFLE1BQU0sS0FBSSxDQUFFO0FBQUEsTUFDN0IsQ0FBUztBQUNELFlBQU0sV0FBVyxDQUFDLEVBQUUsUUFBUSxLQUFJLEdBQUksVUFBVTtBQUMxQyxZQUFJLHNCQUFxQjtBQUN6QixZQUFJLG1CQUFtQixZQUFZO0FBQ25DLFlBQUksQ0FBQztBQUNEO0FBRUosY0FBTSxZQUFZO0FBQUEsVUFDZCxNQUFNQSxLQUFLO0FBQUEsVUFDWCxPQUFPLG1CQUFtQixJQUFJO0FBQUEsVUFDOUIsTUFBTSxTQUFTLEVBQUUsT0FBTyxjQUFjLE1BQU0sR0FBRyxFQUFHLEdBQUUsZ0JBQWdCLE1BQU0sQ0FBQztBQUFBLFVBQzNFLFNBQVM7QUFBQSxRQUN6QjtBQUVZLHVCQUFlO0FBQ2YsWUFBSSxTQUFTLGFBQWEsZUFBZTtBQUNyQyxvQkFBVSxXQUFXO0FBQUEsUUFDeEIsV0FDUSxTQUFTLGFBQWEsYUFBYTtBQUN4QyxvQkFBVSxXQUFXO0FBQUEsUUFDeEIsV0FDUSxVQUFVLENBQUMsTUFBTSxRQUFRLE1BQU0sR0FBRztBQUN2QyxvQkFBVSxXQUFXLE9BQU87QUFBQSxRQUMvQjtBQUNELFlBQUksUUFBUTtBQUNSLG9CQUFVLEtBQUssYUFBYSxJQUFJO0FBQUEsWUFDNUIsU0FBUztBQUFBLGNBQ0wsU0FBUztBQUFBLGNBQ1QsTUFBTTtBQUFBLGNBQ04sU0FBUztBQUFBLGNBQ1QsT0FBTztBQUFBLFlBQ1Y7QUFBQSxVQUNyQjtBQUFBLFFBQ2E7QUFDRCxZQUFJLGlCQUFpQjtBQUFBLFVBQ2pCLFNBQVM7QUFBQSxVQUNULE9BQU87QUFBQSxRQUN2QixDQUFhO0FBQUEsTUFDSixHQUFFLEVBQUUsVUFBVSxNQUFNLE9BQU8sT0FBUSxDQUFBO0FBQ3BDLFlBQU0sWUFBWSxNQUFNO0FBQ3hCLFlBQU0sYUFBYWMsWUFBUSxDQUFDLGFBQWE7QUFDckMsa0JBQVUsUUFBUTtBQUNsQixZQUFJLGlCQUFpQjtBQUFBLFVBQ2pCLFNBQVM7QUFBQSxVQUNULE9BQU87QUFBQSxZQUNILE1BQU1kLEtBQUs7QUFBQSxZQUNYLE9BQU8sUUFBUSxNQUFNO0FBQUEsWUFDckIsVUFBVTtBQUFBLFlBQ1YsTUFBTTtBQUFBLGNBQ0YsT0FBTyxjQUFjLE1BQU0sR0FBRztBQUFBLGNBQzlCLE1BQU0sY0FBYyxZQUFZO0FBQUEsWUFDbkM7QUFBQSxVQUNKO0FBQUEsUUFDakIsQ0FBYTtBQUVELFlBQUksc0JBQXFCO0FBQ3pCLFlBQUksa0JBQWtCLFlBQVk7QUFDbEMsWUFBSSxtQkFBbUIsWUFBWTtBQUFBLE1BQy9DLENBQVM7QUFDRCxZQUFNLEVBQUUsU0FBVSxJQUFHO0FBQ3JCLFlBQU0sV0FBVyxNQUFNO0FBQ25CO0FBQ0EsWUFBSSxzQkFBcUI7QUFDekIsWUFBSSxrQkFBa0IsWUFBWTtBQUNsQyxZQUFJLG1CQUFtQixZQUFZO0FBQ25DLFlBQUksWUFBVyxFQUFHLG1CQUNkLGFBQWEsYUFBYSxNQUFNLGVBQWU7QUFBQSxNQUMvRDtBQUVRLFVBQUksc0JBQXFCO0FBQ3pCLFVBQUksa0JBQWtCLFlBQVk7QUFDbEMsVUFBSSxtQkFBbUIsWUFBWTtBQUNuQyxVQUFJLFlBQVcsRUFBRyxtQkFDZCxhQUFhLElBQUksTUFBTSx5QkFBeUI7QUFBQSxJQUM1RCxDQUFLO0FBQUEsRUFDTDtBQUNBLE1BQUksa0JBQWtCO0FBQ3RCLE1BQUk7QUFTSixXQUFTLHVCQUF1QixPQUFPLGFBQWE7QUFFaEQsVUFBTSxVQUFVLFlBQVksT0FBTyxDQUFDLGNBQWMsZUFBZTtBQUU3RCxtQkFBYSxVQUFVLElBQUlXLElBQUFBLE1BQU0sS0FBSyxFQUFFLFVBQVU7QUFDbEQsYUFBTztBQUFBLElBQ1YsR0FBRSxDQUFFLENBQUE7QUFDTCxlQUFXLGNBQWMsU0FBUztBQUM5QixZQUFNLFVBQVUsSUFBSSxXQUFZO0FBRzVCLGNBQU0sWUFBWTtBQUNsQixjQUFNLGVBQWUsSUFBSSxNQUFNLE9BQU87QUFBQSxVQUNsQyxPQUFPLE1BQU07QUFDVCwyQkFBZTtBQUNmLG1CQUFPLFFBQVEsSUFBSSxHQUFHLElBQUk7QUFBQSxVQUM3QjtBQUFBLFVBQ0QsT0FBTyxNQUFNO0FBQ1QsMkJBQWU7QUFDZixtQkFBTyxRQUFRLElBQUksR0FBRyxJQUFJO0FBQUEsVUFDN0I7QUFBQSxRQUNqQixDQUFhO0FBQ0QsZUFBTyxRQUFRLFVBQVUsRUFBRSxNQUFNLGNBQWMsU0FBUztBQUFBLE1BQ3BFO0FBQUEsSUFDSztBQUFBLEVBQ0w7QUFJQSxXQUFTLGVBQWUsRUFBRSxLQUFLLE9BQU8sUUFBTyxHQUFJO0FBRTdDLFFBQUksTUFBTSxJQUFJLFdBQVcsUUFBUSxHQUFHO0FBQ2hDO0FBQUEsSUFDSDtBQUVELFFBQUksUUFBUSxPQUFPO0FBQ2YsWUFBTSxnQkFBZ0I7QUFBQSxJQUN6QjtBQUdELFFBQUksT0FBTyxRQUFRLFVBQVUsWUFBWTtBQUNyQztBQUFBO0FBQUEsUUFFQTtBQUFBLFFBQU8sT0FBTyxLQUFLLFFBQVEsT0FBTztBQUFBLE1BQUM7QUFDbkMsWUFBTSxvQkFBb0IsTUFBTTtBQUVoQ0EsVUFBQUEsTUFBTSxLQUFLLEVBQUUsYUFBYSxTQUFVLFVBQVU7QUFDMUMsMEJBQWtCLE1BQU0sTUFBTSxTQUFTO0FBQ3ZDLCtCQUF1QixPQUFPLE9BQU8sS0FBSyxTQUFTLFlBQVksT0FBTyxDQUFDO0FBQUEsTUFDbkY7QUFBQSxJQUNLO0FBQ0Q7QUFBQSxNQUFtQjtBQUFBO0FBQUEsTUFFbkI7QUFBQSxJQUFLO0FBQUEsRUFDVDtBQUtBLFdBQVMsY0FBYztBQUNuQixVQUFNLFFBQVFJLGdCQUFZLElBQUk7QUFHOUIsVUFBTSxRQUFRLE1BQU0sSUFBSSxNQUFNQyxJQUFHLElBQUMsQ0FBRSxDQUFBLENBQUM7QUFDckMsUUFBSSxLQUFLLENBQUE7QUFFVCxRQUFJLGdCQUFnQixDQUFBO0FBQ3BCLFVBQU0sUUFBUUYsSUFBQUEsUUFBUTtBQUFBLE1BQ2xCLFFBQVEsS0FBSztBQUdULHVCQUFlLEtBQUs7QUFDUDtBQUNULGdCQUFNLEtBQUs7QUFDWCxjQUFJLFFBQVEsYUFBYSxLQUFLO0FBQzlCLGNBQUksT0FBTyxpQkFBaUIsU0FBUztBQUVyQyxjQUFJLGNBQWM7QUFDZCxrQ0FBc0IsS0FBSyxLQUFLO0FBQUEsVUFDbkM7QUFDRCx3QkFBYyxRQUFRLENBQUMsV0FBVyxHQUFHLEtBQUssTUFBTSxDQUFDO0FBQ2pELDBCQUFnQixDQUFBO0FBQUEsUUFDbkI7QUFBQSxNQUNKO0FBQUEsTUFDRCxJQUFJLFFBQVE7QUFDUixZQUFJLENBQUMsS0FBSyxNQUFNLENBQUMsUUFBUTtBQUNyQix3QkFBYyxLQUFLLE1BQU07QUFBQSxRQUM1QixPQUNJO0FBQ0QsYUFBRyxLQUFLLE1BQU07QUFBQSxRQUNqQjtBQUNELGVBQU87QUFBQSxNQUNWO0FBQUEsTUFDRDtBQUFBO0FBQUE7QUFBQSxNQUdBLElBQUk7QUFBQSxNQUNKLElBQUk7QUFBQSxNQUNKLElBQUksb0JBQUksSUFBSztBQUFBLE1BQ2I7QUFBQSxJQUNSLENBQUs7QUFHRCxRQUFJLGdCQUFnQixPQUFPLFVBQVUsYUFBYTtBQUM5QyxZQUFNLElBQUksY0FBYztBQUFBLElBQzNCO0FBQ0QsV0FBTztBQUFBLEVBQ1g7QUFRQSxRQUFNLGFBQWEsQ0FBQyxPQUFPO0FBQ3ZCLFdBQU8sT0FBTyxPQUFPLGNBQWMsT0FBTyxHQUFHLFFBQVE7QUFBQSxFQUN6RDtBQVVBLFdBQVMsWUFBWSxVQUFVLFVBQVU7QUFFckMsZUFBVyxPQUFPLFVBQVU7QUFDeEIsWUFBTSxXQUFXLFNBQVMsR0FBRztBQUU3QixVQUFJLEVBQUUsT0FBTyxXQUFXO0FBQ3BCO0FBQUEsTUFDSDtBQUNELFlBQU0sY0FBYyxTQUFTLEdBQUc7QUFDaEMsVUFBSSxjQUFjLFdBQVcsS0FDekIsY0FBYyxRQUFRLEtBQ3RCLENBQUNHLElBQUFBLE1BQU0sUUFBUSxLQUNmLENBQUNDLElBQUFBLFdBQVcsUUFBUSxHQUFHO0FBQ3ZCLGlCQUFTLEdBQUcsSUFBSSxZQUFZLGFBQWEsUUFBUTtBQUFBLE1BQ3BELE9BQ0k7QUFNSTtBQUNELG1CQUFTLEdBQUcsSUFBSTtBQUFBLFFBQ25CO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFDRCxXQUFPO0FBQUEsRUFDWDtBQWVBLFdBQVMsZ0JBQWdCLGlCQUFpQixLQUFLO0FBSzNDLFdBQU8sQ0FBQyxjQUFjO0FBQ2xCLFlBQU0sUUFBUSxJQUFJLEtBQUssU0FBUyxnQkFBZ0I7QUFDaEQsVUFBSSxDQUFDLE9BQU87QUFFUjtBQUFBLE1BQ0g7QUFFRCxVQUFJLEtBQUssUUFBUTtBQUVqQixpQkFBVyxjQUFjLFdBQVc7QUFDaEMsY0FBTSxXQUFXLFVBQVUsVUFBVTtBQUVyQyxZQUFJLFdBQVcsUUFBUSxLQUFLLE1BQU0sR0FBRyxJQUFJLFNBQVMsR0FBRyxHQUFHO0FBRXBELGdCQUFNLEtBQUssU0FBUztBQUNwQixjQUFJLE9BQU8sZ0JBQWdCLEtBQUs7QUFDNUIsb0JBQVEsS0FBSyxxQ0FBcUMsZ0JBQWdCLFlBQVksaUJBQWlCO0FBRS9GLG1CQUFPLElBQUk7VUFDZDtBQUNELGdCQUFNLGdCQUFnQixNQUFNLEdBQUcsSUFBSSxFQUFFO0FBQ3JDLGNBQUksQ0FBQyxlQUFlO0FBQ2hCLG9CQUFRLElBQUksdURBQXVEO0FBQ25FO0FBQUEsVUFDSDtBQUNELG1CQUFTLE9BQU8sYUFBYTtBQUFBLFFBQ2hDO0FBQUEsTUFDSjtBQUFBLElBQ1Q7QUFBQSxFQUNBO0FBRUEsUUFBTSxPQUFPLE1BQU07QUFBQSxFQUFBO0FBQ25CLFdBQVMsZ0JBQWdCLGVBQWUsVUFBVSxVQUFVLFlBQVksTUFBTTtBQUMxRSxrQkFBYyxLQUFLLFFBQVE7QUFDM0IsVUFBTSxxQkFBcUIsTUFBTTtBQUM3QixZQUFNLE1BQU0sY0FBYyxRQUFRLFFBQVE7QUFDMUMsVUFBSSxNQUFNLElBQUk7QUFDVixzQkFBYyxPQUFPLEtBQUssQ0FBQztBQUMzQjtNQUNIO0FBQUEsSUFDVDtBQUNJLFFBQUksQ0FBQyxZQUFZQyxJQUFBQSxtQkFBbUI7QUFDaENDLFVBQWMsZUFBQyxrQkFBa0I7QUFBQSxJQUNwQztBQUNELFdBQU87QUFBQSxFQUNYO0FBQ0EsV0FBUyxxQkFBcUIsa0JBQWtCLE1BQU07QUFDbEQsa0JBQWMsTUFBSyxFQUFHLFFBQVEsQ0FBQyxhQUFhO0FBQ3hDLGVBQVMsR0FBRyxJQUFJO0FBQUEsSUFDeEIsQ0FBSztBQUFBLEVBQ0w7QUFFQSxXQUFTLHFCQUFxQixRQUFRLGNBQWM7QUFFaEQsUUFBSSxrQkFBa0IsT0FBTyx3QkFBd0IsS0FBSztBQUN0RCxtQkFBYSxRQUFRLENBQUMsT0FBTyxRQUFRLE9BQU8sSUFBSSxLQUFLLEtBQUssQ0FBQztBQUFBLElBQzlEO0FBRUQsUUFBSSxrQkFBa0IsT0FBTyx3QkFBd0IsS0FBSztBQUN0RCxtQkFBYSxRQUFRLE9BQU8sS0FBSyxNQUFNO0FBQUEsSUFDMUM7QUFFRCxlQUFXLE9BQU8sY0FBYztBQUM1QixVQUFJLENBQUMsYUFBYSxlQUFlLEdBQUc7QUFDaEM7QUFDSixZQUFNLFdBQVcsYUFBYSxHQUFHO0FBQ2pDLFlBQU0sY0FBYyxPQUFPLEdBQUc7QUFDOUIsVUFBSSxjQUFjLFdBQVcsS0FDekIsY0FBYyxRQUFRLEtBQ3RCLE9BQU8sZUFBZSxHQUFHLEtBQ3pCLENBQUNILElBQUFBLE1BQU0sUUFBUSxLQUNmLENBQUNDLElBQUFBLFdBQVcsUUFBUSxHQUFHO0FBSXZCLGVBQU8sR0FBRyxJQUFJLHFCQUFxQixhQUFhLFFBQVE7QUFBQSxNQUMzRCxPQUNJO0FBRUQsZUFBTyxHQUFHLElBQUk7QUFBQSxNQUNqQjtBQUFBLElBQ0o7QUFDRCxXQUFPO0FBQUEsRUFDWDtBQUNBLFFBQU0sb0JBQ0EsT0FBTyxxQkFBcUI7QUFVbEMsV0FBUyxZQUFZLEtBQUs7QUFDdEIsV0FHTSxPQUFPLGVBQWUsS0FBSyxtQkFBbUIsQ0FBRSxDQUFBO0FBQUEsRUFDMUQ7QUFPQSxXQUFTLGNBQWMsS0FBSztBQUN4QixXQUVNLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxJQUFJLGVBQWUsaUJBQWlCO0FBQUEsRUFDdEU7QUFDQSxRQUFNLEVBQUUsT0FBUSxJQUFHO0FBQ25CLFdBQVMsV0FBVyxHQUFHO0FBQ25CLFdBQU8sQ0FBQyxFQUFFRCxJQUFBQSxNQUFNLENBQUMsS0FBSyxFQUFFO0FBQUEsRUFDNUI7QUFDQSxXQUFTLG1CQUFtQixJQUFJLFNBQVMsT0FBTyxLQUFLO0FBQ2pELFVBQU0sRUFBRSxPQUFPLFNBQVMsUUFBTyxJQUFLO0FBQ3BDLFVBQU0sZUFBZSxNQUFNLE1BQU0sTUFBTSxFQUFFO0FBQ3pDLFFBQUk7QUFDSixhQUFTLFFBQVE7QUFDYixVQUFJLENBQUMsZ0JBQTZELENBQUMsS0FBTTtBQUtoRTtBQUNELGdCQUFNLE1BQU0sTUFBTSxFQUFFLElBQUksUUFBUSxNQUFPLElBQUc7UUFDN0M7QUFBQSxNQUNKO0FBRUQsWUFBTSxhQUF3RDtBQUFBO0FBQUEsUUFFdERJLElBQU0sT0FBQ0wsSUFBRyxJQUFDLFFBQVEsTUFBSyxJQUFLLENBQUEsQ0FBRSxFQUFFLEtBQUs7QUFBQSxVQUN4Q0ssSUFBQUEsT0FBTyxNQUFNLE1BQU0sTUFBTSxFQUFFLENBQUM7QUFDbEMsYUFBTyxPQUFPLFlBQVksU0FBUyxPQUFPLEtBQUssV0FBVyxDQUFBLENBQUUsRUFBRSxPQUFPLENBQUMsaUJBQWlCLFNBQVM7QUFDNUYsWUFBK0MsUUFBUSxZQUFZO0FBQy9ELGtCQUFRLEtBQUssdUdBQXVHLG1CQUFtQixNQUFNO0FBQUEsUUFDaEo7QUFDRCx3QkFBZ0IsSUFBSSxJQUFJUCxJQUFPLFFBQUNRLElBQVEsU0FBQyxNQUFNO0FBQzNDLHlCQUFlLEtBQUs7QUFFcEIsZ0JBQU1aLFNBQVEsTUFBTSxHQUFHLElBQUksRUFBRTtBQVE3QixpQkFBTyxRQUFRLElBQUksRUFBRSxLQUFLQSxRQUFPQSxNQUFLO0FBQUEsUUFDekMsQ0FBQSxDQUFDO0FBQ0YsZUFBTztBQUFBLE1BQ25CLEdBQVcsQ0FBQSxDQUFFLENBQUM7QUFBQSxJQUNUO0FBQ0QsWUFBUSxpQkFBaUIsSUFBSSxPQUFPLFNBQVMsT0FBTyxLQUFLLElBQUk7QUFDN0QsV0FBTztBQUFBLEVBQ1g7QUFDQSxXQUFTLGlCQUFpQixLQUFLLE9BQU8sVUFBVSxDQUFBLEdBQUksT0FBTyxLQUFLLGdCQUFnQjtBQUM1RSxRQUFJO0FBQ0osVUFBTSxtQkFBbUIsT0FBTyxFQUFFLFNBQVMsQ0FBRSxFQUFBLEdBQUksT0FBTztBQUV4RCxRQUErQyxDQUFDLE1BQU0sR0FBRyxRQUFRO0FBQzdELFlBQU0sSUFBSSxNQUFNLGlCQUFpQjtBQUFBLElBQ3BDO0FBRUQsVUFBTSxvQkFBb0I7QUFBQSxNQUN0QixNQUFNO0FBQUE7QUFBQSxJQUVkO0FBRTREO0FBQ3BELHdCQUFrQixZQUFZLENBQUMsVUFBVTtBQUVyQyxZQUFJLGFBQWE7QUFDYiwyQkFBaUI7QUFBQSxRQUVwQixXQUNRLGVBQWUsU0FBUyxDQUFDLE1BQU0sY0FBYztBQUdsRCxjQUFJLE1BQU0sUUFBUSxjQUFjLEdBQUc7QUFDL0IsMkJBQWUsS0FBSyxLQUFLO0FBQUEsVUFDNUIsT0FDSTtBQUNELG9CQUFRLE1BQU0sa0ZBQWtGO0FBQUEsVUFDbkc7QUFBQSxRQUNKO0FBQUEsTUFDYjtBQUFBLElBQ0s7QUFFRCxRQUFJO0FBQ0osUUFBSTtBQUNKLFFBQUksZ0JBQWdCSSxZQUFRLENBQUEsQ0FBRTtBQUM5QixRQUFJLHNCQUFzQkEsWUFBUSxDQUFBLENBQUU7QUFDcEMsUUFBSTtBQUNKLFVBQU0sZUFBZSxNQUFNLE1BQU0sTUFBTSxHQUFHO0FBRzFDLFFBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBNkQsQ0FBQyxLQUFNO0FBS25GO0FBQ0QsY0FBTSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUE7QUFBQSxNQUM1QjtBQUFBLElBQ0o7QUFDRCxVQUFNLFdBQVdFLFFBQUksQ0FBQSxDQUFFO0FBR3ZCLFFBQUk7QUFDSixhQUFTLE9BQU8sdUJBQXVCO0FBQ25DLFVBQUk7QUFDSixvQkFBYyxrQkFBa0I7QUFHYTtBQUN6Qyx5QkFBaUIsQ0FBQTtBQUFBLE1BQ3BCO0FBQ0QsVUFBSSxPQUFPLDBCQUEwQixZQUFZO0FBQzdDLDhCQUFzQixNQUFNLE1BQU0sTUFBTSxHQUFHLENBQUM7QUFDNUMsK0JBQXVCO0FBQUEsVUFDbkIsTUFBTSxhQUFhO0FBQUEsVUFDbkIsU0FBUztBQUFBLFVBQ1QsUUFBUTtBQUFBLFFBQ3hCO0FBQUEsTUFDUyxPQUNJO0FBQ0QsNkJBQXFCLE1BQU0sTUFBTSxNQUFNLEdBQUcsR0FBRyxxQkFBcUI7QUFDbEUsK0JBQXVCO0FBQUEsVUFDbkIsTUFBTSxhQUFhO0FBQUEsVUFDbkIsU0FBUztBQUFBLFVBQ1QsU0FBUztBQUFBLFVBQ1QsUUFBUTtBQUFBLFFBQ3hCO0FBQUEsTUFDUztBQUNELFlBQU0sZUFBZ0IsaUJBQWlCLE9BQU07QUFDN0NPLFVBQVEsU0FBQSxFQUFHLEtBQUssTUFBTTtBQUNsQixZQUFJLG1CQUFtQixjQUFjO0FBQ2pDLHdCQUFjO0FBQUEsUUFDakI7QUFBQSxNQUNiLENBQVM7QUFDRCx3QkFBa0I7QUFFbEIsMkJBQXFCLGVBQWUsc0JBQXNCLE1BQU0sTUFBTSxNQUFNLEdBQUcsQ0FBQztBQUFBLElBQ25GO0FBQ0QsVUFBTSxTQUFTLGlCQUNULFNBQVNDLFVBQVM7QUFDaEIsWUFBTSxFQUFFLE1BQU8sSUFBRztBQUNsQixZQUFNLFdBQVcsUUFBUSxNQUFLLElBQUssQ0FBQTtBQUVuQyxXQUFLLE9BQU8sQ0FBQyxXQUFXO0FBQ3BCLGVBQU8sUUFBUSxRQUFRO0FBQUEsTUFDdkMsQ0FBYTtBQUFBLElBQ0o7QUFBQTtBQUFBLE1BR1MsTUFBTTtBQUNKLGNBQU0sSUFBSSxNQUFNLGNBQWMsdUVBQXVFO0FBQUEsTUFDeEc7QUFBQTtBQUViLGFBQVMsV0FBVztBQUNoQixZQUFNLEtBQUk7QUFDVixzQkFBZ0IsQ0FBQTtBQUNoQiw0QkFBc0IsQ0FBQTtBQUN0QixZQUFNLEdBQUcsT0FBTyxHQUFHO0FBQUEsSUFDdEI7QUFRRCxhQUFTLFdBQVcsTUFBTSxRQUFRO0FBQzlCLGFBQU8sV0FBWTtBQUNmLHVCQUFlLEtBQUs7QUFDcEIsY0FBTSxPQUFPLE1BQU0sS0FBSyxTQUFTO0FBQ2pDLGNBQU0sb0JBQW9CLENBQUE7QUFDMUIsY0FBTSxzQkFBc0IsQ0FBQTtBQUM1QixpQkFBUyxNQUFNLFVBQVU7QUFDckIsNEJBQWtCLEtBQUssUUFBUTtBQUFBLFFBQ2xDO0FBQ0QsaUJBQVMsUUFBUSxVQUFVO0FBQ3ZCLDhCQUFvQixLQUFLLFFBQVE7QUFBQSxRQUNwQztBQUVELDZCQUFxQixxQkFBcUI7QUFBQSxVQUN0QztBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNoQixDQUFhO0FBQ0QsWUFBSTtBQUNKLFlBQUk7QUFDQSxnQkFBTSxPQUFPLE1BQU0sUUFBUSxLQUFLLFFBQVEsTUFBTSxPQUFPLE9BQU8sSUFBSTtBQUFBLFFBRW5FLFNBQ00sT0FBUDtBQUNJLCtCQUFxQixxQkFBcUIsS0FBSztBQUMvQyxnQkFBTTtBQUFBLFFBQ1Q7QUFDRCxZQUFJLGVBQWUsU0FBUztBQUN4QixpQkFBTyxJQUNGLEtBQUssQ0FBQyxVQUFVO0FBQ2pCLGlDQUFxQixtQkFBbUIsS0FBSztBQUM3QyxtQkFBTztBQUFBLFVBQzNCLENBQWlCLEVBQ0ksTUFBTSxDQUFDLFVBQVU7QUFDbEIsaUNBQXFCLHFCQUFxQixLQUFLO0FBQy9DLG1CQUFPLFFBQVEsT0FBTyxLQUFLO0FBQUEsVUFDL0MsQ0FBaUI7QUFBQSxRQUNKO0FBRUQsNkJBQXFCLG1CQUFtQixHQUFHO0FBQzNDLGVBQU87QUFBQSxNQUNuQjtBQUFBLElBQ0s7QUFDRCxVQUFNLGNBQTRCVixvQkFBQUEsUUFBUTtBQUFBLE1BQ3RDLFNBQVMsQ0FBRTtBQUFBLE1BQ1gsU0FBUyxDQUFFO0FBQUEsTUFDWCxPQUFPLENBQUU7QUFBQSxNQUNUO0FBQUEsSUFDUixDQUFLO0FBQ0QsVUFBTSxlQUFlO0FBQUEsTUFDakIsSUFBSTtBQUFBO0FBQUEsTUFFSjtBQUFBLE1BQ0EsV0FBVyxnQkFBZ0IsS0FBSyxNQUFNLG1CQUFtQjtBQUFBLE1BQ3pEO0FBQUEsTUFDQTtBQUFBLE1BQ0EsV0FBVyxVQUFVVyxXQUFVLElBQUk7QUFDL0IsY0FBTSxxQkFBcUIsZ0JBQWdCLGVBQWUsVUFBVUEsU0FBUSxVQUFVLE1BQU0sWUFBVyxDQUFFO0FBQ3pHLGNBQU0sY0FBYyxNQUFNLElBQUksTUFBTWIsSUFBQUEsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLFVBQVU7QUFDL0UsY0FBSWEsU0FBUSxVQUFVLFNBQVMsa0JBQWtCLGFBQWE7QUFDMUQscUJBQVM7QUFBQSxjQUNMLFNBQVM7QUFBQSxjQUNULE1BQU0sYUFBYTtBQUFBLGNBQ25CLFFBQVE7QUFBQSxZQUNYLEdBQUUsS0FBSztBQUFBLFVBQ1g7QUFBQSxRQUNKLEdBQUUsT0FBTyxDQUFFLEdBQUUsbUJBQW1CQSxRQUFPLENBQUMsQ0FBQztBQUMxQyxlQUFPO0FBQUEsTUFDVjtBQUFBLE1BQ0Q7QUFBQSxJQUNSO0FBTUksVUFBTSxRQUFRQyxJQUFRO0FBQUEsTUFDaEI7QUFBQSxRQUFPO0FBQUEsVUFDTDtBQUFBLFVBQ0EsbUJBQW1CWixJQUFBQSxRQUFRLG9CQUFJLEtBQUs7QUFBQTtBQUFBLFFBQ2hEO0FBQUEsUUFBVztBQUFBO0FBQUE7QUFBQSxNQUdGO0FBQUEsSUFDYTtBQUdsQixVQUFNLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFFdkIsVUFBTSxhQUFhLE1BQU0sR0FBRyxJQUFJLE1BQU07QUFDbEMsY0FBUUMsSUFBVyxZQUFBO0FBQ25CLGFBQU8sTUFBTSxJQUFJLE1BQU0sTUFBTyxDQUFBO0FBQUEsSUFDdEMsQ0FBSztBQUVELGVBQVcsT0FBTyxZQUFZO0FBQzFCLFlBQU0sT0FBTyxXQUFXLEdBQUc7QUFDM0IsVUFBS0UsSUFBQUEsTUFBTSxJQUFJLEtBQUssQ0FBQyxXQUFXLElBQUksS0FBTUMsZUFBVyxJQUFJLEdBQUc7QUFFeEQsWUFBK0MsS0FBSztBQUNoRCxjQUFJLFNBQVMsT0FBTyxLQUFLUyxJQUFBQSxNQUFNLFlBQVksR0FBRyxDQUFDO0FBQUEsUUFHbEQsV0FDUSxDQUFDLGdCQUFnQjtBQUV0QixjQUFJLGdCQUFnQixjQUFjLElBQUksR0FBRztBQUNyQyxnQkFBSVYsSUFBQUEsTUFBTSxJQUFJLEdBQUc7QUFDYixtQkFBSyxRQUFRLGFBQWEsR0FBRztBQUFBLFlBQ2hDLE9BQ0k7QUFHRCxtQ0FBcUIsTUFBTSxhQUFhLEdBQUcsQ0FBQztBQUFBLFlBQy9DO0FBQUEsVUFDSjtBQU1JO0FBQ0Qsa0JBQU0sTUFBTSxNQUFNLEdBQUcsRUFBRSxHQUFHLElBQUk7QUFBQSxVQUNqQztBQUFBLFFBQ0o7QUFFNEM7QUFDekMsc0JBQVksTUFBTSxLQUFLLEdBQUc7QUFBQSxRQUM3QjtBQUFBLE1BRUosV0FDUSxPQUFPLFNBQVMsWUFBWTtBQUVqQyxjQUFNLGNBQXlELE1BQU0sT0FBTyxXQUFXLEtBQUssSUFBSTtBQU8zRjtBQUVELHFCQUFXLEdBQUcsSUFBSTtBQUFBLFFBQ3JCO0FBRTRDO0FBQ3pDLHNCQUFZLFFBQVEsR0FBRyxJQUFJO0FBQUEsUUFDOUI7QUFHRCx5QkFBaUIsUUFBUSxHQUFHLElBQUk7QUFBQSxNQUNuQyxPQUNpRDtBQUU5QyxZQUFJLFdBQVcsSUFBSSxHQUFHO0FBQ2xCLHNCQUFZLFFBQVEsR0FBRyxJQUFJO0FBQUE7QUFBQSxZQUVuQixRQUFRLFFBQVEsR0FBRztBQUFBLGNBQ3JCO0FBQ04sY0FBSSxXQUFXO0FBQ1gsa0JBQU0sVUFBVSxXQUFXO0FBQUEsYUFFdEIsV0FBVyxXQUFXSCxZQUFRLENBQUEsQ0FBRTtBQUNyQyxvQkFBUSxLQUFLLEdBQUc7QUFBQSxVQUNuQjtBQUFBLFFBQ0o7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQVFJO0FBQ0QsYUFBTyxPQUFPLFVBQVU7QUFHeEIsYUFBT0gsSUFBSyxNQUFDLEtBQUssR0FBRyxVQUFVO0FBQUEsSUFDbEM7QUFJRCxXQUFPLGVBQWUsT0FBTyxVQUFVO0FBQUEsTUFDbkMsS0FBSyxNQUFrRCxNQUFNLFNBQVMsUUFBUSxNQUFNLE1BQU0sTUFBTSxHQUFHO0FBQUEsTUFDbkcsS0FBSyxDQUFDLFVBQVU7QUFFWixZQUErQyxLQUFLO0FBQ2hELGdCQUFNLElBQUksTUFBTSxxQkFBcUI7QUFBQSxRQUN4QztBQUNELGVBQU8sQ0FBQyxXQUFXO0FBQ2YsaUJBQU8sUUFBUSxLQUFLO0FBQUEsUUFDcEMsQ0FBYTtBQUFBLE1BQ0o7QUFBQSxJQUNULENBQUs7QUFHNEM7QUFDekMsWUFBTSxhQUFhRyxZQUFRLENBQUMsYUFBYTtBQUNyQyxjQUFNLGVBQWU7QUFDckIsaUJBQVMsWUFBWSxNQUFNLFFBQVEsQ0FBQyxhQUFhO0FBQzdDLGNBQUksWUFBWSxNQUFNLFFBQVE7QUFDMUIsa0JBQU0saUJBQWlCLFNBQVMsT0FBTyxRQUFRO0FBQy9DLGtCQUFNLGlCQUFpQixNQUFNLE9BQU8sUUFBUTtBQUM1QyxnQkFBSSxPQUFPLG1CQUFtQixZQUMxQixjQUFjLGNBQWMsS0FDNUIsY0FBYyxjQUFjLEdBQUc7QUFDL0IsMEJBQVksZ0JBQWdCLGNBQWM7QUFBQSxZQUM3QyxPQUNJO0FBRUQsdUJBQVMsT0FBTyxRQUFRLElBQUk7QUFBQSxZQUMvQjtBQUFBLFVBQ0o7QUFHRCxjQUFJLE9BQU8sVUFBVWEsSUFBQUEsTUFBTSxTQUFTLFFBQVEsUUFBUSxDQUFDO0FBQUEsUUFDckUsQ0FBYTtBQUVELGVBQU8sS0FBSyxNQUFNLE1BQU0sRUFBRSxRQUFRLENBQUMsYUFBYTtBQUM1QyxjQUFJLEVBQUUsWUFBWSxTQUFTLFNBQVM7QUFDaEMsZ0JBQUksT0FBTyxRQUFRO0FBQUEsVUFDdEI7QUFBQSxRQUNqQixDQUFhO0FBRUQsc0JBQWM7QUFDZCwwQkFBa0I7QUFDbEIsY0FBTSxNQUFNLE1BQU0sR0FBRyxJQUFJQSxJQUFBQSxNQUFNLFNBQVMsYUFBYSxVQUFVO0FBQy9ELDBCQUFrQjtBQUNsQkosWUFBUSxTQUFBLEVBQUcsS0FBSyxNQUFNO0FBQ2xCLHdCQUFjO0FBQUEsUUFDOUIsQ0FBYTtBQUNELG1CQUFXLGNBQWMsU0FBUyxZQUFZLFNBQVM7QUFDbkQsZ0JBQU0sU0FBUyxTQUFTLFVBQVU7QUFDbEMsY0FBSSxPQUFPLFlBQVksV0FBVyxZQUFZLE1BQU0sQ0FBQztBQUFBLFFBQ3hEO0FBRUQsbUJBQVcsY0FBYyxTQUFTLFlBQVksU0FBUztBQUNuRCxnQkFBTSxTQUFTLFNBQVMsWUFBWSxRQUFRLFVBQVU7QUFDdEQsZ0JBQU0sY0FBYztBQUFBO0FBQUEsWUFFWkQsSUFBQUEsU0FBUyxNQUFNO0FBQ1gsNkJBQWUsS0FBSztBQUNwQixxQkFBTyxPQUFPLEtBQUssT0FBTyxLQUFLO0FBQUEsWUFDM0QsQ0FBeUI7QUFBQSxjQUNIO0FBQ04sY0FBSSxPQUFPLFlBQVksV0FBVztBQUFBLFFBQ3JDO0FBRUQsZUFBTyxLQUFLLE1BQU0sWUFBWSxPQUFPLEVBQUUsUUFBUSxDQUFDLFFBQVE7QUFDcEQsY0FBSSxFQUFFLE9BQU8sU0FBUyxZQUFZLFVBQVU7QUFDeEMsZ0JBQUksT0FBTyxHQUFHO0FBQUEsVUFDakI7QUFBQSxRQUNqQixDQUFhO0FBRUQsZUFBTyxLQUFLLE1BQU0sWUFBWSxPQUFPLEVBQUUsUUFBUSxDQUFDLFFBQVE7QUFDcEQsY0FBSSxFQUFFLE9BQU8sU0FBUyxZQUFZLFVBQVU7QUFDeEMsZ0JBQUksT0FBTyxHQUFHO0FBQUEsVUFDakI7QUFBQSxRQUNqQixDQUFhO0FBRUQsY0FBTSxjQUFjLFNBQVM7QUFDN0IsY0FBTSxXQUFXLFNBQVM7QUFDMUIsY0FBTSxlQUFlO0FBQUEsTUFDakMsQ0FBUztBQUFBLElBQ0o7QUFDRCxRQUFJLGNBQWM7QUFDZCxZQUFNLGdCQUFnQjtBQUFBLFFBQ2xCLFVBQVU7QUFBQSxRQUNWLGNBQWM7QUFBQTtBQUFBLFFBRWQsWUFBWTtBQUFBLE1BQ3hCO0FBQ1EsT0FBQyxNQUFNLGVBQWUsWUFBWSxtQkFBbUIsRUFBRSxRQUFRLENBQUMsTUFBTTtBQUNsRSxlQUFPLGVBQWUsT0FBTyxHQUFHLE9BQU8sRUFBRSxPQUFPLE1BQU0sQ0FBQyxLQUFLLGFBQWEsQ0FBQztBQUFBLE1BQ3RGLENBQVM7QUFBQSxJQUNKO0FBT0QsVUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhO0FBRTNCLFVBQUksY0FBYztBQUNkLGNBQU0sYUFBYSxNQUFNLElBQUksTUFBTSxTQUFTO0FBQUEsVUFDeEM7QUFBQSxVQUNBLEtBQUssTUFBTTtBQUFBLFVBQ1g7QUFBQSxVQUNBLFNBQVM7QUFBQSxRQUNaLENBQUEsQ0FBQztBQUNGLGVBQU8sS0FBSyxjQUFjLENBQUEsQ0FBRSxFQUFFLFFBQVEsQ0FBQyxRQUFRLE1BQU0sa0JBQWtCLElBQUksR0FBRyxDQUFDO0FBQy9FLGVBQU8sT0FBTyxVQUFVO0FBQUEsTUFDM0IsT0FDSTtBQUNELGVBQU8sT0FBTyxNQUFNLElBQUksTUFBTSxTQUFTO0FBQUEsVUFDbkM7QUFBQSxVQUNBLEtBQUssTUFBTTtBQUFBLFVBQ1g7QUFBQSxVQUNBLFNBQVM7QUFBQSxRQUNaLENBQUEsQ0FBQyxDQUFDO0FBQUEsTUFDTjtBQUFBLElBQ1QsQ0FBSztBQUNELFFBQ0ksTUFBTSxVQUNOLE9BQU8sTUFBTSxXQUFXLFlBQ3hCLE9BQU8sTUFBTSxPQUFPLGdCQUFnQixjQUNwQyxDQUFDLE1BQU0sT0FBTyxZQUFZLFNBQVEsRUFBRyxTQUFTLGVBQWUsR0FBRztBQUNoRSxjQUFRLEtBQUs7QUFBQTtBQUFBLGtCQUVVLE1BQU0sT0FBTztBQUFBLElBQ3ZDO0FBRUQsUUFBSSxnQkFDQSxrQkFDQSxRQUFRLFNBQVM7QUFDakIsY0FBUSxRQUFRLE1BQU0sUUFBUSxZQUFZO0FBQUEsSUFDN0M7QUFDRCxrQkFBYztBQUNkLHNCQUFrQjtBQUNsQixXQUFPO0FBQUEsRUFDWDtBQUNBLFdBQVMsWUFFVCxhQUFhLE9BQU8sY0FBYztBQUM5QixRQUFJO0FBQ0osUUFBSTtBQUNKLFVBQU0sZUFBZSxPQUFPLFVBQVU7QUFDdEMsUUFBSSxPQUFPLGdCQUFnQixVQUFVO0FBQ2pDLFdBQUs7QUFFTCxnQkFBVSxlQUFlLGVBQWU7QUFBQSxJQUMzQyxPQUNJO0FBQ0QsZ0JBQVU7QUFDVixXQUFLLFlBQVk7QUFBQSxJQUNwQjtBQUNELGFBQVMsU0FBUyxPQUFPLEtBQUs7QUFDMUIsWUFBTSxrQkFBa0IvQyxJQUFBQTtBQUN4QjtBQUFBO0FBQUEsTUFHdUYsU0FDOUUsbUJBQW1CK0IsSUFBTSxPQUFDLGFBQWEsSUFBSTtBQUNwRCxVQUFJO0FBQ0EsdUJBQWUsS0FBSztBQUN4QixVQUErQyxDQUFDLGFBQWE7QUFDekQsY0FBTSxJQUFJLE1BQU07QUFBQTtBQUFBO0FBQUEsOEJBR21CO0FBQUEsTUFDdEM7QUFDRCxjQUFRO0FBQ1IsVUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEVBQUUsR0FBRztBQUVuQixZQUFJLGNBQWM7QUFDZCwyQkFBaUIsSUFBSSxPQUFPLFNBQVMsS0FBSztBQUFBLFFBQzdDLE9BQ0k7QUFDRCw2QkFBbUIsSUFBSSxTQUFTLEtBQUs7QUFBQSxRQUN4QztBQUU0QztBQUV6QyxtQkFBUyxTQUFTO0FBQUEsUUFDckI7QUFBQSxNQUNKO0FBQ0QsWUFBTSxRQUFRLE1BQU0sR0FBRyxJQUFJLEVBQUU7QUFDN0IsVUFBK0MsS0FBSztBQUNoRCxjQUFNLFFBQVEsV0FBVztBQUN6QixjQUFNLFdBQVcsZUFDWCxpQkFBaUIsT0FBTyxPQUFPLFNBQVMsT0FBTyxJQUFJLElBQ25ELG1CQUFtQixPQUFPLE9BQU8sQ0FBQSxHQUFJLE9BQU8sR0FBRyxPQUFPLElBQUk7QUFDaEUsWUFBSSxXQUFXLFFBQVE7QUFFdkIsZUFBTyxNQUFNLE1BQU0sTUFBTSxLQUFLO0FBQzlCLGNBQU0sR0FBRyxPQUFPLEtBQUs7QUFBQSxNQUN4QjtBQUVELFVBQ0ksYUFDQSxtQkFDQSxnQkFBZ0I7QUFBQSxNQUVoQixDQUFDLEtBQUs7QUFDTixjQUFNLEtBQUssZ0JBQWdCO0FBQzNCLGNBQU0sUUFBUSxjQUFjLEtBQUssR0FBRyxXQUFZLEdBQUcsV0FBVyxDQUFBO0FBQzlELGNBQU0sRUFBRSxJQUFJO0FBQUEsTUFDZjtBQUVELGFBQU87QUFBQSxJQUNWO0FBQ0QsYUFBUyxNQUFNO0FBQ2YsV0FBTztBQUFBLEVBQ1g7QUFFQSxNQUFJLGlCQUFpQjtBQVFyQixXQUFTLGtCQUFrQixRQUN6QjtBQUNFLHFCQUFpQjtBQUFBLEVBQ3JCO0FBdUJBLFdBQVMsYUFBYSxRQUFRO0FBQzFCLFFBQStDLE1BQU0sUUFBUSxPQUFPLENBQUMsQ0FBQyxHQUFHO0FBQ3JFLGNBQVEsS0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBS21DO0FBQ2hELGVBQVMsT0FBTyxDQUFDO0FBQUEsSUFDcEI7QUFDRCxXQUFPLE9BQU8sT0FBTyxDQUFDLFNBQVMsYUFBYTtBQUV4QyxjQUFRLFNBQVMsTUFBTSxjQUFjLElBQUksV0FBWTtBQUNqRCxlQUFPLFNBQVMsS0FBSyxNQUFNO0FBQUEsTUFDdkM7QUFDUSxhQUFPO0FBQUEsSUFDVixHQUFFLENBQUUsQ0FBQTtBQUFBLEVBQ1Q7QUFTQSxXQUFTLFNBQVMsVUFBVSxjQUFjO0FBQ3RDLFdBQU8sTUFBTSxRQUFRLFlBQVksSUFDM0IsYUFBYSxPQUFPLENBQUMsU0FBUyxRQUFRO0FBQ3BDLGNBQVEsR0FBRyxJQUFJLFdBQVk7QUFDdkIsZUFBTyxTQUFTLEtBQUssTUFBTSxFQUFFLEdBQUc7QUFBQSxNQUNoRDtBQUNZLGFBQU87QUFBQSxJQUNWLEdBQUUsRUFBRSxJQUNILE9BQU8sS0FBSyxZQUFZLEVBQUUsT0FBTyxDQUFDLFNBQVMsUUFBUTtBQUVqRCxjQUFRLEdBQUcsSUFBSSxXQUFZO0FBQ3ZCLGNBQU0sUUFBUSxTQUFTLEtBQUssTUFBTTtBQUNsQyxjQUFNLFdBQVcsYUFBYSxHQUFHO0FBR2pDLGVBQU8sT0FBTyxhQUFhLGFBQ3JCLFNBQVMsS0FBSyxNQUFNLEtBQUssSUFDekIsTUFBTSxRQUFRO0FBQUEsTUFDcEM7QUFDWSxhQUFPO0FBQUEsSUFDVixHQUFFLENBQUUsQ0FBQTtBQUFBLEVBQ2I7QUFLQSxRQUFNLGFBQWE7QUFTbkIsV0FBUyxXQUFXLFVBQVUsY0FBYztBQUN4QyxXQUFPLE1BQU0sUUFBUSxZQUFZLElBQzNCLGFBQWEsT0FBTyxDQUFDLFNBQVMsUUFBUTtBQUVwQyxjQUFRLEdBQUcsSUFBSSxZQUFhLE1BQU07QUFDOUIsZUFBTyxTQUFTLEtBQUssTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUk7QUFBQSxNQUN6RDtBQUNZLGFBQU87QUFBQSxJQUNWLEdBQUUsRUFBRSxJQUNILE9BQU8sS0FBSyxZQUFZLEVBQUUsT0FBTyxDQUFDLFNBQVMsUUFBUTtBQUVqRCxjQUFRLEdBQUcsSUFBSSxZQUFhLE1BQU07QUFDOUIsZUFBTyxTQUFTLEtBQUssTUFBTSxFQUFFLGFBQWEsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJO0FBQUEsTUFDdkU7QUFDWSxhQUFPO0FBQUEsSUFDVixHQUFFLENBQUUsQ0FBQTtBQUFBLEVBQ2I7QUFTQSxXQUFTLGlCQUFpQixVQUFVLGNBQWM7QUFDOUMsV0FBTyxNQUFNLFFBQVEsWUFBWSxJQUMzQixhQUFhLE9BQU8sQ0FBQyxTQUFTLFFBQVE7QUFFcEMsY0FBUSxHQUFHLElBQUk7QUFBQSxRQUNYLE1BQU07QUFDRixpQkFBTyxTQUFTLEtBQUssTUFBTSxFQUFFLEdBQUc7QUFBQSxRQUNuQztBQUFBLFFBQ0QsSUFBSSxPQUFPO0FBRVAsaUJBQVEsU0FBUyxLQUFLLE1BQU0sRUFBRSxHQUFHLElBQUk7QUFBQSxRQUN4QztBQUFBLE1BQ2pCO0FBQ1ksYUFBTztBQUFBLElBQ1YsR0FBRSxFQUFFLElBQ0gsT0FBTyxLQUFLLFlBQVksRUFBRSxPQUFPLENBQUMsU0FBUyxRQUFRO0FBRWpELGNBQVEsR0FBRyxJQUFJO0FBQUEsUUFDWCxNQUFNO0FBQ0YsaUJBQU8sU0FBUyxLQUFLLE1BQU0sRUFBRSxhQUFhLEdBQUcsQ0FBQztBQUFBLFFBQ2pEO0FBQUEsUUFDRCxJQUFJLE9BQU87QUFFUCxpQkFBUSxTQUFTLEtBQUssTUFBTSxFQUFFLGFBQWEsR0FBRyxDQUFDLElBQUk7QUFBQSxRQUN0RDtBQUFBLE1BQ2pCO0FBQ1ksYUFBTztBQUFBLElBQ1YsR0FBRSxDQUFFLENBQUE7QUFBQSxFQUNiO0FBVUEsV0FBUyxZQUFZLE9BQU87QUFPbkI7QUFDRCxjQUFRSyxJQUFBQSxNQUFNLEtBQUs7QUFDbkIsWUFBTSxPQUFPLENBQUE7QUFDYixpQkFBVyxPQUFPLE9BQU87QUFDckIsY0FBTSxRQUFRLE1BQU0sR0FBRztBQUN2QixZQUFJTSxJQUFLLE1BQUMsS0FBSyxLQUFLQyxJQUFVLFdBQUMsS0FBSyxHQUFHO0FBRW5DLGVBQUssR0FBRztBQUFBLFVBRUpTLFVBQU0sT0FBTyxHQUFHO0FBQUEsUUFDdkI7QUFBQSxNQUNKO0FBQ0QsYUFBTztBQUFBLElBQ1Y7QUFBQSxFQUNMO0FBd0JBLFFBQU0saUJBQWlCLFNBQVUsTUFBTTtBQUduQyxTQUFLLE1BQU07QUFBQSxNQUNQLGVBQWU7QUFDWCxjQUFNLFVBQVUsS0FBSztBQUNyQixZQUFJLFFBQVEsT0FBTztBQUNmLGdCQUFNLFFBQVEsUUFBUTtBQUd0QixjQUFJLENBQUMsS0FBSyxXQUFXO0FBQ2pCLGtCQUFNLGVBQWUsQ0FBQTtBQUNyQixtQkFBTyxlQUFlLE1BQU0sYUFBYTtBQUFBLGNBQ3JDLEtBQUssTUFBTTtBQUFBLGNBQ1gsS0FBSyxDQUFDLE1BQU0sT0FBTyxPQUFPLGNBQWMsQ0FBQztBQUFBLFlBQ2pFLENBQXFCO0FBQUEsVUFDSjtBQUNELGVBQUssVUFBVSxXQUFXLElBQUk7QUFJOUIsY0FBSSxDQUFDLEtBQUssUUFBUTtBQUNkLGlCQUFLLFNBQVM7QUFBQSxVQUNqQjtBQUNELGdCQUFNLEtBQUs7QUFDWCxjQUFJLFdBQVc7QUFHWCwyQkFBZSxLQUFLO0FBQUEsVUFDdkI7QUFDRCxjQUFJLGNBQWM7QUFDZCxrQ0FBc0IsTUFBTSxJQUFJLEtBQUs7QUFBQSxVQUN4QztBQUFBLFFBQ0osV0FDUSxDQUFDLEtBQUssVUFBVSxRQUFRLFVBQVUsUUFBUSxPQUFPLFFBQVE7QUFDOUQsZUFBSyxTQUFTLFFBQVEsT0FBTztBQUFBLFFBQ2hDO0FBQUEsTUFDSjtBQUFBLE1BQ0QsWUFBWTtBQUNSLGVBQU8sS0FBSztBQUFBLE1BQ2Y7QUFBQSxJQUNULENBQUs7QUFBQSxFQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5N0RPLFFBQU0sa0JBQWtCLFlBQVksV0FBVztBQUFBLElBQ3JELE9BQU8sTUFBTTtBQUNaLGFBQU8sRUFBRSxPQUFPO0lBQ2hCO0FBQUE7QUFBQTtBQUFBLElBR0QsU0FBUztBQUFBLE1BQ1IsWUFBWTtBQUNYLGFBQUs7QUFBQSxNQUNMO0FBQUEsSUFDRDtBQUFBLEVBQ0YsQ0FBQzs7Ozs7OztBQ1FELFlBQU0sVUFBVSxnQkFBaUI7QUFDakMsY0FBUTtBQUVSLGNBQVEsT0FBTyxFQUFFLE9BQU8sUUFBUSxRQUFRLEVBQUMsQ0FBRTtBQUUzQyxjQUFRLFVBQVc7QUFFbkIsWUFBTSxTQUFTWCxJQUFBQSxJQUFJLE9BQU87QUFHMUIsY0FBUSxNQUFNO0FBQ1pZLHFCQUFZLE9BQUEscUNBQUEsU0FBUztBQUFBLE1BQ3ZCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBLFFBQUt6RCxjQUFVO0FBQUEsSUFDZCxPQUFPO0FBQ04sYUFBTztJQUdSO0FBQUEsRUFDRDs7NEJBWkFDLHVCQUVPLE1BQUE7QUFBQTs7Ozs7QUNGUCxRQUFLLFlBQVU7QUFBQSxJQUNkLFVBQVUsV0FBVztBQUNwQndELG1CQUFBLE9BQUEsZ0JBQVksWUFBWTtBQUFBLElBQ3hCO0FBQUEsSUFDRCxRQUFRLFdBQVc7QUFDbEJBLG1CQUFZLE9BQUEsZ0JBQUEsVUFBVTtBQUFBLElBQ3RCO0FBQUEsSUFDRCxRQUFRLFdBQVc7QUFDbEJBLG1CQUFZLE9BQUEsaUJBQUEsVUFBVTtBQUFBLElBQ3ZCO0FBQUEsRUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzEsMiw0LDgsOSwxMCwxMSwxMiwxMywxNF19
