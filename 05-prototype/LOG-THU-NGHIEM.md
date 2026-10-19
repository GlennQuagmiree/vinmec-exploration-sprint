# Log mô phỏng prototype (2 kịch bản)

> **LƯU Ý QUAN TRỌNG:** Đây là log MÔ PHỎNG do AI tạo để minh họa flow prototype. KHÔNG PHẢI kết quả test với người dùng thật. Lý do: giới hạn thời gian (sprint 6 giờ) và không tiếp cận được người dùng thật của Vinmec trong điều kiện làm bài. Đây là hạn chế được ghi nhận trong bài.
>
> **Phương pháp:** Walkthrough theo kịch bản (scenario walkthrough) — mô phỏng hành vi để kiểm tra xem prototype có xử lý được các pain point ghi nhận từ 50+ review công khai hay không.
>
> **Hạn chế:** Vì không có buổi test với người thật, feedback trong log này là kịch bản mô phỏng dựa trên pattern từ review.

---

## Kịch bản P4 — Nữ, 32 tuổi, mẹ 2 con (khám Nhi, Sản)

| Mục | Nội dung |
|-----|----------|
| Nền tảng | Từng dùng MyVinmec 1 năm trước, sau đó bỏ vì "đặt lịch toàn phải đợi tổng đài gọi lại". Hay gọi hotline trực tiếp. |
| Nhiệm vụ | "Bạn thử đặt lịch khám cho con (ho, sổ mũi) qua prototype này." |
| Hành vi | Vào trang chủ → bấm "Đặt lịch khám ngay" → gõ "con ho sổ mũi" → AI gợi Hô hấp → bấm "Xem lịch khám Hô hấp" → xem slot → chọn slot "08:30 - 09:00" (BS Lê Văn C) → xác nhận → thấy màn "Đã xác nhận" + QR. Sau đó vào "Lịch hẹn" kiểm tra. |
| Gặp gì | ✅ Luồng mượt, không gặp lỗi blocking. Nhưng thắc mắc: "Cái disclaimer ban đầu hơi nhiều chữ, em chưa đọc kỹ đã tắt đi." Gợi ý: có muốn thấy disclaimer bền hơn? |
| Phản hồi | Thích nhất "còn X chỗ" — "Thoải mái vì thấy còn chỗ, không lo như trước." So sánh luồng cũ/mới: "Thế này nhanh hơn hẳn, không phải đợi điện thoại." |
| Sửa gì sau P4 | Xem xét đặt disclaimer thành modal buộc đọc 5s trước khi chat (đề xuất backlog, chưa build trong iteration này). Giữ disclaimer dismissable nhưng tăng contrast thay vì xóa. |

---

## Kịch bản P5 — Nam, 45 tuổi, điều trị mãn tính (Khám Nội tổng quát)

| Mục | Nội dung |
|-----|----------|
| Nền tảng | Dùng MyVinmec đều đặn (tái khám mỗi tháng), từng gặp bug "lịch qua tổng đài không hiện trên app". Đã phải ngắt/kết nối lại hồ sơ 2 lần. |
| Nhiệm vụ | "Bạn thử đặt lịch tái khám Nội tổng quát, rồi kiểm tra Lịch hẹn." |
| Hành vi | Trang chủ → bấm "Lịch hẹn của tôi" trước (trạng thái trống) → đọc note "Lịch qua app/tổng đài đều hiện tại đây" → quay lại trang chủ → vào chat → gõ "đau bụng tái phát" → AI gợi Tiêu hóa → xem slot → chọn 09:00 BS Nguyễn Văn A → xác nhận → "Đã xác nhận" + QR → vào "Lịch hẹn" thấy lịch vừa đặt (green dot "Đã xác nhận"). Sau đó bấm "So sánh với luồng cũ". |
| Gặp gì | ✅ Luồng hoàn chỉnh, hiểu ngay. Chỗ lưu ý: slot "Hết chỗ" hơi mờ — lúc đầu tưởng bug, sau đọc mới biết là hết thật. Đề xuất: nhãn "Hết chỗ" to/clear hơn. |
| Phản hồi | Quan tâm nhất chuyện sync: "Cái này quan trọng, nhiều lần em gọi tổng đài xong vào app trắng tinh, ức chế lắm." QR: "Có QR thì đến quầy đỡ phải đọc tên." |
| Sửa gì sau P5 | Tăng contrast cho slot "Hết chỗ": đổi text `#64748B` → giữ nhưng tăng padding + icon rõ hơn (đã apply). Thêm explain trong `appointments/page.tsx`: note "Mọi lịch qua app/tổng đài đều sync ngay". |

---

## Tổng kết thay đổi sau 2 lần thử

| Thứ tự ưu tiên | Vấn đề | Trạng thái |
|---|---|---|
| 1 | Disclaimer dễ bị bỏ qua | ▶️ Backlog (modal 5s) |
| 2 | Slot "Hết chỗ" mờ | ✅ Đã sửa (tăng rõ ràng) |
| 3 | Note sync trong "Lịch hẹn" chưa đủ nhấn | ✅ Đã thêm banner teal "Mọi lịch đều sync ngay" |

**Kết luận chung:** Cả 2 kịch bản walkthrough đều cho thấy sự khác biệt rõ rệt giữa luồng mới vs cũ (nút So sánh). Kịch bản mô phỏng không ghi nhận sự nhầm lẫn AI đang chẩn đoán bệnh — đều hiểu là "gợi ý chuyên khoa". Điểm đau về chờ xác nhận thủ công và đồng bộ đa kênh đều được xử lý triệt để trong flow thiết kế.

**Hạn chế & tiếp theo:**
- Test n=2, chưa đủ đại diện (chưa có người lớn tuổi ít dùng app).
- Slot hard-lock hiện là mock localStorage; production cần API + race condition handling.
- Cần thêm test với luồng "đổi/hủy lịch" (chưa build).
