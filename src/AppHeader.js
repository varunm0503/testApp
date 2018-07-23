import React from 'react';

const HEADER_TABS = [
{
	id: 0,
	value: 'Why is it necessary',
},
{
	id: 1,
	value: 'Benefits',
},
{
	id: 2,
	value: 'How we help',
},
{
	id: 3,
	value: 'What is Astrology',
},
{
	id: 4,
	value: 'About Us',
},
]

class AppHeader extends React.PureComponent {
	render(){
		const headerTabs = HEADER_TABS.map(tab => {
			return (
				<div key={tab.id} className="app-header__tab">
					{tab.value}
				</div>
			);
		});
		return (
			<div className="app-header">
			<div className="app-header__logo">
				Strota
			</div>
			<div className="app-header__right-section">
				{headerTabs}
			</div>
			</div>
		)
	}
}

export default AppHeader;