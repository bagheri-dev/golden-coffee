import Image from "next/image";
import Link from "next/link";
import { FiMapPin } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { SlCallOut } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogoDuotone } from "react-icons/pi";

const Footer: React.FC = () => {
    return (
        <footer className="bg-zinc-700 md:pb-11 md:pt-[62px]">
            <div className="flex text-gray-300 sm:w-[94%] lg:w-[90%] px-4 md:px-0 mx-auto">
                <div>
                    <div className="flex justify-between flex-wrap gap-x-5 mb-6 md:mb-[18px] text-gray-300">
                        <Image
                            src="/images/app-logo.png"
                            alt="Golden Coffee"
                            width={57}
                            height={54}
                        />
                        <Image
                            src="/images/svgs/app-logo-type.svg"
                            alt="app logo type"
                            width={138}
                            height={54}
                            className="text-orange-300"
                        />
                    </div>
                    <p className="max-w-[606px] lg:max-w-full xl:max-w-[606px] text-lg md:text-xl/[48px]">ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.</p>
                </div>
                <div className="mt-10 md:mt-[26px]">
                    <h4 className="font-DanaDemiBold text-2xl mb-6 md:mb-7">دسترسی سریع</h4>
                    <div className="grid grid-cols-2 gap-y-2.5 md:gap-y-5 gap-x-10 md:gap-x-16">
                        <Link href={"/"} className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:bg-orange-300 transition-colors">
                            <span className="inline-block bg-current w-2 md:w-2.5 h-1 rounded-full"></span>
                            حریم خصوصی
                        </Link>
                        <Link href={"/"} className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:bg-orange-300 transition-colors">
                            <span className="inline-block bg-current w-2 md:w-2.5 h-1 rounded-full"></span>
                            عودت کالا
                        </Link>
                        <Link href={"/"} className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:bg-orange-300 transition-colors">
                            <span className="inline-block bg-current w-2 md:w-2.5 h-1 rounded-full"></span>
                            شرایط استفاده
                        </Link>
                        <Link href={"/"} className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:bg-orange-300 transition-colors">
                            <span className="inline-block bg-current w-2 md:w-2.5 h-1 rounded-full"></span>
                            ثبت سفارش
                        </Link>
                        <Link href={"/"} className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:bg-orange-300 transition-colors">
                            <span className="inline-block bg-current w-2 md:w-2.5 h-1 rounded-full"></span>
                            پرسش های متداول
                        </Link>
                        <Link href={"/"} className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:bg-orange-300 transition-colors">
                            <span className="inline-block bg-current w-2 md:w-2.5 h-1 rounded-full"></span>
                            فرصت های شغلی
                        </Link>
                        <Link href={"/"} className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:bg-orange-300 transition-colors">
                            <span className="inline-block bg-current w-2 md:w-2.5 h-1 rounded-full"></span>
                            ضمانت نامه ها
                        </Link>
                        <Link href={"/"} className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:bg-orange-300 transition-colors">
                            <span className="inline-block bg-current w-2 md:w-2.5 h-1 rounded-full"></span>
                            ارتباط با ما
                        </Link>
                    </div>
                </div>
                <div className="mt-10 md:mt-[26px]">
                    <h4 className="font-DanaDemiBold text-2xl mb-6 md:mb-7">در تماس باشیم</h4>
                    <div className="md:text-xl mb-6 md:mb-10">
                        <div>
                            <span className="flex items-center gap-x-2 md:gap-x-3 mb-4 md:mb-5">
                                <FiMapPin className="size-5 md:size-6 shrink-0" />
                                بلوار میرداماد، خیابان البرز، کوچه قبادیان شرقی، پلاک ۳۳
                            </span>
                            <div className="flex flex-wrap items-center md:gap-x-5 gap-y-4 font-DanaMedium">
                                <a href="mailto:bagheri.develop@gmail.com" className="flex items-center gap-x-2 md:gap-x-3 text-orange-300">
                                    <TfiEmail />
                                    info@Coffee.com
                                </a>
                                <div className="flex items-center gap-x-2 md:gap-x-3">
                                    <SlCallOut />
                                    <span>0902 123 6628</span>
                                    <span>021 - 6789012</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-1.5 md:gap-x-6 ltr-text font-DanaMedium md:text-xl">
                        <a href="#" className="flex items-center justify-center gap-x-2 flex-grow h-12 text-zinc-700 bg-gradient-to-r from-orange-200 to-orange-300 rounded-xl">
                            @golden_coffee
                            <PiTelegramLogoDuotone className="size-[26px] md:size-[38px]"/>
                            </a>
                        <a href="#" className="flex items-center justify-center gap-x-2 flex-grow h-12 border border-orange-200 text-orange-200 rounded-xl">
                            @golden_coffee
                            <FaInstagram className="size-[26px] md:size-[38px]"/>
                            </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;