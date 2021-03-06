import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  return (
    <div
      {...useBlockProps.save()}
      data-frontity-slot-name={attributes.name}
    ></div>
  );
}
