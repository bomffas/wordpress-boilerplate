<?php

function client_login_style(): void { ?>
	<style>
        :root {
            --client-mark: <?php the_field('lg_logo', 'option'); ?>;
            --client-background: <?php the_field('lg_background', 'option'); ?>;
        }
	</style>
<?php }

add_action( 'login_enqueue_scripts', 'client_login_style' );

function client_favicon(): void {
	$favicon_path = get_field('lg_logo', 'option');
	echo '<link rel="shortcut icon" href="' . esc_url($favicon_path) . '" />';
}

add_action( 'wp_head', 'client_favicon' );
add_action( 'admin_head', 'client_favicon' );
add_action( 'login_head', 'client_favicon' );
