<template lang="pug">
	div
		h1
			Tag.w-12.h-12
			|
			| {{ category }}

		.flex.flex-wrap
			.w-full.mb-10(class='sm:w-1/2 md:w-1/3 lg:w-1/4' v-for="(p, i) in posts" :key="`all-posts-${i}`")
				.m-2
					PostCard(:post="p")

			h2(v-if="posts.length === 0") No posts found
</template>

<script>
import PostCard from "~/components/PostCard";
import Tag from "~/components/svg/tag";

export default {
	name: "CategoryIndex",
	head() {
		return {
			title: this.category,
		};
	},
	components: {
		PostCard,
		Tag,
	},
	async asyncData({ $content, params }) {
		const posts = await $content("blog-posts")
			.where({
				draft: false,
				categories: {
					$contains: params.category,
				},
			})
			.sortBy("date", "desc")
			.fetch();

		return {
			category: params.category,
			posts,
		};
	},
};
</script>
