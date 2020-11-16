<template lang="pug">
	div
		h1 {{ post.title }}

		p.text-gray-500 Post Date: {{ formatRelative(new Date(post.date), today) }}
		p.text-gray-500 Last Updated: {{ formatRelative(new Date(post.updatedAt), today) }}

		.flex.flex-wrap
			nuxt-link.mr-2.mb-2.bg-teal-600.text-white.p-2.rounded.leading-none.flex.items-center.shadow-md(:to="`/categories/${encodeURIComponent(t)}`" class='md:block hover:shadow-lg' v-for="(t, i) in post.categories" :key="`tag-${i}`")
				Tag.w-4.h-4
				|
				| {{ t }}

		img.rounded-md.object-cover.w-full.h-64.shadow-lg(v-if="post.hero_image" :src="post.hero_image")

		.w-full.h-48.bg-gradient-to-bl.from-teal-800.to-teal-600.rounded-md(v-else)

		nuxt-content(:document="post")

		.flex.flex-wrap
			nuxt-link.mr-2.mb-2.bg-teal-600.text-white.p-2.rounded.leading-none.flex.items-center.shadow-md(:to="`/tags/${encodeURIComponent(t)}`" class='md:block hover:shadow-lg' v-for="(t, i) in post.tags" :key="`tag-${i}`")
				Hashtag.w-4.h-4
				|
				| {{ t }}
</template>

<script>
import { formatRelative } from 'date-fns';
import Hashtag from '~/components/svg/hashtag'
import Tag from '~/components/svg/tag'

export default {
	name: 'BlogPost',
	layout: 'post',
	head() {
		return {
			title: this.post.title,
		}
	},
	components: {
		Hashtag,
		Tag
	},
	data() {
		return {
			formatRelative,
			today: new Date(),
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
