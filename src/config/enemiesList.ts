import Enemy from 'models/Enemy';

import bandit from 'assets/images/bandit.png';
import goblin from 'assets/images/goblin.png';
import orc from 'assets/images/orc.png';
import ogre from 'assets/images/ogre.png';
import evilknight from 'assets/images/evilknight.png';
import evilwizard from 'assets/images/evilwizard.png';
import fireElemental from 'assets/images/fire-elemental.png';

const enemies: Enemy[] = [
	{
		name: 'Bandit',
		src: bandit,
	},
	{
		name: 'Goblin',
		src: goblin,
	},
	{
		name: 'Orc',
		src: orc,
	},
	{
		name: 'Ogre',
		src: ogre,
	},
	{
		name: 'Evil Knight',
		src: evilknight,
	},
	{
		name: 'Evil Wizard',
		src: evilwizard,
	},
	{
		name: 'Fire Elemental',
		src: fireElemental,
	},
];

export default enemies;
