// import _ from "fxjs2";
const _ = require('fxjs2');

import book_001 from '../images/books/book_001.jpg';
import book_002 from '../images/books/book_002.jpg';
import book_003 from '../images/books/book_003.jpg';
import book_004 from '../images/books/book_004.jpg';
import book_005 from '../images/books/book_005.jpg';
import book_006 from '../images/books/book_006.jpg';
import book_007 from '../images/books/book_007.jpg';
import book_008 from '../images/books/book_008.jpg';
import book_009 from '../images/books/book_009.jpg';
import book_010 from '../images/books/book_010.jpg';

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
  // { title: '함수형 자바스크립트', thumbnail: './images/books/book_001.jpg' },
  // { title: '인사이드 자바스크립트', thumbnail: './images/books/book_002.jpg' },
  // { title: 'Functional JavaScript', thumbnail: './images/books/book_003.jpg' },
  // { title: '자바 개발자를 위한 함수형 프로그래밍', thumbnail: './images/books/book_004.jpg' },
  // { title: '리팩토링 자바스크립트', thumbnail: './images/books/book_005.jpg' },
  // { title: '함수형 자바스크립트 입문', thumbnail: './images/books/book_006.jpg' },
  // { title: '하스켈로 배우는 함수형 프로그래밍', thumbnail: './images/books/book_007.jpg' },
  // { title: '함수형 자바스크립트 프로그래밍', thumbnail: './images/books/book_008.jpg' },
  // { title: '자바 8 람다', thumbnail: './images/books/book_009.jpg' },
  // { title: '모던 자바스크립트 입문', thumbnail: './images/books/book_010.jpg' },
  { title: '함수형 자바스크립트', thumbnail: book_001 },
  { title: '인사이드 자바스크립트', thumbnail: book_002 },
  { title: 'Functional JavaScript', thumbnail: book_003 },
  { title: '자바 개발자를 위한 함수형 프로그래밍', thumbnail: book_004 },
  { title: '리팩토링 자바스크립트', thumbnail: book_005 },
  { title: '함수형 자바스크립트 입문', thumbnail: book_006 },
  { title: '하스켈로 배우는 함수형 프로그래밍', thumbnail: book_007 },
  { title: '함수형 자바스크립트 프로그래밍', thumbnail: book_008 },
  { title: '자바 8 람다', thumbnail: book_009 },
  { title: '모던 자바스크립트 입문', thumbnail: book_010 },
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
bookList.innerHTML = bookHtml;