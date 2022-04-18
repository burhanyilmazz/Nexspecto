export default class Accordion {

  constructor(el, options) {

    this.$el = el;

    const defaults = {
      "accordionHeads": "> .m-accordion__container .m-accordion__head",
      "accordionBodies": "> .m-accordion__container .m-accordion__body",
      "activeClass": "m-accordion__head--active"
    };

    this.options = $.extend({}, defaults, options);

    this.accordionHeads = this.$el.find(this.options.accordionHeads);
    this.accordionBodies = this.$el.find(this.options.accordionbodies);
    this.activeClass = this.options.activeClass;
    this.showOnlyOne = this.options.showOnlyOne;

    this.$el.on("click", this.options.accordionHeads, (e) => this.onClick(e));
  }

  onClick(e) {
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


}
