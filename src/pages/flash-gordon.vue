<template lang="pug">
#bunda
	q-page.flex.flex-center.column
		img(alt='Quasar Phasuar', src='~assets/alchemy-sulphuric.svg', width='100px')

		h3.q-display-2.q-my-lg Flash in the Pan

		h4.q-display-1.q-my-md Space Commisar Gordon

		h5.q-my-md Ray Guns and Amazon Planets
		q-btn.q-my-lg(color='blue-grey-4', icon='waves', label='Pocket Rockets')

		.col-xs-12.text-center
			q-list(highlight)
				q-list-header Ronald of the Ray-Guns

				q-item
					q-item-side
						q-item-tile(avatar)
							img(src='statics/hammer-sickle.svg' width='25px')

					q-item-main(label='Calamity Jane')
						q-item-side(right  )
							q-item-tile(icon='all_inclusive', color='blue-grey')

				q-item
					q-item-side(avatar='statics/hammer-sickle.svg' width='25px')
						q-item-main(label='Captain Crunch')
							q-item-side(right icon='free_breakfast')

				q-item-separator
					q-list-header Ronald of Star Wars

					q-item
						q-item-side(avatar='statics/hammer-sickle.svg' width="25px")
							q-item-main(label='Mongo Bongo')

		.col-xs-12.text-center
			q-list(highlight)
				q-list-header Ronald of the Ray-Guns

				q-item
					q-item-side
						q-item-tile(avatar  )
							img(src='statics/hammer-sickle.svg' width='25px')

					q-item-main(label='Calamity Jane')
						q-item-side(right  )
							q-item-tile(icon='all_inclusive', color='bluegrey')

				q-item
					q-item-side(avatar='statics/hammer-sickle.svg' width='25px')
						q-item-main(label='Captain Crunch')
							q-item-side(right icon='free_breakfast')

				q-item-separator
					q-list-header Ronald of Star Wars

					q-item
						q-item-side(avatar='statics/hammer-sickle.svg' width="25px")
							q-item-main(label='Mongo Bongo')
</template>

<style>
</style>

<script>
export default {
	name: 'PageIndex'
}
</script>
