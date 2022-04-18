export default class Header {
  constructor(el, options) {
    this.$el = el;

    const defaults = {
      hamburger: ".a-hamburger",
      shadow: ".a-shadow",
      nav: {
        self: ".m-nav",
        toggle: "m-nav--open",
        item: "nav > ul > li span",
        active: "m-nav--active",
      },
      search: {
        self: ".m-search-bar",
        trigger: ".js-search-header",
        class: "m-search-bar--open"
      }
    };

    this.options = $.extend({}, defaults, options);

    this.$hamburger = this.$el.find(this.options.hamburger);
    this.$nav = this.$el.find(this.options.nav.self);
    this.$searchBar = $(this.options.search.self);
    this.$shadow = $(this.options.shadow);

    this.$el
      .on("click", this.options.nav.item, event => this.onClickDropdown(event))
      .on("click", this.options.search.trigger, event => this.onClickSearch(event))

    $(document)
      .on("hamburger.click", (event) => this.onClickHamburger(event))
      .on("click", this.options.shadow, () => this.closeAll())

  }

  closeAll() {
    this.$el.removeClass(this.options.toggle);
    this.$hamburger.removeClass('a-hamburger--open')
    this.$searchBar.removeClass(this.options.search.class)
    $("html").removeClass('disable-scroll');
  }

  onClickDropdown(event) {
    const $target = $(event.currentTarget);
    if ($target.next("ul").length) {
      event.preventDefault();
      const $parent = $target.parent();

      if (!$parent.hasClass(this.options.nav.active)) {
        $(this.options.nav.item).parent().removeClass(this.options.nav.active)
        $parent.addClass(this.options.nav.active)
      } else {
        $parent.removeClass(this.options.nav.active)
      }
    }
  }


  onClickSearch(event) {
    event.preventDefault()

    this.$searchBar.toggleClass(this.options.search.class)
    this.$nav.removeClass(this.options.nav.toggle);
    this.$hamburger.removeClass('a-hamburger--open');

    if (this.$searchBar.hasClass(this.options.search.class)){
      $("html").addClass('disable-scroll');
      this.$el.addClass('o-header--opened')
    } else {
      $("html").removeClass('disable-scroll');
      this.$el.removeClass('o-header--opened')
    }
  }

  onClickHamburger(event) {
    const windowWidth = $(window).width();

    if (windowWidth < 1025) {
      event.preventDefault()
      this.$nav.toggleClass(this.options.nav.toggle);
      this.$searchBar.removeClass(this.options.search.class);

      if (this.$nav.hasClass(this.options.nav.toggle)){
        $("html").addClass('disable-scroll');
        this.$el.addClass('o-header--opened')
      } else {
        $("html").removeClass('disable-scroll');
        this.$el.removeClass('o-header--opened')
      }
    }
  }
}
