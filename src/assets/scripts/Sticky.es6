export default class Sticky extends Headroom {

  constructor(el, options) {
    const $el = el;

    const defaults = {
      prefix: 'sticky',
      tolerance: {
        down : 10,
        up : 0
      },
      offset : 64
    };

    options = $.extend({}, defaults, options);

    options.classes = {
      initial : `${options.prefix}`,
      pinned : `${options.prefix}--pinned`,
      unpinned : `${options.prefix}--unpinned`,
      top : `${options.prefix}--top`,
      notTop : `${options.prefix}--not-top`,
      bottom : `${options.prefix}--bottom`,
      notBottom : `${options.prefix}--not-bottom`
    }

    super($el.get(0), options);
    super.init();
  }

}
