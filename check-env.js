// check-env.js - ตรวจสอบสภาพแวดล้อม Node.js สำหรับวิชา 24-40901-2103
console.log("==================================================");
console.log("🚀 ยินดีต้อนรับสู่วิชาเว็บแอพพลิเคชันขั้นสูง (24-40901-2103)");
console.log("==================================================");
console.log("Node.js Version :", process.version);
console.log("Platform        :", process.platform, process.arch);
console.log("Execution Path  :", process.execPath);
console.log("Working Dir     :", process.cwd());
console.log("--------------------------------------------------");

const student = {
  name: "กิตติธัช สฤษชสมบัติ",
  studentId: "69409010901",
  course: "24-40901-2103 การพัฒนาเว็บแอพพลิเคชันขั้นสูง",
  cohort: "ภาคเรียนที่ 2/2569",
  ready: true
};

console.log(`👨‍🎓 นักศึกษา: ${student.name} (${student.studentId})`);
console.log(`📚 รายวิชา  : ${student.course}`);
console.log(`🎯 สถานะความพร้อม: ${student.ready ? "พร้อมสำหรับการเรียนรู้ 100% ✅" : "ยังไม่พร้อม ❌"}`);
console.log("==================================================");
