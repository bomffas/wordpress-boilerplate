<?php

$template_folder = get_template_directory();
$config = get_template_directory() . '/config/';

require_once($config . "loader-js-css/loader-js-css.php");
require_once($config . "browser-sync/browser-sync.php");
require_once($config . "initial-configs/title-tag.php");
require_once($config . "initial-configs/block_editor.php");


/* Start: Register Nav Menu */
add_action( 'after_setup_theme', 'register_custom_nav_menus' );
function register_custom_nav_menus(): void {
	register_nav_menus( array(
		'menu_principal' => 'Menu Principal',
	) );
}
/* End: Register Nav Menu */