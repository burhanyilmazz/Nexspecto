export default class Nav {
  constructor(el, options) {
    this.$el = el;

    const defaults = {
      anchor: {
        self: ".m-nav li",
        link: "li a",
        active: "active"
      }
    };

    this.options = $.extend({}, defaults, options);

    this.$el
      .on("click", this.options.anchor.link, event => this.onClickNav(event))

    $(document).on("scroll", event => this.onScroll(event))

  }

  onClickNav(event) {
    event.preventDefault();
    const $target = $(event.currentTarget);
    const $hash = $($target.attr("href"))
    $target.addClass(this.options.anchor.active).siblings().removeClass(this.options.anchor.active)

    $('html, body').animate({
      scrollTop: $hash.offset().top
    }, 500);
  }


  onScroll(event) {
    const scrollPos = $(document).scrollTop();

    if (!$(this.options.anchor.self).length) {
      return
    }

    $(this.options.anchor.self).find("a").each((index, item) => {
      const currLink = $(item);
      const refElement = $(currLink.attr("href"));
      
      if (refElement.position().top <= scrollPos) {
        $(this.options.anchor.self).removeClass(this.options.anchor.active);
        currLink.parent().addClass(this.options.anchor.active);
      } else {
        currLink.parent().removeClass(this.options.anchor.active);
      }
    });
  }
}
