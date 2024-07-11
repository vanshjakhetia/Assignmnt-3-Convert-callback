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

async function main() {
    try {
        const data = await getData();
        const processedData = await processData(data);
        const displayedData = await displayData(processedData);
        console.log(displayedData);
    } catch (err) {
        console.error("Error:", err);
    }
}

main();
