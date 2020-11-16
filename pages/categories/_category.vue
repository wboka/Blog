<template lang="pug">
	div
		h1
			Tag.w-12.h-12
			|
			| {{ category }}

		.flex.flex-wrap
			.w-full.mb-10(class='sm:w-1/2 md:w-1/3 lg:w-1/4' v-for="(p, i) in posts" :key="`all-posts-${i}`")
				.card.mx-2
					img.block.rounded-t-md.m-4(v-if='p.hero_image' :src='p.hero_image' class='md:max-w-full md:max-h-32 md:m-0')

					.w-full.h-32.bg-gradient-to-bl.from-teal-800.to-teal-600.rounded-t-md.max-w-xs(v-else)

					.content
						span.text-teal-700.text-sm.hidden.uppercase(class='md:block') {{ p.categories.join(' / ') }}

						.text-gray-800.font-semibold.text-xl.mb-2(class='md:mt-0') {{ p.title }}

						p.block.p-2.pl-0.pt-1.text-sm.text-gray-600(class='md:hidden' v-if="p.summary") {{ p.summary }}

						nuxt-link.inline-block.px-3.py-1.mt-2.rounded-md.bg-teal-700.text-gray-100(:to="`/posts/${p.slug}`") Read More

			h2(v-if="posts.length === 0") No posts found
</template>

<script>
import Tag from '~/components/svg/Tag'

export default {
	name: 'CategoryIndex',
	head() {
		return {
			title: this.category,
		};
	},
	components: {
		Tag
	},
	async asyncData({ $content, params }) {
		const posts = await $content('blog-posts').where({
			categories: {
				$contains: params.category,
			},
		}).fetch();

		return {
			category: params.category,
			posts
		}
	},
};
</script>
