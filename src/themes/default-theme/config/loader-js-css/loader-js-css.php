<?php

/** Start: JS Register */
function add_theme_scripts(): void {
	wp_enqueue_style( 'slick-css', 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css', array(), 1.0, 'all');
	wp_enqueue_style( 'slick-css-theme', 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css', array(), 1.0, 'all');
	wp_enqueue_style( 'style', get_template_directory_uri(). '/dist/styles.css', array('slick-css'), rand(1,1000), 'all');
	wp_enqueue_script( 'slick',  'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js', array('jquery'));
	wp_enqueue_script( 'script', get_template_directory_uri() . '/dist/main.js', array('jquery','slick'));
}
add_action( 'wp_enqueue_scripts', 'add_theme_scripts' );
/** End: JS Register */

