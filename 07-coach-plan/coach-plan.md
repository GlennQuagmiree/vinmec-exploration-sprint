# Coach Plan — nhóm K4 (1 trang)

**Bối cảnh:** nhóm 3–4 sinh viên, 6 giờ, đầu ra repo + slides ≤10. Điểm mấu chốt: chọn đúng khoảnh khắc, journey map có bằng chứng, prototype thử được.

## Lịch trình

| Giờ | Việc | Chốt |
|---|---|---|
| 0:00–0:30 | Chọn khoảnh khắc, chia vai | Khoảnh khắc có nhiều review 1–2 sao nhất |
| 0:30–1:30 | Thu thập review → journey map | Đánh dấu 3–5 điểm đau 🔴 |
| 1:30–2:00 | Need statement (Biodesign) | Không được nêu giải pháp |
| 2:00–2:30 | 3 best practice + nguồn | Ghi rõ nguồn, không bịa số |
| 2:30–4:00 | Prototype | Chạy được > đẹp |
| 4:00–4:30 | Test 2–3 người + log | Log thật, kể cả phần thất bại |
| 4:30–5:00 | Rủi ro + coach plan | Phải có đường chuyển tuyến khẩn cấp |
| 5:00–5:45 | Slides → PDF | Đếm ≤10 slide |
| 5:45–6:00 | Checklist + nộp | Click từng link README, không 404 |

## Năm chỗ nhóm hay kẹt

**1. Không chọn được khoảnh khắc** — Hỏi ngược: *"Cái nào có nhiều review 1–2 sao nhất?"* Cho xem 5 review mẫu. Tránh khoảnh khắc quá rộng ("toàn bộ hành trình").

**2. Không biết làm prototype** — Ba phương án theo kỹ năng: HTML tĩnh + JS (30 phút) · nhờ AI sinh code (15 phút) · Figma clickable (20 phút). Nguyên tắc: prototype chỉ cần **chứng minh ý tưởng**.

**3. Không có ai để test** — Danh sách: bạn ngoài ngành IT · người thân từng khám bệnh viện tư · người 60+ nếu có. Test 5 phút/người, log lại. Nếu thật sự không có ai: **ghi thật là test nội bộ**, đừng viết như đã test người ngoài.

**4. Need statement viết thành giải pháp** — Hỏi: *"Nếu không có app, họ vẫn cần gì?"* → họ cần **sự chắc chắn**, không phải app. Sai: *"cần app đặt lịch real-time"*. Đúng: *"cần biết chắc lịch đã được xác nhận để sắp xếp công việc"*.

**5. Phân biệt evidence thật vs mô phỏng**
- Review công khai = evidence thật (secondary research)
- P1-P3 synthetic = mô phỏng, phải ghi rõ
- Test người thật = vàng, mô phỏng = bạc (vẫn có giá trị nếu ghi rõ)

## Checklist trước khi nộp

- README: mục lục đủ 7 thư mục, **click từng link trên GitHub — không được có 404**
- Journey map có ≥3 điểm đau 🔴
- Need statement: tìm chữ "app"/"AI"/"tổng đài" — nếu có là SAI
- Best practice: 3 nguồn quốc tế, **số liệu phải có nguồn thật hoặc bỏ**
- Prototype chạy được (`npm run dev`)
- Log test: ghi trung thực đã test ai, kể cả nếu là mô phỏng
- Rủi ro có đường chuyển tuyến khẩn cấp (từ khóa "115")
- Slides ≤10 (đề bài ghi >10 slide = 0 điểm)
- README ghi rõ phần nào do AI tạo
- ✅ Insight viết từ review (người thật) hay tổng hợp (synthetic) — ghi rõ trong README
- Email đúng tiêu đề: `[Exploration Sprint] Bài tập 1 tuần – Họ và tên – Khóa (K1/K2/K3)`

### Checklist: Cách trình bày evidence đúng — review ≠ phỏng vấn

| Câu hỏi | Đúng ✅ | Sai ❌ |
|---|---|---|
| Review App Store/Google Play | "50 review thu thập thật" | "3 phỏng vấn P1-P3" |
| Trích dẫn review | Ghi rõ: "App Store, 3 sao" | Chỉ ghi "theo P1 nói" |
| Insight tổng hợp | "Từ 50 review, tao rút ra..." | "Theo P1, P2, P3..." |
| Phỏng vấn ẩn danh | Ghi rõ: "phỏng vấn synthetic, do AI tạo" | Viết như phỏng vấn người thật |
| Log test prototype | Ghi rõ: "mô phỏng, không test người thật" | Viết như kết quả test thật |

**Nguyên tắc vàng:**
- **Review = evidence người thật** (viết bởi người dùng thật trên App Store/Google Play)
- **P1-P3 = synthetic** (do AI tạo từ review đó, để kiểm tra pain point có hợp lý)
- **Không trộn lẫn** hai nguồn này trong insight tổng hợp

## Phong cách coach

Đặt câu hỏi, không đưa đáp án · Cho xem mẫu, không viết hộ · Chậm hơn mốc 30 phút thì **cắt scope ngay** (Next.js → HTML tĩnh, 10 slide → 8).

> "Done is better than perfect. Nhưng done phải có bằng chứng."

---

*Bản đầy đủ (ma trận can thiệp, tâm lý nhóm, script test chi tiết): [`phu-luc-coach-plan-chi-tiet.md`](phu-luc-coach-plan-chi-tiet.md)*