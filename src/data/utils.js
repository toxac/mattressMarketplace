export function objToQueryString(baseUrl, dataObj) {
    var keys = Object.keys(dataObj);
    var values = Object.values(dataObj);
    var queryString = baseUrl + "?";
    for (let i = 0; i < keys.length; i++) {
        if (i === 0) {
            queryString = queryString + keys[i] + "=" + values[i]
        } else {
            queryString = queryString + "&" + keys[i] + "=" + values[i]
        }
    }
    return queryString;
}