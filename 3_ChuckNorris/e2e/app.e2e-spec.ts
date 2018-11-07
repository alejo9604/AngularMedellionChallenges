import { ChukNorrisJokePage } from './app.po';

describe('chuk-norris-joke App', () => {
  let page: ChukNorrisJokePage;

  beforeEach(() => {
    page = new ChukNorrisJokePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
