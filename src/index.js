// import _ from "fxjs2";
const _ = require('fxjs2');

import '../css/main.css';


const menuLink = document.querySelector('.menu-list');
const menuTypes = ['books', 'about', 'devfuner'];
menuLink.addEventListener('click', e => {
  const type = e.target.getAttribute('data-menu');

  menuTypes.map(x => {
    const container = document.querySelector(`.${x}-container`);
    if (type === x) {
      container.style.display = 'block';
    } else {
      container.style.display = 'none';
    }
  });
});

const bookDatas = [
  { title: '함수형 자바스크립트', thumbnail: './images/books/book_001.jpg' },
  { title: '인사이드 자바스크립트', thumbnail: './images/books/book_002.jpg' },
  { title: 'Functional JavaScript', thumbnail: './images/books/book_003.jpg' },
  { title: '자바 개발자를 위한 함수형 프로그래밍', thumbnail: './images/books/book_004.jpg' },
  { title: '리팩토링 자바스크립트', thumbnail: './images/books/book_005.jpg' },
  { title: '함수형 자바스크립트 입문', thumbnail: './images/books/book_006.jpg' },
  { title: '하스켈로 배우는 함수형 프로그래밍', thumbnail: './images/books/book_007.jpg' },
  { title: '함수형 자바스크립트 프로그래밍', thumbnail: './images/books/book_008.jpg' },
  { title: '자바 8 람다', thumbnail: './images/books/book_009.jpg' },
  { title: '모던 자바스크립트 입문', thumbnail: './images/books/book_010.jpg' },
];

const bookTemplate = (obj) => {
  return '' +
    '<li class="book-item">\n' +
    `    <figure class="book-image" style="background-image: url(${obj.thumbnail})">\n` +
    `        <img src="${obj.thumbnail}" alt="책 이미지">\n` +
    '    </figure>\n' +
    '    <div class="book-desc">\n' +
    `        ${obj.title}\n` +
    '    </div>\n' +
    '</li>'
};

const bookList = document.querySelector('.book-list');
bookList.innerHTML = '';
const bookHtml = bookDatas.map(bookTemplate).join('');
console.log('bookHtml >', bookHtml);
bookList.innerHTML = bookHtml;