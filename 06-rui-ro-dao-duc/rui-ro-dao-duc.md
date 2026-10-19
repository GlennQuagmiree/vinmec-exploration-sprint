# Rủi ro An toàn & Đạo đức — Prototype Đặt lịch có AI

## Tổng quan

Khi tích hợp AI vào hệ thống đặt lịch hẹn y tế, cần xác định rõ **rủi ro an toàn** (safety) và **rủi ro đạo đức** (ethics), kèm cách giảm thiểu cụ thể. Đặc biệt quan trọng là **đường chuyển tuyến khẩn cấp** — khi nào hệ thống phải dừng lại và đẩy người dùng sang gọi 115/cấp cứu hoặc tổng đài y tế.

---

## A. Rủi ro An toàn (Safety Risks)

### 🔴 Rủi ro #1: AI đưa lời khuyên y khoa sai

**Mô tả:**  
Khi người dùng nhập triệu chứng (ví dụ: "đau bụng dữ dội"), AI gợi ý chuyên khoa sai (ví dụ: Tiêu hóa thay vì Cấp cứu khi có dấu hiệu viêm ruột thừa cấp).

**Hậu quả:**  
- Bệnh nhân trì hoãn điều trị cấp cứu → nguy cơ biến chứng nặng, tử vong.
- Trách nhiệm pháp lý cho bệnh viện/nhà phát triển app.

**Cách giảm thiểu:**

1. **Disclaimer rõ ràng ngay đầu màn hình AI:**
   > "AI chỉ hỗ trợ tìm chuyên khoa phù hợp. Không thay thế chẩn đoán của bác sĩ. Nếu cấp cứu, gọi ngay 115."

2. **Từ khóa nguy hiểm kích hoạt cảnh báo khẩn cấp:**  
   Khi phát hiện cụm từ như "đau ngực dữ dội", "khó thở", "choáng váng", "chảy máu không cầm", "co giật", AI **BẮT BUỘC** hiện popup đỏ:
   > "⚠️ Triệu chứng này có thể nguy hiểm. Vui lòng gọi ngay 115 hoặc đến Cấp cứu."

3. **Không cho phép AI xác định độ nghiêm trọng:**  
   AI chỉ phân loại chuyên khoa (Tiêu hóa, Tim mạch, Thần kinh…), KHÔNG được đưa ra kết luận "nhẹ/nặng" hoặc "cần/không cần khám ngay".

4. **Human-in-the-loop cho gợi ý chuyên khoa:**  
   Tất cả gợi ý của AI phải được bác sĩ/điều dưỡng trưởng duyệt trước khi đưa vào production (kiểm tra tập quy tắc gợi ý).

---

### 🔴 Rủi ro #2: AI điều hướng sai chuyên khoa

**Mô tả:**  
AI gợi ý chuyên khoa không phù hợp với triệu chứng thật của bệnh nhân (ví dụ: "mệt mỏi, chóng mặt" → gợi ý Nội tổng quát thay vì Tim mạch khi có tiền sử bệnh tim).

**Hậu quả:**  
- Bệnh nhân đặt lịch sai chuyên khoa → phải đặt lại → mất thời gian, trì hoãn điều trị.
- Giảm niềm tin vào hệ thống.

**Cách giảm thiểu:**

1. **Cho phép người dùng chọn thủ công chuyên khoa:**  
   AI gợi ý 2-3 lựa chọn, nhưng luôn có nút "Chọn chuyên khoa khác" để người dùng tự quyết định.

2. **Khai thác tiền sử bệnh từ HIS:**  
   Nếu hồ sơ y tế có ghi nhận bệnh mạn tính (đái tháo đường, tăng huyết áp, hen suyễn…), AI ưu tiên gợi ý chuyên khoa liên quan.

3. **Feedback loop từ bác sĩ:**  
   Sau khi khám, bác sĩ có thể đánh dấu "Gợi ý chuyên khoa của AI đúng/sai". Dữ liệu này dùng để tinh chỉnh model.

4. **Fallback sang tổng đài:**  
   Nếu AI không chắc chắn (confidence score thấp), hiển thị:  
   > "Chúng tôi chưa thể gợi ý chính xác. Vui lòng gọi tổng đài 1900 xxxx để được hỗ trợ."

---

### 🔴 Rủi ro #3: Dữ liệu sức khỏe rò rỉ qua chat AI

**Mô tả:**  
Người dùng nhập triệu chứng nhạy cảm (ví dụ: "tiểu ra máu", "ngứa vùng kín") vào AI chatbot → dữ liệu này có thể:
- Bị log lại trên server không mã hóa.
- Dùng để train model → lộ ra cho người khác (model inversion attack).
- Bị nhân viên IT xem trái phép.

