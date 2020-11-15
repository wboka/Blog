<template lang="pug">
	main
		.flex.flex-wrap.space-x-0.mb-16(class="md:space-x-6 md:flex-no-wrap")
			.w-full.mb-4.p-4.relative.rounded.block(class="md:w-4/7 lg:mb-0 lg:p-0")
				img.rounded-md.object-cover.w-full.h-64(v-if="latestPost.hero_image" :src="latestPost.hero_image")

				.w-full.h-48.bg-gradient-to-bl.from-green-800.to-green-600.rounded-md(v-else)

				span.text-green-700.text-sm.hidden.mt-4.uppercase(class="md:block") {{ latestPost.categories.join(' / ') }}

				h1.text-gray-800.text-4xl.font-bold.mt-2.mb-2.leading-tight {{ latestPost.title }}

				p.text-gray-600.mb-4(v-if="latestPost.summary") {{ latestPost.summary }}

				nuxt-link.inline-block.px-6.py-3.mt-2.rounded-md.bg-green-700.text-gray-100(:to="`/posts/${latestPost.slug}`") Read More

			.w-full(class='md:w-4/7')
				h2 Latest Posts

				.rounded.w-full.flex.flex-col.mb-10(class='lg:flex-row' v-for="(p, i) in lastPosts" :key=`last-5-posts-${i}`)
					img.block.rounded-md.m-4.max-w-xs(v-if='p.hero_image' :src='p.hero_image' class='md:max-h-32 md:m-0')

					.w-full.h-32.bg-gradient-to-bl.from-green-800.to-green-600.rounded-md.max-w-xs(v-else)

					.bg-white.rounded.px-4
						span.text-green-700.text-sm.hidden.uppercase(class='md:block') {{ p.categories.join(' / ') }}

						.text-gray-800.font-semibold.text-xl.mb-2(class='md:mt-0') {{ p.title }}

						p.block.p-2.pl-0.pt-1.text-sm.text-gray-600(class='md:hidden' v-if="latestPost.summary") {{ latestPost.summary }}

						nuxt-link.inline-block.px-3.py-1.mt-2.rounded-md.bg-green-700.text-gray-100(:to="`/posts/${p.slug}`") Read More

		h2 More Posts

		.flex.flex-wrap
			.w-full.mb-10(class='sm:w-1/2 md:w-1/3 lg:w-1/4' v-for="(p, i) in posts" :key=`all-posts-${i}`)
				.rounded.mx-2
					img.block.rounded-md.m-4(v-if='p.hero_image' :src='p.hero_image' class='md:max-w-full md:max-h-32 md:m-0')

					.w-full.h-32.bg-gradient-to-bl.from-green-800.to-green-600.rounded-md.max-w-xs(v-else)

					.bg-white.rounded
						span.text-green-700.text-sm.hidden.uppercase(class='md:block') {{ p.categories.join(' / ') }}

						.text-gray-800.font-semibold.text-xl.mb-2(class='md:mt-0') {{ p.title }}

						p.block.p-2.pl-0.pt-1.text-sm.text-gray-600(class='md:hidden' v-if="latestPost.summary") {{ latestPost.summary }}

						nuxt-link.inline-block.px-3.py-1.mt-2.rounded-md.bg-green-700.text-gray-100(:to="`/posts/${p.slug}`") Read More
</template>

<script>
export default {
	name: "BlogIndex",
	head: {
		title: "Home",
	},
	async asyncData({ $content }) {
		const posts = await $content('blog-posts').sortBy('date', 'desc').fetch();
		const latestPost = posts.shift();
		const lastPosts = posts.splice(0, 3);

		return {
			lastPosts,
			latestPost,
			posts
		};
	}
}
</script>
