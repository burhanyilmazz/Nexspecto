(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],2:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],3:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],4:[function(require,module,exports){
var superPropBase = require("./superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./superPropBase.js":10}],5:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],6:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./setPrototypeOf.js":9}],7:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],8:[function(require,module,exports){
var _typeof = require("@babel/runtime/helpers/typeof")["default"];

var assertThisInitialized = require("./assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./assertThisInitialized.js":1,"@babel/runtime/helpers/typeof":11}],9:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],10:[function(require,module,exports){
var getPrototypeOf = require("./getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./getPrototypeOf.js":5}],11:[function(require,module,exports){
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],12:[function(require,module,exports){
"use strict";

$(document).ready(function () {
  $('[data-fancybox]').fancybox({
    toolbar: false,
    smallBtn: true
  });
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'pie',
    data: window.chartData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: false
        },
        tooltip: {
          backgroundColor: "#fff",
          callbacks: {
            label: function label(tooltipItem) {
              return tooltipItem.label + ' ' + tooltipItem.parsed + '%';
            },
            labelTextColor: function labelTextColor() {
              return "#0b0b45";
            },
            labelColor: function labelColor() {
              return {};
            }
          }
        }
      },
      borderColor: "#fff",
      hoverBackgroundColor: "#aed4f0",
      onHover: function onHover(event, a, b) {
        if (b.tooltip.dataPoints) {
          $(".a-chart-box").removeClass("a-chart-box--active");

          if (event.type == "mousemove") {
            $("[data-title=\"".concat(b.tooltip.dataPoints[0].label, "\"]")).addClass("a-chart-box--active");
          }
        }
      }
    }
  });
  $(document).on('mouseleave mouseout', "#myChart", function () {
    $(".a-chart-box").map(function (index, item) {
      return $(item).removeClass("a-chart-box--active");
    });
  }).on('mouseenter mouseover', ".o-tokens", function () {
    $(".a-chart-box").map(function (index, item) {
      return $(item).removeClass("a-chart-box--active");
    });
  });
});

},{}],13:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var LazyLoad = /*#__PURE__*/function () {
  function LazyLoad(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, LazyLoad);
    this.$el = el;
    var defaults = {};
    this.options = $.extend({}, defaults, options);
    $(document).on("lazybeforeunveil", this.options.speechButton, function (event) {
      return _this.onLazyBeforeUnveil(event);
    });
  }

  (0, _createClass2["default"])(LazyLoad, [{
    key: "onLazyBeforeUnveil",
    value: function onLazyBeforeUnveil(event) {
      var lazyElement = $(event.target);
      var background = lazyElement.attr("data-background");

      if (background) {
        lazyElement.css({
          backgroundImage: "url(".concat(background, ")")
        });
      }
    }
  }]);
  return LazyLoad;
}();

exports["default"] = LazyLoad;
new LazyLoad();

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],14:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Sticky = /*#__PURE__*/function (_Headroom) {
  (0, _inherits2["default"])(Sticky, _Headroom);

  var _super = _createSuper(Sticky);

  function Sticky(el, options) {
    var _thisSuper, _this;

    (0, _classCallCheck2["default"])(this, Sticky);
    var $el = el;
    var defaults = {
      prefix: 'sticky',
      tolerance: {
        down: 10,
        up: 0
      },
      offset: 64
    };
    options = $.extend({}, defaults, options);
    options.classes = {
      initial: "".concat(options.prefix),
      pinned: "".concat(options.prefix, "--pinned"),
      unpinned: "".concat(options.prefix, "--unpinned"),
      top: "".concat(options.prefix, "--top"),
      notTop: "".concat(options.prefix, "--not-top"),
      bottom: "".concat(options.prefix, "--bottom"),
      notBottom: "".concat(options.prefix, "--not-bottom")
    };
    _this = _super.call(this, $el.get(0), options);
    (0, _get2["default"])((_thisSuper = (0, _assertThisInitialized2["default"])(_this), (0, _getPrototypeOf2["default"])(Sticky.prototype)), "init", _thisSuper).call(_thisSuper);
    return _this;
  }

  return Sticky;
}(Headroom);

exports["default"] = Sticky;

},{"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/get":4,"@babel/runtime/helpers/getPrototypeOf":5,"@babel/runtime/helpers/inherits":6,"@babel/runtime/helpers/interopRequireDefault":7,"@babel/runtime/helpers/possibleConstructorReturn":8}],15:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _General = _interopRequireDefault(require("../../../src/assets/scripts/General"));

var _LazyLoad = _interopRequireDefault(require("../../../src/assets/scripts/LazyLoad"));

var _FormInput = _interopRequireDefault(require("../../../src/atoms/FormInput/FormInput"));

var _FormTextarea = _interopRequireDefault(require("../../../src/atoms/FormTextarea/FormTextarea"));

var _Hamburger = _interopRequireDefault(require("../../../src/atoms/Hamburger/Hamburger"));

var _ScrollDown = _interopRequireDefault(require("../../../src/atoms/ScrollDown/ScrollDown"));

var _Accordion = _interopRequireDefault(require("../../../src/molecules/Accordion/Accordion"));

var _Modal = _interopRequireDefault(require("../../../src/molecules/Modal/Modal"));

var _TabDefault = _interopRequireDefault(require("../../../src/molecules/TabDefault/TabDefault"));

var _Timeline = _interopRequireDefault(require("../../../src/molecules/Timeline/Timeline"));

var _LeftNav = _interopRequireDefault(require("../../../src/molecules/LeftNav/LeftNav"));

var _Nav = _interopRequireDefault(require("../../../src/molecules/Nav/Nav"));

var _Newsletter = _interopRequireDefault(require("../../../src/molecules/Newsletter/Newsletter"));

var _Header = _interopRequireDefault(require("../../../src/organisms/Header/Header"));

var Components = {
  LazyLoad: _LazyLoad["default"],
  FormInput: _FormInput["default"],
  FormTextarea: _FormTextarea["default"],
  Hamburger: _Hamburger["default"],
  ScrollDown: _ScrollDown["default"],
  Accordion: _Accordion["default"],
  Modal: _Modal["default"],
  TabDefault: _TabDefault["default"],
  Timeline: _Timeline["default"],
  LeftNav: _LeftNav["default"],
  Nav: _Nav["default"],
  Newsletter: _Newsletter["default"],
  Header: _Header["default"]
};

function buildComponent(that, type, data) {
  var options = data || {};
  var Component = Components[type];

  if (Component) {
    Component = new Component($(that), options);
    that.setComponent(type, Component);
    $(that).data("component".concat(type), Component).removeAttr("data-component").removeData("component");
  }
}

HTMLElement.prototype.getComponent = function (type) {
  var Component = this[type];

  if (Component) {
    return Component;
  }

  return undefined;
};

HTMLElement.prototype.setComponent = function (type, Component) {
  this[type] = Component;
};

window.initiateComponents = function () {
  $('[data-component]').each(function () {
    var data = $(this).data('component');

    if (Array.isArray(data)) {
      for (var i in data) {
        buildComponent(this, data[i].type, data[i]);
      }
    } else if ((0, _typeof2["default"])(data) == "object") {
      buildComponent(this, data.type, data);
    } else if (typeof data == "string") {
      buildComponent(this, data, $(this).data());
    }
  });
};

