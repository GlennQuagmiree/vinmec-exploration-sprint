'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Appointment {
  id: string;
  doctor: string;
  time: string;
  date: string;
  specialty: string;
  confirmedAt: string;
}

export default function AppointmentsPage() {
  const router = useRouter();
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('confirmedAppointment');
    if (stored) {
      setAppointments([JSON.parse(stored)]);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      <header className="sticky top-0 bg-[#1E293B] border-b border-[#334155] px-4 py-3 flex items-center justify-between z-10">
        <button onClick={() => router.back()} className="text-[#94A3B8] hover:text-[#F8FAFC]">
          ← Quay lại
        </button>
        <h1 className="font-semibold">Lịch hẹn</h1>
        <div className="w-16" />
      </header>

      <div className="max-w-md mx-auto px-4 py-6">
        {appointments.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-4xl mb-4 opacity-50">📅</div>
            <h2 className="text-lg font-medium mb-2">Chưa có lịch hẹn</h2>
            <p className="text-[#94A3B8] text-sm mb-6">
              Lịch hẹn mới đặt sẽ hiện tại đây ngay lập tức
            </p>
            <button
              onClick={() => router.push('/chat')}
              className="bg-[#F97316] hover:bg-[#EA580C] text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Đặt lịch khám
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Lịch hẹn sắp tới</h2>
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="bg-[#1E293B] rounded-lg border border-[#334155] p-4"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-medium">{appointment.doctor}</p>
                    <p className="text-sm text-[#94A3B8]">{appointment.specialty}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#14B8A6]/20 text-[#14B8A6] text-xs font-medium rounded">
                    <span className="w-1.5 h-1.5 bg-[#14B8A6] rounded-full" />
                    Đã xác nhận
                  </span>
                </div>
                <div className="space-y-1 text-sm text-[#94A3B8]">
                  <p>⏰ {appointment.time}</p>
                  <p>📍 Vinmec Times City</p>
                  <p className="text-xs text-[#64748B] pt-2">
                    Đặt lúc {new Date(appointment.confirmedAt).toLocaleString('vi-VN')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 p-4 bg-[#14B8A6]/10 border border-[#14B8A6]/20 rounded-lg">
          <div className="flex items-start gap-2">
            <span className="text-[#14B8A6] shrink-0">✓</span>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Lịch đặt qua app hoặc tổng đài đều hiện tại đây ngay lập tức.
              Không cần làm mới hay đăng nhập lại.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
