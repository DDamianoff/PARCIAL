let valueDB: number[] = [];

function main() {
    let btnAdd: HTMLElement = document.getElementById("btnLoad");
    let btnCalculate: HTMLElement = document.getElementById("btnCalculate");


    btnAdd.addEventListener('click', pushCurrentElementToList);
    btnCalculate.addEventListener('click', calculateAverage);

}

function pushCurrentElementToList() {
    let rawCurrentElement: HTMLInputElement = <HTMLInputElement>document.getElementById("tbxNumber");
    let currentElement: string = String(rawCurrentElement.value);

    if (!(currentElement === "")) {
        valueDB.push(Number(currentElement))
        document.getElementById("pValueList").innerText = String(valueDB);
    }
}

function getSumatoria(valueDB: number[]) {
    let sumatoria:number = 0;

    for (let i = 0; i < valueDB.length; i++) {
        sumatoria = sumatoria + valueDB[i];
    }

    return sumatoria
}

function calculateAverage() {
    let sumatoria: number;
    let average: number;
    let n:number = valueDB.length;

    if (n == 0) {
        stdError("Ingrese valores");
    }
    else {
        if (n == 1) {
            stdError("Valores insuficientes (al menos 2)");
        }
        else {
            sumatoria = getSumatoria(valueDB);
            average = sumatoria / n

            document.getElementById("pResult").innerText = `Resultado: ${average}`;
        }
    }
}

function stdError(errMessage: string) {
    alert(`error: ${errMessage}`);
}


window.onload = main;