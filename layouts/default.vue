<template lang="pug">
	div
		NavBar
		.p-6.mx-auto
			Nuxt.mt-0(class="sm:mt-16")
		Footer
</template>

<script>
import NavBar from '~/components/NavBar';
import Footer from '~/components/Footer';

export default {
	name: 'DefaultLayout',
	components: {
		Footer,
		NavBar,
	},
};
</script>
