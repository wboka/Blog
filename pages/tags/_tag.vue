<template lang="pug">
	div
		h1
			Hashtag.w-12.h-12
			|
			| {{ tag }}

		.flex.flex-wrap
			.w-full.mb-10(class='sm:w-1/2 md:w-1/3 lg:w-1/4' v-for="(p, i) in posts" :key="`all-posts-${i}`")
				.m-2
					PostCard(:post="p")

			h2(v-if="posts.length === 0") No posts found
</template>

<script>
import Hashtag from '~/components/svg/hashtag'
import PostCard from '~/components/PostCard'

export default {
	name: 'TagIndex',
	head() {
		return {
			title: this.tag,
		};
	},
	components: {
		Hashtag,
		PostCard
	},
	async asyncData({ $content, params }) {
		const posts = await $content('blog-posts').where({
			tags: {
				$contains: params.tag,
			},
		}).fetch();

		return {
			tag: params.tag,
			posts
		}
	},
};
</script>
