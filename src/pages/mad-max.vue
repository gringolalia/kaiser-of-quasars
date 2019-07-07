<template lang="pug">
q-layout
	q-page-container
		q-page.row.flex.flex-center
			q-fab.fixed(style='right:18px; bottom: 48px;', color='red', icon='all_inclusive', direction='up')
				q-fab-action(color='purple darken-2', @click='someMethod', icon='waves')
				q-fab-action(color='secondary' @click='someMethod' icon='restaurant')
				q-fab-action(color='warning' @click='someMethod' icon='local_dining')
				q-fab-action(color='black' @click='openURL('/')' icon='free_breakfast')

			.row.wrap.gutter-md
				.col-xs-12.text-center
					i.fas.fa-sun.fa-5x.q-mt-xl
					h1.q-display-2 Mad Maxed Out
					.q-headline.mt-none Aussie Post-Apocalyptic Anomie

			.row.wrap.flex.flex-center.q-mt-xl
				.col-sm-12.col-md-6
					.q-title.text-center.q-mb-sm
						i.fa.fa-chess-knight.fa-3x.q-mb-md
						br
					.q-title.text-center.q-mb-lg Anagram, a Super Quilt Tux

					q-card.q-ma-sm.standard-card(inline)
						q-card-title.text-center(inset)
							| Frequently Axed Perguntas
						q-card-separator
						q-list.text-left
							q-collapsible(group="groping" icon='rowing' label='Who Is On First?')
								div
									| Μνεσαρcηθμ cοτιδιεqθε αδ μελ. Μεα νατθμ ινvιδθντ ατ. Ετ vιμ μελιθσ ελοqθεντιαμ. Τολλιτ σεντεντιαε ηισ νε, qθι ρεqθε διcαμ ταμqθαμ ιν, αφφερτ δισπθτανδο εθμ cθ.

							q-collapsible(group="groping" icon='fastfood', label='Doctor Who?')
								div
									| Μνεσαρcηθμ cοτιδιεqθε αδ μελ. Μεα νατθμ ινvιδθντ ατ. Ετ vιμ μελιθσ ελοqθεντιαμ. Τολλιτ σεντεντιαε ηισ νε, qθι ρεqθε διcαμ ταμqθαμ ιν, αφφερτ δισπθτανδο εθμ cθ.

							q-collapsible(group="groping" icon='smoking_rooms' label='The Why Axis')
								div
									| Μνεσαρcηθμ cοτιδιεqθε αδ μελ. Μεα νατθμ ινvιδθντ ατ. Ετ vιμ μελιθσ ελοqθεντιαμ. Τολλιτ σεντεντιαε ηισ νε, qθι ρεqθε διcαμ ταμqθαμ ιν, αφφερτ δισπθτανδο εθμ cθ.

							q-collapsible(group="groping" icon='local_library' label='When Again?')
								div
									| Μνεσαρcηθμ cοτιδιεqθε αδ μελ. Μεα νατθμ ινvιδθντ ατ. Ετ vιμ μελιθσ ελοqθεντιαμ. Τολλιτ σεντεντιαε ηισ νε, qθι ρεqθε διcαμ ταμqθαμ ιν, αφφερτ δισπθτανδο εθμ cθ.

				.col-sm-12.col-md-6.q-mt-xl
					.q-title.text-center.q-mb-sm
						i.fab.fa-linux.fa-3x.q-mb-md
						br
					.q-title.text-center.q-mb-lg A Linux Tramp Usage Quart
					q-card.q-ma-sm.standard-card(inline)
						q-card-title.text-center
							| Frequently Axed Perguntas
						q-card-separator
						q-list.text-left
							q-collapsible(group="groupies" icon='rowing', label='What Is It?')
								div
									| Μνεσαρcηθμ cοτιδιεqθε αδ μελ. Μεα νατθμ ινvιδθντ ατ. Ετ vιμ μελιθσ ελοqθεντιαμ. Τολλιτ σεντεντιαε ηισ νε, qθι ρεqθε διcαμ ταμqθαμ ιν, αφφερτ δισπθτανδο εθμ cθ.

							q-collapsible(group="groupies" icon='fastfood', label='To What End?')
								div
									| Μνεσαρcηθμ cοτιδιεqθε αδ μελ. Μεα νατθμ ινvιδθντ ατ. Ετ vιμ μελιθσ ελοqθεντιαμ. Τολλιτ σεντεντιαε ηισ νε, qθι ρεqθε διcαμ ταμqθαμ ιν, αφφερτ δισπθτανδο εθμ cθ.

							q-collapsible(group="groupies" icon='fa fa-gears fa-lg', label='Who Are You?')
								div
									| Μνεσαρcηθμ cοτιδιεqθε αδ μελ. Μεα νατθμ ινvιδθντ ατ. Ετ vιμ μελιθσ ελοqθεντιαμ. Τολλιτ σεντεντιαε ηισ νε, qθι ρεqθε διcαμ ταμqθαμ ιν, αφφερτ δισπθτανδο εθμ cθ.

							q-collapsible(group="groupies" icon='smoking_rooms', label='How Now?')
								div
									| Μνεσαρcηθμ cοτιδιεqθε αδ μελ. Μεα νατθμ ινvιδθντ ατ. Ετ vιμ μελιθσ ελοqθεντιαμ. Τολλιτ σεντεντιαε ηισ νε, qθι ρεqθε διcαμ ταμqθαμ ιν, αφφερτ δισπθτανδο εθμ cθ.

				.col-sm-12.col-md-6.q-mt-xl
					.q-title.text-center.q-mb-sm
						i.fa.fa-sun.fa-3x.q-mb-md
						br
					.q-title.text-center.q-mb-lg Anagram, a Super Quilt Tux

					q-card.q-ma-sm.standard-card(inline)
						q-card-title.text-center(inset)
							| Frequently Axed Perguntas
						q-card-separator
						q-list.text-left
							q-collapsible(group="groping" icon='rowing' label='Who Is On First?')
								div
									| Μνεσαρcηθμ cοτιδιεqθε αδ μελ. Μεα νατθμ ινvιδθντ ατ. Ετ vιμ μελιθσ ελοqθεντιαμ. Τολλιτ σεντεντιαε ηισ νε, qθι ρεqθε διcαμ ταμqθαμ ιν, αφφερτ δισπθτανδο εθμ cθ.

							q-collapsible(group="groping" icon='fastfood', label='Doctor Who?')
								div
									| Μνεσαρcηθμ cοτιδιεqθε αδ μελ. Μεα νατθμ ινvιδθντ ατ. Ετ vιμ μελιθσ ελοqθεντιαμ. Τολλιτ σεντεντιαε ηισ νε, qθι ρεqθε διcαμ ταμqθαμ ιν, αφφερτ δισπθτανδο εθμ cθ.

							q-collapsible(group="groping" icon='smoking_rooms' label='The Why Axis')
								div
									| Μνεσαρcηθμ cοτιδιεqθε αδ μελ. Μεα νατθμ ινvιδθντ ατ. Ετ vιμ μελιθσ ελοqθεντιαμ. Τολλιτ σεντεντιαε ηισ νε, qθι ρεqθε διcαμ ταμqθαμ ιν, αφφερτ δισπθτανδο εθμ cθ.

							q-collapsible(group="groping" icon='local_library' label='When Again?')
								div
									| Μνεσαρcηθμ cοτιδιεqθε αδ μελ. Μεα νατθμ ινvιδθντ ατ. Ετ vιμ μελιθσ ελοqθεντιαμ. Τολλιτ σεντεντιαε ηισ νε, qθι ρεqθε διcαμ ταμqθαμ ιν, αφφερτ δισπθτανδο εθμ cθ.

				.col-sm-12.col-md-6.q-mt-xl
					.q-title.text-center.q-mb-sm
						i.fab.fa-linux.fa-3x.q-mb-md
						br
					.q-title.text-center.q-mb-lg A Linux Tramp Usage Quart
					q-card.q-ma-sm.standard-card(inline)
						q-card-title.text-center
							| Frequently Axed Perguntas
						q-card-separator
						q-list.text-left
							q-collapsible(group="groupies" icon='rowing', label='What Is It?')
								div
									| Μνεσαρcηθμ cοτιδιεqθε αδ μελ. Μεα νατθμ ινvιδθντ ατ. Ετ vιμ μελιθσ ελοqθεντιαμ. Τολλιτ σεντεντιαε ηισ νε, qθι ρεqθε διcαμ ταμqθαμ ιν, αφφερτ δισπθτανδο εθμ cθ.

							q-collapsible(group="groupies" icon='fastfood', label='To What End?')
								div
									| Μνεσαρcηθμ cοτιδιεqθε αδ μελ. Μεα νατθμ ινvιδθντ ατ. Ετ vιμ μελιθσ ελοqθεντιαμ. Τολλιτ σεντεντιαε ηισ νε, qθι ρεqθε διcαμ ταμqθαμ ιν, αφφερτ δισπθτανδο εθμ cθ.

							q-collapsible(group="groupies" icon='fa fa-street-view fa-lg', label='Who Are You?')
								div
									| Μνεσαρcηθμ cοτιδιεqθε αδ μελ. Μεα νατθμ ινvιδθντ ατ. Ετ vιμ μελιθσ ελοqθεντιαμ. Τολλιτ σεντεντιαε ηισ νε, qθι ρεqθε διcαμ ταμqθαμ ιν, αφφερτ δισπθτανδο εθμ cθ.

							q-collapsible(group="groupies" icon='smoking_rooms', label='How Now?')
								div
									| Μνεσαρcηθμ cοτιδιεqθε αδ μελ. Μεα νατθμ ινvιδθντ ατ. Ετ vιμ μελιθσ ελοqθεντιαμ. Τολλιτ σεντεντιαε ηισ νε, qθι ρεqθε διcαμ ταμqθαμ ιν, αφφερτ δισπθτανδο εθμ cθ.
</template>


<style>
.standard-card {
	width: 300px;
	margin: 20px;
}

	q-page {
		height: 100%
	}
</style>

<script>
export default {
	name: 'PagIndex'
}
</script>
