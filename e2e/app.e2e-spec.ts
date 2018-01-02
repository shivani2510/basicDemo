import {BasicDemoPage} from './app.po';

describe('basic-layout-demo App', () => {
  let page: BasicDemoPage;

  beforeEach(() => {
    page = new BasicDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
