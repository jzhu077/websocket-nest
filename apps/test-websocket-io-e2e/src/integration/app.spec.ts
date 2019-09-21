import { getGreeting } from '../support/app.po';

describe('test-websocket-io', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to test-websocket-io!');
  });
});
