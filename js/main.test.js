const { loadPartial } = require('./main');
const { JSDOM } = require('jsdom');

describe('loadPartial', () => {
  test('injects fetched HTML into element', async () => {
    const dom = new JSDOM('<div id="root"></div>', { url: 'http://localhost' });
    global.document = dom.window.document;
    global.fetch = jest.fn(() => Promise.resolve({
      ok: true,
      text: () => Promise.resolve('<p>hi</p>')
    }));

    await loadPartial('root', '/dummy.html');

    expect(dom.window.document.getElementById('root').innerHTML).toBe('<p>hi</p>');
  });
});
