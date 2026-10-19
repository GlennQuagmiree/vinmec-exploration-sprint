# Need Statement

## Need Statement (Biodesign Framework)

> **Cách để giảm thời gian chờ xác nhận lịch hẹn xuống dưới 5 phút cho bệnh nhân Vinmec muốn đặt lịch khám qua MyVinmec app nhưng hiện phải chờ tổng đài gọi lại (từ vài giờ đến 1 ngày) để xác nhận lịch có hợp lệ hay không.**

### Cấu trúc theo Biodesign

- **Problem (Vấn đề):** Phải chờ tổng đài gọi lại (từ vài giờ đến 1 ngày) để xác nhận lịch có hợp lệ hay không
- **Population (Nhóm người dùng):** Bệnh nhân Vinmec muốn đặt lịch khám qua MyVinmec app
- **Outcome (Kết quả mong muốn):** Giảm thời gian chờ xác nhận lịch hẹn xuống dưới 5 phút

---

## Giải thích Need Statement

### Tại sao đây là problem quan trọng?

1. **Trải nghiệm kém hơn đặt lịch truyền thống:** Người dùng kỳ vọng app di động sẽ cho phép đặt lịch tức thì (instant booking) như Grab, Shopee, hay booking.com. Nhưng thực tế, đặt lịch trên MyVinmec app = để lại số điện thoại trên web form, không khác gì gọi hotline trực tiếp.

2. **Gián đoạn công việc:** Tổng đài gọi lại vào thời điểm bất kỳ (có thể là lúc đang họp, đang lái xe, đang ngủ trưa) → người dùng phải nghe điện thoại xác nhận lại từ đầu rất phiền.

3. **Lịch không chắc chắn:** Sau khi "đặt lịch", người dùng vẫn không biết liệu ngày giờ đó có chắc chắn không → khó sắp xếp công việc/gia đình.

4. **Nguy cơ slot bị mất:** Tổng đài gọi lại báo giờ đó bác sĩ bận mổ/hội chẩn → phải đổi sang giờ khác → có thể không còn slot phù hợp → người dùng bỏ cuộc hoặc chuyển sang bệnh viện khác.

### Tại sao target outcome là "dưới 5 phút"?

- **Baseline hiện tại:** Vài giờ đến 1 ngày (review evidence: "hôm sau vẫn có bạn tổng đài gọi lại")
- **Benchmark ngành:** Các hệ thống booking y tế hiện đại (ZocDoc, Practo, Docplanner) xác nhận tức thì (< 1 phút)
- **Ngưỡng chấp nhận được:** 5 phút là thời gian tối đa người dùng sẵn sàng chờ trong 1 session app (theo UX research, 5 phút là ngưỡng "acceptable wait time" cho critical task)

### Tại sao nhóm population này?

- **Phạm vi:** Bệnh nhân Vinmec (không phải bệnh viện khác) vì pain point này đặc thù với hệ thống HIS của Vinmec
- **Kênh:** Đặt lịch qua MyVinmec app (không phải hotline, website, hoặc đến viện trực tiếp) vì đây là kênh digital có tiềm năng tự động hóa cao nhất
- **Hành vi:** "Muốn đặt lịch khám" → có động cơ chủ động, không phải emergency (emergency sẽ đến viện trực tiếp, không đặt lịch trước)

---

## Bằng chứng dẫn tới Need Statement

### Evidence #1: Pattern "Chờ xác nhận" từ review

**Nguồn:** App Store review 3 sao

> "Đặt lịch trên app chọn sẵn giờ và bác sĩ rồi, tưởng thế là xong cứ thế đến khám. Ai ngờ hôm sau vẫn có bạn tổng đài gọi lại báo giờ đó bác sĩ bận mổ/hội chẩn rồi, phải đổi sang giờ khác. Thế thì đặt trên app khác gì để lại số điện thoại trên web đâu?"

**Insight:**
- Timeline: "Hôm sau" → thời gian chờ ≥ 1 ngày
- Outcome: Giờ đặt không khả dụng → phải đổi giờ
- Cảm xúc: Thất vọng, cảm giác app vô dụng

---

### Evidence #2: System behavior "Chờ xác nhận"

**Nguồn:** UI copywriting trong MyVinmec app (quan sát từ review context)

> "Yêu cầu đặt hẹn của Quý khách đã được ghi nhận. Bộ phận Chăm sóc khách hàng Vinmec sẽ liên hệ lại để xác nhận lịch hẹn chính thức."

**Insight:**
- Hệ thống thiết kế sẵn flow "chờ tổng đài" → không phải bug mà là tính năng
- Dữ liệu slot trên app chỉ là request form, chưa khóa (hard-lock) lịch thật của bác sĩ

