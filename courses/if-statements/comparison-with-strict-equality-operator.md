---
title: مقارنة مع عامل المساواة الصارمة
snippet: لا يقوم عامل المساواة الصارم بإجراء تحويل النوع
order: 3
---

المساواة الصارمة (`===`) هي النظير لعامل المساواة (`==`). ومع ذلك، على عكس عامل
المساواة، الذي يحاول تحويل كلتا القيمتين ( الاكراه )، لا يقوم عامل المساواة
الصارم بإجراء تحويل النوع.

إذا كانت القيم التي تتم مقارنتها لها أنواع مختلفة، فإنها تعتبر غير متساوية،
وسيرجع عامل المساواة الصارم خطأ.

```js
3 === 3; // true
3 === "3"; // false
```

في المثال الثاني، `3` هو نوع رقم و `'3'` هو نوع سلسلة. وانتجت `false` بسبب عامل
المساواة الصارم.

## عامل عدم المساواة الصارمة

عامل عدم المساواة الصارمة الصارمة (`==!`) هو العكس المنطقي لعامل المساواة
الصارمة. إنه يعني "غير متساوٍ تمامًا" ويُرجع خطأ حيث تُرجع المساواة الصارمة صحيحًا
والعكس صحيح. لن يقوم عامل عدم المساواة الصارم بتحويل أنواع البيانات.

```js
3 !== 3; // false
3 !== "3"; // true
4 !== 3; // true
```

<div class="quiz">
نعتذر عن عدم وجود اختبار لهذا الدرس حالياً. نحن نعمل بجد لإعداد اختبارات لجميع الدروس وسنقوم بتوفيرها في أقرب وقت ممكن.
</div>