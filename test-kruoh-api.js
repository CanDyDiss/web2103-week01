const API_TOKEN = process.env.VITE_API_TOKEN || "cf8a2e1d7490b431e50912fc87920ab35e4d1f88c3a9102b4e5d6c7b8a9012ef";

async function fetchProducts() {
  // ดักจับกรณีผู้เรียนยังไม่ได้วาง Token หรือมีตัวอักษรภาษาไทยใน Token
  if (!API_TOKEN || API_TOKEN.includes("วาง_TOKEN") || /[^\x20-\x7E]/.test(API_TOKEN)) {
    console.log("⚠️ แจ้งเตือน: คุณยังไม่ได้นำ API Token ถาวรมาวางในตัวแปร API_TOKEN (บรรทัดที่ 5)");
    console.log("👉 วิธีแก้ไข:");
    console.log("   1. เข้าเว็บ https://api.kruoh.dev/register/");
    console.log("   2. นำ Token ถาวร 64 ตัวอักษรมาวางแทนที่");
    return;
  }

  console.log("⏳ กำลังเชื่อมต่อไปยัง https://api.kruoh.dev/api/products...");
  
  try {
    const response = await fetch("https://api.kruoh.dev/api/products", {
      headers: {
        "Authorization": `Bearer ${API_TOKEN}`,
        "Accept": "application/json"
      }
    });

    const result = await response.json();
    
    console.log("--------------------------------------------------");
    console.log("📡 สถานะการตอบกลับ (HTTP Status):", response.status);
    console.log("✅ ผลลัพธ์ success:", result.success);
    console.log("📦 จำนวนสินค้าที่พบ:", result.data ? result.data.length : 0, "รายการ");
    
    if (result.data && result.data.length > 0) {
      console.log("--------------------------------------------------");
      console.log("🛒 ตัวอย่างสินค้าชิ้นแรก:", result.data[0].name, "- ราคา:", result.data[0].price, "บาท");
      console.log("🎉 ยืนยัน: การเชื่อมต่อระบบ Multi-Tenant API ของครูโอ้สำเร็จสมบูรณ์!");
    } else {
      console.log("ℹ️ สถานะ:", result.message || "เชื่อมต่อสำเร็จ");
    }
    console.log("--------------------------------------------------");
  } catch (error) {
    console.error("❌ เกิดข้อผิดพลาดในการเชื่อมต่อ:", error.message);
  }
}

fetchProducts();
