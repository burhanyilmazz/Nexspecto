export default class ScrollDown {
  constructor(el, options) {
    this.$el = el;

    const defaults = {
      target: "#presale",
    };

    this.options = $.extend({}, defaults, options);

    this.$el.on("click", event => this.onClick(event));
  }

  onClick(event) {
    event.preventDefault();
    $("html,body").animate({
      scrollTop: $(this.options.target).position().top
    }, 100);
  }
}
