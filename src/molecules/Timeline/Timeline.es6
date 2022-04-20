export default class Timeline {
  constructor(el, options) {
    this.$el = el;

    const defaults = {
      buttons: {
        left: ".m-timeline__control--left",
        right: ".m-timeline__control--right"
      },
      timelineBox: ".m-timeline__content li",
      card: ".m-card-timeline",
      progressbar: ".m-timeline-progress__bar"
    };

    this.options = $.extend({}, defaults, options);

    this.$timelineBox = this.$el.find(this.options.timelineBox);
    this.$card = this.$el.find(this.options.card);
    this.$leftButton = this.$el.find(this.options.buttons.left);
    this.$rightButton = this.$el.find(this.options.buttons.right);
    this.$progressbar = this.$el.find(this.options.progressbar);

    this.elWidth = this.$el[0].scrollWidth;
    this.cardSize = 268;

    setTimeout(() => this.onInit(), 100);


    this.$el
      .on("click", this.options.buttons.right, event => this.onClickRight(event))
      .on("click", this.options.buttons.left, event => this.onClickLeft(event))
      .on("scroll", () => this.scrollCheck())
  }

  onInit() {
    this.cardSize = this.$card.innerWidth();

    this.$progressbar.width(this.$el[0].scrollWidth - 182)
  }

  onClickRight(event) {
    event.preventDefault();
    const leftPos = this.$el.scrollLeft();
    this.cardSize = this.$card.innerWidth();

    this.$el.animate({
      scrollLeft: leftPos + this.cardSize
    }, 400, () => this.scrollCheck());
  }

  onClickLeft(event) {
    event.preventDefault();
    const leftPos = this.$el.scrollLeft();
    this.cardSize = this.$card.innerWidth();

    this.$el.animate({
      scrollLeft: leftPos - this.cardSize
    }, 400, () => this.scrollCheck());
  }

  scrollCheck() {
    const leftPos = this.$el.scrollLeft();
    this.cardSize = this.$card.innerWidth();
    
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