**Hậu quả:**  
- Vi phạm quyền riêng tư bệnh nhân.
- Vi phạm Luật An toàn thông tin mạng VN, GDPR (nếu có người dùng EU).

**Cách giảm thiểu:**

1. **Mã hóa end-to-end:**  
   Dữ liệu chat AI phải mã hóa trước khi gửi lên server, chỉ giải mã khi xử lý, và xóa sau khi trả kết quả (không lưu log chat).

2. **Không dùng dữ liệu thật để train model:**  
   Chỉ dùng dữ liệu tổng hợp (synthetic data) hoặc dữ liệu đã de-identify để train/fine-tune AI.

3. **Audit log truy cập:**  
   Ghi nhận ai (nhân viên IT, admin) xem log chat, khi nào, vì lý do gì. Chỉ cho phép truy cập khi có yêu cầu pháp lý hoặc khiếu nại.

4. **Thông báo chính sách quyền riêng tư:**  
   Trước khi dùng AI, hiện popup xin đồng thuận:
   > "AI sẽ xử lý triệu chứng bạn nhập để gợi ý chuyên khoa. Dữ liệu sẽ được mã hóa và không dùng cho mục đích khác. Xem chính sách quyền riêng tư."

---

### 🔴 Rủi ro #4: AI bỏ sót ca cấp cứu

**Mô tả:**  
Người dùng mô tả triệu chứng cấp cứu nhưng dùng từ ngữ không chuẩn y khoa (ví dụ: "tức ngực, khó thở", "đau đầu như búa bổ"), AI không phát hiện → gợi ý đặt lịch bình thường thay vì chuyển cấp cứu.

**Hậu quả:**  
- Bệnh nhân bỏ lỡ thời gian vàng cứu sống (golden hour).
- Trách nhiệm pháp lý nặng nề.

**Cách giảm thiểu:**

1. **Danh sách đen từ khóa cấp cứu (Red Flag Keywords):**  
   AI phải được train với danh sách từ khóa cấp cứu bao gồm cả ngôn ngữ thông thường:
   - Đau ngực: "tức ngực", "đau như kim đâm", "đau lan ra cánh tay trái"
   - Đột quỵ: "tê nửa người", "nói khó", "méo miệng"
   - Sốc: "choáng", "mờ mắt", "chân tay lạnh toát mồ hôi"
   - Chảy máu: "máu chảy không cầm", "nôn ra máu"

2. **Popup cứng cảnh báo cấp cứu (Hard-stop Warning):**  
   Khi phát hiện từ khóa cấp cứu, AI **BẮT BUỘC DỪNG** flow đặt lịch và hiển thị:
   ```
   ⚠️ CẢNH BÁO KHẨN CẤP
   
   Triệu chứng bạn mô tả có thể nguy hiểm đến tính mạng.
   Vui lòng:
   
   [GỌI NGAY 115]  [ĐẾN CẤP CỨU VINMEC]
   
   KHÔNG ĐẶT LỊCH KHÁM THÔNG THƯỜNG.
   ```

3. **Luôn có nút "Đây là cấp cứu" trên mọi màn hình:**  
   Bất kỳ màn hình nào có AI chatbot đều phải có nút nổi bật:
   > "⚠️ Tôi cần cấp cứu ngay" → chuyển sang màn hình gọi 115 + địa chỉ cấp cứu Vinmec gần nhất.

4. **Over-cautious mặc định:**  
   Nguyên tắc: **Thà cảnh báo thừa còn hơn bỏ sót.** Nếu AI không chắc chắn, luôn gợi ý "Nếu cảm thấy nặng, hãy gọi 115."

---

## 🚨 Đường Chuyển tuyến Khẩn cấp (Emergency Escalation Path)

### Khi nào BẮT BUỘC đẩy người dùng sang gọi 115/Cấp cứu?

AI **PHẢI DỪNG** flow đặt lịch và hiển thị popup cứng khi phát hiện **BẤT KỲ** tín hiệu sau:

| **Nhóm triệu chứng** | **Từ khóa trigger** | **Hành động bắt buộc** |
|---|---|---|
| **Tim mạch** | Đau ngực, tức ngực, đau lan ra tay trái, hồi hộp, khó thở dữ dội | Popup: "⚠️ Gọi ngay 115" + số cấp cứu Vinmec |
| **Đột quỵ** | Tê nửa người, nói khó, méo miệng, chóng mặt dữ dội đột ngột | Popup: "⚠️ Gọi ngay 115" + FAST test |
| **Sốc/Ngất** | Choáng váng, ngất, mờ mắt, lạnh toát mồ hôi, da tái xanh | Popup: "⚠️ Gọi ngay 115" |
| **Chấn thương** | Tai nạn, rơi từ cao, chảy máu không cầm, gãy xương hở | Popup: "⚠️ Gọi ngay 115" |
| **Phản vệ** | Sưng môi lưỡi, khó thở sau dùng thuốc/ăn hải sản | Popup: "⚠️ Tiêm EpiPen nếu có + gọi 115" |
| **Đau bụng cấp** | Đau bụng dữ dội đột ngột, nôn ra máu, đại tiện phân đen | Popup: "⚠️ Gọi ngay 115" |
| **Sản phụ khoa** | Thai phụ chảy máu âm đạo, đau bụng dưới dữ dội, vỡ ối | Popup: "⚠️ Đến Cấp cứu Sản ngay" |

