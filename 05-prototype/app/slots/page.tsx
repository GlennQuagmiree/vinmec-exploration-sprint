'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const MOCK_SLOTS = {
  'Tiêu hóa': [
    { id: '1', doctor: 'BS. Nguyễn Văn A', time: '09:00 - 09:30', date: '2026-10-20', available: 1 },
    { id: '2', doctor: 'BS. Nguyễn Văn A', time: '10:00 - 10:30', date: '2026-10-20', available: 3 },
    { id: '3', doctor: 'BS. Trần Thị B', time: '14:00 - 14:30', date: '2026-10-20', available: 2 },
    { id: '4', doctor: 'BS. Trần Thị B', time: '15:30 - 16:00', date: '2026-10-20', available: 0 },
  ],
  'Hô hấp': [
    { id: '5', doctor: 'BS. Lê Văn C', time: '08:30 - 09:00', date: '2026-10-20', available: 2 },
    { id: '6', doctor: 'BS. Lê Văn C', time: '11:00 - 11:30', date: '2026-10-20', available: 1 },
  ],
  'Thần kinh': [
    { id: '7', doctor: 'BS. Phạm Thị D', time: '09:30 - 10:00', date: '2026-10-20', available: 3 },
    { id: '8', doctor: 'BS. Phạm Thị D', time: '13:00 - 13:30', date: '2026-10-20', available: 1 },
  ],
  'Nội tổng quát': [
    { id: '9', doctor: 'BS. Hoàng Văn E', time: '10:30 - 11:00', date: '2026-10-20', available: 2 },
    { id: '10', doctor: 'BS. Hoàng Văn E', time: '14:30 - 15:00', date: '2026-10-20', available: 4 },
  ],
};

export default function SlotsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const specialty = searchParams.get('specialty') || 'Nội tổng quát';
  const slots = MOCK_SLOTS[specialty as keyof typeof MOCK_SLOTS] || MOCK_SLOTS['Nội tổng quát'];

  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const handleBook = () => {
    if (selectedSlot) {
      const slot = slots.find((s) => s.id === selectedSlot);
      if (slot) {
        localStorage.setItem(
          'confirmedAppointment',
          JSON.stringify({
            ...slot,
            specialty,
            confirmedAt: new Date().toISOString(),
          })
        );
        router.push('/confirmed');
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      <header className="sticky top-0 bg-[#1E293B] border-b border-[#334155] px-4 py-3 flex items-center justify-between z-10">
        <button onClick={() => router.back()} className="text-[#94A3B8] hover:text-[#F8FAFC]">
          ← Quay lại
        </button>
        <h1 className="font-semibold">Chọn lịch khám</h1>
        <div className="w-16" />
      </header>

      <div className="max-w-md mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Chuyên khoa {specialty}</h2>
          <p className="text-[#94A3B8] text-sm">
            Thứ Hai, 20/10/2026 · Vinmec Times City
          </p>
        </div>

        <div className="mb-6 p-4 bg-[#1E293B] rounded-lg border border-[#334155]">
          <div className="flex items-start gap-2">
            <span className="text-[#14B8A6] text-lg">✓</span>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              <strong className="text-[#F8FAFC]">Slot đã được hard-lock:</strong> Khi bạn chọn,
              lịch sẽ được xác nhận tức thì. Không cần chờ tổng đài gọi lại.
            </p>
          </div>
        </div>

        <div className="space-y-3 mb-24">
          {slots.map((slot) => (
            <button
              key={slot.id}
              onClick={() => slot.available > 0 && setSelectedSlot(slot.id)}
              disabled={slot.available === 0}
              className={`w-full text-left p-4 rounded-lg border transition-all ${
                slot.available === 0
                  ? 'bg-[#1E293B] border-[#334155] opacity-50 cursor-not-allowed'
                  : selectedSlot === slot.id
                  ? 'bg-[#14B8A6]/10 border-[#14B8A6]'
                  : 'bg-[#1E293B] border-[#334155] hover:border-[#475569]'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-medium text-[#F8FAFC]">{slot.doctor}</p>
                  <p className="text-sm text-[#94A3B8]">{slot.time}</p>
                </div>
                {slot.available > 0 ? (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#14B8A6]/20 text-[#14B8A6] text-xs font-medium rounded">
                    <span className="w-1.5 h-1.5 bg-[#14B8A6] rounded-full animate-pulse" />
                    Còn {slot.available} chỗ
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2 py-1 bg-[#334155] text-[#64748B] text-xs font-medium rounded">
                    Hết chỗ
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedSlot && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#1E293B] border-t border-[#334155] px-4 py-4">
          <button
            onClick={handleBook}
            className="w-full max-w-md mx-auto block bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold px-6 py-4 rounded-lg transition-colors"
          >
            Xác nhận đặt lịch ngay
          </button>
        </div>
      )}
    </div>
  );
}
