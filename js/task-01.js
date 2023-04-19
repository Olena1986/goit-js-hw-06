const categoriesEl = document.querySelector('#categories');
const itemEl = [...categoriesEl.children];

console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const elementCount = item.querySelectorAll('li').length;
  console.log(`Category: ${categoryName}\nElements: ${elementCount}`);
});
