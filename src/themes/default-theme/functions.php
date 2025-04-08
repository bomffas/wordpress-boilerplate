<?php
$template_folder = get_template_directory();
$config = get_template_directory() . '/config/';

require_once($config . "loader-js-css/loader-js-css.php");

/* Start: Remove Block Editor Default */
add_filter('use_block_editor_for_post', '__return_false', 10);
/* End: Remove Block Editor Default */

/* Start: Register Nav Menu */
add_action( 'after_setup_theme', 'register_custom_nav_menus' );
function register_custom_nav_menus(): void {
	register_nav_menus( array(
		'menu_principal' => 'Menu Principal',
	) );
}
/* End: Register Nav Menu */

/* Start: Title Tag */
function title_theme(): void {
	add_theme_support('title-tag');
}
add_action( 'after_setup_theme', 'title_theme' );
/* End: Title Tag */

add_filter( 'acf/admin/prevent_escaped_html_notice', '__return_true' );

/* Gallery */
add_image_size( 'gallery', 652, 546, true);

add_action('rest_api_init', 'register_rest_images' );

function register_rest_images(){
	register_rest_field( array('post'),
		'about',
		array(
			'get_callback'    => 'get_rest_featured_info',
			'update_callback' => null,
			'schema'          => null,
		)
	);
}

function get_rest_featured_info( $object, $field_name, $request ) {
	$category = get_the_category($object->id);
	$firstCategory = $category[0]->cat_name;

	return array(
		'thumbnail' => get_field('pj_thumbnail', $object->id),
		'category' => $firstCategory
	);
}


add_action('init', function() {
	if (!isset($_COOKIE['first_visit'])) {
		setcookie('first_visit', 'visited', strtotime('+1 day'));
	}
});

function generate_whatsapp_link($string) {
	$number = preg_replace('/[^0-9]/', '', $string);
	$msg = get_field('telefone_msg', 'option');
	echo "https://wa.me/$number?text=$msg";
}