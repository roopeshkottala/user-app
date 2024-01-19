import { getGreeting } from '../support/app.po';

describe('user-app-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains(/Hello, This is a test application/);
  });
});
