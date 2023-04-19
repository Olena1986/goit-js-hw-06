// const itemEl = document.querySelectorAll('#categories .item');

// console.log(`Number of categories: ${itemEl.length}`);

// itemEl.forEach(item => {
//   const categoryName = item.querySelector('h2').textContent;
//   const elementCount = item.querySelectorAll('li').length;
//   console.log(`Category: ${categoryName}\nElements: ${elementCount}`);
// });


const itemEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemEl.length);

itemEl.forEach(category => {
    console.log('Category:', category.firstElementChild.textContent);
    console.log('Elements:', category.lastElementChild.children.length);
});

