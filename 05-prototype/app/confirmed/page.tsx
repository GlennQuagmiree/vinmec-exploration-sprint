'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface Appointment {
  id: string;
  doctor: string;
  time: string;
  date: string;
  specialty: string;
  confirmedAt: string;
}

export default function ConfirmedPage() {
  const router = useRouter();
  const [appointment, setAppointment] = useState<Appointment | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('confirmedAppointment');
    if (stored) {
      setAppointment(JSON.parse(stored));
    } else {
      router.push('/');
    }
  }, [router]);

  if (!appointment) {
    return null;
  }

  const qrData = `VINMEC-${appointment.id}-${appointment.date}-${appointment.time}`;

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      <header className="sticky top-0 bg-[#1E293B] border-b border-[#334155] px-4 py-3">
        <h1 className="font-semibold text-center">Lịch hẹn đã xác nhận</h1>
      </header>

      <div className="max-w-md mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#14B8A6]/20 rounded-full mb-4">
            <span className="text-3xl">✓</span>
          </div>
          <h2 className="text-2xl font-semibold mb-2">Đã xác nhận</h2>
          <p className="text-[#94A3B8]">Lịch khám của bạn đã được xác nhận tức thì</p>
        </div>

        <div className="bg-[#1E293B] rounded-lg border border-[#334155] p-6 mb-6">
          <div className="space-y-4">
            <div>
              <p className="text-[#64748B] text-sm mb-1">Chuyên khoa</p>
              <p className="font-medium">{appointment.specialty}</p>
            </div>
            <div className="border-t border-[#334155] pt-4">
              <p className="text-[#64748B] text-sm mb-1">Bác sĩ</p>
              <p className="font-medium">{appointment.doctor}</p>
            </div>
            <div className="border-t border-[#334155] pt-4">
              <p className="text-[#64748B] text-sm mb-1">Thời gian</p>
              <p className="font-medium">{appointment.time}</p>
              <p className="text-[#94A3B8] text-sm mt-1">
                Thứ Hai, 20/10/2026
              </p>
            </div>
            <div className="border-t border-[#334155] pt-4">
              <p className="text-[#64748B] text-sm mb-1">Địa điểm</p>
              <p className="font-medium">Vinmec Times City</p>
              <p className="text-[#94A3B8] text-sm mt-1">
                458 Minh Khai, Hai Bà Trưng, Hà Nội
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#1E293B] rounded-lg border border-[#334155] p-6 mb-6">
          <p className="text-[#64748B] text-sm mb-4 text-center">Mã QR check-in</p>
          <div className="flex justify-center bg-white p-4 rounded-lg">
            <QRCodeSVG value={qrData} size={200} />
          </div>
          <p className="text-[#94A3B8] text-xs text-center mt-4">
            Quét mã này tại quầy lễ tân khi đến khám
          </p>
        </div>

        <div className="bg-[#1E293B]/50 border border-[#334155] rounded-lg p-4 mb-6">
          <div className="flex items-start gap-2">
            <span className="text-[#14B8A6]">✓</span>
            <div className="text-sm text-[#94A3B8] leading-relaxed">
              Lịch hẹn này đã được đồng bộ tức thì. Bạn có thể xem lại trong mục "Lịch hẹn của tôi".
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => router.push('/appointments')}
            className="w-full bg-[#14B8A6] hover:bg-[#0D9488] text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Xem lịch hẹn của tôi
          </button>
          <button
            onClick={() => router.push('/')}
            className="w-full border border-[#334155] hover:border-[#475569] text-[#F8FAFC] font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Về trang chủ
          </button>
        </div>
      </div>
    </div>
  );
}
