'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      <div className="max-w-md mx-auto px-4 py-6">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold mb-2">Vinmec</h1>
          <p className="text-[#94A3B8] text-sm">Đặt lịch tức thì</p>
        </header>

        <div className="space-y-4">
          <Link
            href="/chat"
            className="block w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-medium px-6 py-4 rounded-lg transition-colors"
          >
            Đặt lịch khám ngay
          </Link>

          <Link
            href="/compare"
            className="block w-full border border-[#334155] hover:border-[#475569] text-[#F8FAFC] font-medium px-6 py-4 rounded-lg transition-colors text-center"
          >
            So sánh với luồng cũ
          </Link>

          <Link
            href="/appointments"
            className="block w-full border border-[#334155] hover:border-[#475569] text-[#F8FAFC] font-medium px-6 py-4 rounded-lg transition-colors text-center"
          >
            Lịch hẹn của tôi
          </Link>
        </div>

        <div className="mt-12 p-4 bg-[#1E293B] rounded-lg border border-[#334155]">
          <h2 className="font-medium mb-2 text-sm">Prototype demo</h2>
          <p className="text-[#94A3B8] text-sm leading-relaxed">
            Giải pháp cho 2 pain points: (1) Đặt lịch trên app → trạng thái "Chờ xác nhận"
            → tổng đài gọi lại, và (2) Lịch đặt qua tổng đài không hiện trên app.
          </p>
        </div>
      </div>
    </div>
  );
}
