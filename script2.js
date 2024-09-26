let res, rf = 0

res = Number(prompt("Digite o numero de inicio: "))
for (let n = 1; n <= 20; n++) {
    console.log(res)
    res = res + res + 1
    rf = rf + res
}
console.log(`Soma: ${rf}`)