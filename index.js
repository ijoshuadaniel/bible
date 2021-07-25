const express = require('express')
const app = express()
const fs = require('fs')

app.use(express.json())

const error = { error: 404, errorMsg: 'Not Found' }

app.get('/verses', (req, res) => {
  const { book, chapter, verse } = req.body
  if (!book || !chapter || !verse) {
    res.status(404).json(error)
  } else {
    let data = fs.readFileSync(`./data/chapters/${book}.json`)
    let json = JSON.parse(data)
    const verseData = json.chapters[chapter].verses[verse]
    res.status(200).json(verseData)
  }
})

app.get('/chapter', (req, res) => {
  const { book, chapter } = req.body
  if (!book || !chapter) {
    res.status(404).json(error)
  } else {
    let data = fs.readFileSync(`./data/chapters/${book}.json`)
    let json = JSON.parse(data)
    const chapterData = json.chapters[chapter]
    res.status(200).json(chapterData)
  }
})

app.get('/books', (req, res) => {
  if (!book) {
    res.status(404).json(error)
  } else {
    const { books } = req.body
    let data = fs.readFileSync(`./data/chapters/${books}.json`)
    const book = JSON.parse(data)
    res.status(200).json(book)
  }
})

app.get('/', (req, res) => {
  const { testments } = req.body
  let filename
  let error = false
  if (!testments) {
    filename = 'allbooks'
  } else {
    if (testments === 'Old') {
      filename = 'oldtestment'
    } else if (testments === 'New') {
      filename = 'newtestment'
    } else {
      error = true
    }
  }
  if (error) {
    res.status(404).json()
  } else {
    let book
    book = fs.readFileSync(`./data/books/${filename}.json`)
    const json = JSON.parse(book)
    res.status(200).json(json)
  }
})

app.listen(80)
