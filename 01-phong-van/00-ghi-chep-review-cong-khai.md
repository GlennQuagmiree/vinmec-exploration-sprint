# Ghi chép review công khai (App Store + Google Play)

## Phương pháp thu thập

**Nguồn:** App Store (iOS) và Google Play (Android) — review công khai của MyVinmec.

**Thời điểm:** Review được thu thập từ các phiên bản 2.x–3.0.x (2023–2025).

**Tiêu chí lọc:** Đánh giá 1–3 sao có đề cập đến trải nghiệm đặt lịch hẹn, đăng nhập, kết nối hồ sơ y tế (PID).

**Hạn chế phương pháp:**
- Đây là **dữ liệu thứ cấp** (secondary data) — không phải phỏng vấn trực tiếp người dùng.
- Không kiểm soát được độ chính xác: một số review có thể do hiểu lầm tính năng, lỗi thiết bị/mạng cá nhân, hoặc trải nghiệm dịch vụ tại viện (không liên quan đến app).
- Thiên lệch tiêu cực (negativity bias): người dùng hài lòng ít review hơn người gặp vấn đề.
- Không thể hỏi sâu hoặc xác minh bối cảnh cụ thể của từng trường hợp.

---

## 5 nhóm pain point chính

### 1. Trục trặc "Kết nối hồ sơ y tế" (PID)

**Mô tả:** Hệ thống yêu cầu PID + SĐT + ngày sinh khớp 100% với HIS. Lễ tân nhập sai hoặc người dùng đổi SĐT → không thể kết nối hồ sơ y tế vào app.

**Trích dẫn điển hình:**

> "Khám ở viện bao nhiêu lần rồi mà tải app về nhập mã khách hàng cứ báo không tìm thấy thông tin hoặc số điện thoại không khớp, trong khi vẫn nhận tin nhắn SMS của viện bằng số này. Lại phải gọi tổng đài chờ cả buổi mới nhờ cập nhật lại được."  
> *(App Store, 2 sao)*

> "Thêm hồ sơ của con vào tài khoản của mẹ cực kỳ rườm rà. Nhập đúng mã PID trên giấy ra viện mà app cứ xoay vòng vòng rồi báo lỗi kết nối."  
> *(Google Play, 1 sao)*

**Tác động:** Người dùng phải gọi tổng đài hoặc đến lễ tân trực tiếp để sửa thông tin, mất thời gian.

---

### 2. Lỗi OTP chậm/không gửi

**Mô tả:** Luồng xác thực yêu cầu OTP (1 lần đăng nhập thiết bị lạ, 1 lần kết nối hồ sơ). Tin nhắn OTP đến chậm (10–15 phút) hoặc không gửi, khi đến thì đã hết hạn.

**Trích dẫn điển hình:**

> "App bị lỗi gửi mã OTP hay sao ấy, bấm gửi lại 3-4 lần không thấy tin nhắn nào về máy. Đến lúc thoát ra không làm nữa thì 15 phút sau tin nhắn mới đổ về dồn dập, lúc đấy thì hết hạn nhập mã rồi."  
> *(App Store, 1 sao)*

> "Quên mật khẩu bấm lấy mã xác thực qua SMS mà chờ mỏi cổ không thấy đâu, rất mất thời gian lúc đang ở sảnh viện cần mở mã QR để check-in."  
> *(Google Play, 2 sao)*

**Tác động:** Người dùng không thể đăng nhập/kết nối hồ sơ ngay khi cần (đặc biệt khi đã ở viện).

---

### 3. Đặt lịch hẹn = "Chờ xác nhận", không real-time

**Mô tả:** Sau khi chọn Bác sĩ + Giờ khám, trạng thái hiện "Chờ xác nhận". Tổng đài gọi lại sau 4–24 giờ, đôi khi báo giờ đã chọn bị trùng/bác sĩ bận mổ/hội chẩn → phải đổi giờ.

**Trích dẫn điển hình:**

> "Đặt lịch trên app chọn sẵn giờ và bác sĩ rồi, tưởng thế là xong cứ thế đến khám. Ai ngờ hôm sau vẫn có bạn tổng đài gọi lại báo giờ đó bác sĩ bận mổ/hội chẩn rồi, phải đổi sang giờ khác. Thế thì đặt trên app khác gì để lại số điện thoại trên web đâu?"  
> *(App Store, 3 sao)*

> "Tính năng đặt lịch hẹn chưa thực tế, đặt trên app xong vẫn phải nghe điện thoại xác nhận lại từ đầu rất phiền lúc đang họp."  
> *(Google Play, 2 sao)*

**Tác động:** Người dùng không chắc chắn có lịch hẹn chính thức, lo lỡ cuộc gọi từ tổng đài (đặc biệt giờ làm việc).

---

### 4. Lịch đặt qua tổng đài không hiện trên App

**Mô tả:** Khi gọi hotline đặt lịch (hoặc đặt tại lễ tân), lịch hẹn không tự động đồng bộ lên app. Người dùng phải vào Hồ sơ → Hủy kết nối hồ sơ y tế → Kết nối lại để ép đồng bộ (force sync).

**Trích dẫn điển hình:**

> "Mình gọi hotline đặt lịch khám thai và tiêm cho bé, tổng đài báo ok gửi cả tin nhắn SMS xác nhận rồi mà mở app vào mục Lịch hẹn vẫn trắng tinh không có gì. Phải xóa app tải lại hoặc ngắt kết nối hồ sơ làm lại mới hiện ra."  
> *(App Store, 3 sao)*

**Tác động:** Người dùng không thấy lịch hẹn → lo quên giờ khám, không dùng tính năng nhắc nhở của app.

---

### 5. Review lẫn lộn dịch vụ tại viện (không liên quan app)

**Mô tả:** Nhiều review 1–2 sao không đề cập bug/giao diện app mà khiếu nại dịch vụ tại viện (chờ lâu, nhân viên thiếu nhiệt tình, chi phí cao).

**Trích dẫn điển hình:**

> "Bệnh viện quốc tế thu phí đắt đỏ mà đặt lịch hẹn trước đến nơi vẫn phải ngồi chờ gần 1 tiếng đồng hồ mới được gọi tên vào khám. Quá thất vọng về dịch vụ!"  
> *(App Store, 1 sao)*

> "Nhân viên lễ tân và bảo vệ hướng dẫn thiếu nhiệt tình, hỏi thủ tục bảo hiểm trả lời rất cộc lốc. Giá khám ngày càng tăng."  
> *(Google Play, 1 sao)*

**Lưu ý:** Pain point này không liên quan trực tiếp đến chức năng đặt lịch trên app, nhưng phản ánh kỳ vọng của người dùng: "Đặt lịch trước = Không chờ lâu".

---

## Kết luận sơ bộ

4 nhóm pain point đầu (PID, OTP, đặt lịch chờ xác nhận, không đồng bộ) đều nằm ở khoảnh khắc **trước khi đến viện** — khi người dùng muốn đặt lịch hẹn hoặc tra cứu lịch đã đặt.

**Điểm đau lớn nhất:** Đặt lịch trên app không tương đương với "đã có lịch chắc chắn" → lo lắng, phải chờ điện thoại xác nhận, mất kiểm soát về thời gian.
