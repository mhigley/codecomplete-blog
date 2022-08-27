<script>
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles/styles.scss';
</script>

<Header />

<main>
	<slot />
</main>

<footer>Hey there, I'm the footer</footer>