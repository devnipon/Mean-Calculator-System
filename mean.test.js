const { performance } = require('perf_hooks');
const { calculateMean, calculateWeight } = require('./mean');
const x = [10, 20, 30];
const w = [1, 2, 3];
const y = [21, 33, 40, 59];
const z = [11, 22, 44, 33];

describe('calculateMean', () => {
  test('ค่าเฉลี่ยของ 21,33,40,59 ต้องได้ 38.25', () => {
    expect(calculateMean(y)).toBe(38.25);
  });

  test('ค่าเฉลี่ยของ 11,22,44,33 ต้องได้ 27.5', () => {
    expect(calculateMean(z)).toBe(27.5);
  });

  test('ถ้า array เป็นค่าว่างให้คืนค่า 0', () => {
    expect(calculateMean([])).toBe(0);
  });
});

describe('calculateWeight', () => {
  test('กำหนดให้ x=[10,20,30] และ w=[1,2,3] ค่าเฉลี่ยถ่วงน้ำหนักต้องได้ 23.33', () => {
    const result = calculateWeight(x, w);
    expect(result).toBeCloseTo(23.33, 2); 
  });

  test('ถ้า length ไม่เท่ากัน คืนค่า 0 ', () => {
    expect(calculateWeight([10, 20], [1])).toBe(0);
  });

  test('ถ้า array เป็นค่าว่าง คืนค่า 0', () => {
    expect(calculateWeight([], [])).toBe(0);
  });
});


describe('Performance: calculateMean', () => {
  test('ต้องใช้เวลาไม่เกิน 5ms', () => {
    const t0 = performance.now();
    calculateMean([...Array(10000)].map((_, i) => i + 1)); 
    const t1 = performance.now();
    const execTime = t1 - t0;
    console.log(`หาค่าเฉลี่ยใช้เวลาไปทั้งหมด ${execTime.toFixed(4)} ms`);
    expect(execTime).toBeLessThan(5);
  });
});


describe('Performance: calculateWeight', () => {
  test('ต้องใช้เวลาไม่เกิน 5ms', () => {
    const t0 = performance.now();
    calculateWeight(
      [...Array(10000)].map((_, i) => i + 1),
      [...Array(10000)].map((_, i) => 1)
    );
    const t1 = performance.now();
    const execTime = t1 - t0;
    console.log(`หาค่าเฉลี่ยแบบถ่วงน้ำหนักใช้เวลาไปทั้งหมด ${execTime.toFixed(4)} ms`);
    expect(execTime).toBeLessThan(5);
  });
});