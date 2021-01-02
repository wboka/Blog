<template lang="pug">
	div
		h1 Categories

		ul
			li.py-2(v-for="(c, i) in categories" :key="`category-${i}`")
				nuxt-link(:to="`/categories/${c}`") {{ c }}
</template>

<script>
export default {
	name: "CategoriesIndex",
	head: {
		title: "Categories"
	},
	async asyncData({ $content }) {
		const posts = await $content('blog-posts').where({ draft: false }).sortBy("date", "desc").fetch();

		const categories = posts.map(p => p.categories).reduce((a, b) => a.concat(b)).filter((value, i, self) => self.indexOf(value) === i);

		return {
			categories,
		}
	}
}
</script>
