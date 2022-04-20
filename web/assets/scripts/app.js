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
    sectionsColor: ['#0b0b45', '#fff', '#0b0b45', 'whitesmoke', '#ccddff'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    menu: '#menu',
    slidesNavigation: true,
    lazyLoad: true,
    credits: {
      enabled: false
    }
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

},{"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/createClass":2,"@babel/runtime/helpers/interopRequireDefault":3}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwic3JjL2Fzc2V0cy9zY3JpcHRzL0dlbmVyYWwuZXM2Iiwic3JjL2Fzc2V0cy9zY3JpcHRzL0xhenlMb2FkLmVzNiIsInNyYy9hc3NldHMvc2NyaXB0cy9hcHAuanMiLCJzcmMvYXRvbXMvRm9ybUlucHV0L0Zvcm1JbnB1dC5lczYiLCJzcmMvYXRvbXMvRm9ybVRleHRhcmVhL0Zvcm1UZXh0YXJlYS5lczYiLCJzcmMvYXRvbXMvSGFtYnVyZ2VyL0hhbWJ1cmdlci5lczYiLCJzcmMvYXRvbXMvU2Nyb2xsRG93bi9TY3JvbGxEb3duLmVzNiIsInNyYy9tb2xlY3VsZXMvQWNjb3JkaW9uL0FjY29yZGlvbi5lczYiLCJzcmMvbW9sZWN1bGVzL01vZGFsL01vZGFsLmVzNiIsInNyYy9tb2xlY3VsZXMvVGFiRGVmYXVsdC9UYWJEZWZhdWx0LmVzNiIsInNyYy9tb2xlY3VsZXMvVGltZWxpbmUvVGltZWxpbmUuZXM2Iiwic3JjL29yZ2FuaXNtcy9IZWFkZXIvSGVhZGVyLmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtB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LENBQW1CLEtBQUssT0FBTCxDQUFhLEdBQWIsQ0FBaUIsTUFBcEMsQ0FBSixFQUFnRDtBQUM5QyxVQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxRQUFWLENBQW1CLGdCQUFuQjtBQUNBLGVBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0Isa0JBQWxCO0FBQ0QsU0FIRCxNQUdPO0FBQ0wsVUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUsV0FBVixDQUFzQixnQkFBdEI7QUFDQSxlQUFLLEdBQUwsQ0FBUyxXQUFULENBQXFCLGtCQUFyQjtBQUNEO0FBQ0Y7QUFDRiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuICAkKCdbZGF0YS1mYW5jeWJveF0nKS5mYW5jeWJveCh7XG4gICAgdG9vbGJhcjogZmFsc2UsXG4gICAgc21hbGxCdG46IHRydWUsXG4gIH0pXG5cbiAgdmFyIG15RnVsbHBhZ2UgPSBuZXcgZnVsbHBhZ2UoJyNmdWxscGFnZScsIHtcbiAgICBzZWN0aW9uc0NvbG9yOiBbJyMwYjBiNDUnLCAnI2ZmZicsICcjMGIwYjQ1JywgJ3doaXRlc21va2UnLCAnI2NjZGRmZiddLFxuICAgIGFuY2hvcnM6IFsnZmlyc3RQYWdlJywgJ3NlY29uZFBhZ2UnLCAnM3JkUGFnZScsICc0dGhwYWdlJywgJ2xhc3RQYWdlJ10sXG4gICAgbWVudTogJyNtZW51JyxcbiAgICBzbGlkZXNOYXZpZ2F0aW9uOiB0cnVlLFxuICAgIGxhenlMb2FkOiB0cnVlLFxuICAgIGNyZWRpdHM6IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgfVxuICB9KTtcbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF6eUxvYWQge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG5cbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICQoZG9jdW1lbnQpLm9uKFwibGF6eWJlZm9yZXVudmVpbFwiLCB0aGlzLm9wdGlvbnMuc3BlZWNoQnV0dG9uLCBldmVudCA9PiB0aGlzLm9uTGF6eUJlZm9yZVVudmVpbChldmVudCkpO1xuXG4gIH1cblxuICBvbkxhenlCZWZvcmVVbnZlaWwoZXZlbnQpIHtcbiAgICBjb25zdCBsYXp5RWxlbWVudCA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbGF6eUVsZW1lbnQuYXR0ciggXCJkYXRhLWJhY2tncm91bmRcIiApO1xuICAgIGlmICggYmFja2dyb3VuZCApIHtcbiAgICAgIGxhenlFbGVtZW50LmNzcyh7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2JhY2tncm91bmR9KWBcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5uZXcgTGF6eUxvYWQoKTtcbiIsImltcG9ydCBHZW5lcmFsICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hc3NldHMvc2NyaXB0cy9HZW5lcmFsJztcbmltcG9ydCBMYXp5TG9hZCAgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXNzZXRzL3NjcmlwdHMvTGF6eUxvYWQnO1xuXG5pbXBvcnQgRm9ybUlucHV0ICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2F0b21zL0Zvcm1JbnB1dC9Gb3JtSW5wdXQnO1xuaW1wb3J0IEZvcm1UZXh0YXJlYSAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9hdG9tcy9Gb3JtVGV4dGFyZWEvRm9ybVRleHRhcmVhJztcbmltcG9ydCBIYW1idXJnZXIgICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvYXRvbXMvSGFtYnVyZ2VyL0hhbWJ1cmdlcic7XG5pbXBvcnQgU2Nyb2xsRG93biAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL2F0b21zL1Njcm9sbERvd24vU2Nyb2xsRG93bic7XG5cbmltcG9ydCBBY2NvcmRpb24gICAgICAgIGZyb20gICcuLi8uLi8uLi9zcmMvbW9sZWN1bGVzL0FjY29yZGlvbi9BY2NvcmRpb24nO1xuaW1wb3J0IE1vZGFsICAgICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvTW9kYWwvTW9kYWwnO1xuaW1wb3J0IFRhYkRlZmF1bHQgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL21vbGVjdWxlcy9UYWJEZWZhdWx0L1RhYkRlZmF1bHQnO1xuaW1wb3J0IFRpbWVsaW5lICAgICAgICAgZnJvbSAgJy4uLy4uLy4uL3NyYy9tb2xlY3VsZXMvVGltZWxpbmUvVGltZWxpbmUnO1xuXG5pbXBvcnQgSGVhZGVyICAgICAgICAgICBmcm9tICAnLi4vLi4vLi4vc3JjL29yZ2FuaXNtcy9IZWFkZXIvSGVhZGVyJztcblxuY29uc3QgQ29tcG9uZW50cyA9IHtcbiAgTGF6eUxvYWQsXG5cbiAgRm9ybUlucHV0LFxuICBGb3JtVGV4dGFyZWEsXG4gIEhhbWJ1cmdlcixcbiAgU2Nyb2xsRG93bixcblxuICBBY2NvcmRpb24sXG4gIE1vZGFsLFxuICBUYWJEZWZhdWx0LFxuICBUaW1lbGluZSxcbiAgXG4gIEhlYWRlcixcbn07XG5cbmZ1bmN0aW9uIGJ1aWxkQ29tcG9uZW50KCB0aGF0LCB0eXBlLCBkYXRhICkge1xuICBjb25zdCBvcHRpb25zID0gZGF0YSB8fCB7fTtcbiAgbGV0IENvbXBvbmVudCA9IENvbXBvbmVudHNbdHlwZV07XG4gIGlmICggQ29tcG9uZW50ICkge1xuICAgIENvbXBvbmVudCA9IG5ldyBDb21wb25lbnQoJCh0aGF0KSwgb3B0aW9ucyk7XG4gICAgdGhhdC5zZXRDb21wb25lbnQoIHR5cGUsIENvbXBvbmVudCk7XG4gICAgJCh0aGF0KS5kYXRhKGBjb21wb25lbnQke3R5cGV9YCwgQ29tcG9uZW50KS5yZW1vdmVBdHRyKFwiZGF0YS1jb21wb25lbnRcIikucmVtb3ZlRGF0YShcImNvbXBvbmVudFwiKTtcbiAgfVxufVxuXG5IVE1MRWxlbWVudC5wcm90b3R5cGUuZ2V0Q29tcG9uZW50ID0gZnVuY3Rpb24oIHR5cGUgKSB7XG4gIGNvbnN0IENvbXBvbmVudCA9IHRoaXNbIHR5cGUgXTtcbiAgaWYgKCBDb21wb25lbnQgKSB7XG4gICAgcmV0dXJuIENvbXBvbmVudDtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5IVE1MRWxlbWVudC5wcm90b3R5cGUuc2V0Q29tcG9uZW50ID0gZnVuY3Rpb24oIHR5cGUsIENvbXBvbmVudCApIHtcbiAgdGhpc1t0eXBlXSA9IENvbXBvbmVudDtcbn1cblxud2luZG93LmluaXRpYXRlQ29tcG9uZW50cyA9IGZ1bmN0aW9uKCkge1xuICAkKCdbZGF0YS1jb21wb25lbnRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBkYXRhID0gJCggdGhpcyApLmRhdGEoJ2NvbXBvbmVudCcpO1xuICAgIGlmICggQXJyYXkuaXNBcnJheSggZGF0YSApICkge1xuICAgICAgZm9yKCB2YXIgaSBpbiBkYXRhICkge1xuICAgICAgICBidWlsZENvbXBvbmVudCggdGhpcywgZGF0YVtpXS50eXBlLCBkYXRhW2ldICk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICggdHlwZW9mIGRhdGEgPT0gXCJvYmplY3RcIiApIHtcbiAgICAgIGJ1aWxkQ29tcG9uZW50KCB0aGlzLCBkYXRhLnR5cGUsIGRhdGEgKTtcbiAgICB9IGVsc2UgaWYgKCB0eXBlb2YgZGF0YSA9PSBcInN0cmluZ1wiICkge1xuICAgICAgYnVpbGRDb21wb25lbnQoIHRoaXMsIGRhdGEsICQoIHRoaXMgKS5kYXRhKCkgKTtcbiAgICB9XG5cbiAgfSk7XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IGluaXRpYXRlQ29tcG9uZW50cygpKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1JbnB1dCB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgc2VsZWN0b3I6IFwiPiBpbnB1dFwiLFxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kc2VsZWN0b3IgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5zZWxlY3Rvcik7XG5cbiAgICB0aGlzLiRlbFxuICAgICAgLm9uKFwiZm9jdXMgYmx1clwiLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMub25Ub2dnbGVTaHJpbmsoZXZlbnQpKVxuICAgICAgLm9uKFwiaW5wdXQgY2hhbmdlXCIsIHRoaXMub3B0aW9ucy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5vbkNoYW5nZShldmVudCkpO1xuXG4gICAgaWYgKHRoaXMuaXNGaWxsZWQodGhpcy4kc2VsZWN0b3IpKSB7XG4gICAgICB0aGlzLiRzZWxlY3Rvci5hdHRyKFwiZGF0YS1kaXJ0eVwiLCB0cnVlKTtcbiAgICAgIHRoaXMuJHNlbGVjdG9yLmRhdGEoXCJkaXJ0eS1pbXBvcnRhbnRcIiwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25Ub2dnbGVTaHJpbmsoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICBpZiAodGhpcy5pc0ZpbGxlZCh0YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldC5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIpKSB7XG4gICAgICB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIiwgdHJ1ZSk7XG4gICAgICB0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiKSA9PT0gdHJ1ZSk7XG4gICAgfVxuICB9XG5cblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xuXG4gICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRhcmdldC5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIpID8gdHJ1ZSA6IHRoaXMuaXNGaWxsZWQodGFyZ2V0KSlcbiAgICB0YXJnZXQuYXR0cihcInZhbHVlXCIsIHRhcmdldC52YWwoKSk7XG4gIH1cblxuICBoYXNWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICEoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKTtcbiAgfVxuXG4gIGlzRmlsbGVkKGVsKSB7XG4gICAgcmV0dXJuIGVsICYmICh0aGlzLmhhc1ZhbHVlKGVsLnZhbCgpKSAmJiBlbC52YWwoKSAhPT0gXCJcIik7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1UZXh0YXJlYSB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgc2VsZWN0b3I6IFwiPiB0ZXh0YXJlYVwiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiRzZWxlY3RvciA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnNlbGVjdG9yKTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJmb2N1cyBibHVyXCIsIHRoaXMub3B0aW9ucy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5vblRvZ2dsZVNocmluayhldmVudCkpXG4gICAgICAub24oXCJpbnB1dCBjaGFuZ2VcIiwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLm9uQ2hhbmdlKGV2ZW50KSlcbiAgICA7XG4gIH1cblxuICBvblRvZ2dsZVNocmluayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xuICAgIGlmICh0aGlzLmlzRmlsbGVkKHRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIHRhcmdldC5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIpKSB7XG4gICAgICB0YXJnZXQuYXR0cihcImRhdGEtZGlydHlcIiwgdHJ1ZSk7XG4gICAgICB0YXJnZXQuZGF0YShcImRpcnR5LWltcG9ydGFudFwiLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRhcmdldC5hdHRyKFwiZGF0YS1kaXJ0eVwiKSA9PT0gdHJ1ZSk7XG4gICAgfVxuICB9XG5cblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xuXG4gICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWRpcnR5XCIsIHRhcmdldC5kYXRhKFwiZGlydHktaW1wb3J0YW50XCIpID8gIHRydWUgOiB0aGlzLmlzRmlsbGVkKHRhcmdldCkpXG5cbiAgICB0YXJnZXQuYXR0cihcInZhbHVlXCIsIHRhcmdldC52YWwoKSk7XG5cbiAgfVxuXG4gIGhhc1ZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgIShBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApO1xuICB9XG5cbiAgaXNGaWxsZWQoZWwpIHtcbiAgICByZXR1cm4gZWwgJiYgKHRoaXMuaGFzVmFsdWUoZWwudmFsKCkpICYmIGVsLnZhbCgpICE9PSBcIlwiKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFtYnVyZ2VyIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBjbGFzc05hbWU6IFwiYS1oYW1idXJnZXItLW9wZW5cIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy4kZWwub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHRoaXMub25DbGljayhldmVudCkpO1xuICB9XG5cbiAgb25DbGljayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy4kZWwudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLmNsYXNzTmFtZSk7XG4gICAgdGhpcy4kZWwudHJpZ2dlcihcImhhbWJ1cmdlci5jbGlja1wiKTtcbiAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxEb3duIHtcbiAgICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgICAgdGhpcy4kZWwgPSBlbDtcbiAgXG4gICAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgc2VsZWN0b3I6IFwiPiBpbnB1dFwiLFxuICAgICAgfTtcbiAgXG4gICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICBcbiAgICAgIHRoaXMuJHNlbGVjdG9yID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuc2VsZWN0b3IpO1xuICBcbiAgICAgIHRoaXMuJGVsXG4gICAgICAgIC5vbihcImZvY3VzIGJsdXJcIiwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKTtcbiAgICB9XG4gIFxuICAgIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgIH1cbiAgfVxuICAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvcmRpb24ge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG5cbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBcImFjY29yZGlvbkhlYWRzXCI6IFwiPiAubS1hY2NvcmRpb25fX2NvbnRhaW5lciAubS1hY2NvcmRpb25fX2hlYWRcIixcbiAgICAgIFwiYWNjb3JkaW9uQm9kaWVzXCI6IFwiPiAubS1hY2NvcmRpb25fX2NvbnRhaW5lciAubS1hY2NvcmRpb25fX2JvZHlcIixcbiAgICAgIFwiYWN0aXZlQ2xhc3NcIjogXCJtLWFjY29yZGlvbl9faGVhZC0tYWN0aXZlXCJcbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuYWNjb3JkaW9uSGVhZHMgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5hY2NvcmRpb25IZWFkcyk7XG4gICAgdGhpcy5hY2NvcmRpb25Cb2RpZXMgPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5hY2NvcmRpb25ib2RpZXMpO1xuICAgIHRoaXMuYWN0aXZlQ2xhc3MgPSB0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3M7XG4gICAgdGhpcy5zaG93T25seU9uZSA9IHRoaXMub3B0aW9ucy5zaG93T25seU9uZTtcblxuICAgIHRoaXMuJGVsLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLmFjY29yZGlvbkhlYWRzLCAoZSkgPT4gdGhpcy5vbkNsaWNrKGUpKTtcbiAgfVxuXG4gIG9uQ2xpY2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmN1cnJUYXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG5cbiAgICBpZiAodGhpcy5zaG93T25seU9uZSkge1xuICAgICAgaWYgKHRoaXMuY3VyclRhcmdldC5oYXNDbGFzcyh0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3MpKSB7XG4gICAgICAgIHRoaXMuY3VyclRhcmdldC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY2NvcmRpb25IZWFkcy5yZW1vdmVDbGFzcyh0aGlzLmFjdGl2ZUNsYXNzKTtcbiAgICAgICAgdGhpcy5jdXJyVGFyZ2V0LmFkZENsYXNzKHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VyclRhcmdldC50b2dnbGVDbGFzcyh0aGlzLmFjdGl2ZUNsYXNzKTtcbiAgICB9XG5cbiAgICB0aGlzLiRlbC50cmlnZ2VyKFwiYWNjb3JkaW9uLmNoYW5nZVwiKTtcbiAgfVxuXG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBvbkxvYWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLm9uTG9hZCkge1xuICAgICAgcmV0dXJuICQuZmFuY3lib3gub3BlbihlbC5nZXQoMCkpO1xuICAgIH1cblxuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYkRlZmF1bHQge1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG5cbiAgICB0aGlzLiRlbCA9IGVsO1xuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBcImNvbnRhaW5lclwiOiBcIi5tLXRhYi1kZWZhdWx0XCIsXG4gICAgICBcInRhYkl0ZW1zXCI6IFwiPiAubS10YWItZGVmYXVsdF9faXRlbXMgLm0tdGFiLWRlZmF1bHRfX2l0ZW1zLS1kZXNjXCIsXG4gICAgICBcInRhYlBhbmVzXCI6IFwiPiAubS10YWItZGVmYXVsdF9fcGFuZXMgLm0tdGFiLWRlZmF1bHRfX3BhbmVcIixcbiAgICAgIFwiYWN0aXZlVGFiSXRlbUNsYXNzXCI6IFwibS10YWItZGVmYXVsdF9faXRlbS0tYWN0aXZlXCIsXG4gICAgICBcImFjdGl2ZVRhYlBhbmVDbGFzc1wiOiBcIm0tdGFiLWRlZmF1bHRfX3BhbmUtLWFjdGl2ZVwiLFxuICAgICAgXCJpbkFjdGl2ZVRhYlBhbmVDbGFzc1wiOiBcIm0tdGFiLWRlZmF1bHRfX3BhbmUtLWluYWN0aXZlXCIsXG4gICAgICBhY3RpdmVJbmRleDogMCxcbiAgICAgIHNlbGVjdDogXCIuYS1zZWxlY3RcIlxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy50YWJJdGVtcyA9IHRoaXMuJGVsLmZpbmQoIHRoaXMub3B0aW9ucy50YWJJdGVtcyApO1xuICAgIHRoaXMudGFiUGFuZXMgPSB0aGlzLiRlbC5maW5kKCB0aGlzLm9wdGlvbnMudGFiUGFuZXMgKTtcblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJjbGlja1wiLCBgJHt0aGlzLm9wdGlvbnMudGFiSXRlbXN9IGFgLCAoZSkgPT4gdGhpcy5vbkNsaWNrKGUpKVxuICAgICAgLm9uKFwiY2hhbmdlXCIsIHRoaXMub3B0aW9ucy5zZWxlY3QsIChldmVudCkgPT4gdGhpcy5vbkNoYW5nZShldmVudCkpXG4gICAgO1xuXG4gICAgdGhpcy5zZXRBY3RpdmUoIHRoaXMub3B0aW9ucy5hY3RpdmVJbmRleCApO1xuICB9XG5cbiAgb25DbGljayAoIGUgKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGluZGV4ID0gJChlLmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpLnBhcmVudCgpLmluZGV4KCk7XG4gICAgdGhpcy5zZXRBY3RpdmUoIGluZGV4ICk7XG4gICAgJChkb2N1bWVudCkudHJpZ2dlcihcInRhYi5zaG93XCIsIGluZGV4KVxuICB9XG5cbiAgb25DaGFuZ2UgKCBldmVudCApIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGluZGV4ID0gJChldmVudC50YXJnZXQpLnZhbCgpO1xuICAgIHRoaXMuc2V0QWN0aXZlKCBpbmRleCApO1xuICB9XG5cbiAgc2V0QWN0aXZlKCBpbmRleCApIHtcbiAgICB0aGlzLm9wdGlvbnMuYWN0aXZlSW5kZXggPSBpbmRleDtcblxuICAgIHRoaXMudGFiSXRlbXNcbiAgICAgIC5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb25zLmFjdGl2ZVRhYkl0ZW1DbGFzcyApXG4gICAgICAuZXEoIGluZGV4IClcbiAgICAgIC5hZGRDbGFzcyggdGhpcy5vcHRpb25zLmFjdGl2ZVRhYkl0ZW1DbGFzcyApO1xuXG4gICAgdGhpcy50YWJQYW5lc1xuICAgICAgLmZpbHRlciggYC4ke3RoaXMub3B0aW9ucy5hY3RpdmVUYWJQYW5lQ2xhc3N9YCApXG4gICAgICAuYWRkQ2xhc3MoIHRoaXMub3B0aW9ucy5pbkFjdGl2ZVRhYlBhbmVDbGFzcyApO1xuXG4gICAgdGhpcy50YWJQYW5lc1xuICAgICAgLnJlbW92ZUNsYXNzKCB0aGlzLm9wdGlvbnMuYWN0aXZlVGFiUGFuZUNsYXNzIClcbiAgICAgIC5lcSggaW5kZXggKVxuICAgICAgLmFkZENsYXNzKCB0aGlzLm9wdGlvbnMuYWN0aXZlVGFiUGFuZUNsYXNzIClcbiAgICAgIC5maWx0ZXIoIGAuJHt0aGlzLm9wdGlvbnMuaW5BY3RpdmVUYWJQYW5lQ2xhc3N9YCApXG4gICAgICAucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9ucy5pbkFjdGl2ZVRhYlBhbmVDbGFzcyApO1xuXG4gIH1cblxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lbGluZSB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWwgPSBlbDtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgYnV0dG9uczoge1xuICAgICAgICBsZWZ0OiBcIi5tLXRpbWVsaW5lX19jb250cm9sLS1sZWZ0XCIsXG4gICAgICAgIHJpZ2h0OiBcIi5tLXRpbWVsaW5lX19jb250cm9sLS1yaWdodFwiXG4gICAgICB9LFxuICAgICAgdGltZWxpbmVCb3g6IFwiLm0tdGltZWxpbmVfX2NvbnRlbnQgbGlcIixcbiAgICAgIGNhcmQ6IFwiLm0tY2FyZC10aW1lbGluZVwiLFxuICAgICAgcHJvZ3Jlc3NiYXI6IFwiLm0tdGltZWxpbmUtcHJvZ3Jlc3NfX2JhclwiXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLiR0aW1lbGluZUJveCA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnRpbWVsaW5lQm94KTtcbiAgICB0aGlzLiRjYXJkID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMuY2FyZCk7XG4gICAgdGhpcy4kbGVmdEJ1dHRvbiA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLmJ1dHRvbnMubGVmdCk7XG4gICAgdGhpcy4kcmlnaHRCdXR0b24gPSB0aGlzLiRlbC5maW5kKHRoaXMub3B0aW9ucy5idXR0b25zLnJpZ2h0KTtcbiAgICB0aGlzLiRwcm9ncmVzc2JhciA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLnByb2dyZXNzYmFyKTtcblxuICAgIHRoaXMuZWxXaWR0aCA9IHRoaXMuJGVsWzBdLnNjcm9sbFdpZHRoO1xuICAgIHRoaXMuY2FyZFNpemUgPSAyNjg7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub25Jbml0KCksIDEwMCk7XG5cblxuICAgIHRoaXMuJGVsXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuYnV0dG9ucy5yaWdodCwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrUmlnaHQoZXZlbnQpKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLmJ1dHRvbnMubGVmdCwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrTGVmdChldmVudCkpXG4gICAgICAub24oXCJzY3JvbGxcIiwgKCkgPT4gdGhpcy5zY3JvbGxDaGVjaygpKVxuICB9XG5cbiAgb25Jbml0KCkge1xuICAgIHRoaXMuY2FyZFNpemUgPSB0aGlzLiRjYXJkLmlubmVyV2lkdGgoKTtcblxuICAgIHRoaXMuJHByb2dyZXNzYmFyLndpZHRoKHRoaXMuJGVsWzBdLnNjcm9sbFdpZHRoIC0gMTgyKVxuICB9XG5cbiAgb25DbGlja1JpZ2h0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBsZWZ0UG9zID0gdGhpcy4kZWwuc2Nyb2xsTGVmdCgpO1xuICAgIHRoaXMuY2FyZFNpemUgPSB0aGlzLiRjYXJkLmlubmVyV2lkdGgoKTtcblxuICAgIHRoaXMuJGVsLmFuaW1hdGUoe1xuICAgICAgc2Nyb2xsTGVmdDogbGVmdFBvcyArIHRoaXMuY2FyZFNpemVcbiAgICB9LCA0MDAsICgpID0+IHRoaXMuc2Nyb2xsQ2hlY2soKSk7XG4gIH1cblxuICBvbkNsaWNrTGVmdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbGVmdFBvcyA9IHRoaXMuJGVsLnNjcm9sbExlZnQoKTtcbiAgICB0aGlzLmNhcmRTaXplID0gdGhpcy4kY2FyZC5pbm5lcldpZHRoKCk7XG5cbiAgICB0aGlzLiRlbC5hbmltYXRlKHtcbiAgICAgIHNjcm9sbExlZnQ6IGxlZnRQb3MgLSB0aGlzLmNhcmRTaXplXG4gICAgfSwgNDAwLCAoKSA9PiB0aGlzLnNjcm9sbENoZWNrKCkpO1xuICB9XG5cbiAgc2Nyb2xsQ2hlY2soKSB7XG4gICAgY29uc3QgbGVmdFBvcyA9IHRoaXMuJGVsLnNjcm9sbExlZnQoKTtcbiAgICB0aGlzLmNhcmRTaXplID0gdGhpcy4kY2FyZC5pbm5lcldpZHRoKCk7XG4gICAgXG4gICAgaWYgKGxlZnRQb3MgPT0gMCkge1xuICAgICAgICB0aGlzLiRsZWZ0QnV0dG9uLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgfVxuXG4gICAgaWYgKGxlZnRQb3MgPiAwKSB7XG4gICAgICAgIHRoaXMuJGxlZnRCdXR0b24ucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICB9IFxuXG4gICAgaWYgKGxlZnRQb3MgPj0gKHRoaXMuZWxXaWR0aCAtIDI1MCkpIHtcbiAgICAgICAgdGhpcy4kcmlnaHRCdXR0b24uYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICB9XG5cbiAgICBpZiAobGVmdFBvcyA8ICh0aGlzLmVsV2lkdGggLSAyNTApKSB7XG4gICAgICAgIHRoaXMuJHJpZ2h0QnV0dG9uLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsID0gZWw7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGhhbWJ1cmdlcjogXCIuYS1oYW1idXJnZXJcIixcbiAgICAgIHNoYWRvdzogXCIuYS1zaGFkb3dcIixcbiAgICAgIG5hdjoge1xuICAgICAgICBzZWxmOiBcIi5tLW5hdlwiLFxuICAgICAgICB0b2dnbGU6IFwibS1uYXYtLW9wZW5cIixcbiAgICAgICAgaXRlbTogXCJuYXYgPiB1bCA+IGxpIHNwYW5cIixcbiAgICAgICAgYWN0aXZlOiBcIm0tbmF2LS1hY3RpdmVcIixcbiAgICAgIH0sXG4gICAgICBzZWFyY2g6IHtcbiAgICAgICAgc2VsZjogXCIubS1zZWFyY2gtYmFyXCIsXG4gICAgICAgIHRyaWdnZXI6IFwiLmpzLXNlYXJjaC1oZWFkZXJcIixcbiAgICAgICAgY2xhc3M6IFwibS1zZWFyY2gtYmFyLS1vcGVuXCJcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuJGhhbWJ1cmdlciA9IHRoaXMuJGVsLmZpbmQodGhpcy5vcHRpb25zLmhhbWJ1cmdlcik7XG4gICAgdGhpcy4kbmF2ID0gdGhpcy4kZWwuZmluZCh0aGlzLm9wdGlvbnMubmF2LnNlbGYpO1xuICAgIHRoaXMuJHNlYXJjaEJhciA9ICQodGhpcy5vcHRpb25zLnNlYXJjaC5zZWxmKTtcbiAgICB0aGlzLiRzaGFkb3cgPSAkKHRoaXMub3B0aW9ucy5zaGFkb3cpO1xuXG4gICAgdGhpcy4kZWxcbiAgICAgIC5vbihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5uYXYuaXRlbSwgZXZlbnQgPT4gdGhpcy5vbkNsaWNrRHJvcGRvd24oZXZlbnQpKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLnNlYXJjaC50cmlnZ2VyLCBldmVudCA9PiB0aGlzLm9uQ2xpY2tTZWFyY2goZXZlbnQpKVxuXG4gICAgJChkb2N1bWVudClcbiAgICAgIC5vbihcImhhbWJ1cmdlci5jbGlja1wiLCAoZXZlbnQpID0+IHRoaXMub25DbGlja0hhbWJ1cmdlcihldmVudCkpXG4gICAgICAub24oXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuc2hhZG93LCAoKSA9PiB0aGlzLmNsb3NlQWxsKCkpXG5cbiAgfVxuXG4gIGNsb3NlQWxsKCkge1xuICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy50b2dnbGUpO1xuICAgIHRoaXMuJGhhbWJ1cmdlci5yZW1vdmVDbGFzcygnYS1oYW1idXJnZXItLW9wZW4nKVxuICAgIHRoaXMuJHNlYXJjaEJhci5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuc2VhcmNoLmNsYXNzKVxuICAgICQoXCJodG1sXCIpLnJlbW92ZUNsYXNzKCdkaXNhYmxlLXNjcm9sbCcpO1xuICB9XG5cbiAgb25DbGlja0Ryb3Bkb3duKGV2ZW50KSB7XG4gICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgaWYgKCR0YXJnZXQubmV4dChcInVsXCIpLmxlbmd0aCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0ICRwYXJlbnQgPSAkdGFyZ2V0LnBhcmVudCgpO1xuXG4gICAgICBpZiAoISRwYXJlbnQuaGFzQ2xhc3ModGhpcy5vcHRpb25zLm5hdi5hY3RpdmUpKSB7XG4gICAgICAgICQodGhpcy5vcHRpb25zLm5hdi5pdGVtKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMubmF2LmFjdGl2ZSlcbiAgICAgICAgJHBhcmVudC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMubmF2LmFjdGl2ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRwYXJlbnQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLm5hdi5hY3RpdmUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICBvbkNsaWNrU2VhcmNoKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgdGhpcy4kc2VhcmNoQmFyLnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy5zZWFyY2guY2xhc3MpXG4gICAgdGhpcy4kbmF2LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5uYXYudG9nZ2xlKTtcbiAgICB0aGlzLiRoYW1idXJnZXIucmVtb3ZlQ2xhc3MoJ2EtaGFtYnVyZ2VyLS1vcGVuJyk7XG5cbiAgICBpZiAodGhpcy4kc2VhcmNoQmFyLmhhc0NsYXNzKHRoaXMub3B0aW9ucy5zZWFyY2guY2xhc3MpKXtcbiAgICAgICQoXCJodG1sXCIpLmFkZENsYXNzKCdkaXNhYmxlLXNjcm9sbCcpO1xuICAgICAgdGhpcy4kZWwuYWRkQ2xhc3MoJ28taGVhZGVyLS1vcGVuZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcygnZGlzYWJsZS1zY3JvbGwnKTtcbiAgICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKCdvLWhlYWRlci0tb3BlbmVkJylcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrSGFtYnVyZ2VyKGV2ZW50KSB7XG4gICAgY29uc3Qgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgIGlmICh3aW5kb3dXaWR0aCA8IDEwMjUpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuJG5hdi50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMubmF2LnRvZ2dsZSk7XG4gICAgICB0aGlzLiRzZWFyY2hCYXIucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnNlYXJjaC5jbGFzcyk7XG5cbiAgICAgIGlmICh0aGlzLiRuYXYuaGFzQ2xhc3ModGhpcy5vcHRpb25zLm5hdi50b2dnbGUpKXtcbiAgICAgICAgJChcImh0bWxcIikuYWRkQ2xhc3MoJ2Rpc2FibGUtc2Nyb2xsJyk7XG4gICAgICAgIHRoaXMuJGVsLmFkZENsYXNzKCdvLWhlYWRlci0tb3BlbmVkJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCJodG1sXCIpLnJlbW92ZUNsYXNzKCdkaXNhYmxlLXNjcm9sbCcpO1xuICAgICAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcygnby1oZWFkZXItLW9wZW5lZCcpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=
