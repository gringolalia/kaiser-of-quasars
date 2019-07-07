<template lang="pug">
q-page.flex.flex-center.column
	img(alt='Quasar Phasuar', src='~assets/hammer-sickle.svg', width='200px')
	h3.q-display-2.q-my-sm Buckaroo Banzai
	h4.q-display-1.q-my-sm Across the Eighth Dimension
	h5.q-headline.q-my-xs.q-mb-md From a Novel by Earl Max Rauch
	.text-center
		q-btn.q-my-md(color='blue-grey-4', icon='waves', label='Fiat Crux' @click='opened = true')
		q-btn.q-my-md.q-ml-md(color='yellow-2 text-blue-grey-8', icon='directions_boat', label='Nemo Omen', to="leagues")
		q-btn.q-my-md.q-ml-md(color='black text-white', icon='all_inclusive', label='Lost in Space', to="/lost-planet" exact="true")


	q-modal(v-model='opened', :content-css="{minWidth: '50vw', minHeight: '60vh'}")
		q-modal-layout
			q-toolbar.bg-blue-grey.q-pa-lg(slot='header')
				q-btn(flat='', round='', dense='', v-close-overlay='', icon='keyboard_arrow_left')
				q-toolbar-title.q-title
					i.fas.fa-broadcast-tower.fa-2x.q-mr-md
					| Engenho Novo Wavelengths SA

			q-toolbar.bg-blue-grey(slot='footer')
				q-toolbar-title.q-body-1
					| Source: New York Times

			.layout-padding.text-center
				h1.q-headline.dignity.q-my-md A Holy Modal Rounding Error

				q-icon.q-mt-none(name="fas fa-mosque" size="7rem" color="blue-grey-4")

			p.text-center
				q-btn.q-mx-md(color='blue-grey' v-close-overlay label='Clothes', icon="directions_bike" @click='opened = false')

				q-btn.q-mx-md.bg-yellow-2(v-close-overlay='', label='Throes', icon="rowing" @click='opened = false')

				q-btn.q-mx-md.bg-tertiary.text-white( v-close-overlay='', label='Moes', icon="pool" @click='opened = false')
</template>

<style>
</style>

<script>
export default {
  data () {
    return {
      opened: false
    }
  }
}
</script>
