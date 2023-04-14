const categoriesEl = document.querySelector('#categories');
const itemEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach(item => {
  const heading = item.querySelector('h2');
  const categoryName = heading.textContent;
  const elementCount = item.querySelectorAll('li').length;
  console.log(`Category: ${categoryName}\nElements: ${elementCount}`);
});

