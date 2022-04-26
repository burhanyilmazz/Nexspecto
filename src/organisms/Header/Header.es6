import Sticky from "../../assets/scripts/Sticky";
export default class Header {
  constructor(el, options) {
    this.$el = el;

    const defaults = {
      hamburger: ".a-hamburger",
      nav: {
        self: ".m-nav",
        toggle: "m-nav--open",
        item: "nav > ul > li span",
        active: "m-nav--active",
      },
    };

    this.options = $.extend({}, defaults, options);

    this.$hamburger = this.$el.find(this.options.hamburger);
    this.$nav = this.$el.find(this.options.nav.self);

    this.sticky = new Sticky(el, {
      prefix: "o-header",
    });

    $(document)
      .on("hamburger.click", (event) => this.onClickHamburger(event));

  }

  closeAll() {
    this.$el.removeClass(this.options.toggle);
    this.$hamburger.removeClass('a-hamburger--open')
    $("html").removeClass('disable-scroll');
  }


  onClickHamburger(event) {
    const windowWidth = $(window).width();

    if (windowWidth < 1025) {
      event.preventDefault()
      this.$nav.toggleClass(this.options.nav.toggle);

      if (this.$nav.hasClass(this.options.nav.toggle)) {
        $("html").addClass('disable-scroll');
        this.$el.addClass('o-header--opened')
      } else {
        $("html").removeClass('disable-scroll');
        this.$el.removeClass('o-header--opened')
      }
    }
  }
}
