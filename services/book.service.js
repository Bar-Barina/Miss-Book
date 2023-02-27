'use strict'

import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

import booksDB from "./../data/book.json" assert { type: "json" }

const BOOK_KEY = 'bookDB'


// createData()
// function createData() {
//   utilService.saveToStorage(BOOK_KEY, booksDB)
// }

_createBooks()

export const bookService = {
  query,
  get,
  remove,
  save,
  getEmptyBook,
}

function query(filterBy = {}) {
  return storageService.query(BOOK_KEY).then((books) => {
    if (filterBy.txt) {
      const regex = new RegExp(filterBy.txt, 'i')
      books = books.filter((book) => regex.test(book.title))
    }
    // if (filterBy.amount) {
    //   // books = books.filter(book => book.maxPrice >= filterBy.minPrice)
    // }
    return books
  })
}

function get(bookId) {
  return storageService.get(BOOK_KEY, bookId)
}

function remove(bookId) {
  return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
  if (book.id) {
    return storageService.put(BOOK_KEY, book)
  } else {
    return storageService.post(BOOK_KEY, book)
  }
}

function getEmptyBook(title = '', amount = 0) {
  return { id: '', title, listPrice:amount }
}

function _createBooks() {
  let books = utilService.loadFromStorage(BOOK_KEY)
  if (!books || !books.length) {
    books = booksDB
    utilService.saveToStorage(BOOK_KEY, books)
  }
}

function _createBook(title, amount = 250) {
  const book = getEmptyBook(title, amount)
  book.id = utilService.makeId()
  return book
}
