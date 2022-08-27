// src/routes/blog/[slug]/+page.js
export async function load({ params }){
	const Post = await import(`../${params.slug}.md`)
	const { title, date } = Post.metadata

	return {
		Post,
		title,
		date
	}
}