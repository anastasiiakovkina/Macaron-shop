
//получение дынных из local storage
  var productStr = localStorage.getItem('basket');
  var addProduct = JSON.parse(productStr);//массив добавленных товаров з storage - всех, с повторениями
  const n = 'str';
  
  console.log(addProduct);

  // var mass = [];
  // addProduct.forEach(el => {
  //   mass.push(el.name);
  // });
  // console.log(mass);

  // форматирование массива добавленных товаров с подсчетом количества одинаковых элементов
  //подсчет повторяющихся элементов              вывод колчества повторяющихся товаров 
  const count = addProduct.reduce( (tally, prod) => {
    tally[prod.id] = (tally[prod.id] || 0) + 1 ;
    // console.log(tally[prod.id]);
    // console.log(prod.id);                           ТЕПЕРЬ ЭТОТ БЛОК НЕ НУЖЕН, ТАКА ПРИ ПОВТОРНОМ ДОБАВЛЕНИИ ПЕРЕХОДИМ В КОРЗИНУ
    return tally;
    } , {})

    console.log(count);
    console.log(count[1]);
    console.log(count[2]);

    
    

    //массив уникальных тваров
    var uniqProduct = [];
    addProduct.filter((item) => {
            if (!uniqProduct.some((el) => el.id === item.id)) {
              uniqProduct.push(item);
            }
        });
        console.log(uniqProduct);

  //рендер данных в корзину
  const basketContainer = document.querySelector('.basket_box');
  const checkContainer = document.querySelector('.check');

function renderImg(uniqProduct, box) {
    let contentString = '';
    uniqProduct.forEach(function (item) {
        contentString +=
        `
        <div class="basket_item">
                <div class="del_btn">
                    <button  value="del" ><img src="./img/del.png" alt="delet button" data-id="${item.id}">
                    </div>
             <div class="basket_wrap">
                  <div class="prod_img">
                  ${item.img}
                  </div>
                  <div class="prod_title">
                      <h3>${item.name}</h3>
                      
                  </div>
                    <ul class="count flex">
                        <li><button class="minus"><img src="./img/minus.png" alt="" data-id="${item.id}"></button></li>
                        <li class="number"> ${item.number} </li>
                        <li><button class="plus"><img src="./img/plus.png" alt="" data-id="${item.id}"></button></li>
                    </ul>
                    <div>
                        <p><span class="summCost">${item.summCost}</span> грн.</p>
                    </div>
             </div>
             <p class="cost">Ціна: <span>${item.cost}</span> грн.</p>
           </div>
        `

    });

    //ЭТА СТРОКА БЫЛА ВМЕСТО 62, ГДЕ УКАЗЫВАЛОСЬ КОЛИЧЕСТВО ТОВАРА -           <li class="number">${count[item.id]}</li>
    // console.log(contentString);
    box.insertAdjacentHTML('afterbegin', contentString);
}

renderImg(uniqProduct, basketContainer);
// renderImgCheck(uniqProduct, checkContainer);



// ***************************************************************************************************************************
// burger menu
$(document).ready(function() {
  $('.burger_button').click(function(){
      $('.burger_button').toggleClass('open-menu');
      $('.mobile_menu_list').toggleClass('open-menu');
  });
});


// объявление констант ************************************************************************************************
  let plusButton = document.querySelectorAll('.plus');
  const minusButton = document.querySelectorAll('.minus');

  const summCostItem = document.querySelectorAll('.cost');
  const summCost = document.querySelector('.summ_cost');
  const delivery = document.querySelector('.delivery').innerText;
  const toPay = document.querySelector('.to_pay');
  const checkArr = [];
  var summCostValue = 0;

  //*************************************************************************************************** */
  let storageCheck = [];
  let summCheck = 0;
  storageCheck = JSON.parse(localStorage.getItem("basket"));

  $.each(storageCheck, function (index) {
    summCheck += Number(storageCheck[index].summCost);
    
    summCost.innerText = summCheck;

    toPay.innerText = summCheck + Number(delivery); 
  }); 


   //********************************************************************************************************************//remove product
const delButtons = document.querySelectorAll('button[value=del]');
var product = document.querySelectorAll('.basket_item');

let storBasket = JSON.parse(localStorage.getItem('basket')) || [];
let storAct = JSON.parse(localStorage.getItem('blockIsActive')) || [];
let valueId;
// удаление старым циклом
// for (let i = 0; i < delButtons.length; i++) {
//   delButtons[i].onclick = function () {
//     // console.log('del');
//     // let item = product[i];
    

//     product[i].remove();
    
//     checkArr.push(parseInt(summCostItem[i].innerText));
     
//     summCostValue -= checkArr[i];
//     summCost.innerText = summCostValue;
    
//     let value = summCostValue + parseInt(delivery);
    
//     toPay.innerText = value;
//           }
//       }
//удаление из Local storage???????

