import { registerBlockType } from "@wordpress/blocks";
import { next } from "@wordpress/icons";
import edit from "./edit";
import save from "./save";

registerBlockType("frontity/frontity-slot", {
  icon: next,
  edit,
  save,
});