$(document).ready(function () {
  return initiateComponents();
});

},{"../../../src/assets/scripts/General":12,"../../../src/assets/scripts/LazyLoad":13,"../../../src/atoms/FormInput/FormInput":16,"../../../src/atoms/FormTextarea/FormTextarea":17,"../../../src/atoms/Hamburger/Hamburger":18,"../../../src/atoms/ScrollDown/ScrollDown":19,"../../../src/molecules/Accordion/Accordion":20,"../../../src/molecules/LeftNav/LeftNav":21,"../../../src/molecules/Modal/Modal":22,"../../../src/molecules/Nav/Nav":23,"../../../src/molecules/Newsletter/Newsletter":24,"../../../src/molecules/TabDefault/TabDefault":25,"../../../src/molecules/Timeline/Timeline":26,"../../../src/organisms/Header/Header":27,"@babel/runtime/helpers/interopRequireDefault":7,"@babel/runtime/helpers/typeof":11}],16:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var FormInput = /*#__PURE__*/function () {
  function FormInput(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, FormInput);
    this.$el = el;
    var defaults = {
      selector: "> input"
    };
    this.options = $.extend({}, defaults, options);
    this.$selector = this.$el.find(this.options.selector);
    this.$el.on("focus blur", this.options.selector, function (event) {
      return _this.onToggleShrink(event);
    }).on("input change", this.options.selector, function (event) {
      return _this.onChange(event);
    });

    if (this.isFilled(this.$selector)) {
      this.$selector.attr("data-dirty", true);
      this.$selector.data("dirty-important", true);
    }
  }

  (0, _createClass2["default"])(FormInput, [{
    key: "onToggleShrink",
    value: function onToggleShrink(event) {
      event.preventDefault();
      var target = $(event.target);

      if (this.isFilled(target)) {
        return;
      }

      if (target.data("dirty-important")) {
        target.attr("data-dirty", true);
        target.data("dirty-important", true);
      } else {
        target.attr("data-dirty", target.attr("data-dirty") === true);
      }
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      event.preventDefault();
      var target = $(event.target);
      target.attr("data-dirty", target.data("dirty-important") ? true : this.isFilled(target));
      target.attr("value", target.val());
    }
  }, {
    key: "hasValue",
    value: function hasValue(value) {
      return value != null && !(Array.isArray(value) && value.length === 0);
    }
  }, {
    key: "isFilled",
    value: function isFilled(el) {
      return el && this.hasValue(el.val()) && el.val() !== "";
    }
  }]);
  return FormInput;
}();

exports["default"] = FormInput;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],17:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var FormTextarea = /*#__PURE__*/function () {
  function FormTextarea(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, FormTextarea);
    this.$el = el;
    var defaults = {
      selector: "> textarea"
    };
    this.options = $.extend({}, defaults, options);
    this.$selector = this.$el.find(this.options.selector);
    this.$el.on("focus blur", this.options.selector, function (event) {
      return _this.onToggleShrink(event);
    }).on("input change", this.options.selector, function (event) {
      return _this.onChange(event);
    });
  }

  (0, _createClass2["default"])(FormTextarea, [{
    key: "onToggleShrink",
    value: function onToggleShrink(event) {
      event.preventDefault();
      var target = $(event.target);

      if (this.isFilled(target)) {
        return;
      }

      if (target.data("dirty-important")) {
        target.attr("data-dirty", true);
        target.data("dirty-important", true);
      } else {
        target.attr("data-dirty", target.attr("data-dirty") === true);
      }
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      event.preventDefault();
      var target = $(event.target);
      target.attr("data-dirty", target.data("dirty-important") ? true : this.isFilled(target));
      target.attr("value", target.val());
    }
  }, {
    key: "hasValue",
    value: function hasValue(value) {
      return value != null && !(Array.isArray(value) && value.length === 0);
    }
  }, {
    key: "isFilled",
    value: function isFilled(el) {
      return el && this.hasValue(el.val()) && el.val() !== "";
    }
  }]);
  return FormTextarea;
}();

exports["default"] = FormTextarea;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],18:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Hamburger = /*#__PURE__*/function () {
  function Hamburger(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, Hamburger);
    this.$el = el;
    var defaults = {
      className: "a-hamburger--open"
    };
    this.options = $.extend({}, defaults, options);
    this.$el.on("click", function (event) {
      return _this.onClick(event);
    });
  }

  (0, _createClass2["default"])(Hamburger, [{
    key: "onClick",
    value: function onClick(event) {
      event.preventDefault();
      this.$el.toggleClass(this.options.className);
      this.$el.trigger("hamburger.click");
    }
  }]);
  return Hamburger;
}();

exports["default"] = Hamburger;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],19:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var ScrollDown = /*#__PURE__*/function () {
  function ScrollDown(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, ScrollDown);
    this.$el = el;
    var defaults = {
      target: "#presale"
    };
    this.options = $.extend({}, defaults, options);
    this.$el.on("click", function (event) {
      return _this.onClick(event);
    });
  }

  (0, _createClass2["default"])(ScrollDown, [{
    key: "onClick",
    value: function onClick(event) {
      event.preventDefault();
      $("html,body").animate({
        scrollTop: $(this.options.target).position().top
      }, 100);
    }
  }]);
  return ScrollDown;
}();

exports["default"] = ScrollDown;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],20:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Accordion = /*#__PURE__*/function () {
  function Accordion(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, Accordion);
    this.$el = el;
    var defaults = {
      "accordionHeads": "> .m-accordion__container .m-accordion__head",
      "accordionBodies": "> .m-accordion__container .m-accordion__body",
      "activeClass": "m-accordion__head--active"
    };
    this.options = $.extend({}, defaults, options);
    this.accordionHeads = this.$el.find(this.options.accordionHeads);
    this.accordionBodies = this.$el.find(this.options.accordionbodies);
    this.activeClass = this.options.activeClass;
    this.showOnlyOne = this.options.showOnlyOne;
    this.$el.on("click", this.options.accordionHeads, function (e) {
      return _this.onClick(e);
    });
  }

  (0, _createClass2["default"])(Accordion, [{
    key: "onClick",
    value: function onClick(e) {
      e.preventDefault();
      this.currTarget = $(e.currentTarget);

      if (this.showOnlyOne) {
        if (this.currTarget.hasClass(this.options.activeClass)) {
          this.currTarget.removeClass(this.options.activeClass);
        } else {
          this.accordionHeads.removeClass(this.activeClass);
          this.currTarget.addClass(this.options.activeClass);
        }
      } else {
        this.currTarget.toggleClass(this.activeClass);
      }

      this.$el.trigger("accordion.change");
    }
  }]);
  return Accordion;
}();

exports["default"] = Accordion;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],21:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var LeftNav = /*#__PURE__*/function () {
  function LeftNav(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, LeftNav);
    this.$el = el;
    var defaults = {
      anchor: {
        self: ".m-left-nav li",
        link: "li a",
        active: "active"
      }
    };
    this.options = $.extend({}, defaults, options);
    this.$el.on("click", this.options.anchor.link, function (event) {
      return _this.onClickNav(event);
    });
    $(document).on("scroll", function (event) {
      return _this.onScroll(event);
    });
  }

  (0, _createClass2["default"])(LeftNav, [{
    key: "onClickNav",
    value: function onClickNav(event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      var $hash = $($target.attr("href"));
      $target.addClass(this.options.anchor.active).siblings().removeClass(this.options.anchor.active);
      $('html, body').animate({
        scrollTop: $hash.offset().top - 50
      }, 100);
    }
  }, {
    key: "onScroll",
    value: function onScroll(event) {
      var _this2 = this;

      var scrollPos = $(document).scrollTop();

      if (!$(this.options.anchor.self).length) {
        return;
      }

      if (scrollPos < $("#about").position().top) {
        $(this.options.anchor.self).eq(0).addClass(this.options.anchor.active);
        return;
      }

      $(this.options.anchor.self).find("a").each(function (index, item) {
        var currLink = $(item);
        var refElement = $(currLink.attr("href"));

        if (refElement.position().top + $("#about").position().top - 70 <= scrollPos) {
          $(_this2.options.anchor.self).removeClass(_this2.options.anchor.active);
          currLink.parent().addClass(_this2.options.anchor.active);
        } else {
          currLink.parent().removeClass(_this2.options.anchor.active);
        }
      });
    }
  }]);
  return LeftNav;
}();

exports["default"] = LeftNav;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],22:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Modal = function Modal(el, options) {
  (0, _classCallCheck2["default"])(this, Modal);
  this.$el = el;
  var defaults = {
    onLoad: false
  };
  this.options = $.extend({}, defaults, options);

  if (this.options.onLoad) {
    return $.fancybox.open(el.get(0));
  }
};

exports["default"] = Modal;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/interopRequireDefault":7}],23:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Nav = /*#__PURE__*/function () {
  function Nav(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, Nav);
    this.$el = el;
    var defaults = {
      anchor: {
        self: ".m-nav li",
        active: "active"
      }
    };
    this.options = $.extend({}, defaults, options);
    this.$el.on("click", this.options.anchor.self, function (event) {
      return _this.onClickNav(event);
    });
    $(document).on("scroll", function (event) {
      return _this.onScroll(event);
    });
  }

  (0, _createClass2["default"])(Nav, [{
    key: "onClickNav",
    value: function onClickNav(event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      var $hash = $($target.find("a").attr("href"));
      $target.addClass(this.options.anchor.active).siblings().removeClass(this.options.anchor.active);
      $('html, body').animate({
        scrollTop: $hash.offset().top - 50
      }, 500);
    }
  }, {
    key: "onScroll",
    value: function onScroll(event) {
      var _this2 = this;

      var scrollPos = $(document).scrollTop();

      if (!$(this.options.anchor.self).length) {
        return;
      }

      $(this.options.anchor.self).find("a").each(function (index, item) {
        var currLink = $(item);
        var refElement = $(currLink.attr("href"));

        if (refElement.position().top <= scrollPos) {
          $(_this2.options.anchor.self).removeClass(_this2.options.anchor.active);
          currLink.parent().addClass(_this2.options.anchor.active);
        } else {
          currLink.parent().removeClass(_this2.options.anchor.active);
        }
      });
    }
  }]);
  return Nav;
}();

