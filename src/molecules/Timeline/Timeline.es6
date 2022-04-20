export default class Timeline {
  constructor(el, options) {
    this.$el = el;

    const defaults = {
      buttons: {
        left: ".m-timeline__control--left",
        right: ".m-timeline__control--right"
      },
      timelineBox: ".m-timeline__content li",
      card: ".m-card-timeline"
    };

    this.options = $.extend({}, defaults, options);

    this.$timelineBox = this.$el.find(this.options.timelineBox);
    this.$card = this.$el.find(this.options.card);
    this.$leftButton = this.$el.find(this.options.buttons.left);
    this.$rightButton = this.$el.find(this.options.buttons.right);

    this.elWidth = this.$el[0].scrollWidth;
    this.timelineSize = 268;

    setTimeout(() => this.onInit());


    this.$el
      .on("click", this.options.buttons.right, event => this.onClickRight(event))
      .on("click", this.options.buttons.left, event => this.onClickLeft(event))
      .on("scroll", event => this.scrollCheck())
  }

  onInit() {
    this.cardSize = this.$card.innerWidth();
    this.timelineSize = this.$timelineBox.innerWidth();
  }

  onClickRight(event) {
    event.preventDefault();
    const leftPos = this.$el.scrollLeft();
    this.timelineSize = this.$timelineBox.innerWidth();

    this.$el.animate({
      scrollLeft: leftPos + this.timelineSize
    }, 400, () => this.scrollCheck());
  }

  onClickLeft(event) {
    event.preventDefault();
    const leftPos = this.$el.scrollLeft();
    this.timelineSize = this.$timelineBox.innerWidth();

    this.$el.animate({
      scrollLeft: leftPos - this.timelineSize
    }, 400, () => this.scrollCheck());
  }

  scrollCheck() {
    const leftPos = this.$el.scrollLeft();
    this.timelineSize = this.$timelineBox.innerWidth();
    
    if (leftPos == 0) {
        this.$leftButton.addClass("disabled");
    }

    if (leftPos > 0) {
        this.$leftButton.removeClass("disabled");
    } 

    if (leftPos >= (this.elWidth - 250)) {
        this.$rightButton.addClass("disabled");
    }

    if (leftPos < (this.elWidth - 250)) {
        this.$rightButton.removeClass("disabled");
    }
  }
}
