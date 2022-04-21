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
  var myFullpage = new fullpage('#fullpage', {
    sectionsColor: ['#0b0b45', '#fff', '#0b0b45', '#fff', '#0b0b45', '#0b0b45', '#0b0b45', '#0b0b45', '#fff'],
    anchors: ['', 'presale', 'about', 'tokens', 'roadmap', 'team', 'faq', 'contact', ''],
    menu: '#menu',
    slidesNavigation: false,
    lazyLoad: true
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

},{"../../../src/assets/scripts/General":12,"../../../src/assets/scripts/LazyLoad":13,"../../../src/atoms/FormInput/FormInput":16,"../../../src/atoms/FormTextarea/FormTextarea":17,"../../../src/atoms/Hamburger/Hamburger":18,"../../../src/atoms/ScrollDown/ScrollDown":19,"../../../src/molecules/Accordion/Accordion":20,"../../../src/molecules/Modal/Modal":21,"../../../src/molecules/TabDefault/TabDefault":22,"../../../src/molecules/Timeline/Timeline":23,"../../../src/organisms/Header/Header":24,"@babel/runtime/helpers/interopRequireDefault":7,"@babel/runtime/helpers/typeof":11}],16:[function(require,module,exports){
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
      selector: "> input"
    };
    this.options = $.extend({}, defaults, options);
    this.$selector = this.$el.find(this.options.selector);
    this.$el.on("focus blur", this.options.selector, function (event) {
      return _this.onClick(event);
    });
  }

  (0, _createClass2["default"])(ScrollDown, [{
    key: "onClick",
    value: function onClick(event) {
      console.log(event);
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/interopRequireDefault":7}],22:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],23:[function(require,module,exports){
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
      this.$progressbar.width(this.$el[0].scrollWidth - 182);
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":7}],24:[function(require,module,exports){
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
      shadow: ".a-shadow",
      nav: {
        self: ".m-nav",
        toggle: "m-nav--open",
        item: "nav > ul > li span",
        active: "m-nav--active"
      },
      search: {
        self: ".m-search-bar",
        trigger: ".js-search-header",
        "class": "m-search-bar--open"
      }
    };
    this.options = $.extend({}, defaults, options);
    this.$hamburger = this.$el.find(this.options.hamburger);
    this.$nav = this.$el.find(this.options.nav.self);
    this.$searchBar = $(this.options.search.self);
    this.$shadow = $(this.options.shadow);
    this.sticky = new _Sticky["default"](el, {
      prefix: "o-header",
      onUnpin: function onUnpin() {
        return _this.onPinSticky();
      }
    });
    this.$el.on("click", this.options.nav.item, function (event) {
      return _this.onClickDropdown(event);
    }).on("click", this.options.search.trigger, function (event) {
      return _this.onClickSearch(event);
    });
    $(document).on("hamburger.click", function (event) {
      return _this.onClickHamburger(event);
    }).on("click", this.options.shadow, function () {
      return _this.closeAll();
    });
  }

  (0, _createClass2["default"])(Header, [{
    key: "closeAll",
    value: function closeAll() {
      this.$el.removeClass(this.options.toggle);
      this.$hamburger.removeClass('a-hamburger--open');
      this.$searchBar.removeClass(this.options.search["class"]);
      $("html").removeClass('disable-scroll');
    }
  }, {
    key: "onClickDropdown",
    value: function onClickDropdown(event) {
      var $target = $(event.currentTarget);

      if ($target.next("ul").length) {
        event.preventDefault();
        var $parent = $target.parent();

        if (!$parent.hasClass(this.options.nav.active)) {
          $(this.options.nav.item).parent().removeClass(this.options.nav.active);
          $parent.addClass(this.options.nav.active);
        } else {
          $parent.removeClass(this.options.nav.active);
        }
      }
    }
  }, {
    key: "onClickSearch",
    value: function onClickSearch(event) {
      event.preventDefault();
      this.$searchBar.toggleClass(this.options.search["class"]);
      this.$nav.removeClass(this.options.nav.toggle);
      this.$hamburger.removeClass('a-hamburger--open');

      if (this.$searchBar.hasClass(this.options.search["class"])) {
        $("html").addClass('disable-scroll');
        this.$el.addClass('o-header--opened');
      } else {
        $("html").removeClass('disable-scroll');
        this.$el.removeClass('o-header--opened');
      }
    }
  }, {
    key: "onClickHamburger",
    value: function onClickHamburger(event) {
      var windowWidth = $(window).width();

      if (windowWidth < 1025) {
        event.preventDefault();
        this.$nav.toggleClass(this.options.nav.toggle);
        this.$searchBar.removeClass(this.options.search["class"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJzcmMvYXNzZXRzL3NjcmlwdHMvR2VuZXJhbC5lczYiLCJzcmMvYXNzZXRzL3NjcmlwdHMvTGF6eUxvYWQuZXM2Iiwic3JjL2Fzc2V0cy9zY3JpcHRzL1N0aWNreS5lczYiLCJzcmMvYXNzZXRzL3NjcmlwdHMvYXBwLmpzIiwic3JjL2F0b21zL0Zvcm1JbnB1dC9Gb3JtSW5wdXQuZXM2Iiwic3JjL2F0b21zL0Zvcm1UZXh0YXJlYS9Gb3JtVGV4dGFyZWEuZXM2Iiwic3JjL2F0b21zL0hhbWJ1cmdlci9IYW1idXJnZXIuZXM2Iiwic3JjL2F0b21zL1Njcm9sbERvd24vU2Nyb2xsRG93bi5lczYiLCJzcmMvbW9sZWN1bGVzL0FjY29yZGlvbi9BY2NvcmRpb24uZXM2Iiwic3JjL21vbGVjdWxlcy9Nb2RhbC9Nb2RhbC5lczYiLCJzcmMvbW9sZWN1bGVzL1RhYkRlZmF1bHQvVGFiRGVmYXVsdC5lczYiLCJzcmMvbW9sZWN1bGVzL1RpbWVsaW5lL1RpbWVsaW5lLmVzNiIsInNyYy9vcmdhbmlzbXMvSGVhZGVyL0hlYWRlci5lczYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Z2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2UuanNcIik7XG5cbmZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQ7XG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyIHx8IHRhcmdldCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2U7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgJCgnW2RhdGEtZmFuY3lib3hdJykuZmFuY3lib3goe1xuICAgIHRvb2xiYXI6IGZhbHNlLFxuICAgIHNtYWxsQnRuOiB0cnVlLFxuICB9KVxuXG4gIHZhciBteUZ1bGxwYWdlID0gbmV3IGZ1bGxwYWdlKCcjZnVsbHBhZ2UnLCB7XG4gICAgc2VjdGlvbnNDb2xvcjogWycjMGIwYjQ1JywgJyNmZmYnLCAnIzBiMGI0NScsICcjZmZmJywgJyMwYjBiNDUnLCAnIzBiMGI0NScsICcjMGIwYjQ1JywgJyMwYjBiNDUnLCAnI2ZmZiddLFxuICAgIGFuY2hvcnM6IFsnJywgJ3ByZXNhbGUnLCAnYWJvdXQnLCAndG9rZW5zJywgJ3JvYWRtYXAnLCAndGVhbScsICdmYXEnLCAnY29udGFjdCcsICcnXSxcbiAgICBtZW51OiAnI21lbnUnLFxuICAgIHNsaWRlc05hdmlnYXRpb246IGZhbHNlLFxuICAgIGxhenlMb2FkOiB0cnVlLFxuICB9KTtcblxuICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNoYXJ0XCIpO1xuXG4gIHZhciBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgIHR5cGU6ICdwaWUnLFxuICAgIGRhdGE6IHdpbmRvdy5jaGFydERhdGEsXG4gICAgb3B0aW9uczoge1xuICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgbGFiZWw6ICh0b29sdGlwSXRlbSkgPT4gdG9vbHRpcEl0ZW0ubGFiZWwgKyAnICcgKyB0b29sdGlwSXRlbS5wYXJzZWQgKyAnJScsXG4gICAgICAgICAgICBsYWJlbFRleHRDb2xvcjogKCkgPT4gXCIjMGIwYjQ1XCIsXG4gICAgICAgICAgICBsYWJlbENvbG9yOiAoKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7fVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJvcmRlckNvbG9yOiBcIiNmZmZcIixcbiAgICAgIGhvdmVyQmFja2dyb3VuZENvbG9yOiBcIiNhZWQ0ZjBcIixcbiAgICAgIG9uSG92ZXI6IChldmVudCwgYSwgYikgPT4ge1xuICAgICAgICBpZiAoYi50b29sdGlwLmRhdGFQb2ludHMpIHtcbiAgICAgICAgICAkKFwiLmEtY2hhcnQtYm94XCIpLnJlbW92ZUNsYXNzKFwiYS1jaGFydC1ib3gtLWFjdGl2ZVwiKTtcbiAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PSBcIm1vdXNlbW92ZVwiKSB7XG4gICAgICAgICAgICAkKGBbZGF0YS10aXRsZT1cIiR7Yi50b29sdGlwLmRhdGFQb2ludHNbMF0ubGFiZWx9XCJdYCkuYWRkQ2xhc3MoXCJhLWNoYXJ0LWJveC0tYWN0aXZlXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgJChkb2N1bWVudClcbiAgICAub24oJ21vdXNlbGVhdmUgbW91c2VvdXQnLCBcIiNteUNoYXJ0XCIsICgpID0+IHtcbiAgICAgICQoXCIuYS1jaGFydC1ib3hcIikubWFwKChpbmRleCwgaXRlbSkgPT4gJChpdGVtKS5yZW1vdmVDbGFzcyhcImEtY2hhcnQtYm94LS1hY3RpdmVcIikpXG4gICAgfSlcbiAgICAub24oJ21vdXNlZW50ZXIgbW91c2VvdmVyJywgXCIuby10b2tlbnNcIiwgKCkgPT4ge1xuICAgICAgJChcIi5hLWNoYXJ0LWJveFwiKS5tYXAoKGluZGV4LCBpdGVtKSA9PiAkKGl0ZW0pLnJlbW92ZUNsYXNzKFwiYS1jaGFydC1ib3gtLWFjdGl2ZVwiKSlcbiAgICB9KVxuXG59KTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExhenlMb2FkIHtcblxuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuXG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAkKGRvY3VtZW50KS5vbihcImxhenliZWZvcmV1bnZlaWxcIiwgdGhpcy5vcHRpb25zLnNwZWVjaEJ1dHRvbiwgZXZlbnQgPT4gdGhpcy5vbkxhenlCZWZvcmVVbnZlaWwoZXZlbnQpKTtcblxuICB9XG5cbiAgb25MYXp5QmVmb3JlVW52ZWlsKGV2ZW50KSB7XG4gICAgY29uc3QgbGF6eUVsZW1lbnQgPSAkKGV2ZW50LnRhcmdldCk7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGxhenlFbGVtZW50LmF0dHIoIFwiZGF0YS1iYWNrZ3JvdW5kXCIgKTtcbiAgICBpZiAoIGJhY2tncm91bmQgKSB7XG4gICAgICBsYXp5RWxlbWVudC5jc3Moe1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiYWNrZ3JvdW5kfSlgXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxubmV3IExhenlMb2FkKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdGlja3kgZXh0ZW5kcyBIZWFkcm9vbSB7XG5cbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICBjb25zdCAkZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgcHJlZml4OiAnc3RpY2t5JyxcbiAgICAgIHRvbGVyYW5jZToge1xuICAgICAgICBkb3duIDogMTAsXG4gICAgICAgIHVwIDogMFxuICAgICAgfSxcbiAgICAgIG9mZnNldCA6IDY0XG4gICAgfTtcblxuICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgb3B0aW9ucy5jbGFzc2VzID0ge1xuICAgICAgaW5pdGlhbCA6IGAke29wdGlvbnMucHJlZml4fWAsXG4gICAgICBwaW5uZWQgOiBgJHtvcHRpb25zLnByZWZpeH0tLXBpbm5lZGAsXG4gICAgICB1bnBpbm5lZCA6IGAke29wdGlvbnMucHJlZml4fS0tdW5waW5uZWRgLFxuICAgICAgdG9wIDogYCR7b3B0aW9ucy5wcmVmaXh9LS10b3BgLFxuICAgICAgbm90VG9wIDogYCR7b3B0aW9ucy5wcmVmaXh9LS1ub3QtdG9wYCxcbiAgICAgIGJvdHRvbSA6IGAke29wdGlvbnMucHJlZml4fS0tYm90dG9tYCxcbiAgICAgIG5vdEJvdHRvbSA6IGAke29wdGlvbnMucHJlZml4fS0tbm90LWJvdHRvbWBcbiAgICB9XG5cbiAgICBzdXBlcigkZWwuZ2V0KDApLCBvcHRpb25zKTtcbiAgICBzdXBlci5pbml0KCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IEdlbmVyYWwgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2Fzc2V0cy9zY3JpcHRzL0dlbmVyYWwnO1xuaW1wb3J0IExhenlMb2FkICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hc3NldHMvc2NyaXB0cy9MYXp5TG9hZCc7XG5cbmltcG9ydCBGb3JtSW5wdXQgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXRvbXMvRm9ybUlucHV0L0Zvcm1JbnB1dCc7XG5pbXBvcnQgRm9ybVRleHRhcmVhICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2F0b21zL0Zvcm1UZXh0YXJlYS9Gb3JtVGV4dGFyZWEnO1xuaW1wb3J0IEhhbWJ1cmdlciAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hdG9tcy9IYW1idXJnZXIvSGFtYnVyZ2VyJztcbmltcG9ydCBTY3JvbGxEb3duICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXRvbXMvU2Nyb2xsRG93bi9TY3JvbGxEb3duJztcblxuaW1wb3J0IEFjY29yZGlvbiAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvQWNjb3JkaW9uL0FjY29yZGlvbic7XG5pbXBvcnQgTW9kYWwgICAgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9Nb2RhbC9Nb2RhbCc7XG5pbXBvcnQgVGFiRGVmYXVsdCAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL1RhYkRlZmF1bHQvVGFiRGVmYXVsdCc7XG5pbXBvcnQgVGltZWxpbmUgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9UaW1lbGluZS9UaW1lbGluZSc7XG5cbmltcG9ydCBIZWFkZXIgICAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvb3JnYW5pc21zL0hlYWRlci9IZWFkZXInO1xuXG5jb25zdCBDb21wb25lbnRzID0ge1xuICBMYXp5TG9hZCxcblxuICBGb3JtSW5wdXQsXG4gIEZvcm1UZXh0YXJlYSxcbiAgSGFtYnVyZ2VyLFxuICBTY3JvbGxEb3duLFxuXG4gIEFjY29yZGlvbixcbiAgTW9kYWwsXG4gIFRhYkRlZmF1bHQsXG4gIFRpbWVsaW5lLFxuICBcbiAgSGVhZGVyLFxufTtcblxuZnVuY3Rpb24gYnVpbGRDb21wb25lbnQoIHRoYXQsIHR5cGUsIGRhdGEgKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSBkYXRhIHx8IHt9O1xuICBsZXQgQ29tcG9uZW50ID0gQ29tcG9uZW50c1t0eXBlXTtcbiAgaWYgKCBDb21wb25lbnQgKSB7XG4gICAgQ29tcG9uZW50ID0gbmV3IENvbXBvbmVudCgkKHRoYXQpLCBvcHRpb25zKTtcbiAgICB0aGF0LnNldENvbXBvbmVudCggdHlwZSwgQ29tcG9uZW50KTtcbiAgICAkKHRoYXQpLmRhdGEoYGNvbXBvbmVudCR7dHlwZX1gLCBDb21wb25lbnQpLnJlbW92ZUF0dHIoXCJkYXRhLWNvbXBvbmVudFwiKS5yZW1vdmVEYXRhKFwiY29tcG9uZW50XCIpO1xuICB9XG59XG5cbkhUTUxFbGVtZW50LnByb3RvdHlwZS5nZXRDb21wb25lbnQgPSBmdW5jdGlvbiggdHlwZSApIHtcbiAgY29uc3QgQ29tcG9uZW50ID0gdGhpc1sgdHlwZSBdO1xuICBpZiAoIENvbXBvbmVudCApIHtcbiAgICByZXR1cm4gQ29tcG9uZW50O1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbkhUTUxFbGVtZW50LnByb3RvdHlwZS5zZXRDb21wb25lbnQgPSBmdW5jdGlvbiggdHlwZSwgQ29tcG9uZW50ICkge1xuICB0aGlzW3R5cGVdID0gQ29tcG9uZW50O1xufVxuXG53aW5kb3cuaW5pdGlhdGVDb21wb25lbnRzID0gZnVuY3Rpb24oKSB7XG4gICQoJ1tkYXRhLWNvbXBvbmVudF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGRhdGEgPSAkKCB0aGlzICkuZGF0YSgnY29tcG9uZW50Jyk7XG4gICAgaWYgKCBBcnJheS5pc0FycmF5KCBkYXRhICkgKSB7XG4gICAgICBmb3IoIHZhciBpIGluIGRhdGEgKSB7XG4gICAgICAgIGJ1aWxkQ29tcG9uZW50KCB0aGlzLCBkYXRhW2ldLnR5cGUsIGRhdGFbaV0gKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCB0eXBlb2YgZGF0YSA9PSBcIm9iamVjdFwiICkge1xuICAgICAgYnVpbGRDb21wb25lbnQoIHRoaXMsIGRhdGEudHlwZSwgZGF0YSApO1xuICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBkYXRhID09IFwic3RyaW5nXCIgKSB7XG4gICAgICBidWlsZENvbXBvbmVudCggdGhpcywgZGF0YSwgJCggdGhpcyApLmRhdGEoKSApO1xuICAgIH1cblxuICB9KTtcbn1cblxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4gaW5pdGlhdGVDb21wb25lbnRzKCkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUlucHV0IHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBzZWxlY3RvcjogXCI+IGlucHV0XCIsXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRzZWxlY3RvciA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnNlbGVjdG9yKTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJmb2N1cyBibHVyXCIsIHRoaXMub3B0aW9ucy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5vblRvZ2dsZVNocmluayhldmVudCkpXG4gICAgICAub24oXCJpbnB1dCBjaGFuZ2VcIiwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLm9uQ2hhbmdlKGV2ZW50KSk7XG5cbiAgICBpZiAodGhpcy5pc0ZpbGxlZCh0aGlzLiRzZWxlY3RvcikpIHtcbiAgICAgIHRoaXMuJHNlbGVjdG9yLmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRydWUpO1xuICAgICAgdGhpcy4kc2VsZWN0b3IuZGF0YShcImRpcnR5LWltcG9ydGFudFwiLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBvblRvZ2dsZVNocmluayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xuICAgIGlmICh0aGlzLmlzRmlsbGVkKHRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0LmRhdGEoXCJkaXJ0eS1pbXBvcnRhbnRcIikpIHtcbiAgICAgIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0cnVlKTtcbiAgICAgIHRhcmdldC5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIiwgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIpID09PSB0cnVlKTtcbiAgICB9XG4gIH1cblxuXG4gIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XG5cbiAgICB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIiwgdGFyZ2V0LmRhdGEoXCJkaXJ0eS1pbXBvcnRhbnRcIikgPyB0cnVlIDogdGhpcy5pc0ZpbGxlZCh0YXJnZXQpKVxuICAgIHRhcmdldC5hdHRyKFwidmFsdWVcIiwgdGFyZ2V0LnZhbCgpKTtcbiAgfVxuXG4gIGhhc1ZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgIShBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApO1xuICB9XG5cbiAgaXNGaWxsZWQoZWwpIHtcbiAgICByZXR1cm4gZWwgJiYgKHRoaXMuaGFzVmFsdWUoZWwudmFsKCkpICYmIGVsLnZhbCgpICE9PSBcIlwiKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVRleHRhcmVhIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBzZWxlY3RvcjogXCI+IHRleHRhcmVhXCJcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJHNlbGVjdG9yID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuc2VsZWN0b3IpO1xuXG4gICAgdGhpcy4kZWxcbiAgICAgIC5vbihcImZvY3VzIGJsdXJcIiwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLm9uVG9nZ2xlU2hyaW5rKGV2ZW50KSlcbiAgICAgIC5vbihcImlucHV0IGNoYW5nZVwiLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMub25DaGFuZ2UoZXZlbnQpKVxuICAgIDtcbiAgfVxuXG4gIG9uVG9nZ2xlU2hyaW5rKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XG4gICAgaWYgKHRoaXMuaXNGaWxsZWQodGFyZ2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICggdGFyZ2V0LmRhdGEoXCJkaXJ0eS1pbXBvcnRhbnRcIikpIHtcbiAgICAgIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0cnVlKTtcbiAgICAgIHRhcmdldC5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIiwgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIpID09PSB0cnVlKTtcbiAgICB9XG4gIH1cblxuXG4gIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XG5cbiAgICB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIiwgdGFyZ2V0LmRhdGEoXCJkaXJ0eS1pbXBvcnRhbnRcIikgPyAgdHJ1ZSA6IHRoaXMuaXNGaWxsZWQodGFyZ2V0KSlcblxuICAgIHRhcmdldC5hdHRyKFwidmFsdWVcIiwgdGFyZ2V0LnZhbCgpKTtcblxuICB9XG5cbiAgaGFzVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAhKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCk7XG4gIH1cblxuICBpc0ZpbGxlZChlbCkge1xuICAgIHJldHVybiBlbCAmJiAodGhpcy5oYXNWYWx1ZShlbC52YWwoKSkgJiYgZWwudmFsKCkgIT09IFwiXCIpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIYW1idXJnZXIge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGNsYXNzTmFtZTogXCJhLWhhbWJ1cmdlci0tb3BlblwiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRlbC5vbihcImNsaWNrXCIsIChldmVudCkgPT4gdGhpcy5vbkNsaWNrKGV2ZW50KSk7XG4gIH1cblxuICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLiRlbC50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuY2xhc3NOYW1lKTtcbiAgICB0aGlzLiRlbC50cmlnZ2VyKFwiaGFtYnVyZ2VyLmNsaWNrXCIpO1xuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbERvd24ge1xuICAgIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgICB0aGlzLiRlbCA9IGVsO1xuICBcbiAgICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICBzZWxlY3RvcjogXCI+IGlucHV0XCIsXG4gICAgICB9O1xuICBcbiAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gIFxuICAgICAgdGhpcy4kc2VsZWN0b3IgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5zZWxlY3Rvcik7XG4gIFxuICAgICAgdGhpcy4kZWxcbiAgICAgICAgLm9uKFwiZm9jdXMgYmx1clwiLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMub25DbGljayhldmVudCkpO1xuICAgIH1cbiAgXG4gICAgb25DbGljayhldmVudCkge1xuICAgICAgY29uc29sZS5sb2coZXZlbnQpXG4gICAgfVxuICB9XG4gICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY29yZGlvbiB7XG5cbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcblxuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIFwiYWNjb3JkaW9uSGVhZHNcIjogXCI+IC5tLWFjY29yZGlvbl9fY29udGFpbmVyIC5tLWFjY29yZGlvbl9faGVhZFwiLFxuICAgICAgXCJhY2NvcmRpb25Cb2RpZXNcIjogXCI+IC5tLWFjY29yZGlvbl9fY29udGFpbmVyIC5tLWFjY29yZGlvbl9fYm9keVwiLFxuICAgICAgXCJhY3RpdmVDbGFzc1wiOiBcIm0tYWNjb3JkaW9uX19oZWFkLS1hY3RpdmVcIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5hY2NvcmRpb25IZWFkcyA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLmFjY29yZGlvbkhlYWRzKTtcbiAgICB0aGlzLmFjY29yZGlvbkJvZGllcyA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLmFjY29yZGlvbmJvZGllcyk7XG4gICAgdGhpcy5hY3RpdmVDbGFzcyA9IHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcztcbiAgICB0aGlzLnNob3dPbmx5T25lID0gdGhpcy5vcHRpb25zLnNob3dPbmx5T25lO1xuXG4gICAgdGhpcy4kZWwub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uSGVhZHMsIChlKSA9PiB0aGlzLm9uQ2xpY2soZSkpO1xuICB9XG5cbiAgb25DbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuY3VyclRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcblxuICAgIGlmICh0aGlzLnNob3dPbmx5T25lKSB7XG4gICAgICBpZiAodGhpcy5jdXJyVGFyZ2V0Lmhhc0NsYXNzKHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcykpIHtcbiAgICAgICAgdGhpcy5jdXJyVGFyZ2V0LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFjY29yZGlvbkhlYWRzLnJlbW92ZUNsYXNzKHRoaXMuYWN0aXZlQ2xhc3MpO1xuICAgICAgICB0aGlzLmN1cnJUYXJnZXQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyVGFyZ2V0LnRvZ2dsZUNsYXNzKHRoaXMuYWN0aXZlQ2xhc3MpO1xuICAgIH1cblxuICAgIHRoaXMuJGVsLnRyaWdnZXIoXCJhY2NvcmRpb24uY2hhbmdlXCIpO1xuICB9XG5cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIG9uTG9hZDogZmFsc2VcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMub25Mb2FkKSB7XG4gICAgICByZXR1cm4gJC5mYW5jeWJveC5vcGVuKGVsLmdldCgwKSk7XG4gICAgfVxuXG4gIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiRGVmYXVsdCB7XG5cbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcblxuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIFwiY29udGFpbmVyXCI6IFwiLm0tdGFiLWRlZmF1bHRcIixcbiAgICAgIFwidGFiSXRlbXNcIjogXCI+IC5tLXRhYi1kZWZhdWx0X19pdGVtcyAubS10YWItZGVmYXVsdF9faXRlbXMtLWRlc2NcIixcbiAgICAgIFwidGFiUGFuZXNcIjogXCI+IC5tLXRhYi1kZWZhdWx0X19wYW5lcyAubS10YWItZGVmYXVsdF9fcGFuZVwiLFxuICAgICAgXCJhY3RpdmVUYWJJdGVtQ2xhc3NcIjogXCJtLXRhYi1kZWZhdWx0X19pdGVtLS1hY3RpdmVcIixcbiAgICAgIFwiYWN0aXZlVGFiUGFuZUNsYXNzXCI6IFwibS10YWItZGVmYXVsdF9fcGFuZS0tYWN0aXZlXCIsXG4gICAgICBcImluQWN0aXZlVGFiUGFuZUNsYXNzXCI6IFwibS10YWItZGVmYXVsdF9fcGFuZS0taW5hY3RpdmVcIixcbiAgICAgIGFjdGl2ZUluZGV4OiAwLFxuICAgICAgc2VsZWN0OiBcIi5hLXNlbGVjdFwiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLnRhYkl0ZW1zID0gdGhpcy4kZWwuZmluZCggdGhpcy5vcHRpb25zLnRhYkl0ZW1zICk7XG4gICAgdGhpcy50YWJQYW5lcyA9IHRoaXMuJGVsLmZpbmQoIHRoaXMub3B0aW9ucy50YWJQYW5lcyApO1xuXG4gICAgdGhpcy4kZWxcbiAgICAgIC5vbihcImNsaWNrXCIsIGAke3RoaXMub3B0aW9ucy50YWJJdGVtc30gYWAsIChlKSA9PiB0aGlzLm9uQ2xpY2soZSkpXG4gICAgICAub24oXCJjaGFuZ2VcIiwgdGhpcy5vcHRpb25zLnNlbGVjdCwgKGV2ZW50KSA9PiB0aGlzLm9uQ2hhbmdlKGV2ZW50KSlcbiAgICA7XG5cbiAgICB0aGlzLnNldEFjdGl2ZSggdGhpcy5vcHRpb25zLmFjdGl2ZUluZGV4ICk7XG4gIH1cblxuICBvbkNsaWNrICggZSApIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW5kZXggPSAkKGUuY3VycmVudFRhcmdldCkucGFyZW50KCkucGFyZW50KCkuaW5kZXgoKTtcbiAgICB0aGlzLnNldEFjdGl2ZSggaW5kZXggKTtcbiAgICAkKGRvY3VtZW50KS50cmlnZ2VyKFwidGFiLnNob3dcIiwgaW5kZXgpXG4gIH1cblxuICBvbkNoYW5nZSAoIGV2ZW50ICkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW5kZXggPSAkKGV2ZW50LnRhcmdldCkudmFsKCk7XG4gICAgdGhpcy5zZXRBY3RpdmUoIGluZGV4ICk7XG4gIH1cblxuICBzZXRBY3RpdmUoIGluZGV4ICkge1xuICAgIHRoaXMub3B0aW9ucy5hY3RpdmVJbmRleCA9IGluZGV4O1xuXG4gICAgdGhpcy50YWJJdGVtc1xuICAgICAgLnJlbW92ZUNsYXNzKCB0aGlzLm9wdGlvbnMuYWN0aXZlVGFiSXRlbUNsYXNzIClcbiAgICAgIC5lcSggaW5kZXggKVxuICAgICAgLmFkZENsYXNzKCB0aGlzLm9wdGlvbnMuYWN0aXZlVGFiSXRlbUNsYXNzICk7XG5cbiAgICB0aGlzLnRhYlBhbmVzXG4gICAgICAuZmlsdGVyKCBgLiR7dGhpcy5vcHRpb25zLmFjdGl2ZVRhYlBhbmVDbGFzc31gIClcbiAgICAgIC5hZGRDbGFzcyggdGhpcy5vcHRpb25zLmluQWN0aXZlVGFiUGFuZUNsYXNzICk7XG5cbiAgICB0aGlzLnRhYlBhbmVzXG4gICAgICAucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9ucy5hY3RpdmVUYWJQYW5lQ2xhc3MgKVxuICAgICAgLmVxKCBpbmRleCApXG4gICAgICAuYWRkQ2xhc3MoIHRoaXMub3B0aW9ucy5hY3RpdmVUYWJQYW5lQ2xhc3MgKVxuICAgICAgLmZpbHRlciggYC4ke3RoaXMub3B0aW9ucy5pbkFjdGl2ZVRhYlBhbmVDbGFzc31gIClcbiAgICAgIC5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb25zLmluQWN0aXZlVGFiUGFuZUNsYXNzICk7XG5cbiAgfVxuXG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVsaW5lIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBidXR0b25zOiB7XG4gICAgICAgIGxlZnQ6IFwiLm0tdGltZWxpbmVfX2NvbnRyb2wtLWxlZnRcIixcbiAgICAgICAgcmlnaHQ6IFwiLm0tdGltZWxpbmVfX2NvbnRyb2wtLXJpZ2h0XCJcbiAgICAgIH0sXG4gICAgICB0aW1lbGluZUJveDogXCIubS10aW1lbGluZV9fY29udGVudCBsaVwiLFxuICAgICAgY2FyZDogXCIubS1jYXJkLXRpbWVsaW5lXCIsXG4gICAgICBwcm9ncmVzc2JhcjogXCIubS10aW1lbGluZS1wcm9ncmVzc19fYmFyXCJcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJHRpbWVsaW5lQm94ID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMudGltZWxpbmVCb3gpO1xuICAgIHRoaXMuJGNhcmQgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5jYXJkKTtcbiAgICB0aGlzLiRsZWZ0QnV0dG9uID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuYnV0dG9ucy5sZWZ0KTtcbiAgICB0aGlzLiRyaWdodEJ1dHRvbiA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLmJ1dHRvbnMucmlnaHQpO1xuICAgIHRoaXMuJHByb2dyZXNzYmFyID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMucHJvZ3Jlc3NiYXIpO1xuXG4gICAgdGhpcy5lbFdpZHRoID0gdGhpcy4kZWxbMF0uc2Nyb2xsV2lkdGg7XG4gICAgdGhpcy5jYXJkU2l6ZSA9IDI2ODtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5vbkluaXQoKSwgMTAwKTtcblxuXG4gICAgdGhpcy4kZWxcbiAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5idXR0b25zLnJpZ2h0LCBldmVudCA9PiB0aGlzLm9uQ2xpY2tSaWdodChldmVudCkpXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuYnV0dG9ucy5sZWZ0LCBldmVudCA9PiB0aGlzLm9uQ2xpY2tMZWZ0KGV2ZW50KSlcbiAgICAgIC5vbihcInNjcm9sbFwiLCAoKSA9PiB0aGlzLnNjcm9sbENoZWNrKCkpXG4gIH1cblxuICBvbkluaXQoKSB7XG4gICAgdGhpcy5jYXJkU2l6ZSA9IHRoaXMuJGNhcmQuaW5uZXJXaWR0aCgpO1xuXG4gICAgdGhpcy4kcHJvZ3Jlc3NiYXIud2lkdGgodGhpcy4kZWxbMF0uc2Nyb2xsV2lkdGggLSAxODIpXG4gIH1cblxuICBvbkNsaWNrUmlnaHQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGxlZnRQb3MgPSB0aGlzLiRlbC5zY3JvbGxMZWZ0KCk7XG4gICAgdGhpcy5jYXJkU2l6ZSA9IHRoaXMuJGNhcmQuaW5uZXJXaWR0aCgpO1xuXG4gICAgdGhpcy4kZWwuYW5pbWF0ZSh7XG4gICAgICBzY3JvbGxMZWZ0OiBsZWZ0UG9zICsgdGhpcy5jYXJkU2l6ZVxuICAgIH0sIDQwMCwgKCkgPT4gdGhpcy5zY3JvbGxDaGVjaygpKTtcbiAgfVxuXG4gIG9uQ2xpY2tMZWZ0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBsZWZ0UG9zID0gdGhpcy4kZWwuc2Nyb2xsTGVmdCgpO1xuICAgIHRoaXMuY2FyZFNpemUgPSB0aGlzLiRjYXJkLmlubmVyV2lkdGgoKTtcblxuICAgIHRoaXMuJGVsLmFuaW1hdGUoe1xuICAgICAgc2Nyb2xsTGVmdDogbGVmdFBvcyAtIHRoaXMuY2FyZFNpemVcbiAgICB9LCA0MDAsICgpID0+IHRoaXMuc2Nyb2xsQ2hlY2soKSk7XG4gIH1cblxuICBzY3JvbGxDaGVjaygpIHtcbiAgICBjb25zdCBsZWZ0UG9zID0gdGhpcy4kZWwuc2Nyb2xsTGVmdCgpO1xuICAgIHRoaXMuY2FyZFNpemUgPSB0aGlzLiRjYXJkLmlubmVyV2lkdGgoKTtcbiAgICBcbiAgICBpZiAobGVmdFBvcyA9PSAwKSB7XG4gICAgICAgIHRoaXMuJGxlZnRCdXR0b24uYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICB9XG5cbiAgICBpZiAobGVmdFBvcyA+IDApIHtcbiAgICAgICAgdGhpcy4kbGVmdEJ1dHRvbi5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgIH0gXG5cbiAgICBpZiAobGVmdFBvcyA+PSAodGhpcy5lbFdpZHRoIC0gMjUwKSkge1xuICAgICAgICB0aGlzLiRyaWdodEJ1dHRvbi5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgIH1cblxuICAgIGlmIChsZWZ0UG9zIDwgKHRoaXMuZWxXaWR0aCAtIDI1MCkpIHtcbiAgICAgICAgdGhpcy4kcmlnaHRCdXR0b24ucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBTdGlja3kgZnJvbSBcIi4uLy4uL2Fzc2V0cy9zY3JpcHRzL1N0aWNreVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBoYW1idXJnZXI6IFwiLmEtaGFtYnVyZ2VyXCIsXG4gICAgICBzaGFkb3c6IFwiLmEtc2hhZG93XCIsXG4gICAgICBuYXY6IHtcbiAgICAgICAgc2VsZjogXCIubS1uYXZcIixcbiAgICAgICAgdG9nZ2xlOiBcIm0tbmF2LS1vcGVuXCIsXG4gICAgICAgIGl0ZW06IFwibmF2ID4gdWwgPiBsaSBzcGFuXCIsXG4gICAgICAgIGFjdGl2ZTogXCJtLW5hdi0tYWN0aXZlXCIsXG4gICAgICB9LFxuICAgICAgc2VhcmNoOiB7XG4gICAgICAgIHNlbGY6IFwiLm0tc2VhcmNoLWJhclwiLFxuICAgICAgICB0cmlnZ2VyOiBcIi5qcy1zZWFyY2gtaGVhZGVyXCIsXG4gICAgICAgIGNsYXNzOiBcIm0tc2VhcmNoLWJhci0tb3BlblwiXG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRoYW1idXJnZXIgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5oYW1idXJnZXIpO1xuICAgIHRoaXMuJG5hdiA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLm5hdi5zZWxmKTtcbiAgICB0aGlzLiRzZWFyY2hCYXIgPSAkKHRoaXMub3B0aW9ucy5zZWFyY2guc2VsZik7XG4gICAgdGhpcy4kc2hhZG93ID0gJCh0aGlzLm9wdGlvbnMuc2hhZG93KTtcblxuICAgIHRoaXMuc3RpY2t5ID0gbmV3IFN0aWNreShlbCwge1xuICAgICAgcHJlZml4OiBcIm8taGVhZGVyXCIsXG4gICAgICBvblVucGluOiAoKSA9PiB0aGlzLm9uUGluU3RpY2t5KClcbiAgICB9KTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMubmF2Lml0ZW0sIGV2ZW50ID0+IHRoaXMub25DbGlja0Ryb3Bkb3duKGV2ZW50KSlcbiAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5zZWFyY2gudHJpZ2dlciwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrU2VhcmNoKGV2ZW50KSlcblxuICAgICQoZG9jdW1lbnQpXG4gICAgICAub24oXCJoYW1idXJnZXIuY2xpY2tcIiwgKGV2ZW50KSA9PiB0aGlzLm9uQ2xpY2tIYW1idXJnZXIoZXZlbnQpKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLnNoYWRvdywgKCkgPT4gdGhpcy5jbG9zZUFsbCgpKVxuXG4gIH1cblxuICBjbG9zZUFsbCgpIHtcbiAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMudG9nZ2xlKTtcbiAgICB0aGlzLiRoYW1idXJnZXIucmVtb3ZlQ2xhc3MoJ2EtaGFtYnVyZ2VyLS1vcGVuJylcbiAgICB0aGlzLiRzZWFyY2hCYXIucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnNlYXJjaC5jbGFzcylcbiAgICAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcygnZGlzYWJsZS1zY3JvbGwnKTtcbiAgfVxuXG4gIG9uQ2xpY2tEcm9wZG93bihldmVudCkge1xuICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIGlmICgkdGFyZ2V0Lm5leHQoXCJ1bFwiKS5sZW5ndGgpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCAkcGFyZW50ID0gJHRhcmdldC5wYXJlbnQoKTtcblxuICAgICAgaWYgKCEkcGFyZW50Lmhhc0NsYXNzKHRoaXMub3B0aW9ucy5uYXYuYWN0aXZlKSkge1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5uYXYuaXRlbSkucGFyZW50KCkucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLm5hdi5hY3RpdmUpXG4gICAgICAgICRwYXJlbnQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLm5hdi5hY3RpdmUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkcGFyZW50LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5uYXYuYWN0aXZlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgb25DbGlja1NlYXJjaChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIHRoaXMuJHNlYXJjaEJhci50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuc2VhcmNoLmNsYXNzKVxuICAgIHRoaXMuJG5hdi5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMubmF2LnRvZ2dsZSk7XG4gICAgdGhpcy4kaGFtYnVyZ2VyLnJlbW92ZUNsYXNzKCdhLWhhbWJ1cmdlci0tb3BlbicpO1xuXG4gICAgaWYgKHRoaXMuJHNlYXJjaEJhci5oYXNDbGFzcyh0aGlzLm9wdGlvbnMuc2VhcmNoLmNsYXNzKSl7XG4gICAgICAkKFwiaHRtbFwiKS5hZGRDbGFzcygnZGlzYWJsZS1zY3JvbGwnKTtcbiAgICAgIHRoaXMuJGVsLmFkZENsYXNzKCdvLWhlYWRlci0tb3BlbmVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgJChcImh0bWxcIikucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUtc2Nyb2xsJyk7XG4gICAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcygnby1oZWFkZXItLW9wZW5lZCcpXG4gICAgfVxuICB9XG5cbiAgb25DbGlja0hhbWJ1cmdlcihldmVudCkge1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICBpZiAod2luZG93V2lkdGggPCAxMDI1KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLiRuYXYudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLm5hdi50b2dnbGUpO1xuICAgICAgdGhpcy4kc2VhcmNoQmFyLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5zZWFyY2guY2xhc3MpO1xuXG4gICAgICBpZiAodGhpcy4kbmF2Lmhhc0NsYXNzKHRoaXMub3B0aW9ucy5uYXYudG9nZ2xlKSl7XG4gICAgICAgICQoXCJodG1sXCIpLmFkZENsYXNzKCdkaXNhYmxlLXNjcm9sbCcpO1xuICAgICAgICB0aGlzLiRlbC5hZGRDbGFzcygnby1oZWFkZXItLW9wZW5lZCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcygnZGlzYWJsZS1zY3JvbGwnKTtcbiAgICAgICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoJ28taGVhZGVyLS1vcGVuZWQnKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19