### Flow cứng khi trigger cấp cứu

1. **AI phát hiện từ khóa** → dừng flow đặt lịch.
2. **Hiển thị popup toàn màn hình màu đỏ:**
   ```
   ⚠️ CẢNH BÁO KHẨN CẤP
   
   Triệu chứng bạn mô tả có thể nguy hiểm.
   Vui lòng gọi ngay:
   
   [115 - CẤP CỨU QUỐC GIA]
   
   Hoặc đến Cấp cứu Vinmec gần nhất:
   - Vinmec Times City: Đ. Minh Khai, HBT, HN
   - Vinmec Royal City: 72A Nguyễn Trãi, HN
   - Vinmec Central Park: 208 Nguyễn Hữu Cảnh, Q. Bình Thạnh, HCM
   
   [XEM BẢN ĐỒ]  [GỌI TỔNG ĐÀI VINMEC]
   ```
3. **Không cho phép đóng popup** trừ khi bấm "Tôi đã hiểu" (confirm awareness).
4. **Log sự kiện** (để audit sau nếu có tranh chấp pháp lý).

---

## B. Rủi ro Đạo đức (Ethics Risks)

### 🟡 Rủi ro #5: Vi phạm ẩn danh

**Mô tả:**  
Khi làm nghiên cứu/phỏng vấn để thiết kế hệ thống, có nguy cơ vô tình lộ danh tính bệnh nhân (qua tên, ảnh, giấy tờ y tế, hoặc chi tiết quá cụ thể như "Bà A, 65 tuổi, ở phường X, bị bệnh Y").

**Hậu quả:**  
- Vi phạm quyền riêng tư.
- Mất niềm tin của người tham gia nghiên cứu.

**Cách giảm thiểu:**

1. **Ẩn danh hoàn toàn:** Dùng mã P1, P2, P3… thay vì tên thật.
2. **Không ghi nhận thông tin nhận dạng:** Không lưu tên, SĐT, địa chỉ, PID, số hồ sơ y tế.
3. **Làm mờ chi tiết cụ thể:** Thay vì "Bà Nguyễn Thị A, 65 tuổi, ở Hoàng Mai", viết "P1, nữ, 60-70 tuổi, Hà Nội".
4. **Xin đồng thuận rõ ràng:** Trước khi phỏng vấn, nói rõ: "Chúng tôi sẽ ghi lại câu trả lời của bạn nhưng KHÔNG ghi tên. Bạn có đồng ý không?"

---

### 🟡 Rủi ro #6: Thiếu đồng thuận (Informed Consent)

**Mô tả:**  
Người dùng không biết rõ dữ liệu của họ (triệu chứng, lịch sử khám, hành vi dùng app) sẽ được dùng như thế nào (phân tích, train AI, chia sẻ với bên thứ ba).

**Hậu quả:**  
- Vi phạm nguyên tắc tự quyết (autonomy).
- Vi phạm pháp luật bảo vệ dữ liệu cá nhân.

**Cách giảm thiểu:**

1. **Popup xin đồng thuận trước khi dùng AI:**
   > "AI sẽ phân tích triệu chứng bạn nhập để gợi ý chuyên khoa. Dữ liệu sẽ được mã hóa và KHÔNG chia sẻ với bên ngoài. Bạn có đồng ý không?"
   > [Đồng ý] [Không, tôi muốn gọi tổng đài]

2. **Opt-in, không phải opt-out:**  
   Mặc định = KHÔNG thu thập dữ liệu để train AI. Chỉ thu thập khi người dùng tích chọn "Tôi đồng ý chia sẻ dữ liệu ẩn danh để cải thiện AI."

3. **Quyền rút lại đồng thuận:**  
   Người dùng có thể vào Cài đặt → Quyền riêng tư → bấm "Xóa dữ liệu AI của tôi" bất kỳ lúc nào.

4. **Ngôn ngữ rõ ràng, không thuật ngữ pháp lý:**  
   Thay vì "Chúng tôi xử lý dữ liệu cá nhân theo GDPR Article 6(1)(a)", viết:  
   > "Chúng tôi sẽ dùng triệu chứng bạn nhập để AI gợi ý bác sĩ phù hợp. Không ai khác nhìn thấy ngoại trừ bạn và hệ thống AI."

