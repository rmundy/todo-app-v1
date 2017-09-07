import { TodoAppV1Page } from './app.po';

describe('todo-app-v1 App', () => {
  let page: TodoAppV1Page;

  beforeEach(() => {
    page = new TodoAppV1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
