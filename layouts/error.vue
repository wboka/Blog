<template lang="pug">
	.container.bg-white.mx-auto.my-2.p-4.rounded-lg.text-center
		.flex.flex-wrap
			.w-full.text-left(class='sm:w-1/2 md:w-2/3')
				div(v-if='error.statusCode === 404')
					h1 404
					h2 Sorry I couldn&apos;t find that page
					p
						| You can find several other pages in the menus at the top and bottom
						| of this page.
				div(v-else='')
					h1 An error occurred
					p
						| I&apos;m not sure what but something&apos;s not right. Please try refreshing
						| the page or
						|
						nuxt-link(to='/contact') contact me
			.w-full(class='sm:w-1/2 md:w-1/3')
				Cat
		nuxt-link(to='/') Home page
</template>

<script>
import Cat from '~/components/Cat';

export default {
	head() {
		return {
			title: this.error.statusCode,
		};
	},
	components: {
		Cat,
	},
	props: {
		error: {
			type: Object,
			default() {
				return { statusCode: 200 };
			},
		},
	},
};
</script>
