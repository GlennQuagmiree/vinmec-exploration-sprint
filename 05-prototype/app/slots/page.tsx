'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';

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

function SlotsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const specialty = searchParams.get('specialty') || 'Nội tổng quát';
  const initialSlots = MOCK_SLOTS[specialty as keyof typeof MOCK_SLOTS] || MOCK_SLOTS['Nội tổng quát'];

  const [slots, setSlots] = useState(initialSlots);
  const [isLoadingApi, setIsLoadingApi] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setIsLoadingApi(true);
    fetch(`/api/mock-slots?specialty=${encodeURIComponent(specialty)}`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted && data?.slots) {
          setSlots(data.slots);
        }
      })
      .catch(() => {
        // Fallback to local mock slots if offline
      })
      .finally(() => {
        if (isMounted) setIsLoadingApi(false);
      });
    return () => {
      isMounted = false;
    };
  }, [specialty]);

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
          <p className="text-[#94A3B8] text-sm flex items-center gap-2">
            <span>Thứ Hai, 20/10/2026 · Vinmec Times City</span>
            {isLoadingApi && (
              <span className="text-xs text-[#14B8A6] animate-pulse">
                (Đang truy vấn mock HIS API...)
              </span>
            )}
          </p>
        </div>

        <div className="mb-6 p-4 bg-amber-500/10 rounded-lg border border-amber-500/30">
          <div className="flex items-start gap-2.5">
            <span className="text-amber-400 text-base mt-0.5">⚠️</span>
            <div className="text-xs text-amber-200/90 leading-relaxed">
              <strong className="text-amber-300 block mb-1">Cơ chế Hard-lock Slot (Giả định thiết kế):</strong>
              Demo minh họa ý tưởng giữ chỗ tạm thời và đồng bộ tức thì. Trong thực tế, hệ thống y tế cần tích hợp API trực tiếp với HIS và bắt buộc có luồng xử lý edge case khi bác sĩ bận đột xuất (cấp cứu/hội chẩn), khác với ghế cố định rạp chiếu phim.
            </div>
          </div>
        </div>

        <div className="space-y-3 mb-28">
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
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-medium rounded">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                    Demo: {slot.available} slot khả dụng (mock)
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2.5 py-1 bg-[#334155] text-[#94A3B8] text-xs font-medium rounded">
                    Hết chỗ (mock)
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedSlot && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#1E293B] border-t border-[#334155] px-4 py-4 z-20 shadow-xl">
          <div className="max-w-md mx-auto space-y-3">
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-start gap-2">
              <span className="text-amber-400 text-sm mt-0.5">⚠️</span>
              <p className="text-xs text-amber-200/90 leading-relaxed">
                <strong>Lưu ý:</strong> Đây là demo. Trong hệ thống thật, slot sẽ được xác nhận sau khi kiểm tra lịch làm việc thực tế của bác sĩ (phòng ngừa tình huống bác sĩ bận cấp cứu/hội chẩn đột xuất).
              </p>
            </div>
            <button
              onClick={handleBook}
              className="w-full block bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-center"
            >
              Xác nhận đặt lịch ngay (Demo)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SlotsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC] flex items-center justify-center">
          <p className="text-[#94A3B8]">Đang tải danh sách lịch khám...</p>
        </div>
      }
    >
      <SlotsContent />
    </Suspense>
  );
}
