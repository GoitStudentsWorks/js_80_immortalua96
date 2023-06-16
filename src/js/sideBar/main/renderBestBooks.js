import { refs } from '../../refs';
import { fetchBestBooks } from '../../fetchApi';
async function renderBestBooks() {
  const data = await fetchBestBooks();
  const markup = data
    .map(
      ({ list_name, books }) => `<ul>
    <li>
      <h2>${list_name}</h2>
      <ul class="itemsBooksOfCategory">
        <li>
        <img src="${books[0].book_image}" alt="">
          <h3>${books[0].title}</h3>
          <p>${books[0].author}</p></li>
        <li>
        <img src="${books[1].book_image}" alt="">
          <h3>${books[1].title}</h3>
          <p>${books[1].author}</p></li>
        <li>
        <img src="${books[2].book_image}" alt="">
          <h3>${books[2].title}</h3>
          <p>${books[2].author}</p></li>
        <li>
        <img src="${books[3].book_image}" alt="">
          <h3>${books[3].title}</h3>
          <p>${books[3].author}</p></li>
        <li>
        <img src="${books[4].book_image}" alt="">
          <h3>${books[4].title}</h3>
          <p>${books[4].author}</p></li>
      </ul>
    <button>see more</button>
    </li>
  </ul>`
    )
    .join('');
  console.log(data);
  refs.mainPage.insertAdjacentHTML('beforeend', markup);
}

renderBestBooks();

// const markup = data.map(({ books }) => {
//   const topFiveBooks = books
//     .map(
//       ({ title, author, book_image, list_name }) => `
//       <h2>${list_name}</h2>
//       <div>
//   <img src="${book_image}" alt="${title}">
//   <h3>${title}</h3>
//   <p>${author}</p>
// </div>`
//     )
//     .join('');
//   return topFiveBooks;
// });
