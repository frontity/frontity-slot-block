=== Frontity Slot Block ===
Contributors:      Luis Herranz, David Arenas
Tags:              block
Tested up to:      5.7.0
Stable tag:        1.0.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Insert a Frontity Slot in the block editor (aka Gutenberg).

== Description ==

This plugin adds a new block to the block editor called _Frontity Slot_, that inserts a Frontity Slot directly in the content.

![Frontity Slot Block](assets/screenshot-1.png)

It requires the _Slot Block_ processor, which is exported in the `@frontity/html2react` package:

```js
import slotBlock from "@frontity/html2react/processors/slot-block";

export default {
  state: {
    // ...
  },
  actions: {
    // ...
  },
  libraries: {
    html2react: {
      processors: [slotBlock],
    },
  },
};
```

This Frontity feature is discussed at https://community.frontity.org/t/frontity-slot-block/4534. Feel free to join and participate.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/frontity-slot` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress


== Frequently Asked Questions ==

= What is the benefit of using this block instead of just an html2react processor? =

Both approaches work, but using Frontity Slots is more explicit, clean, and should be easier to maintain.


== Screenshots ==

1. The Frontity Slot blocks.

== Changelog ==

= 1.0.0 =
* Initial release.
