import { ShareitPage } from './app.po';

describe('shareit App', () => {
  let page: ShareitPage;

  beforeEach(() => {
    page = new ShareitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
