<template lang="pug">
	main
		.flex.flex-wrap.space-x-0.mb-16(class="md:space-x-6 md:flex-no-wrap")
			.w-full.mb-4.relative.rounded.block(class="sm:w-3/5 lg:mb-0 lg:p-0")
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

				.card
					img.rounded-t-md.object-cover.w-full.h-64(v-if="latestPost.hero_image" :src="latestPost.hero_image")

					.w-full.h-48.bg-gradient-to-bl.from-teal-800.to-teal-600.rounded-t-md(v-else)

					.content
						span.text-teal-700.text-sm.hidden.mt-4.uppercase(class="md:block") {{ latestPost.categories.join(' / ') }}

						h1.text-gray-800.text-4xl.font-bold.mt-2.mb-2.leading-tight {{ latestPost.title }}

						p.text-gray-600.mb-4(v-if="latestPost.summary") {{ latestPost.summary }}

						nuxt-link.inline-block.px-6.py-3.mt-2.rounded-md.bg-teal-700.text-gray-100(:to="`/posts/${latestPost.slug}`") Read More

			.w-full(class='sm:w-2/5')
				h2 Latest Posts

				.rounded.w-full.flex.flex-col.mb-10(v-for="(p, i) in lastPosts" :key="`last-5-posts-${i}`")
					.card.w-full
						img.rounded-t-md.m-0.mx-auto.w-full(v-if='p.hero_image' :src='p.hero_image' class='md:my-0')

						.w-full.h-32.bg-gradient-to-bl.from-teal-800.to-teal-600.rounded-t-md(v-else)

						.content.px-4
							span.text-teal-700.text-sm.hidden.uppercase(class='md:block') {{ p.categories.join(' / ') }}

							.text-gray-800.font-semibold.text-xl.mb-2(class='md:mt-0') {{ p.title }}

							p.block.p-2.pl-0.pt-1.text-sm.text-gray-600(class='md:hidden' v-if="p.summary") {{ p.summary }}

							nuxt-link.inline-block.px-3.py-1.mt-2.rounded-md.bg-teal-700.text-gray-100(:to="`/posts/${p.slug}`") Read More

		h2 More Posts

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
