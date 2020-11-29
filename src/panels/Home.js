import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

const Home = ({ id, go}) => (
	<Panel id={id}>
		<PanelHeader>Говнище</PanelHeader>

		<Group title="Navigation Example">
			<Div>
				<Button size="xl" onClick={go} data-to="persik">
					Кнопка перехода на страницу с картинкой
				</Button>
			</Div>
			<Div>
				<Button size="xl" onClick={go} data-to="page2">
					Кнопка перехода на страницу 2
				</Button>
			</Div>
			<Div>
				<Button size="xl" onClick={go} data-to="page3">
					Кнопка перехода на страницу 3
				</Button>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired
};

export default Home;
