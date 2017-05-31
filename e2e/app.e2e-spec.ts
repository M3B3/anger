import { AngerPage } from './app.po';

describe('anger App', () => {
  let page: AngerPage;

  beforeEach(() => {
    page = new AngerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
