<template lang="pug">
	div
		hr

		.text-center
			ul.list-none
				li.inline-block.px-3.py-2
					nuxt-link(to='/' title='Home') Home
				li.inline-block.px-3.py-2
					nuxt-link(to='/categories' title='Categories') Categories
				li.inline-block.px-3.py-2
					nuxt-link(to='/tags' title='Tags') Tags
				li.inline-block.px-3.py-2
					nuxt-link(to='/about' title='About') About
				li.inline-block.px-3.py-2
					a(href='/sitemap.xml') Sitemap

			p Website Development by
				|
				|
				a(href="https://www.bokasolutions.com" target="_blank" rel="noopener noreferrer") Wayne Boka, Web Developer

			p &copy; 2020{{ year > 2020 ? `-${year}` : '' }} Wayne Boka, All Rights Reserved
</template>

<script>
export default {
	name: 'Footer',
	data() {
		return {
			year: new Date().getFullYear()
		}
	}
}
</script>
