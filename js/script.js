// Задать пользователю несколько раз вопросы при помощи цикла. "За какое кондитерское изделие Вы бы хотели скидку?", "Размер скидки в процентах". Ответы записать в формате. Изделие:размер скидки. Исключить варианты ввода некорректных данных. Повторно задать вопрос при введении некорректных данных. Проверить, если размер скидки меньше 15%, вывести сообщение "Сделаем Все на высшем уровне!", Иначе если размер скидки от 15 до 50, вывести сообщение "С удовольствием подарим скидку!", Иначе "Это слишком много, выберите меньший размер скидки". Использование унарного и тернарного оператора. Можно выводить ответы в блок html файла.

let productName = '',   //название кондитерского изделия
    discount = 5;       //размер скидки Number(!)
    check = true;//Идентификатор правильности вводы, если false то цикл останавливает итерацию пока не введет правильно, выйти из цикла можно только по ответу на вопрос а хочет ли продолжить - Отмена
    
for (let i = 0;i<2;i = check ? ++i : i){ 
    productName = prompt(`За какое ${i + 1}-e кондитерское изделие Вы бы хотели скидку?`,"");
    check = productName ? true : false; //Не сравниваю с !="" потому что если ничего не ответят и скажут ок будет пусто а это "" == false, если  нажмут отмена то будет null == false, и только если что-то введут будет true
    if (check){
        discount = prompt("Размер скидки в процентах?",0);
        check = +discount ? true : false;// 0==false + преобразует в число если не сможет будет NaN==false +null == 
        if(check) { //Если данные по скидке были введены корректно
            if(discount < 15) alert("Сделаем на высшем уровне!");
            else if(discount > 15 && discount <= 50 ) alert("С удовольствием подарим скидку!");
            else if(discount > 50) {
                alert("Это слишком много, выберите меньший размер скидки");
                check = false;
            }
        } else {
            alert("Скидка некорректна");
        }    
    }
    
    if(!check){
        if(!productName || !(+discount)){
            if(confirm("Данные введены некорректно, заново?")) continue;
            else break;
        }   
    } else {
        let table = document.getElementById('table_product');
        let row = table.insertRow(i+1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = productName;
        cell2.innerHTML = discount+"%";
        console.log(`Название ${i + 1}-го продукта ${productName}`);  
    }  
}

