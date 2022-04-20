export default class ScrollDown {
    constructor(el, options) {
      this.$el = el;
  
      const defaults = {
        selector: "> input",
      };
  
      this.options = $.extend({}, defaults, options);
  
      this.$selector = this.$el.find(this.options.selector);
  
      this.$el
        .on("focus blur", this.options.selector, event => this.onClick(event));
    }
  
    onClick(event) {
      console.log(event)
    }
  }
  