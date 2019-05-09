<script>
  import NewsList from './newsList.svelte'
  export let news
</script>

<style>
	@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
</style>

<html lang="en">
<head></head>
<body>
<div class="row">	
	<NewsList {news} />
</div>
</body>
</html>