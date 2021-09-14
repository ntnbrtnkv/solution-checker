const pd = process.env.CI_PROJECT_DIR || '.';

const { sum } = require(`${pd}/code`);

expect.extend({
  toBeSneaky(expect, toBe) {
      const pass = expect === toBe;
      return {
        pass,
        message: () => ' ',
      };
  }
});

describe('task1', () => {
  it('test1', () => {
    try {
      expect(sum(1, 2)).toBeSneaky(3);
    } catch (e) {
      throw Error('Some error occurred');
    }
  });

  it('test2', () => {
    try {
      expect(sum(1, 2)).toBeSneaky(5);
    } catch (e) {
      throw Error('Some error occurred');
    }
  });
});