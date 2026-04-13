<?php

// Load Composer dependencies.
require_once __DIR__ . '/vendor/autoload.php';

// Initialize Timber.
Timber\Timber::init();

$template_folder = get_template_directory();
$config = get_template_directory() . '/config/';

require_once($config . "loader-js-css/loader-js-css.php");
require_once($config . "browser-sync/browser-sync.php");
require_once($config . "initial-configs/title-tag.php");
require_once($config . "initial-configs/block_editor.php");

add_filter('timber/context', function($context) {

	//Base Config
	$context['default'] = array(
		'logo' => get_field('logo', 'option'),
	);

	return $context;
});