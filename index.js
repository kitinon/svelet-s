require('svelte/register');
const express = require('express')
const app = express()
const port = 3000

const fetch = require('node-fetch')

const fetchNews = async () => {
  let newsAPI = 'https://newsapi.org/v2/top-headlines?country=th&category=technology&apiKey=36de87b41bc74690bea3dd3f58d81760'
  const response = await fetch(newsAPI)
  return (await response.json()).articles
}
let newsP = fetchNews()

app.get('/:filename.svelte', async (req, res) => {
  const { filename } = req.params
  const page = require(`./${filename}.svelte`).default
  let news = await newsP
  console.log(news.length)
  const { html, css, head } = page.render({news})
  const pos = html.indexOf("</head>")
  res.send([
    html.slice(0, pos),
    "<style>", css.code, "</style>",
    html.slice(pos)
  ].join(''))
})

app.listen(port, () => console.log(`Svelet-S listening on port ${port}!`))