<template lang="pug">
	div
		NavBar
		.p-6
			Nuxt.mt-0(class="sm:mt-12")
</template>

<script>
import NavBar from '~/components/NavBar';

export default {
	name: 'Navigation',
	components: {
		NavBar,
	},
};
</script>
