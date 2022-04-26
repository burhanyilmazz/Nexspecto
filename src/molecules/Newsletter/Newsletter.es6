export default class Newsletter {
  constructor(el, options) {
    this.$el = el;

    const defaults = {
      selector: ".m-newsletter__input input",
    };

    this.options = $.extend({}, defaults, options);

    this.$selector = this.$el.find(this.options.selector);

    this.$el
      .on("focus blur", this.options.selector, event => this.onToggleShrink(event))
      .on("input change", this.options.selector, event => this.onChange(event));

    if (this.isFilled(this.$selector)) {
      this.$selector.parent().attr("data-dirty", true);
      this.$selector.parent().data("dirty-important", true);
    }
  }

  onToggleShrink(event) {
    event.preventDefault();
    const target = $(event.target);
    if (this.isFilled(target)) {
      return;
    }

    target.parent().attr("data-dirty", target.attr("data-dirty") === true);
  }


  onChange(event) {
    event.preventDefault();
    const target = $(event.target);

    target.parent().attr("data-dirty", this.isFilled(target))
    target.attr("value", target.val());
  }

  hasValue(value) {
    return value != null && !(Array.isArray(value) && value.length === 0);
  }

  isFilled(el) {
    return el && (this.hasValue(el.val()) && el.val() !== "");
  }
}
