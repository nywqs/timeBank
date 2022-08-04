var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
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
  var icons = {
    "uicon-level": "\uE693",
    "uicon-column-line": "\uE68E",
    "uicon-checkbox-mark": "\uE807",
    "uicon-folder": "\uE7F5",
    "uicon-movie": "\uE7F6",
    "uicon-star-fill": "\uE669",
    "uicon-star": "\uE65F",
    "uicon-phone-fill": "\uE64F",
    "uicon-phone": "\uE622",
    "uicon-apple-fill": "\uE881",
    "uicon-chrome-circle-fill": "\uE885",
    "uicon-backspace": "\uE67B",
    "uicon-attach": "\uE632",
    "uicon-cut": "\uE948",
    "uicon-empty-car": "\uE602",
    "uicon-empty-coupon": "\uE682",
    "uicon-empty-address": "\uE646",
    "uicon-empty-favor": "\uE67C",
    "uicon-empty-permission": "\uE686",
    "uicon-empty-news": "\uE687",
    "uicon-empty-search": "\uE664",
    "uicon-github-circle-fill": "\uE887",
    "uicon-rmb": "\uE608",
    "uicon-person-delete-fill": "\uE66A",
    "uicon-reload": "\uE788",
    "uicon-order": "\uE68F",
    "uicon-server-man": "\uE6BC",
    "uicon-search": "\uE62A",
    "uicon-fingerprint": "\uE955",
    "uicon-more-dot-fill": "\uE630",
    "uicon-scan": "\uE662",
    "uicon-share-square": "\uE60B",
    "uicon-map": "\uE61D",
    "uicon-map-fill": "\uE64E",
    "uicon-tags": "\uE629",
    "uicon-tags-fill": "\uE651",
    "uicon-bookmark-fill": "\uE63B",
    "uicon-bookmark": "\uE60A",
    "uicon-eye": "\uE613",
    "uicon-eye-fill": "\uE641",
    "uicon-mic": "\uE64A",
    "uicon-mic-off": "\uE649",
    "uicon-calendar": "\uE66E",
    "uicon-calendar-fill": "\uE634",
    "uicon-trash": "\uE623",
    "uicon-trash-fill": "\uE658",
    "uicon-play-left": "\uE66D",
    "uicon-play-right": "\uE610",
    "uicon-minus": "\uE618",
    "uicon-plus": "\uE62D",
    "uicon-info": "\uE653",
    "uicon-info-circle": "\uE7D2",
    "uicon-info-circle-fill": "\uE64B",
    "uicon-question": "\uE715",
    "uicon-error": "\uE6D3",
    "uicon-close": "\uE685",
    "uicon-checkmark": "\uE6A8",
    "uicon-android-circle-fill": "\uE67E",
    "uicon-android-fill": "\uE67D",
    "uicon-ie": "\uE87B",
    "uicon-IE-circle-fill": "\uE889",
    "uicon-google": "\uE87A",
    "uicon-google-circle-fill": "\uE88A",
    "uicon-setting-fill": "\uE872",
    "uicon-setting": "\uE61F",
    "uicon-minus-square-fill": "\uE855",
    "uicon-plus-square-fill": "\uE856",
    "uicon-heart": "\uE7DF",
    "uicon-heart-fill": "\uE851",
    "uicon-camera": "\uE7D7",
    "uicon-camera-fill": "\uE870",
    "uicon-more-circle": "\uE63E",
    "uicon-more-circle-fill": "\uE645",
    "uicon-chat": "\uE620",
    "uicon-chat-fill": "\uE61E",
    "uicon-bag-fill": "\uE617",
    "uicon-bag": "\uE619",
    "uicon-error-circle-fill": "\uE62C",
    "uicon-error-circle": "\uE624",
    "uicon-close-circle": "\uE63F",
    "uicon-close-circle-fill": "\uE637",
    "uicon-checkmark-circle": "\uE63D",
    "uicon-checkmark-circle-fill": "\uE635",
    "uicon-question-circle-fill": "\uE666",
    "uicon-question-circle": "\uE625",
    "uicon-share": "\uE631",
    "uicon-share-fill": "\uE65E",
    "uicon-shopping-cart": "\uE621",
    "uicon-shopping-cart-fill": "\uE65D",
    "uicon-bell": "\uE609",
    "uicon-bell-fill": "\uE640",
    "uicon-list": "\uE650",
    "uicon-list-dot": "\uE616",
    "uicon-zhihu": "\uE6BA",
    "uicon-zhihu-circle-fill": "\uE709",
    "uicon-zhifubao": "\uE6B9",
    "uicon-zhifubao-circle-fill": "\uE6B8",
    "uicon-weixin-circle-fill": "\uE6B1",
    "uicon-weixin-fill": "\uE6B2",
    "uicon-twitter-circle-fill": "\uE6AB",
    "uicon-twitter": "\uE6AA",
    "uicon-taobao-circle-fill": "\uE6A7",
    "uicon-taobao": "\uE6A6",
    "uicon-weibo-circle-fill": "\uE6A5",
    "uicon-weibo": "\uE6A4",
    "uicon-qq-fill": "\uE6A1",
    "uicon-qq-circle-fill": "\uE6A0",
    "uicon-moments-circel-fill": "\uE69A",
    "uicon-moments": "\uE69B",
    "uicon-qzone": "\uE695",
    "uicon-qzone-circle-fill": "\uE696",
    "uicon-baidu-circle-fill": "\uE680",
    "uicon-baidu": "\uE681",
    "uicon-facebook-circle-fill": "\uE68A",
    "uicon-facebook": "\uE689",
    "uicon-car": "\uE60C",
    "uicon-car-fill": "\uE636",
    "uicon-warning-fill": "\uE64D",
    "uicon-warning": "\uE694",
    "uicon-clock-fill": "\uE638",
    "uicon-clock": "\uE60F",
    "uicon-edit-pen": "\uE612",
    "uicon-edit-pen-fill": "\uE66B",
    "uicon-email": "\uE611",
    "uicon-email-fill": "\uE642",
    "uicon-minus-circle": "\uE61B",
    "uicon-minus-circle-fill": "\uE652",
    "uicon-plus-circle": "\uE62E",
    "uicon-plus-circle-fill": "\uE661",
    "uicon-file-text": "\uE663",
    "uicon-file-text-fill": "\uE665",
    "uicon-pushpin": "\uE7E3",
    "uicon-pushpin-fill": "\uE86E",
    "uicon-grid": "\uE673",
    "uicon-grid-fill": "\uE678",
    "uicon-play-circle": "\uE647",
    "uicon-play-circle-fill": "\uE655",
    "uicon-pause-circle-fill": "\uE654",
    "uicon-pause": "\uE8FA",
    "uicon-pause-circle": "\uE643",
    "uicon-eye-off": "\uE648",
    "uicon-eye-off-outline": "\uE62B",
    "uicon-gift-fill": "\uE65C",
    "uicon-gift": "\uE65B",
    "uicon-rmb-circle-fill": "\uE657",
    "uicon-rmb-circle": "\uE677",
    "uicon-kefu-ermai": "\uE656",
    "uicon-server-fill": "\uE751",
    "uicon-coupon-fill": "\uE8C4",
    "uicon-coupon": "\uE8AE",
    "uicon-integral": "\uE704",
    "uicon-integral-fill": "\uE703",
    "uicon-home-fill": "\uE964",
    "uicon-home": "\uE965",
    "uicon-hourglass-half-fill": "\uE966",
    "uicon-hourglass": "\uE967",
    "uicon-account": "\uE628",
    "uicon-plus-people-fill": "\uE626",
    "uicon-minus-people-fill": "\uE615",
    "uicon-account-fill": "\uE614",
    "uicon-thumb-down-fill": "\uE726",
    "uicon-thumb-down": "\uE727",
    "uicon-thumb-up": "\uE733",
    "uicon-thumb-up-fill": "\uE72F",
    "uicon-lock-fill": "\uE979",
    "uicon-lock-open": "\uE973",
    "uicon-lock-opened-fill": "\uE974",
    "uicon-lock": "\uE97A",
    "uicon-red-packet-fill": "\uE690",
    "uicon-photo-fill": "\uE98B",
    "uicon-photo": "\uE98D",
    "uicon-volume-off-fill": "\uE659",
    "uicon-volume-off": "\uE644",
    "uicon-volume-fill": "\uE670",
    "uicon-volume": "\uE633",
    "uicon-red-packet": "\uE691",
    "uicon-download": "\uE63C",
    "uicon-arrow-up-fill": "\uE6B0",
    "uicon-arrow-down-fill": "\uE600",
    "uicon-play-left-fill": "\uE675",
    "uicon-play-right-fill": "\uE676",
    "uicon-rewind-left-fill": "\uE679",
    "uicon-rewind-right-fill": "\uE67A",
    "uicon-arrow-downward": "\uE604",
    "uicon-arrow-leftward": "\uE601",
    "uicon-arrow-rightward": "\uE603",
    "uicon-arrow-upward": "\uE607",
    "uicon-arrow-down": "\uE60D",
    "uicon-arrow-right": "\uE605",
    "uicon-arrow-left": "\uE60E",
    "uicon-arrow-up": "\uE606",
    "uicon-skip-back-left": "\uE674",
    "uicon-skip-forward-right": "\uE672",
    "uicon-rewind-right": "\uE66F",
    "uicon-rewind-left": "\uE671",
    "uicon-arrow-right-double": "\uE68D",
    "uicon-arrow-left-double": "\uE68C",
    "uicon-wifi-off": "\uE668",
    "uicon-wifi": "\uE667",
    "uicon-empty-data": "\uE62F",
    "uicon-empty-history": "\uE684",
    "uicon-empty-list": "\uE68B",
    "uicon-empty-page": "\uE627",
    "uicon-empty-order": "\uE639",
    "uicon-man": "\uE697",
    "uicon-woman": "\uE69C",
    "uicon-man-add": "\uE61C",
    "uicon-man-add-fill": "\uE64C",
    "uicon-man-delete": "\uE61A",
    "uicon-man-delete-fill": "\uE66A",
    "uicon-zh": "\uE70A",
    "uicon-en": "\uE692"
  };
  var props$h = {
    props: {
      name: {
        type: String,
        default: uni.$u.props.icon.name
      },
      color: {
        type: String,
        default: uni.$u.props.icon.color
      },
      size: {
        type: [String, Number],
        default: uni.$u.props.icon.size
      },
      bold: {
        type: Boolean,
        default: uni.$u.props.icon.bold
      },
      index: {
        type: [String, Number],
        default: uni.$u.props.icon.index
      },
      hoverClass: {
        type: String,
        default: uni.$u.props.icon.hoverClass
      },
      customPrefix: {
        type: String,
        default: uni.$u.props.icon.customPrefix
      },
      label: {
        type: [String, Number],
        default: uni.$u.props.icon.label
      },
      labelPos: {
        type: String,
        default: uni.$u.props.icon.labelPos
      },
      labelSize: {
        type: [String, Number],
        default: uni.$u.props.icon.labelSize
      },
      labelColor: {
        type: String,
        default: uni.$u.props.icon.labelColor
      },
      space: {
        type: [String, Number],
        default: uni.$u.props.icon.space
      },
      imgMode: {
        type: String,
        default: uni.$u.props.icon.imgMode
      },
      width: {
        type: [String, Number],
        default: uni.$u.props.icon.width
      },
      height: {
        type: [String, Number],
        default: uni.$u.props.icon.height
      },
      top: {
        type: [String, Number],
        default: uni.$u.props.icon.top
      },
      stop: {
        type: Boolean,
        default: uni.$u.props.icon.stop
      }
    }
  };
  var _export_sfc = (sfc, props2) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props2) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$q = {
    name: "u-icon",
    data() {
      return {};
    },
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$h],
    computed: {
      uClasses() {
        let classes = [];
        classes.push(this.customPrefix + "-" + this.name);
        if (this.color && uni.$u.config.type.includes(this.color))
          classes.push("u-icon__icon--" + this.color);
        return classes;
      },
      iconStyle() {
        let style = {};
        style = {
          fontSize: uni.$u.addUnit(this.size),
          lineHeight: uni.$u.addUnit(this.size),
          fontWeight: this.bold ? "bold" : "normal",
          top: uni.$u.addUnit(this.top)
        };
        if (this.color && !uni.$u.config.type.includes(this.color))
          style.color = this.color;
        return style;
      },
      isImg() {
        return this.name.indexOf("/") !== -1;
      },
      imgStyle() {
        let style = {};
        style.width = this.width ? uni.$u.addUnit(this.width) : uni.$u.addUnit(this.size);
        style.height = this.height ? uni.$u.addUnit(this.height) : uni.$u.addUnit(this.size);
        return style;
      },
      icon() {
        return icons["uicon-" + this.name] || this.name;
      }
    },
    methods: {
      clickHandler(e) {
        this.$emit("click", this.index);
        this.stop && this.preventEvent(e);
      }
    }
  };
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-icon", ["u-icon--" + _ctx.labelPos]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    }, [
      $options.isImg ? (vue.openBlock(), vue.createElementBlock("image", {
        key: 0,
        class: "u-icon__img",
        src: _ctx.name,
        mode: _ctx.imgMode,
        style: vue.normalizeStyle([$options.imgStyle, _ctx.$u.addStyle(_ctx.customStyle)])
      }, null, 12, ["src", "mode"])) : (vue.openBlock(), vue.createElementBlock("text", {
        key: 1,
        class: vue.normalizeClass(["u-icon__icon", $options.uClasses]),
        style: vue.normalizeStyle([$options.iconStyle, _ctx.$u.addStyle(_ctx.customStyle)]),
        "hover-class": _ctx.hoverClass
      }, vue.toDisplayString($options.icon), 15, ["hover-class"])),
      vue.createCommentVNode(' \u8FD9\u91CC\u8FDB\u884C\u7A7A\u5B57\u7B26\u4E32\u5224\u65AD\uFF0C\u5982\u679C\u4EC5\u4EC5\u662Fv-if="label"\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u4F20\u90120\u7684\u65F6\u5019\uFF0C\u7ED3\u679C\u4E5F\u65E0\u6CD5\u663E\u793A '),
      _ctx.label !== "" ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 2,
        class: "u-icon__label",
        style: vue.normalizeStyle({
          color: _ctx.labelColor,
          fontSize: _ctx.$u.addUnit(_ctx.labelSize),
          marginLeft: _ctx.labelPos == "right" ? _ctx.$u.addUnit(_ctx.space) : 0,
          marginTop: _ctx.labelPos == "bottom" ? _ctx.$u.addUnit(_ctx.space) : 0,
          marginRight: _ctx.labelPos == "left" ? _ctx.$u.addUnit(_ctx.space) : 0,
          marginBottom: _ctx.labelPos == "top" ? _ctx.$u.addUnit(_ctx.space) : 0
        })
      }, vue.toDisplayString(_ctx.label), 5)) : vue.createCommentVNode("v-if", true)
    ], 2);
  }
  var __easycom_0$8 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$p], ["__scopeId", "data-v-045536fa"], ["__file", "D:/JavaProjects/timeBank/weapp/uni_modules/uview-plus/components/u-icon/u-icon.vue"]]);
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k, p) {
    switch (shared.toRawType(p)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p;
    }
  }
  function normalizeLog(type, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type].apply(console, args);
    }
    const msgs = args.map(function(v) {
      const type2 = shared.toTypeString(v).toLowerCase();
      if (["[object object]", "[object array]", "[object module]"].indexOf(type2) !== -1) {
        try {
          v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e) {
          v = type2;
        }
      } else {
        if (v === null) {
          v = "---NULL---";
        } else if (v === void 0) {
          v = "---UNDEFINED---";
        } else {
          const vType = shared.toRawType(v).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
          } else {
            v = String(v);
          }
        }
      }
      return v;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type, filename, ...args) {
    const res = normalizeLog(type, filename, args);
    res && console[type](res);
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  var props$g = {
    props: {
      isDot: {
        type: Boolean,
        default: uni.$u.props.badge.isDot
      },
      value: {
        type: [Number, String],
        default: uni.$u.props.badge.value
      },
      modelValue: {
        type: [Number, String],
        default: uni.$u.props.badge.modelValue
      },
      show: {
        type: Boolean,
        default: uni.$u.props.badge.show
      },
      max: {
        type: [Number, String],
        default: uni.$u.props.badge.max
      },
      type: {
        type: String,
        default: uni.$u.props.badge.type
      },
      showZero: {
        type: Boolean,
        default: uni.$u.props.badge.showZero
      },
      bgColor: {
        type: [String, null],
        default: uni.$u.props.badge.bgColor
      },
      color: {
        type: [String, null],
        default: uni.$u.props.badge.color
      },
      shape: {
        type: String,
        default: uni.$u.props.badge.shape
      },
      numberType: {
        type: String,
        default: uni.$u.props.badge.numberType
      },
      offset: {
        type: Array,
        default: uni.$u.props.badge.offset
      },
      inverted: {
        type: Boolean,
        default: uni.$u.props.badge.inverted
      },
      absolute: {
        type: Boolean,
        default: uni.$u.props.badge.absolute
      }
    }
  };
  const _sfc_main$p = {
    name: "u-badge",
    mixins: [uni.$u.mpMixin, props$g, uni.$u.mixin],
    computed: {
      boxStyle() {
        let style = {};
        return style;
      },
      badgeStyle() {
        const style = {};
        if (this.color) {
          style.color = this.color;
        }
        if (this.bgColor && !this.inverted) {
          style.backgroundColor = this.bgColor;
        }
        if (this.absolute) {
          style.position = "absolute";
          if (this.offset.length) {
            const top = this.offset[0];
            const right = this.offset[1] || top;
            style.top = uni.$u.addUnit(top);
            style.right = uni.$u.addUnit(right);
          }
        }
        return style;
      },
      showValue() {
        switch (this.numberType) {
          case "overflow":
            return Number(this.value) > Number(this.max) ? this.max + "+" : this.value;
          case "ellipsis":
            return Number(this.value) > Number(this.max) ? "..." : this.value;
          case "limit":
            return Number(this.value) > 999 ? Number(this.value) >= 9999 ? Math.floor(this.value / 1e4 * 100) / 100 + "w" : Math.floor(this.value / 1e3 * 100) / 100 + "k" : this.value;
          default:
            return Number(this.value);
        }
      }
    }
  };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    return _ctx.show && ((Number(_ctx.value) === 0 ? _ctx.showZero : true) || _ctx.isDot) ? (vue.openBlock(), vue.createElementBlock("text", {
      key: 0,
      class: vue.normalizeClass([[_ctx.isDot ? "u-badge--dot" : "u-badge--not-dot", _ctx.inverted && "u-badge--inverted", _ctx.shape === "horn" && "u-badge--horn", `u-badge--${_ctx.type}${_ctx.inverted ? "--inverted" : ""}`], "u-badge"]),
      style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.customStyle), $options.badgeStyle])
    }, vue.toDisplayString(_ctx.isDot ? "" : $options.showValue), 7)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_0$7 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o], ["__scopeId", "data-v-84d64f8a"], ["__file", "D:/JavaProjects/timeBank/weapp/uni_modules/uview-plus/components/u-badge/u-badge.vue"]]);
  var props$f = {
    props: {
      name: {
        type: [String, Number, null],
        default: uni.$u.props.tabbarItem.name
      },
      icon: {
        icon: String,
        default: uni.$u.props.tabbarItem.icon
      },
      badge: {
        type: [String, Number, null],
        default: uni.$u.props.tabbarItem.badge
      },
      dot: {
        type: Boolean,
        default: uni.$u.props.tabbarItem.dot
      },
      text: {
        type: String,
        default: uni.$u.props.tabbarItem.text
      },
      badgeStyle: {
        type: [Object, String],
        default: uni.$u.props.tabbarItem.badgeStyle
      }
    }
  };
  const _sfc_main$o = {
    name: "u-tabbar-item",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$f],
    data() {
      return {
        isActive: false,
        parentData: {
          value: null,
          activeColor: "",
          inactiveColor: ""
        }
      };
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        this.updateParentData();
        if (!this.parent) {
          uni.$u.error("u-tabbar-item\u5FC5\u987B\u642D\u914Du-tabbar\u7EC4\u4EF6\u4F7F\u7528");
        }
        const index2 = this.parent.children.indexOf(this);
        this.isActive = (this.name || index2) === this.parentData.value;
      },
      updateParentData() {
        this.getParentData("u-tabbar");
      },
      updateFromParent() {
        this.init();
      },
      clickHandler() {
        this.$nextTick(() => {
          const index2 = this.parent.children.indexOf(this);
          const name = this.name || index2;
          if (name !== this.parent.value) {
            this.parent.$emit("change", name);
          }
          this.$emit("click", name);
        });
      }
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$8);
    const _component_u_badge = resolveEasycom(vue.resolveDynamicComponent("u-badge"), __easycom_0$7);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "u-tabbar-item",
      style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.customStyle)]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    }, [
      vue.createElementVNode("view", { class: "u-tabbar-item__icon" }, [
        _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
          key: 0,
          name: _ctx.icon,
          color: $data.isActive ? $data.parentData.activeColor : $data.parentData.inactiveColor,
          size: 20
        }, null, 8, ["name", "color"])) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
          $data.isActive ? vue.renderSlot(_ctx.$slots, "active-icon", { key: 0 }, void 0, true) : vue.renderSlot(_ctx.$slots, "inactive-icon", { key: 1 }, void 0, true)
        ], 64)),
        vue.createVNode(_component_u_badge, {
          absolute: "",
          offset: [0, _ctx.dot ? "34rpx" : _ctx.badge > 9 ? "14rpx" : "20rpx"],
          customStyle: _ctx.badgeStyle,
          isDot: _ctx.dot,
          value: _ctx.badge || (_ctx.dot ? 1 : null),
          show: _ctx.dot || _ctx.badge > 0
        }, null, 8, ["offset", "customStyle", "isDot", "value", "show"])
      ]),
      vue.renderSlot(_ctx.$slots, "text", {}, () => [
        vue.createElementVNode("text", {
          class: "u-tabbar-item__text",
          style: vue.normalizeStyle({
            color: $data.isActive ? $data.parentData.activeColor : $data.parentData.inactiveColor
          })
        }, vue.toDisplayString(_ctx.text), 5)
      ], true)
    ], 4);
  }
  var __easycom_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__scopeId", "data-v-8b367a0e"], ["__file", "D:/JavaProjects/timeBank/weapp/uni_modules/uview-plus/components/u-tabbar-item/u-tabbar-item.vue"]]);
  var props$e = {
    props: {}
  };
  const _sfc_main$n = {
    name: "u-safe-bottom",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$e],
    data() {
      return {
        safeAreaBottomHeight: 0,
        isNvue: false
      };
    },
    computed: {
      style() {
        const style = {};
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    },
    mounted() {
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-safe-bottom", [!$data.isNvue && "u-safe-area-inset-bottom"]]),
      style: vue.normalizeStyle([$options.style])
    }, null, 6);
  }
  var __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__scopeId", "data-v-e7189e6a"], ["__file", "D:/JavaProjects/timeBank/weapp/uni_modules/uview-plus/components/u-safe-bottom/u-safe-bottom.vue"]]);
  var props$d = {
    props: {
      value: {
        type: [String, Number, null],
        default: uni.$u.props.tabbar.value
      },
      safeAreaInsetBottom: {
        type: Boolean,
        default: uni.$u.props.tabbar.safeAreaInsetBottom
      },
      border: {
        type: Boolean,
        default: uni.$u.props.tabbar.border
      },
      zIndex: {
        type: [String, Number],
        default: uni.$u.props.tabbar.zIndex
      },
      activeColor: {
        type: String,
        default: uni.$u.props.tabbar.activeColor
      },
      inactiveColor: {
        type: String,
        default: uni.$u.props.tabbar.inactiveColor
      },
      fixed: {
        type: Boolean,
        default: uni.$u.props.tabbar.fixed
      },
      placeholder: {
        type: Boolean,
        default: uni.$u.props.tabbar.placeholder
      }
    }
  };
  const _sfc_main$m = {
    name: "u-tabbar",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$d],
    data() {
      return {
        placeholderHeight: 0
      };
    },
    computed: {
      tabbarStyle() {
        const style = {
          zIndex: this.zIndex
        };
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      },
      updateChild() {
        return [this.value, this.activeColor, this.inactiveColor];
      },
      updatePlaceholder() {
        return [this.fixed, this.placeholder];
      }
    },
    watch: {
      updateChild() {
        this.updateChildren();
      },
      updatePlaceholder() {
        this.setPlaceholderHeight();
      }
    },
    created() {
      this.children = [];
    },
    mounted() {
      this.setPlaceholderHeight();
    },
    methods: {
      updateChildren() {
        this.children.length && this.children.map((child) => child.updateFromParent());
      },
      async setPlaceholderHeight() {
        if (!this.fixed || !this.placeholder)
          return;
        await uni.$u.sleep(20);
        this.$uGetRect(".u-tabbar__content").then(({ height = 50 }) => {
          this.placeholderHeight = height;
        });
      }
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_safe_bottom = resolveEasycom(vue.resolveDynamicComponent("u-safe-bottom"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-tabbar" }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["u-tabbar__content", [_ctx.border && "u-border-top", _ctx.fixed && "u-tabbar--fixed"]]),
        ref: "u-tabbar__content",
        onTouchmove: _cache[0] || (_cache[0] = vue.withModifiers((...args) => _ctx.noop && _ctx.noop(...args), ["stop", "prevent"])),
        style: vue.normalizeStyle([$options.tabbarStyle])
      }, [
        vue.createElementVNode("view", { class: "u-tabbar__content__item-wrapper" }, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]),
        _ctx.safeAreaInsetBottom ? (vue.openBlock(), vue.createBlock(_component_u_safe_bottom, { key: 0 })) : vue.createCommentVNode("v-if", true)
      ], 38),
      _ctx.placeholder ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "u-tabbar__placeholder",
        style: vue.normalizeStyle({
          height: $data.placeholderHeight + "px"
        })
      }, null, 4)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var __easycom_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__scopeId", "data-v-0231b0a3"], ["__file", "D:/JavaProjects/timeBank/weapp/uni_modules/uview-plus/components/u-tabbar/u-tabbar.vue"]]);
  var props$c = {
    props: {
      show: {
        type: Boolean,
        default: uni.$u.props.loadingIcon.show
      },
      color: {
        type: String,
        default: uni.$u.props.loadingIcon.color
      },
      textColor: {
        type: String,
        default: uni.$u.props.loadingIcon.textColor
      },
      vertical: {
        type: Boolean,
        default: uni.$u.props.loadingIcon.vertical
      },
      mode: {
        type: String,
        default: uni.$u.props.loadingIcon.mode
      },
      size: {
        type: [String, Number],
        default: uni.$u.props.loadingIcon.size
      },
      textSize: {
        type: [String, Number],
        default: uni.$u.props.loadingIcon.textSize
      },
      text: {
        type: [String, Number],
        default: uni.$u.props.loadingIcon.text
      },
      timingFunction: {
        type: String,
        default: uni.$u.props.loadingIcon.timingFunction
      },
      duration: {
        type: [String, Number],
        default: uni.$u.props.loadingIcon.duration
      },
      inactiveColor: {
        type: String,
        default: uni.$u.props.loadingIcon.inactiveColor
      }
    }
  };
  const _sfc_main$l = {
    name: "u-loading-icon",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$c],
    data() {
      return {
        array12: Array.from({
          length: 12
        }),
        aniAngel: 360,
        webviewHide: false,
        loading: false
      };
    },
    computed: {
      otherBorderColor() {
        const lightColor = uni.$u.colorGradient(this.color, "#ffffff", 100)[80];
        if (this.mode === "circle") {
          return this.inactiveColor ? this.inactiveColor : lightColor;
        } else {
          return "transparent";
        }
      }
    },
    watch: {
      show(n) {
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        setTimeout(() => {
          this.show && this.addEventListenerToWebview();
        }, 20);
      },
      addEventListenerToWebview() {
        const pages2 = getCurrentPages();
        const page2 = pages2[pages2.length - 1];
        const currentWebview = page2.$getAppWebview();
        currentWebview.addEventListener("hide", () => {
          this.webviewHide = true;
        });
        currentWebview.addEventListener("show", () => {
          this.webviewHide = false;
        });
      }
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    return _ctx.show ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: vue.normalizeClass(["u-loading-icon", [_ctx.vertical && "u-loading-icon--vertical"]]),
      style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.customStyle)])
    }, [
      !$data.webviewHide ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(["u-loading-icon__spinner", [`u-loading-icon__spinner--${_ctx.mode}`]]),
        ref: "ani",
        style: vue.normalizeStyle({
          color: _ctx.color,
          width: _ctx.$u.addUnit(_ctx.size),
          height: _ctx.$u.addUnit(_ctx.size),
          borderTopColor: _ctx.color,
          borderBottomColor: $options.otherBorderColor,
          borderLeftColor: $options.otherBorderColor,
          borderRightColor: $options.otherBorderColor,
          "animation-duration": `${_ctx.duration}ms`,
          "animation-timing-function": _ctx.mode === "semicircle" || _ctx.mode === "circle" ? _ctx.timingFunction : ""
        })
      }, [
        _ctx.mode === "spinner" ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList($data.array12, (item, index2) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: index2,
            class: "u-loading-icon__dot"
          });
        }), 128)) : vue.createCommentVNode("v-if", true)
      ], 6)) : vue.createCommentVNode("v-if", true),
      _ctx.text ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 1,
        class: "u-loading-icon__text",
        style: vue.normalizeStyle({
          fontSize: _ctx.$u.addUnit(_ctx.textSize),
          color: _ctx.textColor
        })
      }, vue.toDisplayString(_ctx.text), 5)) : vue.createCommentVNode("v-if", true)
    ], 6)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-b049c33a"], ["__file", "D:/JavaProjects/timeBank/weapp/uni_modules/uview-plus/components/u-loading-icon/u-loading-icon.vue"]]);
  var props$b = {
    props: {
      length: {
        type: [String, Number],
        default: uni.$u.props.swiperIndicator.length
      },
      current: {
        type: [String, Number],
        default: uni.$u.props.swiperIndicator.current
      },
      indicatorActiveColor: {
        type: String,
        default: uni.$u.props.swiperIndicator.indicatorActiveColor
      },
      indicatorInactiveColor: {
        type: String,
        default: uni.$u.props.swiperIndicator.indicatorInactiveColor
      },
      indicatorMode: {
        type: String,
        default: uni.$u.props.swiperIndicator.indicatorMode
      }
    }
  };
  const _sfc_main$k = {
    name: "u-swiper-indicator",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$b],
    data() {
      return {
        lineWidth: 22
      };
    },
    computed: {
      lineStyle() {
        let style = {};
        style.width = uni.$u.addUnit(this.lineWidth);
        style.transform = `translateX(${uni.$u.addUnit(this.current * this.lineWidth)})`;
        style.backgroundColor = this.indicatorActiveColor;
        return style;
      },
      dotStyle() {
        return (index2) => {
          let style = {};
          style.backgroundColor = index2 === this.current ? this.indicatorActiveColor : this.indicatorInactiveColor;
          return style;
        };
      }
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-swiper-indicator" }, [
      _ctx.indicatorMode === "line" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(["u-swiper-indicator__wrapper", [`u-swiper-indicator__wrapper--${_ctx.indicatorMode}`]]),
        style: vue.normalizeStyle({
          width: _ctx.$u.addUnit($data.lineWidth * _ctx.length),
          backgroundColor: _ctx.indicatorInactiveColor
        })
      }, [
        vue.createElementVNode("view", {
          class: "u-swiper-indicator__wrapper--line__bar",
          style: vue.normalizeStyle([$options.lineStyle])
        }, null, 4)
      ], 6)) : vue.createCommentVNode("v-if", true),
      _ctx.indicatorMode === "dot" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "u-swiper-indicator__wrapper"
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.length, (item, index2) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: vue.normalizeClass(["u-swiper-indicator__wrapper__dot", [index2 === _ctx.current && "u-swiper-indicator__wrapper__dot--active"]]),
            key: index2,
            style: vue.normalizeStyle([$options.dotStyle(index2)])
          }, null, 6);
        }), 128))
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-dd884c3a"], ["__file", "D:/JavaProjects/timeBank/weapp/uni_modules/uview-plus/components/u-swiper-indicator/u-swiper-indicator.vue"]]);
  var props$a = {
    props: {
      list: {
        type: Array,
        default: uni.$u.props.swiper.list
      },
      indicator: {
        type: Boolean,
        default: uni.$u.props.swiper.indicator
      },
      indicatorActiveColor: {
        type: String,
        default: uni.$u.props.swiper.indicatorActiveColor
      },
      indicatorInactiveColor: {
        type: String,
        default: uni.$u.props.swiper.indicatorInactiveColor
      },
      indicatorStyle: {
        type: [String, Object],
        default: uni.$u.props.swiper.indicatorStyle
      },
      indicatorMode: {
        type: String,
        default: uni.$u.props.swiper.indicatorMode
      },
      autoplay: {
        type: Boolean,
        default: uni.$u.props.swiper.autoplay
      },
      current: {
        type: [String, Number],
        default: uni.$u.props.swiper.current
      },
      currentItemId: {
        type: String,
        default: uni.$u.props.swiper.currentItemId
      },
      interval: {
        type: [String, Number],
        default: uni.$u.props.swiper.interval
      },
      duration: {
        type: [String, Number],
        default: uni.$u.props.swiper.duration
      },
      circular: {
        type: Boolean,
        default: uni.$u.props.swiper.circular
      },
      previousMargin: {
        type: [String, Number],
        default: uni.$u.props.swiper.previousMargin
      },
      nextMargin: {
        type: [String, Number],
        default: uni.$u.props.swiper.nextMargin
      },
      acceleration: {
        type: Boolean,
        default: uni.$u.props.swiper.acceleration
      },
      displayMultipleItems: {
        type: Number,
        default: uni.$u.props.swiper.displayMultipleItems
      },
      easingFunction: {
        type: String,
        default: uni.$u.props.swiper.easingFunction
      },
      keyName: {
        type: String,
        default: uni.$u.props.swiper.keyName
      },
      imgMode: {
        type: String,
        default: uni.$u.props.swiper.imgMode
      },
      height: {
        type: [String, Number],
        default: uni.$u.props.swiper.height
      },
      bgColor: {
        type: String,
        default: uni.$u.props.swiper.bgColor
      },
      radius: {
        type: [String, Number],
        default: uni.$u.props.swiper.radius
      },
      loading: {
        type: Boolean,
        default: uni.$u.props.swiper.loading
      },
      showTitle: {
        type: Boolean,
        default: uni.$u.props.swiper.showTitle
      }
    }
  };
  const _sfc_main$j = {
    name: "u-swiper",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$a],
    data() {
      return {
        currentIndex: 0
      };
    },
    watch: {
      current(val, preVal) {
        if (val === preVal)
          return;
        this.currentIndex = val;
      }
    },
    computed: {
      itemStyle() {
        return (index2) => {
          const style = {};
          if (this.nextMargin && this.previousMargin) {
            style.borderRadius = uni.$u.addUnit(this.radius);
            if (index2 !== this.currentIndex)
              style.transform = "scale(0.92)";
          }
          return style;
        };
      }
    },
    methods: {
      getItemType(item) {
        if (typeof item === "string")
          return uni.$u.test.video(this.getSource(item)) ? "video" : "image";
        if (typeof item === "object" && this.keyName) {
          if (!item.type)
            return uni.$u.test.video(this.getSource(item)) ? "video" : "image";
          if (item.type === "image")
            return "image";
          if (item.type === "video")
            return "video";
          return "image";
        }
      },
      getSource(item) {
        if (typeof item === "string")
          return item;
        if (typeof item === "object" && this.keyName)
          return item[this.keyName];
        else
          uni.$u.error("\u8BF7\u6309\u683C\u5F0F\u4F20\u9012\u5217\u8868\u53C2\u6570");
        return "";
      },
      change(e) {
        const {
          current
        } = e.detail;
        this.pauseVideo(this.currentIndex);
        this.currentIndex = current;
        this.$emit("change", e.detail);
      },
      pauseVideo(index2) {
        const lastItem = this.getSource(this.list[index2]);
        if (uni.$u.test.video(lastItem)) {
          const video2 = uni.createVideoContext(`video-${index2}`, this);
          video2.pause();
        }
      },
      getPoster(item) {
        return typeof item === "object" && item.poster ? item.poster : "";
      },
      clickHandler(index2) {
        this.$emit("click", index2);
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_0$4);
    const _component_u_swiper_indicator = resolveEasycom(vue.resolveDynamicComponent("u-swiper-indicator"), __easycom_1$3);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "u-swiper",
      style: vue.normalizeStyle({
        backgroundColor: _ctx.bgColor,
        height: _ctx.$u.addUnit(_ctx.height),
        borderRadius: _ctx.$u.addUnit(_ctx.radius)
      })
    }, [
      _ctx.loading ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "u-swiper__loading"
      }, [
        vue.createVNode(_component_u_loading_icon, { mode: "circle" })
      ])) : (vue.openBlock(), vue.createElementBlock("swiper", {
        key: 1,
        class: "u-swiper__wrapper",
        style: vue.normalizeStyle({
          height: _ctx.$u.addUnit(_ctx.height)
        }),
        onChange: _cache[0] || (_cache[0] = (...args) => $options.change && $options.change(...args)),
        circular: _ctx.circular,
        interval: _ctx.interval,
        duration: _ctx.duration,
        autoplay: _ctx.autoplay,
        current: _ctx.current,
        currentItemId: _ctx.currentItemId,
        previousMargin: _ctx.$u.addUnit(_ctx.previousMargin),
        nextMargin: _ctx.$u.addUnit(_ctx.nextMargin),
        acceleration: _ctx.acceleration,
        displayMultipleItems: _ctx.displayMultipleItems,
        easingFunction: _ctx.easingFunction
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.list, (item, index2) => {
          return vue.openBlock(), vue.createElementBlock("swiper-item", {
            class: "u-swiper__wrapper__item",
            key: index2
          }, [
            vue.createElementVNode("view", {
              class: "u-swiper__wrapper__item__wrapper",
              style: vue.normalizeStyle([$options.itemStyle(index2)])
            }, [
              vue.createCommentVNode(" \u5728nvue\u4E2D\uFF0Cimage\u56FE\u7247\u7684\u5BBD\u5EA6\u9ED8\u8BA4\u4E3A\u5C4F\u5E55\u5BBD\u5EA6\uFF0C\u9700\u8981\u901A\u8FC7flex:1\u6491\u5F00\uFF0C\u53E6\u5916\u5FC5\u987B\u8BBE\u7F6E\u9AD8\u5EA6\u624D\u80FD\u663E\u793A\u56FE\u7247 "),
              $options.getItemType(item) === "image" ? (vue.openBlock(), vue.createElementBlock("image", {
                key: 0,
                class: "u-swiper__wrapper__item__wrapper__image",
                src: $options.getSource(item),
                mode: _ctx.imgMode,
                onClick: ($event) => $options.clickHandler(index2),
                style: vue.normalizeStyle({
                  height: _ctx.$u.addUnit(_ctx.height),
                  borderRadius: _ctx.$u.addUnit(_ctx.radius)
                })
              }, null, 12, ["src", "mode", "onClick"])) : vue.createCommentVNode("v-if", true),
              $options.getItemType(item) === "video" ? (vue.openBlock(), vue.createElementBlock("video", {
                key: 1,
                class: "u-swiper__wrapper__item__wrapper__video",
                id: `video-${index2}`,
                "enable-progress-gesture": false,
                src: $options.getSource(item),
                poster: $options.getPoster(item),
                title: _ctx.showTitle && _ctx.$u.test.object(item) && item.title ? item.title : "",
                style: vue.normalizeStyle({
                  height: _ctx.$u.addUnit(_ctx.height)
                }),
                controls: "",
                onClick: ($event) => $options.clickHandler(index2)
              }, null, 12, ["id", "src", "poster", "title", "onClick"])) : vue.createCommentVNode("v-if", true),
              _ctx.showTitle && _ctx.$u.test.object(item) && item.title && _ctx.$u.test.image($options.getSource(item)) ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 2,
                class: "u-swiper__wrapper__item__wrapper__title u-line-1"
              }, vue.toDisplayString(item.title), 1)) : vue.createCommentVNode("v-if", true)
            ], 4)
          ]);
        }), 128))
      ], 44, ["circular", "interval", "duration", "autoplay", "current", "currentItemId", "previousMargin", "nextMargin", "acceleration", "displayMultipleItems", "easingFunction"])),
      vue.createElementVNode("view", {
        class: "u-swiper__indicator",
        style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.indicatorStyle)])
      }, [
        vue.renderSlot(_ctx.$slots, "indicator", {}, () => [
          !_ctx.loading && _ctx.indicator && !_ctx.showTitle ? (vue.openBlock(), vue.createBlock(_component_u_swiper_indicator, {
            key: 0,
            indicatorActiveColor: _ctx.indicatorActiveColor,
            indicatorInactiveColor: _ctx.indicatorInactiveColor,
            length: _ctx.list.length,
            current: $data.currentIndex,
            indicatorMode: _ctx.indicatorMode
          }, null, 8, ["indicatorActiveColor", "indicatorInactiveColor", "length", "current", "indicatorMode"])) : vue.createCommentVNode("v-if", true)
        ], true)
      ], 4)
    ], 4);
  }
  var __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__scopeId", "data-v-d16ee43a"], ["__file", "D:/JavaProjects/timeBank/weapp/uni_modules/uview-plus/components/u-swiper/u-swiper.vue"]]);
  var props$9 = {
    props: {
      bgColor: {
        type: String,
        default: uni.$u.props.gap.bgColor
      },
      height: {
        type: [String, Number],
        default: uni.$u.props.gap.height
      },
      marginTop: {
        type: [String, Number],
        default: uni.$u.props.gap.marginTop
      },
      marginBottom: {
        type: [String, Number],
        default: uni.$u.props.gap.marginBottom
      }
    }
  };
  const _sfc_main$i = {
    name: "u-gap",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$9],
    computed: {
      gapStyle() {
        const style = {
          backgroundColor: this.bgColor,
          height: uni.$u.addUnit(this.height),
          marginTop: uni.$u.addUnit(this.marginTop),
          marginBottom: uni.$u.addUnit(this.marginBottom)
        };
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "u-gap",
      style: vue.normalizeStyle([$options.gapStyle])
    }, null, 4);
  }
  var __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-6beeea61"], ["__file", "D:/JavaProjects/timeBank/weapp/uni_modules/uview-plus/components/u-gap/u-gap.vue"]]);
  const _sfc_main$h = {
    name: "GyxmItem",
    data() {
      return {};
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "list-item" }, [
      vue.createElementVNode("view", { class: "pic" }, [
        vue.createElementVNode("image", {
          src: "/static/images/pic.jpeg",
          mode: ""
        })
      ]),
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("view", { class: "title" }, " \u4F01\u4E1A\u793E\u4F1A\u8D23\u4EFB\u4E0E\u521B\u65B0\u6848\u4F8B/\u4F01\u4E1A\u793E\u4F1A\u8D23\u4EFB\u4E0E\u521B\u65B0\u6848\u4F8B "),
        vue.createElementVNode("view", { class: "other" }, [
          vue.createElementVNode("text", { style: {} }, "70\u4EBA\u52A9\u529B"),
          vue.createElementVNode("text", { class: "hk" }, "\u56DE\u9988733\u82B3\u90BB\u5E01")
        ])
      ])
    ]);
  }
  var GyxmItem = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-22739e8e"], ["__file", "D:/JavaProjects/timeBank/weapp/components/gyxm-item.vue"]]);
  const _sfc_main$g = {
    components: {
      GyxmItem
    },
    data() {
      return {
        list3: [
          "https://cdn.uviewui.com/uview/swiper/swiper3.png",
          "https://cdn.uviewui.com/uview/swiper/swiper2.png",
          "https://cdn.uviewui.com/uview/swiper/swiper1.png"
        ],
        list: [
          {
            name: "photo",
            title: "\u56FE\u7247"
          },
          {
            name: "lock",
            title: "\u9501\u5934"
          },
          {
            name: "star",
            title: "\u661F\u661F"
          },
          {
            name: "hourglass",
            title: "\u6C99\u6F0F"
          },
          {
            name: "home",
            title: "\u9996\u9875"
          },
          {
            name: "star",
            title: "\u97F3\u91CF"
          }
        ]
      };
    },
    methods: {
      click(name) {
        this.$refs.uToast.success(`\u70B9\u51FB\u4E86\u7B2C${name}\u4E2A`);
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_swiper = resolveEasycom(vue.resolveDynamicComponent("u-swiper"), __easycom_0$3);
    const _component_u_gap = resolveEasycom(vue.resolveDynamicComponent("u-gap"), __easycom_0$2);
    const _component_gyxm_item = vue.resolveComponent("gyxm-item");
    return vue.openBlock(), vue.createElementBlock("view", { class: "mainPage" }, [
      vue.createVNode(_component_u_swiper, {
        list: $data.list3,
        indicator: "",
        indicatorMode: "line",
        circular: "",
        height: "260"
      }, null, 8, ["list"]),
      vue.createVNode(_component_u_gap, { height: "10" }),
      vue.createElementVNode("view", { class: "notice" }, [
        vue.createElementVNode("view", { class: "notice-title" }, " \u516C\u544A "),
        vue.createElementVNode("view", { class: "notice-content" }, " \u6B22\u8FCE\u52A0\u5165\u5F18\u6587\u5C1A\u5FB7\u65F6\u95F4\u94F6\u884C\uFF01\u8BF7\u70B9\u51FB\u672C\u516C\u544A\u8FDB\u5165\u672C\u673A\u6784\u8BE6\u60C5\u9875\uFF0C\u5728\u8BE6\u60C5\u9875\u4E0A\u70B9\u51FB\u201C\u7533\u8BF7\u52A0\u5165\u201D\u5373\u53EF\u52A0\u5165 ")
      ]),
      vue.createVNode(_component_u_gap, { height: "20" }),
      vue.createElementVNode("view", { class: "jingxuan" }, [
        vue.createElementVNode("view", { class: "main-title" }, " \u7CBE\u9009 "),
        vue.createElementVNode("view", { class: "box" }, [
          vue.createElementVNode("view", { class: "box-l" }, [
            vue.createElementVNode("view", { class: "box1" }, [
              vue.createElementVNode("image", {
                src: "https://cdn.uviewui.com/uview/album/1.jpg",
                model: "scaleToFill"
              })
            ]),
            vue.createElementVNode("view", { class: "box2" }, [
              vue.createElementVNode("image", {
                src: "https://cdn.uviewui.com/uview/album/1.jpg",
                model: "scaleToFill"
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "box-r" }, [
            vue.createElementVNode("view", { class: "box1" }, [
              vue.createElementVNode("image", {
                src: "https://cdn.uviewui.com/uview/album/1.jpg",
                model: "scaleToFill"
              })
            ]),
            vue.createElementVNode("view", { class: "box2" }, [
              vue.createElementVNode("image", {
                src: "https://cdn.uviewui.com/uview/album/1.jpg",
                model: "scaleToFill"
              })
            ]),
            vue.createElementVNode("view", { class: "box3" }, [
              vue.createElementVNode("image", {
                src: "https://cdn.uviewui.com/uview/album/1.jpg",
                model: "scaleToFill"
              })
            ])
          ])
        ])
      ]),
      vue.createVNode(_component_u_gap, { height: "20" }),
      vue.createElementVNode("view", { class: "gongyixiangmu" }, [
        vue.createElementVNode("view", { class: "main-title" }, " \u516C\u76CA\u9879\u76EE "),
        vue.createVNode(_component_u_gap, { height: "10" }),
        vue.createElementVNode("view", { class: "list" }, [
          (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(5, (item, index2) => {
            return vue.createVNode(_component_gyxm_item, { key: index2 });
          }), 64))
        ])
      ])
    ]);
  }
  var PagesHomeIndex = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__file", "D:/JavaProjects/timeBank/weapp/pages/home/index.vue"]]);
  var props$8 = {
    props: {
      duration: {
        type: Number,
        default: uni.$u.props.tabs.duration
      },
      list: {
        type: Array,
        default: uni.$u.props.tabs.list
      },
      lineColor: {
        type: String,
        default: uni.$u.props.tabs.lineColor
      },
      activeStyle: {
        type: [String, Object],
        default: uni.$u.props.tabs.activeStyle
      },
      inactiveStyle: {
        type: [String, Object],
        default: uni.$u.props.tabs.inactiveStyle
      },
      lineWidth: {
        type: [String, Number],
        default: uni.$u.props.tabs.lineWidth
      },
      lineHeight: {
        type: [String, Number],
        default: uni.$u.props.tabs.lineHeight
      },
      lineBgSize: {
        type: String,
        default: uni.$u.props.tabs.lineBgSize
      },
      itemStyle: {
        type: [String, Object],
        default: uni.$u.props.tabs.itemStyle
      },
      scrollable: {
        type: Boolean,
        default: uni.$u.props.tabs.scrollable
      },
      current: {
        type: [Number, String],
        default: uni.$u.props.tabs.current
      },
      keyName: {
        type: String,
        default: uni.$u.props.tabs.keyName
      }
    }
  };
  const _sfc_main$f = {
    name: "u-tabs",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$8],
    data() {
      return {
        firstTime: true,
        scrollLeft: 0,
        scrollViewWidth: 0,
        lineOffsetLeft: 0,
        tabsRect: {
          left: 0
        },
        innerCurrent: 0,
        moving: false
      };
    },
    watch: {
      current: {
        immediate: true,
        handler(newValue, oldValue) {
          if (newValue !== this.innerCurrent) {
            this.innerCurrent = newValue;
            this.$nextTick(() => {
              this.resize();
            });
          }
        }
      },
      list() {
        this.$nextTick(() => {
          this.resize();
        });
      }
    },
    computed: {
      textStyle() {
        return (index2) => {
          const style = {};
          const customeStyle = index2 === this.innerCurrent ? uni.$u.addStyle(this.activeStyle) : uni.$u.addStyle(this.inactiveStyle);
          if (this.list[index2].disabled) {
            style.color = "#c8c9cc";
          }
          return uni.$u.deepMerge(customeStyle, style);
        };
      },
      propsBadge() {
        return uni.$u.props.badge;
      }
    },
    async mounted() {
      this.init();
    },
    methods: {
      setLineLeft() {
        const tabItem = this.list[this.innerCurrent];
        if (!tabItem) {
          return;
        }
        let lineOffsetLeft = this.list.slice(0, this.innerCurrent).reduce((total, curr) => total + curr.rect.width, 0);
        const lineWidth = uni.$u.getPx(this.lineWidth);
        this.lineOffsetLeft = lineOffsetLeft + (tabItem.rect.width - lineWidth) / 2;
        if (this.firstTime) {
          setTimeout(() => {
            this.firstTime = false;
          }, 10);
        }
      },
      animation(x, duration = 0) {
      },
      clickHandler(item, index2) {
        this.$emit("click", __spreadProps(__spreadValues({}, item), {
          index: index2
        }));
        if (item.disabled)
          return;
        this.innerCurrent = index2;
        this.resize();
        this.$emit("change", __spreadProps(__spreadValues({}, item), {
          index: index2
        }));
      },
      init() {
        uni.$u.sleep().then(() => {
          this.resize();
        });
      },
      setScrollLeft() {
        const tabRect = this.list[this.innerCurrent];
        const offsetLeft = this.list.slice(0, this.innerCurrent).reduce((total, curr) => {
          return total + curr.rect.width;
        }, 0);
        const windowWidth = uni.$u.sys().windowWidth;
        let scrollLeft = offsetLeft - (this.tabsRect.width - tabRect.rect.width) / 2 - (windowWidth - this.tabsRect.right) / 2 + this.tabsRect.left / 2;
        scrollLeft = Math.min(scrollLeft, this.scrollViewWidth - this.tabsRect.width);
        this.scrollLeft = Math.max(0, scrollLeft);
      },
      resize() {
        if (this.list.length === 0) {
          return;
        }
        Promise.all([this.getTabsRect(), this.getAllItemRect()]).then(([tabsRect, itemRect = []]) => {
          this.tabsRect = tabsRect;
          this.scrollViewWidth = 0;
          itemRect.map((item, index2) => {
            this.scrollViewWidth += item.width;
            this.list[index2].rect = item;
          });
          this.setLineLeft();
          this.setScrollLeft();
        });
      },
      getTabsRect() {
        return new Promise((resolve) => {
          this.queryRect("u-tabs__wrapper__scroll-view").then((size) => resolve(size));
        });
      },
      getAllItemRect() {
        return new Promise((resolve) => {
          const promiseAllArr = this.list.map((item, index2) => this.queryRect(`u-tabs__wrapper__nav__item-${index2}`, true));
          Promise.all(promiseAllArr).then((sizes) => resolve(sizes));
        });
      },
      queryRect(el, item) {
        return new Promise((resolve) => {
          this.$uGetRect(`.${el}`).then((size) => {
            resolve(size);
          });
        });
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_badge = resolveEasycom(vue.resolveDynamicComponent("u-badge"), __easycom_0$7);
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-tabs" }, [
      vue.createElementVNode("view", { class: "u-tabs__wrapper" }, [
        vue.renderSlot(_ctx.$slots, "left", {}, void 0, true),
        vue.createElementVNode("view", { class: "u-tabs__wrapper__scroll-view-wrapper" }, [
          vue.createElementVNode("scroll-view", {
            "scroll-x": _ctx.scrollable,
            "scroll-left": $data.scrollLeft,
            "scroll-with-animation": "",
            class: "u-tabs__wrapper__scroll-view",
            "show-scrollbar": false,
            ref: "u-tabs__wrapper__scroll-view"
          }, [
            vue.createElementVNode("view", {
              class: "u-tabs__wrapper__nav",
              ref: "u-tabs__wrapper__nav"
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.list, (item, index2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: vue.normalizeClass(["u-tabs__wrapper__nav__item", [`u-tabs__wrapper__nav__item-${index2}`, item.disabled && "u-tabs__wrapper__nav__item--disabled"]]),
                  key: index2,
                  onClick: ($event) => $options.clickHandler(item, index2),
                  ref_for: true,
                  ref: `u-tabs__wrapper__nav__item-${index2}`,
                  style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.itemStyle), { flex: _ctx.scrollable ? "" : 1 }])
                }, [
                  vue.createElementVNode("text", {
                    class: vue.normalizeClass([[item.disabled && "u-tabs__wrapper__nav__item__text--disabled"], "u-tabs__wrapper__nav__item__text"]),
                    style: vue.normalizeStyle([$options.textStyle(index2)])
                  }, vue.toDisplayString(item[_ctx.keyName]), 7),
                  vue.createVNode(_component_u_badge, {
                    show: !!(item.badge && (item.badge.show || item.badge.isDot || item.badge.value)),
                    isDot: item.badge && item.badge.isDot || $options.propsBadge.isDot,
                    value: item.badge && item.badge.value || $options.propsBadge.value,
                    max: item.badge && item.badge.max || $options.propsBadge.max,
                    type: item.badge && item.badge.type || $options.propsBadge.type,
                    showZero: item.badge && item.badge.showZero || $options.propsBadge.showZero,
                    bgColor: item.badge && item.badge.bgColor || $options.propsBadge.bgColor,
                    color: item.badge && item.badge.color || $options.propsBadge.color,
                    shape: item.badge && item.badge.shape || $options.propsBadge.shape,
                    numberType: item.badge && item.badge.numberType || $options.propsBadge.numberType,
                    inverted: item.badge && item.badge.inverted || $options.propsBadge.inverted,
                    customStyle: "margin-left: 4px;"
                  }, null, 8, ["show", "isDot", "value", "max", "type", "showZero", "bgColor", "color", "shape", "numberType", "inverted"])
                ], 14, ["onClick"]);
              }), 128)),
              vue.createElementVNode("view", {
                class: "u-tabs__wrapper__nav__line",
                ref: "u-tabs__wrapper__nav__line",
                style: vue.normalizeStyle([{
                  width: _ctx.$u.addUnit(_ctx.lineWidth),
                  transform: `translate(${$data.lineOffsetLeft}px)`,
                  transitionDuration: `${$data.firstTime ? 0 : _ctx.duration}ms`,
                  height: _ctx.$u.addUnit(_ctx.lineHeight),
                  background: _ctx.lineColor,
                  backgroundSize: _ctx.lineBgSize
                }])
              }, null, 4)
            ], 512)
          ], 8, ["scroll-x", "scroll-left"])
        ]),
        vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
      ])
    ]);
  }
  var __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-175034e3"], ["__file", "D:/JavaProjects/timeBank/weapp/uni_modules/uview-plus/components/u-tabs/u-tabs.vue"]]);
  var props$7 = {
    props: {
      offsetTop: {
        type: [String, Number],
        default: uni.$u.props.sticky.offsetTop
      },
      customNavHeight: {
        type: [String, Number],
        default: uni.$u.props.sticky.customNavHeight
      },
      disabled: {
        type: Boolean,
        default: uni.$u.props.sticky.disabled
      },
      bgColor: {
        type: String,
        default: uni.$u.props.sticky.bgColor
      },
      zIndex: {
        type: [String, Number],
        default: uni.$u.props.sticky.zIndex
      },
      index: {
        type: [String, Number],
        default: uni.$u.props.sticky.index
      }
    }
  };
  const _sfc_main$e = {
    name: "u-sticky",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$7],
    data() {
      return {
        cssSticky: false,
        stickyTop: 0,
        elId: uni.$u.guid(),
        left: 0,
        width: "auto",
        height: "auto",
        fixed: false
      };
    },
    computed: {
      style() {
        const style = {};
        if (!this.disabled) {
          if (this.cssSticky) {
            style.position = "sticky";
            style.zIndex = this.uZindex;
            style.top = uni.$u.addUnit(this.stickyTop);
          } else {
            style.height = this.fixed ? this.height + "px" : "auto";
          }
        } else {
          style.position = "static";
        }
        style.backgroundColor = this.bgColor;
        return uni.$u.deepMerge(uni.$u.addStyle(this.customStyle), style);
      },
      stickyContent() {
        const style = {};
        if (!this.cssSticky) {
          style.position = this.fixed ? "fixed" : "static";
          style.top = this.stickyTop + "px";
          style.left = this.left + "px";
          style.width = this.width == "auto" ? "auto" : this.width + "px";
          style.zIndex = this.uZindex;
        }
        return style;
      },
      uZindex() {
        return this.zIndex ? this.zIndex : uni.$u.zIndex.sticky;
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.getStickyTop();
        this.checkSupportCssSticky();
        if (!this.cssSticky) {
          !this.disabled && this.initObserveContent();
        }
      },
      initObserveContent() {
        this.$uGetRect("#" + this.elId).then((res) => {
          this.height = res.height;
          this.left = res.left;
          this.width = res.width;
          this.$nextTick(() => {
            this.observeContent();
          });
        });
      },
      observeContent() {
        this.disconnectObserver("contentObserver");
        const contentObserver = uni.createIntersectionObserver({
          thresholds: [0.95, 0.98, 1]
        });
        contentObserver.relativeToViewport({
          top: -this.stickyTop
        });
        contentObserver.observe(`#${this.elId}`, (res) => {
          this.setFixed(res.boundingClientRect.top);
        });
        this.contentObserver = contentObserver;
      },
      setFixed(top) {
        const fixed = top <= this.stickyTop;
        this.fixed = fixed;
      },
      disconnectObserver(observerName) {
        const observer = this[observerName];
        observer && observer.disconnect();
      },
      getStickyTop() {
        this.stickyTop = uni.$u.getPx(this.offsetTop) + uni.$u.getPx(this.customNavHeight);
      },
      async checkSupportCssSticky() {
        if (uni.$u.os() === "android" && Number(uni.$u.sys().system) > 8) {
          this.cssSticky = true;
        }
        this.cssSticky = await this.checkComputedStyle();
        if (uni.$u.os() === "ios") {
          this.cssSticky = true;
        }
      },
      checkComputedStyle() {
        return new Promise((resolve) => {
          uni.createSelectorQuery().in(this).select(".u-sticky").fields({
            computedStyle: ["position"]
          }).exec((e) => {
            resolve(e[0].position === "sticky");
          });
        });
      },
      checkCssStickyForH5() {
      }
    },
    beforeDestroy() {
      this.disconnectObserver("contentObserver");
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "u-sticky",
      id: $data.elId,
      style: vue.normalizeStyle([$options.style])
    }, [
      vue.createElementVNode("view", {
        style: vue.normalizeStyle([$options.stickyContent]),
        class: "u-sticky__content"
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 4)
    ], 12, ["id"]);
  }
  var __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-88fde5fa"], ["__file", "D:/JavaProjects/timeBank/weapp/uni_modules/uview-plus/components/u-sticky/u-sticky.vue"]]);
  var props$6 = {
    props: {
      hairline: {
        type: Boolean,
        default: uni.$u.props.button.hairline
      },
      type: {
        type: String,
        default: uni.$u.props.button.type
      },
      size: {
        type: String,
        default: uni.$u.props.button.size
      },
      shape: {
        type: String,
        default: uni.$u.props.button.shape
      },
      plain: {
        type: Boolean,
        default: uni.$u.props.button.plain
      },
      disabled: {
        type: Boolean,
        default: uni.$u.props.button.disabled
      },
      loading: {
        type: Boolean,
        default: uni.$u.props.button.loading
      },
      loadingText: {
        type: [String, Number],
        default: uni.$u.props.button.loadingText
      },
      loadingMode: {
        type: String,
        default: uni.$u.props.button.loadingMode
      },
      loadingSize: {
        type: [String, Number],
        default: uni.$u.props.button.loadingSize
      },
      openType: {
        type: String,
        default: uni.$u.props.button.openType
      },
      formType: {
        type: String,
        default: uni.$u.props.button.formType
      },
      appParameter: {
        type: String,
        default: uni.$u.props.button.appParameter
      },
      hoverStopPropagation: {
        type: Boolean,
        default: uni.$u.props.button.hoverStopPropagation
      },
      lang: {
        type: String,
        default: uni.$u.props.button.lang
      },
      sessionFrom: {
        type: String,
        default: uni.$u.props.button.sessionFrom
      },
      sendMessageTitle: {
        type: String,
        default: uni.$u.props.button.sendMessageTitle
      },
      sendMessagePath: {
        type: String,
        default: uni.$u.props.button.sendMessagePath
      },
      sendMessageImg: {
        type: String,
        default: uni.$u.props.button.sendMessageImg
      },
      showMessageCard: {
        type: Boolean,
        default: uni.$u.props.button.showMessageCard
      },
      dataName: {
        type: String,
        default: uni.$u.props.button.dataName
      },
      throttleTime: {
        type: [String, Number],
        default: uni.$u.props.button.throttleTime
      },
      hoverStartTime: {
        type: [String, Number],
        default: uni.$u.props.button.hoverStartTime
      },
      hoverStayTime: {
        type: [String, Number],
        default: uni.$u.props.button.hoverStayTime
      },
      text: {
        type: [String, Number],
        default: uni.$u.props.button.text
      },
      icon: {
        type: String,
        default: uni.$u.props.button.icon
      },
      iconColor: {
        type: String,
        default: uni.$u.props.button.icon
      },
      color: {
        type: String,
        default: uni.$u.props.button.color
      }
    }
  };
  const _sfc_main$d = {
    name: "u-button",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$6],
    data() {
      return {};
    },
    computed: {
      bemClass() {
        if (!this.color) {
          return this.bem("button", ["type", "shape", "size"], ["disabled", "plain", "hairline"]);
        } else {
          return this.bem("button", ["shape", "size"], ["disabled", "plain", "hairline"]);
        }
      },
      loadingColor() {
        if (this.plain) {
          return this.color ? this.color : uni.$u.config.color[`u-${this.type}`];
        }
        if (this.type === "info") {
          return "#c9c9c9";
        }
        return "rgb(200, 200, 200)";
      },
      iconColorCom() {
        if (this.iconColor)
          return this.iconColor;
        if (this.plain) {
          return this.color ? this.color : this.type;
        } else {
          return this.type === "info" ? "#000000" : "#ffffff";
        }
      },
      baseColor() {
        let style = {};
        if (this.color) {
          style.color = this.plain ? this.color : "white";
          if (!this.plain) {
            style["background-color"] = this.color;
          }
          if (this.color.indexOf("gradient") !== -1) {
            style.borderTopWidth = 0;
            style.borderRightWidth = 0;
            style.borderBottomWidth = 0;
            style.borderLeftWidth = 0;
            if (!this.plain) {
              style.backgroundImage = this.color;
            }
          } else {
            style.borderColor = this.color;
            style.borderWidth = "1px";
            style.borderStyle = "solid";
          }
        }
        return style;
      },
      nvueTextStyle() {
        let style = {};
        if (this.type === "info") {
          style.color = "#323233";
        }
        if (this.color) {
          style.color = this.plain ? this.color : "white";
        }
        style.fontSize = this.textSize + "px";
        return style;
      },
      textSize() {
        let fontSize = 14, { size } = this;
        if (size === "large")
          fontSize = 16;
        if (size === "normal")
          fontSize = 14;
        if (size === "small")
          fontSize = 12;
        if (size === "mini")
          fontSize = 10;
        return fontSize;
      }
    },
    methods: {
      clickHandler() {
        if (!this.disabled && !this.loading) {
          uni.$u.throttle(() => {
            this.$emit("click");
          }, this.throttleTime);
        }
      },
      getphonenumber(res) {
        this.$emit("getphonenumber", res);
      },
      getuserinfo(res) {
        this.$emit("getuserinfo", res);
      },
      error(res) {
        this.$emit("error", res);
      },
      opensetting(res) {
        this.$emit("opensetting", res);
      },
      launchapp(res) {
        this.$emit("launchapp", res);
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_0$4);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$8);
    return vue.openBlock(), vue.createElementBlock("button", {
      "hover-start-time": Number(_ctx.hoverStartTime),
      "hover-stay-time": Number(_ctx.hoverStayTime),
      "form-type": _ctx.formType,
      "open-type": _ctx.openType,
      "app-parameter": _ctx.appParameter,
      "hover-stop-propagation": _ctx.hoverStopPropagation,
      "send-message-title": _ctx.sendMessageTitle,
      "send-message-path": _ctx.sendMessagePath,
      lang: _ctx.lang,
      "data-name": _ctx.dataName,
      "session-from": _ctx.sessionFrom,
      "send-message-img": _ctx.sendMessageImg,
      "show-message-card": _ctx.showMessageCard,
      onGetphonenumber: _cache[0] || (_cache[0] = (...args) => $options.getphonenumber && $options.getphonenumber(...args)),
      onGetuserinfo: _cache[1] || (_cache[1] = (...args) => $options.getuserinfo && $options.getuserinfo(...args)),
      onError: _cache[2] || (_cache[2] = (...args) => $options.error && $options.error(...args)),
      onOpensetting: _cache[3] || (_cache[3] = (...args) => $options.opensetting && $options.opensetting(...args)),
      onLaunchapp: _cache[4] || (_cache[4] = (...args) => $options.launchapp && $options.launchapp(...args)),
      "hover-class": !_ctx.disabled && !_ctx.loading ? "u-button--active" : "",
      class: vue.normalizeClass(["u-button u-reset-button", $options.bemClass]),
      style: vue.normalizeStyle([$options.baseColor, _ctx.$u.addStyle(_ctx.customStyle)]),
      onClick: _cache[5] || (_cache[5] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    }, [
      _ctx.loading ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
        vue.createVNode(_component_u_loading_icon, {
          mode: _ctx.loadingMode,
          size: _ctx.loadingSize * 1.15,
          color: $options.loadingColor
        }, null, 8, ["mode", "size", "color"]),
        vue.createElementVNode("text", {
          class: "u-button__loading-text",
          style: vue.normalizeStyle([{ fontSize: $options.textSize + "px" }])
        }, vue.toDisplayString(_ctx.loadingText || _ctx.text), 5)
      ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
        _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
          key: 0,
          name: _ctx.icon,
          color: $options.iconColorCom,
          size: $options.textSize * 1.35,
          customStyle: { marginRight: "2px" }
        }, null, 8, ["name", "color", "size"])) : vue.createCommentVNode("v-if", true),
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createElementVNode("text", {
            class: "u-button__text",
            style: vue.normalizeStyle([{ fontSize: $options.textSize + "px" }])
          }, vue.toDisplayString(_ctx.text), 5)
        ], true)
      ], 64))
    ], 46, ["hover-start-time", "hover-stay-time", "form-type", "open-type", "app-parameter", "hover-stop-propagation", "send-message-title", "send-message-path", "lang", "data-name", "session-from", "send-message-img", "show-message-card", "hover-class"]);
  }
  var __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-5837df23"], ["__file", "D:/JavaProjects/timeBank/weapp/uni_modules/uview-plus/components/u-button/u-button.vue"]]);
  const _sfc_main$c = {
    name: "A",
    data() {
      return {};
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "list-item" }, [
      vue.createElementVNode("view", { class: "pic" }, [
        vue.createElementVNode("image", {
          src: "/static/images/pic.jpeg",
          mode: ""
        })
      ]),
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("view", { class: "title" }, " \u4F01\u4E1A\u793E\u4F1A\u8D23\u4EFB\u4E0E\u521B\u65B0\u6848\u4F8B "),
        vue.createElementVNode("view", { class: "date-location" }, [
          vue.createElementVNode("view", { class: "date" }, " 2021.12.01 08:00 \u5F00\u59CB "),
          vue.createElementVNode("view", { class: "location" }, " 0m ")
        ]),
        vue.createElementVNode("view", { class: "other" }, [
          vue.createElementVNode("view", { class: "price" }, [
            vue.createTextVNode(" 80"),
            vue.createElementVNode("text", { style: { "font-size": "10rpx", "padding-left": "10rpx" } }, "\u82B3\u90BB\u5E01/\u4EBA")
          ]),
          vue.createElementVNode("view", { class: "acrtion" }, [
            vue.createVNode(_component_u_button, {
              type: "warning",
              class: "custom-style",
              size: "mini",
              plain: true
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("\u7ACB\u5373\u62A5\u540D")
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]);
  }
  var ActivityItem = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-aba56d34"], ["__file", "D:/JavaProjects/timeBank/weapp/components/activity-item.vue"]]);
  const _sfc_main$b = {
    components: {
      ActivityItem
    },
    data() {
      return {
        list1: [{
          name: "\u5173\u6CE8"
        }, {
          name: "\u63A8\u8350"
        }, {
          name: "\u7535\u5F71"
        }, {
          name: "\u79D1\u6280"
        }, {
          name: "\u97F3\u4E50"
        }, {
          name: "\u7F8E\u98DF"
        }, {
          name: "\u6587\u5316"
        }, {
          name: "\u8D22\u7ECF"
        }, {
          name: "\u624B\u5DE5"
        }]
      };
    },
    methods: {
      tabChange(e) {
        formatAppLog("log", "at pages/activity/index.vue:47", e);
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$8);
    const _component_u_tabs = resolveEasycom(vue.resolveDynamicComponent("u-tabs"), __easycom_4);
    const _component_u_sticky = resolveEasycom(vue.resolveDynamicComponent("u-sticky"), __easycom_5);
    const _component_activity_item = vue.resolveComponent("activity-item");
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createVNode(_component_u_sticky, {
        bgColor: "#fff",
        "offset-top": "45"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_u_tabs, {
            list: $data.list1,
            onChange: $options.tabChange
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", {
                slot: "right",
                style: { "padding-left": "4px" },
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$u.toast("\u63D2\u69FD\u88AB\u70B9\u51FB"))
              }, [
                vue.createVNode(_component_u_icon, {
                  name: "list",
                  size: "21",
                  bold: ""
                })
              ])
            ]),
            _: 1
          }, 8, ["list", "onChange"])
        ]),
        _: 1
      }),
      vue.createElementVNode("view", {
        class: "mainPage",
        style: { "padding-top": "10rpx" }
      }, [
        vue.createElementVNode("scroll-view", { "scroll-y": "true" }, [
          (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(100, (item) => {
            return vue.createVNode(_component_activity_item);
          }), 64))
        ])
      ])
    ], 64);
  }
  var PagesActivityIndex = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__file", "D:/JavaProjects/timeBank/weapp/pages/activity/index.vue"]]);
  var props$5 = {
    props: {
      color: {
        type: String,
        default: uni.$u.props.link.color
      },
      fontSize: {
        type: [String, Number],
        default: uni.$u.props.link.fontSize
      },
      underLine: {
        type: Boolean,
        default: uni.$u.props.link.underLine
      },
      href: {
        type: String,
        default: uni.$u.props.link.href
      },
      mpTips: {
        type: String,
        default: uni.$u.props.link.mpTips
      },
      lineColor: {
        type: String,
        default: uni.$u.props.link.lineColor
      },
      text: {
        type: String,
        default: uni.$u.props.link.text
      }
    }
  };
  const _sfc_main$a = {
    name: "u-link",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$5],
    computed: {
      linkStyle() {
        const style = {
          color: this.color,
          fontSize: uni.$u.addUnit(this.fontSize),
          lineHeight: uni.$u.addUnit(uni.$u.getPx(this.fontSize) + 2),
          textDecoration: this.underLine ? "underline" : "none"
        };
        return style;
      }
    },
    methods: {
      openLink() {
        plus.runtime.openURL(this.href);
        this.$emit("click");
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("text", {
      class: "u-link",
      onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.openLink && $options.openLink(...args), ["stop"])),
      style: vue.normalizeStyle([$options.linkStyle, _ctx.$u.addStyle(_ctx.customStyle)])
    }, vue.toDisplayString(_ctx.text), 5);
  }
  var __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-77a79d3a"], ["__file", "D:/JavaProjects/timeBank/weapp/uni_modules/uview-plus/components/u-link/u-link.vue"]]);
  var value = {
    computed: {
      value() {
        const {
          text: text2,
          mode,
          format,
          href
        } = this;
        if (mode === "price") {
          if (!/^\d+(\.\d+)?$/.test(text2)) {
            uni.$u.error("\u91D1\u989D\u6A21\u5F0F\u4E0B\uFF0Ctext\u53C2\u6570\u9700\u8981\u4E3A\u91D1\u989D\u683C\u5F0F");
          }
          if (uni.$u.test.func(format)) {
            return format(text2);
          }
          return uni.$u.priceFormat(text2, 2);
        }
        if (mode === "date") {
          !uni.$u.test.date(text2) && uni.$u.error("\u65E5\u671F\u6A21\u5F0F\u4E0B\uFF0Ctext\u53C2\u6570\u9700\u8981\u4E3A\u65E5\u671F\u6216\u65F6\u95F4\u6233\u683C\u5F0F");
          if (uni.$u.test.func(format)) {
            return format(text2);
          }
          if (format) {
            return uni.$u.timeFormat(text2, format);
          }
          return uni.$u.timeFormat(text2, "yyyy-mm-dd");
        }
        if (mode === "phone") {
          if (uni.$u.test.func(format)) {
            return format(text2);
          }
          if (format === "encrypt") {
            return `${text2.substr(0, 3)}****${text2.substr(7)}`;
          }
          return text2;
        }
        if (mode === "name") {
          !(typeof text2 === "string") && uni.$u.error("\u59D3\u540D\u6A21\u5F0F\u4E0B\uFF0Ctext\u53C2\u6570\u9700\u8981\u4E3A\u5B57\u7B26\u4E32\u683C\u5F0F");
          if (uni.$u.test.func(format)) {
            return format(text2);
          }
          if (format === "encrypt") {
            return this.formatName(text2);
          }
          return text2;
        }
        if (mode === "link") {
          !uni.$u.test.url(href) && uni.$u.error("\u8D85\u94FE\u63A5\u6A21\u5F0F\u4E0B\uFF0Chref\u53C2\u6570\u9700\u8981\u4E3AURL\u683C\u5F0F");
          return text2;
        }
        return text2;
      }
    },
    methods: {
      formatName(name) {
        let value2 = "";
        if (name.length === 2) {
          value2 = name.substr(0, 1) + "*";
        } else if (name.length > 2) {
          let char = "";
          for (let i = 0, len = name.length - 2; i < len; i++) {
            char += "*";
          }
          value2 = name.substr(0, 1) + char + name.substr(-1, 1);
        } else {
          value2 = name;
        }
        return value2;
      }
    }
  };
  var props$4 = {
    props: {
      type: {
        type: String,
        default: uni.$u.props.text.type
      },
      show: {
        type: Boolean,
        default: uni.$u.props.text.show
      },
      text: {
        type: [String, Number],
        default: uni.$u.props.text.text
      },
      prefixIcon: {
        type: String,
        default: uni.$u.props.text.prefixIcon
      },
      suffixIcon: {
        type: String,
        default: uni.$u.props.text.suffixIcon
      },
      mode: {
        type: String,
        default: uni.$u.props.text.mode
      },
      href: {
        type: String,
        default: uni.$u.props.text.href
      },
      format: {
        type: [String, Function],
        default: uni.$u.props.text.format
      },
      call: {
        type: Boolean,
        default: uni.$u.props.text.call
      },
      openType: {
        type: String,
        default: uni.$u.props.text.openType
      },
      bold: {
        type: Boolean,
        default: uni.$u.props.text.bold
      },
      block: {
        type: Boolean,
        default: uni.$u.props.text.block
      },
      lines: {
        type: [String, Number],
        default: uni.$u.props.text.lines
      },
      color: {
        type: String,
        default: uni.$u.props.text.color
      },
      size: {
        type: [String, Number],
        default: uni.$u.props.text.size
      },
      iconStyle: {
        type: [Object, String],
        default: uni.$u.props.text.iconStyle
      },
      decoration: {
        tepe: String,
        default: uni.$u.props.text.decoration
      },
      margin: {
        type: [Object, String, Number],
        default: uni.$u.props.text.margin
      },
      lineHeight: {
        type: [String, Number],
        default: uni.$u.props.text.lineHeight
      },
      align: {
        type: String,
        default: uni.$u.props.text.align
      },
      wordWrap: {
        type: String,
        default: uni.$u.props.text.wordWrap
      }
    }
  };
  const _sfc_main$9 = {
    name: "u--text",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, value, props$4],
    computed: {
      valueStyle() {
        const style = {
          textDecoration: this.decoration,
          fontWeight: this.bold ? "bold" : "normal",
          wordWrap: this.wordWrap,
          fontSize: uni.$u.addUnit(this.size)
        };
        !this.type && (style.color = this.color);
        this.isNvue && this.lines && (style.lines = this.lines);
        this.lineHeight && (style.lineHeight = uni.$u.addUnit(this.lineHeight));
        !this.isNvue && this.block && (style.display = "block");
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      },
      isNvue() {
        let nvue = false;
        return nvue;
      },
      isMp() {
        let mp = false;
        return mp;
      }
    },
    data() {
      return {};
    },
    methods: {
      clickHandler() {
        if (this.call && this.mode === "phone") {
          uni.makePhoneCall({
            phoneNumber: this.text
          });
        }
        this.$emit("click");
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$8);
    const _component_u_link = resolveEasycom(vue.resolveDynamicComponent("u-link"), __easycom_1$2);
    return _ctx.show ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: vue.normalizeClass(["u-text", []]),
      style: vue.normalizeStyle({
        margin: _ctx.margin,
        justifyContent: _ctx.align === "left" ? "flex-start" : _ctx.align === "center" ? "center" : "flex-end"
      }),
      onClick: _cache[6] || (_cache[6] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    }, [
      _ctx.mode === "price" ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 0,
        class: vue.normalizeClass(["u-text__price", _ctx.type && `u-text__value--${_ctx.type}`]),
        style: vue.normalizeStyle([$options.valueStyle])
      }, "\uFFE5", 6)) : vue.createCommentVNode("v-if", true),
      _ctx.prefixIcon ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "u-text__prefix-icon"
      }, [
        vue.createVNode(_component_u_icon, {
          name: _ctx.prefixIcon,
          customStyle: _ctx.$u.addStyle(_ctx.iconStyle)
        }, null, 8, ["name", "customStyle"])
      ])) : vue.createCommentVNode("v-if", true),
      _ctx.mode === "link" ? (vue.openBlock(), vue.createBlock(_component_u_link, {
        key: 2,
        text: _ctx.value,
        href: _ctx.href,
        underLine: ""
      }, null, 8, ["text", "href"])) : _ctx.openType && $options.isMp ? (vue.openBlock(), vue.createElementBlock("button", {
        key: 3,
        class: "u-reset-button u-text__value",
        style: vue.normalizeStyle([$options.valueStyle]),
        "data-index": _ctx.index,
        openType: _ctx.openType,
        onGetuserinfo: _cache[0] || (_cache[0] = (...args) => _ctx.onGetUserInfo && _ctx.onGetUserInfo(...args)),
        onContact: _cache[1] || (_cache[1] = (...args) => _ctx.onContact && _ctx.onContact(...args)),
        onGetphonenumber: _cache[2] || (_cache[2] = (...args) => _ctx.onGetPhoneNumber && _ctx.onGetPhoneNumber(...args)),
        onError: _cache[3] || (_cache[3] = (...args) => _ctx.onError && _ctx.onError(...args)),
        onLaunchapp: _cache[4] || (_cache[4] = (...args) => _ctx.onLaunchApp && _ctx.onLaunchApp(...args)),
        onOpensetting: _cache[5] || (_cache[5] = (...args) => _ctx.onOpenSetting && _ctx.onOpenSetting(...args)),
        lang: _ctx.lang,
        "session-from": _ctx.sessionFrom,
        "send-message-title": _ctx.sendMessageTitle,
        "send-message-path": _ctx.sendMessagePath,
        "send-message-img": _ctx.sendMessageImg,
        "show-message-card": _ctx.showMessageCard,
        "app-parameter": _ctx.appParameter
      }, vue.toDisplayString(_ctx.value), 45, ["data-index", "openType", "lang", "session-from", "send-message-title", "send-message-path", "send-message-img", "show-message-card", "app-parameter"])) : (vue.openBlock(), vue.createElementBlock("text", {
        key: 4,
        class: vue.normalizeClass(["u-text__value", [
          _ctx.type && `u-text__value--${_ctx.type}`,
          _ctx.lines && `u-line-${_ctx.lines}`
        ]]),
        style: vue.normalizeStyle([$options.valueStyle])
      }, vue.toDisplayString(_ctx.value), 7)),
      _ctx.suffixIcon ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 5,
        class: "u-text__suffix-icon"
      }, [
        vue.createVNode(_component_u_icon, {
          name: _ctx.suffixIcon,
          customStyle: _ctx.$u.addStyle(_ctx.iconStyle)
        }, null, 8, ["name", "customStyle"])
      ])) : vue.createCommentVNode("v-if", true)
    ], 4)) : vue.createCommentVNode("v-if", true);
  }
  var uvText = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-1eed3203"], ["__file", "D:/JavaProjects/timeBank/weapp/uni_modules/uview-plus/components/u-text/u-text.vue"]]);
  const _sfc_main$8 = {
    name: "u--text",
    mixins: [uni.$u.mpMixin, props$4, uni.$u.mixin],
    components: {
      uvText
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uvText = vue.resolveComponent("uvText");
    return vue.openBlock(), vue.createBlock(_component_uvText, {
      type: _ctx.type,
      show: _ctx.show,
      text: _ctx.text,
      prefixIcon: _ctx.prefixIcon,
      suffixIcon: _ctx.suffixIcon,
      mode: _ctx.mode,
      href: _ctx.href,
      format: _ctx.format,
      call: _ctx.call,
      openType: _ctx.openType,
      bold: _ctx.bold,
      block: _ctx.block,
      lines: _ctx.lines,
      color: _ctx.color,
      decoration: _ctx.decoration,
      size: _ctx.size,
      iconStyle: _ctx.iconStyle,
      margin: _ctx.margin,
      lineHeight: _ctx.lineHeight,
      align: _ctx.align,
      wordWrap: _ctx.wordWrap,
      customStyle: _ctx.customStyle,
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
    }, null, 8, ["type", "show", "text", "prefixIcon", "suffixIcon", "mode", "href", "format", "call", "openType", "bold", "block", "lines", "color", "decoration", "size", "iconStyle", "margin", "lineHeight", "align", "wordWrap", "customStyle"]);
  }
  var __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "D:/JavaProjects/timeBank/weapp/uni_modules/uview-plus/components/u--text/u--text.vue"]]);
  var props$3 = {
    props: {
      indicatorWidth: {
        type: [String, Number],
        default: uni.$u.props.scrollList.indicatorWidth
      },
      indicatorBarWidth: {
        type: [String, Number],
        default: uni.$u.props.scrollList.indicatorBarWidth
      },
      indicator: {
        type: Boolean,
        default: uni.$u.props.scrollList.indicator
      },
      indicatorColor: {
        type: String,
        default: uni.$u.props.scrollList.indicatorColor
      },
      indicatorActiveColor: {
        type: String,
        default: uni.$u.props.scrollList.indicatorActiveColor
      },
      indicatorStyle: {
        type: [String, Object],
        default: uni.$u.props.scrollList.indicatorStyle
      }
    }
  };
  var block0 = (Comp) => {
    (Comp.$wxs || (Comp.$wxs = [])).push("wxs");
    (Comp.$wxsModules || (Comp.$wxsModules = {}))["wxs"] = "19926281";
  };
  const _sfc_main$7 = {
    name: "u-scroll-list",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$3],
    data() {
      return {
        scrollInfo: {
          scrollLeft: 0,
          scrollWidth: 0
        },
        scrollWidth: 0
      };
    },
    computed: {
      barStyle() {
        const style = {};
        style.width = uni.$u.addUnit(this.indicatorBarWidth);
        style.backgroundColor = this.indicatorActiveColor;
        return style;
      },
      lineStyle() {
        const style = {};
        style.width = uni.$u.addUnit(this.indicatorWidth);
        style.backgroundColor = this.indicatorColor;
        return style;
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.getComponentWidth();
      },
      scrollEvent(status) {
        this.$emit(status);
      },
      async getComponentWidth() {
        await uni.$u.sleep(30);
        this.$uGetRect(".u-scroll-list").then((size) => {
          this.scrollWidth = size.width;
        });
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "u-scroll-list",
      ref: "u-scroll-list"
    }, [
      vue.createCommentVNode(" \u4EE5\u4E0A\u5E73\u53F0\uFF0C\u652F\u6301wxs "),
      vue.createElementVNode("scroll-view", {
        class: "u-scroll-list__scroll-view",
        "scroll-x": "",
        onScroll: _cache[0] || (_cache[0] = (...args) => _ctx.wxs.scroll && _ctx.wxs.scroll(...args)),
        onScrolltoupper: _cache[1] || (_cache[1] = (...args) => _ctx.wxs.scrolltoupper && _ctx.wxs.scrolltoupper(...args)),
        onScrolltolower: _cache[2] || (_cache[2] = (...args) => _ctx.wxs.scrolltolower && _ctx.wxs.scrolltolower(...args)),
        "data-scrollWidth": $data.scrollWidth,
        "data-barWidth": _ctx.$u.getPx(_ctx.indicatorBarWidth),
        "data-indicatorWidth": _ctx.$u.getPx(_ctx.indicatorWidth),
        "show-scrollbar": false,
        "upper-threshold": 0,
        "lower-threshold": 0
      }, [
        vue.createElementVNode("view", { class: "u-scroll-list__scroll-view__content" }, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ], 40, ["data-scrollWidth", "data-barWidth", "data-indicatorWidth"]),
      _ctx.indicator ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "u-scroll-list__indicator",
        style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.indicatorStyle)])
      }, [
        vue.createElementVNode("view", {
          class: "u-scroll-list__indicator__line",
          style: vue.normalizeStyle([$options.lineStyle])
        }, [
          vue.createElementVNode("view", {
            class: "u-scroll-list__indicator__line__bar",
            style: vue.normalizeStyle([$options.barStyle]),
            ref: "u-scroll-list__indicator__line__bar"
          }, null, 4)
        ], 4)
      ], 4)) : vue.createCommentVNode("v-if", true)
    ], 512);
  }
  if (typeof block0 === "function")
    block0(_sfc_main$7);
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-b4dab21e"], ["__file", "D:/JavaProjects/timeBank/weapp/uni_modules/uview-plus/components/u-scroll-list/u-scroll-list.vue"]]);
  const _sfc_main$6 = {
    components: {
      ActivityItem
    },
    data() {
      return {
        list: [{
          price: "\u6B66\u6C49\u7231\u5FC3\u53A8\u623F",
          thumb: "https://cdn.uviewui.com/uview/goods/1.jpg"
        }, {
          price: "\u5173\u7231\u513F\u7AE5",
          thumb: "https://cdn.uviewui.com/uview/goods/2.jpg"
        }, {
          price: "XXX\u7BEE\u7403\u961F",
          thumb: "https://cdn.uviewui.com/uview/goods/6.jpg"
        }, {
          price: "\u4FE1\u9633\u6052\u5FC3\u793E\u533A",
          thumb: "https://cdn.uviewui.com/uview/goods/5.jpg"
        }, {
          price: "\u4FE1\u9633\u5E02\u5FD7\u613F\u8005\u534F\u4F1A",
          thumb: "https://cdn.uviewui.com/uview/goods/2.jpg"
        }],
        list1: [{
          name: "\u5173\u6CE8"
        }, {
          name: "\u63A8\u8350"
        }, {
          name: "\u7535\u5F71"
        }, {
          name: "\u79D1\u6280"
        }, {
          name: "\u97F3\u4E50"
        }, {
          name: "\u7F8E\u98DF"
        }, {
          name: "\u6587\u5316"
        }, {
          name: "\u8D22\u7ECF"
        }, {
          name: "\u624B\u5DE5"
        }]
      };
    },
    methods: {
      left() {
        formatAppLog("log", "at pages/find/index.vue:83", "left");
      },
      right() {
        formatAppLog("log", "at pages/find/index.vue:86", "right");
      },
      tabChange(e) {
        formatAppLog("log", "at pages/find/index.vue:89", e);
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_gap = resolveEasycom(vue.resolveDynamicComponent("u-gap"), __easycom_0$2);
    const _component_u__text = resolveEasycom(vue.resolveDynamicComponent("u--text"), __easycom_1$1);
    const _component_u_scroll_list = resolveEasycom(vue.resolveDynamicComponent("u-scroll-list"), __easycom_2);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$8);
    const _component_u_tabs = resolveEasycom(vue.resolveDynamicComponent("u-tabs"), __easycom_4);
    const _component_u_sticky = resolveEasycom(vue.resolveDynamicComponent("u-sticky"), __easycom_5);
    const _component_activity_item = vue.resolveComponent("activity-item");
    return vue.openBlock(), vue.createElementBlock("view", { class: "mainPage" }, [
      vue.createVNode(_component_u_sticky, {
        bgColor: "#fff",
        "offset-top": "45"
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "team" }, [
            vue.createElementVNode("view", { class: "main-title" }, " \u7CBE\u9009 "),
            vue.createVNode(_component_u_gap, { height: "20" }),
            vue.createVNode(_component_u_scroll_list, {
              onRight: $options.right,
              onLeft: $options.left,
              indicator: false
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", {
                  class: "scroll-list",
                  style: { "flex-direction": "row" }
                }, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.list, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: vue.normalizeClass(["scroll-list__goods-item", [index2 === 9 && "scroll-list__goods-item--no-margin-right"]]),
                      key: index2
                    }, [
                      vue.createElementVNode("image", {
                        class: "scroll-list__goods-item__image",
                        src: item.thumb
                      }, null, 8, ["src"]),
                      vue.createVNode(_component_u__text, {
                        lines: 1,
                        text: item.price,
                        type: "warning"
                      }, null, 8, ["text"])
                    ], 2);
                  }), 128))
                ])
              ]),
              _: 1
            }, 8, ["onRight", "onLeft"])
          ]),
          vue.createElementVNode("view", { class: "activity" }, [
            vue.createElementVNode("view", { class: "main-title" }, " \u7CBE\u9009 "),
            vue.createVNode(_component_u_tabs, {
              list: $data.list1,
              onChange: $options.tabChange
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", {
                  slot: "right",
                  style: { "padding-left": "4px" },
                  onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$u.toast("\u63D2\u69FD\u88AB\u70B9\u51FB"))
                }, [
                  vue.createVNode(_component_u_icon, {
                    name: "list",
                    size: "21",
                    bold: ""
                  })
                ])
              ]),
              _: 1
            }, 8, ["list", "onChange"])
          ])
        ]),
        _: 1
      }),
      vue.createElementVNode("scroll-view", { "scroll-y": "true" }, [
        (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(100, (item) => {
          return vue.createVNode(_component_activity_item);
        }), 64))
      ])
    ]);
  }
  var PagesFindIndex = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "D:/JavaProjects/timeBank/weapp/pages/find/index.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " \u5151\u6362 ");
  }
  var PagesExchangeIndex = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "D:/JavaProjects/timeBank/weapp/pages/exchange/index.vue"]]);
  var props$2 = {
    props: {
      src: {
        type: String,
        default: uni.$u.props.avatar.src
      },
      shape: {
        type: String,
        default: uni.$u.props.avatar.shape
      },
      size: {
        type: [String, Number],
        default: uni.$u.props.avatar.size
      },
      mode: {
        type: String,
        default: uni.$u.props.avatar.mode
      },
      text: {
        type: String,
        default: uni.$u.props.avatar.text
      },
      bgColor: {
        type: String,
        default: uni.$u.props.avatar.bgColor
      },
      color: {
        type: String,
        default: uni.$u.props.avatar.color
      },
      fontSize: {
        type: [String, Number],
        default: uni.$u.props.avatar.fontSize
      },
      icon: {
        type: String,
        default: uni.$u.props.avatar.icon
      },
      mpAvatar: {
        type: Boolean,
        default: uni.$u.props.avatar.mpAvatar
      },
      randomBgColor: {
        type: Boolean,
        default: uni.$u.props.avatar.randomBgColor
      },
      defaultUrl: {
        type: String,
        default: uni.$u.props.avatar.defaultUrl
      },
      colorIndex: {
        type: [String, Number],
        validator(n) {
          return uni.$u.test.range(n, [0, 19]) || n === "";
        },
        default: uni.$u.props.avatar.colorIndex
      },
      name: {
        type: String,
        default: uni.$u.props.avatar.name
      }
    }
  };
  const base64Avatar = "data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjREMEQwRkY0RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjREMEQwRkY1RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEQwRDBGRjJGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEQwRDBGRjNGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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";
  const _sfc_main$4 = {
    name: "u-avatar",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$2],
    data() {
      return {
        colors: [
          "#ffb34b",
          "#f2bba9",
          "#f7a196",
          "#f18080",
          "#88a867",
          "#bfbf39",
          "#89c152",
          "#94d554",
          "#f19ec2",
          "#afaae4",
          "#e1b0df",
          "#c38cc1",
          "#72dcdc",
          "#9acdcb",
          "#77b1cc",
          "#448aca",
          "#86cefa",
          "#98d1ee",
          "#73d1f1",
          "#80a7dc"
        ],
        avatarUrl: this.src,
        allowMp: false
      };
    },
    watch: {
      src: {
        immediate: true,
        handler(newVal) {
          this.avatarUrl = newVal;
          if (!newVal) {
            this.errorHandler();
          }
        }
      }
    },
    computed: {
      imageStyle() {
        const style = {};
        return style;
      }
    },
    created() {
      this.init();
    },
    methods: {
      init() {
      },
      isImg() {
        return this.src.indexOf("/") !== -1;
      },
      errorHandler() {
        this.avatarUrl = this.defaultUrl || base64Avatar;
      },
      clickHandler() {
        this.$emit("click", this.name);
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$8);
    const _component_u__text = resolveEasycom(vue.resolveDynamicComponent("u--text"), __easycom_1$1);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-avatar", [`u-avatar--${_ctx.shape}`]]),
      style: vue.normalizeStyle([{
        backgroundColor: _ctx.text || _ctx.icon ? _ctx.randomBgColor ? $data.colors[_ctx.colorIndex !== "" ? _ctx.colorIndex : _ctx.$u.random(0, 19)] : _ctx.bgColor : "transparent",
        width: _ctx.$u.addUnit(_ctx.size),
        height: _ctx.$u.addUnit(_ctx.size)
      }, _ctx.$u.addStyle(_ctx.customStyle)]),
      onClick: _cache[1] || (_cache[1] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, () => [
        _ctx.mpAvatar && $data.allowMp ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [], 64)) : _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
          key: 1,
          name: _ctx.icon,
          size: _ctx.fontSize,
          color: _ctx.color
        }, null, 8, ["name", "size", "color"])) : _ctx.text ? (vue.openBlock(), vue.createBlock(_component_u__text, {
          key: 2,
          text: _ctx.text,
          size: _ctx.fontSize,
          color: _ctx.color,
          align: "center",
          customStyle: "justify-content: center"
        }, null, 8, ["text", "size", "color"])) : (vue.openBlock(), vue.createElementBlock("image", {
          key: 3,
          class: vue.normalizeClass(["u-avatar__image", [`u-avatar__image--${_ctx.shape}`]]),
          src: $data.avatarUrl || _ctx.defaultUrl,
          mode: _ctx.mode,
          onError: _cache[0] || (_cache[0] = (...args) => $options.errorHandler && $options.errorHandler(...args)),
          style: vue.normalizeStyle([{
            width: _ctx.$u.addUnit(_ctx.size),
            height: _ctx.$u.addUnit(_ctx.size)
          }])
        }, null, 46, ["src", "mode"]))
      ], true)
    ], 6);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-7ad729fa"], ["__file", "D:/JavaProjects/timeBank/weapp/uni_modules/uview-plus/components/u-avatar/u-avatar.vue"]]);
  var props$1 = {
    props: {
      modelValue: {
        type: [String, Number],
        default: uni.$u.props.rate.value
      },
      count: {
        type: [String, Number],
        default: uni.$u.props.rate.count
      },
      disabled: {
        type: Boolean,
        default: uni.$u.props.rate.disabled
      },
      readonly: {
        type: Boolean,
        default: uni.$u.props.rate.readonly
      },
      size: {
        type: [String, Number],
        default: uni.$u.props.rate.size
      },
      inactiveColor: {
        type: String,
        default: uni.$u.props.rate.inactiveColor
      },
      activeColor: {
        type: String,
        default: uni.$u.props.rate.activeColor
      },
      gutter: {
        type: [String, Number],
        default: uni.$u.props.rate.gutter
      },
      minCount: {
        type: [String, Number],
        default: uni.$u.props.rate.minCount
      },
      allowHalf: {
        type: Boolean,
        default: uni.$u.props.rate.allowHalf
      },
      activeIcon: {
        type: String,
        default: uni.$u.props.rate.activeIcon
      },
      inactiveIcon: {
        type: String,
        default: uni.$u.props.rate.inactiveIcon
      },
      touchable: {
        type: Boolean,
        default: uni.$u.props.rate.touchable
      }
    }
  };
  const _sfc_main$3 = {
    name: "u-rate",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$1],
    data() {
      return {
        elId: uni.$u.guid(),
        elClass: uni.$u.guid(),
        rateBoxLeft: 0,
        activeIndex: this.value,
        rateWidth: 0,
        moving: false
      };
    },
    watch: {
      modelValue(val) {
        this.activeIndex = val;
      },
      activeIndex: "emitEvent"
    },
    emits: ["update:modelValue", "change"],
    methods: {
      init() {
        uni.$u.sleep().then(() => {
          this.getRateItemRect();
          this.getRateIconWrapRect();
        });
      },
      async getRateItemRect() {
        await uni.$u.sleep();
        this.$uGetRect("#" + this.elId).then((res) => {
          this.rateBoxLeft = res.left;
        });
      },
      getRateIconWrapRect() {
        this.$uGetRect("." + this.elClass).then((res) => {
          this.rateWidth = res.width;
        });
      },
      touchMove(e) {
        if (!this.touchable) {
          return;
        }
        this.preventEvent(e);
        const x = e.changedTouches[0].pageX;
        this.getActiveIndex(x);
      },
      touchEnd(e) {
        if (!this.touchable) {
          return;
        }
        this.preventEvent(e);
        const x = e.changedTouches[0].pageX;
        this.getActiveIndex(x);
      },
      clickHandler(e, index2) {
        if (uni.$u.os() === "ios" && this.moving) {
          return;
        }
        this.preventEvent(e);
        let x = 0;
        x = e.changedTouches[0].pageX;
        this.getActiveIndex(x, true);
      },
      emitEvent() {
        this.$emit("change", this.activeIndex);
        this.$emit("update:modelValue", this.activeIndex);
      },
      getActiveIndex(x, isClick = false) {
        if (this.disabled || this.readonly) {
          return;
        }
        const allRateWidth = this.rateWidth * this.count + this.rateBoxLeft;
        x = uni.$u.range(this.rateBoxLeft, allRateWidth, x) - this.rateBoxLeft;
        const distance = x;
        let index2;
        if (this.allowHalf) {
          index2 = Math.floor(distance / this.rateWidth);
          const decimal = distance % this.rateWidth;
          if (decimal <= this.rateWidth / 2 && decimal > 0) {
            index2 += 0.5;
          } else if (decimal > this.rateWidth / 2) {
            index2++;
          }
        } else {
          index2 = Math.floor(distance / this.rateWidth);
          const decimal = distance % this.rateWidth;
          if (isClick) {
            if (decimal > 0)
              index2++;
          } else {
            if (decimal > this.rateWidth / 2)
              index2++;
          }
        }
        this.activeIndex = Math.min(index2, this.count);
        if (this.activeIndex < this.minCount) {
          this.activeIndex = this.minCount;
        }
        setTimeout(() => {
          this.moving = true;
        }, 10);
        setTimeout(() => {
          this.moving = false;
        }, 10);
      }
    },
    mounted() {
      this.init();
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$8);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "u-rate",
      id: $data.elId,
      ref: "u-rate",
      style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.customStyle)])
    }, [
      vue.createElementVNode("view", {
        class: "u-rate__content",
        onTouchmove: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.touchMove && $options.touchMove(...args), ["stop"])),
        onTouchend: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.touchEnd && $options.touchEnd(...args), ["stop"]))
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(Number(_ctx.count), (item, index2) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: vue.normalizeClass(["u-rate__content__item", [$data.elClass]]),
            key: index2
          }, [
            vue.createElementVNode("view", {
              class: "u-rate__content__item__icon-wrap",
              ref_for: true,
              ref: "u-rate__content__item__icon-wrap",
              onClick: vue.withModifiers(($event) => $options.clickHandler($event, index2 + 1), ["stop"])
            }, [
              vue.createVNode(_component_u_icon, {
                name: Math.floor($data.activeIndex) > index2 ? _ctx.activeIcon : _ctx.inactiveIcon,
                color: _ctx.disabled ? "#c8c9cc" : Math.floor($data.activeIndex) > index2 ? _ctx.activeColor : _ctx.inactiveColor,
                "custom-style": {
                  padding: `0 ${_ctx.$u.addUnit(_ctx.gutter / 2)}`
                },
                size: _ctx.size
              }, null, 8, ["name", "color", "custom-style", "size"])
            ], 8, ["onClick"]),
            _ctx.allowHalf ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              onClick: vue.withModifiers(($event) => $options.clickHandler($event, index2 + 1), ["stop"]),
              class: "u-rate__content__item__icon-wrap u-rate__content__item__icon-wrap--half",
              style: vue.normalizeStyle([{
                width: _ctx.$u.addUnit($data.rateWidth / 2)
              }]),
              ref_for: true,
              ref: "u-rate__content__item__icon-wrap"
            }, [
              vue.createVNode(_component_u_icon, {
                name: Math.ceil($data.activeIndex) > index2 ? _ctx.activeIcon : _ctx.inactiveIcon,
                color: _ctx.disabled ? "#c8c9cc" : Math.ceil($data.activeIndex) > index2 ? _ctx.activeColor : _ctx.inactiveColor,
                "custom-style": {
                  padding: `0 ${_ctx.$u.addUnit(_ctx.gutter / 2)}`
                },
                size: _ctx.size
              }, null, 8, ["name", "color", "custom-style", "size"])
            ], 12, ["onClick"])) : vue.createCommentVNode("v-if", true)
          ], 2);
        }), 128))
      ], 32)
    ], 12, ["id"]);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-0b4862a3"], ["__file", "D:/JavaProjects/timeBank/weapp/uni_modules/uview-plus/components/u-rate/u-rate.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {
        src: "http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg",
        count: 6,
        value: 2
      };
    },
    methods: {}
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_avatar = resolveEasycom(vue.resolveDynamicComponent("u-avatar"), __easycom_0);
    const _component_u_rate = resolveEasycom(vue.resolveDynamicComponent("u-rate"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "mainPage" }, [
      vue.createElementVNode("view", { class: "header" }, [
        vue.createElementVNode("view", { class: "pic" }, [
          vue.createVNode(_component_u_avatar, {
            src: $data.src,
            size: "100"
          }, null, 8, ["src"])
        ]),
        vue.createElementVNode("view", { class: "info" }, [
          vue.createElementVNode("view", { class: "nickname item" }, " \u7A0B\u6C38\u78CA "),
          vue.createElementVNode("view", { class: "nickname item" }, " \u670D\u52A10\u6B21| \u65F6\u957F0\u5C0F\u65F6 "),
          vue.createElementVNode("view", { class: "rate item" }, [
            vue.createTextVNode(" \u670D\u52A1\u8BC4\u4EF7 "),
            vue.createVNode(_component_u_rate, {
              count: $data.count,
              modelValue: $data.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.value = $event)
            }, null, 8, ["count", "modelValue"])
          ])
        ])
      ])
    ]);
  }
  var PagesMineIndex = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-4bd6864f"], ["__file", "D:/JavaProjects/timeBank/weapp/pages/mine/index.vue"]]);
  const _sfc_main$1 = {
    components: {
      Home: PagesHomeIndex,
      Activity: PagesActivityIndex,
      Find: PagesFindIndex,
      Exchange: PagesExchangeIndex,
      Mine: PagesMineIndex
    },
    data() {
      return {
        tabIndex: 0
      };
    },
    methods: {
      click1() {
      },
      change(e) {
        this.tabIndex = e;
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_home = vue.resolveComponent("home");
    const _component_activity = vue.resolveComponent("activity");
    const _component_find = vue.resolveComponent("find");
    const _component_mine = vue.resolveComponent("mine");
    const _component_u_tabbar_item = resolveEasycom(vue.resolveDynamicComponent("u-tabbar-item"), __easycom_0$6);
    const _component_u_tabbar = resolveEasycom(vue.resolveDynamicComponent("u-tabbar"), __easycom_1$4);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      $data.tabIndex == 0 ? (vue.openBlock(), vue.createBlock(_component_home, { key: 0 })) : vue.createCommentVNode("v-if", true),
      $data.tabIndex == 1 ? (vue.openBlock(), vue.createBlock(_component_activity, { key: 1 })) : vue.createCommentVNode("v-if", true),
      $data.tabIndex == 2 ? (vue.openBlock(), vue.createBlock(_component_find, { key: 2 })) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(' <exchange v-if="tabIndex==3"></exchange> '),
      $data.tabIndex == 3 ? (vue.openBlock(), vue.createBlock(_component_mine, { key: 3 })) : vue.createCommentVNode("v-if", true),
      vue.createVNode(_component_u_tabbar, {
        value: $data.tabIndex,
        onChange: $options.change,
        fixed: true,
        placeholder: true,
        safeAreaInsetBottom: false
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_u_tabbar_item, {
            text: "\u9996\u9875",
            icon: "level"
          }),
          vue.createVNode(_component_u_tabbar_item, {
            text: "\u6D3B\u52A8",
            icon: "photo"
          }),
          vue.createVNode(_component_u_tabbar_item, {
            text: "\u53D1\u73B0",
            icon: "play-right"
          }),
          vue.createCommentVNode(' <u-tabbar-item text="\u5151\u6362" icon="account"></u-tabbar-item> '),
          vue.createVNode(_component_u_tabbar_item, {
            text: "\u6211\u7684",
            icon: "account"
          })
        ]),
        _: 1
      }, 8, ["value", "onChange"])
    ]);
  }
  var PagesIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/JavaProjects/timeBank/weapp/pages/index.vue"]]);
  __definePage("pages/index", PagesIndex);
  __definePage("pages/home/index", PagesHomeIndex);
  __definePage("pages/activity/index", PagesActivityIndex);
  __definePage("pages/find/index", PagesFindIndex);
  __definePage("pages/exchange/index", PagesExchangeIndex);
  __definePage("pages/mine/index", PagesMineIndex);
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
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/JavaProjects/timeBank/weapp/App.vue"]]);
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
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
      let currentSettings = __spreadValues({}, defaultSettings);
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
        setSettings(value2) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value2));
          } catch (e) {
          }
          currentSettings = value2;
        }
      };
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value2) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value2);
        }
      });
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
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(pluginDescriptor, hook) : null;
      const list2 = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list2.push({
        pluginDescriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * vuex v4.0.2
   * (c) 2021 Evan You
   * @license MIT
   */
  var storeKey = "store";
  function forEachValue(obj, fn) {
    Object.keys(obj).forEach(function(key) {
      return fn(obj[key], key);
    });
  }
  function isObject$1(obj) {
    return obj !== null && typeof obj === "object";
  }
  function isPromise(val) {
    return val && typeof val.then === "function";
  }
  function assert(condition, msg) {
    if (!condition) {
      throw new Error("[vuex] " + msg);
    }
  }
  function partial(fn, arg) {
    return function() {
      return fn(arg);
    };
  }
  function genericSubscribe(fn, subs, options) {
    if (subs.indexOf(fn) < 0) {
      options && options.prepend ? subs.unshift(fn) : subs.push(fn);
    }
    return function() {
      var i = subs.indexOf(fn);
      if (i > -1) {
        subs.splice(i, 1);
      }
    };
  }
  function resetStore(store2, hot) {
    store2._actions = /* @__PURE__ */ Object.create(null);
    store2._mutations = /* @__PURE__ */ Object.create(null);
    store2._wrappedGetters = /* @__PURE__ */ Object.create(null);
    store2._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    var state = store2.state;
    installModule(store2, state, [], store2._modules.root, true);
    resetStoreState(store2, state, hot);
  }
  function resetStoreState(store2, state, hot) {
    var oldState = store2._state;
    store2.getters = {};
    store2._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    var wrappedGetters = store2._wrappedGetters;
    var computedObj = {};
    forEachValue(wrappedGetters, function(fn, key) {
      computedObj[key] = partial(fn, store2);
      Object.defineProperty(store2.getters, key, {
        get: function() {
          return computedObj[key]();
        },
        enumerable: true
      });
    });
    store2._state = vue.reactive({
      data: state
    });
    if (store2.strict) {
      enableStrictMode(store2);
    }
    if (oldState) {
      if (hot) {
        store2._withCommit(function() {
          oldState.data = null;
        });
      }
    }
  }
  function installModule(store2, rootState, path, module, hot) {
    var isRoot = !path.length;
    var namespace = store2._modules.getNamespace(path);
    if (module.namespaced) {
      if (store2._modulesNamespaceMap[namespace] && true) {
        console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
      }
      store2._modulesNamespaceMap[namespace] = module;
    }
    if (!isRoot && !hot) {
      var parentState = getNestedState(rootState, path.slice(0, -1));
      var moduleName = path[path.length - 1];
      store2._withCommit(function() {
        {
          if (moduleName in parentState) {
            console.warn('[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"');
          }
        }
        parentState[moduleName] = module.state;
      });
    }
    var local = module.context = makeLocalContext(store2, namespace, path);
    module.forEachMutation(function(mutation, key) {
      var namespacedType = namespace + key;
      registerMutation(store2, namespacedType, mutation, local);
    });
    module.forEachAction(function(action, key) {
      var type = action.root ? key : namespace + key;
      var handler = action.handler || action;
      registerAction(store2, type, handler, local);
    });
    module.forEachGetter(function(getter, key) {
      var namespacedType = namespace + key;
      registerGetter(store2, namespacedType, getter, local);
    });
    module.forEachChild(function(child, key) {
      installModule(store2, rootState, path.concat(key), child, hot);
    });
  }
  function makeLocalContext(store2, namespace, path) {
    var noNamespace = namespace === "";
    var local = {
      dispatch: noNamespace ? store2.dispatch : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._actions[type]) {
            console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
            return;
          }
        }
        return store2.dispatch(type, payload);
      },
      commit: noNamespace ? store2.commit : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._mutations[type]) {
            console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
            return;
          }
        }
        store2.commit(type, payload, options);
      }
    };
    Object.defineProperties(local, {
      getters: {
        get: noNamespace ? function() {
          return store2.getters;
        } : function() {
          return makeLocalGetters(store2, namespace);
        }
      },
      state: {
        get: function() {
          return getNestedState(store2.state, path);
        }
      }
    });
    return local;
  }
  function makeLocalGetters(store2, namespace) {
    if (!store2._makeLocalGettersCache[namespace]) {
      var gettersProxy = {};
      var splitPos = namespace.length;
      Object.keys(store2.getters).forEach(function(type) {
        if (type.slice(0, splitPos) !== namespace) {
          return;
        }
        var localType = type.slice(splitPos);
        Object.defineProperty(gettersProxy, localType, {
          get: function() {
            return store2.getters[type];
          },
          enumerable: true
        });
      });
      store2._makeLocalGettersCache[namespace] = gettersProxy;
    }
    return store2._makeLocalGettersCache[namespace];
  }
  function registerMutation(store2, type, handler, local) {
    var entry = store2._mutations[type] || (store2._mutations[type] = []);
    entry.push(function wrappedMutationHandler(payload) {
      handler.call(store2, local.state, payload);
    });
  }
  function registerAction(store2, type, handler, local) {
    var entry = store2._actions[type] || (store2._actions[type] = []);
    entry.push(function wrappedActionHandler(payload) {
      var res = handler.call(store2, {
        dispatch: local.dispatch,
        commit: local.commit,
        getters: local.getters,
        state: local.state,
        rootGetters: store2.getters,
        rootState: store2.state
      }, payload);
      if (!isPromise(res)) {
        res = Promise.resolve(res);
      }
      if (store2._devtoolHook) {
        return res.catch(function(err) {
          store2._devtoolHook.emit("vuex:error", err);
          throw err;
        });
      } else {
        return res;
      }
    });
  }
  function registerGetter(store2, type, rawGetter, local) {
    if (store2._wrappedGetters[type]) {
      {
        console.error("[vuex] duplicate getter key: " + type);
      }
      return;
    }
    store2._wrappedGetters[type] = function wrappedGetter(store3) {
      return rawGetter(local.state, local.getters, store3.state, store3.getters);
    };
  }
  function enableStrictMode(store2) {
    vue.watch(function() {
      return store2._state.data;
    }, function() {
      {
        assert(store2._committing, "do not mutate vuex store state outside mutation handlers.");
      }
    }, { deep: true, flush: "sync" });
  }
  function getNestedState(state, path) {
    return path.reduce(function(state2, key) {
      return state2[key];
    }, state);
  }
  function unifyObjectStyle(type, payload, options) {
    if (isObject$1(type) && type.type) {
      options = payload;
      payload = type;
      type = type.type;
    }
    {
      assert(typeof type === "string", "expects string as the type, but found " + typeof type + ".");
    }
    return { type, payload, options };
  }
  var LABEL_VUEX_BINDINGS = "vuex bindings";
  var MUTATIONS_LAYER_ID = "vuex:mutations";
  var ACTIONS_LAYER_ID = "vuex:actions";
  var INSPECTOR_ID = "vuex";
  var actionId = 0;
  function addDevtools(app, store2) {
    setupDevtoolsPlugin({
      id: "org.vuejs.vuex",
      app,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [LABEL_VUEX_BINDINGS]
    }, function(api) {
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: "Vuex Mutations",
        color: COLOR_LIME_500
      });
      api.addTimelineLayer({
        id: ACTIONS_LAYER_ID,
        label: "Vuex Actions",
        color: COLOR_LIME_500
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      });
      api.on.getInspectorTree(function(payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          if (payload.filter) {
            var nodes = [];
            flattenStoreForInspectorTree(nodes, store2._modules.root, payload.filter, "");
            payload.rootNodes = nodes;
          } else {
            payload.rootNodes = [
              formatStoreForInspectorTree(store2._modules.root, "")
            ];
          }
        }
      });
      api.on.getInspectorState(function(payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          makeLocalGetters(store2, modulePath);
          payload.state = formatStoreForInspectorState(getStoreModule(store2._modules, modulePath), modulePath === "root" ? store2.getters : store2._makeLocalGettersCache, modulePath);
        }
      });
      api.on.editInspectorState(function(payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          var path = payload.path;
          if (modulePath !== "root") {
            path = modulePath.split("/").filter(Boolean).concat(path);
          }
          store2._withCommit(function() {
            payload.set(store2._state.data, path, payload.state.value);
          });
        }
      });
      store2.subscribe(function(mutation, state) {
        var data = {};
        if (mutation.payload) {
          data.payload = mutation.payload;
        }
        data.state = state;
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: Date.now(),
            title: mutation.type,
            data
          }
        });
      });
      store2.subscribeAction({
        before: function(action, state) {
          var data = {};
          if (action.payload) {
            data.payload = action.payload;
          }
          action._id = actionId++;
          action._time = Date.now();
          data.state = state;
          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: action._time,
              title: action.type,
              groupId: action._id,
              subtitle: "start",
              data
            }
          });
        },
        after: function(action, state) {
          var data = {};
          var duration = Date.now() - action._time;
          data.duration = {
            _custom: {
              type: "duration",
              display: duration + "ms",
              tooltip: "Action duration",
              value: duration
            }
          };
          if (action.payload) {
            data.payload = action.payload;
          }
          data.state = state;
          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: action.type,
              groupId: action._id,
              subtitle: "end",
              data
            }
          });
        }
      });
    });
  }
  var COLOR_LIME_500 = 8702998;
  var COLOR_DARK = 6710886;
  var COLOR_WHITE = 16777215;
  var TAG_NAMESPACED = {
    label: "namespaced",
    textColor: COLOR_WHITE,
    backgroundColor: COLOR_DARK
  };
  function extractNameFromPath(path) {
    return path && path !== "root" ? path.split("/").slice(-2, -1)[0] : "Root";
  }
  function formatStoreForInspectorTree(module, path) {
    return {
      id: path || "root",
      label: extractNameFromPath(path),
      tags: module.namespaced ? [TAG_NAMESPACED] : [],
      children: Object.keys(module._children).map(function(moduleName) {
        return formatStoreForInspectorTree(module._children[moduleName], path + moduleName + "/");
      })
    };
  }
  function flattenStoreForInspectorTree(result, module, filter, path) {
    if (path.includes(filter)) {
      result.push({
        id: path || "root",
        label: path.endsWith("/") ? path.slice(0, path.length - 1) : path || "Root",
        tags: module.namespaced ? [TAG_NAMESPACED] : []
      });
    }
    Object.keys(module._children).forEach(function(moduleName) {
      flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + "/");
    });
  }
  function formatStoreForInspectorState(module, getters, path) {
    getters = path === "root" ? getters : getters[path];
    var gettersKeys = Object.keys(getters);
    var storeState = {
      state: Object.keys(module.state).map(function(key) {
        return {
          key,
          editable: true,
          value: module.state[key]
        };
      })
    };
    if (gettersKeys.length) {
      var tree = transformPathsToObjectTree(getters);
      storeState.getters = Object.keys(tree).map(function(key) {
        return {
          key: key.endsWith("/") ? extractNameFromPath(key) : key,
          editable: false,
          value: canThrow(function() {
            return tree[key];
          })
        };
      });
    }
    return storeState;
  }
  function transformPathsToObjectTree(getters) {
    var result = {};
    Object.keys(getters).forEach(function(key) {
      var path = key.split("/");
      if (path.length > 1) {
        var target = result;
        var leafKey = path.pop();
        path.forEach(function(p) {
          if (!target[p]) {
            target[p] = {
              _custom: {
                value: {},
                display: p,
                tooltip: "Module",
                abstract: true
              }
            };
          }
          target = target[p]._custom.value;
        });
        target[leafKey] = canThrow(function() {
          return getters[key];
        });
      } else {
        result[key] = canThrow(function() {
          return getters[key];
        });
      }
    });
    return result;
  }
  function getStoreModule(moduleMap, path) {
    var names = path.split("/").filter(function(n) {
      return n;
    });
    return names.reduce(function(module, moduleName, i) {
      var child = module[moduleName];
      if (!child) {
        throw new Error('Missing module "' + moduleName + '" for path "' + path + '".');
      }
      return i === names.length - 1 ? child : child._children;
    }, path === "root" ? moduleMap : moduleMap.root._children);
  }
  function canThrow(cb) {
    try {
      return cb();
    } catch (e) {
      return e;
    }
  }
  var Module = function Module2(rawModule, runtime) {
    this.runtime = runtime;
    this._children = /* @__PURE__ */ Object.create(null);
    this._rawModule = rawModule;
    var rawState = rawModule.state;
    this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
  };
  var prototypeAccessors$1 = { namespaced: { configurable: true } };
  prototypeAccessors$1.namespaced.get = function() {
    return !!this._rawModule.namespaced;
  };
  Module.prototype.addChild = function addChild(key, module) {
    this._children[key] = module;
  };
  Module.prototype.removeChild = function removeChild(key) {
    delete this._children[key];
  };
  Module.prototype.getChild = function getChild(key) {
    return this._children[key];
  };
  Module.prototype.hasChild = function hasChild(key) {
    return key in this._children;
  };
  Module.prototype.update = function update2(rawModule) {
    this._rawModule.namespaced = rawModule.namespaced;
    if (rawModule.actions) {
      this._rawModule.actions = rawModule.actions;
    }
    if (rawModule.mutations) {
      this._rawModule.mutations = rawModule.mutations;
    }
    if (rawModule.getters) {
      this._rawModule.getters = rawModule.getters;
    }
  };
  Module.prototype.forEachChild = function forEachChild(fn) {
    forEachValue(this._children, fn);
  };
  Module.prototype.forEachGetter = function forEachGetter(fn) {
    if (this._rawModule.getters) {
      forEachValue(this._rawModule.getters, fn);
    }
  };
  Module.prototype.forEachAction = function forEachAction(fn) {
    if (this._rawModule.actions) {
      forEachValue(this._rawModule.actions, fn);
    }
  };
  Module.prototype.forEachMutation = function forEachMutation(fn) {
    if (this._rawModule.mutations) {
      forEachValue(this._rawModule.mutations, fn);
    }
  };
  Object.defineProperties(Module.prototype, prototypeAccessors$1);
  var ModuleCollection = function ModuleCollection2(rawRootModule) {
    this.register([], rawRootModule, false);
  };
  ModuleCollection.prototype.get = function get(path) {
    return path.reduce(function(module, key) {
      return module.getChild(key);
    }, this.root);
  };
  ModuleCollection.prototype.getNamespace = function getNamespace(path) {
    var module = this.root;
    return path.reduce(function(namespace, key) {
      module = module.getChild(key);
      return namespace + (module.namespaced ? key + "/" : "");
    }, "");
  };
  ModuleCollection.prototype.update = function update$1(rawRootModule) {
    update([], this.root, rawRootModule);
  };
  ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
    var this$1$1 = this;
    if (runtime === void 0)
      runtime = true;
    {
      assertRawModule(path, rawModule);
    }
    var newModule = new Module(rawModule, runtime);
    if (path.length === 0) {
      this.root = newModule;
    } else {
      var parent = this.get(path.slice(0, -1));
      parent.addChild(path[path.length - 1], newModule);
    }
    if (rawModule.modules) {
      forEachValue(rawModule.modules, function(rawChildModule, key) {
        this$1$1.register(path.concat(key), rawChildModule, runtime);
      });
    }
  };
  ModuleCollection.prototype.unregister = function unregister(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    var child = parent.getChild(key);
    if (!child) {
      {
        console.warn("[vuex] trying to unregister module '" + key + "', which is not registered");
      }
      return;
    }
    if (!child.runtime) {
      return;
    }
    parent.removeChild(key);
  };
  ModuleCollection.prototype.isRegistered = function isRegistered(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    if (parent) {
      return parent.hasChild(key);
    }
    return false;
  };
  function update(path, targetModule, newModule) {
    {
      assertRawModule(path, newModule);
    }
    targetModule.update(newModule);
    if (newModule.modules) {
      for (var key in newModule.modules) {
        if (!targetModule.getChild(key)) {
          {
            console.warn("[vuex] trying to add a new module '" + key + "' on hot reloading, manual reload is needed");
          }
          return;
        }
        update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
      }
    }
  }
  var functionAssert = {
    assert: function(value2) {
      return typeof value2 === "function";
    },
    expected: "function"
  };
  var objectAssert = {
    assert: function(value2) {
      return typeof value2 === "function" || typeof value2 === "object" && typeof value2.handler === "function";
    },
    expected: 'function or object with "handler" function'
  };
  var assertTypes = {
    getters: functionAssert,
    mutations: functionAssert,
    actions: objectAssert
  };
  function assertRawModule(path, rawModule) {
    Object.keys(assertTypes).forEach(function(key) {
      if (!rawModule[key]) {
        return;
      }
      var assertOptions = assertTypes[key];
      forEachValue(rawModule[key], function(value2, type) {
        assert(assertOptions.assert(value2), makeAssertionMessage(path, key, type, value2, assertOptions.expected));
      });
    });
  }
  function makeAssertionMessage(path, key, type, value2, expected) {
    var buf = key + " should be " + expected + ' but "' + key + "." + type + '"';
    if (path.length > 0) {
      buf += ' in module "' + path.join(".") + '"';
    }
    buf += " is " + JSON.stringify(value2) + ".";
    return buf;
  }
  function createStore(options) {
    return new Store(options);
  }
  var Store = function Store2(options) {
    var this$1$1 = this;
    if (options === void 0)
      options = {};
    {
      assert(typeof Promise !== "undefined", "vuex requires a Promise polyfill in this browser.");
      assert(this instanceof Store2, "store must be called with the new operator.");
    }
    var plugins = options.plugins;
    if (plugins === void 0)
      plugins = [];
    var strict = options.strict;
    if (strict === void 0)
      strict = false;
    var devtools = options.devtools;
    this._committing = false;
    this._actions = /* @__PURE__ */ Object.create(null);
    this._actionSubscribers = [];
    this._mutations = /* @__PURE__ */ Object.create(null);
    this._wrappedGetters = /* @__PURE__ */ Object.create(null);
    this._modules = new ModuleCollection(options);
    this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    this._subscribers = [];
    this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    this._devtools = devtools;
    var store2 = this;
    var ref = this;
    var dispatch = ref.dispatch;
    var commit = ref.commit;
    this.dispatch = function boundDispatch(type, payload) {
      return dispatch.call(store2, type, payload);
    };
    this.commit = function boundCommit(type, payload, options2) {
      return commit.call(store2, type, payload, options2);
    };
    this.strict = strict;
    var state = this._modules.root.state;
    installModule(this, state, [], this._modules.root);
    resetStoreState(this, state);
    plugins.forEach(function(plugin) {
      return plugin(this$1$1);
    });
  };
  var prototypeAccessors = { state: { configurable: true } };
  Store.prototype.install = function install2(app, injectKey) {
    app.provide(injectKey || storeKey, this);
    app.config.globalProperties.$store = this;
    var useDevtools = this._devtools !== void 0 ? this._devtools : true;
    if (useDevtools) {
      addDevtools(app, this);
    }
  };
  prototypeAccessors.state.get = function() {
    return this._state.data;
  };
  prototypeAccessors.state.set = function(v) {
    {
      assert(false, "use store.replaceState() to explicit replace store state.");
    }
  };
  Store.prototype.commit = function commit(_type, _payload, _options) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;
    var mutation = { type, payload };
    var entry = this._mutations[type];
    if (!entry) {
      {
        console.error("[vuex] unknown mutation type: " + type);
      }
      return;
    }
    this._withCommit(function() {
      entry.forEach(function commitIterator(handler) {
        handler(payload);
      });
    });
    this._subscribers.slice().forEach(function(sub) {
      return sub(mutation, this$1$1.state);
    });
    if (options && options.silent) {
      console.warn("[vuex] mutation type: " + type + ". Silent option has been removed. Use the filter functionality in the vue-devtools");
    }
  };
  Store.prototype.dispatch = function dispatch(_type, _payload) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;
    var action = { type, payload };
    var entry = this._actions[type];
    if (!entry) {
      {
        console.error("[vuex] unknown action type: " + type);
      }
      return;
    }
    try {
      this._actionSubscribers.slice().filter(function(sub) {
        return sub.before;
      }).forEach(function(sub) {
        return sub.before(action, this$1$1.state);
      });
    } catch (e) {
      {
        console.warn("[vuex] error in before action subscribers: ");
        console.error(e);
      }
    }
    var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
      return handler(payload);
    })) : entry[0](payload);
    return new Promise(function(resolve, reject) {
      result.then(function(res) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.after;
          }).forEach(function(sub) {
            return sub.after(action, this$1$1.state);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in after action subscribers: ");
            console.error(e);
          }
        }
        resolve(res);
      }, function(error2) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.error;
          }).forEach(function(sub) {
            return sub.error(action, this$1$1.state, error2);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in error action subscribers: ");
            console.error(e);
          }
        }
        reject(error2);
      });
    });
  };
  Store.prototype.subscribe = function subscribe(fn, options) {
    return genericSubscribe(fn, this._subscribers, options);
  };
  Store.prototype.subscribeAction = function subscribeAction(fn, options) {
    var subs = typeof fn === "function" ? { before: fn } : fn;
    return genericSubscribe(subs, this._actionSubscribers, options);
  };
  Store.prototype.watch = function watch$1(getter, cb, options) {
    var this$1$1 = this;
    {
      assert(typeof getter === "function", "store.watch only accepts a function.");
    }
    return vue.watch(function() {
      return getter(this$1$1.state, this$1$1.getters);
    }, cb, Object.assign({}, options));
  };
  Store.prototype.replaceState = function replaceState(state) {
    var this$1$1 = this;
    this._withCommit(function() {
      this$1$1._state.data = state;
    });
  };
  Store.prototype.registerModule = function registerModule(path, rawModule, options) {
    if (options === void 0)
      options = {};
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
      assert(path.length > 0, "cannot register the root module by using registerModule.");
    }
    this._modules.register(path, rawModule);
    installModule(this, this.state, path, this._modules.get(path), options.preserveState);
    resetStoreState(this, this.state);
  };
  Store.prototype.unregisterModule = function unregisterModule(path) {
    var this$1$1 = this;
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    this._modules.unregister(path);
    this._withCommit(function() {
      var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
      delete parentState[path[path.length - 1]];
    });
    resetStore(this);
  };
  Store.prototype.hasModule = function hasModule(path) {
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    return this._modules.isRegistered(path);
  };
  Store.prototype.hotUpdate = function hotUpdate(newOptions) {
    this._modules.update(newOptions);
    resetStore(this, true);
  };
  Store.prototype._withCommit = function _withCommit(fn) {
    var committing = this._committing;
    this._committing = true;
    fn();
    this._committing = committing;
  };
  Object.defineProperties(Store.prototype, prototypeAccessors);
  const store = createStore({
    state: {
      $userInfo: {
        id: 1
      }
    }
  });
  var mixin = {
    props: {
      customStyle: {
        type: [Object, String],
        default: () => ({})
      },
      customClass: {
        type: String,
        default: ""
      },
      url: {
        type: String,
        default: ""
      },
      linkType: {
        type: String,
        default: "navigateTo"
      }
    },
    data() {
      return {};
    },
    onLoad() {
      this.$u.getRect = this.$uGetRect;
    },
    created() {
      this.$u.getRect = this.$uGetRect;
    },
    computed: {
      $u() {
        return uni.$u.deepMerge(uni.$u, {
          props: void 0,
          http: void 0,
          mixin: void 0
        });
      },
      bem() {
        return function(name, fixed, change) {
          const prefix = `u-${name}--`;
          const classes = {};
          if (fixed) {
            fixed.map((item) => {
              classes[prefix + this[item]] = true;
            });
          }
          if (change) {
            change.map((item) => {
              this[item] ? classes[prefix + item] = this[item] : delete classes[prefix + item];
            });
          }
          return Object.keys(classes);
        };
      }
    },
    methods: {
      openPage(urlKey = "url") {
        const url2 = this[urlKey];
        if (url2) {
          uni[this.linkType]({
            url: url2
          });
        }
      },
      $uGetRect(selector, all) {
        return new Promise((resolve) => {
          uni.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }
            if (!all && rect) {
              resolve(rect);
            }
          }).exec();
        });
      },
      getParentData(parentName = "") {
        if (!this.parent)
          this.parent = {};
        this.parent = uni.$u.$parent.call(this, parentName);
        if (this.parent.children) {
          this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
        }
        if (this.parent && this.parentData) {
          Object.keys(this.parentData).map((key) => {
            this.parentData[key] = this.parent[key];
          });
        }
      },
      preventEvent(e) {
        e && typeof e.stopPropagation === "function" && e.stopPropagation();
      },
      noop(e) {
        this.preventEvent(e);
      }
    },
    onReachBottom() {
      uni.$emit("uOnReachBottom");
    },
    beforeDestroy() {
      if (this.parent && uni.$u.test.array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index2) => {
          if (child === this) {
            childrenList.splice(index2, 1);
          }
        });
      }
    }
  };
  var mpMixin = {};
  const { toString } = Object.prototype;
  function isArray(val) {
    return toString.call(val) === "[object Array]";
  }
  function isObject(val) {
    return val !== null && typeof val === "object";
  }
  function isDate(val) {
    return toString.call(val) === "[object Date]";
  }
  function isURLSearchParams(val) {
    return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
  }
  function forEach(obj, fn) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (let i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
  }
  function deepMerge$1() {
    const result = {};
    function assignValue(val, key) {
      if (typeof result[key] === "object" && typeof val === "object") {
        result[key] = deepMerge$1(result[key], val);
      } else if (typeof val === "object") {
        result[key] = deepMerge$1({}, val);
      } else {
        result[key] = val;
      }
    }
    for (let i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }
    return result;
  }
  function isUndefined(val) {
    return typeof val === "undefined";
  }
  function encode(val) {
    return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url2, params) {
    if (!params) {
      return url2;
    }
    let serializedParams;
    if (isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      const parts = [];
      forEach(params, (val, key) => {
        if (val === null || typeof val === "undefined") {
          return;
        }
        if (isArray(val)) {
          key = `${key}[]`;
        } else {
          val = [val];
        }
        forEach(val, (v) => {
          if (isDate(v)) {
            v = v.toISOString();
          } else if (isObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(`${encode(key)}=${encode(v)}`);
        });
      });
      serializedParams = parts.join("&");
    }
    if (serializedParams) {
      const hashmarkIndex = url2.indexOf("#");
      if (hashmarkIndex !== -1) {
        url2 = url2.slice(0, hashmarkIndex);
      }
      url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url2;
  }
  function isAbsoluteURL(url2) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
  }
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? `${baseURL.replace(/\/+$/, "")}/${relativeURL.replace(/^\/+/, "")}` : baseURL;
  }
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }
  function settle(resolve, reject, response) {
    const { validateStatus } = response.config;
    const status = response.statusCode;
    if (status && (!validateStatus || validateStatus(status))) {
      resolve(response);
    } else {
      reject(response);
    }
  }
  const mergeKeys$1 = (keys, config2) => {
    const config3 = {};
    keys.forEach((prop) => {
      if (!isUndefined(config2[prop])) {
        config3[prop] = config2[prop];
      }
    });
    return config3;
  };
  var adapter = (config2) => new Promise((resolve, reject) => {
    const fullPath = buildURL(buildFullPath(config2.baseURL, config2.url), config2.params);
    const _config = {
      url: fullPath,
      header: config2.header,
      complete: (response) => {
        config2.fullPath = fullPath;
        response.config = config2;
        try {
          if (typeof response.data === "string") {
            response.data = JSON.parse(response.data);
          }
        } catch (e) {
        }
        settle(resolve, reject, response);
      }
    };
    let requestTask;
    if (config2.method === "UPLOAD") {
      delete _config.header["content-type"];
      delete _config.header["Content-Type"];
      const otherConfig = {
        filePath: config2.filePath,
        name: config2.name
      };
      const optionalKeys = [
        "files",
        "timeout",
        "formData"
      ];
      requestTask = uni.uploadFile(__spreadValues(__spreadValues(__spreadValues({}, _config), otherConfig), mergeKeys$1(optionalKeys, config2)));
    } else if (config2.method === "DOWNLOAD") {
      if (!isUndefined(config2.timeout)) {
        _config.timeout = config2.timeout;
      }
      requestTask = uni.downloadFile(_config);
    } else {
      const optionalKeys = [
        "data",
        "method",
        "timeout",
        "dataType",
        "responseType",
        "sslVerify",
        "firstIpv4"
      ];
      requestTask = uni.request(__spreadValues(__spreadValues({}, _config), mergeKeys$1(optionalKeys, config2)));
    }
    if (config2.getTask) {
      config2.getTask(requestTask, config2);
    }
  });
  var dispatchRequest = (config2) => adapter(config2);
  function InterceptorManager() {
    this.handlers = [];
  }
  InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled,
      rejected
    });
    return this.handlers.length - 1;
  };
  InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  InterceptorManager.prototype.forEach = function forEach2(fn) {
    this.handlers.forEach((h) => {
      if (h !== null) {
        fn(h);
      }
    });
  };
  const mergeKeys = (keys, globalsConfig, config2) => {
    const config3 = {};
    keys.forEach((prop) => {
      if (!isUndefined(config2[prop])) {
        config3[prop] = config2[prop];
      } else if (!isUndefined(globalsConfig[prop])) {
        config3[prop] = globalsConfig[prop];
      }
    });
    return config3;
  };
  var mergeConfig = (globalsConfig, config2 = {}) => {
    const method = config2.method || globalsConfig.method || "GET";
    let config3 = {
      baseURL: globalsConfig.baseURL || "",
      method,
      url: config2.url || "",
      params: config2.params || {},
      custom: __spreadValues(__spreadValues({}, globalsConfig.custom || {}), config2.custom || {}),
      header: deepMerge$1(globalsConfig.header || {}, config2.header || {})
    };
    const defaultToConfig2Keys = ["getTask", "validateStatus"];
    config3 = __spreadValues(__spreadValues({}, config3), mergeKeys(defaultToConfig2Keys, globalsConfig, config2));
    if (method === "DOWNLOAD") {
      if (!isUndefined(config2.timeout)) {
        config3.timeout = config2.timeout;
      } else if (!isUndefined(globalsConfig.timeout)) {
        config3.timeout = globalsConfig.timeout;
      }
    } else if (method === "UPLOAD") {
      delete config3.header["content-type"];
      delete config3.header["Content-Type"];
      const uploadKeys = [
        "files",
        "filePath",
        "name",
        "timeout",
        "formData"
      ];
      uploadKeys.forEach((prop) => {
        if (!isUndefined(config2[prop])) {
          config3[prop] = config2[prop];
        }
      });
      if (isUndefined(config3.timeout) && !isUndefined(globalsConfig.timeout)) {
        config3.timeout = globalsConfig.timeout;
      }
    } else {
      const defaultsKeys = [
        "data",
        "timeout",
        "dataType",
        "responseType",
        "sslVerify",
        "firstIpv4"
      ];
      config3 = __spreadValues(__spreadValues({}, config3), mergeKeys(defaultsKeys, globalsConfig, config2));
    }
    return config3;
  };
  var defaults = {
    baseURL: "",
    header: {},
    method: "GET",
    dataType: "json",
    responseType: "text",
    custom: {},
    timeout: 6e4,
    sslVerify: true,
    firstIpv4: false,
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    }
  };
  var clone = function() {
    function _instanceof(obj, type) {
      return type != null && obj instanceof type;
    }
    var nativeMap;
    try {
      nativeMap = Map;
    } catch (_) {
      nativeMap = function() {
      };
    }
    var nativeSet;
    try {
      nativeSet = Set;
    } catch (_) {
      nativeSet = function() {
      };
    }
    var nativePromise;
    try {
      nativePromise = Promise;
    } catch (_) {
      nativePromise = function() {
      };
    }
    function clone2(parent, circular, depth, prototype, includeNonEnumerable) {
      if (typeof circular === "object") {
        depth = circular.depth;
        prototype = circular.prototype;
        includeNonEnumerable = circular.includeNonEnumerable;
        circular = circular.circular;
      }
      var allParents = [];
      var allChildren = [];
      var useBuffer = typeof Buffer != "undefined";
      if (typeof circular == "undefined")
        circular = true;
      if (typeof depth == "undefined")
        depth = Infinity;
      function _clone(parent2, depth2) {
        if (parent2 === null)
          return null;
        if (depth2 === 0)
          return parent2;
        var child;
        var proto;
        if (typeof parent2 != "object") {
          return parent2;
        }
        if (_instanceof(parent2, nativeMap)) {
          child = new nativeMap();
        } else if (_instanceof(parent2, nativeSet)) {
          child = new nativeSet();
        } else if (_instanceof(parent2, nativePromise)) {
          child = new nativePromise(function(resolve, reject) {
            parent2.then(function(value2) {
              resolve(_clone(value2, depth2 - 1));
            }, function(err) {
              reject(_clone(err, depth2 - 1));
            });
          });
        } else if (clone2.__isArray(parent2)) {
          child = [];
        } else if (clone2.__isRegExp(parent2)) {
          child = new RegExp(parent2.source, __getRegExpFlags(parent2));
          if (parent2.lastIndex)
            child.lastIndex = parent2.lastIndex;
        } else if (clone2.__isDate(parent2)) {
          child = new Date(parent2.getTime());
        } else if (useBuffer && Buffer.isBuffer(parent2)) {
          if (Buffer.from) {
            child = Buffer.from(parent2);
          } else {
            child = new Buffer(parent2.length);
            parent2.copy(child);
          }
          return child;
        } else if (_instanceof(parent2, Error)) {
          child = Object.create(parent2);
        } else {
          if (typeof prototype == "undefined") {
            proto = Object.getPrototypeOf(parent2);
            child = Object.create(proto);
          } else {
            child = Object.create(prototype);
            proto = prototype;
          }
        }
        if (circular) {
          var index2 = allParents.indexOf(parent2);
          if (index2 != -1) {
            return allChildren[index2];
          }
          allParents.push(parent2);
          allChildren.push(child);
        }
        if (_instanceof(parent2, nativeMap)) {
          parent2.forEach(function(value2, key) {
            var keyChild = _clone(key, depth2 - 1);
            var valueChild = _clone(value2, depth2 - 1);
            child.set(keyChild, valueChild);
          });
        }
        if (_instanceof(parent2, nativeSet)) {
          parent2.forEach(function(value2) {
            var entryChild = _clone(value2, depth2 - 1);
            child.add(entryChild);
          });
        }
        for (var i in parent2) {
          var attrs = Object.getOwnPropertyDescriptor(parent2, i);
          if (attrs) {
            child[i] = _clone(parent2[i], depth2 - 1);
          }
          try {
            var objProperty = Object.getOwnPropertyDescriptor(parent2, i);
            if (objProperty.set === "undefined") {
              continue;
            }
            child[i] = _clone(parent2[i], depth2 - 1);
          } catch (e) {
            if (e instanceof TypeError) {
              continue;
            } else if (e instanceof ReferenceError) {
              continue;
            }
          }
        }
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(parent2);
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            var descriptor = Object.getOwnPropertyDescriptor(parent2, symbol);
            if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
              continue;
            }
            child[symbol] = _clone(parent2[symbol], depth2 - 1);
            Object.defineProperty(child, symbol, descriptor);
          }
        }
        if (includeNonEnumerable) {
          var allPropertyNames = Object.getOwnPropertyNames(parent2);
          for (var i = 0; i < allPropertyNames.length; i++) {
            var propertyName = allPropertyNames[i];
            var descriptor = Object.getOwnPropertyDescriptor(parent2, propertyName);
            if (descriptor && descriptor.enumerable) {
              continue;
            }
            child[propertyName] = _clone(parent2[propertyName], depth2 - 1);
            Object.defineProperty(child, propertyName, descriptor);
          }
        }
        return child;
      }
      return _clone(parent, depth);
    }
    clone2.clonePrototype = function clonePrototype(parent) {
      if (parent === null)
        return null;
      var c = function() {
      };
      c.prototype = parent;
      return new c();
    };
    function __objToStr(o) {
      return Object.prototype.toString.call(o);
    }
    clone2.__objToStr = __objToStr;
    function __isDate(o) {
      return typeof o === "object" && __objToStr(o) === "[object Date]";
    }
    clone2.__isDate = __isDate;
    function __isArray(o) {
      return typeof o === "object" && __objToStr(o) === "[object Array]";
    }
    clone2.__isArray = __isArray;
    function __isRegExp(o) {
      return typeof o === "object" && __objToStr(o) === "[object RegExp]";
    }
    clone2.__isRegExp = __isRegExp;
    function __getRegExpFlags(re) {
      var flags = "";
      if (re.global)
        flags += "g";
      if (re.ignoreCase)
        flags += "i";
      if (re.multiline)
        flags += "m";
      return flags;
    }
    clone2.__getRegExpFlags = __getRegExpFlags;
    return clone2;
  }();
  class Request {
    constructor(arg = {}) {
      if (!isPlainObject(arg)) {
        arg = {};
        formatAppLog("warn", "at uni_modules/uview-plus/libs/luch-request/core/Request.js:39", "\u8BBE\u7F6E\u5168\u5C40\u53C2\u6570\u5FC5\u987B\u63A5\u6536\u4E00\u4E2AObject");
      }
      this.config = clone(__spreadValues(__spreadValues({}, defaults), arg));
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    setConfig(f) {
      this.config = f(this.config);
    }
    middleware(config2) {
      config2 = mergeConfig(this.config, config2);
      const chain = [dispatchRequest, void 0];
      let promise2 = Promise.resolve(config2);
      this.interceptors.request.forEach((interceptor) => {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      this.interceptors.response.forEach((interceptor) => {
        chain.push(interceptor.fulfilled, interceptor.rejected);
      });
      while (chain.length) {
        promise2 = promise2.then(chain.shift(), chain.shift());
      }
      return promise2;
    }
    request(config2 = {}) {
      return this.middleware(config2);
    }
    get(url2, options = {}) {
      return this.middleware(__spreadValues({
        url: url2,
        method: "GET"
      }, options));
    }
    post(url2, data, options = {}) {
      return this.middleware(__spreadValues({
        url: url2,
        data,
        method: "POST"
      }, options));
    }
    put(url2, data, options = {}) {
      return this.middleware(__spreadValues({
        url: url2,
        data,
        method: "PUT"
      }, options));
    }
    delete(url2, data, options = {}) {
      return this.middleware(__spreadValues({
        url: url2,
        data,
        method: "DELETE"
      }, options));
    }
    options(url2, data, options = {}) {
      return this.middleware(__spreadValues({
        url: url2,
        data,
        method: "OPTIONS"
      }, options));
    }
    upload(url2, config2 = {}) {
      config2.url = url2;
      config2.method = "UPLOAD";
      return this.middleware(config2);
    }
    download(url2, config2 = {}) {
      config2.url = url2;
      config2.method = "DOWNLOAD";
      return this.middleware(config2);
    }
  }
  class Router {
    constructor() {
      this.config = {
        type: "navigateTo",
        url: "",
        delta: 1,
        params: {},
        animationType: "pop-in",
        animationDuration: 300,
        intercept: false
      };
      this.route = this.route.bind(this);
    }
    addRootPath(url2) {
      return url2[0] === "/" ? url2 : `/${url2}`;
    }
    mixinParam(url2, params) {
      url2 = url2 && this.addRootPath(url2);
      let query = "";
      if (/.*\/.*\?.*=.*/.test(url2)) {
        query = uni.$u.queryParams(params, false);
        return url2 += `&${query}`;
      }
      query = uni.$u.queryParams(params);
      return url2 += query;
    }
    async route(options = {}, params = {}) {
      let mergeConfig2 = {};
      if (typeof options === "string") {
        mergeConfig2.url = this.mixinParam(options, params);
        mergeConfig2.type = "navigateTo";
      } else {
        mergeConfig2 = uni.$u.deepMerge(options, this.config);
        mergeConfig2.url = this.mixinParam(options.url, options.params);
      }
      if (mergeConfig2.url === uni.$u.page())
        return;
      if (params.intercept) {
        this.config.intercept = params.intercept;
      }
      mergeConfig2.params = params;
      mergeConfig2 = uni.$u.deepMerge(this.config, mergeConfig2);
      if (typeof uni.$u.routeIntercept === "function") {
        const isNext = await new Promise((resolve, reject) => {
          uni.$u.routeIntercept(mergeConfig2, resolve);
        });
        isNext && this.openPage(mergeConfig2);
      } else {
        this.openPage(mergeConfig2);
      }
    }
    openPage(config2) {
      const {
        url: url2,
        type,
        delta,
        animationType,
        animationDuration
      } = config2;
      if (config2.type == "navigateTo" || config2.type == "to") {
        uni.navigateTo({
          url: url2,
          animationType,
          animationDuration
        });
      }
      if (config2.type == "redirectTo" || config2.type == "redirect") {
        uni.redirectTo({
          url: url2
        });
      }
      if (config2.type == "switchTab" || config2.type == "tab") {
        uni.switchTab({
          url: url2
        });
      }
      if (config2.type == "reLaunch" || config2.type == "launch") {
        uni.reLaunch({
          url: url2
        });
      }
      if (config2.type == "navigateBack" || config2.type == "back") {
        uni.navigateBack({
          delta
        });
      }
    }
  }
  var route = new Router().route;
  function colorGradient(startColor = "rgb(0, 0, 0)", endColor = "rgb(255, 255, 255)", step = 10) {
    const startRGB = hexToRgb(startColor, false);
    const startR = startRGB[0];
    const startG = startRGB[1];
    const startB = startRGB[2];
    const endRGB = hexToRgb(endColor, false);
    const endR = endRGB[0];
    const endG = endRGB[1];
    const endB = endRGB[2];
    const sR = (endR - startR) / step;
    const sG = (endG - startG) / step;
    const sB = (endB - startB) / step;
    const colorArr = [];
    for (let i = 0; i < step; i++) {
      let hex = rgbToHex(`rgb(${Math.round(sR * i + startR)},${Math.round(sG * i + startG)},${Math.round(sB * i + startB)})`);
      if (i === 0)
        hex = rgbToHex(startColor);
      if (i === step - 1)
        hex = rgbToHex(endColor);
      colorArr.push(hex);
    }
    return colorArr;
  }
  function hexToRgb(sColor, str = true) {
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    sColor = String(sColor).toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      const sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`));
      }
      if (!str) {
        return sColorChange;
      }
      return `rgb(${sColorChange[0]},${sColorChange[1]},${sColorChange[2]})`;
    }
    if (/^(rgb|RGB)/.test(sColor)) {
      const arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      return arr.map((val) => Number(val));
    }
    return sColor;
  }
  function rgbToHex(rgb) {
    const _this = rgb;
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (/^(rgb|RGB)/.test(_this)) {
      const aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      let strHex = "#";
      for (let i = 0; i < aColor.length; i++) {
        let hex = Number(aColor[i]).toString(16);
        hex = String(hex).length == 1 ? `${0}${hex}` : hex;
        if (hex === "0") {
          hex += hex;
        }
        strHex += hex;
      }
      if (strHex.length !== 7) {
        strHex = _this;
      }
      return strHex;
    }
    if (reg.test(_this)) {
      const aNum = _this.replace(/#/, "").split("");
      if (aNum.length === 6) {
        return _this;
      }
      if (aNum.length === 3) {
        let numHex = "#";
        for (let i = 0; i < aNum.length; i += 1) {
          numHex += aNum[i] + aNum[i];
        }
        return numHex;
      }
    } else {
      return _this;
    }
  }
  function colorToRgba(color2, alpha) {
    color2 = rgbToHex(color2);
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    let sColor = String(color2).toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      const sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`));
      }
      return `rgba(${sColorChange.join(",")},${alpha})`;
    }
    return sColor;
  }
  var colorGradient$1 = {
    colorGradient,
    hexToRgb,
    rgbToHex,
    colorToRgba
  };
  function email(value2) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value2);
  }
  function mobile(value2) {
    return /^1[23456789]\d{9}$/.test(value2);
  }
  function url(value2) {
    return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(value2);
  }
  function date(value2) {
    if (!value2)
      return false;
    if (number(value2))
      value2 = +value2;
    return !/Invalid|NaN/.test(new Date(value2).toString());
  }
  function dateISO(value2) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value2);
  }
  function number(value2) {
    return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value2);
  }
  function string(value2) {
    return typeof value2 === "string";
  }
  function digits(value2) {
    return /^\d+$/.test(value2);
  }
  function idCard(value2) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value2);
  }
  function carNo(value2) {
    const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    if (value2.length === 7) {
      return creg.test(value2);
    }
    if (value2.length === 8) {
      return xreg.test(value2);
    }
    return false;
  }
  function amount(value2) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value2);
  }
  function chinese(value2) {
    const reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value2);
  }
  function letter(value2) {
    return /^[a-zA-Z]*$/.test(value2);
  }
  function enOrNum(value2) {
    const reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value2);
  }
  function contains(value2, param) {
    return value2.indexOf(param) >= 0;
  }
  function range$1(value2, param) {
    return value2 >= param[0] && value2 <= param[1];
  }
  function rangeLength(value2, param) {
    return value2.length >= param[0] && value2.length <= param[1];
  }
  function landline(value2) {
    const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    return reg.test(value2);
  }
  function empty$1(value2) {
    switch (typeof value2) {
      case "undefined":
        return true;
      case "string":
        if (value2.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
          return true;
        break;
      case "boolean":
        if (!value2)
          return true;
        break;
      case "number":
        if (value2 === 0 || isNaN(value2))
          return true;
        break;
      case "object":
        if (value2 === null || value2.length === 0)
          return true;
        for (const i in value2) {
          return false;
        }
        return true;
    }
    return false;
  }
  function jsonString(value2) {
    if (typeof value2 === "string") {
      try {
        const obj = JSON.parse(value2);
        if (typeof obj === "object" && obj) {
          return true;
        }
        return false;
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  function array(value2) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value2);
    }
    return Object.prototype.toString.call(value2) === "[object Array]";
  }
  function object(value2) {
    return Object.prototype.toString.call(value2) === "[object Object]";
  }
  function code$1(value2, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value2);
  }
  function func(value2) {
    return typeof value2 === "function";
  }
  function promise(value2) {
    return object(value2) && func(value2.then) && func(value2.catch);
  }
  function image$1(value2) {
    const newValue = value2.split("?")[0];
    const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
    return IMAGE_REGEXP.test(newValue);
  }
  function video(value2) {
    const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
    return VIDEO_REGEXP.test(value2);
  }
  function regExp(o) {
    return o && Object.prototype.toString.call(o) === "[object RegExp]";
  }
  var test = {
    email,
    mobile,
    url,
    date,
    dateISO,
    number,
    digits,
    idCard,
    carNo,
    amount,
    chinese,
    letter,
    enOrNum,
    contains,
    range: range$1,
    rangeLength,
    empty: empty$1,
    isEmpty: empty$1,
    jsonString,
    landline,
    object,
    array,
    code: code$1,
    func,
    promise,
    video,
    image: image$1,
    regExp,
    string
  };
  let timeout = null;
  function debounce(func2, wait = 500, immediate = false) {
    if (timeout !== null)
      clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow)
        typeof func2 === "function" && func2();
    } else {
      timeout = setTimeout(() => {
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  let flag;
  function throttle(func2, wait = 500, immediate = true) {
    if (immediate) {
      if (!flag) {
        flag = true;
        typeof func2 === "function" && func2();
        setTimeout(() => {
          flag = false;
        }, wait);
      }
    } else if (!flag) {
      flag = true;
      setTimeout(() => {
        flag = false;
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  function strip(num, precision = 15) {
    return +parseFloat(Number(num).toPrecision(precision));
  }
  function digitLength(num) {
    const eSplit = num.toString().split(/[eE]/);
    const len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
    return len > 0 ? len : 0;
  }
  function float2Fixed(num) {
    if (num.toString().indexOf("e") === -1) {
      return Number(num.toString().replace(".", ""));
    }
    const dLen = digitLength(num);
    return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
  }
  function checkBoundary(num) {
    {
      if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
        formatAppLog("warn", "at uni_modules/uview-plus/libs/function/digit.js:45", `${num} \u8D85\u51FA\u4E86\u7CBE\u5EA6\u9650\u5236\uFF0C\u7ED3\u679C\u53EF\u80FD\u4E0D\u6B63\u786E`);
      }
    }
  }
  function iteratorOperation(arr, operation) {
    const [num1, num2, ...others] = arr;
    let res = operation(num1, num2);
    others.forEach((num) => {
      res = operation(res, num);
    });
    return res;
  }
  function times(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, times);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    const baseNum = digitLength(num1) + digitLength(num2);
    const leftValue = num1Changed * num2Changed;
    checkBoundary(leftValue);
    return leftValue / Math.pow(10, baseNum);
  }
  function divide(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, divide);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    checkBoundary(num1Changed);
    checkBoundary(num2Changed);
    return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
  }
  function round(num, ratio) {
    const base = Math.pow(10, ratio);
    let result = divide(Math.round(Math.abs(times(num, base))), base);
    if (num < 0 && result !== 0) {
      result = times(result, -1);
    }
    return result;
  }
  function range(min = 0, max = 0, value2 = 0) {
    return Math.max(min, Math.min(max, Number(value2)));
  }
  function getPx(value2, unit = false) {
    if (test.number(value2)) {
      return unit ? `${value2}px` : Number(value2);
    }
    if (/(rpx|upx)$/.test(value2)) {
      return unit ? `${uni.upx2px(parseInt(value2))}px` : Number(uni.upx2px(parseInt(value2)));
    }
    return unit ? `${parseInt(value2)}px` : parseInt(value2);
  }
  function sleep(value2 = 30) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, value2);
    });
  }
  function os() {
    return uni.getSystemInfoSync().platform.toLowerCase();
  }
  function sys() {
    return uni.getSystemInfoSync();
  }
  function random(min, max) {
    if (min >= 0 && max > 0 && max >= min) {
      const gab = max - min + 1;
      return Math.floor(Math.random() * gab + min);
    }
    return 0;
  }
  function guid(len = 32, firstU = true, radix = null) {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    const uuid = [];
    radix = radix || chars.length;
    if (len) {
      for (let i = 0; i < len; i++)
        uuid[i] = chars[0 | Math.random() * radix];
    } else {
      let r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
      for (let i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[i == 19 ? r & 3 | 8 : r];
        }
      }
    }
    if (firstU) {
      uuid.shift();
      return `u${uuid.join("")}`;
    }
    return uuid.join("");
  }
  function $parent(name = void 0) {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options && parent.$options.name !== name) {
        parent = parent.$parent;
      } else {
        return parent;
      }
    }
    return false;
  }
  function addStyle(customStyle, target = "object") {
    if (test.empty(customStyle) || typeof customStyle === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
      return customStyle;
    }
    if (target === "object") {
      customStyle = trim(customStyle);
      const styleArray = customStyle.split(";");
      const style = {};
      for (let i = 0; i < styleArray.length; i++) {
        if (styleArray[i]) {
          const item = styleArray[i].split(":");
          style[trim(item[0])] = trim(item[1]);
        }
      }
      return style;
    }
    let string2 = "";
    for (const i in customStyle) {
      const key = i.replace(/([A-Z])/g, "-$1").toLowerCase();
      string2 += `${key}:${customStyle[i]};`;
    }
    return trim(string2);
  }
  function addUnit(value2 = "auto", unit = "") {
    if (!unit) {
      unit = uni.$u.config.unit || "px";
    }
    value2 = String(value2);
    return test.number(value2) ? `${value2}${unit}` : value2;
  }
  function deepClone(obj) {
    if ([null, void 0, NaN, false].includes(obj))
      return obj;
    if (typeof obj !== "object" && typeof obj !== "function") {
      return obj;
    }
    const o = test.array(obj) ? [] : {};
    for (const i in obj) {
      if (obj.hasOwnProperty(i)) {
        o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
      }
    }
    return o;
  }
  function deepMerge(target = {}, source = {}) {
    target = deepClone(target);
    if (typeof target !== "object" || typeof source !== "object")
      return false;
    for (const prop in source) {
      if (!source.hasOwnProperty(prop))
        continue;
      if (prop in target) {
        if (typeof target[prop] !== "object") {
          target[prop] = source[prop];
        } else if (typeof source[prop] !== "object") {
          target[prop] = source[prop];
        } else if (target[prop].concat && source[prop].concat) {
          target[prop] = target[prop].concat(source[prop]);
        } else {
          target[prop] = deepMerge(target[prop], source[prop]);
        }
      } else {
        target[prop] = source[prop];
      }
    }
    return target;
  }
  function error(err) {
    {
      formatAppLog("error", "at uni_modules/uview-plus/libs/function/index.js:238", `uView\u63D0\u793A\uFF1A${err}`);
    }
  }
  function randomArray(array2 = []) {
    return array2.sort(() => Math.random() - 0.5);
  }
  if (!String.prototype.padStart) {
    String.prototype.padStart = function(maxLength, fillString = " ") {
      if (Object.prototype.toString.call(fillString) !== "[object String]") {
        throw new TypeError("fillString must be String");
      }
      const str = this;
      if (str.length >= maxLength)
        return String(str);
      const fillLength = maxLength - str.length;
      let times2 = Math.ceil(fillLength / fillString.length);
      while (times2 >>= 1) {
        fillString += fillString;
        if (times2 === 1) {
          fillString += fillString;
        }
      }
      return fillString.slice(0, fillLength) + str;
    };
  }
  function timeFormat(dateTime = null, formatStr = "yyyy-mm-dd") {
    let date2;
    if (!dateTime) {
      date2 = new Date();
    } else if (/^\d{10}$/.test(dateTime.toString().trim())) {
      date2 = new Date(dateTime * 1e3);
    } else if (typeof dateTime === "string" && /^\d+$/.test(dateTime.trim())) {
      date2 = new Date(Number(dateTime));
    } else {
      date2 = new Date(typeof dateTime === "string" ? dateTime.replace(/-/g, "/") : dateTime);
    }
    const timeSource = {
      "y": date2.getFullYear().toString(),
      "m": (date2.getMonth() + 1).toString().padStart(2, "0"),
      "d": date2.getDate().toString().padStart(2, "0"),
      "h": date2.getHours().toString().padStart(2, "0"),
      "M": date2.getMinutes().toString().padStart(2, "0"),
      "s": date2.getSeconds().toString().padStart(2, "0")
    };
    for (const key in timeSource) {
      const [ret] = new RegExp(`${key}+`).exec(formatStr) || [];
      if (ret) {
        const beginIndex = key === "y" && ret.length === 2 ? 2 : 0;
        formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
      }
    }
    return formatStr;
  }
  function timeFrom(timestamp = null, format = "yyyy-mm-dd") {
    if (timestamp == null)
      timestamp = Number(new Date());
    timestamp = parseInt(timestamp);
    if (timestamp.toString().length == 10)
      timestamp *= 1e3;
    let timer = new Date().getTime() - timestamp;
    timer = parseInt(timer / 1e3);
    let tips = "";
    switch (true) {
      case timer < 300:
        tips = "\u521A\u521A";
        break;
      case (timer >= 300 && timer < 3600):
        tips = `${parseInt(timer / 60)}\u5206\u949F\u524D`;
        break;
      case (timer >= 3600 && timer < 86400):
        tips = `${parseInt(timer / 3600)}\u5C0F\u65F6\u524D`;
        break;
      case (timer >= 86400 && timer < 2592e3):
        tips = `${parseInt(timer / 86400)}\u5929\u524D`;
        break;
      default:
        if (format === false) {
          if (timer >= 2592e3 && timer < 365 * 86400) {
            tips = `${parseInt(timer / (86400 * 30))}\u4E2A\u6708\u524D`;
          } else {
            tips = `${parseInt(timer / (86400 * 365))}\u5E74\u524D`;
          }
        } else {
          tips = timeFormat(timestamp, format);
        }
    }
    return tips;
  }
  function trim(str, pos = "both") {
    str = String(str);
    if (pos == "both") {
      return str.replace(/^\s+|\s+$/g, "");
    }
    if (pos == "left") {
      return str.replace(/^\s*/, "");
    }
    if (pos == "right") {
      return str.replace(/(\s*$)/g, "");
    }
    if (pos == "all") {
      return str.replace(/\s+/g, "");
    }
    return str;
  }
  function queryParams(data = {}, isPrefix = true, arrayFormat = "brackets") {
    const prefix = isPrefix ? "?" : "";
    const _result = [];
    if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1)
      arrayFormat = "brackets";
    for (const key in data) {
      const value2 = data[key];
      if (["", void 0, null].indexOf(value2) >= 0) {
        continue;
      }
      if (value2.constructor === Array) {
        switch (arrayFormat) {
          case "indices":
            for (let i = 0; i < value2.length; i++) {
              _result.push(`${key}[${i}]=${value2[i]}`);
            }
            break;
          case "brackets":
            value2.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
            break;
          case "repeat":
            value2.forEach((_value) => {
              _result.push(`${key}=${_value}`);
            });
            break;
          case "comma":
            let commaStr = "";
            value2.forEach((_value) => {
              commaStr += (commaStr ? "," : "") + _value;
            });
            _result.push(`${key}=${commaStr}`);
            break;
          default:
            value2.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
        }
      } else {
        _result.push(`${key}=${value2}`);
      }
    }
    return _result.length ? prefix + _result.join("&") : "";
  }
  function toast$1(title, duration = 2e3) {
    uni.showToast({
      title: String(title),
      icon: "none",
      duration
    });
  }
  function type2icon(type = "success", fill = false) {
    if (["primary", "info", "error", "warning", "success"].indexOf(type) == -1)
      type = "success";
    let iconName = "";
    switch (type) {
      case "primary":
        iconName = "info-circle";
        break;
      case "info":
        iconName = "info-circle";
        break;
      case "error":
        iconName = "close-circle";
        break;
      case "warning":
        iconName = "error-circle";
        break;
      case "success":
        iconName = "checkmark-circle";
        break;
      default:
        iconName = "checkmark-circle";
    }
    if (fill)
      iconName += "-fill";
    return iconName;
  }
  function priceFormat(number2, decimals = 0, decimalPoint = ".", thousandsSeparator = ",") {
    number2 = `${number2}`.replace(/[^0-9+-Ee.]/g, "");
    const n = !isFinite(+number2) ? 0 : +number2;
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    const sep = typeof thousandsSeparator === "undefined" ? "," : thousandsSeparator;
    const dec = typeof decimalPoint === "undefined" ? "." : decimalPoint;
    let s = "";
    s = (prec ? round(n, prec) + "" : `${Math.round(n)}`).split(".");
    const re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
      s[0] = s[0].replace(re, `$1${sep}$2`);
    }
    if ((s[1] || "").length < prec) {
      s[1] = s[1] || "";
      s[1] += new Array(prec - s[1].length + 1).join("0");
    }
    return s.join(dec);
  }
  function getDuration(value2, unit = true) {
    const valueNum = parseInt(value2);
    if (unit) {
      if (/s$/.test(value2))
        return value2;
      return value2 > 30 ? `${value2}ms` : `${value2}s`;
    }
    if (/ms$/.test(value2))
      return valueNum;
    if (/s$/.test(value2))
      return valueNum > 30 ? valueNum : valueNum * 1e3;
    return valueNum;
  }
  function padZero(value2) {
    return `00${value2}`.slice(-2);
  }
  function formValidate(instance, event) {
    const formItem2 = uni.$u.$parent.call(instance, "u-form-item");
    const form2 = uni.$u.$parent.call(instance, "u-form");
    if (formItem2 && form2) {
      form2.validateField(formItem2.prop, () => {
      }, event);
    }
  }
  function getProperty(obj, key) {
    if (!obj) {
      return;
    }
    if (typeof key !== "string" || key === "") {
      return "";
    }
    if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      let firstObj = obj[keys[0]] || {};
      for (let i = 1; i < keys.length; i++) {
        if (firstObj) {
          firstObj = firstObj[keys[i]];
        }
      }
      return firstObj;
    }
    return obj[key];
  }
  function setProperty(obj, key, value2) {
    if (!obj) {
      return;
    }
    const inFn = function(_obj, keys, v) {
      if (keys.length === 1) {
        _obj[keys[0]] = v;
        return;
      }
      while (keys.length > 1) {
        const k = keys[0];
        if (!_obj[k] || typeof _obj[k] !== "object") {
          _obj[k] = {};
        }
        keys.shift();
        inFn(_obj[k], keys, v);
      }
    };
    if (typeof key !== "string" || key === "")
      ;
    else if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      inFn(obj, keys, value2);
    } else {
      obj[key] = value2;
    }
  }
  function page() {
    const pages2 = getCurrentPages();
    return `/${pages2[pages2.length - 1].route || ""}`;
  }
  function pages() {
    const pages2 = getCurrentPages();
    return pages2;
  }
  function setConfig({
    props: props2 = {},
    config: config2 = {},
    color: color2 = {},
    zIndex: zIndex2 = {}
  }) {
    const {
      deepMerge: deepMerge2
    } = uni.$u;
    uni.$u.config = deepMerge2(uni.$u.config, config2);
    uni.$u.props = deepMerge2(uni.$u.props, props2);
    uni.$u.color = deepMerge2(uni.$u.color, color2);
    uni.$u.zIndex = deepMerge2(uni.$u.zIndex, zIndex2);
  }
  var index = {
    range,
    getPx,
    sleep,
    os,
    sys,
    random,
    guid,
    $parent,
    addStyle,
    addUnit,
    deepClone,
    deepMerge,
    error,
    randomArray,
    timeFormat,
    timeFrom,
    trim,
    queryParams,
    toast: toast$1,
    type2icon,
    priceFormat,
    getDuration,
    padZero,
    formValidate,
    getProperty,
    setProperty,
    page,
    pages,
    setConfig
  };
  const version = "3.0.0";
  {
    formatAppLog("log", "at uni_modules/uview-plus/libs/config/config.js:6", `
 %c uview-plus V${version} %c https://uiadmin.net/uview-plus 

`, "color: #ffffff; background: #3c9cff; padding:5px 0;", "color: #3c9cff;background: #ffffff; padding:5px 0;");
  }
  var config = {
    v: version,
    version,
    type: [
      "primary",
      "success",
      "info",
      "error",
      "warning"
    ],
    color: {
      "u-primary": "#2979ff",
      "u-warning": "#ff9900",
      "u-success": "#19be6b",
      "u-error": "#fa3534",
      "u-info": "#909399",
      "u-main-color": "#303133",
      "u-content-color": "#606266",
      "u-tips-color": "#909399",
      "u-light-color": "#c0c4cc"
    },
    unit: "px"
  };
  var actionSheet = {
    actionSheet: {
      show: false,
      title: "",
      description: "",
      actions: () => [],
      index: "",
      cancelText: "",
      closeOnClickAction: true,
      safeAreaInsetBottom: true,
      openType: "",
      closeOnClickOverlay: true,
      round: 0
    }
  };
  var album = {
    album: {
      urls: () => [],
      keyName: "",
      singleSize: 180,
      multipleSize: 70,
      space: 6,
      singleMode: "scaleToFill",
      multipleMode: "aspectFill",
      maxCount: 9,
      previewFullImage: true,
      rowCount: 3,
      showMore: true
    }
  };
  var alert = {
    alert: {
      title: "",
      type: "warning",
      description: "",
      closable: false,
      showIcon: false,
      effect: "light",
      center: false,
      fontSize: 14
    }
  };
  var avatar = {
    avatar: {
      src: "",
      shape: "circle",
      size: 40,
      mode: "scaleToFill",
      text: "",
      bgColor: "#c0c4cc",
      color: "#ffffff",
      fontSize: 18,
      icon: "",
      mpAvatar: false,
      randomBgColor: false,
      defaultUrl: "",
      colorIndex: "",
      name: ""
    }
  };
  var avatarGroup = {
    avatarGroup: {
      urls: () => [],
      maxCount: 5,
      shape: "circle",
      mode: "scaleToFill",
      showMore: true,
      size: 40,
      keyName: "",
      gap: 0.5,
      extraValue: 0
    }
  };
  var backtop = {
    backtop: {
      mode: "circle",
      icon: "arrow-upward",
      text: "",
      duration: 100,
      scrollTop: 0,
      top: 400,
      bottom: 100,
      right: 20,
      zIndex: 9,
      iconStyle: () => ({
        color: "#909399",
        fontSize: "19px"
      })
    }
  };
  var badge = {
    badge: {
      isDot: false,
      value: "",
      show: true,
      max: 999,
      type: "error",
      showZero: false,
      bgColor: null,
      color: null,
      shape: "circle",
      numberType: "overflow",
      offset: () => [],
      inverted: false,
      absolute: false
    }
  };
  var button = {
    button: {
      hairline: false,
      type: "info",
      size: "normal",
      shape: "square",
      plain: false,
      disabled: false,
      loading: false,
      loadingText: "",
      loadingMode: "spinner",
      loadingSize: 15,
      openType: "",
      formType: "",
      appParameter: "",
      hoverStopPropagation: true,
      lang: "en",
      sessionFrom: "",
      sendMessageTitle: "",
      sendMessagePath: "",
      sendMessageImg: "",
      showMessageCard: false,
      dataName: "",
      throttleTime: 0,
      hoverStartTime: 0,
      hoverStayTime: 200,
      text: "",
      icon: "",
      iconColor: "",
      color: ""
    }
  };
  var calendar = {
    calendar: {
      title: "\u65E5\u671F\u9009\u62E9",
      showTitle: true,
      showSubtitle: true,
      mode: "single",
      startText: "\u5F00\u59CB",
      endText: "\u7ED3\u675F",
      customList: () => [],
      color: "#3c9cff",
      minDate: 0,
      maxDate: 0,
      defaultDate: null,
      maxCount: Number.MAX_SAFE_INTEGER,
      rowHeight: 56,
      formatter: null,
      showLunar: false,
      showMark: true,
      confirmText: "\u786E\u5B9A",
      confirmDisabledText: "\u786E\u5B9A",
      show: false,
      closeOnClickOverlay: false,
      readonly: false,
      showConfirm: true,
      maxRange: Number.MAX_SAFE_INTEGER,
      rangePrompt: "",
      showRangePrompt: true,
      allowSameDay: false,
      round: 0,
      monthNum: 3
    }
  };
  var carKeyboard = {
    carKeyboard: {
      random: false
    }
  };
  var cell = {
    cell: {
      customClass: "",
      title: "",
      label: "",
      value: "",
      icon: "",
      disabled: false,
      border: true,
      center: false,
      url: "",
      linkType: "navigateTo",
      clickable: false,
      isLink: false,
      required: false,
      arrowDirection: "",
      iconStyle: {},
      rightIconStyle: {},
      rightIcon: "arrow-right",
      titleStyle: {},
      size: "",
      stop: true,
      name: ""
    }
  };
  var cellGroup = {
    cellGroup: {
      title: "",
      border: true,
      customStyle: {}
    }
  };
  var checkbox = {
    checkbox: {
      name: "",
      shape: "",
      size: "",
      checkbox: false,
      disabled: "",
      activeColor: "",
      inactiveColor: "",
      iconSize: "",
      iconColor: "",
      label: "",
      labelSize: "",
      labelColor: "",
      labelDisabled: ""
    }
  };
  var checkboxGroup = {
    checkboxGroup: {
      name: "",
      value: () => [],
      shape: "square",
      disabled: false,
      activeColor: "#2979ff",
      inactiveColor: "#c8c9cc",
      size: 18,
      placement: "row",
      labelSize: 14,
      labelColor: "#303133",
      labelDisabled: false,
      iconColor: "#ffffff",
      iconSize: 12,
      iconPlacement: "left",
      borderBottom: false
    }
  };
  var circleProgress = {
    circleProgress: {
      percentage: 30
    }
  };
  var code = {
    code: {
      seconds: 60,
      startText: "\u83B7\u53D6\u9A8C\u8BC1\u7801",
      changeText: "X\u79D2\u91CD\u65B0\u83B7\u53D6",
      endText: "\u91CD\u65B0\u83B7\u53D6",
      keepRunning: false,
      uniqueKey: ""
    }
  };
  var codeInput = {
    codeInput: {
      adjustPosition: true,
      maxlength: 6,
      dot: false,
      mode: "box",
      hairline: false,
      space: 10,
      value: "",
      focus: false,
      bold: false,
      color: "#606266",
      fontSize: 18,
      size: 35,
      disabledKeyboard: false,
      borderColor: "#c9cacc",
      disabledDot: true
    }
  };
  var col = {
    col: {
      span: 12,
      offset: 0,
      justify: "start",
      align: "stretch",
      textAlign: "left"
    }
  };
  var collapse = {
    collapse: {
      value: null,
      accordion: false,
      border: true
    }
  };
  var collapseItem = {
    collapseItem: {
      title: "",
      value: "",
      label: "",
      disabled: false,
      isLink: true,
      clickable: true,
      border: true,
      align: "left",
      name: "",
      icon: "",
      duration: 300
    }
  };
  var columnNotice = {
    columnNotice: {
      text: "",
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      fontSize: 14,
      speed: 80,
      step: false,
      duration: 1500,
      disableTouch: true
    }
  };
  var countDown = {
    countDown: {
      time: 0,
      format: "HH:mm:ss",
      autoStart: true,
      millisecond: false
    }
  };
  var countTo = {
    countTo: {
      startVal: 0,
      endVal: 0,
      duration: 2e3,
      autoplay: true,
      decimals: 0,
      useEasing: true,
      decimal: ".",
      color: "#606266",
      fontSize: 22,
      bold: false,
      separator: ""
    }
  };
  var datetimePicker = {
    datetimePicker: {
      show: false,
      showToolbar: true,
      value: "",
      title: "",
      mode: "datetime",
      maxDate: new Date(new Date().getFullYear() + 10, 0, 1).getTime(),
      minDate: new Date(new Date().getFullYear() - 10, 0, 1).getTime(),
      minHour: 0,
      maxHour: 23,
      minMinute: 0,
      maxMinute: 59,
      filter: null,
      formatter: null,
      loading: false,
      itemHeight: 44,
      cancelText: "\u53D6\u6D88",
      confirmText: "\u786E\u8BA4",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      visibleItemCount: 5,
      closeOnClickOverlay: false,
      defaultIndex: () => []
    }
  };
  var divider = {
    divider: {
      dashed: false,
      hairline: true,
      dot: false,
      textPosition: "center",
      text: "",
      textSize: 14,
      textColor: "#909399",
      lineColor: "#dcdfe6"
    }
  };
  var empty = {
    empty: {
      icon: "",
      text: "",
      textColor: "#c0c4cc",
      textSize: 14,
      iconColor: "#c0c4cc",
      iconSize: 90,
      mode: "data",
      width: 160,
      height: 160,
      show: true,
      marginTop: 0
    }
  };
  var form = {
    form: {
      model: () => ({}),
      rules: () => ({}),
      errorType: "message",
      borderBottom: true,
      labelPosition: "left",
      labelWidth: 45,
      labelAlign: "left",
      labelStyle: () => ({})
    }
  };
  var formItem = {
    formItem: {
      label: "",
      prop: "",
      borderBottom: "",
      labelWidth: "",
      rightIcon: "",
      leftIcon: "",
      required: false,
      leftIconStyle: ""
    }
  };
  var gap = {
    gap: {
      bgColor: "transparent",
      height: 20,
      marginTop: 0,
      marginBottom: 0,
      customStyle: {}
    }
  };
  var grid = {
    grid: {
      col: 3,
      border: false,
      align: "left"
    }
  };
  var gridItem = {
    gridItem: {
      name: null,
      bgColor: "transparent"
    }
  };
  const {
    color: color$3
  } = config;
  var icon = {
    icon: {
      name: "",
      color: color$3["u-content-color"],
      size: "16px",
      bold: false,
      index: "",
      hoverClass: "",
      customPrefix: "uicon",
      label: "",
      labelPos: "right",
      labelSize: "15px",
      labelColor: color$3["u-content-color"],
      space: "3px",
      imgMode: "",
      width: "",
      height: "",
      top: 0,
      stop: false
    }
  };
  var image = {
    image: {
      src: "",
      mode: "aspectFill",
      width: "300",
      height: "225",
      shape: "square",
      radius: 0,
      lazyLoad: true,
      showMenuByLongpress: true,
      loadingIcon: "photo",
      errorIcon: "error-circle",
      showLoading: true,
      showError: true,
      fade: true,
      webp: false,
      duration: 500,
      bgColor: "#f3f4f6"
    }
  };
  var indexAnchor = {
    indexAnchor: {
      text: "",
      color: "#606266",
      size: 14,
      bgColor: "#dedede",
      height: 32
    }
  };
  var indexList = {
    indexList: {
      inactiveColor: "#606266",
      activeColor: "#5677fc",
      indexList: () => [],
      sticky: true,
      customNavHeight: 0
    }
  };
  var input = {
    input: {
      value: "",
      type: "text",
      fixed: false,
      disabled: false,
      disabledColor: "#f5f7fa",
      clearable: false,
      password: false,
      maxlength: -1,
      placeholder: null,
      placeholderClass: "input-placeholder",
      placeholderStyle: "color: #c0c4cc",
      showWordLimit: false,
      confirmType: "done",
      confirmHold: false,
      holdKeyboard: false,
      focus: false,
      autoBlur: false,
      disableDefaultPadding: false,
      cursor: -1,
      cursorSpacing: 30,
      selectionStart: -1,
      selectionEnd: -1,
      adjustPosition: true,
      inputAlign: "left",
      fontSize: "15px",
      color: "#303133",
      prefixIcon: "",
      prefixIconStyle: "",
      suffixIcon: "",
      suffixIconStyle: "",
      border: "surround",
      readonly: false,
      shape: "square",
      formatter: null
    }
  };
  var keyboard = {
    keyboard: {
      mode: "number",
      dotDisabled: false,
      tooltip: true,
      showTips: true,
      tips: "",
      showCancel: true,
      showConfirm: true,
      random: false,
      safeAreaInsetBottom: true,
      closeOnClickOverlay: true,
      show: false,
      overlay: true,
      zIndex: 10075,
      cancelText: "\u53D6\u6D88",
      confirmText: "\u786E\u5B9A",
      autoChange: false
    }
  };
  var line = {
    line: {
      color: "#d6d7d9",
      length: "100%",
      direction: "row",
      hairline: true,
      margin: 0,
      dashed: false
    }
  };
  var lineProgress = {
    lineProgress: {
      activeColor: "#19be6b",
      inactiveColor: "#ececec",
      percentage: 0,
      showText: true,
      height: 12
    }
  };
  const {
    color: color$2
  } = config;
  var link = {
    link: {
      color: color$2["u-primary"],
      fontSize: 15,
      underLine: false,
      href: "",
      mpTips: "\u94FE\u63A5\u5DF2\u590D\u5236\uFF0C\u8BF7\u5728\u6D4F\u89C8\u5668\u6253\u5F00",
      lineColor: "",
      text: ""
    }
  };
  var list = {
    list: {
      showScrollbar: false,
      lowerThreshold: 50,
      upperThreshold: 0,
      scrollTop: 0,
      offsetAccuracy: 10,
      enableFlex: false,
      pagingEnabled: false,
      scrollable: true,
      scrollIntoView: "",
      scrollWithAnimation: false,
      enableBackToTop: false,
      height: 0,
      width: 0,
      preLoadScreen: 1
    }
  };
  var listItem = {
    listItem: {
      anchor: ""
    }
  };
  const {
    color: color$1
  } = config;
  var loadingIcon = {
    loadingIcon: {
      show: true,
      color: color$1["u-tips-color"],
      textColor: color$1["u-tips-color"],
      vertical: false,
      mode: "spinner",
      size: 24,
      textSize: 15,
      text: "",
      timingFunction: "ease-in-out",
      duration: 1200,
      inactiveColor: ""
    }
  };
  var loadingPage = {
    loadingPage: {
      loadingText: "\u6B63\u5728\u52A0\u8F7D",
      image: "",
      loadingMode: "circle",
      loading: false,
      bgColor: "#ffffff",
      color: "#C8C8C8",
      fontSize: 19,
      iconSize: 28,
      loadingColor: "#C8C8C8"
    }
  };
  var loadmore = {
    loadmore: {
      status: "loadmore",
      bgColor: "transparent",
      icon: true,
      fontSize: 14,
      iconSize: 17,
      color: "#606266",
      loadingIcon: "spinner",
      loadmoreText: "\u52A0\u8F7D\u66F4\u591A",
      loadingText: "\u6B63\u5728\u52A0\u8F7D...",
      nomoreText: "\u6CA1\u6709\u66F4\u591A\u4E86",
      isDot: false,
      iconColor: "#b7b7b7",
      marginTop: 10,
      marginBottom: 10,
      height: "auto",
      line: false,
      lineColor: "#E6E8EB",
      dashed: false
    }
  };
  var modal = {
    modal: {
      show: false,
      title: "",
      content: "",
      confirmText: "\u786E\u8BA4",
      cancelText: "\u53D6\u6D88",
      showConfirmButton: true,
      showCancelButton: false,
      confirmColor: "#2979ff",
      cancelColor: "#606266",
      buttonReverse: false,
      zoom: true,
      asyncClose: false,
      closeOnClickOverlay: false,
      negativeTop: 0,
      width: "650rpx",
      confirmButtonShape: ""
    }
  };
  const color = {
    primary: "#3c9cff",
    info: "#909399",
    default: "#909399",
    warning: "#f9ae3d",
    error: "#f56c6c",
    success: "#5ac725",
    mainColor: "#303133",
    contentColor: "#606266",
    tipsColor: "#909399",
    lightColor: "#c0c4cc",
    borderColor: "#e4e7ed"
  };
  var navbar = {
    navbar: {
      safeAreaInsetTop: true,
      placeholder: false,
      fixed: true,
      border: false,
      leftIcon: "arrow-left",
      leftText: "",
      rightText: "",
      rightIcon: "",
      title: "",
      bgColor: "#ffffff",
      titleWidth: "400rpx",
      height: "44px",
      leftIconSize: 20,
      leftIconColor: color.mainColor,
      autoBack: false,
      titleStyle: ""
    }
  };
  var noNetwork = {
    noNetwork: {
      tips: "\u54CE\u5440\uFF0C\u7F51\u7EDC\u4FE1\u53F7\u4E22\u5931",
      zIndex: "",
      image: "data:image/png;base64,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"
    }
  };
  var noticeBar = {
    noticeBar: {
      text: () => [],
      direction: "row",
      step: false,
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      speed: 80,
      fontSize: 14,
      duration: 2e3,
      disableTouch: true,
      url: "",
      linkType: "navigateTo"
    }
  };
  var notify = {
    notify: {
      top: 0,
      type: "primary",
      color: "#ffffff",
      bgColor: "",
      message: "",
      duration: 3e3,
      fontSize: 15,
      safeAreaInsetTop: false
    }
  };
  var numberBox = {
    numberBox: {
      name: "",
      value: 0,
      min: 1,
      max: Number.MAX_SAFE_INTEGER,
      step: 1,
      integer: false,
      disabled: false,
      disabledInput: false,
      asyncChange: false,
      inputWidth: 35,
      showMinus: true,
      showPlus: true,
      decimalLength: null,
      longPress: true,
      color: "#323233",
      buttonSize: 30,
      bgColor: "#EBECEE",
      cursorSpacing: 100,
      disableMinus: false,
      disablePlus: false,
      iconStyle: ""
    }
  };
  var numberKeyboard = {
    numberKeyboard: {
      mode: "number",
      dotDisabled: false,
      random: false
    }
  };
  var overlay = {
    overlay: {
      show: false,
      zIndex: 10070,
      duration: 300,
      opacity: 0.5
    }
  };
  var parse = {
    parse: {
      copyLink: true,
      errorImg: "",
      lazyLoad: false,
      loadingImg: "",
      pauseVideo: true,
      previewImg: true,
      setTitle: true,
      showImgMenu: true
    }
  };
  var picker = {
    picker: {
      show: false,
      showToolbar: true,
      title: "",
      columns: () => [],
      loading: false,
      itemHeight: 44,
      cancelText: "\u53D6\u6D88",
      confirmText: "\u786E\u5B9A",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      visibleItemCount: 5,
      keyName: "text",
      closeOnClickOverlay: false,
      defaultIndex: () => [],
      immediateChange: false
    }
  };
  var popup = {
    popup: {
      show: false,
      overlay: true,
      mode: "bottom",
      duration: 300,
      closeable: false,
      overlayStyle: () => {
      },
      closeOnClickOverlay: true,
      zIndex: 10075,
      safeAreaInsetBottom: true,
      safeAreaInsetTop: false,
      closeIconPos: "top-right",
      round: 0,
      zoom: true,
      bgColor: "",
      overlayOpacity: 0.5
    }
  };
  var radio = {
    radio: {
      name: "",
      shape: "",
      disabled: "",
      labelDisabled: "",
      activeColor: "",
      inactiveColor: "",
      iconSize: "",
      labelSize: "",
      label: "",
      labelColor: "",
      size: "",
      iconColor: "",
      placement: ""
    }
  };
  var radioGroup = {
    radioGroup: {
      value: "",
      disabled: false,
      shape: "circle",
      activeColor: "#2979ff",
      inactiveColor: "#c8c9cc",
      name: "",
      size: 18,
      placement: "row",
      label: "",
      labelColor: "#303133",
      labelSize: 14,
      labelDisabled: false,
      iconColor: "#ffffff",
      iconSize: 12,
      borderBottom: false,
      iconPlacement: "left"
    }
  };
  var rate = {
    rate: {
      value: 1,
      count: 5,
      disabled: false,
      size: 18,
      inactiveColor: "#b2b2b2",
      activeColor: "#FA3534",
      gutter: 4,
      minCount: 1,
      allowHalf: false,
      activeIcon: "star-fill",
      inactiveIcon: "star",
      touchable: true
    }
  };
  var readMore = {
    readMore: {
      showHeight: 400,
      toggle: false,
      closeText: "\u5C55\u5F00\u9605\u8BFB\u5168\u6587",
      openText: "\u6536\u8D77",
      color: "#2979ff",
      fontSize: 14,
      textIndent: "2em",
      name: ""
    }
  };
  var row = {
    row: {
      gutter: 0,
      justify: "start",
      align: "center"
    }
  };
  var rowNotice = {
    rowNotice: {
      text: "",
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      fontSize: 14,
      speed: 80
    }
  };
  var scrollList = {
    scrollList: {
      indicatorWidth: 50,
      indicatorBarWidth: 20,
      indicator: true,
      indicatorColor: "#f2f2f2",
      indicatorActiveColor: "#3c9cff",
      indicatorStyle: ""
    }
  };
  var search = {
    search: {
      shape: "round",
      bgColor: "#f2f2f2",
      placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u5B57",
      clearabled: true,
      focus: false,
      showAction: true,
      actionStyle: () => ({}),
      actionText: "\u641C\u7D22",
      inputAlign: "left",
      inputStyle: () => ({}),
      disabled: false,
      borderColor: "transparent",
      searchIconColor: "#909399",
      searchIconSize: 22,
      color: "#606266",
      placeholderColor: "#909399",
      searchIcon: "search",
      margin: "0",
      animation: false,
      value: "",
      maxlength: "-1",
      height: 32,
      label: null
    }
  };
  var section = {
    section: {
      title: "",
      subTitle: "\u66F4\u591A",
      right: true,
      fontSize: 15,
      bold: true,
      color: "#303133",
      subColor: "#909399",
      showLine: true,
      lineColor: "",
      arrow: true
    }
  };
  var skeleton = {
    skeleton: {
      loading: true,
      animate: true,
      rows: 0,
      rowsWidth: "100%",
      rowsHeight: 18,
      title: true,
      titleWidth: "50%",
      titleHeight: 18,
      avatar: false,
      avatarSize: 32,
      avatarShape: "circle"
    }
  };
  var slider = {
    slider: {
      value: 0,
      blockSize: 18,
      min: 0,
      max: 100,
      step: 1,
      activeColor: "#2979ff",
      inactiveColor: "#c0c4cc",
      blockColor: "#ffffff",
      showValue: false,
      disabled: false,
      blockStyle: () => {
      }
    }
  };
  var statusBar = {
    statusBar: {
      bgColor: "transparent"
    }
  };
  var steps = {
    steps: {
      direction: "row",
      current: 0,
      activeColor: "#3c9cff",
      inactiveColor: "#969799",
      activeIcon: "",
      inactiveIcon: "",
      dot: false
    }
  };
  var stepsItem = {
    stepsItem: {
      title: "",
      desc: "",
      iconSize: 17,
      error: false
    }
  };
  var sticky = {
    sticky: {
      offsetTop: 0,
      customNavHeight: 0,
      disabled: false,
      bgColor: "transparent",
      zIndex: "",
      index: ""
    }
  };
  var subsection = {
    subsection: {
      list: [],
      current: 0,
      activeColor: "#3c9cff",
      inactiveColor: "#303133",
      mode: "button",
      fontSize: 12,
      bold: true,
      bgColor: "#eeeeef",
      keyName: "name"
    }
  };
  var swipeAction = {
    swipeAction: {
      autoClose: true
    }
  };
  var swipeActionItem = {
    swipeActionItem: {
      show: false,
      name: "",
      disabled: false,
      threshold: 20,
      autoClose: true,
      options: [],
      duration: 300
    }
  };
  var swiper = {
    swiper: {
      list: () => [],
      indicator: false,
      indicatorActiveColor: "#FFFFFF",
      indicatorInactiveColor: "rgba(255, 255, 255, 0.35)",
      indicatorStyle: "",
      indicatorMode: "line",
      autoplay: true,
      current: 0,
      currentItemId: "",
      interval: 3e3,
      duration: 300,
      circular: false,
      previousMargin: 0,
      nextMargin: 0,
      acceleration: false,
      displayMultipleItems: 1,
      easingFunction: "default",
      keyName: "url",
      imgMode: "aspectFill",
      height: 130,
      bgColor: "#f3f4f6",
      radius: 4,
      loading: false,
      showTitle: false
    }
  };
  var swipterIndicator = {
    swiperIndicator: {
      length: 0,
      current: 0,
      indicatorActiveColor: "",
      indicatorInactiveColor: "",
      indicatorMode: "line"
    }
  };
  var _switch = {
    switch: {
      loading: false,
      disabled: false,
      size: 25,
      activeColor: "#2979ff",
      inactiveColor: "#ffffff",
      value: false,
      activeValue: true,
      inactiveValue: false,
      asyncChange: false,
      space: 0
    }
  };
  var tabbar = {
    tabbar: {
      value: null,
      safeAreaInsetBottom: true,
      border: true,
      zIndex: 1,
      activeColor: "#1989fa",
      inactiveColor: "#7d7e80",
      fixed: true,
      placeholder: true
    }
  };
  var tabbarItem = {
    tabbarItem: {
      name: null,
      icon: "",
      badge: null,
      dot: false,
      text: "",
      badgeStyle: "top: 6px;right:2px;"
    }
  };
  var tabs = {
    tabs: {
      duration: 300,
      list: () => [],
      lineColor: "#3c9cff",
      activeStyle: () => ({
        color: "#303133"
      }),
      inactiveStyle: () => ({
        color: "#606266"
      }),
      lineWidth: 20,
      lineHeight: 3,
      lineBgSize: "cover",
      itemStyle: () => ({
        height: "44px"
      }),
      scrollable: true,
      current: 0,
      keyName: "name"
    }
  };
  var tag = {
    tag: {
      type: "primary",
      disabled: false,
      size: "medium",
      shape: "square",
      text: "",
      bgColor: "",
      color: "",
      borderColor: "",
      closeColor: "#C6C7CB",
      name: "",
      plainFill: false,
      plain: false,
      closable: false,
      show: true,
      icon: ""
    }
  };
  var text = {
    text: {
      type: "",
      show: true,
      text: "",
      prefixIcon: "",
      suffixIcon: "",
      mode: "",
      href: "",
      format: "",
      call: false,
      openType: "",
      bold: false,
      block: false,
      lines: "",
      color: "#303133",
      size: 15,
      iconStyle: () => ({
        fontSize: "15px"
      }),
      decoration: "none",
      margin: 0,
      lineHeight: "",
      align: "left",
      wordWrap: "normal"
    }
  };
  var textarea = {
    textarea: {
      value: "",
      placeholder: "",
      placeholderClass: "textarea-placeholder",
      placeholderStyle: "color: #c0c4cc",
      height: 70,
      confirmType: "",
      disabled: false,
      count: false,
      focus: false,
      autoHeight: false,
      fixed: false,
      cursorSpacing: 0,
      cursor: "",
      showConfirmBar: true,
      selectionStart: -1,
      selectionEnd: -1,
      adjustPosition: true,
      disableDefaultPadding: false,
      holdKeyboard: false,
      maxlength: 140,
      border: "surround",
      formatter: null
    }
  };
  var toast = {
    toast: {
      zIndex: 10090,
      loading: false,
      text: "",
      icon: "",
      type: "",
      loadingMode: "",
      show: "",
      overlay: false,
      position: "center",
      params: () => {
      },
      duration: 2e3,
      isTab: false,
      url: "",
      callback: null,
      back: false
    }
  };
  var toolbar = {
    toolbar: {
      show: true,
      cancelText: "\u53D6\u6D88",
      confirmText: "\u786E\u8BA4",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      title: ""
    }
  };
  var tooltip = {
    tooltip: {
      text: "",
      copyText: "",
      size: 14,
      color: "#606266",
      bgColor: "transparent",
      direction: "top",
      zIndex: 10071,
      showCopy: true,
      buttons: () => [],
      overlay: true,
      showToast: true
    }
  };
  var transition = {
    transition: {
      show: false,
      mode: "fade",
      duration: "300",
      timingFunction: "ease-out"
    }
  };
  var upload = {
    upload: {
      accept: "image",
      capture: () => ["album", "camera"],
      compressed: true,
      camera: "back",
      maxDuration: 60,
      uploadIcon: "camera-fill",
      uploadIconColor: "#D3D4D6",
      useBeforeRead: false,
      previewFullImage: true,
      maxCount: 52,
      disabled: false,
      imageMode: "aspectFill",
      name: "",
      sizeType: () => ["original", "compressed"],
      multiple: false,
      deletable: true,
      maxSize: Number.MAX_VALUE,
      fileList: () => [],
      uploadText: "",
      width: 80,
      height: 80,
      previewImage: true
    }
  };
  var props = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, actionSheet), album), alert), avatar), avatarGroup), backtop), badge), button), calendar), carKeyboard), cell), cellGroup), checkbox), checkboxGroup), circleProgress), code), codeInput), col), collapse), collapseItem), columnNotice), countDown), countTo), datetimePicker), divider), empty), form), formItem), gap), grid), gridItem), icon), image), indexAnchor), indexList), input), keyboard), line), lineProgress), link), list), listItem), loadingIcon), loadingPage), loadmore), modal), navbar), noNetwork), noticeBar), notify), numberBox), numberKeyboard), overlay), parse), picker), popup), radio), radioGroup), rate), readMore), row), rowNotice), scrollList), search), section), skeleton), slider), statusBar), steps), stepsItem), sticky), subsection), swipeAction), swipeActionItem), swiper), swipterIndicator), _switch), tabbar), tabbarItem), tabs), tag), text), textarea), toast), toolbar), tooltip), transition), upload);
  var zIndex = {
    toast: 10090,
    noNetwork: 10080,
    popup: 10075,
    mask: 10070,
    navbar: 980,
    topTips: 975,
    sticky: 970,
    indexListSticky: 965
  };
  let platform = "none";
  platform = "vue3";
  platform = "plus";
  var platform$1 = platform;
  const $u = __spreadProps(__spreadValues({
    route,
    date: index.timeFormat,
    colorGradient: colorGradient$1.colorGradient,
    hexToRgb: colorGradient$1.hexToRgb,
    rgbToHex: colorGradient$1.rgbToHex,
    colorToRgba: colorGradient$1.colorToRgba,
    test,
    type: ["primary", "success", "error", "warning", "info"],
    http: new Request(),
    config,
    zIndex,
    debounce,
    throttle,
    mixin,
    mpMixin,
    props
  }, index), {
    color,
    platform: platform$1
  });
  uni.$u = $u;
  const install = (Vue2) => {
    Vue2.config.globalProperties.$u = $u;
    Vue2.config.globalProperties.$nextTick = (cb) => {
      cb();
    };
    Vue2.mixin(mixin);
  };
  var uviewPlus = {
    install
  };
  uni.$u.config.unit = "rpx";
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(store).use(uviewPlus);
    return {
      app
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