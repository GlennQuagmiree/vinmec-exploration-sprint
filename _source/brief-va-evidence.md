# Đề bài Exploration Sprint + Evidence

## Đề bài gốc

Tóm tắt: Tìm hiểu một khoảnh khắc trong hành trình đi khám, tìm điểm đau, viết need statement, làm prototype có AI và thử với người thật.

**Sản phẩm nộp:** 1 repo (GitHub) chứa toàn bộ file của từng bước + slides.pdf (≤10 slide).

**Thời lượng:** 15-20 giờ (thực tế: **6 giờ còn lại**).

**Deadline:** 23h59 thứ Hai 19/10/2026 (hôm nay). Email: anh.ntm2@vinuni.edu.vn, tiêu đề `[Exploration Sprint] Bài tập 1 tuần – Họ và tên – Khóa (K1/K2/K3)`.

**Khoảnh khắc đã chọn:** **Đặt lịch hẹn** (từ chọn bác sĩ/giờ → chờ tổng đài gọi lại xác nhận → lịch không sync).

### Ràng buộc bắt buộc

- Xin đồng ý trước khi phỏng vấn
- Chỉ hỏi trải nghiệm dịch vụ; KHÔNG hỏi chẩn đoán/bệnh án/tình trạng sức khỏe
- Ẩn danh (P1, P2, P3…); không tên, không ảnh, không giấy tờ y tế
- Không ghi âm khi chưa đồng ý
- Không đưa lời khuyên y khoa
- Ghi rõ phần do AI tạo
- Slides ≤10 slide
- Need statement không được nêu giải pháp (mẫu Biodesign: problem – population – outcome)

### Cấu trúc repo

```
01-phong-van/       # Ghi chép MyVinmec review + interview guide + 3 phỏng vấn + insight
02-journey-map/     # Journey map/workflow, đánh dấu điểm đau
03-need-statement/  # Need statement + bằng chứng
04-best-practice/   # 3 best practice quốc tế + nguồn + bài học VN
05-prototype/       # Mã nguồn, prompt, log thử 2-3 người
06-rui-ro-dao-duc/  # Rủi ro an toàn + đạo đức + cách giảm thiểu
07-coach-plan/      # 1 trang: coach nhóm K4 thế nào
slides.pdf          # ≤10 slide
README.md           # Mục lục, khoảnh khắc đã chọn, nội dung AI tạo
```

---

## Evidence về pain points khoảnh khắc "Đặt lịch"

### 1. Trục trặc "Kết nối hồ sơ y tế" (PID)

**System logic (vinmec.com):** Tách biệt "Tạo tài khoản app" và "Kết nối hồ sơ y tế". Yêu cầu PID + SĐT + ngày sinh khớp 100% với HIS. Lễ tân nhập sai → hệ thống từ chối liên kết.

**Review (App Store, 2 sao):**  
> "Khám ở viện bao nhiêu lần rồi mà tải app về nhập mã khách hàng cứ báo không tìm thấy thông tin hoặc số điện thoại không khớp, trong khi vẫn nhận tin nhắn SMS của viện bằng số này. Lại phải gọi tổng đài chờ cả buổi mới nhờ cập nhật lại được."

**Review (Google Play, 1 sao):**  
> "Thêm hồ sơ của con vào tài khoản của mẹ cực kỳ rườm rà. Nhập đúng mã PID trên giấy ra viện mà app cứ xoay vòng vòng rồi báo lỗi kết nối."

### 2. Lỗi OTP chậm/không gửi

**Release notes (App Store):** Các phiên bản 2.x → 3.0.x nhiều lần ghi "Cải thiện hiệu năng hệ thống, tối ưu luồng đăng nhập và xác thực tài khoản". Luồng xác thực: 2 lớp OTP (1 lần tạo tài khoản/đăng nhập thiết bị lạ, 1 lần gửi về SĐT khi kết nối hồ sơ).

**Review (App Store, 1 sao):**  
> "App bị lỗi gửi mã OTP hay sao ấy, bấm gửi lại 3-4 lần không thấy tin nhắn nào về máy. Đến lúc thoát ra không làm nữa thì 15 phút sau tin nhắn mới đổ về dồn dập, lúc đấy thì hết hạn nhập mã rồi."

**Review (Google Play, 2 sao):**  
> "Quên mật khẩu bấm lấy mã xác thực qua SMS mà chờ mỏi cổ không thấy đâu, rất mất thời gian lúc đang ở sảnh viện cần mở mã QR để check-in."

