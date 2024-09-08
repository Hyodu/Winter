import IconBrandTelegram from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-telegram.tsx";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-github.tsx";

export default function AboutIcons() {
    return (
        <div class="flex gap-2 justify-center">
            <a
                class="hover:opacity-75"
                target="_blank"
                title="تلغرام منصة الشتاء"
                href="https://t.me/WinterJTS"
            >
                <IconBrandTelegram />
            </a>
            <a
                class="hover:opacity-75"
                target="_blank"
                title="سورس منصة نخلة"
                href="https://github.com/Hyodu/winter"
            >
                <IconBrandGithub />
            </a>
        </div>
    );
}
