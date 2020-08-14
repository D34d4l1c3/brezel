const elProductList  = document.querySelector('#produсt__info-name');
const elProductMass = document.querySelector('#produсt__info-masse');   //Mass
const elProductPrice = document.querySelector('#produсt__info-preis');  //Price 
console.log(elProductList);

for(let i = 0; i < 3; i++) {
       const produсtInfoName = prompt('Укажите название любимого изделия №'+(i+1), ''),
         produсtInfoMasse = +prompt('Укажите вес изделия в граммах'+(i+1), ''),
         produсtInfoPreis = +prompt('Укажите приемлемую стоимость изделия в рублях'+(i+1), '');

    if(produсtInfoName != null && produсtInfoMasse != null && produсtInfoPreis != null && 
        produсtInfoName != '' && produсtInfoMasse != '' && produсtInfoPreis != '' && produсtInfoName.length < 60) { 
        console.log(produсtInfoName);
        console.log(produсtInfoMasse);
        console.log(produсtInfoPreis);
        console.log('Yes');
        if(i == 0){
            elProductList.innerText     = produсtInfoName;
            elProductMass.innerText     = produсtInfoMasse;
            elProductPrice.innerText    = produсtInfoPreis;
        } else {
            let list = document.createElement("ul");
            list.classList.add("produсt__list");
            list.append("Список");
            let listEl1 = document.createElement("li");
            listEl1.classList.add("produсt__info"+i);
            listEl1.innerText = produсtInfoName;
            let listEl2 = document.createElement("li");
            listEl2.classList.add("produсt__info"+i);
            listEl2.innerText = produсtInfoMasse;
            let listEl3 = document.createElement("li");
            listEl3.classList.add("produсt__info"+i);
            listEl3.innerText = produсtInfoName;
            list.appendChild(listEl1);
            list.appendChild(listEl2);
            list.appendChild(listEl3);
            document.querySelector('.produсt').appendChild(list);
        }
        
    } else{
        console.log('Error');
        i--;
    }
}

for (let i = 0; i < 4; i++) {
    const a = "########";
    console.log(a);
}

let a = "";
for (let i = 0; i < 7; i++) {
    //a = a + "#";
    a += "#";
    console.log(a);
}