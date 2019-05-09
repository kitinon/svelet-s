<script>
  export let news
</script>

<style>
	@import url('https://fonts.googleapis.com/css?family=Prompt:500|Taviraj:300');
	h2 {
	  font-family: 'Prompt', sans-serif;
    font-weight: 500;
		color: #222;
	}
	a, a:visited {
	 color: #e2a200;
		text-decoration: none;
	}
	p {
	 font-family: 'Taviraj', serif;
	 font-weight: 300;
	 color: #777;
	}
	p.source{font-size: 0.85rem; color: #e200a2}
	img {max-width: 100%;margin-bottom: 8px}
</style>

{#each news as n}
<div class="col-md-4">
    <img src="{n.urlToImage}" alt="{n.title}" /> 
    <h2><a href="{n.url}">{n.title}</a></h2>
    <p>{n.description}</p>
    <p class="source">แหล่งข่าว: {n.source.name}</p>
    <p><a class="btn btn-secondary" href="{n.url}" role="button">อ่านต่อ »</a></p>
</div>
{/each}