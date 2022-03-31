import fetch from 
async function teste() {
    console.log('1');
    console.log('2');
    console.log('3');
    return 'testando';
}


async function teste2() {
    const funcao = await teste();
    console.log(funcao);
}
teste2()

async function dogs() {
const apiDogs = fetch('https://dog.ceo/api/breeds/image/random');

}
dogs()