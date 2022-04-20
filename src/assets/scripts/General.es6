$(document).ready(() => {
  $('[data-fancybox]').fancybox({
    toolbar: false,
    smallBtn: true,
  })

  var myFullpage = new fullpage('#fullpage', {
    sectionsColor: ['#0b0b45', '#fff', '#0b0b45', 'whitesmoke', '#ccddff'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    menu: '#menu',
    slidesNavigation: true,
    lazyLoad: true,
    credits: {
      enabled: false
    }
  });
});
