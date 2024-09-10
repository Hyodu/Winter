---
title: مقارنة مع عامل المساواة 
snippet: يقارن عامل المساواة بين قيمتين
order: 2
---

هناك العديد من عوامل المقارنة في جافاسكربت. تقوم جميع عوامل التشغيل هذه بإرجاع
قيمة منطقية صحيحة أو خاطئة.

العامل الأساسي هو عامل المساواة (`==`). يقارن عامل المساواة بين قيمتين ويعيد
صحيحًا إذا كانتا متكافئتين أو خطأ إذا لم يكونا كذلك.

<mark>
لاحظ أن المساواة تختلف عن التعيين (<code>=</code>)، الذي يسند القيمة الموجودة على يمين العامل إلى متغير على اليسار.
</mark>

مثال:

```js
function equalityTest(myVal) {
  if (myVal == 10) {
    return "يساوي";
  }
  return "لا يساوي";
}
```

إذا كانت قيمة `myVal` تساوي `10`، فسيُرجع عامل المساواة القيمة `true`، وبالتالي
سيتم تنفيذ التعليمات البرمجية الموجودة بين الأقواس المتعرجة، وستُرجع الدالة
`يساوي`. وبخلاف ذلك، سترجع الدالة `لا يساوي`. لكي تتمكن جافاسكربت من مقارنة
نوعين مختلفين من البيانات (على سبيل المثال، الأرقام والسلاسل)، يجب عليها تحويل
نوع واحد إلى آخر. يُعرف هذا باسم نوع الإكراه. ومع ذلك، بمجرد القيام بذلك، يمكنه
مقارنة المصطلحات على النحو التالي:

لكي تتمكن جافاسكربت من مقارنة نوعين مختلفين من البيانات (على سبيل المثال،
الأرقام والسلاسل)، يجب عليها تحويل نوع واحد إلى آخر. يُعرف هذا باسم نوع الإكراه.
ومع ذلك، بمجرد القيام بذلك، يمكنه مقارنة المصطلحات على النحو التالي:

```js
1 == 1; // true
1 == 2; // false
1 == "1"; // true
"3" == 3; // true
```

---

## عامل عدم المساواة

عامل عدم المساواة (`=!`) هو عكس عامل المساواة. وهذا يعني يعني ليس متساويا حيث
تُرجع خطأ عندما يكون الناتج صحيح في عامل المساواة والعكس صحيح. مثل عامل المساواة،
سيقوم عامل عدم المساواة بتحويل أنواع البيانات من القيم أثناء المقارنة.

امثله على عامل عدم المساواة:

```js
1 != 2; // true
1 != "1"; // false
1 != "1"; // false
1 != true; // false
0 != false; // false
```

<div class="quiz">
نعتذر عن عدم وجود اختبار لهذا الدرس حالياً. نحن نعمل بجد لإعداد اختبارات لجميع الدروس وسنقوم بتوفيرها في أقرب وقت ممكن.
</div>