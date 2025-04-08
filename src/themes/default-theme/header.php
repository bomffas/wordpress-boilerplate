<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="format-detection" content="telephone=no">
	<?php wp_head();?>
</head>
<body <?php body_class(); ?>>
<header class="header" data-component="menu">
    <div class="container">
        <div class="header__content" data-js="menu">
            <!-- Menu -->
            <a class="header__logo" href="<?= get_home_url(); ?>">
                <img src="#" alt="<?php echo get_bloginfo(); ?> - <?php echo get_bloginfo('description'); ?>">
            </a>
            <!-- Menu -->
            <?php //wp_nav_menu( array('theme_location' => 'menu_principal') ); ?>
        </div>
    </div>
</header>