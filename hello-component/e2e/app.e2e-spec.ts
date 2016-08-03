import { HelloComponentPage } from './app.po';

describe('hello-component App', function() {
  let page: HelloComponentPage;

  beforeEach(() => {
    page = new HelloComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
