import { Nrobinson12.Github.IoPage } from './app.po';

describe('nrobinson12.github.io App', () => {
  let page: Nrobinson12.Github.IoPage;

  beforeEach(() => {
    page = new Nrobinson12.Github.IoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
