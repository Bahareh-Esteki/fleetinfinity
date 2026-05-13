// app/api/faqs/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect'; // '@/' به ریشه پروژه اشاره دارد
import Faq from '@/models/Faq';

export async function GET(request) {
    try {
        await dbConnect(); // مرحله ۱: به دیتابیس وصل شو

        const faqs = await Faq.find({}); // مرحله ۲: کوئری خود را اجرا کن

        return NextResponse.json(faqs); // مرحله ۳: نتیجه را با فرمت JSON برگردان

    } catch (err) {
        // در صورت بروز خطا، یک پاسخ خطا با کد ۵۰۰ برگردان
        return NextResponse.json(
            { message: err.message },
            { status: 500 }
        );
    }
}
