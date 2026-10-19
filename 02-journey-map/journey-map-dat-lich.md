# Journey Map: Khoảnh khắc "Đặt lịch hẹn"

## Tổng quan
Journey map này mô tả hành trình của người dùng từ khi nhận ra cần khám bệnh đến khi hoàn tất check-in tại bệnh viện Vinmec, tập trung vào khoảnh khắc đặt lịch hẹn.

---

## Journey Map

| **Bước** | **Hành động** | **Cảm xúc** | **Điểm cảm xúc (1-5)** | **Điểm đau** | **Cơ hội cải thiện** |
|----------|---------------|-------------|------------------------|--------------|----------------------|
| 1. Nhận ra cần khám | Người dùng phát hiện triệu chứng hoặc cần khám định kỳ (thai sản, tiêm chủng cho con) | 😟 Lo lắng | 2/5 | Không chắc nên khám chuyên khoa nào, bác sĩ nào | Gợi ý chuyên khoa thông minh dựa trên triệu chứng |
| 2. Mở app MyVinmec | Tải app hoặc mở app đã cài | 😐 Trung lập | 3/5 | - | - |
| 3. 🔴 Đăng nhập/Kết nối hồ sơ | Nhập PID + SĐT + ngày sinh để kết nối hồ sơ y tế | 😤 Bực bội | 1/5 | **PID nhập đúng vẫn báo lỗi "không tìm thấy thông tin" hoặc "SĐT không khớp"** (lễ tân nhập sai HIS) | Xác thực mềm dẻo hơn (fuzzy matching), cho phép sửa thông tin tại app |
| 4. 🔴 Xác thực OTP | Chờ tin nhắn OTP để xác nhận tài khoản/kết nối hồ sơ | 😠 Tức giận | 1/5 | **OTP gửi chậm hoặc không gửi, bấm gửi lại nhiều lần → 15 phút sau tin nhắn đổ về dồn dập nhưng đã hết hạn** | Tối ưu hạ tầng gửi OTP real-time, thêm phương thức xác thực backup (email, biometric) |
| 5. Chọn chuyên khoa/bác sĩ | Tìm kiếm chuyên khoa → Chọn bác sĩ | 😐 Trung lập | 3/5 | Thiếu thông tin về bác sĩ (kinh nghiệm, đánh giá) | Hiển thị profile bác sĩ chi tiết, rating từ bệnh nhân |
| 6. 🔴 Chọn ngày giờ khám | Chọn slot thời gian khả dụng trên lịch | 😕 Nghi ngờ | 2/5 | **Slot hiển thị trên app chưa chắc chắn là slot thật của bác sĩ** | Đồng bộ real-time với lịch thật của bác sĩ, hard-lock slot khi chọn |
| 7. 🔴 Gửi yêu cầu đặt lịch | Bấm "Đặt lịch" → Nhận thông báo "Chờ xác nhận" | 😟 Lo lắng | 2/5 | **Không biết lịch đã được xác nhận chưa, phải chờ tổng đài gọi lại** | Xác nhận tức thì (instant booking), thông báo rõ ràng trạng thái lịch |
| 8. 🔴 Chờ tổng đài gọi lại | Chờ điện thoại từ bộ phận Chăm sóc khách hàng (có thể mất vài giờ đến 1 ngày) | 😤 Bực bội | 1/5 | **Tổng đài gọi lại báo giờ đó bác sĩ bận mổ/hội chẩn, phải đổi giờ khác → Đặt trên app như không đặt** | Loại bỏ bước trung gian này bằng booking tự động |
| 9. 🔴 Kiểm tra lịch trên app | Mở app xem lịch hẹn đã được xác nhận | 😠 Tức giận | 1/5 | **Lịch đặt qua tổng đài không hiện trên app, phải hủy kết nối hồ sơ → kết nối lại để force sync** | Đồng bộ 2 chiều real-time giữa HIS ↔ App |
| 10. Đến viện | Di chuyển đến bệnh viện theo lịch hẹn | 😐 Trung lập | 3/5 | - | Gửi reminder thông minh (trước 1 ngày, trước 2 giờ) |
| 11. 🔴 Check-in tại viện | Quét QR code hoặc đăng ký tại lễ tân | 😤 Bực bội | 2/5 | **Đã đặt lịch trước nhưng vẫn phải chờ lâu (gần 1 tiếng) mới được gọi tên vào khám** | Tối ưu quy trình check-in, ưu tiên khách đã đặt lịch |

---

## Phân tích điểm đau chính (Pain Points)

### 🔴 Pain Point #1: Kết nối hồ sơ y tế thất bại
**Mô tả:** PID nhập đúng vẫn báo lỗi "không tìm thấy thông tin" hoặc "SĐT không khớp" vì lễ tân nhập sai vào HIS.

