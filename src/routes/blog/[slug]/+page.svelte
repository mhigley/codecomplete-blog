<!-- src/routes/[slug]/+page.svelte -->
<script>
	export let data;
	console.log(data)
</script>

<article>
	<h1>{ data.title }</h1>
	<p>Published: {data.date}</p>

	<data.Post />

</article>
