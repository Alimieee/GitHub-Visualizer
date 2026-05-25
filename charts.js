// 🎨 THE CANVAS GRAPHICS MODULE
// Dedicated entirely to creating and destroying Chart.js instances

let languageChartInstance = null;
let popularityChartInstance = null;

export function renderLanguageChart(labels, data) {
    const ctx = document.getElementById('languageChart').getContext('2d');

    if (languageChartInstance !== null) {
        languageChartInstance.destroy(); // Free up RAM cache allocation
    }

    languageChartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40', '#c9cbcf', '#32cd32', '#87ceeb'],
                borderWidth: 1,
                borderColor: '#161b22'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'right', labels: { color: '#c9d1d9' } }
            }
        }
    });
}

export function renderPopularityChart(labels, data) {
    const ctx = document.getElementById('popularityChart').getContext('2d');

    if (popularityChartInstance !== null) {
        popularityChartInstance.destroy();
    }

    popularityChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Stars',
                data: data,
                backgroundColor: '#238636',
                borderRadius: 4,
                barThickness: 20
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { ticks: { color: '#c9d1d9', stepSize: 1 }, grid: { color: '#30363d' }, beginAtZero: true },
                y: { ticks: { color: '#c9d1d9', font: { size: 11 } }, grid: { display: false } }
            }
        }
    });
}