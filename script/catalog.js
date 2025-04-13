// render img on catalog page (popular sets) ******************************************************************************

const container = document.querySelector('.products_box');

function renderImg(imgArray, box) {
    let contentString = '';
    imgArray.forEach(function (item) {
        contentString +=
        `
        <div class="products_item">
            <a href="product.html">
                <div>
                ${item.img}
                   <div class="products_text">
                        <h3>${item.name}</h3>
                   </div>
                </div>
            </a>
            <ul class="products_btn flex">
                <li><span>${item.cost} грн.</span></li>
                <li><button><img data-id="${item.id}" src="./img/basket.svg" alt="basket"> <p class="add_item" data-id="${item.id}">До кошика</p></button></li>
            </ul>
        </div>
        `
    });
    // console.log(contentString);
    box.insertAdjacentHTML('beforeEnd', contentString);
    // box.insertAdjacentHTML('beforeEnd', contentString);
}

const imgOnPage = 6;
renderImg(prodacts.slice(0, imgOnPage), container);

// for (let i = 0; i < 5; i++) {
//     page = prodacts.length / imgOnPage * i;
    
// }


//клік на кнопки банеру  ****************************************************************************        
let newArr = [];
let oldBasket = JSON.parse(localStorage.getItem('basket')) || [];
let storageArr = JSON.parse(localStorage.getItem('blockIsActive')) || [];
let storageBuner = JSON.parse(localStorage.getItem('Active')) || [];

let nameStr;
let eklerArr = [];
let trubochkaArr = [];
let profitArr = [];

const moreBtn = document.querySelector('.products_general_btn');



$('.catalog_items').on('click', function (e) {
    console.log('++++++');
    $('.products_box').on('click', function (e) {
        console.log(e.target);

        curentId = Number($(e.target).attr('data-id'));
        k = Number(curentId) - 1;

        if (e.target.tagName === 'P') {
            console.log('click!');
            e.target.classList.add('active');
            e.target.innerText = 'У кошику!';      // добавить сторедж для єктив класса

            storageBuner.push(prodacts[k]);// arrey for checking active class
            localStorage.setItem("Active",JSON.stringify(storageBuner));
           
        }
    });

    console.log(e.target);
    if ($(e.target).attr('alt') === 'eklery') {
        console.log('eclers');
        prodacts.forEach(item => {
            if ((((Object.values(item.name)).join('').toLowerCase())).includes('еклер')) {
                eklerArr.push(item);
                container.replaceChildren();
                renderImg(eklerArr.slice(0, imgOnPage), container);
                if (eklerArr.length <= imgOnPage) {
                    moreBtn.remove();
                }
            };
        });
        console.log(eklerArr);
        //************************ЗВИЧАЙНИЙ ЦИКЛ************************ */
        // for (let i = 0; i < prodacts.length; i++) {
    
        //     nameStr = (Object.values(prodacts[i].name)).join('');
        //        // console.log(aa);
        //        // console.log(aa.join(''));
        //     //    nameStr = aa.join('');
        //        if (nameStr.includes('еклер')) {
        //            nameArr.push(prodacts[i]);
        //         // console.log(prodacts[i]);

        //        }
            
        //    }
         
       } else if ($(e.target).attr('alt') === 'trubochki') {
        console.log('trubochki');
        
        prodacts.forEach(item => {
            if ((((Object.values(item.name)).join('').toLowerCase())).includes('трубоч')) {
                trubochkaArr.push(item);
                container.replaceChildren();
                renderImg(trubochkaArr.slice(0, imgOnPage), container);
                if (trubochkaArr.length <= imgOnPage) {
                    moreBtn.remove();
                }
               
            };
        });
        console.log(trubochkaArr);

       } else if ($(e.target).attr('alt') === 'profit') {
        console.log('profit');

        prodacts.forEach(item => {
            if ((((Object.values(item.name)).join('').toLowerCase())).includes('профітролі')) {
                profitArr.push(item);
                container.replaceChildren();
                renderImg(profitArr.slice(0, imgOnPage), container);
                if (profitArr.length <= imgOnPage) {
                    moreBtn.remove();
                }
            };
        });
        console.log(profitArr);

       }

});
// изменение кнопки "купить" при нажатии на нее только для товаров из кнопок банера
//пишем отдельно, потому что нумерация кнопок не соответтвует id товаров

