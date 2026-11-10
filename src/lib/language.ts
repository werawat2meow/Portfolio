export type Locale = "th" | "en";
export const languageCookie = "portfolio-language";

// Each pair is [Thai, English]. Both versions can be used as translation keys.
export const translations: [string, string][] = [
  ["หน้าหลัก", "Home"], ["แฟ้มผลงานของฉัน", "my portfolio"],
  ["แนะนำตัวสักนิด รู้จักความตั้งใจของฉันให้มากขึ้น", "A LITTLE INTRODUCTION, A LOT OF PASSION"],
  ["มารู้จักกัน", "Get to know me"], ["สวัสดี ยินดีที่ได้รู้จัก", "HELLO, NICE TO MEET YOU"],
  ["หนึ่งตัวตน.", "One person."], ["สอง", "Two"], ["เส้นทาง.", "passions."],
  ["สร้างสรรค์ด้วยใจ ใส่ใจทุกรายละเอียด", "Created with heart. Crafted with care."],
  ["จากความสุขในห้องครัว สู่การสร้างประสบการณ์บนหน้าจอ", "From the joy of cooking to creating digital experiences."],
  ["สองเส้นทางที่ต่างกัน แต่มีความตั้งใจเดียวกัน", "Two different paths, connected by the same passion."],
  ["ทำความรู้จักตัวตนของฉัน", "A TASTE OF WHO I AM"],
  ["อยากรู้จักฉันในมุมไหน?", "Which side would you like to explore?"],
  ["เลือกเส้นทาง แล้วมารู้จักเรื่องราวของฉัน", "CHOOSE A SIDE. DISCOVER MY STORY."],
  ["ศิลปะแห่งการปรุง", "THE ART OF MAKING"], ["รสชาติเล็ก ๆ ความตั้งใจเต็มจาน", "A little flavor. A lot of heart."],
  ["01 / เส้นทางในห้องครัว", "01 / THE CULINARY SIDE"], ["ศิลปะ", "Culinary"], ["การสร้างสรรค์.", "craft."],
  ["ประสบการณ์ด้านการทำอาหาร", "Culinary experience"], ["ความคิดสร้างสรรค์ที่เสิร์ฟผ่านรสชาติ", "Creativity, served through flavor."],
  ["ศิลปะแห่งการพัฒนา", "THE ART OF BUILDING"], ["ใส่ใจทุกขั้นตอน เรียบง่ายอย่างลงตัว", "Thoughtfully built. Beautifully simple."],
  ["02 / เส้นทางนักพัฒนาเว็บ", "02 / THE DEVELOPER SIDE"], ["โลกดิจิทัล", "Digital"],
  ["ประสบการณ์ด้าน Web Developer", "Web development experience"], ["เปลี่ยนไอเดียให้กลายเป็นประสบการณ์", "Turning ideas into experiences."],
  ["ต่างเครื่องมือ ใส่ใจทุกรายละเอียดเหมือนกัน", "Different tools. Same attention to detail."],
  ["เพราะงานที่ดี เริ่มจากความใส่ใจเสมอ", "Because good work always begins with care."],
  ["แฟ้มผลงานส่วนตัว", "MY PERSONAL PORTFOLIO"], ["สร้างด้วยความใส่ใจ", "MADE WITH CARE"],
  ["ต่างเส้นทาง ความตั้งใจเดียวกัน", "A DIFFERENT SIDE. THE SAME PASSION."], ["กลับหน้า Intro", "Back to intro"],
  ["← สองเส้นทางของฉัน", "← My two paths"], ["รสชาติเล็ก ๆ", "A little flavor."], ["ความตั้งใจ", "A lot of"], ["เต็มจาน.", "heart."],
  ["เรื่องราวของฉัน ผ่านอาหารแต่ละจาน", "My story, told one plate at a time."],
  ["อีกมุมของฉันอยู่ในห้องครัว ที่ที่ความคิดสร้างสรรค์", "Another side of me lives in the kitchen, where creativity"],
  ["ถ่ายทอดออกมาผ่านรสชาติ และความใส่ใจในทุกจาน", "comes to life through flavor and care in every dish."],
  ["ชมผลงานการทำอาหาร", "Explore my culinary work"], ["ทำด้วยมือ เสิร์ฟด้วยใจ", "Made by hand. Served with care."],
  ["จากความตั้งใจ สู่สิ่งที่อยู่ตรงหน้า", "From a little intention to something you can savor."],
  ["จากครัวของฉัน ด้วยความตั้งใจ", "FROM MY KITCHEN, WITH LOVE"], ["ปรุงด้วย", "MADE WITH"], ["ใจ", "heart"],
  ["ความตั้งใจในทุกจาน", "A PERSONAL TOUCH"], ["บันทึกจากห้องครัว", "THE CULINARY DIARY"],
  ["อาหาร • ความคิดสร้างสรรค์ • ความตั้งใจ", "Food • Creativity • Care"],
  ["รวบรวมความสุขเล็ก ๆ ไว้ในแต่ละจาน", "A COLLECTION OF LITTLE JOYS"],
  ["จากครัว", "From kitchen"], ["สู่จาน.", "to plate."],
  ["ผลงานการทำอาหารในมุมของฉัน — คลิกที่ภาพเพื่อดูรายละเอียดใกล้ ๆ", "A collection from my kitchen — select a photo for a closer look."],
  ["ภาพถ่าย", "PHOTOGRAPHS"], ["แล้วจะนำภาพอาหารจากครัวมาแบ่งปันให้ชมกันเร็ว ๆ นี้", "A little taste of my kitchen is coming soon."],
  ["อาหารที่ดี มีเรื่องราวเสมอ", "Good food tells a story."], ["นี่คือเรื่องราวในครัวของฉัน", "This is my story in the kitchen."],
  ["อีกเรื่องราวหนึ่ง อยู่บนหน้าจอ", "There is another one waiting on screen."],
  ["รู้จักมุม Web Developer", "Explore my developer side"], ["ปรุงด้วยความใส่ใจ", "COOKED WITH CARE"],
  ["ใส่ใจทุกขั้นตอน เรียบง่ายอย่างลงตัว", "THOUGHTFULLY BUILT. BEAUTIFULLY SIMPLE."],
  ["เริ่มจากไอเดีย.", "From an idea."], ["สู่", "To"], ["ประสบการณ์.", "experience."],
  ["สร้างประสบการณ์ ผ่านทุกหน้าจอ", "Creating experiences for every screen."],
  ["อีกมุมของฉันคือการพัฒนาเว็บไซต์", "Another side of me is a web developer,"],
  ["เปลี่ยนความคิดให้เป็นหน้าตาและการใช้งานที่สัมผัสได้จริง", "turning ideas into interfaces people can see and use."],
  ["ชมผลงานเว็บไซต์", "Explore my web work"],
  ["ต่างหน้าจอ ใส่ใจทุกรายละเอียดเหมือนกัน", "Different screens. The same attention to detail."],
  ["ตัวอย่างผลงานเว็บไซต์บนคอมพิวเตอร์และมือถือ", "A preview of my work on desktop and mobile"],
  ["ส่วนหนึ่งของสิ่งที่ฉันสร้าง", "A LITTLE LOOK AT WHAT I BUILD"], ["ประสบการณ์บนคอมพิวเตอร์", "DESKTOP EXPERIENCE"],
  ["ออกแบบเพื่อการใช้งานจริง", "Built for real screens."], ["รวมผลงานดิจิทัล", "THE DIGITAL COLLECTION"],
  ["ไอเดียที่กลายเป็น", "Ideas brought"], ["ผลงาน.", "to life."],
  ["ภาพจากเว็บไซต์ที่เคยทำ ทั้งบนคอมพิวเตอร์และมือถือ — คลิกเพื่อดูภาพใหญ่", "Screens from my web work, on desktop and mobile — select an image to enlarge."],
  ["ภาพหน้าจอ", "SCREENSHOTS"], ["แล้วจะนำภาพผลงานเว็บไซต์มาแบ่งปันให้ชมกันเร็ว ๆ นี้", "Screens from my web projects are coming soon."],
  ["ใส่ใจจนถึงรายละเอียดสุดท้าย", "Thoughtful, down to the last detail."], ["จากความใส่ใจบนหน้าจอ", "From thoughtful details on screen"],
  ["สู่ความตั้งใจในห้องครัว", "to the same care in the kitchen."], ["รู้จักมุมการทำอาหาร", "Explore my culinary side"],
  ["พัฒนาด้วยความใส่ใจ", "BUILT WITH CARE"], ["ดูรายละเอียด", "VIEW THE DETAILS"], ["จากครัวสู่จาน", "From kitchen to plate"],
  ["หน้าจอคอมพิวเตอร์", "Desktop experience"], ["หน้าจอมือถือ", "Mobile experience"],
  ["มองภาพให้กว้างขึ้น", "The bigger picture."], ["หน้าจอคอมพิวเตอร์", "DESKTOP VIEWS"],
  ["ทุกรายละเอียด พกไปได้ทุกที่", "Every detail, on the go."], ["หน้าจอมือถือ", "MOBILE VIEWS"],
  ["รวมภาพผลงานอาหาร", "THE CULINARY COLLECTION"],
  ["เปิดดูภาพใหญ่", "Enlarge image"], ["ปิดภาพใหญ่", "Close image"], ["ดูภาพก่อนหน้า", "Previous image"],
  ["ดูภาพถัดไป", "Next image"], ["ก่อนหน้า", "Previous"], ["ถัดไป", "Next"],
];

const dictionary = new Map<string, { th: string; en: string }>();
for (const [th, en] of translations) {
  dictionary.set(th, { th, en });
  dictionary.set(en, { th, en });
}

export function translate(locale: Locale, text: string): string {
  const value = dictionary.get(text);
  if (value) return value[locale];
  if (locale === "en") {
    const food = text.match(/^ผลงานการทำอาหาร จานที่ (\d+)$/);
    if (food) return `Culinary creation ${food[1]}`;
    const web = text.match(/^ภาพผลงานเว็บไซต์ที่ (\d+)$/);
    if (web) return `Website screenshot ${web[1]}`;
  }
  return text;
}
