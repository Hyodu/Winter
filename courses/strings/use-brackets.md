---
title: استخدم الأقواس
snippet: يعد تدوين القوس طريقة للحصول على حرف في فهرس
order: 4
---

يعد تدوين القوس طريقة للحصول على حرف في فهرس معين داخل سلسلة.

معظم لغات البرمجة الحديثة، مثل جافاسكربت، لا تبدأ بالعد من الرقم 1 كما يفعل
البشر. تبدأ عند 0. ويشار إلى ذلك بالفهرسة الصفرية.

على سبيل المثال، الحرف الموجود في الفهرس 0 في الكلمة `Saad` هو `S`. إذا
`"const firstName = "Saad`، يمكنك الحصول على قيمة الحرف الأول من السلسلة
باستخدام `firstName[0]`.

```js
const firstName = "Saad";
const firstLetter = firstName[0];
console.log(firstLetter);
```

`firstLetter` سيكون لها قيمة السلسلة `S`.

<div class="quiz">
قم بطباعة حرف <code>r</code> من المتغير <code>country</code> في وحدة التحكم.
</div>
