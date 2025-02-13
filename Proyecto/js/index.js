google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Your Function
function drawChart() {

    // Set Data
    const data = google.visualization.arrayToDataTable([
      ['Contry', 'Mhl'],
      ['Italy', 55],
      ['France', 49],
      ['Spain', 44],
      ['USA', 24],
      ['Argentina', 15]
    ]);
    
    // Set Options
    const options = {
      title: 'World Wide Wine Production'
    };
    
    // Draw
    var chart = new google.visualization.ColumnChart(document.getElementById('myChart'));
    chart.draw(data, options);
    var chart = new google.visualization.ColumnChart(document.getElementById('myChart2'));
    chart.draw(data, options);
    
    }