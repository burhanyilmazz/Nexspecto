$(document).ready(() => {
  $('[data-fancybox]').fancybox({
    toolbar: false,
    smallBtn: true,
  })

  var myFullpage = new fullpage('#fullpage', {
    sectionsColor: ['#0b0b45', '#fff', '#0b0b45', '#fff', '#0b0b45', '#0b0b45', '#0b0b45', '#0b0b45', '#fff'],
    anchors: ['', 'presale', 'about', 'tokens', 'roadmap', 'team', 'faq', 'contact', ''],
    menu: '#menu',
    slidesNavigation: false,
    lazyLoad: true,
  });

  var ctx = document.getElementById("myChart");

  var myChart = new Chart(ctx, {
    type: 'pie',
    data: window.chartData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
        tooltip: {
          backgroundColor: "#fff",
          callbacks: {
            label: (tooltipItem) => tooltipItem.label + ' ' + tooltipItem.parsed + '%',
            labelTextColor: () => "#0b0b45",
            labelColor: () => {
              return {}
            },

          }
        }
      },
      borderColor: "#fff",
      hoverBackgroundColor: "#aed4f0",
      onHover: (event, a, b) => {
        if (b.tooltip.dataPoints) {
          $(".a-chart-box").removeClass("a-chart-box--active");
          if (event.type == "mousemove") {
            $(`[data-title="${b.tooltip.dataPoints[0].label}"]`).addClass("a-chart-box--active");
          }
        }
      }
    }
  });

  $(document)
    .on('mouseleave mouseout', "#myChart", () => {
      $(".a-chart-box").map((index, item) => $(item).removeClass("a-chart-box--active"))
    })
    .on('mouseenter mouseover', ".o-tokens", () => {
      $(".a-chart-box").map((index, item) => $(item).removeClass("a-chart-box--active"))
    })

});
