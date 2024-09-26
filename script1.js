let elefante = Number(prompt("Quantos elefantes tem na sala?"))
for (let i = 1; i < elefante; i++) {
    if (i == 1) {
        console.log(`${i} elefante incomoda muita gente ${i + 1} elefantes incomodam muito mais`)
    } else {
        console.log(`${i} elefantes incomodam muita gente ${i + 1} elefantes incomodam muito mais`)
    }

}