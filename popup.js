function doHexHaxle() {
    return Number((69420*Math.floor(((new Date).getTime()-new Date("2022-01-24T00:00:00.000Z").getTime())/864e5)+80085)%65536).toString(16);
}
function doBinHaxle() {
    return (((Math.floor((new Date().getTime() - new Date("2022-01-24T00:00:00.000Z").getTime()) / (24 * 60 * 60 * 1_000)) + 100) * 80085) + 69420) % 256;
}

document.getElementById("haxleCell").innerHTML = doHexHaxle();
document.getElementById("binHaxleCell").innerHTML = doBinHaxle();