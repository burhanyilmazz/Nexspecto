export default class TabDefault {

  constructor(el, options) {

    this.$el = el;

    const defaults = {
      "container": ".m-tab-default",
      "tabItems": "> .m-tab-default__items .m-tab-default__items--desc",
      "tabPanes": "> .m-tab-default__panes .m-tab-default__pane",
      "activeTabItemClass": "m-tab-default__item--active",
      "activeTabPaneClass": "m-tab-default__pane--active",
      "inActiveTabPaneClass": "m-tab-default__pane--inactive",
      activeIndex: 0,
      select: ".a-select"
    };

    this.options = $.extend({}, defaults, options);

    this.tabItems = this.$el.find( this.options.tabItems );
    this.tabPanes = this.$el.find( this.options.tabPanes );

    this.$el
      .on("click", `${this.options.tabItems} a`, (e) => this.onClick(e))
      .on("change", this.options.select, (event) => this.onChange(event))
    ;

    this.setActive( this.options.activeIndex );
  }

  onClick ( e ) {
    e.preventDefault();
    const index = $(e.currentTarget).parent().parent().index();
    this.setActive( index );
    $(document).trigger("tab.show", index)
  }

  onChange ( event ) {
    event.preventDefault();
    const index = $(event.target).val();
    this.setActive( index );
  }

  setActive( index ) {
    this.options.activeIndex = index;

    this.tabItems
      .removeClass( this.options.activeTabItemClass )
      .eq( index )
      .addClass( this.options.activeTabItemClass );

    this.tabPanes
      .filter( `.${this.options.activeTabPaneClass}` )
      .addClass( this.options.inActiveTabPaneClass );

    this.tabPanes
      .removeClass( this.options.activeTabPaneClass )
      .eq( index )
      .addClass( this.options.activeTabPaneClass )
      .filter( `.${this.options.inActiveTabPaneClass}` )
      .removeClass( this.options.inActiveTabPaneClass );

  }


}
