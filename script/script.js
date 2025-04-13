// render img on main page (popular sets) ******************************************************************************

const container = document.querySelector('.popular_sets_box');

function renderImg(imgArray, box) {
    let contentString = '';
    imgArray.forEach(function (item) {
        contentString +=
        `
        <div class="popular_sets_item">
        <div>
        ${item.img}
       <div class="popular_sets_text">
            <h3>${item.name}</h3>
       </div>
    </div>
    <ul class="popular_btn flex">
        <li><span>${item.cost} грн.</span></li>
        <li><button><img src="./img/basket.svg" alt="basket"> <p>До кошика</p></button></li>
    </ul>
    </div>
        `
    });
    // console.log(contentString);
    box.insertAdjacentHTML('afterbegin', contentString);
}

const imgOnPage = 6;
renderImg(prodacts.slice(0, imgOnPage), container);


// ***************************************************************************************************************************
// burger menu
$(document).ready(function() {
    $('.burger_button').click(function(){
        $('.burger_button').toggleClass('open-menu');
        $('.mobile_menu_list').toggleClass('open-menu');
    });
});





