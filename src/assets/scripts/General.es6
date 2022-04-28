$(document).ready(() => {
  $('[data-fancybox]').fancybox({
    toolbar: false,
    smallBtn: true,
  })

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

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

/* const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
}; */

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    }
    /* else if (elementOutofView(el)) {
         hideScrollElement(el)
       } */
  })
}

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
