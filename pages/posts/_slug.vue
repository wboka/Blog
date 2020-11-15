<template lang="pug">
	div
		h1 {{ post.title }}

		img.rounded-md.object-cover.w-full.h-64(v-if="post.hero_image" :src="post.hero_image")

		.w-full.h-48.bg-gradient-to-bl.from-green-800.to-green-600.rounded-md(v-else)

		nuxt-content(:document="post")
</template>

<script>
export default {
	name: 'BlogPost',
	head() {
		return {
			title: this.post.title,
		}
	},
	async asyncData({ $content, params }) {
		const post = await $content('blog-posts', params.slug).fetch();

		return {
			post,
		};
	},
};
</script>
