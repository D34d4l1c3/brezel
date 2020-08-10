const produktInfoName = document.querySelector('#produkt__info-name');
const produktInfoMasse = document.querySelector('#produkt__info-masse');
const produktInfoPreis = document.querySelector('#produkt__info-preis');

for(let i = 0; i < 3; i++) {
       const produktInfoName = prompt('Укажите название любимого изделия', ''),
         produktInfoMasse = +prompt('Укажите вес изделия в граммах', ''),
         produktInfoPreis = +prompt('Укажите приемлемую стоимость изделия в рублях', '');

    if(produktInfoName != null && produktInfoMasse != null && produktInfoPreis != null && 
        produktInfoName != '' && produktInfoMasse != '' && produktInfoPreis != '' && produktInfoName.length < 60) {
        console.log(produktInfoName);
        console.log(produktInfoMasse);
        console.log(produktInfoPreis);
        console.log('Yes');
    } else{
        console.log('Error');
        i--;
    }
}