**Tần suất:** Cao (nhiều review 1-2 sao)

**Tác động:** Người dùng không thể đặt lịch, phải gọi tổng đài chờ lâu để nhờ cập nhật thông tin.

**Nguyên nhân gốc:** Hệ thống yêu cầu khớp 100% giữa PID + SĐT + ngày sinh, không có cơ chế sửa lỗi dữ liệu từ phía người dùng.

---

### 🔴 Pain Point #2: OTP gửi chậm hoặc không gửi
**Mô tả:** Bấm gửi OTP 3-4 lần không thấy tin nhắn, 15 phút sau tin nhắn đổ về dồn dập nhưng đã hết hạn.

**Tần suất:** Trung bình (nhiều review 1-2 sao, release notes nhiều lần "tối ưu luồng xác thực")

**Tác động:** Người dùng không thể hoàn tất đăng nhập/kết nối hồ sơ, đặc biệt khó khăn khi đang ở sảnh viện cần mở QR để check-in.

**Nguyên nhân gốc:** Hạ tầng gửi SMS chậm, 2 lớp OTP (1 lần tạo tài khoản, 1 lần kết nối hồ sơ) gây quá tải.

---

### 🔴 Pain Point #3: Đặt lịch không real-time, phải chờ tổng đài xác nhận
**Mô tả:** Sau khi chọn bác sĩ + giờ khám, trạng thái hiện "Chờ xác nhận". Tổng đài gọi lại (có thể sau vài giờ hoặc 1 ngày) để báo giờ đó bác sĩ bận, phải đổi giờ khác.

**Tần suất:** Rất cao (pattern chính trong review 2-3 sao)

**Tác động:** Người dùng không biết lịch có chắc chắn không, phải nghe điện thoại xác nhận lại rất phiền (đặc biệt khi đang họp). Trải nghiệm đặt lịch trên app = để lại SĐT trên web.

**Nguyên nhân gốc:** Dữ liệu slot trên app chỉ là request form, chưa khóa (hard-lock) lịch thật của bác sĩ trong HIS.

---

### 🔴 Pain Point #4: Lịch đặt qua tổng đài không hiện trên app
**Mô tả:** Gọi hotline đặt lịch, tổng đài xác nhận + gửi SMS, nhưng mở app vào "Lịch hẹn" vẫn trắng. Phải hủy kết nối hồ sơ → kết nối lại để force sync.

**Tần suất:** Trung bình (nhiều review 3 sao)

**Tác động:** Người dùng không tin tưởng app, phải thực hiện thao tác workaround phức tạp (FAQ hướng dẫn).

**Nguyên nhân gốc:** Không đồng bộ 2 chiều real-time giữa HIS ↔ App.

---

### 🔴 Pain Point #5: Đặt lịch trước vẫn chờ lâu tại viện
**Mô tả:** Đã đặt lịch hẹn trước nhưng đến viện vẫn phải ngồi chờ gần 1 tiếng mới được gọi tên vào khám.

**Tần suất:** Trung bình (review 1 sao, nhưng lẫn lộn giữa app và dịch vụ tại viện)

**Tác động:** Người dùng thất vọng với dịch vụ, đặt câu hỏi về giá trị của việc đặt lịch trước.

**Nguyên nhân gốc:** Quy trình check-in tại viện chưa ưu tiên khách đã đặt lịch, có thể do overbooking hoặc bác sĩ trễ giờ.

---

## Cơ hội cải thiện (Opportunities)

1. **Xác thực mềm dẻo:** Fuzzy matching cho PID/SĐT, cho phép người dùng tự sửa thông tin không khớp ngay trên app.

2. **Loại bỏ OTP hoặc backup:** Tối ưu hạ tầng gửi SMS, thêm phương thức xác thực sinh trắc học (Face ID, Touch ID).

3. **Real-time booking:** Đồng bộ slot thật của bác sĩ, hard-lock khi người dùng chọn, xác nhận tức thì (không cần tổng đài).

4. **Sync 2 chiều HIS ↔ App:** Lịch đặt qua tổng đài tự động hiện trên app trong vòng vài giây.

5. **Tối ưu quy trình check-in:** Ưu tiên hàng đợi cho khách đã đặt lịch, gửi thông báo ước tính thời gian chờ.

---

## Ghi chú
- **Nguồn dữ liệu:** Review App Store + Google Play, Release notes, FAQ vinmec.com
- **Phương pháp:** Phân tích nội dung review 1-3 sao, pattern matching các pain point lặp lại
- **Disclaimer:** Không có phỏng vấn người dùng thật (do giới hạn thời gian sprint), dựa hoàn toàn vào secondary research
