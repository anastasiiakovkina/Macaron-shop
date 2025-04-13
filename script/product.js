// render img on  ******************************************************************************
const container_text = document.querySelector('.product_text');

function renderText(textArray, box1) {
    let contentString = '';
    textArray.forEach(function (item) {
        contentString +=
        `
        <h1>${item.name}</h1>
        <p>${item.text}</p>
        `
    });
    // console.log(contentString);
    box1.insertAdjacentHTML('beforeEnd', contentString);
    // box.insertAdjacentHTML('beforeEnd', contentString);
}

renderText(prodacts.slice(0, 1), container_text);