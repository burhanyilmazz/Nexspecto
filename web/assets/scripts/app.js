(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/createClass":2,"@babel/runtime/helpers/interopRequireDefault":3}],7:[function(require,module,exports){
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

},{"../../../src/assets/scripts/General":5,"../../../src/assets/scripts/LazyLoad":6,"../../../src/atoms/FormInput/FormInput":8,"../../../src/atoms/FormTextarea/FormTextarea":9,"../../../src/atoms/Hamburger/Hamburger":10,"../../../src/atoms/ScrollDown/ScrollDown":11,"../../../src/molecules/Accordion/Accordion":12,"../../../src/molecules/Modal/Modal":13,"../../../src/molecules/TabDefault/TabDefault":14,"../../../src/molecules/Timeline/Timeline":15,"../../../src/organisms/Header/Header":16,"@babel/runtime/helpers/interopRequireDefault":3,"@babel/runtime/helpers/typeof":4}],8:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/createClass":2,"@babel/runtime/helpers/interopRequireDefault":3}],9:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/createClass":2,"@babel/runtime/helpers/interopRequireDefault":3}],10:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/createClass":2,"@babel/runtime/helpers/interopRequireDefault":3}],11:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/createClass":2,"@babel/runtime/helpers/interopRequireDefault":3}],12:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/createClass":2,"@babel/runtime/helpers/interopRequireDefault":3}],13:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/interopRequireDefault":3}],14:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/createClass":2,"@babel/runtime/helpers/interopRequireDefault":3}],15:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/createClass":2,"@babel/runtime/helpers/interopRequireDefault":3}],16:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

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

},{"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/createClass":2,"@babel/runtime/helpers/interopRequireDefault":3}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwic3JjL2Fzc2V0cy9zY3JpcHRzL0dlbmVyYWwuZXM2Iiwic3JjL2Fzc2V0cy9zY3JpcHRzL0xhenlMb2FkLmVzNiIsInNyYy9hc3NldHMvc2NyaXB0cy9hcHAuanMiLCJzcmMvYXRvbXMvRm9ybUlucHV0L0Zvcm1JbnB1dC5lczYiLCJzcmMvYXRvbXMvRm9ybVRleHRhcmVhL0Zvcm1UZXh0YXJlYS5lczYiLCJzcmMvYXRvbXMvSGFtYnVyZ2VyL0hhbWJ1cmdlci5lczYiLCJzcmMvYXRvbXMvU2Nyb2xsRG93bi9TY3JvbGxEb3duLmVzNiIsInNyYy9tb2xlY3VsZXMvQWNjb3JkaW9uL0FjY29yZGlvbi5lczYiLCJzcmMvbW9sZWN1bGVzL01vZGFsL01vZGFsLmVzNiIsInNyYy9tb2xlY3VsZXMvVGFiRGVmYXVsdC9UYWJEZWZhdWx0LmVzNiIsInNyYy9tb2xlY3VsZXMvVGltZWxpbmUvVGltZWxpbmUuZXM2Iiwic3JjL29yZ2FuaXNtcy9IZWFkZXIvSGVhZGVyLmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDckJBLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWSxLQUFaLENBQWtCLFlBQU07QUFDdEIsRUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQixRQUFyQixDQUE4QjtBQUM1QixJQUFBLE9BQU8sRUFBRSxLQURtQjtBQUU1QixJQUFBLFFBQVEsRUFBRTtBQUZrQixHQUE5QjtBQUtBLE1BQUksVUFBVSxHQUFHLElBQUksUUFBSixDQUFhLFdBQWIsRUFBMEI7QUFDekMsSUFBQSxhQUFhLEVBQUUsQ0FBQyxTQUFELEVBQVksTUFBWixFQUFvQixTQUFwQixFQUErQixNQUEvQixFQUF1QyxTQUF2QyxFQUFrRCxTQUFsRCxFQUE2RCxTQUE3RCxFQUF3RSxTQUF4RSxFQUFtRixNQUFuRixDQUQwQjtBQUV6QyxJQUFBLE9BQU8sRUFBRSxDQUFDLEVBQUQsRUFBSyxTQUFMLEVBQWdCLE9BQWhCLEVBQXlCLFFBQXpCLEVBQW1DLFNBQW5DLEVBQThDLE1BQTlDLEVBQXNELEtBQXRELEVBQTZELFNBQTdELEVBQXdFLEVBQXhFLENBRmdDO0FBR3pDLElBQUEsSUFBSSxFQUFFLE9BSG1DO0FBSXpDLElBQUEsZ0JBQWdCLEVBQUUsS0FKdUI7QUFLekMsSUFBQSxRQUFRLEVBQUU7QUFMK0IsR0FBMUIsQ0FBakI7QUFRQSxNQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixTQUF4QixDQUFWO0FBRUEsTUFBSSxPQUFPLEdBQUcsSUFBSSxLQUFKLENBQVUsR0FBVixFQUFlO0FBQzNCLElBQUEsSUFBSSxFQUFFLEtBRHFCO0FBRTNCLElBQUEsSUFBSSxFQUFFLE1BQU0sQ0FBQyxTQUZjO0FBRzNCLElBQUEsT0FBTyxFQUFFO0FBQ1AsTUFBQSxVQUFVLEVBQUUsSUFETDtBQUVQLE1BQUEsT0FBTyxFQUFFO0FBQ1AsUUFBQSxNQUFNLEVBQUU7QUFDTixVQUFBLE9BQU8sRUFBRTtBQURILFNBREQ7QUFJUCxRQUFBLEtBQUssRUFBRTtBQUNMLFVBQUEsT0FBTyxFQUFFO0FBREosU0FKQTtBQU9QLFFBQUEsT0FBTyxFQUFFO0FBQ1AsVUFBQSxlQUFlLEVBQUUsTUFEVjtBQUVQLFVBQUEsU0FBUyxFQUFFO0FBQ1QsWUFBQSxLQUFLLEVBQUUsZUFBQyxXQUFEO0FBQUEscUJBQWlCLFdBQVcsQ0FBQyxLQUFaLEdBQW9CLEdBQXBCLEdBQTBCLFdBQVcsQ0FBQyxNQUF0QyxHQUErQyxHQUFoRTtBQUFBLGFBREU7QUFFVCxZQUFBLGNBQWMsRUFBRTtBQUFBLHFCQUFNLFNBQU47QUFBQSxhQUZQO0FBR1QsWUFBQSxVQUFVLEVBQUUsc0JBQU07QUFDaEIscUJBQU8sRUFBUDtBQUNEO0FBTFE7QUFGSjtBQVBGLE9BRkY7QUFxQlAsTUFBQSxXQUFXLEVBQUUsTUFyQk47QUFzQlAsTUFBQSxvQkFBb0IsRUFBRSxTQXRCZjtBQXVCUCxNQUFBLE9BQU8sRUFBRSxpQkFBQyxLQUFELEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBaUI7QUFDeEIsWUFBSSxDQUFDLENBQUMsT0FBRixDQUFVLFVBQWQsRUFBMEI7QUFDeEIsVUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCLFdBQWxCLENBQThCLHFCQUE5Qjs7QUFDQSxjQUFJLEtBQUssQ0FBQyxJQUFOLElBQWMsV0FBbEIsRUFBK0I7QUFDN0IsWUFBQSxDQUFDLHlCQUFpQixDQUFDLENBQUMsT0FBRixDQUFVLFVBQVYsQ0FBcUIsQ0FBckIsRUFBd0IsS0FBekMsU0FBRCxDQUFxRCxRQUFyRCxDQUE4RCxxQkFBOUQ7QUFDRDtBQUNGO0FBQ0Y7QUE5Qk07QUFIa0IsR0FBZixDQUFkO0FBcUNBLEVBQUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUNHLEVBREgsQ0FDTSxxQkFETixFQUM2QixVQUQ3QixFQUN5QyxZQUFNO0FBQzNDLElBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQixHQUFsQixDQUFzQixVQUFDLEtBQUQsRUFBUSxJQUFSO0FBQUEsYUFBaUIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLFdBQVIsQ0FBb0IscUJBQXBCLENBQWpCO0FBQUEsS0FBdEI7QUFDRCxHQUhILEVBSUcsRUFKSCxDQUlNLHNCQUpOLEVBSThCLFdBSjlCLEVBSTJDLFlBQU07QUFDN0MsSUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCLEdBQWxCLENBQXNCLFVBQUMsS0FBRCxFQUFRLElBQVI7QUFBQSxhQUFpQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsV0FBUixDQUFvQixxQkFBcEIsQ0FBakI7QUFBQSxLQUF0QjtBQUNELEdBTkg7QUFRRCxDQTdERDs7Ozs7Ozs7Ozs7Ozs7OztJQ0FxQixRO0FBRW5CLG9CQUFZLEVBQVosRUFBZ0IsT0FBaEIsRUFBeUI7QUFBQTs7QUFBQTtBQUV2QixTQUFLLEdBQUwsR0FBVyxFQUFYO0FBRUEsUUFBTSxRQUFRLEdBQUcsRUFBakI7QUFHQSxTQUFLLE9BQUwsR0FBZSxDQUFDLENBQUMsTUFBRixDQUFTLEVBQVQsRUFBYSxRQUFiLEVBQXVCLE9BQXZCLENBQWY7QUFFQSxJQUFBLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWSxFQUFaLENBQWUsa0JBQWYsRUFBbUMsS0FBSyxPQUFMLENBQWEsWUFBaEQsRUFBOEQsVUFBQSxLQUFLO0FBQUEsYUFBSSxLQUFJLENBQUMsa0JBQUwsQ0FBd0IsS0FBeEIsQ0FBSjtBQUFBLEtBQW5FO0FBRUQ7Ozs7V0FFRCw0QkFBbUIsS0FBbkIsRUFBMEI7QUFDeEIsVUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFQLENBQXJCO0FBQ0EsVUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLElBQVosQ0FBa0IsaUJBQWxCLENBQW5COztBQUNBLFVBQUssVUFBTCxFQUFrQjtBQUNoQixRQUFBLFdBQVcsQ0FBQyxHQUFaLENBQWdCO0FBQ2QsVUFBQSxlQUFlLGdCQUFTLFVBQVQ7QUFERCxTQUFoQjtBQUdEO0FBQ0Y7Ozs7OztBQUdILElBQUksUUFBSjs7Ozs7Ozs7O0FDMUJBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBLElBQU0sVUFBVSxHQUFHO0FBQ2pCLEVBQUEsUUFBUSxFQUFSLG9CQURpQjtBQUdqQixFQUFBLFNBQVMsRUFBVCxxQkFIaUI7QUFJakIsRUFBQSxZQUFZLEVBQVosd0JBSmlCO0FBS2pCLEVBQUEsU0FBUyxFQUFULHFCQUxpQjtBQU1qQixFQUFBLFVBQVUsRUFBVixzQkFOaUI7QUFRakIsRUFBQSxTQUFTLEVBQVQscUJBUmlCO0FBU2pCLEVBQUEsS0FBSyxFQUFMLGlCQVRpQjtBQVVqQixFQUFBLFVBQVUsRUFBVixzQkFWaUI7QUFXakIsRUFBQSxRQUFRLEVBQVIsb0JBWGlCO0FBYWpCLEVBQUEsTUFBTSxFQUFOO0FBYmlCLENBQW5COztBQWdCQSxTQUFTLGNBQVQsQ0FBeUIsSUFBekIsRUFBK0IsSUFBL0IsRUFBcUMsSUFBckMsRUFBNEM7QUFDMUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQXhCO0FBQ0EsTUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLElBQUQsQ0FBMUI7O0FBQ0EsTUFBSyxTQUFMLEVBQWlCO0FBQ2YsSUFBQSxTQUFTLEdBQUcsSUFBSSxTQUFKLENBQWMsQ0FBQyxDQUFDLElBQUQsQ0FBZixFQUF1QixPQUF2QixDQUFaO0FBQ0EsSUFBQSxJQUFJLENBQUMsWUFBTCxDQUFtQixJQUFuQixFQUF5QixTQUF6QjtBQUNBLElBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLElBQVIsb0JBQXlCLElBQXpCLEdBQWlDLFNBQWpDLEVBQTRDLFVBQTVDLENBQXVELGdCQUF2RCxFQUF5RSxVQUF6RSxDQUFvRixXQUFwRjtBQUNEO0FBQ0Y7O0FBRUQsV0FBVyxDQUFDLFNBQVosQ0FBc0IsWUFBdEIsR0FBcUMsVUFBVSxJQUFWLEVBQWlCO0FBQ3BELE1BQU0sU0FBUyxHQUFHLEtBQU0sSUFBTixDQUFsQjs7QUFDQSxNQUFLLFNBQUwsRUFBaUI7QUFDZixXQUFPLFNBQVA7QUFDRDs7QUFDRCxTQUFPLFNBQVA7QUFDRCxDQU5EOztBQVFBLFdBQVcsQ0FBQyxTQUFaLENBQXNCLFlBQXRCLEdBQXFDLFVBQVUsSUFBVixFQUFnQixTQUFoQixFQUE0QjtBQUMvRCxPQUFLLElBQUwsSUFBYSxTQUFiO0FBQ0QsQ0FGRDs7QUFJQSxNQUFNLENBQUMsa0JBQVAsR0FBNEIsWUFBVztBQUNyQyxFQUFBLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCLElBQXRCLENBQTJCLFlBQVc7QUFDcEMsUUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFFLElBQUYsQ0FBRCxDQUFVLElBQVYsQ0FBZSxXQUFmLENBQWI7O0FBQ0EsUUFBSyxLQUFLLENBQUMsT0FBTixDQUFlLElBQWYsQ0FBTCxFQUE2QjtBQUMzQixXQUFLLElBQUksQ0FBVCxJQUFjLElBQWQsRUFBcUI7QUFDbkIsUUFBQSxjQUFjLENBQUUsSUFBRixFQUFRLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUSxJQUFoQixFQUFzQixJQUFJLENBQUMsQ0FBRCxDQUExQixDQUFkO0FBQ0Q7QUFDRixLQUpELE1BSU8sSUFBSyx5QkFBTyxJQUFQLEtBQWUsUUFBcEIsRUFBK0I7QUFDcEMsTUFBQSxjQUFjLENBQUUsSUFBRixFQUFRLElBQUksQ0FBQyxJQUFiLEVBQW1CLElBQW5CLENBQWQ7QUFDRCxLQUZNLE1BRUEsSUFBSyxPQUFPLElBQVAsSUFBZSxRQUFwQixFQUErQjtBQUNwQyxNQUFBLGNBQWMsQ0FBRSxJQUFGLEVBQVEsSUFBUixFQUFjLENBQUMsQ0FBRSxJQUFGLENBQUQsQ0FBVSxJQUFWLEVBQWQsQ0FBZDtBQUNEO0FBRUYsR0FaRDtBQWFELENBZEQ7O0FBZ0JBLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWSxLQUFaLENBQWtCO0FBQUEsU0FBTSxrQkFBa0IsRUFBeEI7QUFBQSxDQUFsQjs7Ozs7Ozs7Ozs7Ozs7OztJQ3JFcUIsUztBQUNuQixxQkFBWSxFQUFaLEVBQWdCLE9BQWhCLEVBQXlCO0FBQUE7O0FBQUE7QUFDdkIsU0FBSyxHQUFMLEdBQVcsRUFBWDtBQUVBLFFBQU0sUUFBUSxHQUFHO0FBQ2YsTUFBQSxRQUFRLEVBQUU7QUFESyxLQUFqQjtBQUlBLFNBQUssT0FBTCxHQUFlLENBQUMsQ0FBQyxNQUFGLENBQVMsRUFBVCxFQUFhLFFBQWIsRUFBdUIsT0FBdkIsQ0FBZjtBQUVBLFNBQUssU0FBTCxHQUFpQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsS0FBSyxPQUFMLENBQWEsUUFBM0IsQ0FBakI7QUFFQSxTQUFLLEdBQUwsQ0FDRyxFQURILENBQ00sWUFETixFQUNvQixLQUFLLE9BQUwsQ0FBYSxRQURqQyxFQUMyQyxVQUFBLEtBQUs7QUFBQSxhQUFJLEtBQUksQ0FBQyxjQUFMLENBQW9CLEtBQXBCLENBQUo7QUFBQSxLQURoRCxFQUVHLEVBRkgsQ0FFTSxjQUZOLEVBRXNCLEtBQUssT0FBTCxDQUFhLFFBRm5DLEVBRTZDLFVBQUEsS0FBSztBQUFBLGFBQUksS0FBSSxDQUFDLFFBQUwsQ0FBYyxLQUFkLENBQUo7QUFBQSxLQUZsRDs7QUFJQSxRQUFJLEtBQUssUUFBTCxDQUFjLEtBQUssU0FBbkIsQ0FBSixFQUFtQztBQUNqQyxXQUFLLFNBQUwsQ0FBZSxJQUFmLENBQW9CLFlBQXBCLEVBQWtDLElBQWxDO0FBQ0EsV0FBSyxTQUFMLENBQWUsSUFBZixDQUFvQixpQkFBcEIsRUFBdUMsSUFBdkM7QUFDRDtBQUNGOzs7O1dBRUQsd0JBQWUsS0FBZixFQUFzQjtBQUNwQixNQUFBLEtBQUssQ0FBQyxjQUFOO0FBQ0EsVUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFQLENBQWhCOztBQUNBLFVBQUksS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFKLEVBQTJCO0FBQ3pCO0FBQ0Q7O0FBRUQsVUFBSSxNQUFNLENBQUMsSUFBUCxDQUFZLGlCQUFaLENBQUosRUFBb0M7QUFDbEMsUUFBQSxNQUFNLENBQUMsSUFBUCxDQUFZLFlBQVosRUFBMEIsSUFBMUI7QUFDQSxRQUFBLE1BQU0sQ0FBQyxJQUFQLENBQVksaUJBQVosRUFBK0IsSUFBL0I7QUFDRCxPQUhELE1BR087QUFDTCxRQUFBLE1BQU0sQ0FBQyxJQUFQLENBQVksWUFBWixFQUEwQixNQUFNLENBQUMsSUFBUCxDQUFZLFlBQVosTUFBOEIsSUFBeEQ7QUFDRDtBQUNGOzs7V0FHRCxrQkFBUyxLQUFULEVBQWdCO0FBQ2QsTUFBQSxLQUFLLENBQUMsY0FBTjtBQUNBLFVBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBUCxDQUFoQjtBQUVBLE1BQUEsTUFBTSxDQUFDLElBQVAsQ0FBWSxZQUFaLEVBQTBCLE1BQU0sQ0FBQyxJQUFQLENBQVksaUJBQVosSUFBaUMsSUFBakMsR0FBd0MsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFsRTtBQUNBLE1BQUEsTUFBTSxDQUFDLElBQVAsQ0FBWSxPQUFaLEVBQXFCLE1BQU0sQ0FBQyxHQUFQLEVBQXJCO0FBQ0Q7OztXQUVELGtCQUFTLEtBQVQsRUFBZ0I7QUFDZCxhQUFPLEtBQUssSUFBSSxJQUFULElBQWlCLEVBQUUsS0FBSyxDQUFDLE9BQU4sQ0FBYyxLQUFkLEtBQXdCLEtBQUssQ0FBQyxNQUFOLEtBQWlCLENBQTNDLENBQXhCO0FBQ0Q7OztXQUVELGtCQUFTLEVBQVQsRUFBYTtBQUNYLGFBQU8sRUFBRSxJQUFLLEtBQUssUUFBTCxDQUFjLEVBQUUsQ0FBQyxHQUFILEVBQWQsS0FBMkIsRUFBRSxDQUFDLEdBQUgsT0FBYSxFQUF0RDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNwRGtCLFk7QUFDbkIsd0JBQVksRUFBWixFQUFnQixPQUFoQixFQUF5QjtBQUFBOztBQUFBO0FBQ3ZCLFNBQUssR0FBTCxHQUFXLEVBQVg7QUFFQSxRQUFNLFFBQVEsR0FBRztBQUNmLE1BQUEsUUFBUSxFQUFFO0FBREssS0FBakI7QUFJQSxTQUFLLE9BQUwsR0FBZSxDQUFDLENBQUMsTUFBRixDQUFTLEVBQVQsRUFBYSxRQUFiLEVBQXVCLE9BQXZCLENBQWY7QUFFQSxTQUFLLFNBQUwsR0FBaUIsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLEtBQUssT0FBTCxDQUFhLFFBQTNCLENBQWpCO0FBRUEsU0FBSyxHQUFMLENBQ0csRUFESCxDQUNNLFlBRE4sRUFDb0IsS0FBSyxPQUFMLENBQWEsUUFEakMsRUFDMkMsVUFBQSxLQUFLO0FBQUEsYUFBSSxLQUFJLENBQUMsY0FBTCxDQUFvQixLQUFwQixDQUFKO0FBQUEsS0FEaEQsRUFFRyxFQUZILENBRU0sY0FGTixFQUVzQixLQUFLLE9BQUwsQ0FBYSxRQUZuQyxFQUU2QyxVQUFBLEtBQUs7QUFBQSxhQUFJLEtBQUksQ0FBQyxRQUFMLENBQWMsS0FBZCxDQUFKO0FBQUEsS0FGbEQ7QUFJRDs7OztXQUVELHdCQUFlLEtBQWYsRUFBc0I7QUFDcEIsTUFBQSxLQUFLLENBQUMsY0FBTjtBQUNBLFVBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBUCxDQUFoQjs7QUFDQSxVQUFJLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBSixFQUEyQjtBQUN6QjtBQUNEOztBQUVELFVBQUssTUFBTSxDQUFDLElBQVAsQ0FBWSxpQkFBWixDQUFMLEVBQXFDO0FBQ25DLFFBQUEsTUFBTSxDQUFDLElBQVAsQ0FBWSxZQUFaLEVBQTBCLElBQTFCO0FBQ0EsUUFBQSxNQUFNLENBQUMsSUFBUCxDQUFZLGlCQUFaLEVBQStCLElBQS9CO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsUUFBQSxNQUFNLENBQUMsSUFBUCxDQUFZLFlBQVosRUFBMEIsTUFBTSxDQUFDLElBQVAsQ0FBWSxZQUFaLE1BQThCLElBQXhEO0FBQ0Q7QUFDRjs7O1dBR0Qsa0JBQVMsS0FBVCxFQUFnQjtBQUNkLE1BQUEsS0FBSyxDQUFDLGNBQU47QUFDQSxVQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQVAsQ0FBaEI7QUFFQSxNQUFBLE1BQU0sQ0FBQyxJQUFQLENBQVksWUFBWixFQUEwQixNQUFNLENBQUMsSUFBUCxDQUFZLGlCQUFaLElBQWtDLElBQWxDLEdBQXlDLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBbkU7QUFFQSxNQUFBLE1BQU0sQ0FBQyxJQUFQLENBQVksT0FBWixFQUFxQixNQUFNLENBQUMsR0FBUCxFQUFyQjtBQUVEOzs7V0FFRCxrQkFBUyxLQUFULEVBQWdCO0FBQ2QsYUFBTyxLQUFLLElBQUksSUFBVCxJQUFpQixFQUFFLEtBQUssQ0FBQyxPQUFOLENBQWMsS0FBZCxLQUF3QixLQUFLLENBQUMsTUFBTixLQUFpQixDQUEzQyxDQUF4QjtBQUNEOzs7V0FFRCxrQkFBUyxFQUFULEVBQWE7QUFDWCxhQUFPLEVBQUUsSUFBSyxLQUFLLFFBQUwsQ0FBYyxFQUFFLENBQUMsR0FBSCxFQUFkLEtBQTJCLEVBQUUsQ0FBQyxHQUFILE9BQWEsRUFBdEQ7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbERrQixTO0FBQ25CLHFCQUFZLEVBQVosRUFBZ0IsT0FBaEIsRUFBeUI7QUFBQTs7QUFBQTtBQUN2QixTQUFLLEdBQUwsR0FBVyxFQUFYO0FBRUEsUUFBTSxRQUFRLEdBQUc7QUFDZixNQUFBLFNBQVMsRUFBRTtBQURJLEtBQWpCO0FBSUEsU0FBSyxPQUFMLEdBQWUsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxFQUFULEVBQWEsUUFBYixFQUF1QixPQUF2QixDQUFmO0FBRUEsU0FBSyxHQUFMLENBQVMsRUFBVCxDQUFZLE9BQVosRUFBcUIsVUFBQyxLQUFEO0FBQUEsYUFBVyxLQUFJLENBQUMsT0FBTCxDQUFhLEtBQWIsQ0FBWDtBQUFBLEtBQXJCO0FBQ0Q7Ozs7V0FFRCxpQkFBUSxLQUFSLEVBQWU7QUFDYixNQUFBLEtBQUssQ0FBQyxjQUFOO0FBQ0EsV0FBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixLQUFLLE9BQUwsQ0FBYSxTQUFsQztBQUNBLFdBQUssR0FBTCxDQUFTLE9BQVQsQ0FBaUIsaUJBQWpCO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2pCa0IsVTtBQUNqQixzQkFBWSxFQUFaLEVBQWdCLE9BQWhCLEVBQXlCO0FBQUE7O0FBQUE7QUFDdkIsU0FBSyxHQUFMLEdBQVcsRUFBWDtBQUVBLFFBQU0sUUFBUSxHQUFHO0FBQ2YsTUFBQSxRQUFRLEVBQUU7QUFESyxLQUFqQjtBQUlBLFNBQUssT0FBTCxHQUFlLENBQUMsQ0FBQyxNQUFGLENBQVMsRUFBVCxFQUFhLFFBQWIsRUFBdUIsT0FBdkIsQ0FBZjtBQUVBLFNBQUssU0FBTCxHQUFpQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsS0FBSyxPQUFMLENBQWEsUUFBM0IsQ0FBakI7QUFFQSxTQUFLLEdBQUwsQ0FDRyxFQURILENBQ00sWUFETixFQUNvQixLQUFLLE9BQUwsQ0FBYSxRQURqQyxFQUMyQyxVQUFBLEtBQUs7QUFBQSxhQUFJLEtBQUksQ0FBQyxPQUFMLENBQWEsS0FBYixDQUFKO0FBQUEsS0FEaEQ7QUFFRDs7OztXQUVELGlCQUFRLEtBQVIsRUFBZTtBQUNiLE1BQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFaO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2xCZ0IsUztBQUVuQixxQkFBWSxFQUFaLEVBQWdCLE9BQWhCLEVBQXlCO0FBQUE7O0FBQUE7QUFFdkIsU0FBSyxHQUFMLEdBQVcsRUFBWDtBQUVBLFFBQU0sUUFBUSxHQUFHO0FBQ2Ysd0JBQWtCLDhDQURIO0FBRWYseUJBQW1CLDhDQUZKO0FBR2YscUJBQWU7QUFIQSxLQUFqQjtBQU1BLFNBQUssT0FBTCxHQUFlLENBQUMsQ0FBQyxNQUFGLENBQVMsRUFBVCxFQUFhLFFBQWIsRUFBdUIsT0FBdkIsQ0FBZjtBQUVBLFNBQUssY0FBTCxHQUFzQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsS0FBSyxPQUFMLENBQWEsY0FBM0IsQ0FBdEI7QUFDQSxTQUFLLGVBQUwsR0FBdUIsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLEtBQUssT0FBTCxDQUFhLGVBQTNCLENBQXZCO0FBQ0EsU0FBSyxXQUFMLEdBQW1CLEtBQUssT0FBTCxDQUFhLFdBQWhDO0FBQ0EsU0FBSyxXQUFMLEdBQW1CLEtBQUssT0FBTCxDQUFhLFdBQWhDO0FBRUEsU0FBSyxHQUFMLENBQVMsRUFBVCxDQUFZLE9BQVosRUFBcUIsS0FBSyxPQUFMLENBQWEsY0FBbEMsRUFBa0QsVUFBQyxDQUFEO0FBQUEsYUFBTyxLQUFJLENBQUMsT0FBTCxDQUFhLENBQWIsQ0FBUDtBQUFBLEtBQWxEO0FBQ0Q7Ozs7V0FFRCxpQkFBUSxDQUFSLEVBQVc7QUFDVCxNQUFBLENBQUMsQ0FBQyxjQUFGO0FBQ0EsV0FBSyxVQUFMLEdBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBSCxDQUFuQjs7QUFFQSxVQUFJLEtBQUssV0FBVCxFQUFzQjtBQUNwQixZQUFJLEtBQUssVUFBTCxDQUFnQixRQUFoQixDQUF5QixLQUFLLE9BQUwsQ0FBYSxXQUF0QyxDQUFKLEVBQXdEO0FBQ3RELGVBQUssVUFBTCxDQUFnQixXQUFoQixDQUE0QixLQUFLLE9BQUwsQ0FBYSxXQUF6QztBQUNELFNBRkQsTUFFTztBQUNMLGVBQUssY0FBTCxDQUFvQixXQUFwQixDQUFnQyxLQUFLLFdBQXJDO0FBQ0EsZUFBSyxVQUFMLENBQWdCLFFBQWhCLENBQXlCLEtBQUssT0FBTCxDQUFhLFdBQXRDO0FBQ0Q7QUFDRixPQVBELE1BT087QUFDTCxhQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBNEIsS0FBSyxXQUFqQztBQUNEOztBQUVELFdBQUssR0FBTCxDQUFTLE9BQVQsQ0FBaUIsa0JBQWpCO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN0Q2tCLEssR0FDbkIsZUFBWSxFQUFaLEVBQWdCLE9BQWhCLEVBQXlCO0FBQUE7QUFDdkIsT0FBSyxHQUFMLEdBQVcsRUFBWDtBQUVBLE1BQU0sUUFBUSxHQUFHO0FBQ2YsSUFBQSxNQUFNLEVBQUU7QUFETyxHQUFqQjtBQUlBLE9BQUssT0FBTCxHQUFlLENBQUMsQ0FBQyxNQUFGLENBQVMsRUFBVCxFQUFhLFFBQWIsRUFBdUIsT0FBdkIsQ0FBZjs7QUFFQSxNQUFJLEtBQUssT0FBTCxDQUFhLE1BQWpCLEVBQXlCO0FBQ3ZCLFdBQU8sQ0FBQyxDQUFDLFFBQUYsQ0FBVyxJQUFYLENBQWdCLEVBQUUsQ0FBQyxHQUFILENBQU8sQ0FBUCxDQUFoQixDQUFQO0FBQ0Q7QUFFRixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNka0IsVTtBQUVuQixzQkFBWSxFQUFaLEVBQWdCLE9BQWhCLEVBQXlCO0FBQUE7O0FBQUE7QUFFdkIsU0FBSyxHQUFMLEdBQVcsRUFBWDtBQUVBLFFBQU0sUUFBUSxHQUFHO0FBQ2YsbUJBQWEsZ0JBREU7QUFFZixrQkFBWSxxREFGRztBQUdmLGtCQUFZLDhDQUhHO0FBSWYsNEJBQXNCLDZCQUpQO0FBS2YsNEJBQXNCLDZCQUxQO0FBTWYsOEJBQXdCLCtCQU5UO0FBT2YsTUFBQSxXQUFXLEVBQUUsQ0FQRTtBQVFmLE1BQUEsTUFBTSxFQUFFO0FBUk8sS0FBakI7QUFXQSxTQUFLLE9BQUwsR0FBZSxDQUFDLENBQUMsTUFBRixDQUFTLEVBQVQsRUFBYSxRQUFiLEVBQXVCLE9BQXZCLENBQWY7QUFFQSxTQUFLLFFBQUwsR0FBZ0IsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFlLEtBQUssT0FBTCxDQUFhLFFBQTVCLENBQWhCO0FBQ0EsU0FBSyxRQUFMLEdBQWdCLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBZSxLQUFLLE9BQUwsQ0FBYSxRQUE1QixDQUFoQjtBQUVBLFNBQUssR0FBTCxDQUNHLEVBREgsQ0FDTSxPQUROLFlBQ2tCLEtBQUssT0FBTCxDQUFhLFFBRC9CLFNBQzZDLFVBQUMsQ0FBRDtBQUFBLGFBQU8sS0FBSSxDQUFDLE9BQUwsQ0FBYSxDQUFiLENBQVA7QUFBQSxLQUQ3QyxFQUVHLEVBRkgsQ0FFTSxRQUZOLEVBRWdCLEtBQUssT0FBTCxDQUFhLE1BRjdCLEVBRXFDLFVBQUMsS0FBRDtBQUFBLGFBQVcsS0FBSSxDQUFDLFFBQUwsQ0FBYyxLQUFkLENBQVg7QUFBQSxLQUZyQztBQUtBLFNBQUssU0FBTCxDQUFnQixLQUFLLE9BQUwsQ0FBYSxXQUE3QjtBQUNEOzs7O1dBRUQsaUJBQVUsQ0FBVixFQUFjO0FBQ1osTUFBQSxDQUFDLENBQUMsY0FBRjtBQUNBLFVBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBSCxDQUFELENBQW1CLE1BQW5CLEdBQTRCLE1BQTVCLEdBQXFDLEtBQXJDLEVBQWQ7QUFDQSxXQUFLLFNBQUwsQ0FBZ0IsS0FBaEI7QUFDQSxNQUFBLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWSxPQUFaLENBQW9CLFVBQXBCLEVBQWdDLEtBQWhDO0FBQ0Q7OztXQUVELGtCQUFXLEtBQVgsRUFBbUI7QUFDakIsTUFBQSxLQUFLLENBQUMsY0FBTjtBQUNBLFVBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBUCxDQUFELENBQWdCLEdBQWhCLEVBQWQ7QUFDQSxXQUFLLFNBQUwsQ0FBZ0IsS0FBaEI7QUFDRDs7O1dBRUQsbUJBQVcsS0FBWCxFQUFtQjtBQUNqQixXQUFLLE9BQUwsQ0FBYSxXQUFiLEdBQTJCLEtBQTNCO0FBRUEsV0FBSyxRQUFMLENBQ0csV0FESCxDQUNnQixLQUFLLE9BQUwsQ0FBYSxrQkFEN0IsRUFFRyxFQUZILENBRU8sS0FGUCxFQUdHLFFBSEgsQ0FHYSxLQUFLLE9BQUwsQ0FBYSxrQkFIMUI7QUFLQSxXQUFLLFFBQUwsQ0FDRyxNQURILFlBQ2UsS0FBSyxPQUFMLENBQWEsa0JBRDVCLEdBRUcsUUFGSCxDQUVhLEtBQUssT0FBTCxDQUFhLG9CQUYxQjtBQUlBLFdBQUssUUFBTCxDQUNHLFdBREgsQ0FDZ0IsS0FBSyxPQUFMLENBQWEsa0JBRDdCLEVBRUcsRUFGSCxDQUVPLEtBRlAsRUFHRyxRQUhILENBR2EsS0FBSyxPQUFMLENBQWEsa0JBSDFCLEVBSUcsTUFKSCxZQUllLEtBQUssT0FBTCxDQUFhLG9CQUo1QixHQUtHLFdBTEgsQ0FLZ0IsS0FBSyxPQUFMLENBQWEsb0JBTDdCO0FBT0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzlEa0IsUTtBQUNuQixvQkFBWSxFQUFaLEVBQWdCLE9BQWhCLEVBQXlCO0FBQUE7O0FBQUE7QUFDdkIsU0FBSyxHQUFMLEdBQVcsRUFBWDtBQUVBLFFBQU0sUUFBUSxHQUFHO0FBQ2YsTUFBQSxPQUFPLEVBQUU7QUFDUCxRQUFBLElBQUksRUFBRSw0QkFEQztBQUVQLFFBQUEsS0FBSyxFQUFFO0FBRkEsT0FETTtBQUtmLE1BQUEsV0FBVyxFQUFFLHlCQUxFO0FBTWYsTUFBQSxJQUFJLEVBQUUsa0JBTlM7QUFPZixNQUFBLFdBQVcsRUFBRTtBQVBFLEtBQWpCO0FBVUEsU0FBSyxPQUFMLEdBQWUsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxFQUFULEVBQWEsUUFBYixFQUF1QixPQUF2QixDQUFmO0FBRUEsU0FBSyxZQUFMLEdBQW9CLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxLQUFLLE9BQUwsQ0FBYSxXQUEzQixDQUFwQjtBQUNBLFNBQUssS0FBTCxHQUFhLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxLQUFLLE9BQUwsQ0FBYSxJQUEzQixDQUFiO0FBQ0EsU0FBSyxXQUFMLEdBQW1CLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxLQUFLLE9BQUwsQ0FBYSxPQUFiLENBQXFCLElBQW5DLENBQW5CO0FBQ0EsU0FBSyxZQUFMLEdBQW9CLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxLQUFLLE9BQUwsQ0FBYSxPQUFiLENBQXFCLEtBQW5DLENBQXBCO0FBQ0EsU0FBSyxZQUFMLEdBQW9CLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxLQUFLLE9BQUwsQ0FBYSxXQUEzQixDQUFwQjtBQUVBLFNBQUssT0FBTCxHQUFlLEtBQUssR0FBTCxDQUFTLENBQVQsRUFBWSxXQUEzQjtBQUNBLFNBQUssUUFBTCxHQUFnQixHQUFoQjtBQUVBLElBQUEsVUFBVSxDQUFDO0FBQUEsYUFBTSxLQUFJLENBQUMsTUFBTCxFQUFOO0FBQUEsS0FBRCxFQUFzQixHQUF0QixDQUFWO0FBR0EsU0FBSyxHQUFMLENBQ0csRUFESCxDQUNNLE9BRE4sRUFDZSxLQUFLLE9BQUwsQ0FBYSxPQUFiLENBQXFCLEtBRHBDLEVBQzJDLFVBQUEsS0FBSztBQUFBLGFBQUksS0FBSSxDQUFDLFlBQUwsQ0FBa0IsS0FBbEIsQ0FBSjtBQUFBLEtBRGhELEVBRUcsRUFGSCxDQUVNLE9BRk4sRUFFZSxLQUFLLE9BQUwsQ0FBYSxPQUFiLENBQXFCLElBRnBDLEVBRTBDLFVBQUEsS0FBSztBQUFBLGFBQUksS0FBSSxDQUFDLFdBQUwsQ0FBaUIsS0FBakIsQ0FBSjtBQUFBLEtBRi9DLEVBR0csRUFISCxDQUdNLFFBSE4sRUFHZ0I7QUFBQSxhQUFNLEtBQUksQ0FBQyxXQUFMLEVBQU47QUFBQSxLQUhoQjtBQUlEOzs7O1dBRUQsa0JBQVM7QUFDUCxXQUFLLFFBQUwsR0FBZ0IsS0FBSyxLQUFMLENBQVcsVUFBWCxFQUFoQjtBQUVBLFdBQUssWUFBTCxDQUFrQixLQUFsQixDQUF3QixLQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVksV0FBWixHQUEwQixHQUFsRDtBQUNEOzs7V0FFRCxzQkFBYSxLQUFiLEVBQW9CO0FBQUE7O0FBQ2xCLE1BQUEsS0FBSyxDQUFDLGNBQU47QUFDQSxVQUFNLE9BQU8sR0FBRyxLQUFLLEdBQUwsQ0FBUyxVQUFULEVBQWhCO0FBQ0EsV0FBSyxRQUFMLEdBQWdCLEtBQUssS0FBTCxDQUFXLFVBQVgsRUFBaEI7QUFFQSxXQUFLLEdBQUwsQ0FBUyxPQUFULENBQWlCO0FBQ2YsUUFBQSxVQUFVLEVBQUUsT0FBTyxHQUFHLEtBQUs7QUFEWixPQUFqQixFQUVHLEdBRkgsRUFFUTtBQUFBLGVBQU0sTUFBSSxDQUFDLFdBQUwsRUFBTjtBQUFBLE9BRlI7QUFHRDs7O1dBRUQscUJBQVksS0FBWixFQUFtQjtBQUFBOztBQUNqQixNQUFBLEtBQUssQ0FBQyxjQUFOO0FBQ0EsVUFBTSxPQUFPLEdBQUcsS0FBSyxHQUFMLENBQVMsVUFBVCxFQUFoQjtBQUNBLFdBQUssUUFBTCxHQUFnQixLQUFLLEtBQUwsQ0FBVyxVQUFYLEVBQWhCO0FBRUEsV0FBSyxHQUFMLENBQVMsT0FBVCxDQUFpQjtBQUNmLFFBQUEsVUFBVSxFQUFFLE9BQU8sR0FBRyxLQUFLO0FBRFosT0FBakIsRUFFRyxHQUZILEVBRVE7QUFBQSxlQUFNLE1BQUksQ0FBQyxXQUFMLEVBQU47QUFBQSxPQUZSO0FBR0Q7OztXQUVELHVCQUFjO0FBQ1osVUFBTSxPQUFPLEdBQUcsS0FBSyxHQUFMLENBQVMsVUFBVCxFQUFoQjtBQUNBLFdBQUssUUFBTCxHQUFnQixLQUFLLEtBQUwsQ0FBVyxVQUFYLEVBQWhCOztBQUVBLFVBQUksT0FBTyxJQUFJLENBQWYsRUFBa0I7QUFDZCxhQUFLLFdBQUwsQ0FBaUIsUUFBakIsQ0FBMEIsVUFBMUI7QUFDSDs7QUFFRCxVQUFJLE9BQU8sR0FBRyxDQUFkLEVBQWlCO0FBQ2IsYUFBSyxXQUFMLENBQWlCLFdBQWpCLENBQTZCLFVBQTdCO0FBQ0g7O0FBRUQsVUFBSSxPQUFPLElBQUssS0FBSyxPQUFMLEdBQWUsR0FBL0IsRUFBcUM7QUFDakMsYUFBSyxZQUFMLENBQWtCLFFBQWxCLENBQTJCLFVBQTNCO0FBQ0g7O0FBRUQsVUFBSSxPQUFPLEdBQUksS0FBSyxPQUFMLEdBQWUsR0FBOUIsRUFBb0M7QUFDaEMsYUFBSyxZQUFMLENBQWtCLFdBQWxCLENBQThCLFVBQTlCO0FBQ0g7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDL0VrQixNO0FBQ25CLGtCQUFZLEVBQVosRUFBZ0IsT0FBaEIsRUFBeUI7QUFBQTs7QUFBQTtBQUN2QixTQUFLLEdBQUwsR0FBVyxFQUFYO0FBRUEsUUFBTSxRQUFRLEdBQUc7QUFDZixNQUFBLFNBQVMsRUFBRSxjQURJO0FBRWYsTUFBQSxHQUFHLEVBQUU7QUFDSCxRQUFBLElBQUksRUFBRSxRQURIO0FBRUgsUUFBQSxNQUFNLEVBQUUsYUFGTDtBQUdILFFBQUEsSUFBSSxFQUFFLG9CQUhIO0FBSUgsUUFBQSxNQUFNLEVBQUU7QUFKTDtBQUZVLEtBQWpCO0FBVUEsU0FBSyxPQUFMLEdBQWUsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxFQUFULEVBQWEsUUFBYixFQUF1QixPQUF2QixDQUFmO0FBRUEsU0FBSyxVQUFMLEdBQWtCLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxLQUFLLE9BQUwsQ0FBYSxTQUEzQixDQUFsQjtBQUNBLFNBQUssSUFBTCxHQUFZLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxLQUFLLE9BQUwsQ0FBYSxHQUFiLENBQWlCLElBQS9CLENBQVo7QUFFQSxJQUFBLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FDRyxFQURILENBQ00saUJBRE4sRUFDeUIsVUFBQyxLQUFEO0FBQUEsYUFBVyxLQUFJLENBQUMsZ0JBQUwsQ0FBc0IsS0FBdEIsQ0FBWDtBQUFBLEtBRHpCO0FBR0Q7Ozs7V0FFRCxvQkFBVztBQUNULFdBQUssR0FBTCxDQUFTLFdBQVQsQ0FBcUIsS0FBSyxPQUFMLENBQWEsTUFBbEM7QUFDQSxXQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBNEIsbUJBQTVCO0FBQ0EsTUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUsV0FBVixDQUFzQixnQkFBdEI7QUFDRDs7O1dBR0QsMEJBQWlCLEtBQWpCLEVBQXdCO0FBQ3RCLFVBQU0sV0FBVyxHQUFHLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxLQUFWLEVBQXBCOztBQUVBLFVBQUksV0FBVyxHQUFHLElBQWxCLEVBQXdCO0FBQ3RCLFFBQUEsS0FBSyxDQUFDLGNBQU47QUFDQSxhQUFLLElBQUwsQ0FBVSxXQUFWLENBQXNCLEtBQUssT0FBTCxDQUFhLEdBQWIsQ0FBaUIsTUFBdkM7O0FBRUEsWUFBSSxLQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLEtBQUssT0FBTCxDQUFhLEdBQWIsQ0FBaUIsTUFBcEMsQ0FBSixFQUFpRDtBQUMvQyxVQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxRQUFWLENBQW1CLGdCQUFuQjtBQUNBLGVBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0Isa0JBQWxCO0FBQ0QsU0FIRCxNQUdPO0FBQ0wsVUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUsV0FBVixDQUFzQixnQkFBdEI7QUFDQSxlQUFLLEdBQUwsQ0FBUyxXQUFULENBQXFCLGtCQUFyQjtBQUNEO0FBQ0Y7QUFDRiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuICAkKCdbZGF0YS1mYW5jeWJveF0nKS5mYW5jeWJveCh7XG4gICAgdG9vbGJhcjogZmFsc2UsXG4gICAgc21hbGxCdG46IHRydWUsXG4gIH0pXG5cbiAgdmFyIG15RnVsbHBhZ2UgPSBuZXcgZnVsbHBhZ2UoJyNmdWxscGFnZScsIHtcbiAgICBzZWN0aW9uc0NvbG9yOiBbJyMwYjBiNDUnLCAnI2ZmZicsICcjMGIwYjQ1JywgJyNmZmYnLCAnIzBiMGI0NScsICcjMGIwYjQ1JywgJyMwYjBiNDUnLCAnIzBiMGI0NScsICcjZmZmJ10sXG4gICAgYW5jaG9yczogWycnLCAncHJlc2FsZScsICdhYm91dCcsICd0b2tlbnMnLCAncm9hZG1hcCcsICd0ZWFtJywgJ2ZhcScsICdjb250YWN0JywgJyddLFxuICAgIG1lbnU6ICcjbWVudScsXG4gICAgc2xpZGVzTmF2aWdhdGlvbjogZmFsc2UsXG4gICAgbGF6eUxvYWQ6IHRydWUsXG4gIH0pO1xuXG4gIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2hhcnRcIik7XG5cbiAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgdHlwZTogJ3BpZScsXG4gICAgZGF0YTogd2luZG93LmNoYXJ0RGF0YSxcbiAgICBvcHRpb25zOiB7XG4gICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgcGx1Z2luczoge1xuICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICBsYWJlbDogKHRvb2x0aXBJdGVtKSA9PiB0b29sdGlwSXRlbS5sYWJlbCArICcgJyArIHRvb2x0aXBJdGVtLnBhcnNlZCArICclJyxcbiAgICAgICAgICAgIGxhYmVsVGV4dENvbG9yOiAoKSA9PiBcIiMwYjBiNDVcIixcbiAgICAgICAgICAgIGxhYmVsQ29sb3I6ICgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHt9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYm9yZGVyQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgaG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwiI2FlZDRmMFwiLFxuICAgICAgb25Ib3ZlcjogKGV2ZW50LCBhLCBiKSA9PiB7XG4gICAgICAgIGlmIChiLnRvb2x0aXAuZGF0YVBvaW50cykge1xuICAgICAgICAgICQoXCIuYS1jaGFydC1ib3hcIikucmVtb3ZlQ2xhc3MoXCJhLWNoYXJ0LWJveC0tYWN0aXZlXCIpO1xuICAgICAgICAgIGlmIChldmVudC50eXBlID09IFwibW91c2Vtb3ZlXCIpIHtcbiAgICAgICAgICAgICQoYFtkYXRhLXRpdGxlPVwiJHtiLnRvb2x0aXAuZGF0YVBvaW50c1swXS5sYWJlbH1cIl1gKS5hZGRDbGFzcyhcImEtY2hhcnQtYm94LS1hY3RpdmVcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAkKGRvY3VtZW50KVxuICAgIC5vbignbW91c2VsZWF2ZSBtb3VzZW91dCcsIFwiI215Q2hhcnRcIiwgKCkgPT4ge1xuICAgICAgJChcIi5hLWNoYXJ0LWJveFwiKS5tYXAoKGluZGV4LCBpdGVtKSA9PiAkKGl0ZW0pLnJlbW92ZUNsYXNzKFwiYS1jaGFydC1ib3gtLWFjdGl2ZVwiKSlcbiAgICB9KVxuICAgIC5vbignbW91c2VlbnRlciBtb3VzZW92ZXInLCBcIi5vLXRva2Vuc1wiLCAoKSA9PiB7XG4gICAgICAkKFwiLmEtY2hhcnQtYm94XCIpLm1hcCgoaW5kZXgsIGl0ZW0pID0+ICQoaXRlbSkucmVtb3ZlQ2xhc3MoXCJhLWNoYXJ0LWJveC0tYWN0aXZlXCIpKVxuICAgIH0pXG5cbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF6eUxvYWQge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG5cbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICQoZG9jdW1lbnQpLm9uKFwibGF6eWJlZm9yZXVudmVpbFwiLCB0aGlzLm9wdGlvbnMuc3BlZWNoQnV0dG9uLCBldmVudCA9PiB0aGlzLm9uTGF6eUJlZm9yZVVudmVpbChldmVudCkpO1xuXG4gIH1cblxuICBvbkxhenlCZWZvcmVVbnZlaWwoZXZlbnQpIHtcbiAgICBjb25zdCBsYXp5RWxlbWVudCA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbGF6eUVsZW1lbnQuYXR0ciggXCJkYXRhLWJhY2tncm91bmRcIiApO1xuICAgIGlmICggYmFja2dyb3VuZCApIHtcbiAgICAgIGxhenlFbGVtZW50LmNzcyh7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2JhY2tncm91bmR9KWBcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5uZXcgTGF6eUxvYWQoKTtcbiIsImltcG9ydCBHZW5lcmFsICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hc3NldHMvc2NyaXB0cy9HZW5lcmFsJztcbmltcG9ydCBMYXp5TG9hZCAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXNzZXRzL3NjcmlwdHMvTGF6eUxvYWQnO1xuXG5pbXBvcnQgRm9ybUlucHV0ICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2F0b21zL0Zvcm1JbnB1dC9Gb3JtSW5wdXQnO1xuaW1wb3J0IEZvcm1UZXh0YXJlYSAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hdG9tcy9Gb3JtVGV4dGFyZWEvRm9ybVRleHRhcmVhJztcbmltcG9ydCBIYW1idXJnZXIgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXRvbXMvSGFtYnVyZ2VyL0hhbWJ1cmdlcic7XG5pbXBvcnQgU2Nyb2xsRG93biAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2F0b21zL1Njcm9sbERvd24vU2Nyb2xsRG93bic7XG5cbmltcG9ydCBBY2NvcmRpb24gICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL0FjY29yZGlvbi9BY2NvcmRpb24nO1xuaW1wb3J0IE1vZGFsICAgICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvTW9kYWwvTW9kYWwnO1xuaW1wb3J0IFRhYkRlZmF1bHQgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9UYWJEZWZhdWx0L1RhYkRlZmF1bHQnO1xuaW1wb3J0IFRpbWVsaW5lICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvVGltZWxpbmUvVGltZWxpbmUnO1xuXG5pbXBvcnQgSGVhZGVyICAgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL29yZ2FuaXNtcy9IZWFkZXIvSGVhZGVyJztcblxuY29uc3QgQ29tcG9uZW50cyA9IHtcbiAgTGF6eUxvYWQsXG5cbiAgRm9ybUlucHV0LFxuICBGb3JtVGV4dGFyZWEsXG4gIEhhbWJ1cmdlcixcbiAgU2Nyb2xsRG93bixcblxuICBBY2NvcmRpb24sXG4gIE1vZGFsLFxuICBUYWJEZWZhdWx0LFxuICBUaW1lbGluZSxcbiAgXG4gIEhlYWRlcixcbn07XG5cbmZ1bmN0aW9uIGJ1aWxkQ29tcG9uZW50KCB0aGF0LCB0eXBlLCBkYXRhICkge1xuICBjb25zdCBvcHRpb25zID0gZGF0YSB8fCB7fTtcbiAgbGV0IENvbXBvbmVudCA9IENvbXBvbmVudHNbdHlwZV07XG4gIGlmICggQ29tcG9uZW50ICkge1xuICAgIENvbXBvbmVudCA9IG5ldyBDb21wb25lbnQoJCh0aGF0KSwgb3B0aW9ucyk7XG4gICAgdGhhdC5zZXRDb21wb25lbnQoIHR5cGUsIENvbXBvbmVudCk7XG4gICAgJCh0aGF0KS5kYXRhKGBjb21wb25lbnQke3R5cGV9YCwgQ29tcG9uZW50KS5yZW1vdmVBdHRyKFwiZGF0YS1jb21wb25lbnRcIikucmVtb3ZlRGF0YShcImNvbXBvbmVudFwiKTtcbiAgfVxufVxuXG5IVE1MRWxlbWVudC5wcm90b3R5cGUuZ2V0Q29tcG9uZW50ID0gZnVuY3Rpb24oIHR5cGUgKSB7XG4gIGNvbnN0IENvbXBvbmVudCA9IHRoaXNbIHR5cGUgXTtcbiAgaWYgKCBDb21wb25lbnQgKSB7XG4gICAgcmV0dXJuIENvbXBvbmVudDtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5IVE1MRWxlbWVudC5wcm90b3R5cGUuc2V0Q29tcG9uZW50ID0gZnVuY3Rpb24oIHR5cGUsIENvbXBvbmVudCApIHtcbiAgdGhpc1t0eXBlXSA9IENvbXBvbmVudDtcbn1cblxud2luZG93LmluaXRpYXRlQ29tcG9uZW50cyA9IGZ1bmN0aW9uKCkge1xuICAkKCdbZGF0YS1jb21wb25lbnRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBkYXRhID0gJCggdGhpcyApLmRhdGEoJ2NvbXBvbmVudCcpO1xuICAgIGlmICggQXJyYXkuaXNBcnJheSggZGF0YSApICkge1xuICAgICAgZm9yKCB2YXIgaSBpbiBkYXRhICkge1xuICAgICAgICBidWlsZENvbXBvbmVudCggdGhpcywgZGF0YVtpXS50eXBlLCBkYXRhW2ldICk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICggdHlwZW9mIGRhdGEgPT0gXCJvYmplY3RcIiApIHtcbiAgICAgIGJ1aWxkQ29tcG9uZW50KCB0aGlzLCBkYXRhLnR5cGUsIGRhdGEgKTtcbiAgICB9IGVsc2UgaWYgKCB0eXBlb2YgZGF0YSA9PSBcInN0cmluZ1wiICkge1xuICAgICAgYnVpbGRDb21wb25lbnQoIHRoaXMsIGRhdGEsICQoIHRoaXMgKS5kYXRhKCkgKTtcbiAgICB9XG5cbiAgfSk7XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IGluaXRpYXRlQ29tcG9uZW50cygpKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1JbnB1dCB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgc2VsZWN0b3I6IFwiPiBpbnB1dFwiLFxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kc2VsZWN0b3IgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5zZWxlY3Rvcik7XG5cbiAgICB0aGlzLiRlbFxuICAgICAgLm9uKFwiZm9jdXMgYmx1clwiLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMub25Ub2dnbGVTaHJpbmsoZXZlbnQpKVxuICAgICAgLm9uKFwiaW5wdXQgY2hhbmdlXCIsIHRoaXMub3B0aW9ucy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5vbkNoYW5nZShldmVudCkpO1xuXG4gICAgaWYgKHRoaXMuaXNGaWxsZWQodGhpcy4kc2VsZWN0b3IpKSB7XG4gICAgICB0aGlzLiRzZWxlY3Rvci5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0cnVlKTtcbiAgICAgIHRoaXMuJHNlbGVjdG9yLmRhdGEoXCJkaXJ0eS1pbXBvcnRhbnRcIiwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25Ub2dnbGVTaHJpbmsoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICBpZiAodGhpcy5pc0ZpbGxlZCh0YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldC5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIpKSB7XG4gICAgICB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIiwgdHJ1ZSk7XG4gICAgICB0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiKSA9PT0gdHJ1ZSk7XG4gICAgfVxuICB9XG5cblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xuXG4gICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRhcmdldC5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIpID8gdHJ1ZSA6IHRoaXMuaXNGaWxsZWQodGFyZ2V0KSlcbiAgICB0YXJnZXQuYXR0cihcInZhbHVlXCIsIHRhcmdldC52YWwoKSk7XG4gIH1cblxuICBoYXNWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICEoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKTtcbiAgfVxuXG4gIGlzRmlsbGVkKGVsKSB7XG4gICAgcmV0dXJuIGVsICYmICh0aGlzLmhhc1ZhbHVlKGVsLnZhbCgpKSAmJiBlbC52YWwoKSAhPT0gXCJcIik7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1UZXh0YXJlYSB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgc2VsZWN0b3I6IFwiPiB0ZXh0YXJlYVwiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRzZWxlY3RvciA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnNlbGVjdG9yKTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJmb2N1cyBibHVyXCIsIHRoaXMub3B0aW9ucy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5vblRvZ2dsZVNocmluayhldmVudCkpXG4gICAgICAub24oXCJpbnB1dCBjaGFuZ2VcIiwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLm9uQ2hhbmdlKGV2ZW50KSlcbiAgICA7XG4gIH1cblxuICBvblRvZ2dsZVNocmluayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xuICAgIGlmICh0aGlzLmlzRmlsbGVkKHRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIHRhcmdldC5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIpKSB7XG4gICAgICB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIiwgdHJ1ZSk7XG4gICAgICB0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiKSA9PT0gdHJ1ZSk7XG4gICAgfVxuICB9XG5cblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xuXG4gICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRhcmdldC5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIpID8gIHRydWUgOiB0aGlzLmlzRmlsbGVkKHRhcmdldCkpXG5cbiAgICB0YXJnZXQuYXR0cihcInZhbHVlXCIsIHRhcmdldC52YWwoKSk7XG5cbiAgfVxuXG4gIGhhc1ZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgIShBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApO1xuICB9XG5cbiAgaXNGaWxsZWQoZWwpIHtcbiAgICByZXR1cm4gZWwgJiYgKHRoaXMuaGFzVmFsdWUoZWwudmFsKCkpICYmIGVsLnZhbCgpICE9PSBcIlwiKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFtYnVyZ2VyIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBjbGFzc05hbWU6IFwiYS1oYW1idXJnZXItLW9wZW5cIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kZWwub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHRoaXMub25DbGljayhldmVudCkpO1xuICB9XG5cbiAgb25DbGljayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy4kZWwudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLmNsYXNzTmFtZSk7XG4gICAgdGhpcy4kZWwudHJpZ2dlcihcImhhbWJ1cmdlci5jbGlja1wiKTtcbiAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxEb3duIHtcbiAgICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgICAgdGhpcy4kZWwgPSBlbDtcbiAgXG4gICAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgc2VsZWN0b3I6IFwiPiBpbnB1dFwiLFxuICAgICAgfTtcbiAgXG4gICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICBcbiAgICAgIHRoaXMuJHNlbGVjdG9yID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuc2VsZWN0b3IpO1xuICBcbiAgICAgIHRoaXMuJGVsXG4gICAgICAgIC5vbihcImZvY3VzIGJsdXJcIiwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKTtcbiAgICB9XG4gIFxuICAgIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgIH1cbiAgfVxuICAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvcmRpb24ge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG5cbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBcImFjY29yZGlvbkhlYWRzXCI6IFwiPiAubS1hY2NvcmRpb25fX2NvbnRhaW5lciAubS1hY2NvcmRpb25fX2hlYWRcIixcbiAgICAgIFwiYWNjb3JkaW9uQm9kaWVzXCI6IFwiPiAubS1hY2NvcmRpb25fX2NvbnRhaW5lciAubS1hY2NvcmRpb25fX2JvZHlcIixcbiAgICAgIFwiYWN0aXZlQ2xhc3NcIjogXCJtLWFjY29yZGlvbl9faGVhZC0tYWN0aXZlXCJcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuYWNjb3JkaW9uSGVhZHMgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5hY2NvcmRpb25IZWFkcyk7XG4gICAgdGhpcy5hY2NvcmRpb25Cb2RpZXMgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5hY2NvcmRpb25ib2RpZXMpO1xuICAgIHRoaXMuYWN0aXZlQ2xhc3MgPSB0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3M7XG4gICAgdGhpcy5zaG93T25seU9uZSA9IHRoaXMub3B0aW9ucy5zaG93T25seU9uZTtcblxuICAgIHRoaXMuJGVsLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLmFjY29yZGlvbkhlYWRzLCAoZSkgPT4gdGhpcy5vbkNsaWNrKGUpKTtcbiAgfVxuXG4gIG9uQ2xpY2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmN1cnJUYXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG5cbiAgICBpZiAodGhpcy5zaG93T25seU9uZSkge1xuICAgICAgaWYgKHRoaXMuY3VyclRhcmdldC5oYXNDbGFzcyh0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3MpKSB7XG4gICAgICAgIHRoaXMuY3VyclRhcmdldC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY2NvcmRpb25IZWFkcy5yZW1vdmVDbGFzcyh0aGlzLmFjdGl2ZUNsYXNzKTtcbiAgICAgICAgdGhpcy5jdXJyVGFyZ2V0LmFkZENsYXNzKHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VyclRhcmdldC50b2dnbGVDbGFzcyh0aGlzLmFjdGl2ZUNsYXNzKTtcbiAgICB9XG5cbiAgICB0aGlzLiRlbC50cmlnZ2VyKFwiYWNjb3JkaW9uLmNoYW5nZVwiKTtcbiAgfVxuXG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBvbkxvYWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLm9uTG9hZCkge1xuICAgICAgcmV0dXJuICQuZmFuY3lib3gub3BlbihlbC5nZXQoMCkpO1xuICAgIH1cblxuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYkRlZmF1bHQge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG5cbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBcImNvbnRhaW5lclwiOiBcIi5tLXRhYi1kZWZhdWx0XCIsXG4gICAgICBcInRhYkl0ZW1zXCI6IFwiPiAubS10YWItZGVmYXVsdF9faXRlbXMgLm0tdGFiLWRlZmF1bHRfX2l0ZW1zLS1kZXNjXCIsXG4gICAgICBcInRhYlBhbmVzXCI6IFwiPiAubS10YWItZGVmYXVsdF9fcGFuZXMgLm0tdGFiLWRlZmF1bHRfX3BhbmVcIixcbiAgICAgIFwiYWN0aXZlVGFiSXRlbUNsYXNzXCI6IFwibS10YWItZGVmYXVsdF9faXRlbS0tYWN0aXZlXCIsXG4gICAgICBcImFjdGl2ZVRhYlBhbmVDbGFzc1wiOiBcIm0tdGFiLWRlZmF1bHRfX3BhbmUtLWFjdGl2ZVwiLFxuICAgICAgXCJpbkFjdGl2ZVRhYlBhbmVDbGFzc1wiOiBcIm0tdGFiLWRlZmF1bHRfX3BhbmUtLWluYWN0aXZlXCIsXG4gICAgICBhY3RpdmVJbmRleDogMCxcbiAgICAgIHNlbGVjdDogXCIuYS1zZWxlY3RcIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy50YWJJdGVtcyA9IHRoaXMuJGVsLmZpbmQoIHRoaXMub3B0aW9ucy50YWJJdGVtcyApO1xuICAgIHRoaXMudGFiUGFuZXMgPSB0aGlzLiRlbC5maW5kKCB0aGlzLm9wdGlvbnMudGFiUGFuZXMgKTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJjbGlja1wiLCBgJHt0aGlzLm9wdGlvbnMudGFiSXRlbXN9IGFgLCAoZSkgPT4gdGhpcy5vbkNsaWNrKGUpKVxuICAgICAgLm9uKFwiY2hhbmdlXCIsIHRoaXMub3B0aW9ucy5zZWxlY3QsIChldmVudCkgPT4gdGhpcy5vbkNoYW5nZShldmVudCkpXG4gICAgO1xuXG4gICAgdGhpcy5zZXRBY3RpdmUoIHRoaXMub3B0aW9ucy5hY3RpdmVJbmRleCApO1xuICB9XG5cbiAgb25DbGljayAoIGUgKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGluZGV4ID0gJChlLmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpLnBhcmVudCgpLmluZGV4KCk7XG4gICAgdGhpcy5zZXRBY3RpdmUoIGluZGV4ICk7XG4gICAgJChkb2N1bWVudCkudHJpZ2dlcihcInRhYi5zaG93XCIsIGluZGV4KVxuICB9XG5cbiAgb25DaGFuZ2UgKCBldmVudCApIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGluZGV4ID0gJChldmVudC50YXJnZXQpLnZhbCgpO1xuICAgIHRoaXMuc2V0QWN0aXZlKCBpbmRleCApO1xuICB9XG5cbiAgc2V0QWN0aXZlKCBpbmRleCApIHtcbiAgICB0aGlzLm9wdGlvbnMuYWN0aXZlSW5kZXggPSBpbmRleDtcblxuICAgIHRoaXMudGFiSXRlbXNcbiAgICAgIC5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb25zLmFjdGl2ZVRhYkl0ZW1DbGFzcyApXG4gICAgICAuZXEoIGluZGV4IClcbiAgICAgIC5hZGRDbGFzcyggdGhpcy5vcHRpb25zLmFjdGl2ZVRhYkl0ZW1DbGFzcyApO1xuXG4gICAgdGhpcy50YWJQYW5lc1xuICAgICAgLmZpbHRlciggYC4ke3RoaXMub3B0aW9ucy5hY3RpdmVUYWJQYW5lQ2xhc3N9YCApXG4gICAgICAuYWRkQ2xhc3MoIHRoaXMub3B0aW9ucy5pbkFjdGl2ZVRhYlBhbmVDbGFzcyApO1xuXG4gICAgdGhpcy50YWJQYW5lc1xuICAgICAgLnJlbW92ZUNsYXNzKCB0aGlzLm9wdGlvbnMuYWN0aXZlVGFiUGFuZUNsYXNzIClcbiAgICAgIC5lcSggaW5kZXggKVxuICAgICAgLmFkZENsYXNzKCB0aGlzLm9wdGlvbnMuYWN0aXZlVGFiUGFuZUNsYXNzIClcbiAgICAgIC5maWx0ZXIoIGAuJHt0aGlzLm9wdGlvbnMuaW5BY3RpdmVUYWJQYW5lQ2xhc3N9YCApXG4gICAgICAucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9ucy5pbkFjdGl2ZVRhYlBhbmVDbGFzcyApO1xuXG4gIH1cblxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lbGluZSB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgYnV0dG9uczoge1xuICAgICAgICBsZWZ0OiBcIi5tLXRpbWVsaW5lX19jb250cm9sLS1sZWZ0XCIsXG4gICAgICAgIHJpZ2h0OiBcIi5tLXRpbWVsaW5lX19jb250cm9sLS1yaWdodFwiXG4gICAgICB9LFxuICAgICAgdGltZWxpbmVCb3g6IFwiLm0tdGltZWxpbmVfX2NvbnRlbnQgbGlcIixcbiAgICAgIGNhcmQ6IFwiLm0tY2FyZC10aW1lbGluZVwiLFxuICAgICAgcHJvZ3Jlc3NiYXI6IFwiLm0tdGltZWxpbmUtcHJvZ3Jlc3NfX2JhclwiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiR0aW1lbGluZUJveCA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnRpbWVsaW5lQm94KTtcbiAgICB0aGlzLiRjYXJkID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuY2FyZCk7XG4gICAgdGhpcy4kbGVmdEJ1dHRvbiA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLmJ1dHRvbnMubGVmdCk7XG4gICAgdGhpcy4kcmlnaHRCdXR0b24gPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5idXR0b25zLnJpZ2h0KTtcbiAgICB0aGlzLiRwcm9ncmVzc2JhciA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnByb2dyZXNzYmFyKTtcblxuICAgIHRoaXMuZWxXaWR0aCA9IHRoaXMuJGVsWzBdLnNjcm9sbFdpZHRoO1xuICAgIHRoaXMuY2FyZFNpemUgPSAyNjg7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub25Jbml0KCksIDEwMCk7XG5cblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuYnV0dG9ucy5yaWdodCwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrUmlnaHQoZXZlbnQpKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLmJ1dHRvbnMubGVmdCwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrTGVmdChldmVudCkpXG4gICAgICAub24oXCJzY3JvbGxcIiwgKCkgPT4gdGhpcy5zY3JvbGxDaGVjaygpKVxuICB9XG5cbiAgb25Jbml0KCkge1xuICAgIHRoaXMuY2FyZFNpemUgPSB0aGlzLiRjYXJkLmlubmVyV2lkdGgoKTtcblxuICAgIHRoaXMuJHByb2dyZXNzYmFyLndpZHRoKHRoaXMuJGVsWzBdLnNjcm9sbFdpZHRoIC0gMTgyKVxuICB9XG5cbiAgb25DbGlja1JpZ2h0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBsZWZ0UG9zID0gdGhpcy4kZWwuc2Nyb2xsTGVmdCgpO1xuICAgIHRoaXMuY2FyZFNpemUgPSB0aGlzLiRjYXJkLmlubmVyV2lkdGgoKTtcblxuICAgIHRoaXMuJGVsLmFuaW1hdGUoe1xuICAgICAgc2Nyb2xsTGVmdDogbGVmdFBvcyArIHRoaXMuY2FyZFNpemVcbiAgICB9LCA0MDAsICgpID0+IHRoaXMuc2Nyb2xsQ2hlY2soKSk7XG4gIH1cblxuICBvbkNsaWNrTGVmdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbGVmdFBvcyA9IHRoaXMuJGVsLnNjcm9sbExlZnQoKTtcbiAgICB0aGlzLmNhcmRTaXplID0gdGhpcy4kY2FyZC5pbm5lcldpZHRoKCk7XG5cbiAgICB0aGlzLiRlbC5hbmltYXRlKHtcbiAgICAgIHNjcm9sbExlZnQ6IGxlZnRQb3MgLSB0aGlzLmNhcmRTaXplXG4gICAgfSwgNDAwLCAoKSA9PiB0aGlzLnNjcm9sbENoZWNrKCkpO1xuICB9XG5cbiAgc2Nyb2xsQ2hlY2soKSB7XG4gICAgY29uc3QgbGVmdFBvcyA9IHRoaXMuJGVsLnNjcm9sbExlZnQoKTtcbiAgICB0aGlzLmNhcmRTaXplID0gdGhpcy4kY2FyZC5pbm5lcldpZHRoKCk7XG4gICAgXG4gICAgaWYgKGxlZnRQb3MgPT0gMCkge1xuICAgICAgICB0aGlzLiRsZWZ0QnV0dG9uLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgfVxuXG4gICAgaWYgKGxlZnRQb3MgPiAwKSB7XG4gICAgICAgIHRoaXMuJGxlZnRCdXR0b24ucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICB9IFxuXG4gICAgaWYgKGxlZnRQb3MgPj0gKHRoaXMuZWxXaWR0aCAtIDI1MCkpIHtcbiAgICAgICAgdGhpcy4kcmlnaHRCdXR0b24uYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICB9XG5cbiAgICBpZiAobGVmdFBvcyA8ICh0aGlzLmVsV2lkdGggLSAyNTApKSB7XG4gICAgICAgIHRoaXMuJHJpZ2h0QnV0dG9uLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGhhbWJ1cmdlcjogXCIuYS1oYW1idXJnZXJcIixcbiAgICAgIG5hdjoge1xuICAgICAgICBzZWxmOiBcIi5tLW5hdlwiLFxuICAgICAgICB0b2dnbGU6IFwibS1uYXYtLW9wZW5cIixcbiAgICAgICAgaXRlbTogXCJuYXYgPiB1bCA+IGxpIHNwYW5cIixcbiAgICAgICAgYWN0aXZlOiBcIm0tbmF2LS1hY3RpdmVcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRoYW1idXJnZXIgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5oYW1idXJnZXIpO1xuICAgIHRoaXMuJG5hdiA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLm5hdi5zZWxmKTtcblxuICAgICQoZG9jdW1lbnQpXG4gICAgICAub24oXCJoYW1idXJnZXIuY2xpY2tcIiwgKGV2ZW50KSA9PiB0aGlzLm9uQ2xpY2tIYW1idXJnZXIoZXZlbnQpKVxuXG4gIH1cblxuICBjbG9zZUFsbCgpIHtcbiAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMudG9nZ2xlKTtcbiAgICB0aGlzLiRoYW1idXJnZXIucmVtb3ZlQ2xhc3MoJ2EtaGFtYnVyZ2VyLS1vcGVuJylcbiAgICAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcygnZGlzYWJsZS1zY3JvbGwnKTtcbiAgfVxuXG5cbiAgb25DbGlja0hhbWJ1cmdlcihldmVudCkge1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICBpZiAod2luZG93V2lkdGggPCAxMDI1KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLiRuYXYudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLm5hdi50b2dnbGUpO1xuXG4gICAgICBpZiAodGhpcy4kbmF2Lmhhc0NsYXNzKHRoaXMub3B0aW9ucy5uYXYudG9nZ2xlKSkge1xuICAgICAgICAkKFwiaHRtbFwiKS5hZGRDbGFzcygnZGlzYWJsZS1zY3JvbGwnKTtcbiAgICAgICAgdGhpcy4kZWwuYWRkQ2xhc3MoJ28taGVhZGVyLS1vcGVuZWQnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChcImh0bWxcIikucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUtc2Nyb2xsJyk7XG4gICAgICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKCdvLWhlYWRlci0tb3BlbmVkJylcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==
