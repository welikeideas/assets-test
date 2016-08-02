import AssetsTest from './components/blackjack-assets-test';

// By requiring the stylesheet here like this,
// webpack will append the contents inside a
// style tag in the document HEAD.
require('../styles/components/blackjack-assets-test.scss');

AssetsTest(document.querySelector('.blackjack-assets-test'));