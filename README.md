# Mean Calculator System

โปรแกรมคำนวณค่าเฉลี่ยในรูปแบบ JavaScript ที่รองรับการคำนวณค่าเฉลี่ยแบบปกติและค่าเฉลี่ยแบบถ่วงน้ำหนัก พร้อมระบบทดสอบอัตโนมัติที่ครอบคลุม

เขียนโปรแกรมทางเทคนิคตามสูตรคณิตศาสตร์ เพื่อใช้แก้ปัญหาโจทย์ต่อไปนี้

Mean (x̄) (ค่าเฉลี่ย)

ตัวอย่าง

ถ้ามีข้อมูล x = [21,33,40,59] 
คำตอบ 38.25

ถ้ามีข้อมูล x = [11,22,44,33] 
คำตอบ 27.5

Mean (x̄) (ค่าเฉลี่ย แบบมีน้ำหนัก)
ถ้ามีข้อมูล x = [10,20,30]  น้ำหนัก w = [1,2,3]  
คำตอบ 23.33

1. เขียนโปรแกรมด้วยภาษาใดก็ได้ที่ตนเองถนัด เพื่อแก้ปัญหาโจทย์ดังกล่าว
2. เขียน Automate Unit Test รายงานผลการทดสอบ
3. วัด Performance ของ solution ที่เขียนโปรแกรม ว่าใช้เวลา execution time เท่าไหร่

## ฟีเจอร์หลัก

- ✅ คำนวณค่าเฉลี่ยแบบปกติ (Simple Mean)
- ✅ คำนวณค่าเฉลี่ยแบบถ่วงน้ำหนัก (Weighted Mean)
- ✅ จัดการข้อมูลผิดพลาด (Error Handling)
- ✅ ทดสอบประสิทธิภาพ (Performance Testing)
- ✅ Automate Unit Testing ครอบคลุม

## โครงสร้างโปรเจกต์

```
mean-calculator/
├── mean.js              # ฟังก์ชันหลักสำหรับคำนวณค่าเฉลี่ย
├── mean.test.js         # Automate Unit tests และ Performance tests
├── package.json
└── README.md
```

## ข้อกำหนดระบบ

- Node.js เวอร์ชัน 14.0 หรือใหม่กว่า
- npm หรือ yarn

## วิธีการติดตั้ง

### 1. Clone โปรเจกต์

```bash
git clone <repository-url>
cd mean-calculator
```

### 2. ติดตั้ง Dependencies

```bash
npm install
```

หรือใช้ yarn:

```bash
yarn install
```

### 3. สร้างไฟล์ package.json (หากยังไม่มี)

```json
{
  "name": "mean-calculator",
  "version": "1.0.0",
  "main": "mean.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": ["mean", "average", "weighted-average", "calculator"],
  "author": "",
  "license": "ISC",
  "description": "A JavaScript library for calculating simple and weighted means",
  "devDependencies": {
    "jest": "^30.0.0"
  }
}
```

### 4. ติดตั้ง Jest สำหรับ Testing

```bash
npm install --save-dev jest
```

## การรัน Automate Unit Test

```bash
npm test
```

## API Reference

### Functions

#### `calculateMean(array)`

คำนวณค่าเฉลี่ยแบบปกติ

**Parameters:**
- `array` (Array): อาร์เรย์ของตัวเลขที่ต้องการหาค่าเฉลี่ย

**Returns:**
- `Number`: ค่าเฉลี่ยของตัวเลขในอาร์เรย์ หรือ 0 หากอาร์เรย์ว่าง

**Example:**
```javascript
calculateMean([21, 33, 40, 59]); // returns 38.25
calculateMean([11, 22, 44, 33]); // returns 27.5
calculateMean([]);               // returns 0
```

#### `calculateWeight(values, weights)`

คำนวณค่าเฉลี่ยแบบถ่วงน้ำหนัก

**Parameters:**
- `values` (Array): อาร์เรย์ของค่าที่ต้องการหาค่าเฉลี่ย
- `weights` (Array): อาร์เรย์ของน้ำหนักที่สอดคล้องกับแต่ละค่า

**Returns:**
- `Number`: ค่าเฉลี่ยแบบถ่วงน้ำหนัก หรือ 0 หากอาร์เรย์มีความยาวไม่เท่ากันหรือว่าง

**Example:**
```javascript
calculateWeight([10, 20, 30], [1, 2, 3]); // returns 23.33
calculateWeight([10, 20], [1]);           // returns 0 (different lengths)
calculateWeight([], []);                  // returns 0 (empty arrays)
```

## ตัวอย่างการใช้งาน

```javascript
const { calculateMean, calculateWeight } = require('./mean');

// คำนวณค่าเฉลี่ยแบบปกติ
const scores = [85, 92, 78, 96, 88];
const averageScore = calculateMean(scores);
console.log(`คะแนนเฉลี่ย: ${averageScore}`); // คะแนนเฉลี่ย: 87.8

// คำนวณค่าเฉลี่ยแบบถ่วงน้ำหนัก
const grades = [80, 85, 90];
const credits = [3, 4, 2]; // หน่วยกิต
const gpa = calculateWeight(grades, credits);
console.log(`เกรดเฉลี่ยถ่วงน้ำหนัก: ${gpa.toFixed(2)}`); // เกรดเฉลี่ยถ่วงน้ำหนัก: 84.44

// จัดการข้อมูลผิดพลาด
const invalidResult = calculateWeight([1, 2, 3], [1, 2]); // ความยาวไม่เท่ากัน
console.log(`ผลลัพธ์ไม่ถูกต้อง: ${invalidResult}`); // ผลลัพธ์ไม่ถูกต้อง: 0
```

## การทดสอบ

โปรเจกต์นี้มีการทดสอบที่ครอบคลุม:

### Unit Tests
- ทดสอบการคำนวณค่าเฉลี่ยแบบปกติ
- ทดสอบการคำนวณค่าเฉลี่ยแบบถ่วงน้ำหนัก
- ทดสอบการจัดการข้อมูลผิดพลาด (Edge Cases)

### Performance Tests
- ทดสอบประสิทธิภาพการคำนวณด้วยข้อมูล 10,000 รายการ
- ตรวจสอบเวลาการประมวลผลไม่เกิน 5 มิลลิวินาที

### Test Cases ที่ครอบคลุม
1. **calculateMean Tests:**
   - ค่าเฉลี่ยของ [21,33,40,59] ต้องได้ 38.25
   - ค่าเฉลี่ยของ [11,22,44,33] ต้องได้ 27.5
   - อาร์เรย์ว่างคืนค่า 0

2. **calculateWeight Tests:**
   - ค่าเฉลี่ยถ่วงน้ำหนักของ x=[10,20,30] และ w=[1,2,3] ต้องได้ 23.33
   - อาร์เรย์ความยาวไม่เท่ากันคืนค่า 0
   - อาร์เรย์ว่างคืนค่า 0

3. **Performance Tests:**
   - การคำนวณค่าเฉลี่ยต้องใช้เวลาไม่เกิน 5ms
   - การคำนวณค่าเฉลี่ยถ่วงน้ำหนักต้องใช้เวลาไม่เกิน 5ms

## License

MIT License

## ผู้พัฒนา

[Nipon Aemioo]

---

📧 หากมีคำถามหรือปัญหา กรุณาติดต่อผ่าน [nipon.aemioo@gmail.com]