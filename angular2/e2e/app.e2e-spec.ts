import { SampleJaasPage } from './app.po';

describe('sample-jaas App', () => {
  let page: SampleJaasPage;

  beforeEach(() => {
    page = new SampleJaasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
