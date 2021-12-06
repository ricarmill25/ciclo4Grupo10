(function () {
    'use strict'
  
    feather.replace({ 'aria-hidden': 'true' })
  
    // Graphs
    var ctx = document.getElementById('myChart1')
    // eslint-disable-next-line no-unused-vars
    var myChart1 = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [
          'Domingo',
          'Lunes',
          'Martes',
          'Miércoles',
          'Jueves',
          'Viernes',
          'Sabado'
        ],
        datasets: [{
          data: [
            72,
            34,
            13,
            23,
            21,
            29,
            54
          ],
          lineTension: 0,
          backgroundColor: [
            '#FFB233',
            '#FF5733',
            '#33C1FF',
            '#3364FF',
            '#BE33FF',
            '#33FF83',
            '#FA5A56'
          ],
          borderWidth: 4,
          pointBackgroundColor: '#33FFB2'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })
  })()
  