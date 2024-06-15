//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const output = document.getElementById('output');

    // Add initial loading row
    const loadingRow = document.createElement('tr');
    const loadingCell = document.createElement('td');
    loadingCell.colSpan = 2;
    loadingCell.innerText = 'Loading...';
    loadingRow.appendChild(loadingCell);
    output.appendChild(loadingRow);

    // Helper function to create a promise that resolves after a random time between 1 and 3 seconds
    function createRandomPromise(index) {
        return new Promise((resolve) => {
            const time = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
            setTimeout(() => resolve({ index, time }), time * 1000);
        });
    }

    // Create an array of three promises
    const promises = [createRandomPromise(1), createRandomPromise(2), createRandomPromise(3)];

    const startTime = performance.now();

    // Use Promise.all to wait for all promises to resolve
    Promise.all(promises).then(results => {
        const endTime = performance.now();
        const totalTime = (endTime - startTime) / 1000;

        // Clear the loading row
        output.innerHTML = '';

        // Populate the table with the results
        results.forEach(result => {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            const timeCell = document.createElement('td');

            nameCell.innerText = Promise ${result.index};
            timeCell.innerText = result.time.toFixed(3);

            row.appendChild(nameCell);
            row.appendChild(timeCell);
            output.appendChild(row);
        });

        // Add the total time row
        const totalRow = document.createElement('tr');
        const totalNameCell = document.createElement('td');
        const totalTimeCell = document.createElement('td');

        totalNameCell.innerText = 'Total';
        totalTimeCell.innerText = totalTime.toFixed(3);

        totalRow.appendChild(totalNameCell);
        totalRow.appendChild(totalTimeCell);
        output.appendChild(totalRow);
    });
});