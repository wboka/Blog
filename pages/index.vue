<template lang="pug">
	main
		.flex.flex-wrap.space-x-0.mb-4(class="md:space-x-6 md:flex-no-wrap")
			.w-full.mb-4.px-2.rounded.block(class="sm:px-4 lg:w-2/5 lg:mb-0 lg:p-0")
				h1.text-center Hello, My Name is Wayne Boka

				img.rounded-full.shadow-xl.mx-auto(src="/images/wb-profile250.jpg")

				p Hello! My name is Wayne and I am a website developer based out of Westfield, PA. I have been building websites and web applications since 2011.
					|
					|
					a(href="https://m.me/bokasolutions") Send me a Facebook message
					|
					| or
					|
					a(href="mailto:wayne@bokasolutions.com") email me
					|
					| to discuss how I can help build your online presence.

			.px-2.w-full(class='lg:w-3/5 sm:px-4')
				PostCard(v-if="latestPost" :post="latestPost")

		h2 Latest Posts

		.flex.flex-wrap
			.w-full.mb-4(class="md:px-4 md:w-1/3" v-for="(p, i) in lastPosts" :key="`last-5-posts-${i}`")
				PostCard(:post="p")

		.card(v-if="lastPosts.length === 0")
			.content
				p.text-xl No more posts

		h2 More Posts

		.flex.flex-wrap
			.w-full.mb-10(class='sm:w-1/2 md:w-1/3 lg:w-1/4' v-for="(p, i) in posts" :key="`all-posts-${i}`")
				.m-2
					PostCard(:post="p")

		.card(v-if="posts.length === 0")
			.content
				p.text-xl No more posts
</template>

<script>
import { formatRelative } from "date-fns";
import PostCard from "~/components/PostCard";

export default {
	name: "BlogIndex",
	components: {
		PostCard,
	},
	head: {
		title: "Home",
	},
	data() {
		return {
			formatRelative,
			today: new Date(),
		};
	},
	async asyncData({ $content }) {
		const posts = await $content("blog-posts").sortBy("date", "desc").fetch();
		const latestPost = posts.shift();
		const lastPosts = posts.splice(0, 3);

		return {
			lastPosts,
			latestPost,
			posts,
		};
	},
};
</script>
