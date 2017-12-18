import { createElement } from './libs';

describe('Lib helpers', () => {
  test('CreateElement should create element with text ', () => {
    const element = 'div';
    const text = 'Text inside';
    const fnMock = jest.fn(val => ({ innerHTML: val }));

    expect(createElement({ createElement: fnMock }, element, text)).toEqual({ innerHTML: text });
    expect(fnMock.mock.calls[0]).toEqual([element]);
  });
});
