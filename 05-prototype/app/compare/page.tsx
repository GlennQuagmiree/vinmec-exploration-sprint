'use client';

import { useRouter } from 'next/navigation';

export default function ComparePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      <header className="sticky top-0 bg-[#1E293B] border-b border-[#334155] px-4 py-3 flex items-center justify-between z-10">
        <button onClick={() => router.back()} className="text-[#94A3B8] hover:text-[#F8FAFC]">
          ← Quay lại
        </button>
        <h1 className="font-semibold">So sánh luồng</h1>
        <div className="w-16" />
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Luồng cũ vs. Luồng mới
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#1E293B] rounded-lg border border-[#334155] p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Luồng cũ</h3>
              <span className="text-2xl">❌</span>
            </div>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-[#64748B] font-mono shrink-0">1</span>
                <p className="text-[#94A3B8]">
                  Mở app → Chọn bác sĩ/giờ
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#64748B] font-mono shrink-0">2</span>
                <p className="text-[#94A3B8]">
                  Nhấn "Đặt lịch" → Trạng thái <strong className="text-[#F97316]">"Chờ xác nhận"</strong>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#64748B] font-mono shrink-0">3</span>
                <p className="text-[#94A3B8]">
                  <strong className="text-[#F97316]">Chờ tổng đài gọi lại</strong> (đôi khi đổi giờ vì bác sĩ bận)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#64748B] font-mono shrink-0">4</span>
                <p className="text-[#94A3B8]">
                  Lịch đặt qua tổng đài <strong className="text-[#F97316]">không hiện trên app</strong> →
                  Phải ngắt kết nối hồ sơ + kết nối lại để sync
                </p>
              </div>
            </div>

            <div className="mt-6 p-3 bg-[#F97316]/10 border border-[#F97316]/20 rounded-lg">
              <p className="text-xs text-[#F97316] font-medium">
                ⏱️ Thời gian: 15 phút - 24 giờ (tùy tổng đài)
              </p>
            </div>
          </div>

          <div className="bg-[#1E293B] rounded-lg border border-[#14B8A6] p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Luồng mới</h3>
              <span className="text-2xl">✅</span>
            </div>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-[#64748B] font-mono shrink-0">1</span>
                <p className="text-[#94A3B8]">
                  Chat AI → Gợi ý chuyên khoa (không chẩn đoán)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#64748B] font-mono shrink-0">2</span>
                <p className="text-[#94A3B8]">
                  Xem slot thật <strong className="text-[#14B8A6]">đã hard-lock</strong> (hiển thị "còn X chỗ")
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#64748B] font-mono shrink-0">3</span>
                <p className="text-[#94A3B8]">
                  Chọn slot → <strong className="text-[#14B8A6]">Xác nhận tức thì</strong> (không chờ tổng đài)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#64748B] font-mono shrink-0">4</span>
                <p className="text-[#94A3B8]">
                  Lịch <strong className="text-[#14B8A6]">hiện ngay trên app</strong> + Mã QR check-in
                </p>
              </div>
            </div>

            <div className="mt-6 p-3 bg-[#14B8A6]/10 border border-[#14B8A6]/20 rounded-lg">
              <p className="text-xs text-[#14B8A6] font-medium">
                ⚡ Thời gian: 2-3 phút (ngay lập tức)
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-[#1E293B] rounded-lg border border-[#334155] p-6">
          <h3 className="text-lg font-semibold mb-4">Pain points đã giải quyết</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-[#14B8A6] text-lg">✓</span>
              <p className="text-[#94A3B8]">
                <strong className="text-[#F8FAFC]">Trạng thái "Chờ xác nhận"</strong> →
                Thay bằng slot hard-lock + xác nhận tức thì
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#14B8A6] text-lg">✓</span>
              <p className="text-[#94A3B8]">
                <strong className="text-[#F8FAFC]">Lịch qua tổng đài không sync</strong> →
                Mọi lịch đều hiện ngay trên app (real-time)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#14B8A6] text-lg">✓</span>
              <p className="text-[#94A3B8]">
                <strong className="text-[#F8FAFC]">Không rõ slot còn hay hết</strong> →
                Hiển thị "còn X chỗ" real-time
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => router.push('/chat')}
            className="bg-[#F97316] hover:bg-[#EA580C] text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Thử luồng mới ngay
          </button>
        </div>
      </div>
    </div>
  );
}
