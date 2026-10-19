# Prompt đã dùng để tạo prototype (AI-Generated)

> **Lưu ý:** Toàn bộ prototype này do AI (Claude Sonnet 5.5) tạo. Document này ghi lại prompt đầu vào để đảm bảo tính minh bạch.

## Prompt gốc (từ người dùng)

```
Bạn implement Task 5 — `05-prototype/` — prototype Next.js click được, giải quyết pain point "đặt lịch chờ xác nhận".

**Pain point hiện tại (từ evidence):**
1. Đặt lịch trên app → trạng thái "Chờ xác nhận" → tổng đài gọi lại (đôi khi đổi giờ)
2. Lịch đặt qua tổng đài không hiện trên app

**Luồng prototype (giải pháp):**
1. Màn hình chat AI: "Bạn muốn khám gì?" → AI gợi ý chuyên khoa (KHÔNG chẩn đoán, chỉ điều hướng) + disclaimer "Đây không phải lời khuyên y khoa".
2. Hiện slot **thật + đã hard-lock** (đánh dấu "còn trống / còn 1 chỗ") — giải quyết pending.
3. Chọn slot → xác nhận **tức thì** (không chờ tổng đài) → màn hình "Đã xác nhận" + QR check-in.
4. Mục "Lịch hẹn" hiện luôn lịch vừa đặt — giải quyết sync.
5. Nút "So sánh với luồng cũ" để giám khảo thấy before/after.

**Tech:** Next.js 14 App Router + TypeScript + Tailwind CSS. Mock AI (không cần gọi API thật). Load skill `frontend-design` trước khi viết UI.

**Tạo trong `05-prototype/`:**
- `app/`, `components/`, `package.json`, `tailwind.config.ts`, etc.
- `PROMPT.md` — ghi toàn bộ prompt đã dùng để sinh prototype (ràng buộc: ghi rõ phần AI tạo).
- `LOG-THU-NGHIEM.md` — giả định thử với 2 người (P4, P5): ai thử, làm gì, gặp gì, sửa gì sau đó.
- `README.md` — hướng dẫn chạy (`npm install && npm run dev`) + ảnh chụp màn hình.

**Review Focus #3**: prototype KHÔNG đưa lời khuyên y khoa ("triệu chứng của bạn có thể là..."). Chỉ điều hướng chuyên khoa + disclaimer.
```

## Design Brief (do AI tự tạo dựa trên `frontend-design` skill)

**Subject:** Healthcare appointment booking app for Vietnamese patients experiencing delayed confirmation and sync issues

**Audience:** Mobile-first users aged 25-45, navigating between app/call/SMS channels

**Primary job:** Replace "pending confirmation" with instant booking + real-time slot visibility

### Design Decisions

**Color Palette:**
- Base: Deep navy `#0F172A` (medical trust, not generic hospital blue)
- Text: Clinical white `#F8FAFC`
- Confirmed state: Life-pulse teal `#14B8A6` (active, alive)
- Critical action: Urgent coral `#F97316` (book now CTA)
- Meta/secondary: Soft slate `#64748B`, `#94A3B8`

**Typography:**
- Inter (Google Fonts) with Vietnamese subset
- No ALL-CAPS labels, no decorative serif
- Operational UI, not branding

**Layout:**
- Chat-first mobile flow (320px responsive)
- Slot grid with live "còn X chỗ" chips
- Bold confirmation card with QR
- Side-by-side comparison screen
- Left-aligned for readability, sticky CTA at bottom

**Principles:**
- Real-time feedback (slot count updates)
- Explicit state (confirmed = green pulse dot)
- No decoration (every element earns its space)
- Vietnamese-first bilingual

## AI-Generated Code Structure

```
app/
├── page.tsx                 # Landing: 3 CTAs (đặt lịch, so sánh, lịch hẹn)
├── chat/page.tsx            # AI chat: mock triệu chứng → gợi ý chuyên khoa + disclaimer
├── slots/page.tsx           # Slot grid: hard-locked, "còn X chỗ", chọn + confirm
├── confirmed/page.tsx       # Success: QR code + chi tiết lịch hẹn
├── appointments/page.tsx    # Danh sách lịch hẹn (đọc localStorage)
├── compare/page.tsx         # Before/after comparison table
├── layout.tsx               # Root layout: Inter font, metadata
└── globals.css              # Tailwind 4 inline theme
```

## Mock AI Logic

```typescript
// Từ app/chat/page.tsx
const MOCK_AI_RESPONSES = {
  'đau bụng' → 'Tiêu hóa',
  'ho' → 'Hô hấp',
  'đau đầu' → 'Thần kinh',
  default → 'Nội tổng quát'
};
```

Không gọi API thật, chỉ keyword matching `toLowerCase()` + `includes()`.

**Disclaimer (hiện ở đầu chat):**
> "Đây không phải lời khuyên y khoa. AI chỉ giúp điều hướng chuyên khoa dựa trên triệu chứng bạn mô tả. Bác sĩ sẽ thăm khám và chẩn đoán chính xác."

## Dependencies

```json
{
  "dependencies": {
    "next": "16.4.2",
    "react": "19.3.0",
    "react-dom": "19.3.0",
    "qrcode.react": "4.2.0"
  },
  "devDependencies": {
    "@tailwindcss/turbopack": "^4",
    "typescript": "^5",
    "tailwindcss": "^4"
  }
}
```

## Ethical Safeguards

1. **Không chẩn đoán:** AI chỉ nói "tôi gợi ý chuyên khoa X", không nói "bạn bị Y".
2. **Disclaimer rõ ràng:** Banner màu cam ⚠️ ở đầu chat, có thể tắt.
3. **Ẩn danh:** Mock data không dùng tên thật, chỉ "P4", "P5" trong log test.

## Lưu ý quan trọng về hard-lock slot

- **Prototype chỉ là UI mock, không có backend thật:** Toàn bộ trạng thái đặt chỗ được lưu trong `localStorage` và mock API route (`/api/mock-slots`), không có cơ sở dữ liệu production kết nối trực tiếp với bệnh viện.
- **Slot "còn X chỗ" là giả lập, cần tích hợp HIS API:** Để triển khai thực tế, Vinmec cần mở kết nối hai chiều qua API cổng HIS (Hospital Information System) để kiểm tra và khóa slot thực tế.
- **Cần xử lý edge case: bác sĩ bận đột xuất:**
  - *Khác biệt cốt lõi so với rạp chiếu phim (CGV):* Vé xem phim là ghế cố định, không thay đổi; trong khi bác sĩ là con người có thể phát sinh ca mổ cấp cứu đột xuất, hội chẩn khẩn cấp.
  - *Giải pháp thực tế:* Cần xây dựng luồng exception handling: tự động đề xuất đổi bác sĩ tương đương cùng chuyên khoa hoặc chuyển khung giờ ưu tiên kèm thông báo tức thì cho bệnh nhân.

## Commit Attribution

```
feat: add clickable AI appointment prototype with prompt and test log

Co-Authored-By: Claude <noreply@anthropic.com>
```

---

**Tóm tắt:** Toàn bộ UI design, code structure, màu sắc, typography và interaction flow đều do Claude Sonnet 5.5 tạo dựa trên prompt đầu vào và `frontend-design` skill. Không có template hoặc boilerplate nào được copy từ nguồn bên ngoài (trừ Next.js scaffold mặc định từ `create-next-app`).
