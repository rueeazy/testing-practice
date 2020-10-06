const capitalize = (string) => {
    if(typeof string === "string") {
        return string[0].toUpperCase() + string.slice(1);
    } else { return 'Please enter a string'}
}



module.exports = capitalize