import { AnimationFacePage } from './app.po';

describe('animation-face App', () => {
  let page: AnimationFacePage;

  beforeEach(() => {
    page = new AnimationFacePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