// 1. без обнвления страницы он видит только 6 кнопок, которые рендерятся в самом начале. Нужно сохранять страницу с товарами с кнопок анера, тогда будет привязка к конкретным кнопкам
//2. Можно из кнопок достать id єлемента и привязаться к єтой кнопке --- код в самом низу
//3. Чтобі привязать кнопке активній класс, она должна біть активна, для єтого ее нужно сохранить в сторедж - но нужно ли сохранять отдельній длок с банера? Как потом будет загружаться каталог, если уже будет сохранені товарі из банера? 
//4. 
var addBtnBunner = document.querySelectorAll('.add_item');
        var bunnerActive = localStorage.getItem("Active");//blockIsActive
        // var btnNum = Number($(allBtn).attr('data-id'));
        bunnerArr = JSON.parse(bunnerActive);





//клик по кнопке добавление контента *******************************************************************
//при обновлении страницы остается то количество товара, что было до


let someArr = [];
let start = 0;
    let end;

    let content;
    
    // someArr = document.querySelectorAll('.products_item');
    // console.log(someArr);
    
   
    let clicks;
    if (localStorage.getItem('key') === null){
        clicks = 0;
    } else {
        clicks = localStorage.getItem("key", clicks);
    } 
    
    console.log(clicks);

    // localStorage.setItem("key", clicks);
    // clicks = localStorage.getItem("key", clicks);
    // console.log(clicks);
    moreBtn.onclick = function () {
    // var clicks = 0;
    clicks++;
    localStorage.setItem("key", clicks);
    console.log(prodacts.length);
    
    if (localStorage.getItem('start') === null) {
        start = start + 6;
        end = start + imgOnPage;
    } else {
        start = Number(localStorage.getItem("start", start));
        end = start + imgOnPage;
    }

     
    // start = start + 6;
    // end = start + imgOnPage;
    console.log(start, end);
    console.log(prodacts.length);
    

    if (end >= prodacts.length) {
        moreBtn.remove();
    }
    
        renderImg(prodacts.slice(start, end), container);
        console.log(prodacts.length);

    }

    // someArr = document.querySelectorAll('.products_item');
    // console.log(someArr);
    
    let locClick;
    // console.log(locClick);
    locClick = Number(localStorage.getItem("key"));
    console.log(locClick);
    if (locClick === 1) {
        console.log('111');
       
        container.replaceChildren();
        renderImg(prodacts.slice(0, imgOnPage * 2), container); 
        start = 12;
        // end = start + 6;
        localStorage.setItem('start', start);
        // localStorage.setItem('end', end);

    } else 
    if (locClick === 2) {
        console.log('222');
        container.replaceChildren();
        renderImg(prodacts.slice(0, imgOnPage * 3), container);
        // renderImg(prodacts.slice(0, 18), container);
        start = 18;
        // end = start + 6;
        localStorage.setItem('start', start);
        // localStorage.setItem('end', end);
    } else 
    if (locClick === 3) {
        console.log('333');
        container.replaceChildren();
        renderImg(prodacts.slice(0, imgOnPage * 4), container);
        start = 24;
        // end = start + 6;
        localStorage.setItem('start', start);
        // localStorage.setItem('end', end);
    } else 
    if (locClick === 4) {
        console.log('444');
        container.replaceChildren();
        renderImg(prodacts.slice(0, imgOnPage * 5), container);
        // start = 30;
        // end = start + 6;
        // localStorage.setItem('start', start);
        // localStorage.setItem('end', end);
    }

    
   

// ***************************************************************************************************************************
// burger menu
$(document).ready(function() {
    $('.burger_button').click(function(){
        $('.burger_button').toggleClass('open-menu');
        $('.mobile_menu_list').toggleClass('open-menu');
    });
});

// добавление товара в корзину
//добавление active class для сохранения кнопки добавленного товара после обновления страницы
/*************************************************************************************************** */

//*********************************************************************************************** */

//*************************************************************************** */



// let newArr = [];
// let oldBasket = JSON.parse(localStorage.getItem('basket')) || [];
// let storageArr = JSON.parse(localStorage.getItem('blockIsActive')) || [];

//delegetion
// let box = document.getElementsByClassName('.products_box');
// let amount = document.querySelectorAll('.number');

