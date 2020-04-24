const bookFiles = require('./book-files.js');

const bookDatas = [
  { title: '함수형 자바스크립트', thumbnail: bookFiles.book_001 },
  { title: '인사이드 자바스크립트', thumbnail: bookFiles.book_002 },
  { title: 'Functional JavaScript', thumbnail: bookFiles.book_003 },
  { title: '자바 개발자를 위한 함수형 프로그래밍', thumbnail: bookFiles.book_004 },
  { title: '리팩토링 자바스크립트', thumbnail: bookFiles.book_005 },
  { title: '함수형 자바스크립트 입문', thumbnail: bookFiles.book_006 },
  { title: '하스켈로 배우는 함수형 프로그래밍', thumbnail: bookFiles.book_007 },
  { title: '함수형 자바스크립트 프로그래밍', thumbnail: bookFiles.book_008 },
  { title: '자바 8 람다', thumbnail: bookFiles.book_009 },
  { title: '모던 자바스크립트 입문', thumbnail: bookFiles.book_010 },
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

const clearInnerHTML = (ele) => ele.innerHTML = '';
const setInnerHTML = (ele, innerHTML) => ele.innerHTML = innerHTML;

const bookList = document.querySelector('.book-list');
clearInnerHTML(bookList);

const bookHtml = bookDatas.map(bookTemplate).join('');
setInnerHTML(bookList, bookHtml);
