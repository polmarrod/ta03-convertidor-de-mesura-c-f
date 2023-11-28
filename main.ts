function menu(): number {
    let opcio_usuari: number;
    while ([1, 2].indexOf(opcio_usuari) < 0) {
        opcio_usuari = game.askForNumber(`1 -> Fº to Cº
2 -> Cº to Fº`, 1)
    }
    return opcio_usuari
}

function convert_degrees(num: number): number[] {
    let converted: number;
    let num_usuari = game.askForNumber("Introdueix el número a convertir")
    if (num == 2) {
        converted = Math.roundWithPrecision(num_usuari * 9 / 5 + 32, 2)
    } else {
        converted = Math.roundWithPrecision((num_usuari - 32) * 5 / 9, 2)
    }
    
    return [num, converted]
}

function show_number(num: any, converted: any) {
    let letter: string;
    if (num == 2) {
        letter = "C"
    } else {
        letter = "F"
    }
    
    game.showLongText("La temperatura és: " + ("" + converted) + " " + letter, DialogLayout.Top)
}

while (true) {
    let [num, converted] = convert_degrees(menu())
    show_number(num, converted)
}
