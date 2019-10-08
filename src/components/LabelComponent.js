import React from 'react';

export default function LabelComponent(props) {
	return (
		<div>
			<label className={props.className}>
				{props.text}
			</label>
		</div>
	);
};