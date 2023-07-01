
function csvDownloader(csvData, fileName) {
    let encodedUri = encodeURI(csvData);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", fileName);
    document.body.appendChild(link); // Required for FF

    link.click(); // This will download the data file named "output.csv".
}

export default csvDownloader;
