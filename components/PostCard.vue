<template lang="pug">
	.card.w-full
		img.rounded-t-md.m-0.mx-auto.w-full(v-if='post.hero_image' :src='post.hero_image' class='md:my-0')

		.w-full.h-32.bg-gradient-to-bl.from-teal-800.to-teal-600.rounded-t-md(v-else)

		.content.px-4
			span.text-teal-700.text-sm.hidden.uppercase(class='md:block') {{ post.categories.join(' / ') }}

			.text-gray-800.font-semibold.text-xl.mb-2(class='md:mt-0') {{ post.title }}

			p.text-gray-700.italic Published on {{ formatRelative(new Date(post.date), today) }}

			p.block.p-2.pl-0.pt-1.text-md.text-gray-700(v-if="post.summary") {{ post.summary }}

			nuxt-link.inline-block.px-3.py-1.mt-2.rounded-md.bg-teal-700.text-gray-100(:to="`/posts/${post.slug}`") Read Blog Post
</template>

<script>
import { formatRelative } from "date-fns";

export default {
	name: "PostCard",
	props: {
		post: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	data() {
		return {
			formatRelative,
			today: new Date(),
		};
	},
};
</script>
