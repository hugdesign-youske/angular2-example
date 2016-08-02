import { ComponentAndRouterPage } from './app.po';

describe('component-and-router App', function() {
  let page: ComponentAndRouterPage;

  beforeEach(() => {
    page = new ComponentAndRouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
