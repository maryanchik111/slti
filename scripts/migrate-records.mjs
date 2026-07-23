import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const serviceAccountPath = path.join(
  __dirname,
  "..",
  "church-69050-firebase-adminsdk-fbsvc-00db524ba9.json"
);
const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, "utf-8"));

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const records = [
  { id: 'sunday-2025-08-03', title: 'НЕДІЛЬНЕ БОГОСЛУЖІННЯ | ЗІБРАННЯ ЦЕРКВИ', date: '2025-08-03', speaker: 'Служителі', description: '', videoUrl: 'h3cidbX05Ak', category: 'Проповідь' },
  { id: 'sunday-2025-07-27', title: 'НЕДІЛЬНЕ БОГОСЛУЖІННЯ| ЗІБРАННЯ ЦЕРКВИ', date: '2025-07-27', speaker: 'Служителі', description: '', videoUrl: 'qDJ_MK0OEDk', category: 'Проповідь' },
  { id: 'sunday-2025-07-27-daniel-zahorodskiy', title: 'СУТЬ ЦАРСТВА БОЖОГО', date: '2025-07-27', speaker: 'Даниїл Загородський', description: '', videoUrl: '6oBiGVWMpm8', category: 'Проповідь' },
  { id: 'sunday-2025-07-27-sergii-musevych', title: 'ПОДЯКА, НАРОДЖЕНА ПРОЗРІННЯМ', date: '2025-07-27', speaker: 'Сергій Мусевич', description: '', videoUrl: 'IJ1CMkvw_Cc', category: 'Проповідь' },
  { id: 'sunday-2025-07-27-yurii-pastuh', title: 'ВОДНЕ ХРЕЩЕННЯ ДЛЯ СВІДОМИХ ВІРУЮЧИХ', date: '2025-07-27', speaker: 'Юрій Пастух', description: '', videoUrl: 'ZJifiIrpwV4', category: 'Проповідь' },
  { id: 'sunday-2025-07-20', title: 'НЕДІЛЬНЕ ЗІБРАННЯ | БОГОСЛУЖІННЯ СПІЛЬНОТИ', date: '2025-07-20', speaker: 'Служителі', description: '', videoUrl: 'OqskVYZNphE', category: 'Богослужіння' },
  { id: 'sunday-2025-07-20-liudmyla-kovalchuk', title: 'Справжнє щастя — повернутись до Джерела', date: '2025-07-20', speaker: 'Людмила Ковальчук', description: '', videoUrl: 'nWyMZd3xwOA', category: 'Проповідь' },
  { id: 'sunday-2025-07-20-sergii-musevych', title: 'ПОДЯКА, НАРОДЖЕНА ПРОЗРІННЯМ', date: '2025-07-20', speaker: 'Сергій Мусевич', description: '', videoUrl: 'z8jtEE4YnRI', category: 'Проповідь' },
  { id: 'sunday-2025-07-20-nazari-sherbachuk', title: 'Стань гілкою, з якої видно Ісуса', date: '2025-07-20', speaker: 'Назарій Щербачук', description: '', videoUrl: '7j9RTBW6Qwc', category: 'Проповідь' },
  { id: 'sunday-2025-07-13-7-oznak', title: '7 ОЗНАК В ЛЮДЯХ, ЩО ГОТОВІ ВСТУПАТИ В ЗАПОВІТ З БОГОМ ЧЕРЕЗ ВОДНЕ ХРЕЩЕННЯ', date: '2025-07-13', speaker: 'Сергій Мусевич', description: '', videoUrl: 'ZoCbCSUFzo4', category: 'Проповідь' },
  { id: 'sunday-2025-07-13', title: 'НЕДІЛЬНЕ БОГОСЛУЖІННЯ ГРОМАДИ', date: '2025-07-13', speaker: 'Служителі', description: '', videoUrl: 'J08--y9k3HQ', category: 'Богослужіння' },
  { id: 'sunday-2025-07-06-sergii-musevych', title: 'ХОЧЕШ ВИГРАТИ СВОЮ БИТВУ? ВДЯГНИ ОБЛАДУНКИ ВОЇНА…', date: '2025-07-06', speaker: 'Сергій Мусевич', description: '', videoUrl: 'q-d-i5IvM30', category: 'Проповідь' },
  { id: 'sunday-2025-07-06-liudmyla-kovalchuk', title: 'БОГ БІЛЬШИЙ МОГО СМУТКУ…', date: '2025-07-06', speaker: 'Людмила Ковальчук', description: '', videoUrl: 'KDhUaWdiQbo', category: 'Проповідь' },
  { id: 'sunday-2025-07-06-yurii-pastuh', title: 'ВАЖЛИВІСТЬ ЗАВІТУ МІЖ БОГОМ І ЛЮДЬМИ', date: '2025-07-06', speaker: 'Юрій Пастух', description: '', videoUrl: 'j9Tuj5w0Ue4', category: 'Проповідь' },
  { id: 'sunday-2025-07-06', title: 'НЕДІЛЬНЕ #БОГОСЛУЖІННЯ #ЗІБРАННЯ #СЛУЖІННЯ', date: '2025-07-06', speaker: 'Служителі', description: '', videoUrl: '41kCF6MWmZc', category: 'Богослужіння' },
  { id: 'questions-and-answers', title: 'ПИТАННЯ та ВІДПОВІДІ НА СІМЕЙНУ ТЕМАТИКУ', date: '2025-06-29', speaker: 'Сергій Мусевич', description: '', videoUrl: 'DGHW-v-_xcM', category: 'Питання' },
  { id: 'family-balance', title: 'ЗДОРОВИЙ БАЛАНС СІМʼЇ в ЦЕРКВІ', date: '2025-06-29', speaker: 'Анатолій Переверзєв', description: '', videoUrl: 'bS0MpaRKVOI', category: 'Сімʼя' },
  { id: 'family-are-we', title: 'СІМʼЯ - це МИ, а не Я і Я', date: '2025-06-29', speaker: 'Сергій Мусевич', description: '', videoUrl: 'tQ5ATRDMZP8', category: 'Сімʼя' },
  { id: 'sunday-2025-06-29', title: 'НЕДІЛЬНЕ БОГОСЛУЖІННЯ ЦЕРКВИ', date: '2025-06-29', speaker: 'Служителі', description: '', videoUrl: 'EKu6oQN1910', category: 'Богослужіння' },
  { id: 'sunday-2025-06-22', title: 'НЕДІЛЬНЕ ЗІБРАННЯ ПРИСВЯЧЕНО СІМʼЇ', date: '2025-06-22', speaker: 'Служителі', description: '', videoUrl: 'rQ_8SX5AGC0', category: 'Богослужіння' },
];

const batch = db.batch();
for (const record of records) {
  const { id, ...data } = record;
  batch.set(db.collection("records").doc(id), data, { merge: true });
}
await batch.commit();

console.log(`Migrated ${records.length} records to Firestore.`);
