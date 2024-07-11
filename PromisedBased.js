function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("data");
        }, 1000);
    });
}

function processData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`processed ${data}`);
        }, 1000);
    });
}

function displayData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`displayed ${data}`);
        }, 1000);
    });
}

getData()
    .then(data => {
        return processData(data);
    })
    .then(processedData => {
        return displayData(processedData);
    })
    .then(displayedData => {
        console.log(displayedData);
    })
    .catch(err => {
        console.error("Error:", err);
    });