---

### 🟡 Rủi ro #7: Thiên lệch dữ liệu review (Bias in Training Data)

**Mô tả:**  
Nếu AI học từ review App Store/Google Play, có nguy cơ thiên lệch:
- **Người giàu thiên hơn:** Review Vinmec chủ yếu từ tầng lớp trung lưu/khá giả → AI có thể không đáp ứng tốt nhu cầu của người thu nhập thấp.
- **Người trẻ, tech-savvy thiên hơn:** Người già/ít dùng smartphone ít viết review → AI kém hiểu triệu chứng của họ.
- **Thiên lệch ngôn ngữ:** Người dùng miền Bắc viết "đau bụng", miền Nam viết "đau bụng" nhưng có thể dùng từ "nhức bụng", "cứng bụng" → AI phải hiểu cả.

**Hậu quả:**  
- AI phục vụ tốt nhóm người giàu, trẻ, tech-savvy → bỏ sót nhóm yếu thế.
- Vi phạm nguyên tắc công bằng (justice) trong y tế.

**Cách giảm thiểu:**

1. **Bổ sung dữ liệu từ nhiều nguồn:**  
   Không chỉ dùng review app, mà còn phỏng vấn trực tiếp người già, người thu nhập thấp, người ở vùng xa.

2. **Test AI trên nhiều nhóm người dùng:**  
   - Thử với người già (60+), người ít dùng smartphone, người nông thôn.
   - Đo độ chính xác gợi ý chuyên khoa trên từng nhóm → điều chỉnh nếu có nhóm bị thiệt.

3. **Đa dạng từ vựng triệu chứng:**  
   Train AI với từ điển y khoa bao gồm từ ngữ thông thường, cả 3 miền Bắc/Trung/Nam.

4. **Minh bạch giới hạn:**  
   Ghi rõ trong app: "AI được train chủ yếu từ review người dùng Hà Nội/TP.HCM. Nếu bạn không chắc, hãy gọi tổng đài để được hỗ trợ."

---

## C. Checklist Rủi ro Trước Khi Deploy

Trước khi đưa prototype lên production, BẮT BUỘC kiểm tra:

| ✅ | **Câu hỏi** | **Trách nhiệm** |
|---|---|---|
| ☐ | AI có disclaimer "Không thay thế chẩn đoán bác sĩ" chưa? | Product Manager |
| ☐ | Danh sách từ khóa cấp cứu đã được bác sĩ duyệt chưa? | Bác sĩ Cấp cứu |
| ☐ | Popup cảnh báo cấp cứu có nổi bật (màu đỏ, toàn màn hình) chưa? | UI/UX Designer |
| ☐ | Mọi màn hình AI đều có nút "Tôi cần cấp cứu" chưa? | Developer |
| ☐ | Dữ liệu chat AI có được mã hóa end-to-end chưa? | Security Engineer |
| ☐ | Có popup xin đồng thuận trước khi dùng AI chưa? | Legal/Compliance |
| ☐ | Người dùng có thể xóa dữ liệu AI của mình chưa? | Developer |
| ☐ | AI đã test trên nhiều nhóm người dùng (già, trẻ, giàu, nghèo) chưa? | UX Researcher |
| ☐ | Có audit log truy cập dữ liệu chat AI chưa? | Security Engineer |
| ☐ | Có kế hoạch xử lý sự cố nếu AI gợi ý sai chuyên khoa chưa? | Product Manager |

---

## Tóm tắt

| **Rủi ro** | **Cách giảm thiểu chính** |
|---|---|
| AI đưa lời khuyên sai | Disclaimer + không cho AI xác định độ nghiêm trọng |
| AI điều hướng sai chuyên khoa | Cho phép chọn thủ công + feedback từ bác sĩ |
| Dữ liệu rò rỉ | Mã hóa end-to-end + không dùng dữ liệu thật để train |
| Bỏ sót ca cấp cứu | **Danh sách từ khóa cứng + popup toàn màn hình + nút "Cấp cứu" luôn hiện** |
| Vi phạm ẩn danh | Dùng mã P1/P2/P3, không ghi tên/ảnh/giấy tờ |
| Thiếu đồng thuận | Popup xin đồng ý + opt-in + quyền xóa dữ liệu |
| Thiên lệch dữ liệu | Phỏng vấn đa dạng + test trên nhiều nhóm + từ điển đa miền |

**Nguyên tắc vàng:** Trong y tế, **an toàn > trải nghiệm > hiệu suất**. Thà cảnh báo thừa còn hơn bỏ sót.
