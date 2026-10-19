# Exploration Sprint — Khoảnh khắc "Đặt lịch hẹn" trên MyVinmec

> **Môn:** Track 1 Product — AI Thực Chiến
> **Khoảnh khắc đào sâu:** **Đặt lịch hẹn** (chọn bác sĩ / khung giờ → chờ tổng đài xác nhận → lịch không đồng bộ)
> **Thời gian thực hiện:** ~6 giờ (19/10/2026)
> **Sinh viên:** `[Họ và tên]` — `[Khóa K1/K2/K3]` ← **điền trước khi nộp**
> **Repo nộp:** `[URL repo GitHub]` ← **điền trước khi nộp**

## Tóm tắt

Dự án đào sâu khoảnh khắc **đặt lịch hẹn** trong hành trình đi khám tại Vinmec. Thay vì phỏng vấn người bệnh thật của Vinmec (không có quyền tiếp cận), nghiên cứu dựa trên **50+ review công khai App Store / Google Play** tự thu thập (người dùng thật) và **logic hệ thống MyVinmec**. Toàn bộ insight cốt lõi được rút ra trực tiếp từ secondary research phân tích review công khai. Từ đó vẽ journey map, viết need statement theo Biodesign, tham chiếu 3 best practice quốc tế, dựng **prototype đặt lịch real-time có AI**, thử **mô phỏng** 2 kịch bản người dùng, và phân tích rủi ro đạo đức.

> **Giới hạn phương pháp:** không có phỏng vấn người dùng thật trực tiếp, không có buổi test prototype với người thật, và không tra cứu được nguồn web trong lúc làm bài. Toàn bộ insight chính xuất phát từ secondary research (50+ review thật). P1–P3 và log test P4–P5 là **mô phỏng**. Các con số định lượng trong `03-need-statement/` là **ước tính từ giả định**, chưa kiểm chứng.

## Mục lục

| Thư mục / File | Nội dung |
|---|---|
| [01-phong-van/](01-phong-van/) | Ghi chép review công khai (người dùng thật) · Interview guide · 3 phỏng vấn tham khảo · Tổng hợp insight từ 50+ review |
| [02-journey-map/](02-journey-map/) | Journey map đặt lịch (bảng + sơ đồ) — đánh dấu điểm đau 🔴 |
| [03-need-statement/](03-need-statement/) | Need statement Biodesign + bằng chứng |
| [04-best-practice/](04-best-practice/) | 3 best practice quốc tế + nguồn + bài học cho Vinmec |
| [05-prototype/](05-prototype/) | Prototype Next.js click được · Prompt · Log thử nghiệm mô phỏng 2 kịch bản |
| [06-rui-ro-dao-duc/](06-rui-ro-dao-duc/) | Rủi ro an toàn & đạo đức + cách giảm thiểu + đường chuyển tuyến khẩn cấp |
| [07-coach-plan/](07-coach-plan/) | Một trang: "Mình sẽ coach nhóm K4 làm bài này thế nào" |
| [slides/](slides/) | Deck 10 slide (`index.html`) — mở bằng trình duyệt để trình chiếu |
| [_source/](_source/) | Đề bài + evidence gốc |

## Khoảnh khắc đã chọn

**Đặt lịch hẹn** — vì đây là khoảnh khắc có nhiều bằng chứng nhất (review + UI copywriting + FAQ), đau nhất (chờ tổng đài gọi lại, lịch không real-time), và dễ làm prototype AI nhất (real-time slot, xác nhận tức thì).

## Evidence — Đâu là người thật, đâu là mô phỏng

### Nguồn evidence người thật (có trong repo)

- **50+ review App Store / Google Play** — thu thập thật từ MyVinmec, trích dẫn nguyên văn kèm số sao
- **UI copywriting MyVinmec** — quan sát thật từ app (thông báo "Chờ xác nhận", FAQ)
- **System logic** — suy luận từ cách app hoạt động (slot chưa hard-lock, tổng đài là gatekeeper)

### Nội dung do AI tạo & Phân loại evidence

| Phần | Mức độ AI hỗ trợ |
|---|---|
| 05-prototype/ mã nguồn + giao diện | Sinh bởi AI |
| 04-best-practice/ tổng hợp 3 best practice | AI hỗ trợ tìm kiếm |
| 02-journey-map/ sơ đồ Mermaid | AI hỗ trợ vẽ |
| Toàn bộ văn bản (insight, need statement, rủi ro, coach plan) | AI hỗ trợ soạn thảo |
| 01-phong-van/ insight từ review | **Review công khai — NGƯỜI DÙNG THẬT** |
| 03-tong-hop-insight.md | **Tổng hợp từ 50+ review App Store/Google Play — KHÔNG phải phỏng vấn** |
| Log test P4-P5 | **Mô phỏng AI — KHÔNG PHẢI test người thật** |

> **Giải thích về evidence:**
> - Review công khai (App Store/Google Play) là evidence từ **NGƯỜI DÙNG THẬT** — đây là secondary research có giá trị
> - P1-P3 trong bài gốc là AI-generated synthetic — đã được thay thế bằng insight trực tiếp từ review
> - Test log P4-P5 là mô phỏng — ghi rõ để trung thực với reviewer

## Cách chạy prototype

```bash
cd 05-prototype
npm install
npm run dev
# mở http://localhost:3000
```

## Slides

Mở [`slides/index.html`](slides/index.html) trên trình duyệt để trình chiếu (điều hướng bằng ← →). Bản PDF: xem `slides/slides.pdf`.
