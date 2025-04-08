<?php

/* Start: Title Tag */
function title_theme(): void {
	add_theme_support('title-tag');
}
add_action( 'after_setup_theme', 'title_theme' );
/* End: Title Tag */