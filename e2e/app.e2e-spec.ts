import { ArticleAppPage } from './app.po';

describe('article-app App', function() {
  let page: ArticleAppPage;

  beforeEach(() => {
    page = new ArticleAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
