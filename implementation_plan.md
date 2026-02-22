# แผนการตั้งค่า CSS/SCSS Hashing สำหรับ Production โดยใช้ Next.js

สำหรับการทำ Hashing ใน Next.js นั้น ปกติระบบจะทำให้อัตโนมัติสำหรับ CSS Modules (ไฟล์ที่ลงท้ายด้วย `.module.scss` หรือ `.module.css`) แต่ถ้าคุณต้องการปรับแต่งรูปแบบของ Hash ให้สั้นลง หรือต้องการควบคุมรูปแบบชื่อ Class ในช่วง Build ไปยัง Production เราสามารถทำได้ผ่าน `next.config.mjs`

## ขั้นตอนที่ต้องดำเนินการ:
1. **ปรับแต่ง `next.config.mjs`**: เพิ่มการตั้งค่า `webpack` เพื่อเปลี่ยนรูปแบบ `localIdentName` ของ CSS เพื่อให้ชื่อ Class ใน Production ถูก Hash ให้สั้นลง (เช่น เหลือแค่ 6 หลัก) เพื่อลดขนาดไฟล์และปกปิดโครงสร้างโค้ด
2. **ปรับแต่ง SASS Options**: เพื่อให้การ Import ไฟล์ Variables หรือ Mixins ทำได้ง่ายขึ้น
3. **ตรวจสอบ Build Command**: ตรวจสอบคำสั่งใน `package.json` ให้พร้อมสำหรับการ Deploy

## วิธีใช้งาน:
หลังจากแก้ไขไฟล์แล้ว เมื่อคุณรัน `npm run build` ระบบจะสร้างชื่อ Class ที่ถูก Hash ตามรูปแบบที่เรากำหนดไว้
