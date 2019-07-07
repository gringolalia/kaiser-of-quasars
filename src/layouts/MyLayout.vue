<template lang="pug">
q-layout(view='lHh Lpr lFf')
	q-layout-header
		q-toolbar(color='blue-grey-6', :glossy="$q.theme === 'mat'", :inverted="$q.theme === 'ios'")
			q-btn(flat, dense, round, @click='leftDrawerOpen = !leftDrawerOpen', aria-label='Menu')
				q-icon(name='menu')

			q-toolbar-title.q-pa-md(style="font-size: 130%")
				q-icon.q-mr-md(name='fa fa-gears' size="40px")
				| Engenho Novo LLC

			q-btn-dropdown.q-mr-md(flat label='Genres')
				q-list(link)
					q-item(to='/earth-still')
						q-item-main
							q-item-tile(label)
								i.fa.fa-archway.fa-lg.q-mr-md
								| Futurism
					q-item(to='/duck-dodgers')
						q-item-main
							q-item-tile(label)
								i.fa.fa-fighter-jet.fa-lg.q-mr-md
								| Time Travel
					q-item(to='/mad-mel')
						q-item-main
							q-item-tile(label)
								i.fa.fa-chess-knight.fa-lg.q-mr-md
								| Dystopia
					q-item(to='/2001')
						q-item-main
							q-item-tile(label)
								i.fa.fa-chess-king.fa-lg.q-mr-md
								| Utopia
					q-item(to='/existenz')
						q-item-main
							q-item-tile(label)
								i.fa.fa-chess-pawn.fa-lg.q-mr-md
								| Cyborgs Among Us
					q-item(to='/lost-planet')
						q-item-main
							q-item-tile(label)
								i.fa.fa-chess-bishop.fa-lg.q-mr-md
								| The Forbin Project
					q-item(to='/barbarella')
						q-item-main
							q-item-tile(label)
								i.fa.fa-chess-queen.fa-lg.q-mr-md
								| Barbarella &amp; Duran Duran
					q-item(to='/buckaroo-banzai')
						q-item-main
							q-item-tile(label)
								i.fas.fa-sun.fa-lg.q-mr-md
								| Buckaroo Banzai
					q-item(to='/naked-lunch')
						q-item-main
							q-item-tile(label)
								q-icon.big-icon.q-mr-md(name='restaurant')
								| Naked Lunch

			q-btn(flat, round, dense, icon='all_inclusive', to="/thing")

			q-btn(flat, round, dense, icon='beach_access', to='/flash')

	q-layout-drawer(v-model='leftDrawerOpen', :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null")
		q-list(no-border, link, inset-delimiter)
			q-list-header
				q-icon.q-mr-md(name="local_library" size="25px")
				| Hiperlaços Essenciais

			q-item(@click.native="openURL('/leagues')")
				q-item-side(icon='school')
				q-item-main(label='Doc Holliday', sublabel='Νε vελ ομνεσ φαβθλασ. Cορπορα cοπιοσαε ρεφορμιδανσ ναμ.')

			q-item(@click.native="openURL('https://github.com/quasarframework/')")
				q-item-side(icon='code')
				q-item-main(label='A Gibson Gitfiddle', sublabel='Νε vελ ομνεσ φαβθλασ. Cορπορα cοπιοσαε ρεφορμιδανσ ναμ.')
			|
			q-item(@click.native="openURL('/')")
				q-item-side(icon='chat')
				q-item-main(label='Fat Chat Chance', sublabel='Νε vελ ομνεσ φαβθλασ. Cορπορα cοπιοσαε ρεφορμιδανσ ναμ.')
			|
			q-item(@click.native="openURL('http://forum.quasar-framework.org')")
				q-item-side(icon='record_voice_over')
				q-item-main(label='Lorem Forem Sis Boom Ba', sublabel='Νε vελ ομνεσ φαβθλασ. Cορπορα cοπιοσαε ρεφορμιδανσ ναμ.')
			|
			q-item(@click.native="openURL('/')")
				q-item-side(icon='rss feed')
				q-item-main(label='Chilreando', sublabel='Νε vελ ομνεσ φαβθλασ. Cορπορα cοπιοσαε ρεφορμιδανσ ναμ.')
	|
	q-page-container
		router-view
</template>

<script>
import { openURL } from 'quasar'

export default {
	name: 'MyLayout',
	data () {
		return {
			leftDrawerOpen: this.$q.platform.is.desktop
		}
	},
	methods: {
		openURL
	}
}
</script>

<style>
</style>
