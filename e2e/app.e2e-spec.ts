import { AotAppPage } from './app.po';

describe('aot-app App', () => {
  let page: AotAppPage;

  beforeEach(() => {
    page = new AotAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
