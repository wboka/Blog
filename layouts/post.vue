<template lang="pug">
	div
		NavBar
		.max-w-3xl.p-6.mx-auto
			Nuxt.mt-0(class="sm:mt-12")
		Footer
</template>

<script>
import NavBar from '~/components/NavBar';
import Footer from '~/components/Footer';

export default {
	name: 'PostLayout',
	components: {
		Footer,
		NavBar,
	},
};
</script>
