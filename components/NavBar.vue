<template lang="pug">
	nav#top-menu.w-full.flex.items-center.justify-between.flex-wrap.bg-gradient-to-br.from-teal-800.to-teal-500.p-3.z-50(class='sm:fixed')
		.flex.items-center.flex-shrink-0.text-white.mr-6
			nuxt-link.font-normal.text-white.text-2xl.tracking-tight.no-underline.border-0.brand-name(to='/') Boka's Solutions
		.block(class='sm:hidden')
			button.flex.items-center.px-3.py-2.border.rounded.text-white.border-none(class='hover:text-white hover:border-white' @click='toggleMenu')
				svg.fill-current.h-6.w-6(viewbox='0 0 20 20' xmlns='http://www.w3.org/2000/svg')
					title Menu
					path(d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z')
		#menu-items.w-full.fade.flex-grow.block(class='sm:flex sm:items-center sm:w-auto' :class='{ hidden: !showMenu, block: showMenu }')
			.text-sm.text-center(class='sm:flex-grow sm:text-right')
				nuxt-link.navbar-link(to='/' title='Home') Home
				nuxt-link.navbar-link(to='/categories' title='Categories') Categories
				nuxt-link.navbar-link(to='/tags' title='Tags') Tags
				nuxt-link.navbar-link(to='/about' title='About') About
</template>

<script>
export default {
	name: 'Navigation',
  data() {
    return {
      showMenu: false,
    };
  },
  watch: {
    $route() {
      this.showMenu = false;
    },
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
