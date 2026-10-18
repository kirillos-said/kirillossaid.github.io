# طريقة تعديل البورتفوليو ورفعه

## الملفات

| الملف | فيه إيه | هتعدله؟ |
|---|---|---|
| `data.js` | كل الكلام: الاسم، المشاريع، الخبرة، المهارات، الشهادات | **أيوه، ده الملف الوحيد اللي هتعدله** |
| `images/` | صور المشاريع وصورتك | ضيف فيه صور |
| `Kirillos_Said_Resume.pdf` | الـ resume اللي بيتنزل من زرار Download | بدّله لما تحدّث الـ CV (بنفس الاسم) |
| `index.html` | الشكل والحركة | لا |

افتح `data.js` بأي محرر نصوص (Notepad أو VS Code).
عدّل الكلام اللي **بين علامات التنصيص " "** بس، وما تمسحش الفواصل `,` ولا الأقواس `{ } [ ]`.

---

## إضافة مشروع جديد

1. خد screenshot من الداشبورد، **وخبّي أي بيانات عملاء** (أسماء، هويات، تليفونات).
2. سمّي الصورة اسم إنجليزي من غير مسافات، مثلاً `sales-dashboard-1.png`، وحطها في فولدر `images`.
3. في `data.js` جوه `PROJECTS = [ ... ]`، انسخ ده وحطه **أول حاجة** بعد `[`:

```js
  {
    title: "Sales Performance Dashboard",
    category: "Power BI",
    featured: false,
    summary: "سطرين بالإنجليزي عن المشكلة اللي المشروع حلها ونتيجتها.",
    details: [
      "أهم نقطة",
      "نقطة تانية"
    ],
    tools: ["Power BI", "DAX", "SQL"],
    images: ["images/sales-dashboard-1.png", "images/sales-dashboard-2.png"],
    links: { live: "", github: "", video: "" }
  },
```

- **category:** لازم تكون واحدة من `"Power BI"` أو `"Python"` أو `"Machine Learning"`. لو عايز تصنيف جديد، ضيفه كمان في `PROJECT_FILTERS`.
- **featured: true** بيخلي المشروع ياخد كارت كبير. خليها لمشروع أو اتنين بس.
- **images:** أول صورة بتظهر على الكارت، والباقي بيتقلب في صفحة المشروع. لو سبتها `[]` بيظهر شكل بديل.
- **links:**
  - `live`: لينك "Publish to web" من Power BI Service، لو الداشبورد ببيانات تجريبية.
  - `video`: لينك فيديو شرح على YouTube أو LinkedIn.
  - `github`: لينك الكود.
  - أي لينك فاضي `""` الزرار بتاعه مش بيظهر.

**افتح `index.html` في المتصفح بعد أي تعديل وراجع.** لو الصفحة ظهرت فاضية، يبقى فيه فاصلة أو علامة تنصيص ناقصة في `data.js`.

---

## الرفع على GitHub Pages (مجاني، مرة واحدة)

1. اعمل حساب على **github.com**.
2. اعمل repository جديد واسمه بالظبط: `USERNAME.github.io` (حط اسم المستخدم بتاعك مكان USERNAME)، وخليه **Public**.
3. جوه الـ repository دوس **Add file ← Upload files**، واسحب كل الملفات والفولدرات اللي هنا، ودوس **Commit changes**.
4. استنى دقيقة أو اتنين، وافتح: `https://USERNAME.github.io`

ده اللينك اللي تحطه في الـ resume وLinkedIn (في Featured وContact info).

## التحديث بعد كده

عدّل الملف عندك، وبعدين في GitHub: **Add file ← Upload files**، وارفع الملف المتعدل (أو الصور الجديدة) بنفس الاسم، ودوس **Commit changes**. الموقع بيتحدث لوحده خلال دقيقة.
