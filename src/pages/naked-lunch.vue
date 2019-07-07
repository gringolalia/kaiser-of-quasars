<template lang="pug">

q-layout
	q-page-container
		q-page.row.flex.flex-center
			q-fab.fixed(style='right:18px; bottom: 48px;', color='red', icon='all_inclusive', direction='up')
				q-fab-action(color='purple darken-2', @click='someMethod', icon='waves')
				q-fab-action(color='secondary' @click='someMethod' icon='restaurant')
				q-fab-action(color='warning' @click='someMethod' icon='local_dining')
				q-fab-action(color='black' @click='openURL('/')' icon='free_breakfast')

			.row.wrap.gutter-lg.q-mb-xl
				.col-xs-12.text-center
					i.fas.fa-sun.fa-5x.q-mt-xl
					h1.q-display-2 Burroughs Burrows
					.q-headline.mt-none Into the Echt Unconscious
					q-btn.q-mt-lg(color='blue-grey' @click='clickMethod' label='Typewriter Talking')

			.row.flex.flex-center.wrap
				.col-sm-12.col-md-6
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

				.col-sm-12.col-md-6
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

				.col-sm-12.col-md-6
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

				.col-sm-12.col-md-6
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



//- q-layout
//- 	q-page-container
//- 		q-page.row.flex.flex-center
//- 			q-fab.fixed(style='right:18px; bottom: 48px;', color='red', icon='all_inclusive', direction='up')
//- 				q-fab-action(color='purple darken-2', @click='someMethod', icon='waves')
//- 				q-fab-action(color='secondary' @click='someMethod' icon='restaurant')
//- 				q-fab-action(color='warning' @click='someMethod' icon='local_dining')
//- 				q-fab-action(color='black' @click='openURL('/')' icon='free_breakfast')
//-
//- 			.row.wrap.gutter-md
//- 				.col-xs-12.text-center
//- 					i.fas.fa-star-and-crescent.fa-5x
//- 						h3.q-display-2.q-mt-xl Burroughs Burrows
//- 						h4.q-display-1.q-my-none Into the Echt Unconscious
//- 						q-btn.q-my-xl(color='blue-grey-4', icon='fa fa-crosshairs', label='Madly Typing' to='/to-come')
//-
//- 			.row.wrap.gutter-sm.text-center.mt-xl
//- 				.col-sm-12.col-md-6
//- 					q-card(inline style='width: 300px')
//- 						q-card-title
//- 							i.fas.fa-chess.fa-lg.q-mr-md
//- 							| Cartas Fora do Baralho
//- 						q-card-separator
//- 							q-list
//- 								q-collapsible(group='third-o' icon='all_inclusive' label='In Principio')
//- 									div
//- 										| Φαβθλασ οπορτεατ ρεπρεηενδθντ cθμ ει. Ιν ασσθμ cονγθε δοcενδι qθι, vιξ ετ ιμπετθσ θτροqθε δολορεμ. Ει qθισ αλιqθιπ προδεσσετ vιξ.
//-
//- 								q-collapsible(group='third-o' icon='free_breakfast', label='In Media Res')
//- 									div
//- 										| Φαβθλασ οπορτεατ ρεπρεηενδθντ cθμ ει. Ιν ασσθμ cονγθε δοcενδι qθι, vιξ ετ ιμπετθσ θτροqθε δολορεμ. Ει qθισ αλιqθιπ προδεσσετ vιξ.
//-
//- 								q-collapsible(group='third-o' icon='smoking_rooms', label='O Fim da Picada')
//- 									div
//- 										| Φαβθλασ οπορτεατ ρεπρεηενδθντ cθμ ει. Ιν ασσθμ cονγθε δοcενδι qθι, vιξ ετ ιμπετθσ θτροqθε δολορεμ. Ει qθισ αλιqθιπ προδεσσετ vιξ.
//-
//- 				.col-sm-12.col-md-6
//- 					q-card(inline style='width: 300px;')
//- 						q-card-title
//- 							i.fas.fa-quidditch.fa-lg.q-mr-md
//- 							| Harry Potter Rookie Card
//- 						q-card-separator
//- 							q-list
//- 								q-collapsible(group='first-o' icon='fas fa-mosque' label='In Principio')
//- 									div
//- 										| Φαβθλασ οπορτεατ ρεπρεηενδθντ cθμ ει. Ιν ασσθμ cονγθε δοcενδι qθι, vιξ ετ ιμπετθσ θτροqθε δολορεμ. Ει qθισ αλιqθιπ προδεσσετ vιξ.
//-
//- 								q-collapsible(group='first-o' icon='settings_input_antenna' label='In Media Res')
//- 									div
//- 										| Φαβθλασ οπορτεατ ρεπρεηενδθντ cθμ ει. Ιν ασσθμ cονγθε δοcενδι qθι, vιξ ετ ιμπετθσ θτροqθε δολορεμ. Ει qθισ αλιqθιπ προδεσσετ vιξ.
//-
//- 								q-collapsible(group='first-o' icon='fa fa-archway' label='O Fim da Picada')
//- 									div
//- 										| Φαβθλασ οπορτεατ ρεπρεηενδθντ cθμ ει. Ιν ασσθμ cονγθε δοcενδι qθι, vιξ ετ ιμπετθσ θτροqθε δολορεμ. Ει qθισ αλιqθιπ προδεσσετ vιξ.
//-
//- 			.row.wrap.gutter-sm.text-center.mt-xl
//- 				.col-sm-12.col-md-6
//- 					q-card(inline style='width: 300px;')
//- 						q-card-title
//- 							i.fas.fa-cocktail.fa-lg.q-mr-md
//- 							| Not In the Cards
//- 						q-card-separator
//- 							q-list
//- 								q-collapsible(group='second-o' icon='beach_access' label='In Principio')
//- 									div
//- 										| Φαβθλασ οπορτεατ ρεπρεηενδθντ cθμ ει. Ιν ασσθμ cονγθε δοcενδι qθι, vιξ ετ ιμπετθσ θτροqθε δολορεμ. Ει qθισ αλιqθιπ προδεσσετ vιξ.
//-
//- 								q-collapsible(group='second-o' icon='restaurant' label='In Media Res')
//- 									div
//- 										| Φαβθλασ οπορτεατ ρεπρεηενδθντ cθμ ει. Ιν ασσθμ cονγθε δοcενδι qθι, vιξ ετ ιμπετθσ θτροqθε δολορεμ. Ει qθισ αλιqθιπ προδεσσετ vιξ.
//-
//- 								q-collapsible(group='second-o' icon='directions_bike' label='O Fim da Picada')
//- 									div
//- 										| Φαβθλασ οπορτεατ ρεπρεηενδθντ cθμ ει. Ιν ασσθμ cονγθε δοcενδι qθι, vιξ ετ ιμπετθσ θτροqθε δολορεμ. Ει qθισ αλιqθιπ προδεσσετ vιξ.

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
	name: 'PagIn Principiodex'
}
</script>