var x;
var curentId;
var j;

        $('.products_box').on('click', function (e) {
            console.log(e.target.tagName);
           
       curentId = Number($(e.target).attr('data-id'));
       console.log(curentId);
       j = Number(curentId) - 1;
       console.log(j);
        
       if (e.target.classList.contains('active')) {
        location.href = 'basket.html';
        console.log('clicked');
       } else {
                                                       
                                                      // active class

        if (e.target.tagName === 'P') {
            
            console.log('click!');
            e.target.classList.add('active');
            e.target.innerText = 'У кошику!';
           
        }
        // oldBasket.push(prodacts[j]);

        if (oldBasket.some(el => el.id === curentId)){//     ((условие, в котором мы проверяем, есть ли этот товар уже в корзине)) ----   все эти штуки, т.е. проверки делаются в корзине перед рендером данных
            console.log('товар уже есть');
            // oldBasket.push(prodacts[j]);
            // storageArr.push(prodacts[j]);// arrey for checking active class
            console.log('true'); 


        }
            else            //условия прописаны для проверки работы кода
            {
                oldBasket.push(prodacts[j]);
                storageArr.push(prodacts[j]);// arrey for checking active class
            }
        
            console.log(prodacts);// все твары из объекта
            console.log(oldBasket);//товары, добавленные в корзину
        localStorage.setItem('basket', JSON.stringify(oldBasket));//и добаляем массив в storage
        localStorage.setItem("blockIsActive",JSON.stringify(storageArr));
    }
    });
   
        
   //изменение кнопки "купить" при нажатии на нее  *******************************************************************

//    let addBtn = document.querySelectorAll('.add_item');
//    
var addBtn = document.querySelectorAll('.add_item');
        var blockIsActive = localStorage.getItem("blockIsActive");//blockIsActive
        // var btnNum = Number($(allBtn).attr('data-id'));
        newArr = JSON.parse(blockIsActive);
        console.log(blockIsActive);
        console.log(newArr);
        
        for (let i = 0; i < newArr.length; i++) {
            console.log(i);
            console.log(newArr[i].id);
            addBtn = document.querySelectorAll('.add_item');
            //условие в условии - сначала проверяем последний элемент (без вычитания 1), а потом все остыльные (вычитаем 1)
             if (newArr[i].id == addBtn.length) {
                console.log('yessssss');
                console.log(newArr[i].id);
                console.log(addBtn[newArr[i].id-1]);
                addBtn[(newArr[i].id) -1].classList.add('active');
                addBtn[(newArr[i].id) -1].innerText = 'У кошику!';

            }
            else
            {
                console.log('nonono');
                addBtn = document.querySelectorAll('.add_item');
                console.log(addBtn.length);
                console.log(newArr[i]);
                console.log(newArr[i].id);
                if (newArr[i].id === ((Number(addBtn[newArr[i].id].getAttribute('data-id'))) -1)) {// -1
                console.log(newArr[i].id);
                console.log(((Number(addBtn[newArr[i].id].getAttribute('data-id'))) -1));
                console.log(addBtn[newArr[i].id]);
                addBtn[(newArr[i].id) -1].classList.add('active');// -1
                addBtn[(newArr[i].id) -1].innerText = 'У кошику!';
                } 
        }
        }




        //addBtn[(newArr[0].id)].getAttribute('data-id')

        //кнопка купить в мобильной версии - нажатие на картинку корзинки+++++++++++++++++++++++++++++++++++++++++++++++++++

        $('.products_box').on('click', function (e) {
            console.log(e.target.tagName);
            curentId = Number($(e.target).attr('data-id'));
               console.log(curentId);
               j = Number(curentId) - 1;
               console.log(j);

               if (oldBasket.some(el => el.id === curentId)){//     ((условие, в котором мы проверяем, есть ли этот товар уже в корзине)) ----   все эти штуки, т.е. проверки делаются в корзине перед рендером данных
                console.log('товар уже есть');
                // oldBasket.push(prodacts[j]);
                // storageArr.push(prodacts[j]);// arrey for checking active class
                console.log('true'); 
    
    
            }
                else            //условия прописаны для проверки работы кода
                {
                    oldBasket.push(prodacts[j]);
                    storageArr.push(prodacts[j]);// arrey for checking active class
                }
            
                console.log(prodacts);// все твары из объекта
                console.log(oldBasket);//товары, добавленные в корзину
            localStorage.setItem('basket', JSON.stringify(oldBasket));//и добаляем массив в storage
            localStorage.setItem("blockIsActive",JSON.stringify(storageArr));

        });