import { NextRequest, NextResponse } from 'next/server';

/**
 * MOCK API ROUTE: /api/mock-slots
 * 
 * Mục đích:
 * - Giả lập endpoint tra cứu lịch làm việc khả dụng từ hệ thống HIS (Hospital Information System) của bệnh viện.
 * - Thêm độ trễ nhân tạo 500ms để mô phỏng network latency và quá trình truy vấn cơ sở dữ liệu HIS.
 * 
 * LƯU Ý VỀ HARD-LOCK SLOT TRONG Y TẾ:
 * - Trong demo này, dữ liệu slot là giả lập (mock data), không phản ánh lịch trực tế của bác sĩ.
 * - Khác với đặt vé xem phim (ghế cố định, không di chuyển), trong y tế bác sĩ là con người và có thể
 *   phát sinh các ca mổ cấp cứu đột xuất, hội chẩn liên viện hoặc trực khẩn cấp.
 * - Hệ thống thực tế cần tích hợp hai chiều với HIS và có luồng fallback (thông báo đổi giờ, ưu tiên dời lịch)
 *   khi xảy ra tình huống bác sĩ bận đột xuất.
 */

const MOCK_SLOTS_DATA: Record<
  string,
  Array<{ id: string; doctor: string; time: string; date: string; available: number }>
> = {
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

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const specialty = searchParams.get('specialty') || 'Nội tổng quát';

  // Giả lập network latency 500ms khi gọi hệ thống HIS
  await new Promise((resolve) => setTimeout(resolve, 500));

  const slots = MOCK_SLOTS_DATA[specialty] || MOCK_SLOTS_DATA['Nội tổng quát'];

  return NextResponse.json({
    status: 'success',
    isMock: true,
    note: 'Dữ liệu giả lập mô phỏng HIS API. Không phản ánh lịch làm việc thực tế.',
    specialty,
    date: '2026-10-20',
    hospital: 'Vinmec Times City',
    slots,
  });
}
