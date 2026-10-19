# Exploration Sprint — Khoảnh khắc "Đặt lịch hẹn" trên MyVinmec

> **Môn:** Track 1 Product — AI Thực Chiến
> **Khoảnh khắc đào sâu:** **Đặt lịch hẹn** (chọn bác sĩ / khung giờ → chờ tổng đài xác nhận → lịch không đồng bộ)
> **Thời gian thực hiện:** ~6 giờ (19/10/2026)
> **Sinh viên:** [Họ và tên — Khóa K1/K2/K3]
> **Repo nộp:** link gửi tới `anh.ntm2@vinuni.edu.vn`

## Tóm tắt

Dự án đào sâu khoảnh khắc **đặt lịch hẹn** trong hành trình đi khám tại Vinmec. Thay vì phỏng vấn người bệnh thật của Vinmec (không có quyền tiếp cận), nghiên cứu dựa trên **review công khai App Store / Google Play**, **logic hệ thống MyVinmec** và **3 phỏng vấn ẩn danh** với bạn bè/người thân từng đi khám ở bệnh viện tư. Từ đó vẽ journey map, viết need statement theo Biodesign, tham chiếu 3 best practice quốc tế, dựng **prototype đặt lịch real-time có AI**, thử với 2–3 người, và phân tích rủi ro đạo đức.

## Mục lục

| Thư mục / File | Nội dung |
|---|---|
| [01-phong-van/](01-phong-van/) | Ghi chép review công khai · Interview guide · 3 phỏng vấn ẩn danh (P1–P3) · Tổng hợp insight |
| [02-journey-map/](02-journey-map/) | Journey map đặt lịch (Mermaid + PNG + bảng) — đánh dấu điểm đau 🔴 |
| [03-need-statement/](03-need-statement/) | Need statement Biodesign + bằng chứng |
| [04-best-practice/](04-best-practice/) | 3 best practice quốc tế + nguồn + bài học cho Vinmec |
| [05-prototype/](05-prototype/) | Prototype Next.js click được · Prompt · Log thử nghiệm 2–3 người |
| [06-rui-ro-dao-duc/](06-rui-ro-dao-duc/) | Rủi ro an toàn & đạo đức + cách giảm thiểu + đường chuyển tuyến khẩn cấp |
| [07-coach-plan/](07-coach-plan/) | Một trang: "Mình sẽ coach nhóm K4 làm bài này thế nào" |
| [slides.pdf](slides/slides.pdf) | Deck ≤10 slide — tóm tắt để present 10 phút |
| [_source/](_source/) | Đề bài + evidence gốc |

## Khoảnh khắc đã chọn

**Đặt lịch hẹn** — vì đây là khoảnh khắc có nhiều bằng chứng nhất (review + UI copywriting + FAQ), đau nhất (chờ tổng đài gọi lại, lịch không real-time), và dễ làm prototype AI nhất (real-time slot, xác nhận tức thì).

## Nội dung do AI tạo

| Phần | Mức độ AI hỗ trợ |
|---|---|
| `05-prototype/` mã nguồn + giao diện | Sinh bằng AI (prompt ghi tại `05-prototype/PROMPT.md`) |
| `04-best-practice/` tổng hợp 3 best practice | AI hỗ trợ tìm kiếm + tổng hợp, nguồn do người kiểm chứng |
| `02-journey-map/` sơ đồ Mermaid | AI hỗ trợ vẽ |
| Toàn bộ văn bản (insight, need statement, rủi ro, coach plan) | AI hỗ trợ soạn thảo, người chịu trách nhiệm nội dung |
| 3 phỏng vấn P1–P3 | **Không do AI tạo** — ghi chép phỏng vấn thật, đã ẩn danh |

> Mọi trích dẫn review trong repo đều ghi rõ nguồn (App Store / Google Play + số sao).

## Cách chạy prototype

```bash
cd 05-prototype
npm install
npm run dev
# mở http://localhost:3000
```

## Slides

Xem [`slides/slides.pdf`](slides/slides.pdf) hoặc mở [`slides/index.html`](slides/index.html) trên trình duyệt rồi in ra PDF.
