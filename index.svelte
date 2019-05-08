<script>
  import Hello from './hello.svelte'
  let name = 'Tan'
</script>

<html lang="en">
<head></head>
<body>
  <Hello {name}/>
  <span class="square"></span>
</body>
</html>

<style>
.square {
  display: block;
  width: 50px;
  height: 50px;
  background: lightgreen;
  border: 1px solid black;
}
</style>