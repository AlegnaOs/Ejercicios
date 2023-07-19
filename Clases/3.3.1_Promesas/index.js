function getRandomInt(max){
    return Math.floor(Math.random()* max);
}

const miPromesa = new Promise((resolve, reject) => {
    const numeroAleatorio = getRandomInt(10);
    if (numeroAleatorio>5)
    {
    resolve(true);
    }
    reject(false);
});

miPromesa
.then((Promesa) => {
    console.log(Promesa);
})
.catch((PromesaError) => {
    console.log(PromesaError);
});