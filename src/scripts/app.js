let valueDB = [];
function main() {
    let btnAdd = document.getElementById("btnLoad");
    let btnCalculate = document.getElementById("btnCalculate");
    btnAdd.addEventListener('click', pushCurrentElementToList);
    btnCalculate.addEventListener('click', calculateAverage);
}
function pushCurrentElementToList() {
    let rawCurrentElement = document.getElementById("tbxNumber");
    let currentElement = String(rawCurrentElement.value);
    if (!(currentElement === "")) {
        valueDB.push(Number(currentElement));
        document.getElementById("pValueList").innerText = String(valueDB);
    }
}
function getSumatoria(valueDB) {
    let sumatoria = 0;
    for (let i = 0; i < valueDB.length; i++) {
        sumatoria = sumatoria + valueDB[i];
    }
    return sumatoria;
}
function calculateAverage() {
    let sumatoria;
    let average;
    let n = valueDB.length;
    if (valueDB.length == 0) {
        stdError("Ingrese valores");
    }
    else {
        if (valueDB.length == 1) {
            stdError("Valores insuficientes (al menos 2)");
        }
        else {
            sumatoria = getSumatoria(valueDB);
            average = sumatoria / valueDB.length;
            document.getElementById("pResult").innerText = `Resultado: ${average}`;
        }
    }
}
function stdError(errMessage) {
    alert(`error: ${errMessage}`);
}
window.onload = main;
//# sourceMappingURL=app.js.map