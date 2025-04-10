google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChartPersonas);
google.charts.setOnLoadCallback(drawChartBilletera);
google.charts.setOnLoadCallback(drawChartBienestarFinanciero);

// Your Function
document.getElementById('sectionSelect').addEventListener('change', function() {
  var target = this.options[this.selectedIndex].getAttribute('data-target');
  if (target) {
      window.location.hash = target;
  }
});
document.querySelectorAll('.nav-item .btn').forEach(function(link) {
  link.addEventListener('click', function() {
      document.querySelectorAll('.nav-item .btn').forEach(function(btn) {
          btn.classList.remove('active');
      });
      this.classList.add('active');
  });
});



function drawChartPersonas() {

  // Set Data
  var data = google.visualization.arrayToDataTable([
    ['Aprobaciones', 'Millones'],
    ['ABRIL', 55],
    ['MAYO', 49],
    ['JUNIO', 44],
    ['JULIO', 60],
  ]);

  // Set Options
  var options = {
    title: 'Aprobaciones',
    width: '80%',
    minWidth: 250,
    height: 300,
    backgroundColor: 'transparent',
    bar: { groupWidth: '80%' },
    colors: ['#7e63a8', '#5fc4e1']
  };

  // Draw
  var chart = new google.visualization.ColumnChart(document.getElementById('Aprobaciones-Personas'));
  chart.draw(data, options);

  var data = google.visualization.arrayToDataTable([
    ['Genre', 'Fantasy & Sci Fi', 'a', { role: 'annotation' }],
    ['ABRIL', 10, 24, ''],
    ['MAYO', 16, 22, ''],
    ['JUNIO', 28, 19, ''],
    ['JULIO', 28, 19, '']
  ]);

  var options = {
    title: 'Desembolsos',
    width: '80%',
    minWidth: 250,
    height: 300, 
    bar: { groupWidth: '80%' },
    isStacked: true,
    colors: ['#7e63a8', '#5fc4e1']
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('Desembolsos-Personas'));
  chart.draw(data, options);

}

function drawChartBilletera() {

  // Set Data
  var data = google.visualization.arrayToDataTable([
    ['Transacciones', ''],
    ['ABRIL', 55],
    ['MAYO', 49],
    ['JUNIO', 44],
    ['JULIO', 60],
  ]);

  // Set Options
  var options = {
    title: 'Transacciones',
    width: '80%',
    minWidth: 250,
    height: 300,
    bar: { groupWidth: '80%' },
    colors: ['#5fc4e1']
  };

  // Draw
  var chart = new google.visualization.ColumnChart(document.getElementById('Transacciones-Billetera'));
  chart.draw(data, options);

  // Set Data
  var data = google.visualization.arrayToDataTable([
    ['Comisiones', ''],
    ['ABRIL', 55],
    ['MAYO', 49],
    ['JUNIO', 44],
    ['JULIO', 60],
  ]);

  // Set Options
  var options = {
    title: 'Comisiones',
    width: '80%',
    minWidth: 250,
    height: 300,
    bar: { groupWidth: '80%' },
    colors: ['#5fc4e1']
  };

  // Draw
  var chart = new google.visualization.ColumnChart(document.getElementById('Comisiones-Billetera'));
  chart.draw(data, options);



}

function drawChartBienestarFinanciero() {

  // Set Data
  var data = google.visualization.arrayToDataTable([
    ['Usuarios Activos', ''],
    ['ABRIL', 55],
    ['MAYO', 49],
    ['JUNIO', 44],
    ['JULIO', 60],
  ]);

  // Set Options
  var options = {
    title: 'Usuarios Activos',
    width: '80%',
    minWidth: 250,
    height: 300,
    bar: { groupWidth: '80%' },
    colors: ['#f5b6cd']
  };

  // Draw
  var chart = new google.visualization.ColumnChart(document.getElementById('UsuariosAct-BienestarFinanciero'));
  chart.draw(data, options);

  // Set Data
  var data = google.visualization.arrayToDataTable([
    ['Adopción', ''],
    ['ABRIL', 55],
    ['MAYO', 49],
    ['JUNIO', 44],
    ['JULIO', 60],
  ]);

  // Set Options
  var options = {
    title: 'Adopción',
    width: '80%',
    minWidth: 250,
    height: 300,
    bar: { groupWidth: '80%' },
    colors: ['#f5b6cd']
  };

  // Draw
  var chart = new google.visualization.ColumnChart(document.getElementById('Adopcion-BienestarFinanciero'));
  chart.draw(data, options);



}
