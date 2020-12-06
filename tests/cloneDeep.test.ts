import {describe, test, expect} from '@jest/globals';
import { cloneDeep } from '../src/cloneDeep';

// jest toBe: 用的是 Object.is 来比较： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is

describe('cloneDeep', () => {
  test('should cloneDeep undefined', () => {
    let val;
    expect(val === undefined).toBe(true);
  })

  test('should cloneDeep null', () => {
    const val = null;
    expect(val === null).toBe(true);
  })

  test('should cloneDeep string', () => {
    const val = 'string';
    expect(val).toBe(cloneDeep(val));
  })

  test('should cloneDeep number', () => {
    const val = 'number';
    expect(val).toBe(cloneDeep(val));
  })

  test('should cloneDeep boolean', () => {
    const val = false;
    expect(val).toBe(cloneDeep(val));
  })

  test('should cloneDeep object', () => {
    const val = {a: 1, b: 2, c: [1, 2, 3], d: {a: [1, 2]}};
    const result = cloneDeep(val);

    expect(val === result).toBe(false);
    expect(val.a === result.a).toBe(true);
    expect(val.c === result.c).toBe(false);
    expect(val.d.a === result.d.a).toBe(false);
  })
});
