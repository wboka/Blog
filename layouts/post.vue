<template lang="pug">
	div
		NavBar
		.max-w-3xl.p-6.mx-auto
			Nuxt.mt-0(class="sm:mt-12")
</template>

<script>
import NavBar from '~/components/NavBar';

export default {
	name: 'PostLayout',
	components: {
		NavBar,
	},
};
</script>
