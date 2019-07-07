<template lang="pug">
q-page.flex.flex-center.column
	img.q-mb-lg(alt='Quasar Phasuar', src='~assets/hammer-sickle.svg', width='200px')

	h3.q-display-2.q-my-sm The Matriarch Allegory

	h4.text-center.q-display-1.q-my-md Diário de Bordo
	h5.text-center.q-mt-xs
		| &nbsp;Do Espaçonave Nostromo

	q-btn.q-my-xs(color='blue-grey-6' icon='all_inclusive' label='Ripley Sleeps' to="/flash")
</template>

<style>
</style>

<script>
export default {
	name: 'PageIndex'
}
</script>
