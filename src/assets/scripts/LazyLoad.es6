export default class LazyLoad {

  constructor(el, options) {

    this.$el = el;

    const defaults = {
    }

    this.options = $.extend({}, defaults, options);

    $(document).on("lazybeforeunveil", this.options.speechButton, event => this.onLazyBeforeUnveil(event));

  }

  onLazyBeforeUnveil(event) {
    const lazyElement = $(event.target);
    const background = lazyElement.attr( "data-background" );
    if ( background ) {
      lazyElement.css({
        backgroundImage: `url(${background})`
      });
    }
  }
}

new LazyLoad();
