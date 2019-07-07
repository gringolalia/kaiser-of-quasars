<template lang="pug">
div
	q-page.flex.flex-center.column
		img.q-my-md(alt='Quasar Phasuar', src='~assets/alchemy-sulphuric.svg', width='200px')

		h3.q-display-2.q-my-sm The Thing
		h4.q-display-1.q-my-md If I Were John Carpenter

		h3.q-my-md And You Were Afraid, O

		q-btn.q-my-lg(color='blue-grey-4', icon='waves', label='Arctic Extremes')

	q-page.row.wrap.gutter-md.justify-around
		.col-xs-12.col-md-4
			q-card.q-pa-sm(color='yellow-1' text-color='black' style="width: 400px; max-width: 25vw")
				q-card-title
						q-icon.q-mr-md(name='fas fa-mosque fa-2x')
						| Engenho Novo LLC
						span(slot='subtitle') Clonado na Samboja 2018

				q-icon(slot='right' name='waves')

				q-card-main
					| Тимеам доценди легендос яуо но, вим модо адиписци сусципиантур ат. Нам дебет епицуреи ин. Яуем сумо ет хас. Лабитур неглегентур ан хас. Ан инвенире ехпетенда про, еам ут доцтус цонцлудатуряуе.

				q-card-separator
				q-card-actions
					q-btn(raised color='black' icon='pool' label='Sink' size="lg")
					q-btn(raised color='blue-grey-8' icon='fas fa-sun fa-2x' label='Swim' size='lg')

		.col-xs-12.col-md-4
			q-card.q-pa-sm(color='yellow-1' text-color='black' style="width: 400px; max-width: 25vw")
				q-card-title
						q-icon.q-mr-md(name='fas fa-mosque fa-2x')
						| Engenho Novo LLC
						span(slot='subtitle') Clonado na Samboja 2018

				q-icon(slot='right' name='waves')

				q-card-main
					| Тимеам доценди легендос яуо но, вим модо адиписци сусципиантур ат. Нам дебет епицуреи ин. Яуем сумо ет хас. Лабитур неглегентур ан хас. Ан инвенире ехпетенда про, еам ут доцтус цонцлудатуряуе.

				q-card-separator
				q-card-actions
					q-btn(raised color='black' icon='pool' label='Sink' size="lg")
					q-btn(raised color='blue-grey-8' icon='fas fa-sun fa-2x' label='Swim' size='lg')

		.col-xs-12.col-md-4
			q-card.q-pa-sm(color='yellow-1' text-color='black'  style="width: 400px; max-width: 25vw")
				q-card-title
						q-icon.q-mr-md(name='fas fa-mosque fa-2x')
						| Engenho Novo LLC
						span(slot='subtitle') Clonado na Samboja 2018

				q-icon(slot='right' name='waves')

				q-card-main
					| Тимеам доценди легендос яуо но, вим модо адиписци сусципиантур ат. Нам дебет епицуреи ин. Яуем сумо ет хас. Лабитур неглегентур ан хас. Ан инвенире ехпетенда про, еам ут доцтус цонцлудатуряуе.

				q-card-separator
				q-card-actions
					q-btn(raised color='black' icon='pool' label='Sink' size="lg")
					q-btn(raised color='blue-grey-8' icon='fas fa-sun fa-2x' label='Swim' size='lg')

</template>

<style>
</style>

<script>
export default {
	name: 'PageIndex'
}
</script>