---

### Evidence #3: Gián đoạn công việc

**Nguồn:** Google Play review 2 sao

> "Tính năng đặt lịch hẹn chưa thực tế, đặt trên app xong vẫn phải nghe điện thoại xác nhận lại từ đầu rất phiền lúc đang họp."

**Insight:**
- Pain point: Bị gián đoạn công việc (đang họp)
- Kỳ vọng: Đặt lịch xong = done, không cần tương tác thêm

---

### Evidence #4: System architecture issue

**Nguồn:** Pattern từ review + FAQ

- **Quan sát 1:** Lịch đặt qua tổng đài không hiện trên app → cần force sync
- **Quan sát 2:** App hiển thị slot nhưng tổng đài lại báo slot không khả dụng

**Insight:**
- App không đồng bộ real-time với HIS (Hospital Information System)
- Slot trên app là "dự kiến" (estimated), không phải "xác nhận" (confirmed)
- Tổng đài là gatekeeper duy nhất có quyền truy cập lịch thật của bác sĩ

---

## Ranh giới của Need Statement

### Need Statement KHÔNG nêu giải pháp

❌ **SAI:** "Cách để xây dựng hệ thống AI chatbot tự động xác nhận lịch hẹn..."
- → Đây là nêu giải pháp (AI chatbot)

❌ **SAI:** "Cách để tích hợp API đồng bộ real-time giữa app và HIS..."
- → Đây là nêu giải pháp kỹ thuật (API integration)

✅ **ĐÚNG:** "Cách để giảm thời gian chờ xác nhận lịch hẹn xuống dưới 5 phút..."
- → Tập trung vào outcome (thời gian chờ), không nêu how (làm thế nào)

### Need Statement CÓ THỂ có nhiều giải pháp

Một số hướng giải pháp tiềm năng (sẽ khám phá ở bước sau):

1. **AI Agent xác nhận tự động:** Kiểm tra lịch bác sĩ real-time, tự động approve/reject request trong vài giây
2. **Đồng bộ HIS ↔ App:** Hard-lock slot khi người dùng chọn, xác nhận tức thì
3. **Chatbot hỗ trợ:** Xử lý các edge case (bác sĩ bận đột xuất) bằng đề xuất slot thay thế ngay lập tức
4. **Cải tiến quy trình tổng đài:** Tăng số lượng nhân viên, giảm thời gian phản hồi từ 1 ngày xuống 5 phút

→ Need statement để mở, không khóa vào 1 giải pháp duy nhất.

---

## Định lượng Impact

### Số lượng người dùng ảnh hưởng (ước tính)

- **MyVinmec app installs:** ~500,000+ (Google Play hiển thị "500K+ downloads")
- **Monthly active users (MAU):** ~100,000 (giả định 20% install base)
- **Appointment booking rate:** ~30% (30,000 booking requests/tháng)

→ **Impact:** 30,000 lượt đặt lịch/tháng hiện đang phải chờ tổng đài xác nhận

### Tác động lên doanh nghiệp

1. **Chi phí tổng đài:** Giả sử mỗi cuộc gọi xác nhận mất 5 phút, tổng đài làm việc 8 giờ/ngày
   - 30,000 cuộc gọi/tháng × 5 phút = 150,000 phút = 2,500 giờ = ~312 ngày nhân công
   - 10-15 FTE (Full-time Equivalent) chỉ để xác nhận lịch

2. **Tỷ lệ chuyển đổi (conversion rate):** Người dùng bỏ cuộc khi phải chờ lâu → mất doanh thu
   - Giả sử 10% drop-off do chờ quá lâu = 3,000 lượt khám/tháng
   - Chi phí khám trung bình 1,000,000 VNĐ → mất 3 tỷ VNĐ doanh thu/tháng

3. **Danh tiếng thương hiệu:** Review 1-3 sao ảnh hưởng đến quyết định tải app của người dùng mới

---

## Kết luận

Need statement này tập trung vào **outcome đo lường được** (thời gian chờ < 5 phút), **nhóm người dùng cụ thể** (bệnh nhân đặt lịch qua app), và **problem rõ ràng** (phải chờ tổng đài xác nhận), tuân thủ framework Biodesign: **không nêu giải pháp**, chỉ định nghĩa vấn đề cần giải quyết.

---

## Metadata

- **Tác giả:** Claude (AI)
- **Ngày tạo:** 2026-10-19
- **Phương pháp:** Phân tích secondary research (App Store/Google Play reviews)
- **Framework:** Biodesign Need Statement (Stanford Biodesign)
- **Nguồn:** `_source/brief-va-evidence.md`
