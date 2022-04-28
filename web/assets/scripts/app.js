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
var scrollElements = document.querySelectorAll(".js-scroll");

var elementInView = function elementInView(el) {
  var dividend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
};

var elementOutofView = function elementOutofView(el) {
  var elementTop = el.getBoundingClientRect().top;
  return elementTop > (window.innerHeight || document.documentElement.clientHeight);
};

var displayScrollElement = function displayScrollElement(element) {
  element.classList.add("scrolled");
};
/* const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
}; */


var handleScrollAnimation = function handleScrollAnimation() {
  scrollElements.forEach(function (el) {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    }
    /* else if (elementOutofView(el)) {
         hideScrollElement(el)
       } */

  });
};

window.addEventListener("scroll", function () {
  handleScrollAnimation();
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

var _Team = _interopRequireDefault(require("../../../src/organisms/Team/Team"));

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
  Header: _Header["default"],
  Team: _Team["default"]
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

},{"../../../src/assets/scripts/General":12,"../../../src/assets/scripts/LazyLoad":13,"../../../src/atoms/FormInput/FormInput":16,"../../../src/atoms/FormTextarea/FormTextarea":17,"../../../src/atoms/Hamburger/Hamburger":18,"../../../src/atoms/ScrollDown/ScrollDown":19,"../../../src/molecules/Accordion/Accordion":20,"../../../src/molecules/LeftNav/LeftNav":21,"../../../src/molecules/Modal/Modal":22,"../../../src/molecules/Nav/Nav":23,"../../../src/molecules/Newsletter/Newsletter":24,"../../../src/molecules/TabDefault/TabDefault":25,"../../../src/molecules/Timeline/Timeline":26,"../../../src/organisms/Header/Header":27,"../../../src/organisms/Team/Team":28,"@babel/runtime/helpers/interopRequireDefault":7,"@babel/runtime/helpers/typeof":11}],16:[function(require,module,exports){
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

  (0, _createClass2["default"])(Nav, [{
    key: "onClickNav",
    value: function onClickNav(event) {
      event.preventDefault();
      $("html").removeClass("disable-scroll");
      $(".o-header").removeClass("o-header--opened");
      var $target = $(event.currentTarget);
      var $hash = $($target.attr("href"));
      $target.addClass(this.options.anchor.active).siblings().removeClass(this.options.anchor.active);
      $('html, body').animate({
        scrollTop: $hash.offset().top
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
    this.elWidth = this.$el.width();
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

      if (this.$el[0].offsetWidth + this.$el[0].scrollLeft >= this.$el[0].scrollWidth) {
        this.$rightButton.addClass("disabled");
      } else {
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

},{"../../assets/scripts/Sticky":14,"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],28:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Team = /*#__PURE__*/function () {
  function Team(el, options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, Team);
    this.$el = el;
    var defaults = {
      buttons: {
        left: ".o-team__control--left",
        right: ".o-team__control--right"
      },
      list: ".o-team__list",
      card: ".m-card-user"
    };
    this.options = $.extend({}, defaults, options);
    this.$list = this.$el.next(this.options.list);
    this.$card = this.$list.find(this.options.card);
    this.$leftButton = this.$el.find(this.options.buttons.left);
    this.$rightButton = this.$el.find(this.options.buttons.right);
    this.elWidth = this.$list.width();
    this.cardSize = 268;
    setTimeout(function () {
      return _this.onInit();
    }, 100);
    this.$el.on("click", this.options.buttons.right, function (event) {
      return _this.onClickRight(event);
    }).on("click", this.options.buttons.left, function (event) {
      return _this.onClickLeft(event);
    });
    this.$list.on("scroll", function () {
      return _this.scrollCheck();
    });
  }

  (0, _createClass2["default"])(Team, [{
    key: "onInit",
    value: function onInit() {
      this.cardSize = this.$card.innerWidth();
    }
  }, {
    key: "onClickRight",
    value: function onClickRight(event) {
      var _this2 = this;

      event.preventDefault();
      var leftPos = this.$list.scrollLeft();
      this.cardSize = this.$card.innerWidth();
      this.$list.animate({
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
      var leftPos = this.$list.scrollLeft();
      this.cardSize = this.$card.innerWidth();
      this.$list.animate({
        scrollLeft: leftPos - this.cardSize
      }, 400, function () {
        return _this3.scrollCheck();
      });
    }
  }, {
    key: "scrollCheck",
    value: function scrollCheck() {
      var leftPos = this.$list.scrollLeft();
      this.cardSize = this.$card.innerWidth();

      if (leftPos == 0) {
        this.$leftButton.addClass("disabled");
      }

      if (leftPos > 0) {
        this.$leftButton.removeClass("disabled");
      }

      if (this.$list[0].offsetWidth + this.$list[0].scrollLeft >= this.$list[0].scrollWidth) {
        this.$rightButton.addClass("disabled");
      } else {
        this.$rightButton.removeClass("disabled");
      }
    }
  }]);
  return Team;
}();

exports["default"] = Team;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}]},{},[15])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJzcmMvYXNzZXRzL3NjcmlwdHMvR2VuZXJhbC5lczYiLCJzcmMvYXNzZXRzL3NjcmlwdHMvTGF6eUxvYWQuZXM2Iiwic3JjL2Fzc2V0cy9zY3JpcHRzL1N0aWNreS5lczYiLCJzcmMvYXNzZXRzL3NjcmlwdHMvYXBwLmpzIiwic3JjL2F0b21zL0Zvcm1JbnB1dC9Gb3JtSW5wdXQuZXM2Iiwic3JjL2F0b21zL0Zvcm1UZXh0YXJlYS9Gb3JtVGV4dGFyZWEuZXM2Iiwic3JjL2F0b21zL0hhbWJ1cmdlci9IYW1idXJnZXIuZXM2Iiwic3JjL2F0b21zL1Njcm9sbERvd24vU2Nyb2xsRG93bi5lczYiLCJzcmMvbW9sZWN1bGVzL0FjY29yZGlvbi9BY2NvcmRpb24uZXM2Iiwic3JjL21vbGVjdWxlcy9MZWZ0TmF2L0xlZnROYXYuZXM2Iiwic3JjL21vbGVjdWxlcy9Nb2RhbC9Nb2RhbC5lczYiLCJzcmMvbW9sZWN1bGVzL05hdi9OYXYuZXM2Iiwic3JjL21vbGVjdWxlcy9OZXdzbGV0dGVyL05ld3NsZXR0ZXIuZXM2Iiwic3JjL21vbGVjdWxlcy9UYWJEZWZhdWx0L1RhYkRlZmF1bHQuZXM2Iiwic3JjL21vbGVjdWxlcy9UaW1lbGluZS9UaW1lbGluZS5lczYiLCJzcmMvb3JnYW5pc21zL0hlYWRlci9IZWFkZXIuZXM2Iiwic3JjL29yZ2FuaXNtcy9UZWFtL1RlYW0uZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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aEI7QUFDQSxXQUFLLFFBQUwsR0FBZ0IsS0FBSyxLQUFMLENBQVcsVUFBWCxFQUFoQjs7QUFFQSxVQUFJLE9BQU8sSUFBSSxDQUFmLEVBQWtCO0FBQ2hCLGFBQUssV0FBTCxDQUFpQixRQUFqQixDQUEwQixVQUExQjtBQUNEOztBQUVELFVBQUksT0FBTyxHQUFHLENBQWQsRUFBaUI7QUFDZixhQUFLLFdBQUwsQ0FBaUIsV0FBakIsQ0FBNkIsVUFBN0I7QUFDRDs7QUFFRCxVQUFJLEtBQUssS0FBTCxDQUFXLENBQVgsRUFBYyxXQUFkLEdBQTRCLEtBQUssS0FBTCxDQUFXLENBQVgsRUFBYyxVQUExQyxJQUF3RCxLQUFLLEtBQUwsQ0FBVyxDQUFYLEVBQWMsV0FBMUUsRUFBdUY7QUFDckYsYUFBSyxZQUFMLENBQWtCLFFBQWxCLENBQTJCLFVBQTNCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBSyxZQUFMLENBQWtCLFdBQWxCLENBQThCLFVBQTlCO0FBQ0Q7QUFFRiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZS5qc1wiKTtcblxuZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc3VwZXJQcm9wQmFzZTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuICAkKCdbZGF0YS1mYW5jeWJveF0nKS5mYW5jeWJveCh7XG4gICAgdG9vbGJhcjogZmFsc2UsXG4gICAgc21hbGxCdG46IHRydWUsXG4gIH0pXG5cbiAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDaGFydFwiKTtcblxuICB2YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICB0eXBlOiAncGllJyxcbiAgICBkYXRhOiB3aW5kb3cuY2hhcnREYXRhLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICBwbHVnaW5zOiB7XG4gICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgIGxhYmVsOiAodG9vbHRpcEl0ZW0pID0+IHRvb2x0aXBJdGVtLmxhYmVsICsgJyAnICsgdG9vbHRpcEl0ZW0ucGFyc2VkICsgJyUnLFxuICAgICAgICAgICAgbGFiZWxUZXh0Q29sb3I6ICgpID0+IFwiIzBiMGI0NVwiLFxuICAgICAgICAgICAgbGFiZWxDb2xvcjogKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4ge31cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBib3JkZXJDb2xvcjogXCIjZmZmXCIsXG4gICAgICBob3ZlckJhY2tncm91bmRDb2xvcjogXCIjYWVkNGYwXCIsXG4gICAgICBvbkhvdmVyOiAoZXZlbnQsIGEsIGIpID0+IHtcbiAgICAgICAgaWYgKGIudG9vbHRpcC5kYXRhUG9pbnRzKSB7XG4gICAgICAgICAgJChcIi5hLWNoYXJ0LWJveFwiKS5yZW1vdmVDbGFzcyhcImEtY2hhcnQtYm94LS1hY3RpdmVcIik7XG4gICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT0gXCJtb3VzZW1vdmVcIikge1xuICAgICAgICAgICAgJChgW2RhdGEtdGl0bGU9XCIke2IudG9vbHRpcC5kYXRhUG9pbnRzWzBdLmxhYmVsfVwiXWApLmFkZENsYXNzKFwiYS1jaGFydC1ib3gtLWFjdGl2ZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gICQoZG9jdW1lbnQpXG4gICAgLm9uKCdtb3VzZWxlYXZlIG1vdXNlb3V0JywgXCIjbXlDaGFydFwiLCAoKSA9PiB7XG4gICAgICAkKFwiLmEtY2hhcnQtYm94XCIpLm1hcCgoaW5kZXgsIGl0ZW0pID0+ICQoaXRlbSkucmVtb3ZlQ2xhc3MoXCJhLWNoYXJ0LWJveC0tYWN0aXZlXCIpKVxuICAgIH0pXG4gICAgLm9uKCdtb3VzZWVudGVyIG1vdXNlb3ZlcicsIFwiLm8tdG9rZW5zXCIsICgpID0+IHtcbiAgICAgICQoXCIuYS1jaGFydC1ib3hcIikubWFwKChpbmRleCwgaXRlbSkgPT4gJChpdGVtKS5yZW1vdmVDbGFzcyhcImEtY2hhcnQtYm94LS1hY3RpdmVcIikpXG4gICAgfSlcblxufSk7XG5cbmNvbnN0IHNjcm9sbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1zY3JvbGxcIik7XG5cbmNvbnN0IGVsZW1lbnRJblZpZXcgPSAoZWwsIGRpdmlkZW5kID0gMSkgPT4ge1xuICBjb25zdCBlbGVtZW50VG9wID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuXG4gIHJldHVybiAoXG4gICAgZWxlbWVudFRvcCA8PVxuICAgICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgLyBkaXZpZGVuZFxuICApO1xufTtcblxuY29uc3QgZWxlbWVudE91dG9mVmlldyA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50VG9wID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuXG4gIHJldHVybiAoXG4gICAgZWxlbWVudFRvcCA+ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodClcbiAgKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlTY3JvbGxFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsZWRcIik7XG59O1xuXG4vKiBjb25zdCBoaWRlU2Nyb2xsRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNjcm9sbGVkXCIpO1xufTsgKi9cblxuY29uc3QgaGFuZGxlU2Nyb2xsQW5pbWF0aW9uID0gKCkgPT4ge1xuICBzY3JvbGxFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGlmIChlbGVtZW50SW5WaWV3KGVsLCAxLjI1KSkge1xuICAgICAgZGlzcGxheVNjcm9sbEVsZW1lbnQoZWwpO1xuICAgIH1cbiAgICAvKiBlbHNlIGlmIChlbGVtZW50T3V0b2ZWaWV3KGVsKSkge1xuICAgICAgICAgaGlkZVNjcm9sbEVsZW1lbnQoZWwpXG4gICAgICAgfSAqL1xuICB9KVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gIGhhbmRsZVNjcm9sbEFuaW1hdGlvbigpO1xufSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMYXp5TG9hZCB7XG5cbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcblxuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgJChkb2N1bWVudCkub24oXCJsYXp5YmVmb3JldW52ZWlsXCIsIHRoaXMub3B0aW9ucy5zcGVlY2hCdXR0b24sIGV2ZW50ID0+IHRoaXMub25MYXp5QmVmb3JlVW52ZWlsKGV2ZW50KSk7XG5cbiAgfVxuXG4gIG9uTGF6eUJlZm9yZVVudmVpbChldmVudCkge1xuICAgIGNvbnN0IGxhenlFbGVtZW50ID0gJChldmVudC50YXJnZXQpO1xuICAgIGNvbnN0IGJhY2tncm91bmQgPSBsYXp5RWxlbWVudC5hdHRyKCBcImRhdGEtYmFja2dyb3VuZFwiICk7XG4gICAgaWYgKCBiYWNrZ3JvdW5kICkge1xuICAgICAgbGF6eUVsZW1lbnQuY3NzKHtcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmFja2dyb3VuZH0pYFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbm5ldyBMYXp5TG9hZCgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RpY2t5IGV4dGVuZHMgSGVhZHJvb20ge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgY29uc3QgJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHByZWZpeDogJ3N0aWNreScsXG4gICAgICB0b2xlcmFuY2U6IHtcbiAgICAgICAgZG93biA6IDEwLFxuICAgICAgICB1cCA6IDBcbiAgICAgIH0sXG4gICAgICBvZmZzZXQgOiA2NFxuICAgIH07XG5cbiAgICBvcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIG9wdGlvbnMuY2xhc3NlcyA9IHtcbiAgICAgIGluaXRpYWwgOiBgJHtvcHRpb25zLnByZWZpeH1gLFxuICAgICAgcGlubmVkIDogYCR7b3B0aW9ucy5wcmVmaXh9LS1waW5uZWRgLFxuICAgICAgdW5waW5uZWQgOiBgJHtvcHRpb25zLnByZWZpeH0tLXVucGlubmVkYCxcbiAgICAgIHRvcCA6IGAke29wdGlvbnMucHJlZml4fS0tdG9wYCxcbiAgICAgIG5vdFRvcCA6IGAke29wdGlvbnMucHJlZml4fS0tbm90LXRvcGAsXG4gICAgICBib3R0b20gOiBgJHtvcHRpb25zLnByZWZpeH0tLWJvdHRvbWAsXG4gICAgICBub3RCb3R0b20gOiBgJHtvcHRpb25zLnByZWZpeH0tLW5vdC1ib3R0b21gXG4gICAgfVxuXG4gICAgc3VwZXIoJGVsLmdldCgwKSwgb3B0aW9ucyk7XG4gICAgc3VwZXIuaW5pdCgpO1xuICB9XG5cbn1cbiIsImltcG9ydCBHZW5lcmFsICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hc3NldHMvc2NyaXB0cy9HZW5lcmFsJztcbmltcG9ydCBMYXp5TG9hZCAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXNzZXRzL3NjcmlwdHMvTGF6eUxvYWQnO1xuXG5pbXBvcnQgRm9ybUlucHV0ICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2F0b21zL0Zvcm1JbnB1dC9Gb3JtSW5wdXQnO1xuaW1wb3J0IEZvcm1UZXh0YXJlYSAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hdG9tcy9Gb3JtVGV4dGFyZWEvRm9ybVRleHRhcmVhJztcbmltcG9ydCBIYW1idXJnZXIgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXRvbXMvSGFtYnVyZ2VyL0hhbWJ1cmdlcic7XG5pbXBvcnQgU2Nyb2xsRG93biAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2F0b21zL1Njcm9sbERvd24vU2Nyb2xsRG93bic7XG5cbmltcG9ydCBBY2NvcmRpb24gICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL0FjY29yZGlvbi9BY2NvcmRpb24nO1xuaW1wb3J0IE1vZGFsICAgICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvTW9kYWwvTW9kYWwnO1xuaW1wb3J0IFRhYkRlZmF1bHQgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9UYWJEZWZhdWx0L1RhYkRlZmF1bHQnO1xuaW1wb3J0IFRpbWVsaW5lICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvVGltZWxpbmUvVGltZWxpbmUnO1xuaW1wb3J0IExlZnROYXYgICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvTGVmdE5hdi9MZWZ0TmF2JztcbmltcG9ydCBOYXYgICAgICAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL05hdi9OYXYnO1xuaW1wb3J0IE5ld3NsZXR0ZXIgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvTmV3c2xldHRlci9OZXdzbGV0dGVyJztcblxuaW1wb3J0IEhlYWRlciAgICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9vcmdhbmlzbXMvSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgVGVhbSAgICAgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL29yZ2FuaXNtcy9UZWFtL1RlYW0nO1xuXG5jb25zdCBDb21wb25lbnRzID0ge1xuICBMYXp5TG9hZCxcblxuICBGb3JtSW5wdXQsXG4gIEZvcm1UZXh0YXJlYSxcbiAgSGFtYnVyZ2VyLFxuICBTY3JvbGxEb3duLFxuXG4gIEFjY29yZGlvbixcbiAgTW9kYWwsXG4gIFRhYkRlZmF1bHQsXG4gIFRpbWVsaW5lLFxuICBMZWZ0TmF2LFxuICBOYXYsXG4gIE5ld3NsZXR0ZXIsXG4gIFxuICBIZWFkZXIsXG4gIFRlYW0sXG59O1xuXG5mdW5jdGlvbiBidWlsZENvbXBvbmVudCggdGhhdCwgdHlwZSwgZGF0YSApIHtcbiAgY29uc3Qgb3B0aW9ucyA9IGRhdGEgfHwge307XG4gIGxldCBDb21wb25lbnQgPSBDb21wb25lbnRzW3R5cGVdO1xuICBpZiAoIENvbXBvbmVudCApIHtcbiAgICBDb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KCQodGhhdCksIG9wdGlvbnMpO1xuICAgIHRoYXQuc2V0Q29tcG9uZW50KCB0eXBlLCBDb21wb25lbnQpO1xuICAgICQodGhhdCkuZGF0YShgY29tcG9uZW50JHt0eXBlfWAsIENvbXBvbmVudCkucmVtb3ZlQXR0cihcImRhdGEtY29tcG9uZW50XCIpLnJlbW92ZURhdGEoXCJjb21wb25lbnRcIik7XG4gIH1cbn1cblxuSFRNTEVsZW1lbnQucHJvdG90eXBlLmdldENvbXBvbmVudCA9IGZ1bmN0aW9uKCB0eXBlICkge1xuICBjb25zdCBDb21wb25lbnQgPSB0aGlzWyB0eXBlIF07XG4gIGlmICggQ29tcG9uZW50ICkge1xuICAgIHJldHVybiBDb21wb25lbnQ7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuSFRNTEVsZW1lbnQucHJvdG90eXBlLnNldENvbXBvbmVudCA9IGZ1bmN0aW9uKCB0eXBlLCBDb21wb25lbnQgKSB7XG4gIHRoaXNbdHlwZV0gPSBDb21wb25lbnQ7XG59XG5cbndpbmRvdy5pbml0aWF0ZUNvbXBvbmVudHMgPSBmdW5jdGlvbigpIHtcbiAgJCgnW2RhdGEtY29tcG9uZW50XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZGF0YSA9ICQoIHRoaXMgKS5kYXRhKCdjb21wb25lbnQnKTtcbiAgICBpZiAoIEFycmF5LmlzQXJyYXkoIGRhdGEgKSApIHtcbiAgICAgIGZvciggdmFyIGkgaW4gZGF0YSApIHtcbiAgICAgICAgYnVpbGRDb21wb25lbnQoIHRoaXMsIGRhdGFbaV0udHlwZSwgZGF0YVtpXSApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBkYXRhID09IFwib2JqZWN0XCIgKSB7XG4gICAgICBidWlsZENvbXBvbmVudCggdGhpcywgZGF0YS50eXBlLCBkYXRhICk7XG4gICAgfSBlbHNlIGlmICggdHlwZW9mIGRhdGEgPT0gXCJzdHJpbmdcIiApIHtcbiAgICAgIGJ1aWxkQ29tcG9uZW50KCB0aGlzLCBkYXRhLCAkKCB0aGlzICkuZGF0YSgpICk7XG4gICAgfVxuXG4gIH0pO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiBpbml0aWF0ZUNvbXBvbmVudHMoKSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtSW5wdXQge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHNlbGVjdG9yOiBcIj4gaW5wdXRcIixcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJHNlbGVjdG9yID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuc2VsZWN0b3IpO1xuXG4gICAgdGhpcy4kZWxcbiAgICAgIC5vbihcImZvY3VzIGJsdXJcIiwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLm9uVG9nZ2xlU2hyaW5rKGV2ZW50KSlcbiAgICAgIC5vbihcImlucHV0IGNoYW5nZVwiLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMub25DaGFuZ2UoZXZlbnQpKTtcblxuICAgIGlmICh0aGlzLmlzRmlsbGVkKHRoaXMuJHNlbGVjdG9yKSkge1xuICAgICAgdGhpcy4kc2VsZWN0b3IuYXR0cihcImRhdGEtZGlydHlcIiwgdHJ1ZSk7XG4gICAgICB0aGlzLiRzZWxlY3Rvci5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uVG9nZ2xlU2hyaW5rKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XG4gICAgaWYgKHRoaXMuaXNGaWxsZWQodGFyZ2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiKSkge1xuICAgICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRydWUpO1xuICAgICAgdGFyZ2V0LmRhdGEoXCJkaXJ0eS1pbXBvcnRhbnRcIiwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIikgPT09IHRydWUpO1xuICAgIH1cbiAgfVxuXG5cbiAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcblxuICAgIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiKSA/IHRydWUgOiB0aGlzLmlzRmlsbGVkKHRhcmdldCkpXG4gICAgdGFyZ2V0LmF0dHIoXCJ2YWx1ZVwiLCB0YXJnZXQudmFsKCkpO1xuICB9XG5cbiAgaGFzVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAhKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCk7XG4gIH1cblxuICBpc0ZpbGxlZChlbCkge1xuICAgIHJldHVybiBlbCAmJiAodGhpcy5oYXNWYWx1ZShlbC52YWwoKSkgJiYgZWwudmFsKCkgIT09IFwiXCIpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVGV4dGFyZWEge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHNlbGVjdG9yOiBcIj4gdGV4dGFyZWFcIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kc2VsZWN0b3IgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5zZWxlY3Rvcik7XG5cbiAgICB0aGlzLiRlbFxuICAgICAgLm9uKFwiZm9jdXMgYmx1clwiLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMub25Ub2dnbGVTaHJpbmsoZXZlbnQpKVxuICAgICAgLm9uKFwiaW5wdXQgY2hhbmdlXCIsIHRoaXMub3B0aW9ucy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5vbkNoYW5nZShldmVudCkpXG4gICAgO1xuICB9XG5cbiAgb25Ub2dnbGVTaHJpbmsoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICBpZiAodGhpcy5pc0ZpbGxlZCh0YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCB0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiKSkge1xuICAgICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRydWUpO1xuICAgICAgdGFyZ2V0LmRhdGEoXCJkaXJ0eS1pbXBvcnRhbnRcIiwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIikgPT09IHRydWUpO1xuICAgIH1cbiAgfVxuXG5cbiAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcblxuICAgIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiKSA/ICB0cnVlIDogdGhpcy5pc0ZpbGxlZCh0YXJnZXQpKVxuXG4gICAgdGFyZ2V0LmF0dHIoXCJ2YWx1ZVwiLCB0YXJnZXQudmFsKCkpO1xuXG4gIH1cblxuICBoYXNWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICEoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKTtcbiAgfVxuXG4gIGlzRmlsbGVkKGVsKSB7XG4gICAgcmV0dXJuIGVsICYmICh0aGlzLmhhc1ZhbHVlKGVsLnZhbCgpKSAmJiBlbC52YWwoKSAhPT0gXCJcIik7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbWJ1cmdlciB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgY2xhc3NOYW1lOiBcImEtaGFtYnVyZ2VyLS1vcGVuXCJcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJGVsLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKTtcbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuJGVsLnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy5jbGFzc05hbWUpO1xuICAgIHRoaXMuJGVsLnRyaWdnZXIoXCJoYW1idXJnZXIuY2xpY2tcIik7XG4gIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsRG93biB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgdGFyZ2V0OiBcIiNwcmVzYWxlXCIsXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRlbC5vbihcImNsaWNrXCIsIGV2ZW50ID0+IHRoaXMub25DbGljayhldmVudCkpO1xuICB9XG5cbiAgb25DbGljayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJChcImh0bWwsYm9keVwiKS5hbmltYXRlKHtcbiAgICAgIHNjcm9sbFRvcDogJCh0aGlzLm9wdGlvbnMudGFyZ2V0KS5wb3NpdGlvbigpLnRvcFxuICAgIH0sIDEwMCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY29yZGlvbiB7XG5cbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcblxuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIFwiYWNjb3JkaW9uSGVhZHNcIjogXCI+IC5tLWFjY29yZGlvbl9fY29udGFpbmVyIC5tLWFjY29yZGlvbl9faGVhZFwiLFxuICAgICAgXCJhY2NvcmRpb25Cb2RpZXNcIjogXCI+IC5tLWFjY29yZGlvbl9fY29udGFpbmVyIC5tLWFjY29yZGlvbl9fYm9keVwiLFxuICAgICAgXCJhY3RpdmVDbGFzc1wiOiBcIm0tYWNjb3JkaW9uX19oZWFkLS1hY3RpdmVcIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5hY2NvcmRpb25IZWFkcyA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLmFjY29yZGlvbkhlYWRzKTtcbiAgICB0aGlzLmFjY29yZGlvbkJvZGllcyA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLmFjY29yZGlvbmJvZGllcyk7XG4gICAgdGhpcy5hY3RpdmVDbGFzcyA9IHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcztcbiAgICB0aGlzLnNob3dPbmx5T25lID0gdGhpcy5vcHRpb25zLnNob3dPbmx5T25lO1xuXG4gICAgdGhpcy4kZWwub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uSGVhZHMsIChlKSA9PiB0aGlzLm9uQ2xpY2soZSkpO1xuICB9XG5cbiAgb25DbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuY3VyclRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcblxuICAgIGlmICh0aGlzLnNob3dPbmx5T25lKSB7XG4gICAgICBpZiAodGhpcy5jdXJyVGFyZ2V0Lmhhc0NsYXNzKHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcykpIHtcbiAgICAgICAgdGhpcy5jdXJyVGFyZ2V0LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFjY29yZGlvbkhlYWRzLnJlbW92ZUNsYXNzKHRoaXMuYWN0aXZlQ2xhc3MpO1xuICAgICAgICB0aGlzLmN1cnJUYXJnZXQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyVGFyZ2V0LnRvZ2dsZUNsYXNzKHRoaXMuYWN0aXZlQ2xhc3MpO1xuICAgIH1cblxuICAgIHRoaXMuJGVsLnRyaWdnZXIoXCJhY2NvcmRpb24uY2hhbmdlXCIpO1xuICB9XG5cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVmdE5hdiB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgYW5jaG9yOiB7XG4gICAgICAgIHNlbGY6IFwiLm0tbGVmdC1uYXYgbGlcIixcbiAgICAgICAgbGluazogXCJsaSBhXCIsXG4gICAgICAgIGFjdGl2ZTogXCJhY3RpdmVcIlxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJGVsLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLmFuY2hvci5saW5rLCBldmVudCA9PiB0aGlzLm9uQ2xpY2tOYXYoZXZlbnQpKVxuXG4gICAgJChkb2N1bWVudCkub24oXCJzY3JvbGxcIiwgZXZlbnQgPT4gdGhpcy5vblNjcm9sbChldmVudCkpO1xuICB9XG5cbiAgb25DbGlja05hdihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgY29uc3QgJGhhc2ggPSAkKCR0YXJnZXQuYXR0cihcImhyZWZcIikpXG4gICAgJHRhcmdldC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuYW5jaG9yLmFjdGl2ZSkuc2libGluZ3MoKS5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuYW5jaG9yLmFjdGl2ZSlcblxuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgIHNjcm9sbFRvcDogJGhhc2gub2Zmc2V0KCkudG9wIC0gNTBcbiAgICB9LCAxMDApO1xuICB9XG5cblxuICBvblNjcm9sbChldmVudCkge1xuICAgIGNvbnN0IHNjcm9sbFBvcyA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKCEkKHRoaXMub3B0aW9ucy5hbmNob3Iuc2VsZikubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsUG9zIDwgJChcIiNhYm91dFwiKS5wb3NpdGlvbigpLnRvcCkge1xuICAgICAgJCh0aGlzLm9wdGlvbnMuYW5jaG9yLnNlbGYpLmVxKDApLmFkZENsYXNzKHRoaXMub3B0aW9ucy5hbmNob3IuYWN0aXZlKTtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgICQodGhpcy5vcHRpb25zLmFuY2hvci5zZWxmKS5maW5kKFwiYVwiKS5lYWNoKChpbmRleCwgaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY3VyckxpbmsgPSAkKGl0ZW0pO1xuICAgICAgY29uc3QgcmVmRWxlbWVudCA9ICQoY3VyckxpbmsuYXR0cihcImhyZWZcIikpO1xuXG4gICAgICBpZiAoKHJlZkVsZW1lbnQucG9zaXRpb24oKS50b3AgKyAkKFwiI2Fib3V0XCIpLnBvc2l0aW9uKCkudG9wIC0gNzApIDw9IHNjcm9sbFBvcykge1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5hbmNob3Iuc2VsZikucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmFuY2hvci5hY3RpdmUpO1xuICAgICAgICBjdXJyTGluay5wYXJlbnQoKS5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuYW5jaG9yLmFjdGl2ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyTGluay5wYXJlbnQoKS5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuYW5jaG9yLmFjdGl2ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBvbkxvYWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLm9uTG9hZCkge1xuICAgICAgcmV0dXJuICQuZmFuY3lib3gub3BlbihlbC5nZXQoMCkpO1xuICAgIH1cblxuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdiB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgYW5jaG9yOiB7XG4gICAgICAgIHNlbGY6IFwiLm0tbmF2IGxpXCIsXG4gICAgICAgIGxpbms6IFwibGkgYVwiLFxuICAgICAgICBhY3RpdmU6IFwiYWN0aXZlXCJcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuYW5jaG9yLmxpbmssIGV2ZW50ID0+IHRoaXMub25DbGlja05hdihldmVudCkpXG5cbiAgICAkKGRvY3VtZW50KS5vbihcInNjcm9sbFwiLCBldmVudCA9PiB0aGlzLm9uU2Nyb2xsKGV2ZW50KSlcblxuICB9XG5cbiAgb25DbGlja05hdihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJChcImh0bWxcIikucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlLXNjcm9sbFwiKTtcbiAgICAkKFwiLm8taGVhZGVyXCIpLnJlbW92ZUNsYXNzKFwiby1oZWFkZXItLW9wZW5lZFwiKTtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICBjb25zdCAkaGFzaCA9ICQoJHRhcmdldC5hdHRyKFwiaHJlZlwiKSlcbiAgICAkdGFyZ2V0LmFkZENsYXNzKHRoaXMub3B0aW9ucy5hbmNob3IuYWN0aXZlKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5hbmNob3IuYWN0aXZlKVxuXG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgc2Nyb2xsVG9wOiAkaGFzaC5vZmZzZXQoKS50b3BcbiAgICB9LCA1MDApO1xuICB9XG5cblxuICBvblNjcm9sbChldmVudCkge1xuICAgIGNvbnN0IHNjcm9sbFBvcyA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKCEkKHRoaXMub3B0aW9ucy5hbmNob3Iuc2VsZikubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAkKHRoaXMub3B0aW9ucy5hbmNob3Iuc2VsZikuZmluZChcImFcIikuZWFjaCgoaW5kZXgsIGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGN1cnJMaW5rID0gJChpdGVtKTtcbiAgICAgIGNvbnN0IHJlZkVsZW1lbnQgPSAkKGN1cnJMaW5rLmF0dHIoXCJocmVmXCIpKTtcbiAgICAgIFxuICAgICAgaWYgKHJlZkVsZW1lbnQucG9zaXRpb24oKS50b3AgPD0gc2Nyb2xsUG9zKSB7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmFuY2hvci5zZWxmKS5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuYW5jaG9yLmFjdGl2ZSk7XG4gICAgICAgIGN1cnJMaW5rLnBhcmVudCgpLmFkZENsYXNzKHRoaXMub3B0aW9ucy5hbmNob3IuYWN0aXZlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJMaW5rLnBhcmVudCgpLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5hbmNob3IuYWN0aXZlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3c2xldHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgc2VsZWN0b3I6IFwiLm0tbmV3c2xldHRlcl9faW5wdXQgaW5wdXRcIixcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJHNlbGVjdG9yID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuc2VsZWN0b3IpO1xuXG4gICAgdGhpcy4kZWxcbiAgICAgIC5vbihcImZvY3VzIGJsdXJcIiwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLm9uVG9nZ2xlU2hyaW5rKGV2ZW50KSlcbiAgICAgIC5vbihcImlucHV0IGNoYW5nZVwiLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMub25DaGFuZ2UoZXZlbnQpKTtcblxuICAgIGlmICh0aGlzLmlzRmlsbGVkKHRoaXMuJHNlbGVjdG9yKSkge1xuICAgICAgdGhpcy4kc2VsZWN0b3IucGFyZW50KCkuYXR0cihcImRhdGEtZGlydHlcIiwgdHJ1ZSk7XG4gICAgICB0aGlzLiRzZWxlY3Rvci5wYXJlbnQoKS5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uVG9nZ2xlU2hyaW5rKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XG4gICAgaWYgKHRoaXMuaXNGaWxsZWQodGFyZ2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRhcmdldC5wYXJlbnQoKS5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIikgPT09IHRydWUpO1xuICB9XG5cblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xuXG4gICAgdGFyZ2V0LnBhcmVudCgpLmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRoaXMuaXNGaWxsZWQodGFyZ2V0KSlcbiAgICB0YXJnZXQuYXR0cihcInZhbHVlXCIsIHRhcmdldC52YWwoKSk7XG4gIH1cblxuICBoYXNWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICEoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKTtcbiAgfVxuXG4gIGlzRmlsbGVkKGVsKSB7XG4gICAgcmV0dXJuIGVsICYmICh0aGlzLmhhc1ZhbHVlKGVsLnZhbCgpKSAmJiBlbC52YWwoKSAhPT0gXCJcIik7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYkRlZmF1bHQge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG5cbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBcImNvbnRhaW5lclwiOiBcIi5tLXRhYi1kZWZhdWx0XCIsXG4gICAgICBcInRhYkl0ZW1zXCI6IFwiPiAubS10YWItZGVmYXVsdF9faXRlbXMgLm0tdGFiLWRlZmF1bHRfX2l0ZW1zLS1kZXNjXCIsXG4gICAgICBcInRhYlBhbmVzXCI6IFwiPiAubS10YWItZGVmYXVsdF9fcGFuZXMgLm0tdGFiLWRlZmF1bHRfX3BhbmVcIixcbiAgICAgIFwiYWN0aXZlVGFiSXRlbUNsYXNzXCI6IFwibS10YWItZGVmYXVsdF9faXRlbS0tYWN0aXZlXCIsXG4gICAgICBcImFjdGl2ZVRhYlBhbmVDbGFzc1wiOiBcIm0tdGFiLWRlZmF1bHRfX3BhbmUtLWFjdGl2ZVwiLFxuICAgICAgXCJpbkFjdGl2ZVRhYlBhbmVDbGFzc1wiOiBcIm0tdGFiLWRlZmF1bHRfX3BhbmUtLWluYWN0aXZlXCIsXG4gICAgICBhY3RpdmVJbmRleDogMCxcbiAgICAgIHNlbGVjdDogXCIuYS1zZWxlY3RcIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy50YWJJdGVtcyA9IHRoaXMuJGVsLmZpbmQoIHRoaXMub3B0aW9ucy50YWJJdGVtcyApO1xuICAgIHRoaXMudGFiUGFuZXMgPSB0aGlzLiRlbC5maW5kKCB0aGlzLm9wdGlvbnMudGFiUGFuZXMgKTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJjbGlja1wiLCBgJHt0aGlzLm9wdGlvbnMudGFiSXRlbXN9IGFgLCAoZSkgPT4gdGhpcy5vbkNsaWNrKGUpKVxuICAgICAgLm9uKFwiY2hhbmdlXCIsIHRoaXMub3B0aW9ucy5zZWxlY3QsIChldmVudCkgPT4gdGhpcy5vbkNoYW5nZShldmVudCkpXG4gICAgO1xuXG4gICAgdGhpcy5zZXRBY3RpdmUoIHRoaXMub3B0aW9ucy5hY3RpdmVJbmRleCApO1xuICB9XG5cbiAgb25DbGljayAoIGUgKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGluZGV4ID0gJChlLmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpLnBhcmVudCgpLmluZGV4KCk7XG4gICAgdGhpcy5zZXRBY3RpdmUoIGluZGV4ICk7XG4gICAgJChkb2N1bWVudCkudHJpZ2dlcihcInRhYi5zaG93XCIsIGluZGV4KVxuICB9XG5cbiAgb25DaGFuZ2UgKCBldmVudCApIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGluZGV4ID0gJChldmVudC50YXJnZXQpLnZhbCgpO1xuICAgIHRoaXMuc2V0QWN0aXZlKCBpbmRleCApO1xuICB9XG5cbiAgc2V0QWN0aXZlKCBpbmRleCApIHtcbiAgICB0aGlzLm9wdGlvbnMuYWN0aXZlSW5kZXggPSBpbmRleDtcblxuICAgIHRoaXMudGFiSXRlbXNcbiAgICAgIC5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb25zLmFjdGl2ZVRhYkl0ZW1DbGFzcyApXG4gICAgICAuZXEoIGluZGV4IClcbiAgICAgIC5hZGRDbGFzcyggdGhpcy5vcHRpb25zLmFjdGl2ZVRhYkl0ZW1DbGFzcyApO1xuXG4gICAgdGhpcy50YWJQYW5lc1xuICAgICAgLmZpbHRlciggYC4ke3RoaXMub3B0aW9ucy5hY3RpdmVUYWJQYW5lQ2xhc3N9YCApXG4gICAgICAuYWRkQ2xhc3MoIHRoaXMub3B0aW9ucy5pbkFjdGl2ZVRhYlBhbmVDbGFzcyApO1xuXG4gICAgdGhpcy50YWJQYW5lc1xuICAgICAgLnJlbW92ZUNsYXNzKCB0aGlzLm9wdGlvbnMuYWN0aXZlVGFiUGFuZUNsYXNzIClcbiAgICAgIC5lcSggaW5kZXggKVxuICAgICAgLmFkZENsYXNzKCB0aGlzLm9wdGlvbnMuYWN0aXZlVGFiUGFuZUNsYXNzIClcbiAgICAgIC5maWx0ZXIoIGAuJHt0aGlzLm9wdGlvbnMuaW5BY3RpdmVUYWJQYW5lQ2xhc3N9YCApXG4gICAgICAucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9ucy5pbkFjdGl2ZVRhYlBhbmVDbGFzcyApO1xuXG4gIH1cblxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lbGluZSB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgYnV0dG9uczoge1xuICAgICAgICBsZWZ0OiBcIi5tLXRpbWVsaW5lX19jb250cm9sLS1sZWZ0XCIsXG4gICAgICAgIHJpZ2h0OiBcIi5tLXRpbWVsaW5lX19jb250cm9sLS1yaWdodFwiXG4gICAgICB9LFxuICAgICAgdGltZWxpbmVCb3g6IFwiLm0tdGltZWxpbmVfX2NvbnRlbnQgbGlcIixcbiAgICAgIGNhcmQ6IFwiLm0tY2FyZC10aW1lbGluZVwiLFxuICAgICAgcHJvZ3Jlc3NiYXI6IFwiLm0tdGltZWxpbmUtcHJvZ3Jlc3NfX2JhclwiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiR0aW1lbGluZUJveCA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnRpbWVsaW5lQm94KTtcbiAgICB0aGlzLiRjYXJkID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuY2FyZCk7XG4gICAgdGhpcy4kbGVmdEJ1dHRvbiA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLmJ1dHRvbnMubGVmdCk7XG4gICAgdGhpcy4kcmlnaHRCdXR0b24gPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5idXR0b25zLnJpZ2h0KTtcbiAgICB0aGlzLiRwcm9ncmVzc2JhciA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnByb2dyZXNzYmFyKTtcblxuICAgIHRoaXMuZWxXaWR0aCA9IHRoaXMuJGVsLndpZHRoKClcbiAgICB0aGlzLmNhcmRTaXplID0gMjY4O1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm9uSW5pdCgpLCAxMDApO1xuXG4gICAgdGhpcy4kZWxcbiAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5idXR0b25zLnJpZ2h0LCBldmVudCA9PiB0aGlzLm9uQ2xpY2tSaWdodChldmVudCkpXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuYnV0dG9ucy5sZWZ0LCBldmVudCA9PiB0aGlzLm9uQ2xpY2tMZWZ0KGV2ZW50KSlcbiAgICAgIC5vbihcInNjcm9sbFwiLCAoKSA9PiB0aGlzLnNjcm9sbENoZWNrKCkpXG4gIH1cblxuICBvbkluaXQoKSB7XG4gICAgdGhpcy5jYXJkU2l6ZSA9IHRoaXMuJGNhcmQuaW5uZXJXaWR0aCgpO1xuXG4gICAgbGV0IHBhZExlZnQgPSAxODI7XG4gICAgY29uc3Qgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgIGlmICh3aW5kb3dXaWR0aCA8IDEzNjYpIHtcbiAgICAgIHBhZExlZnQgPSAxNDI7XG4gICAgfVxuXG4gICAgdGhpcy4kcHJvZ3Jlc3NiYXIud2lkdGgodGhpcy4kZWxbMF0uc2Nyb2xsV2lkdGggLSBwYWRMZWZ0KVxuICB9XG5cbiAgb25DbGlja1JpZ2h0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBsZWZ0UG9zID0gdGhpcy4kZWwuc2Nyb2xsTGVmdCgpO1xuICAgIHRoaXMuY2FyZFNpemUgPSB0aGlzLiRjYXJkLmlubmVyV2lkdGgoKTtcblxuICAgIHRoaXMuJGVsLmFuaW1hdGUoe1xuICAgICAgc2Nyb2xsTGVmdDogbGVmdFBvcyArIHRoaXMuY2FyZFNpemVcbiAgICB9LCA0MDAsICgpID0+IHRoaXMuc2Nyb2xsQ2hlY2soKSk7XG4gIH1cblxuICBvbkNsaWNrTGVmdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbGVmdFBvcyA9IHRoaXMuJGVsLnNjcm9sbExlZnQoKTtcbiAgICB0aGlzLmNhcmRTaXplID0gdGhpcy4kY2FyZC5pbm5lcldpZHRoKCk7XG5cbiAgICB0aGlzLiRlbC5hbmltYXRlKHtcbiAgICAgIHNjcm9sbExlZnQ6IGxlZnRQb3MgLSB0aGlzLmNhcmRTaXplXG4gICAgfSwgNDAwLCAoKSA9PiB0aGlzLnNjcm9sbENoZWNrKCkpO1xuICB9XG5cbiAgc2Nyb2xsQ2hlY2soKSB7XG4gICAgY29uc3QgbGVmdFBvcyA9IHRoaXMuJGVsLnNjcm9sbExlZnQoKTtcbiAgICB0aGlzLmNhcmRTaXplID0gdGhpcy4kY2FyZC5pbm5lcldpZHRoKCk7XG4gICAgXG4gICAgaWYgKGxlZnRQb3MgPT0gMCkge1xuICAgICAgICB0aGlzLiRsZWZ0QnV0dG9uLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgfVxuXG4gICAgaWYgKGxlZnRQb3MgPiAwKSB7XG4gICAgICAgIHRoaXMuJGxlZnRCdXR0b24ucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICB9IFxuXG4gICAgaWYgKHRoaXMuJGVsWzBdLm9mZnNldFdpZHRoICsgdGhpcy4kZWxbMF0uc2Nyb2xsTGVmdCA+PSB0aGlzLiRlbFswXS5zY3JvbGxXaWR0aCkge1xuICAgICAgdGhpcy4kcmlnaHRCdXR0b24uYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kcmlnaHRCdXR0b24ucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBTdGlja3kgZnJvbSBcIi4uLy4uL2Fzc2V0cy9zY3JpcHRzL1N0aWNreVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBoYW1idXJnZXI6IFwiLmEtaGFtYnVyZ2VyXCIsXG4gICAgICBuYXY6IHtcbiAgICAgICAgc2VsZjogXCIubS1uYXZcIixcbiAgICAgICAgdG9nZ2xlOiBcIm0tbmF2LS1vcGVuXCIsXG4gICAgICAgIGl0ZW06IFwibmF2ID4gdWwgPiBsaSBzcGFuXCIsXG4gICAgICAgIGFjdGl2ZTogXCJtLW5hdi0tYWN0aXZlXCIsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kaGFtYnVyZ2VyID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuaGFtYnVyZ2VyKTtcbiAgICB0aGlzLiRuYXYgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5uYXYuc2VsZik7XG5cbiAgICB0aGlzLnN0aWNreSA9IG5ldyBTdGlja3koZWwsIHtcbiAgICAgIHByZWZpeDogXCJvLWhlYWRlclwiLFxuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudClcbiAgICAgIC5vbihcImhhbWJ1cmdlci5jbGlja1wiLCAoZXZlbnQpID0+IHRoaXMub25DbGlja0hhbWJ1cmdlcihldmVudCkpO1xuXG4gIH1cblxuICBjbG9zZUFsbCgpIHtcbiAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMudG9nZ2xlKTtcbiAgICB0aGlzLiRoYW1idXJnZXIucmVtb3ZlQ2xhc3MoJ2EtaGFtYnVyZ2VyLS1vcGVuJylcbiAgICAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcygnZGlzYWJsZS1zY3JvbGwnKTtcbiAgfVxuXG5cbiAgb25DbGlja0hhbWJ1cmdlcihldmVudCkge1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICBpZiAod2luZG93V2lkdGggPCAxMDI1KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLiRuYXYudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLm5hdi50b2dnbGUpO1xuXG4gICAgICBpZiAodGhpcy4kbmF2Lmhhc0NsYXNzKHRoaXMub3B0aW9ucy5uYXYudG9nZ2xlKSkge1xuICAgICAgICAkKFwiaHRtbFwiKS5hZGRDbGFzcygnZGlzYWJsZS1zY3JvbGwnKTtcbiAgICAgICAgdGhpcy4kZWwuYWRkQ2xhc3MoJ28taGVhZGVyLS1vcGVuZWQnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChcImh0bWxcIikucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUtc2Nyb2xsJyk7XG4gICAgICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKCdvLWhlYWRlci0tb3BlbmVkJylcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlYW0ge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGJ1dHRvbnM6IHtcbiAgICAgICAgbGVmdDogXCIuby10ZWFtX19jb250cm9sLS1sZWZ0XCIsXG4gICAgICAgIHJpZ2h0OiBcIi5vLXRlYW1fX2NvbnRyb2wtLXJpZ2h0XCJcbiAgICAgIH0sXG4gICAgICBsaXN0OiBcIi5vLXRlYW1fX2xpc3RcIixcbiAgICAgIGNhcmQ6IFwiLm0tY2FyZC11c2VyXCIsXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRsaXN0ID0gdGhpcy4kZWwubmV4dCh0aGlzLm9wdGlvbnMubGlzdCk7XG4gICAgdGhpcy4kY2FyZCA9IHRoaXMuJGxpc3QuZmluZCh0aGlzLm9wdGlvbnMuY2FyZCk7XG4gICAgdGhpcy4kbGVmdEJ1dHRvbiA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLmJ1dHRvbnMubGVmdCk7XG4gICAgdGhpcy4kcmlnaHRCdXR0b24gPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5idXR0b25zLnJpZ2h0KTtcblxuICAgIHRoaXMuZWxXaWR0aCA9IHRoaXMuJGxpc3Qud2lkdGgoKTtcblxuICAgIHRoaXMuY2FyZFNpemUgPSAyNjg7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub25Jbml0KCksIDEwMCk7XG5cbiAgICB0aGlzLiRlbFxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLmJ1dHRvbnMucmlnaHQsIGV2ZW50ID0+IHRoaXMub25DbGlja1JpZ2h0KGV2ZW50KSlcbiAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5idXR0b25zLmxlZnQsIGV2ZW50ID0+IHRoaXMub25DbGlja0xlZnQoZXZlbnQpKVxuICAgIHRoaXMuJGxpc3RcbiAgICAgIC5vbihcInNjcm9sbFwiLCAoKSA9PiB0aGlzLnNjcm9sbENoZWNrKCkpXG4gIH1cblxuICBvbkluaXQoKSB7XG4gICAgdGhpcy5jYXJkU2l6ZSA9IHRoaXMuJGNhcmQuaW5uZXJXaWR0aCgpO1xuICB9XG5cbiAgb25DbGlja1JpZ2h0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBsZWZ0UG9zID0gdGhpcy4kbGlzdC5zY3JvbGxMZWZ0KCk7XG4gICAgdGhpcy5jYXJkU2l6ZSA9IHRoaXMuJGNhcmQuaW5uZXJXaWR0aCgpO1xuXG4gICAgdGhpcy4kbGlzdC5hbmltYXRlKHtcbiAgICAgIHNjcm9sbExlZnQ6IGxlZnRQb3MgKyB0aGlzLmNhcmRTaXplXG4gICAgfSwgNDAwLCAoKSA9PiB0aGlzLnNjcm9sbENoZWNrKCkpO1xuICB9XG5cbiAgb25DbGlja0xlZnQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGxlZnRQb3MgPSB0aGlzLiRsaXN0LnNjcm9sbExlZnQoKTtcbiAgICB0aGlzLmNhcmRTaXplID0gdGhpcy4kY2FyZC5pbm5lcldpZHRoKCk7XG5cbiAgICB0aGlzLiRsaXN0LmFuaW1hdGUoe1xuICAgICAgc2Nyb2xsTGVmdDogbGVmdFBvcyAtIHRoaXMuY2FyZFNpemVcbiAgICB9LCA0MDAsICgpID0+IHRoaXMuc2Nyb2xsQ2hlY2soKSk7XG4gIH1cblxuICBzY3JvbGxDaGVjaygpIHtcbiAgICBjb25zdCBsZWZ0UG9zID0gdGhpcy4kbGlzdC5zY3JvbGxMZWZ0KCk7XG4gICAgdGhpcy5jYXJkU2l6ZSA9IHRoaXMuJGNhcmQuaW5uZXJXaWR0aCgpO1xuXG4gICAgaWYgKGxlZnRQb3MgPT0gMCkge1xuICAgICAgdGhpcy4kbGVmdEJ1dHRvbi5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgIH1cblxuICAgIGlmIChsZWZ0UG9zID4gMCkge1xuICAgICAgdGhpcy4kbGVmdEJ1dHRvbi5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLiRsaXN0WzBdLm9mZnNldFdpZHRoICsgdGhpcy4kbGlzdFswXS5zY3JvbGxMZWZ0ID49IHRoaXMuJGxpc3RbMF0uc2Nyb2xsV2lkdGgpIHtcbiAgICAgIHRoaXMuJHJpZ2h0QnV0dG9uLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJHJpZ2h0QnV0dG9uLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgfVxuXG4gIH1cbn1cbiJdfQ==
