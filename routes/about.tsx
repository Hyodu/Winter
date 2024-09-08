import { Head } from "$fresh/runtime.ts";

import AboutIcons from "@/components/Main/AboutIcons.tsx";
import Footer from "@/components/Main/Footer.tsx";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>من نحن</title>
        <meta
          name="description"
          content="التعريف بمنصة الشتاء"
        />
        <meta
          name="keywords"
          content="قائمه دروس جافا سكريبت"
        />
        <meta property="og:title" content="من نحن" />
        <meta
          property="og:description"
          content="التعريف بمنصة الشتاء"
        />
      </Head>
      <main class="flex flex-col h-full-minus-bar">
        <div class="px-4 py-8 mx-auto grow">
          <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
            <img
              class="my-6"
              src="/Images/logo.webp"
              width="128"
              height="128"
              title="لوغو الشتاء جي اس"
              alt="Website logo"
            />
            <h1 class="text-4xl font-bold mb-8">منصة الشتاء</h1>

            <div class="mb-8">
              <p class="font-bold text-lg">
                منصة تعليمية عربية، متخصصة في تعلم لغة البرمجة جافاسكريبت بأسلوب مبتكر وتفاعلي. نعتبر البرمجة مهارة حيوية في عصر التكنولوجيا الحديثة، ولذلك قمنا بإطلاق هذا المشروع بهدف تمكين الأفراد من اكتساب هذه المهارة بسهولة وبمتعة لا تضاهى. انضم إلينا في رحلة التعلم المثيرة واستكشف عالم البرمجة بطريقة ممتعة ومبسطة، حيث نقدم تجربة تعلم فريدة تجمع بين الإبداع والتحدي لضمان تطوير مستدام وفعّال للمهارات البرمجية الخاصة بك.
              </p>
            </div>
            <AboutIcons />
            <a title="العودة إلى الصفحة الرئيسية" href="/" class="underline">
              العودة إلى الصفحة الرئيسية
            </a>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
