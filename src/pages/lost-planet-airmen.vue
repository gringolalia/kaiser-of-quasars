<template lang="pug">
q-page
	.row.flex.flex-center.space-around.q-my-xl
		img.q-mr-md(alt='Quasar Phasuar', src='~assets/hammer-sickle.svg', height='100px')
		img.q-mr-md(alt='Quasar Phasuar', src='~assets/biohazard.svg', height='100px')
		img.q-mr-md(alt='Quasar Phasuar', src='~assets/alchemy-sulphuric.svg', height='100px')

	.column
		h3.q-display-2.text-center.q-my-none Commander Cody
		h4.q-display-1.text-center.q-my-sm Lost Planet Airmen
		h5.q-headline.text-center.q-mt-sm.q-mb-sm Hot Rod Lincoln

	.row.flex.flex-center
		q-card.standard-card(color="purple-8" inline)
			q-card-title
				| Engenho Novo LLC
				span.text-white(slot='subtitle') Quinquilharias SA
				q-icon(slot='right', name='more_vert' color="white")
					q-popover
						q-list.no-border(link='')
							q-item(v-close-overlay='')
								q-item-main(label='Responder' icon-left='all_inclusive')

							q-item(v-close-overlay='')
								q-item-main(label='Descartar')

							q-item(v-close-overlay='')
								q-item-main(label='Contornar')

		q-card.standard-card(inline='' color="grey-8")
			q-card-title Kludges Are Us
				span.text-white(slot='subtitle') Puxando Gatos ao Gogo
				q-icon.text-white(slot='right', name='more_vert')
					q-popover
						q-list.no-border(link='')
							q-item(v-close-overlay='' to='/existenz')
								q-item-main(label='Existenz')

							q-item(v-close-overlay='' to='/blade-runner')
								q-item-main(label='Blade Runner')

							q-item(v-close-overlay='' to='/mad-mel')
								q-item-main(label='Mad Mad Max')

		q-card.standard-card(color="blue-grey-4", inline='')
			q-card-title
				| Nights at the Improv
				span.text-white(slot='subtitle') Fake It Until You Make It
				q-icon(slot='right', name='more_vert')
					q-popover
						q-list.no-border(link='')
							q-item(v-close-overlay='')
								q-item-main(label='Select Me')
							q-item(v-close-overlay='')
								q-item-main(label='Ignore Him')
							q-item(v-close-overlay='')
								q-item-main(label='All Get Along?')

		q-card.standard-card(color="yellow-2", inline)
			q-card-title.text-black O Famigerado Jeitinho
				span.text-black(slot='subtitle') Engenhocas Dorminhocas
				q-icon(slot='right' name='more_vert')
					q-popover
						q-list.no-border(link style="min-height: 200px")

							q-item(v-close-overlay='' to='/existenz')
								i.fa.fa-mercury.fa-lg.q-mr-sm
								q-item-main(label='Existenz')
							q-item(v-close-overlay='' to='/blade-runner')
								i.fa.fa-sun.fa-lg.q-mr-sm
								q-item-main(label='Blade Runner')
							q-item(v-close-overlay='' to='/mad-mel')
								i.fa.fa-moon.fa-lg.q-mr-sm
								q-item-main(label='Mad Mad Max')
							q-item(v-close-overlay='' to='/metropolis')
								i.fa.fa-chess-knight.fa-lg.q-mr-sm
								q-item-main(label='That Kraftwerk Song')
</template>

<style>
.standard-card {
	width: 300px;
	margin: 20px;
}
</style>
