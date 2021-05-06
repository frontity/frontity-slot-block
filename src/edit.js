import { __ } from "@wordpress/i18n";
import { PlainText, useBlockProps } from "@wordpress/block-editor";
import { useInstanceId } from "@wordpress/compose";
import { Icon, next } from "@wordpress/icons";
import "./editor.scss";

export default function FrontitySlotEdit({ attributes, setAttributes }) {
	const instanceId = useInstanceId(FrontitySlotEdit);
	const inputId = `blocks-frontity-slot-${instanceId}`;

	return (
		<div {...useBlockProps({ className: "components-placeholder" })}>
			<label htmlFor={inputId} className="components-placeholder__label">
				<Icon icon={next} />
				{__("Frontity Slot")}
			</label>
			<PlainText
				className="blocks-frontity-slot-name__textarea"
				id={inputId}
				value={attributes.name}
				aria-label={__("Frontity Slot name")}
				placeholder={__("Write the name of the Slot here…")}
				onChange={(name) => setAttributes({ name })}
			/>
		</div>
	);
}
