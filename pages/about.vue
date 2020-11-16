<template lang="pug">
	div
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

		h2 Skills and Interests

		.flex.flex-wrap
			.w-full(class="sm:w-1/2")
				h3 Languages

				ul
					li HTML5
					li CSS3
					li JavaScript
					li ColdFusion / Lucee
					li Python
					li Oracle
					li MySQL
			.w-full(class="sm:w-1/2")
				h3 Libraries

				ul
					li Django
					li jQuery
					li Vue
					li Bootstrap
</template>

<script>
export default {
	name: 'About',
	head: {
		title: 'About'
	},
	layout: 'post'
}
</script>
