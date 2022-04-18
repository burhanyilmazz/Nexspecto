export default class FormTextarea {
  constructor(el, options) {
    this.$el = el;

    const defaults = {
      selector: "> textarea"
    };

    this.options = $.extend({}, defaults, options);

    this.$selector = this.$el.find(this.options.selector);

    this.$el
      .on("focus blur", this.options.selector, event => this.onToggleShrink(event))
      .on("input change", this.options.selector, event => this.onChange(event))
    ;
  }

  onToggleShrink(event) {
    event.preventDefault();
    const target = $(event.target);
    if (this.isFilled(target)) {
      return;
    }

    if ( target.data("dirty-important")) {
      target.attr("data-dirty", true);
      target.data("dirty-important", true);
    } else {
      target.attr("data-dirty", target.attr("data-dirty") === true);
    }
  }


  onChange(event) {
    event.preventDefault();
    const target = $(event.target);

    target.attr("data-dirty", target.data("dirty-important") ?  true : this.isFilled(target))

    target.attr("value", target.val());

  }

  hasValue(value) {
    return value != null && !(Array.isArray(value) && value.length === 0);
  }

  isFilled(el) {
    return el && (this.hasValue(el.val()) && el.val() !== "");
  }
}