// //////////////////////НОВОЕ УДАЛЕНИЕ - НЕ ДОДЕЛАЛА
  $('.basket_box').on('click', function (e) {
    
    let i = $(this).index();
    console.log(i);


if ($(e.target.parentElement).attr('value') === 'del') {
  console.log('del');

  console.log(e.target.tagName);
  console.log(e.target);
 let i = $(this).index();
  console.log(i);

  valueId = Number($(e.target).attr('data-id'));
  console.log(valueId);
  console.log(this);
                    
  console.log( product[i]);
  basketContainer.replaceChildren();

  console.log(storageCheck);

  $.each(storageCheck, function (index) {

    if (valueId === storageCheck[index].id) {
      storageCheck.splice(index, 1);
    storAct.splice(index, 1);
      console.log('yeyeye');
      renderImg(storageCheck, basketContainer);

      localStorage.setItem('basket', JSON.stringify(storageCheck));
      localStorage.setItem('blockIsActive', JSON.stringify(storAct));

    } 
  });
}
});

      //добавление и удаление товара  (количество товарара)

      
     
      //добавление количества твара (цикл FOR)///////////////////////////////////////////////////////////////////////////////////////////////////
        // for (let i = 0; i < plusButton.length; i++) {
        //   plusButton[i].onclick = function () {
        //     let num = plusButton[i].parentElement.previousElementSibling.innerText;
        //     num++;
        //     plusButton[i].parentElement.previousElementSibling.innerText = num;

        //     let price = parseInt(plusButton[i].parentElement.parentElement.nextElementSibling.parentElement.nextElementSibling.lastElementChild.innerText);
        //     let cost = price * num;
        //     plusButton[i].parentElement.parentElement.nextElementSibling.lastElementChild.lastElementChild.innerText = cost;

        //     checkArr.push(parseInt(summCostItem[i].innerText));
      
        //     summCostValue += checkArr[i];
        //     summCost.innerText = summCostValue;
            
        //     let value = summCostValue + parseInt(delivery);
            
        //     toPay.innerText = value;
        //   }
        // }



        //добавление товара (jQuery)

        
       
        let v;
        
        //добавление товара и уменьшение его количества/удаление (jquery)
        $('.basket_box').on('click', function (e) {

           console.log(e.target.tagName);
           console.log(e.target);
          //  let i = $(this).index();
          let i = $(this).index();
           console.log(i);

           console.log(this);
           
          // if (e.target.tagName === 'IMG') {
            
            
           

            if ($(e.target.parentElement).attr('class') === 'plus') { //добавление товара
              console.log('plus');
            // console.log('it is img');
           
            let num = e.target.parentElement.parentElement.previousElementSibling.innerText;
            
            valueId = Number($(e.target).attr('data-id'));
            console.log(valueId);
            
            num++;
          
            console.log(storageCheck);

                       
            // console.log('num is ' + num);
            e.target.parentElement.parentElement.previousElementSibling.innerText = num;
            let cost = parseInt(e.target.parentElement.parentElement.parentElement.nextElementSibling.parentElement.nextElementSibling.lastElementChild.innerText);
            console.log(cost);

            let summCost = cost * num;
            e.target.parentElement.parentElement.parentElement.nextElementSibling.lastElementChild.lastElementChild.innerText = summCost;
            console.log(summCost);
            

            //  for (let n = 0; n < storageCheck.length; n++) {               обічній цикл
          //   if (valueId == storageCheck[n].id) {
          //     storageCheck[n].number = num;
          //   } 
          // }

            $.each(storageCheck, function (index) {
              if (valueId == storageCheck[index].id) {
                storageCheck[index].number = num;
                storageCheck[index].summCost = summCost;
                summCostValue += storageCheck[index].summCost;
                console.log(summCostValue);
                // console.log(storageCheck[index].summCost);
                // console.log('yeyeye');
              } 
            });


            console.log(e.target);

            localStorage.setItem('basket', JSON.stringify(storageCheck));

            // checkArr.push(parseInt(summCostItem[i].innerText));
            // console.log(checkArr);

            // summCostValue += checkArr[i];
            // summCost.innerText = summCostValue;
            // console.log(summCostValue);

            // let value = summCostValue + parseInt(delivery);
            
            //     toPay.innerText = value;
            //     console.log(value);
            $.each(storageCheck, function (index) {
              summCheck += Number(storageCheck[index].summCost);
              
              summCost.innerText = summCheck;
          
              toPay.innerText = summCheck + Number(delivery); 
            }); 
                

          } 
          else if ($(e.target.parentElement).attr('class') === 'minus') //удаление товара
          {
            console.log('minus');
            let num = e.target.parentElement.parentElement.nextElementSibling.innerText;

            valueId = Number($(e.target).attr('data-id'));
            console.log(valueId);

                num--;
                // storageCheck[i].number = num;
                console.log(num);
                console.log('num is ' + num);
                console.log(product);
                
                if (num < 1) {
                  let qst = confirm('Видалити??');
                  if (qst) {
                    
                    console.log( product[i]);
                    basketContainer.replaceChildren();
                    console.log(storageCheck);
                 
                  //   for (let i = 0; i < storageCheck.length; i++) {
                  //     if (valueId == storageCheck[i].id) {
                  //       console.log(storageCheck[i].id);
                  //       storageCheck.splice(i, 1);
                  //     storAct.splice(i, 1);
                      
                  //   }
                  // }
                   
                    $.each(storageCheck, function (index) {

                      if (valueId === storageCheck[index].id) {
                        storageCheck.splice(index, 1);
                      storAct.splice(index, 1);
                        console.log('yeyeye');
                        renderImg(storageCheck, basketContainer);
                  
                        localStorage.setItem('basket', JSON.stringify(storageCheck));
                        localStorage.setItem('blockIsActive', JSON.stringify(storAct));
                  
                      } 
                    });
                  }
                }
                else
        {
          e.target.parentElement.parentElement.nextElementSibling.innerText = num;

          let cost = parseInt(e.target.parentElement.parentElement.parentElement.nextElementSibling.parentElement.nextElementSibling.lastElementChild.innerText);
          console.log(cost);
          let summCost = cost * num;
          e.target.parentElement.parentElement.parentElement.nextElementSibling.lastElementChild.lastElementChild.innerText = summCost;
        

        $.each(storageCheck, function (index) {
          if (valueId == storageCheck[index].id) {
            storageCheck[index].number = num;
            storageCheck[index].summCost = summCost;
            summCostValue += storageCheck[index].summCost;
            console.log(summCostValue);
          } 
        });
        localStorage.setItem('basket', JSON.stringify(storageCheck));
        
          }
        
          $.each(storageCheck, function (index) {
            summCheck += Number(storageCheck[index].summCost);
            
            summCost.innerText = summCheck;
        
            toPay.innerText = summCheck + Number(delivery); 
          }); 
          }
        });

         
        // let delArr = [];
        // let newdelArr = [];
        // console.log(newdelArr);
       
        
        
    //уменьшение количества товара циклом //////////////////////////////////////////////////////////////////////////////////////////////////////////
    // for (let i = 0; i < minusButton.length; i++) {
    //   minusButton[i].onclick = function () {
    //     let num = minusButton[i].parentElement.nextElementSibling.innerText;
    //     num--;
    //     if (num < 1) {
    //       let qst = confirm('Удалить??');
    //       if (qst) {
    //         console.log(product[i]);
    //         product[i].remove();// old version
    //         console.log(storBasket);
    //         // delete storBasket[i];
    //         storBasket.splice(i, 1);
    //         console.log(storBasket);
           
    //         // basketContainer.replaceChildren();
    //         // renderImg(storBasket, basketContainer);

    //         localStorage.setItem('delBasket', JSON.stringify(storBasket));
            
            
           
    //       }
         
    //       // renderImg(storBas, basketContainer);
    //     }
        
    //     else
    //     {
    //       minusButton[i].parentElement.nextElementSibling.innerText = num;
    //       let price = parseInt(plusButton[i].parentElement.parentElement.nextElementSibling.parentElement.nextElementSibling.lastElementChild.innerText);
    //       let cost = price * num;
    //         plusButton[i].parentElement.parentElement.nextElementSibling.lastElementChild.lastElementChild.innerText = cost;
    //     }
       
    //     checkArr.push(parseInt(summCostItem[i].innerText));
     
    // summCostValue -= checkArr[i];
    // summCost.innerText = summCostValue;
    
    // let value = summCostValue + parseInt(delivery);
    
    // toPay.innerText = value;
    //   }
      
    // }
  //   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      let storBas = JSON.parse(localStorage.getItem('basket'));
          if (localStorage.getItem('basket') !== null){
            // let storBas = JSON.parse(localStorage.getItem('delBasket'));
            console.log(storBas);
              basketContainer.replaceChildren();
              renderImg(storBas, basketContainer);

            console.log('----------');
          }  else {'no no no'}

    //*********************************************************************************************************************************** */
    // let summCheck = 0;
    // storageCheck = JSON.parse(localStorage.getItem("basket"));
    // $.each(storageCheck, function (index) {
    //   summCheck += Number(storageCheck[index].summCost);
      
    //   summCost.innerText = summCheck;

    //   toPay.innerText = summCheck + Number(delivery); 
    // });
    
   




  //  for (let i = 0; i < summCostItem.length; i++) {

  //   checkArr.push(parseInt(summCostItem[i].innerText)); 
     
  //   summCostValue += checkArr[i];
  //   summCost.innerText = summCostValue;
    
  //   let value = summCostValue + parseInt(delivery);
    
  //   toPay.innerText = value;

  //  }

  //  console.log('641321');