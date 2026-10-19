'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      <div className="max-w-md mx-auto px-4 py-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold mb-2">Vinmec</h1>
          <p className="text-[#94A3B8] text-sm">Đặt lịch tức thì</p>
        </header>

        {/* Disclaimer Banner: Prototype MOCK */}
        <div className="mb-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
          <div className="flex items-start gap-3">
            <span className="text-amber-400 text-lg leading-none mt-0.5">⚠️</span>
            <div className="text-xs text-amber-200/90 leading-relaxed">
              <strong className="block text-amber-300 font-semibold mb-1 uppercase tracking-wide">
                ĐÂY LÀ PROTOTYPE MOCK
              </strong>
              Dữ liệu slot trong demo này là giả lập, không phản ánh lịch thật của bác sĩ. Hệ thống thật cần tích hợp API từ HIS.
            </div>
          </div>
        </div>

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