exports["default"] = Nav;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],24:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Newsletter = /*#__PURE__*/function () {
  function Newsletter(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, Newsletter);
    this.$el = el;
    var defaults = {
      selector: ".m-newsletter__input input"
    };
    this.options = $.extend({}, defaults, options);
    this.$selector = this.$el.find(this.options.selector);
    this.$el.on("focus blur", this.options.selector, function (event) {
      return _this.onToggleShrink(event);
    }).on("input change", this.options.selector, function (event) {
      return _this.onChange(event);
    });

    if (this.isFilled(this.$selector)) {
      this.$selector.parent().attr("data-dirty", true);
      this.$selector.parent().data("dirty-important", true);
    }
  }

  (0, _createClass2["default"])(Newsletter, [{
    key: "onToggleShrink",
    value: function onToggleShrink(event) {
      event.preventDefault();
      var target = $(event.target);

      if (this.isFilled(target)) {
        return;
      }

      target.parent().attr("data-dirty", target.attr("data-dirty") === true);
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      event.preventDefault();
      var target = $(event.target);
      target.parent().attr("data-dirty", this.isFilled(target));
      target.attr("value", target.val());
    }
  }, {
    key: "hasValue",
    value: function hasValue(value) {
      return value != null && !(Array.isArray(value) && value.length === 0);
    }
  }, {
    key: "isFilled",
    value: function isFilled(el) {
      return el && this.hasValue(el.val()) && el.val() !== "";
    }
  }]);
  return Newsletter;
}();

exports["default"] = Newsletter;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],25:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var TabDefault = /*#__PURE__*/function () {
  function TabDefault(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, TabDefault);
    this.$el = el;
    var defaults = {
      "container": ".m-tab-default",
      "tabItems": "> .m-tab-default__items .m-tab-default__items--desc",
      "tabPanes": "> .m-tab-default__panes .m-tab-default__pane",
      "activeTabItemClass": "m-tab-default__item--active",
      "activeTabPaneClass": "m-tab-default__pane--active",
      "inActiveTabPaneClass": "m-tab-default__pane--inactive",
      activeIndex: 0,
      select: ".a-select"
    };
    this.options = $.extend({}, defaults, options);
    this.tabItems = this.$el.find(this.options.tabItems);
    this.tabPanes = this.$el.find(this.options.tabPanes);
    this.$el.on("click", "".concat(this.options.tabItems, " a"), function (e) {
      return _this.onClick(e);
    }).on("change", this.options.select, function (event) {
      return _this.onChange(event);
    });
    this.setActive(this.options.activeIndex);
  }

  (0, _createClass2["default"])(TabDefault, [{
    key: "onClick",
    value: function onClick(e) {
      e.preventDefault();
      var index = $(e.currentTarget).parent().parent().index();
      this.setActive(index);
      $(document).trigger("tab.show", index);
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      event.preventDefault();
      var index = $(event.target).val();
      this.setActive(index);
    }
  }, {
    key: "setActive",
    value: function setActive(index) {
      this.options.activeIndex = index;
      this.tabItems.removeClass(this.options.activeTabItemClass).eq(index).addClass(this.options.activeTabItemClass);
      this.tabPanes.filter(".".concat(this.options.activeTabPaneClass)).addClass(this.options.inActiveTabPaneClass);
      this.tabPanes.removeClass(this.options.activeTabPaneClass).eq(index).addClass(this.options.activeTabPaneClass).filter(".".concat(this.options.inActiveTabPaneClass)).removeClass(this.options.inActiveTabPaneClass);
    }
  }]);
  return TabDefault;
}();

exports["default"] = TabDefault;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],26:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Timeline = /*#__PURE__*/function () {
  function Timeline(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, Timeline);
    this.$el = el;
    var defaults = {
      buttons: {
        left: ".m-timeline__control--left",
        right: ".m-timeline__control--right"
      },
      timelineBox: ".m-timeline__content li",
      card: ".m-card-timeline",
      progressbar: ".m-timeline-progress__bar"
    };
    this.options = $.extend({}, defaults, options);
    this.$timelineBox = this.$el.find(this.options.timelineBox);
    this.$card = this.$el.find(this.options.card);
    this.$leftButton = this.$el.find(this.options.buttons.left);
    this.$rightButton = this.$el.find(this.options.buttons.right);
    this.$progressbar = this.$el.find(this.options.progressbar);
    this.elWidth = this.$el[0].scrollWidth;
    this.cardSize = 268;
    setTimeout(function () {
      return _this.onInit();
    }, 100);
    this.$el.on("click", this.options.buttons.right, function (event) {
      return _this.onClickRight(event);
    }).on("click", this.options.buttons.left, function (event) {
      return _this.onClickLeft(event);
    }).on("scroll", function () {
      return _this.scrollCheck();
    });
  }

  (0, _createClass2["default"])(Timeline, [{
    key: "onInit",
    value: function onInit() {
      this.cardSize = this.$card.innerWidth();
      var padLeft = 182;
      var windowWidth = $(window).width();

      if (windowWidth < 1366) {
        padLeft = 142;
      }

      this.$progressbar.width(this.$el[0].scrollWidth - padLeft);
    }
  }, {
    key: "onClickRight",
    value: function onClickRight(event) {
      var _this2 = this;

      event.preventDefault();
      var leftPos = this.$el.scrollLeft();
      this.cardSize = this.$card.innerWidth();
      this.$el.animate({
        scrollLeft: leftPos + this.cardSize
      }, 400, function () {
        return _this2.scrollCheck();
      });
    }
  }, {
    key: "onClickLeft",
    value: function onClickLeft(event) {
      var _this3 = this;

      event.preventDefault();
      var leftPos = this.$el.scrollLeft();
      this.cardSize = this.$card.innerWidth();
      this.$el.animate({
        scrollLeft: leftPos - this.cardSize
      }, 400, function () {
        return _this3.scrollCheck();
      });
    }
  }, {
    key: "scrollCheck",
    value: function scrollCheck() {
      var leftPos = this.$el.scrollLeft();
      this.cardSize = this.$card.innerWidth();

      if (leftPos == 0) {
        this.$leftButton.addClass("disabled");
      }

      if (leftPos > 0) {
        this.$leftButton.removeClass("disabled");
      }

      if (leftPos >= this.elWidth - 250) {
        this.$rightButton.addClass("disabled");
      }

      if (leftPos < this.elWidth - 250) {
        this.$rightButton.removeClass("disabled");
      }
    }
  }]);
  return Timeline;
}();

exports["default"] = Timeline;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],27:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Sticky = _interopRequireDefault(require("../../assets/scripts/Sticky"));

var Header = /*#__PURE__*/function () {
  function Header(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, Header);
    this.$el = el;
    var defaults = {
      hamburger: ".a-hamburger",
      nav: {
        self: ".m-nav",
        toggle: "m-nav--open",
        item: "nav > ul > li span",
        active: "m-nav--active"
      }
    };
    this.options = $.extend({}, defaults, options);
    this.$hamburger = this.$el.find(this.options.hamburger);
    this.$nav = this.$el.find(this.options.nav.self);
    this.sticky = new _Sticky["default"](el, {
      prefix: "o-header"
    });
    $(document).on("hamburger.click", function (event) {
      return _this.onClickHamburger(event);
    });
  }

  (0, _createClass2["default"])(Header, [{
    key: "closeAll",
    value: function closeAll() {
      this.$el.removeClass(this.options.toggle);
      this.$hamburger.removeClass('a-hamburger--open');
      $("html").removeClass('disable-scroll');
    }
  }, {
    key: "onClickHamburger",
    value: function onClickHamburger(event) {
      var windowWidth = $(window).width();

      if (windowWidth < 1025) {
        event.preventDefault();
        this.$nav.toggleClass(this.options.nav.toggle);

        if (this.$nav.hasClass(this.options.nav.toggle)) {
          $("html").addClass('disable-scroll');
          this.$el.addClass('o-header--opened');
        } else {
          $("html").removeClass('disable-scroll');
          this.$el.removeClass('o-header--opened');
        }
      }
    }
  }]);
  return Header;
}();

