import { BillAdditionPage } from './app.po';

describe('bill-addition App', () => {
  let page: BillAdditionPage;

  beforeEach(() => {
    page = new BillAdditionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
