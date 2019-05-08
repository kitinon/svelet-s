require('svelte/register');
const express = require('express')
const app = express()
const port = 3000

app.get('/:filename.svelte', (req, res) => {
  const { filename } = req.params
  const page = require(`./${filename}.svelte`).default
  const { html, css, head } = page.render({})
  res.send(html)
})

app.listen(port, () => console.log(`Svelet-S listening on port ${port}!`))