const categories = document.querySelector('#categories');
const items = document.querySelectorAll('.item');
console.log (`Numbers of categories: ${items.length} `)
items.forEach((item) => {
    const title = item.querySelector("h2").textContent;
    const elementCount = item.querySelectorAll('ul li').length;

    console.log (`Category: ${title}`);
    console.log (`Elements: ${elementCount}`);
})