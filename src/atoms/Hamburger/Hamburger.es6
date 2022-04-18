export default class Hamburger {
  constructor(el, options) {
    this.$el = el;

    const defaults = {
      className: "a-hamburger--open"
    };

    this.options = $.extend({}, defaults, options);

    this.$el.on("click", (event) => this.onClick(event));
  }

  onClick(event) {
    event.preventDefault();
    this.$el.toggleClass(this.options.className);
    this.$el.trigger("hamburger.click");
  }

}
