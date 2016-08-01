import AssetsTest from './components/assets-test';

// By requiring the stylesheet here like this,
// webpack will append the contents inside a
// style tag in the document HEAD.
require('../styles/components/assets-test.scss');

AssetsTest(document.querySelector('.assets-test'));