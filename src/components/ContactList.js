import React from 'react';
import Contact from './Contact';

export default function ContactList (props) {
	const userList = props.userList.map(item => <li><Contact userData={item}/></li>);
	console.log('---> ' + userList);
	return (
		<ul>
			{userList}
		</ul>
	);
};