exports["default"] = Header;

},{"../../assets/scripts/Sticky":14,"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}]},{},[15])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJzcmMvYXNzZXRzL3NjcmlwdHMvR2VuZXJhbC5lczYiLCJzcmMvYXNzZXRzL3NjcmlwdHMvTGF6eUxvYWQuZXM2Iiwic3JjL2Fzc2V0cy9zY3JpcHRzL1N0aWNreS5lczYiLCJzcmMvYXNzZXRzL3NjcmlwdHMvYXBwLmpzIiwic3JjL2F0b21zL0Zvcm1JbnB1dC9Gb3JtSW5wdXQuZXM2Iiwic3JjL2F0b21zL0Zvcm1UZXh0YXJlYS9Gb3JtVGV4dGFyZWEuZXM2Iiwic3JjL2F0b21zL0hhbWJ1cmdlci9IYW1idXJnZXIuZXM2Iiwic3JjL2F0b21zL1Njcm9sbERvd24vU2Nyb2xsRG93bi5lczYiLCJzcmMvbW9sZWN1bGVzL0FjY29yZGlvbi9BY2NvcmRpb24uZXM2Iiwic3JjL21vbGVjdWxlcy9MZWZ0TmF2L0xlZnROYXYuZXM2Iiwic3JjL21vbGVjdWxlcy9Nb2RhbC9Nb2RhbC5lczYiLCJzcmMvbW9sZWN1bGVzL05hdi9OYXYuZXM2Iiwic3JjL21vbGVjdWxlcy9OZXdzbGV0dGVyL05ld3NsZXR0ZXIuZXM2Iiwic3JjL21vbGVjdWxlcy9UYWJEZWZhdWx0L1RhYkRlZmF1bHQuZXM2Iiwic3JjL21vbGVjdWxlcy9UaW1lbGluZS9UaW1lbGluZS5lczYiLCJzcmMvb3JnYW5pc21zL0hlYWRlci9IZWFkZXIuZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNB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QyxnQkFBTCxDQUFzQixLQUF0QixDQUFYO0FBQUEsS0FEekI7QUFHRDs7OztXQUVELG9CQUFXO0FBQ1QsV0FBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixLQUFLLE9BQUwsQ0FBYSxNQUFsQztBQUNBLFdBQUssVUFBTCxDQUFnQixXQUFoQixDQUE0QixtQkFBNUI7QUFDQSxNQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxXQUFWLENBQXNCLGdCQUF0QjtBQUNEOzs7V0FHRCwwQkFBaUIsS0FBakIsRUFBd0I7QUFDdEIsVUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVLEtBQVYsRUFBcEI7O0FBRUEsVUFBSSxXQUFXLEdBQUcsSUFBbEIsRUFBd0I7QUFDdEIsUUFBQSxLQUFLLENBQUMsY0FBTjtBQUNBLGFBQUssSUFBTCxDQUFVLFdBQVYsQ0FBc0IsS0FBSyxPQUFMLENBQWEsR0FBYixDQUFpQixNQUF2Qzs7QUFFQSxZQUFJLEtBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsS0FBSyxPQUFMLENBQWEsR0FBYixDQUFpQixNQUFwQyxDQUFKLEVBQWlEO0FBQy9DLFVBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVLFFBQVYsQ0FBbUIsZ0JBQW5CO0FBQ0EsZUFBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixrQkFBbEI7QUFDRCxTQUhELE1BR087QUFDTCxVQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxXQUFWLENBQXNCLGdCQUF0QjtBQUNBLGVBQUssR0FBTCxDQUFTLFdBQVQsQ0FBcUIsa0JBQXJCO0FBQ0Q7QUFDRjtBQUNGIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlLmpzXCIpO1xuXG5mdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IFJlZmxlY3QuZ2V0O1xuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCIkKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG4gICQoJ1tkYXRhLWZhbmN5Ym94XScpLmZhbmN5Ym94KHtcbiAgICB0b29sYmFyOiBmYWxzZSxcbiAgICBzbWFsbEJ0bjogdHJ1ZSxcbiAgfSlcblxuICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNoYXJ0XCIpO1xuXG4gIHZhciBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgIHR5cGU6ICdwaWUnLFxuICAgIGRhdGE6IHdpbmRvdy5jaGFydERhdGEsXG4gICAgb3B0aW9uczoge1xuICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgbGFiZWw6ICh0b29sdGlwSXRlbSkgPT4gdG9vbHRpcEl0ZW0ubGFiZWwgKyAnICcgKyB0b29sdGlwSXRlbS5wYXJzZWQgKyAnJScsXG4gICAgICAgICAgICBsYWJlbFRleHRDb2xvcjogKCkgPT4gXCIjMGIwYjQ1XCIsXG4gICAgICAgICAgICBsYWJlbENvbG9yOiAoKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7fVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJvcmRlckNvbG9yOiBcIiNmZmZcIixcbiAgICAgIGhvdmVyQmFja2dyb3VuZENvbG9yOiBcIiNhZWQ0ZjBcIixcbiAgICAgIG9uSG92ZXI6IChldmVudCwgYSwgYikgPT4ge1xuICAgICAgICBpZiAoYi50b29sdGlwLmRhdGFQb2ludHMpIHtcbiAgICAgICAgICAkKFwiLmEtY2hhcnQtYm94XCIpLnJlbW92ZUNsYXNzKFwiYS1jaGFydC1ib3gtLWFjdGl2ZVwiKTtcbiAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PSBcIm1vdXNlbW92ZVwiKSB7XG4gICAgICAgICAgICAkKGBbZGF0YS10aXRsZT1cIiR7Yi50b29sdGlwLmRhdGFQb2ludHNbMF0ubGFiZWx9XCJdYCkuYWRkQ2xhc3MoXCJhLWNoYXJ0LWJveC0tYWN0aXZlXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgJChkb2N1bWVudClcbiAgICAub24oJ21vdXNlbGVhdmUgbW91c2VvdXQnLCBcIiNteUNoYXJ0XCIsICgpID0+IHtcbiAgICAgICQoXCIuYS1jaGFydC1ib3hcIikubWFwKChpbmRleCwgaXRlbSkgPT4gJChpdGVtKS5yZW1vdmVDbGFzcyhcImEtY2hhcnQtYm94LS1hY3RpdmVcIikpXG4gICAgfSlcbiAgICAub24oJ21vdXNlZW50ZXIgbW91c2VvdmVyJywgXCIuby10b2tlbnNcIiwgKCkgPT4ge1xuICAgICAgJChcIi5hLWNoYXJ0LWJveFwiKS5tYXAoKGluZGV4LCBpdGVtKSA9PiAkKGl0ZW0pLnJlbW92ZUNsYXNzKFwiYS1jaGFydC1ib3gtLWFjdGl2ZVwiKSlcbiAgICB9KVxuXG59KTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExhenlMb2FkIHtcblxuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuXG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAkKGRvY3VtZW50KS5vbihcImxhenliZWZvcmV1bnZlaWxcIiwgdGhpcy5vcHRpb25zLnNwZWVjaEJ1dHRvbiwgZXZlbnQgPT4gdGhpcy5vbkxhenlCZWZvcmVVbnZlaWwoZXZlbnQpKTtcblxuICB9XG5cbiAgb25MYXp5QmVmb3JlVW52ZWlsKGV2ZW50KSB7XG4gICAgY29uc3QgbGF6eUVsZW1lbnQgPSAkKGV2ZW50LnRhcmdldCk7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGxhenlFbGVtZW50LmF0dHIoIFwiZGF0YS1iYWNrZ3JvdW5kXCIgKTtcbiAgICBpZiAoIGJhY2tncm91bmQgKSB7XG4gICAgICBsYXp5RWxlbWVudC5jc3Moe1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiYWNrZ3JvdW5kfSlgXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxubmV3IExhenlMb2FkKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdGlja3kgZXh0ZW5kcyBIZWFkcm9vbSB7XG5cbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICBjb25zdCAkZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgcHJlZml4OiAnc3RpY2t5JyxcbiAgICAgIHRvbGVyYW5jZToge1xuICAgICAgICBkb3duIDogMTAsXG4gICAgICAgIHVwIDogMFxuICAgICAgfSxcbiAgICAgIG9mZnNldCA6IDY0XG4gICAgfTtcblxuICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgb3B0aW9ucy5jbGFzc2VzID0ge1xuICAgICAgaW5pdGlhbCA6IGAke29wdGlvbnMucHJlZml4fWAsXG4gICAgICBwaW5uZWQgOiBgJHtvcHRpb25zLnByZWZpeH0tLXBpbm5lZGAsXG4gICAgICB1bnBpbm5lZCA6IGAke29wdGlvbnMucHJlZml4fS0tdW5waW5uZWRgLFxuICAgICAgdG9wIDogYCR7b3B0aW9ucy5wcmVmaXh9LS10b3BgLFxuICAgICAgbm90VG9wIDogYCR7b3B0aW9ucy5wcmVmaXh9LS1ub3QtdG9wYCxcbiAgICAgIGJvdHRvbSA6IGAke29wdGlvbnMucHJlZml4fS0tYm90dG9tYCxcbiAgICAgIG5vdEJvdHRvbSA6IGAke29wdGlvbnMucHJlZml4fS0tbm90LWJvdHRvbWBcbiAgICB9XG5cbiAgICBzdXBlcigkZWwuZ2V0KDApLCBvcHRpb25zKTtcbiAgICBzdXBlci5pbml0KCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IEdlbmVyYWwgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2Fzc2V0cy9zY3JpcHRzL0dlbmVyYWwnO1xuaW1wb3J0IExhenlMb2FkICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hc3NldHMvc2NyaXB0cy9MYXp5TG9hZCc7XG5cbmltcG9ydCBGb3JtSW5wdXQgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXRvbXMvRm9ybUlucHV0L0Zvcm1JbnB1dCc7XG5pbXBvcnQgRm9ybVRleHRhcmVhICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2F0b21zL0Zvcm1UZXh0YXJlYS9Gb3JtVGV4dGFyZWEnO1xuaW1wb3J0IEhhbWJ1cmdlciAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hdG9tcy9IYW1idXJnZXIvSGFtYnVyZ2VyJztcbmltcG9ydCBTY3JvbGxEb3duICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXRvbXMvU2Nyb2xsRG93bi9TY3JvbGxEb3duJztcblxuaW1wb3J0IEFjY29yZGlvbiAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvQWNjb3JkaW9uL0FjY29yZGlvbic7XG5pbXBvcnQgTW9kYWwgICAgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9Nb2RhbC9Nb2RhbCc7XG5pbXBvcnQgVGFiRGVmYXVsdCAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL1RhYkRlZmF1bHQvVGFiRGVmYXVsdCc7XG5pbXBvcnQgVGltZWxpbmUgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9UaW1lbGluZS9UaW1lbGluZSc7XG5pbXBvcnQgTGVmdE5hdiAgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9MZWZ0TmF2L0xlZnROYXYnO1xuaW1wb3J0IE5hdiAgICAgICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvTmF2L05hdic7XG5pbXBvcnQgTmV3c2xldHRlciAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9OZXdzbGV0dGVyL05ld3NsZXR0ZXInO1xuXG5pbXBvcnQgSGVhZGVyICAgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL29yZ2FuaXNtcy9IZWFkZXIvSGVhZGVyJztcblxuY29uc3QgQ29tcG9uZW50cyA9IHtcbiAgTGF6eUxvYWQsXG5cbiAgRm9ybUlucHV0LFxuICBGb3JtVGV4dGFyZWEsXG4gIEhhbWJ1cmdlcixcbiAgU2Nyb2xsRG93bixcblxuICBBY2NvcmRpb24sXG4gIE1vZGFsLFxuICBUYWJEZWZhdWx0LFxuICBUaW1lbGluZSxcbiAgTGVmdE5hdixcbiAgTmF2LFxuICBOZXdzbGV0dGVyLFxuICBcbiAgSGVhZGVyLFxufTtcblxuZnVuY3Rpb24gYnVpbGRDb21wb25lbnQoIHRoYXQsIHR5cGUsIGRhdGEgKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSBkYXRhIHx8IHt9O1xuICBsZXQgQ29tcG9uZW50ID0gQ29tcG9uZW50c1t0eXBlXTtcbiAgaWYgKCBDb21wb25lbnQgKSB7XG4gICAgQ29tcG9uZW50ID0gbmV3IENvbXBvbmVudCgkKHRoYXQpLCBvcHRpb25zKTtcbiAgICB0aGF0LnNldENvbXBvbmVudCggdHlwZSwgQ29tcG9uZW50KTtcbiAgICAkKHRoYXQpLmRhdGEoYGNvbXBvbmVudCR7dHlwZX1gLCBDb21wb25lbnQpLnJlbW92ZUF0dHIoXCJkYXRhLWNvbXBvbmVudFwiKS5yZW1vdmVEYXRhKFwiY29tcG9uZW50XCIpO1xuICB9XG59XG5cbkhUTUxFbGVtZW50LnByb3RvdHlwZS5nZXRDb21wb25lbnQgPSBmdW5jdGlvbiggdHlwZSApIHtcbiAgY29uc3QgQ29tcG9uZW50ID0gdGhpc1sgdHlwZSBdO1xuICBpZiAoIENvbXBvbmVudCApIHtcbiAgICByZXR1cm4gQ29tcG9uZW50O1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbkhUTUxFbGVtZW50LnByb3RvdHlwZS5zZXRDb21wb25lbnQgPSBmdW5jdGlvbiggdHlwZSwgQ29tcG9uZW50ICkge1xuICB0aGlzW3R5cGVdID0gQ29tcG9uZW50O1xufVxuXG53aW5kb3cuaW5pdGlhdGVDb21wb25lbnRzID0gZnVuY3Rpb24oKSB7XG4gICQoJ1tkYXRhLWNvbXBvbmVudF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGRhdGEgPSAkKCB0aGlzICkuZGF0YSgnY29tcG9uZW50Jyk7XG4gICAgaWYgKCBBcnJheS5pc0FycmF5KCBkYXRhICkgKSB7XG4gICAgICBmb3IoIHZhciBpIGluIGRhdGEgKSB7XG4gICAgICAgIGJ1aWxkQ29tcG9uZW50KCB0aGlzLCBkYXRhW2ldLnR5cGUsIGRhdGFbaV0gKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCB0eXBlb2YgZGF0YSA9PSBcIm9iamVjdFwiICkge1xuICAgICAgYnVpbGRDb21wb25lbnQoIHRoaXMsIGRhdGEudHlwZSwgZGF0YSApO1xuICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBkYXRhID09IFwic3RyaW5nXCIgKSB7XG4gICAgICBidWlsZENvbXBvbmVudCggdGhpcywgZGF0YSwgJCggdGhpcyApLmRhdGEoKSApO1xuICAgIH1cblxuICB9KTtcbn1cblxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4gaW5pdGlhdGVDb21wb25lbnRzKCkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUlucHV0IHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBzZWxlY3RvcjogXCI+IGlucHV0XCIsXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRzZWxlY3RvciA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnNlbGVjdG9yKTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJmb2N1cyBibHVyXCIsIHRoaXMub3B0aW9ucy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5vblRvZ2dsZVNocmluayhldmVudCkpXG4gICAgICAub24oXCJpbnB1dCBjaGFuZ2VcIiwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLm9uQ2hhbmdlKGV2ZW50KSk7XG5cbiAgICBpZiAodGhpcy5pc0ZpbGxlZCh0aGlzLiRzZWxlY3RvcikpIHtcbiAgICAgIHRoaXMuJHNlbGVjdG9yLmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRydWUpO1xuICAgICAgdGhpcy4kc2VsZWN0b3IuZGF0YShcImRpcnR5LWltcG9ydGFudFwiLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBvblRvZ2dsZVNocmluayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xuICAgIGlmICh0aGlzLmlzRmlsbGVkKHRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0LmRhdGEoXCJkaXJ0eS1pbXBvcnRhbnRcIikpIHtcbiAgICAgIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0cnVlKTtcbiAgICAgIHRhcmdldC5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIiwgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIpID09PSB0cnVlKTtcbiAgICB9XG4gIH1cblxuXG4gIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XG5cbiAgICB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIiwgdGFyZ2V0LmRhdGEoXCJkaXJ0eS1pbXBvcnRhbnRcIikgPyB0cnVlIDogdGhpcy5pc0ZpbGxlZCh0YXJnZXQpKVxuICAgIHRhcmdldC5hdHRyKFwidmFsdWVcIiwgdGFyZ2V0LnZhbCgpKTtcbiAgfVxuXG4gIGhhc1ZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgIShBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApO1xuICB9XG5cbiAgaXNGaWxsZWQoZWwpIHtcbiAgICByZXR1cm4gZWwgJiYgKHRoaXMuaGFzVmFsdWUoZWwudmFsKCkpICYmIGVsLnZhbCgpICE9PSBcIlwiKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVRleHRhcmVhIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBzZWxlY3RvcjogXCI+IHRleHRhcmVhXCJcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJHNlbGVjdG9yID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuc2VsZWN0b3IpO1xuXG4gICAgdGhpcy4kZWxcbiAgICAgIC5vbihcImZvY3VzIGJsdXJcIiwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLm9uVG9nZ2xlU2hyaW5rKGV2ZW50KSlcbiAgICAgIC5vbihcImlucHV0IGNoYW5nZVwiLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMub25DaGFuZ2UoZXZlbnQpKVxuICAgIDtcbiAgfVxuXG4gIG9uVG9nZ2xlU2hyaW5rKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XG4gICAgaWYgKHRoaXMuaXNGaWxsZWQodGFyZ2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICggdGFyZ2V0LmRhdGEoXCJkaXJ0eS1pbXBvcnRhbnRcIikpIHtcbiAgICAgIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0cnVlKTtcbiAgICAgIHRhcmdldC5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIiwgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIpID09PSB0cnVlKTtcbiAgICB9XG4gIH1cblxuXG4gIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XG5cbiAgICB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIiwgdGFyZ2V0LmRhdGEoXCJkaXJ0eS1pbXBvcnRhbnRcIikgPyAgdHJ1ZSA6IHRoaXMuaXNGaWxsZWQodGFyZ2V0KSlcblxuICAgIHRhcmdldC5hdHRyKFwidmFsdWVcIiwgdGFyZ2V0LnZhbCgpKTtcblxuICB9XG5cbiAgaGFzVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAhKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCk7XG4gIH1cblxuICBpc0ZpbGxlZChlbCkge1xuICAgIHJldHVybiBlbCAmJiAodGhpcy5oYXNWYWx1ZShlbC52YWwoKSkgJiYgZWwudmFsKCkgIT09IFwiXCIpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIYW1idXJnZXIge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGNsYXNzTmFtZTogXCJhLWhhbWJ1cmdlci0tb3BlblwiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRlbC5vbihcImNsaWNrXCIsIChldmVudCkgPT4gdGhpcy5vbkNsaWNrKGV2ZW50KSk7XG4gIH1cblxuICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLiRlbC50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuY2xhc3NOYW1lKTtcbiAgICB0aGlzLiRlbC50cmlnZ2VyKFwiaGFtYnVyZ2VyLmNsaWNrXCIpO1xuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbERvd24ge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHRhcmdldDogXCIjcHJlc2FsZVwiLFxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kZWwub24oXCJjbGlja1wiLCBldmVudCA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKTtcbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoXCJodG1sLGJvZHlcIikuYW5pbWF0ZSh7XG4gICAgICBzY3JvbGxUb3A6ICQodGhpcy5vcHRpb25zLnRhcmdldCkucG9zaXRpb24oKS50b3BcbiAgICB9LCAxMDApO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvcmRpb24ge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG5cbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBcImFjY29yZGlvbkhlYWRzXCI6IFwiPiAubS1hY2NvcmRpb25fX2NvbnRhaW5lciAubS1hY2NvcmRpb25fX2hlYWRcIixcbiAgICAgIFwiYWNjb3JkaW9uQm9kaWVzXCI6IFwiPiAubS1hY2NvcmRpb25fX2NvbnRhaW5lciAubS1hY2NvcmRpb25fX2JvZHlcIixcbiAgICAgIFwiYWN0aXZlQ2xhc3NcIjogXCJtLWFjY29yZGlvbl9faGVhZC0tYWN0aXZlXCJcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuYWNjb3JkaW9uSGVhZHMgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5hY2NvcmRpb25IZWFkcyk7XG4gICAgdGhpcy5hY2NvcmRpb25Cb2RpZXMgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5hY2NvcmRpb25ib2RpZXMpO1xuICAgIHRoaXMuYWN0aXZlQ2xhc3MgPSB0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3M7XG4gICAgdGhpcy5zaG93T25seU9uZSA9IHRoaXMub3B0aW9ucy5zaG93T25seU9uZTtcblxuICAgIHRoaXMuJGVsLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLmFjY29yZGlvbkhlYWRzLCAoZSkgPT4gdGhpcy5vbkNsaWNrKGUpKTtcbiAgfVxuXG4gIG9uQ2xpY2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmN1cnJUYXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG5cbiAgICBpZiAodGhpcy5zaG93T25seU9uZSkge1xuICAgICAgaWYgKHRoaXMuY3VyclRhcmdldC5oYXNDbGFzcyh0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3MpKSB7XG4gICAgICAgIHRoaXMuY3VyclRhcmdldC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY2NvcmRpb25IZWFkcy5yZW1vdmVDbGFzcyh0aGlzLmFjdGl2ZUNsYXNzKTtcbiAgICAgICAgdGhpcy5jdXJyVGFyZ2V0LmFkZENsYXNzKHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VyclRhcmdldC50b2dnbGVDbGFzcyh0aGlzLmFjdGl2ZUNsYXNzKTtcbiAgICB9XG5cbiAgICB0aGlzLiRlbC50cmlnZ2VyKFwiYWNjb3JkaW9uLmNoYW5nZVwiKTtcbiAgfVxuXG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExlZnROYXYge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGFuY2hvcjoge1xuICAgICAgICBzZWxmOiBcIi5tLWxlZnQtbmF2IGxpXCIsXG4gICAgICAgIGxpbms6IFwibGkgYVwiLFxuICAgICAgICBhY3RpdmU6IFwiYWN0aXZlXCJcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRlbC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5hbmNob3IubGluaywgZXZlbnQgPT4gdGhpcy5vbkNsaWNrTmF2KGV2ZW50KSlcblxuICAgICQoZG9jdW1lbnQpLm9uKFwic2Nyb2xsXCIsIGV2ZW50ID0+IHRoaXMub25TY3JvbGwoZXZlbnQpKTtcbiAgfVxuXG4gIG9uQ2xpY2tOYXYoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIGNvbnN0ICRoYXNoID0gJCgkdGFyZ2V0LmF0dHIoXCJocmVmXCIpKVxuICAgICR0YXJnZXQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmFuY2hvci5hY3RpdmUpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmFuY2hvci5hY3RpdmUpXG5cbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICBzY3JvbGxUb3A6ICRoYXNoLm9mZnNldCgpLnRvcCAtIDUwXG4gICAgfSwgMTAwKTtcbiAgfVxuXG5cbiAgb25TY3JvbGwoZXZlbnQpIHtcbiAgICBjb25zdCBzY3JvbGxQb3MgPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKTtcblxuICAgIGlmICghJCh0aGlzLm9wdGlvbnMuYW5jaG9yLnNlbGYpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHNjcm9sbFBvcyA8ICQoXCIjYWJvdXRcIikucG9zaXRpb24oKS50b3ApIHtcbiAgICAgICQodGhpcy5vcHRpb25zLmFuY2hvci5zZWxmKS5lcSgwKS5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuYW5jaG9yLmFjdGl2ZSk7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAkKHRoaXMub3B0aW9ucy5hbmNob3Iuc2VsZikuZmluZChcImFcIikuZWFjaCgoaW5kZXgsIGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGN1cnJMaW5rID0gJChpdGVtKTtcbiAgICAgIGNvbnN0IHJlZkVsZW1lbnQgPSAkKGN1cnJMaW5rLmF0dHIoXCJocmVmXCIpKTtcblxuICAgICAgaWYgKChyZWZFbGVtZW50LnBvc2l0aW9uKCkudG9wICsgJChcIiNhYm91dFwiKS5wb3NpdGlvbigpLnRvcCAtIDcwKSA8PSBzY3JvbGxQb3MpIHtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuYW5jaG9yLnNlbGYpLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5hbmNob3IuYWN0aXZlKTtcbiAgICAgICAgY3VyckxpbmsucGFyZW50KCkuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmFuY2hvci5hY3RpdmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VyckxpbmsucGFyZW50KCkucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmFuY2hvci5hY3RpdmUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgb25Mb2FkOiBmYWxzZVxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5vbkxvYWQpIHtcbiAgICAgIHJldHVybiAkLmZhbmN5Ym94Lm9wZW4oZWwuZ2V0KDApKTtcbiAgICB9XG5cbiAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOYXYge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGFuY2hvcjoge1xuICAgICAgICBzZWxmOiBcIi5tLW5hdiBsaVwiLFxuICAgICAgICBhY3RpdmU6IFwiYWN0aXZlXCJcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuYW5jaG9yLnNlbGYsIGV2ZW50ID0+IHRoaXMub25DbGlja05hdihldmVudCkpXG5cbiAgICAkKGRvY3VtZW50KS5vbihcInNjcm9sbFwiLCBldmVudCA9PiB0aGlzLm9uU2Nyb2xsKGV2ZW50KSlcblxuICB9XG5cbiAgb25DbGlja05hdihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgY29uc3QgJGhhc2ggPSAkKCR0YXJnZXQuZmluZChcImFcIikuYXR0cihcImhyZWZcIikpXG4gICAgJHRhcmdldC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuYW5jaG9yLmFjdGl2ZSkuc2libGluZ3MoKS5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuYW5jaG9yLmFjdGl2ZSlcblxuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgIHNjcm9sbFRvcDogJGhhc2gub2Zmc2V0KCkudG9wIC0gNTBcbiAgICB9LCA1MDApO1xuICB9XG5cblxuICBvblNjcm9sbChldmVudCkge1xuICAgIGNvbnN0IHNjcm9sbFBvcyA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKCEkKHRoaXMub3B0aW9ucy5hbmNob3Iuc2VsZikubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAkKHRoaXMub3B0aW9ucy5hbmNob3Iuc2VsZikuZmluZChcImFcIikuZWFjaCgoaW5kZXgsIGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGN1cnJMaW5rID0gJChpdGVtKTtcbiAgICAgIGNvbnN0IHJlZkVsZW1lbnQgPSAkKGN1cnJMaW5rLmF0dHIoXCJocmVmXCIpKTtcbiAgICAgIFxuICAgICAgaWYgKHJlZkVsZW1lbnQucG9zaXRpb24oKS50b3AgPD0gc2Nyb2xsUG9zKSB7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmFuY2hvci5zZWxmKS5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuYW5jaG9yLmFjdGl2ZSk7XG4gICAgICAgIGN1cnJMaW5rLnBhcmVudCgpLmFkZENsYXNzKHRoaXMub3B0aW9ucy5hbmNob3IuYWN0aXZlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJMaW5rLnBhcmVudCgpLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5hbmNob3IuYWN0aXZlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3c2xldHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgc2VsZWN0b3I6IFwiLm0tbmV3c2xldHRlcl9faW5wdXQgaW5wdXRcIixcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJHNlbGVjdG9yID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuc2VsZWN0b3IpO1xuXG4gICAgdGhpcy4kZWxcbiAgICAgIC5vbihcImZvY3VzIGJsdXJcIiwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLm9uVG9nZ2xlU2hyaW5rKGV2ZW50KSlcbiAgICAgIC5vbihcImlucHV0IGNoYW5nZVwiLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMub25DaGFuZ2UoZXZlbnQpKTtcblxuICAgIGlmICh0aGlzLmlzRmlsbGVkKHRoaXMuJHNlbGVjdG9yKSkge1xuICAgICAgdGhpcy4kc2VsZWN0b3IucGFyZW50KCkuYXR0cihcImRhdGEtZGlydHlcIiwgdHJ1ZSk7XG4gICAgICB0aGlzLiRzZWxlY3Rvci5wYXJlbnQoKS5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uVG9nZ2xlU2hyaW5rKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XG4gICAgaWYgKHRoaXMuaXNGaWxsZWQodGFyZ2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRhcmdldC5wYXJlbnQoKS5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIikgPT09IHRydWUpO1xuICB9XG5cblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xuXG4gICAgdGFyZ2V0LnBhcmVudCgpLmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRoaXMuaXNGaWxsZWQodGFyZ2V0KSlcbiAgICB0YXJnZXQuYXR0cihcInZhbHVlXCIsIHRhcmdldC52YWwoKSk7XG4gIH1cblxuICBoYXNWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICEoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKTtcbiAgfVxuXG4gIGlzRmlsbGVkKGVsKSB7XG4gICAgcmV0dXJuIGVsICYmICh0aGlzLmhhc1ZhbHVlKGVsLnZhbCgpKSAmJiBlbC52YWwoKSAhPT0gXCJcIik7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYkRlZmF1bHQge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG5cbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBcImNvbnRhaW5lclwiOiBcIi5tLXRhYi1kZWZhdWx0XCIsXG4gICAgICBcInRhYkl0ZW1zXCI6IFwiPiAubS10YWItZGVmYXVsdF9faXRlbXMgLm0tdGFiLWRlZmF1bHRfX2l0ZW1zLS1kZXNjXCIsXG4gICAgICBcInRhYlBhbmVzXCI6IFwiPiAubS10YWItZGVmYXVsdF9fcGFuZXMgLm0tdGFiLWRlZmF1bHRfX3BhbmVcIixcbiAgICAgIFwiYWN0aXZlVGFiSXRlbUNsYXNzXCI6IFwibS10YWItZGVmYXVsdF9faXRlbS0tYWN0aXZlXCIsXG4gICAgICBcImFjdGl2ZVRhYlBhbmVDbGFzc1wiOiBcIm0tdGFiLWRlZmF1bHRfX3BhbmUtLWFjdGl2ZVwiLFxuICAgICAgXCJpbkFjdGl2ZVRhYlBhbmVDbGFzc1wiOiBcIm0tdGFiLWRlZmF1bHRfX3BhbmUtLWluYWN0aXZlXCIsXG4gICAgICBhY3RpdmVJbmRleDogMCxcbiAgICAgIHNlbGVjdDogXCIuYS1zZWxlY3RcIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy50YWJJdGVtcyA9IHRoaXMuJGVsLmZpbmQoIHRoaXMub3B0aW9ucy50YWJJdGVtcyApO1xuICAgIHRoaXMudGFiUGFuZXMgPSB0aGlzLiRlbC5maW5kKCB0aGlzLm9wdGlvbnMudGFiUGFuZXMgKTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJjbGlja1wiLCBgJHt0aGlzLm9wdGlvbnMudGFiSXRlbXN9IGFgLCAoZSkgPT4gdGhpcy5vbkNsaWNrKGUpKVxuICAgICAgLm9uKFwiY2hhbmdlXCIsIHRoaXMub3B0aW9ucy5zZWxlY3QsIChldmVudCkgPT4gdGhpcy5vbkNoYW5nZShldmVudCkpXG4gICAgO1xuXG4gICAgdGhpcy5zZXRBY3RpdmUoIHRoaXMub3B0aW9ucy5hY3RpdmVJbmRleCApO1xuICB9XG5cbiAgb25DbGljayAoIGUgKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGluZGV4ID0gJChlLmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpLnBhcmVudCgpLmluZGV4KCk7XG4gICAgdGhpcy5zZXRBY3RpdmUoIGluZGV4ICk7XG4gICAgJChkb2N1bWVudCkudHJpZ2dlcihcInRhYi5zaG93XCIsIGluZGV4KVxuICB9XG5cbiAgb25DaGFuZ2UgKCBldmVudCApIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGluZGV4ID0gJChldmVudC50YXJnZXQpLnZhbCgpO1xuICAgIHRoaXMuc2V0QWN0aXZlKCBpbmRleCApO1xuICB9XG5cbiAgc2V0QWN0aXZlKCBpbmRleCApIHtcbiAgICB0aGlzLm9wdGlvbnMuYWN0aXZlSW5kZXggPSBpbmRleDtcblxuICAgIHRoaXMudGFiSXRlbXNcbiAgICAgIC5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb25zLmFjdGl2ZVRhYkl0ZW1DbGFzcyApXG4gICAgICAuZXEoIGluZGV4IClcbiAgICAgIC5hZGRDbGFzcyggdGhpcy5vcHRpb25zLmFjdGl2ZVRhYkl0ZW1DbGFzcyApO1xuXG4gICAgdGhpcy50YWJQYW5lc1xuICAgICAgLmZpbHRlciggYC4ke3RoaXMub3B0aW9ucy5hY3RpdmVUYWJQYW5lQ2xhc3N9YCApXG4gICAgICAuYWRkQ2xhc3MoIHRoaXMub3B0aW9ucy5pbkFjdGl2ZVRhYlBhbmVDbGFzcyApO1xuXG4gICAgdGhpcy50YWJQYW5lc1xuICAgICAgLnJlbW92ZUNsYXNzKCB0aGlzLm9wdGlvbnMuYWN0aXZlVGFiUGFuZUNsYXNzIClcbiAgICAgIC5lcSggaW5kZXggKVxuICAgICAgLmFkZENsYXNzKCB0aGlzLm9wdGlvbnMuYWN0aXZlVGFiUGFuZUNsYXNzIClcbiAgICAgIC5maWx0ZXIoIGAuJHt0aGlzLm9wdGlvbnMuaW5BY3RpdmVUYWJQYW5lQ2xhc3N9YCApXG4gICAgICAucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9ucy5pbkFjdGl2ZVRhYlBhbmVDbGFzcyApO1xuXG4gIH1cblxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lbGluZSB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgYnV0dG9uczoge1xuICAgICAgICBsZWZ0OiBcIi5tLXRpbWVsaW5lX19jb250cm9sLS1sZWZ0XCIsXG4gICAgICAgIHJpZ2h0OiBcIi5tLXRpbWVsaW5lX19jb250cm9sLS1yaWdodFwiXG4gICAgICB9LFxuICAgICAgdGltZWxpbmVCb3g6IFwiLm0tdGltZWxpbmVfX2NvbnRlbnQgbGlcIixcbiAgICAgIGNhcmQ6IFwiLm0tY2FyZC10aW1lbGluZVwiLFxuICAgICAgcHJvZ3Jlc3NiYXI6IFwiLm0tdGltZWxpbmUtcHJvZ3Jlc3NfX2JhclwiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiR0aW1lbGluZUJveCA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnRpbWVsaW5lQm94KTtcbiAgICB0aGlzLiRjYXJkID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuY2FyZCk7XG4gICAgdGhpcy4kbGVmdEJ1dHRvbiA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLmJ1dHRvbnMubGVmdCk7XG4gICAgdGhpcy4kcmlnaHRCdXR0b24gPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5idXR0b25zLnJpZ2h0KTtcbiAgICB0aGlzLiRwcm9ncmVzc2JhciA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnByb2dyZXNzYmFyKTtcblxuICAgIHRoaXMuZWxXaWR0aCA9IHRoaXMuJGVsWzBdLnNjcm9sbFdpZHRoO1xuICAgIHRoaXMuY2FyZFNpemUgPSAyNjg7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub25Jbml0KCksIDEwMCk7XG5cblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuYnV0dG9ucy5yaWdodCwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrUmlnaHQoZXZlbnQpKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLmJ1dHRvbnMubGVmdCwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrTGVmdChldmVudCkpXG4gICAgICAub24oXCJzY3JvbGxcIiwgKCkgPT4gdGhpcy5zY3JvbGxDaGVjaygpKVxuICB9XG5cbiAgb25Jbml0KCkge1xuICAgIHRoaXMuY2FyZFNpemUgPSB0aGlzLiRjYXJkLmlubmVyV2lkdGgoKTtcblxuICAgIGxldCBwYWRMZWZ0ID0gMTgyO1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICBpZiAod2luZG93V2lkdGggPCAxMzY2KSB7XG4gICAgICBwYWRMZWZ0ID0gMTQyO1xuICAgIH1cblxuICAgIHRoaXMuJHByb2dyZXNzYmFyLndpZHRoKHRoaXMuJGVsWzBdLnNjcm9sbFdpZHRoIC0gcGFkTGVmdClcbiAgfVxuXG4gIG9uQ2xpY2tSaWdodChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbGVmdFBvcyA9IHRoaXMuJGVsLnNjcm9sbExlZnQoKTtcbiAgICB0aGlzLmNhcmRTaXplID0gdGhpcy4kY2FyZC5pbm5lcldpZHRoKCk7XG5cbiAgICB0aGlzLiRlbC5hbmltYXRlKHtcbiAgICAgIHNjcm9sbExlZnQ6IGxlZnRQb3MgKyB0aGlzLmNhcmRTaXplXG4gICAgfSwgNDAwLCAoKSA9PiB0aGlzLnNjcm9sbENoZWNrKCkpO1xuICB9XG5cbiAgb25DbGlja0xlZnQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGxlZnRQb3MgPSB0aGlzLiRlbC5zY3JvbGxMZWZ0KCk7XG4gICAgdGhpcy5jYXJkU2l6ZSA9IHRoaXMuJGNhcmQuaW5uZXJXaWR0aCgpO1xuXG4gICAgdGhpcy4kZWwuYW5pbWF0ZSh7XG4gICAgICBzY3JvbGxMZWZ0OiBsZWZ0UG9zIC0gdGhpcy5jYXJkU2l6ZVxuICAgIH0sIDQwMCwgKCkgPT4gdGhpcy5zY3JvbGxDaGVjaygpKTtcbiAgfVxuXG4gIHNjcm9sbENoZWNrKCkge1xuICAgIGNvbnN0IGxlZnRQb3MgPSB0aGlzLiRlbC5zY3JvbGxMZWZ0KCk7XG4gICAgdGhpcy5jYXJkU2l6ZSA9IHRoaXMuJGNhcmQuaW5uZXJXaWR0aCgpO1xuICAgIFxuICAgIGlmIChsZWZ0UG9zID09IDApIHtcbiAgICAgICAgdGhpcy4kbGVmdEJ1dHRvbi5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgIH1cblxuICAgIGlmIChsZWZ0UG9zID4gMCkge1xuICAgICAgICB0aGlzLiRsZWZ0QnV0dG9uLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgfSBcblxuICAgIGlmIChsZWZ0UG9zID49ICh0aGlzLmVsV2lkdGggLSAyNTApKSB7XG4gICAgICAgIHRoaXMuJHJpZ2h0QnV0dG9uLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgfVxuXG4gICAgaWYgKGxlZnRQb3MgPCAodGhpcy5lbFdpZHRoIC0gMjUwKSkge1xuICAgICAgICB0aGlzLiRyaWdodEJ1dHRvbi5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFN0aWNreSBmcm9tIFwiLi4vLi4vYXNzZXRzL3NjcmlwdHMvU3RpY2t5XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGhhbWJ1cmdlcjogXCIuYS1oYW1idXJnZXJcIixcbiAgICAgIG5hdjoge1xuICAgICAgICBzZWxmOiBcIi5tLW5hdlwiLFxuICAgICAgICB0b2dnbGU6IFwibS1uYXYtLW9wZW5cIixcbiAgICAgICAgaXRlbTogXCJuYXYgPiB1bCA+IGxpIHNwYW5cIixcbiAgICAgICAgYWN0aXZlOiBcIm0tbmF2LS1hY3RpdmVcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRoYW1idXJnZXIgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5oYW1idXJnZXIpO1xuICAgIHRoaXMuJG5hdiA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLm5hdi5zZWxmKTtcblxuICAgIHRoaXMuc3RpY2t5ID0gbmV3IFN0aWNreShlbCwge1xuICAgICAgcHJlZml4OiBcIm8taGVhZGVyXCIsXG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KVxuICAgICAgLm9uKFwiaGFtYnVyZ2VyLmNsaWNrXCIsIChldmVudCkgPT4gdGhpcy5vbkNsaWNrSGFtYnVyZ2VyKGV2ZW50KSk7XG5cbiAgfVxuXG4gIGNsb3NlQWxsKCkge1xuICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy50b2dnbGUpO1xuICAgIHRoaXMuJGhhbWJ1cmdlci5yZW1vdmVDbGFzcygnYS1oYW1idXJnZXItLW9wZW4nKVxuICAgICQoXCJodG1sXCIpLnJlbW92ZUNsYXNzKCdkaXNhYmxlLXNjcm9sbCcpO1xuICB9XG5cblxuICBvbkNsaWNrSGFtYnVyZ2VyKGV2ZW50KSB7XG4gICAgY29uc3Qgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgIGlmICh3aW5kb3dXaWR0aCA8IDEwMjUpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuJG5hdi50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMubmF2LnRvZ2dsZSk7XG5cbiAgICAgIGlmICh0aGlzLiRuYXYuaGFzQ2xhc3ModGhpcy5vcHRpb25zLm5hdi50b2dnbGUpKSB7XG4gICAgICAgICQoXCJodG1sXCIpLmFkZENsYXNzKCdkaXNhYmxlLXNjcm9sbCcpO1xuICAgICAgICB0aGlzLiRlbC5hZGRDbGFzcygnby1oZWFkZXItLW9wZW5lZCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcygnZGlzYWJsZS1zY3JvbGwnKTtcbiAgICAgICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoJ28taGVhZGVyLS1vcGVuZWQnKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19
