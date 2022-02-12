function doHaxle() {
    return Number((69420*Math.floor(((new Date).getTime()-new Date("2022-01-24T00:00:00.000Z").getTime())/864e5)+80085)%65536).toString(16);
}

document.getElementById("haxleCell").innerHTML = doHaxle();