### 3. Đặt lịch hẹn = "Chờ xác nhận", không real-time

**UI copywriting (MyVinmec):** Sau khi chọn Bác sĩ + Giờ khám, trạng thái hiện "Chờ xác nhận" + thông báo: *"Yêu cầu đặt hẹn của Quý khách đã được ghi nhận. Bộ phận Chăm sóc khách hàng Vinmec sẽ liên hệ lại để xác nhận lịch hẹn chính thức."*  
→ Dữ liệu slot trên App chỉ là request form, chưa khóa (hard-lock) lịch thật của bác sĩ.

**Review (App Store, 3 sao):**  
> "Đặt lịch trên app chọn sẵn giờ và bác sĩ rồi, tưởng thế là xong cứ thế đến khám. Ai ngờ hôm sau vẫn có bạn tổng đài gọi lại báo giờ đó bác sĩ bận mổ/hội chẩn rồi, phải đổi sang giờ khác. Thế thì đặt trên app khác gì để lại số điện thoại trên web đâu?"

**Review (Google Play, 2 sao):**  
> "Tính năng đặt lịch hẹn chưa thực tế, đặt trên app xong vẫn phải nghe điện thoại xác nhận lại từ đầu rất phiền lúc đang họp."

### 4. Lịch đặt qua tổng đài không hiện trên App

**Hướng dẫn (vinmec.com FAQ):** Khi lịch đặt qua tổng đài không hiện trên App, cần vào Hồ sơ cá nhân → Hủy kết nối hồ sơ y tế → Kết nối lại để ép đồng bộ (force sync) từ HIS sang App.

**Review (App Store, 3 sao):**  
> "Mình gọi hotline đặt lịch khám thai và tiêm cho bé, tổng đài báo ok gửi cả tin nhắn SMS xác nhận rồi mà mở app vào mục Lịch hẹn vẫn trắng tinh không có gì. Phải xóa app tải lại hoặc ngắt kết nối hồ sơ làm lại mới hiện ra."

### 5. Review lẫn lộn dịch vụ tại viện

**Pattern (App Store + Google Play):** Lọc đánh giá 1-2 sao → nhiều review không đề cập bug/giao diện app mà dùng khu vực review như kênh khiếu nại dịch vụ. Tài khoản Developer phản hồi xin thông tin để chuyển bộ phận Quản lý chất lượng bệnh viện.

**Review (App Store, 1 sao):**  
> "Bệnh viện quốc tế thu phí đắt đỏ mà đặt lịch hẹn trước đến nơi vẫn phải ngồi chờ gần 1 tiếng đồng hồ mới được gọi tên vào khám. Quá thất vọng về dịch vụ!"

**Review (Google Play, 1 sao):**  
> "Nhân viên lễ tân và bảo vệ hướng dẫn thiếu nhiệt tình, hỏi thủ tục bảo hiểm trả lời rất cộc lốc. Giá khám ngày càng tăng."

---

## Feedback chất lượng dịch vụ Vinmec (context, không liên quan trực tiếp đến app)

**Feedback #1 (trải nghiệm sinh con):**  
> "Sinh ở Vinmec rồi mình mới nhận ra một sự thật chấn động, hóa ra vượt cạn cũng nhàn tênh các mẹ ạ. […] Vào viện thì đi tay không, sinh bé xong thì các bác, các cô điều dưỡng chăm 24/7, chỉ cần bấm nút gọi là mọi người có mặt giúp đỡ 2 mẹ con em liền. Chồng em bảo là tập 2-3 sẽ vẫn chọn Vinmec […]"

**Feedback #2 (chi phí nằm viện):**  
> "Trước giờ mình cũng hay khám vinmec vì gần nhà, với có thẻ bảo hiểm ngoại trú nên cũng không đắt lắm, nhưng hôm nay vợ bị nhiễm khuẩn phải nhập viện truyền thuốc […] Được cái phòng riêng, wc riêng, mọi thứ có đủ cả, mỗi tội riêng tiền phòng đã 3tr8/ngày rồi […]"

**Feedback #3 (thu nhập bác sĩ):**  
> "Mình có người nhà làm Bác sĩ ở Vinmec đây. Mình thấy thu nhập rất tốt nha, có cơ hội học tập liên tục, ck mình chuẩn bị học TS lại được tài trợ 100% học phí. Nói chung môi trường chuyên nghiệp, coi trọng người tài. Vinmec lại có nhiều thầy cô chuyên gia nên học hỏi được nhiều."