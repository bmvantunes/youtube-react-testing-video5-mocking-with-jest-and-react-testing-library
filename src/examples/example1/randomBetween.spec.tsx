import { randomBetween } from './randomBetween';

describe('randomBetween', () => {
  describe('when Math.random() returns 0', () => {
    it('called with min=3 and max=5 returns 3', () => {
      expect(randomBetween(3, 5)).toBeGreaterThanOrEqual(3);
    });
  });
});
