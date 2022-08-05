import { getTSConfigPath } from '../getTSConfigPath';

describe('ts-utils', () => {
  describe('getTSConfigPath', () => {
    it('should return tsconfig path', () => {
      const path = getTSConfigPath('./example/tsconfig.json');

      expect(path).toBe('./example/tsconfig.json');
    });

    it('should return undefined if no config path', () => {
      const path = getTSConfigPath('./non-exist/tsconfig.test.json');

      expect(path).toBe(undefined);
    });
  });
});
