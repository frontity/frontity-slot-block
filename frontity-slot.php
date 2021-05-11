<?php
/**
 * Plugin Name:       Frontity Slot
 * Description:       Insert a Frontity Slot
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Luis Herranz, David Arenas
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       frontity-slot
 *
 * @package           frontity
 */

function frontity_frontity_slot_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'frontity_frontity_slot_block_init' );
