export default class Team {
  constructor(el, options) {
    this.$el = el;

    const defaults = {
      buttons: {
        left: ".o-team__control--left",
        right: ".o-team__control--right"
      },
      list: ".o-team__list",
      card: ".m-card-user",
    };

    this.options = $.extend({}, defaults, options);

    this.$list = this.$el.next(this.options.list);
    this.$card = this.$list.find(this.options.card);
    this.$leftButton = this.$el.find(this.options.buttons.left);
    this.$rightButton = this.$el.find(this.options.buttons.right);

    this.elWidth = this.$list.width();

    this.cardSize = 268;

    setTimeout(() => this.onInit(), 100);

    this.$el
      .on("click", this.options.buttons.right, event => this.onClickRight(event))
      .on("click", this.options.buttons.left, event => this.onClickLeft(event))
    this.$list
      .on("scroll", () => this.scrollCheck())
  }

  onInit() {
    this.cardSize = this.$card.innerWidth();
  }

  onClickRight(event) {
    event.preventDefault();
    const leftPos = this.$list.scrollLeft();
    this.cardSize = this.$card.innerWidth();

    this.$list.animate({
      scrollLeft: leftPos + this.cardSize
    }, 400, () => this.scrollCheck());
  }

  onClickLeft(event) {
    event.preventDefault();
    const leftPos = this.$list.scrollLeft();
    this.cardSize = this.$card.innerWidth();

    this.$list.animate({
      scrollLeft: leftPos - this.cardSize
    }, 400, () => this.scrollCheck());
  }

  scrollCheck() {
    const leftPos = this.$list.scrollLeft();
    this.cardSize = this.$card.innerWidth();

    if (leftPos == 0) {
      this.$leftButton.addClass("disabled");
    }

    if (leftPos > 0) {
      this.$leftButton.removeClass("disabled");
    }

    if (this.$list[0].offsetWidth + this.$list[0].scrollLeft >= this.$list[0].scrollWidth) {
      this.$rightButton.addClass("disabled");
    } else {
      this.$rightButton.removeClass("disabled");
    }

  }
}
