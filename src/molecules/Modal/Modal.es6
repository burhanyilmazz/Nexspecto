export default class Modal {
  constructor(el, options) {
    this.$el = el;

    const defaults = {
      onLoad: false
    };

    this.options = $.extend({}, defaults, options);

    if (this.options.onLoad) {
      return $.fancybox.open(el.get(0));
    }

  }

}
