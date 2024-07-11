function getData(callback) {
    setTimeout(() => {
        callback(null, "data");
    }, 1000);
}

function processData(data, callback) {
    setTimeout(() => {
        callback(null, `processed ${data}`);
    }, 1000);
}

function displayData(data, callback) {
    setTimeout(() => {
        callback(null, `displayed ${data}`);
    }, 1000);
}

getData((err, data) => {
    if (err) {
        console.error("Error getting data", err);
    } else {
        processData(data, (err, processedData) => {
            if (err) {
                console.error("Error processing data", err);
            } else {
                displayData(processedData, (err, displayedData) => {
                    if (err) {
                        console.error("Error displaying data", err);
                    } else {
                        console.log(displayedData);
                    }
                });
            }
        });
    }
});
