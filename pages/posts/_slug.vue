<template lang="pug">
	div
		h1 {{ post.title }}

		p.text-gray-700 Post Date: {{ formatRelative(new Date(post.date), today) }}
		p.text-gray-700 Last Updated: {{ formatRelative(new Date(post.updatedAt), today) }}

		.flex.flex-wrap
			nuxt-link.mr-2.mb-2.bg-teal-600.text-white.p-2.rounded.leading-none.flex.items-center.shadow-md(:to="`/categories/${encodeURIComponent(t)}`" class='md:block hover:shadow-lg' v-for="(t, i) in post.categories" :key="`tag-${i}`")
				Tag.w-4.h-4
				|
				| {{ t }}

		img.rounded-md.max-w-full.object-cover.mx-auto(v-if="post.hero_image" :src="post.hero_image" class="sm:max-w-sm md:max-w-md lg:max-w-lg")

		.w-full.h-48.bg-gradient-to-bl.from-teal-800.to-teal-600.rounded-md(v-else)

		nuxt-content(:document="post")

		.flex.flex-wrap
			nuxt-link.mr-2.mb-2.bg-teal-600.text-white.p-2.rounded.leading-none.flex.items-center.shadow-md(:to="`/tags/${encodeURIComponent(t)}`" class='md:block hover:shadow-lg' v-for="(t, i) in post.tags" :key="`tag-${i}`")
				Hashtag.w-4.h-4
				|
				| {{ t }}

		hr

		h2 More Posts

		//- pre {{ morePosts }}

		.flex.flex-wrap
			.w-full(class="sm:w-1/2" v-for="(p, i) in morePosts" :key="`more-posts-${i}`" v-if="p")
				.m-4
					PostCard(:post="p")

		//- .flex.flex-wrap
		//- 	.w-full(class="sm:w-1/2")
		//- 		.my-4
		//- 			nuxt-link(v-if="prev" :to="`/posts/${prev.slug}`") {{ prev.title }}

		//- 	.w-full(class="sm:w-1/2 sm:text-right")
		//- 		.my-4
		//- 			nuxt-link(v-if="next" :to="`/posts/${next.slug}`") {{ next.title }}
</template>

<script>
import { formatRelative } from "date-fns";
import Hashtag from "~/components/svg/hashtag";
import Tag from "~/components/svg/tag";
import PostCard from "~/components/PostCard"

export default {
	name: "BlogPost",
	layout: "post",
	head() {
		return {
			title: this.post.title,
		};
	},
	components: {
		Hashtag,
		PostCard,
		Tag,
	},
	data() {
		return {
			formatRelative,
			today: new Date(),
		};
	},
	async asyncData({ $content, params, error }) {
		const post = await $content("blog-posts", params.slug)
			.where({ draft: false })
			.sortBy("date", "desc")
			.fetch()
			.catch((err) => {
				error({ statusCode: 404, message: "Page not found" });
			});
		const morePosts = await $content("blog-posts")
			.where({ draft: false })
			.sortBy("date")
			.surround(params.slug, {
				before: 5,
				after: 5
			})
			.sortBy("date", "desc")
			.fetch();

		return {
			morePosts,
			post,
		};
	},
};
</script>
