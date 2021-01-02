<template lang="pug">
	div
		h1 Tags

		ul
			li.py-2(v-for="(t, i) in tags" :key="`category-${i}`")
				nuxt-link(:to="`/tags/${t}`") {{ t }}
</template>

<script>
export default {
	name: "TagsIndex",
	head: {
		title: "Tags"
	},
	async asyncData({ $content }) {
		const posts = await $content('blog-posts').where({ draft: false }).sortBy("date", "desc").fetch();

		const tags = posts.map(p => p.tags).reduce((a, b) => a.concat(b)).filter((value, i, self) => self.indexOf(value) === i);

		return {
			tags,
		}
	}
}
</script>
