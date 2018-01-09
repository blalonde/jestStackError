import { JestStackPage } from './app.po';

describe('jest-stack App', () => {
  let page: JestStackPage;

  beforeEach(() => {
    page = new JestStackPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
