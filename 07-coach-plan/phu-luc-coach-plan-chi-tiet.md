# Coach Plan — Hướng dẫn nhóm K4 làm Exploration Sprint

## Bối cảnh

Nếu mình coach nhóm sinh viên K4 (năm 4 đại học) làm bài **Exploration Sprint — Khoảnh khắc đi khám**, với điều kiện:
- **Thời gian:** 6 giờ liên tục hoặc chia 2 buổi (mỗi buổi 3 giờ)
- **Nhóm:** 3-4 người
- **Đầu ra:** Repo GitHub + slides.pdf ≤10 slide
- **Điểm mấu chốt:** Chọn đúng khoảnh khắc, journey map có bằng chứng, prototype thử được với người thật

Dưới đây là kế hoạch coach chi tiết, bao gồm lịch trình 6 giờ, cách gỡ khi nhóm kẹt, và checklist kiểm tra chất lượng trước khi nộp.

---

## Lịch Trình 6 Giờ (Chia Mốc)

| **Giờ** | **Mốc** | **Nhiệm vụ** | **Đầu ra** | **Vai trò coach** |
|---|---|---|---|---|
| **0:00 - 0:30** | Setup + Kick-off | - Tạo repo GitHub, clone về local<br>- Đọc đề bài, phân công vai trò (Lead, Researcher, Developer, Designer)<br>- Chọn khoảnh khắc (nếu chưa chọn) | Repo đã có README.md, 7 thư mục rỗng | **Giúp nhóm chọn khoảnh khắc:** Hỏi "Trong 3 khoảnh khắc này (Đặt lịch / Check-in / Chờ khám), cái nào có nhiều review kêu ca nhất?" → Gợi ý đọc 10-15 review App Store/Google Play để chọn. |
| **0:30 - 1:30** | Evidence + Journey Map | - Thu thập 10-20 review App Store/Google Play về khoảnh khắc đã chọn<br>- Vẽ journey map (bảng hoặc Mermaid), đánh dấu 3-5 điểm đau 🔴 | `02-journey-map/journey-map.md` | **Gỡ khi kẹt #1:** Nhóm không biết vẽ journey map thế nào → Cho xem mẫu (journey map mẫu của bài này), hướng dẫn cấu trúc bảng: Bước / Hành động / Cảm xúc / Điểm đau / Cơ hội. |
| **1:30 - 2:00** | Need Statement | - Viết need statement theo Biodesign: **"[Population] cần [need] để [outcome]"**<br>- Gắn 3-5 bằng chứng (trích dẫn review) | `03-need-statement/need-statement.md` | **Review trên chỗ:** Kiểm tra need statement có vi phạm "không được nêu giải pháp" không. Ví dụ sai: "Người dùng cần app đặt lịch real-time" (đã nêu giải pháp = app real-time). Ví dụ đúng: "Người dùng cần biết chắc chắn lịch hẹn có được xác nhận không". |
| **2:00 - 2:30** | Best Practice | - Tìm 3 best practice quốc tế (Google Scholar, websites bệnh viện lớn: Mayo Clinic, Cleveland Clinic, NHS UK, ZocDoc)<br>- Tóm tắt từng practice 2-3 dòng + nguồn | `04-best-practice/best-practice.md` | **Gợi ý từ khóa search:** "online appointment booking best practice", "real-time scheduling healthcare", "patient engagement digital health". Không cần đọc hết paper, chỉ cần abstract/executive summary. |
| **2:30 - 4:00** | Prototype | - Developer dựng prototype (Next.js/React hoặc HTML tĩnh + JS)<br>- UI đơn giản: Chọn chuyên khoa → Chọn bác sĩ → Chọn giờ → Xác nhận ngay (không qua tổng đài)<br>- Tích hợp AI: gợi ý chuyên khoa dựa trên triệu chứng (dùng prompt OpenAI/Claude API) | Mã nguồn chạy được tại `05-prototype/` | **Gỡ khi kẹt #2 (Prototype):** Xem mục riêng dưới. |
| **4:00 - 4:30** | Test Prototype | - Thử với 2-3 người (bạn bè, người thân) qua Zoom/Google Meet<br>- Ghi lại log: Người dùng nhập gì → AI gợi ý gì → Họ có đặt lịch được không → Feedback | `05-prototype/test-log.md` | **Hướng dẫn test script:** "Hãy tưởng tượng bạn đau bụng và muốn đặt lịch khám. Bạn sẽ làm gì?" → Quan sát họ dùng → Hỏi "Bạn có thấy rõ lịch đã được xác nhận chưa?" |
| **4:30 - 5:00** | Rủi ro + Coach Plan | - Viết rủi ro an toàn (AI đưa lời khuyên sai, bỏ sót cấp cứu) + đạo đức (ẩn danh, đồng thuận)<br>- Viết coach plan (chính là file này!) | `06-rui-ro-dao-duc/`<br>`07-coach-plan/` | **Gợi ý cấu trúc:** Mỗi rủi ro = Mô tả + Hậu quả + Cách giảm thiểu. Nhấn mạnh **đường chuyển tuyến khẩn cấp** (khi nào đẩy sang 115). |
| **5:00 - 5:45** | Slides | - Làm slides ≤10 slide: Title / Khoảnh khắc / Journey map / Need statement / Best practice / Prototype / Rủi ro / Demo<br>- Xuất PDF | `slides/slides.pdf` | **Review trước khi export PDF:** Đếm đúng ≤10 slide chưa? Có ghi rõ phần nào do AI tạo chưa? |
| **5:45 - 6:00** | Review + Submit | - Chạy checklist chất lượng (xem mục dưới)<br>- Push lên GitHub, kiểm tra README.md có đầy đủ mục lục không<br>- Gửi email đúng format tiêu đề | Repo hoàn chỉnh trên GitHub | **Duyệt cuối:** Mở repo trên GitHub, click từng link trong README.md xem có file nào bị thiếu không. |

---

## Cách Gỡ Khi Nhóm Kẹt

### 🔴 Kẹt #1: Không biết chọn khoảnh khắc nào

**Dấu hiệu:**  
Nhóm tranh luận mãi giữa "Đặt lịch" vs "Check-in" vs "Chờ khám", hoặc chọn khoảnh khắc quá chung chung ("Toàn bộ hành trình đi khám").

**Cách gỡ:**

1. **Hỏi ngược:** "Trong 3 khoảnh khắc này, cái nào các bạn thấy review app kêu ca nhiều nhất?"
   
2. **Cho xem 5 review mẫu** về "Đặt lịch":
   > "Đặt lịch xong vẫn phải chờ tổng đài gọi lại, rất phiền."  
   > "Lịch đặt qua tổng đài không hiện trên app."  
   → Nhóm nhận ra "Đặt lịch" có nhiều bằng chứng nhất.

3. **Gợi ý tiêu chí chọn khoảnh khắc:**
   - ✅ Có nhiều bằng chứng (review, UI screenshot, FAQ)
   - ✅ Đau rõ ràng (người dùng mất thời gian, mất niềm tin)
   - ✅ Dễ làm prototype (đặt lịch real-time dễ hơn là tối ưu hàng đợi check-in)

4. **Quy tắc vàng:** Chọn khoảnh khắc nào có **nhiều review 1-2 sao** nhất. Review càng tức giận = pain point càng lớn.

---

### 🔴 Kẹt #2: Không biết làm prototype thế nào (kỹ thuật)

**Dấu hiệu:**  
Developer trong nhóm chưa từng làm web app, không biết bắt đầu từ đâu, hoặc tốn quá nhiều thời gian setup Next.js/React.

**Cách gỡ:**

**Phương án A: Dùng HTML tĩnh + JavaScript (nhanh nhất, 30 phút)**

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Đặt lịch Vinmec</title>
  <style>
    body { font-family: sans-serif; max-width: 600px; margin: 50px auto; }
    button { padding: 10px 20px; background: #0066cc; color: white; border: none; cursor: pointer; }
  </style>
</head>
<body>
  <h1>Đặt lịch khám bệnh</h1>
  <p>Bạn có triệu chứng gì?</p>
  <input id="symptom" placeholder="Ví dụ: đau bụng" style="width: 300px; padding: 8px;">
  <button onclick="suggest()">Gợi ý chuyên khoa</button>
  <div id="result"></div>

  <script>
    function suggest() {
      const symptom = document.getElementById('symptom').value;
      let dept = 'Nội tổng quát';
      if (symptom.includes('đau bụng')) dept = 'Tiêu hóa';
      if (symptom.includes('đau ngực')) dept = 'Tim mạch';
      if (symptom.includes('đau đầu')) dept = 'Thần kinh';
      
      document.getElementById('result').innerHTML = `
        <p>✅ Gợi ý: <b>${dept}</b></p>
        <p>Chọn bác sĩ: <select><option>BS. Nguyễn Văn A</option></select></p>
        <p>Chọn giờ: <select><option>14:00 - 19/10/2026</option></select></p>
        <button>Xác nhận đặt lịch</button>
      `;
    }
  </script>
</body>
</html>
```

→ Lưu file `index.html`, mở trên trình duyệt = xong prototype cơ bản.

**Phương án B: Dùng AI code cho (Claude/ChatGPT, 15 phút)**

Prompt gửi cho AI:

```
Viết cho tôi một trang HTML đơn giản để đặt lịch khám bệnh:
1. Input: Nhập triệu chứng (ví dụ: đau bụng)
2. AI gợi ý chuyên khoa (dùng if/else đơn giản, không cần API thật)
3. Chọn bác sĩ + giờ khám
4. Bấm "Xác nhận" → hiện thông báo "Lịch đã được xác nhận ngay, không cần chờ tổng đài"

UI đơn giản, dùng inline CSS.
```

→ AI trả về code HTML hoàn chỉnh, copy vào file `index.html`.

**Phương án C: Dùng Figma mockup (không code, 20 phút)**

Nếu nhóm không có developer:
1. Vẽ 3-4 màn hình trên Figma: Nhập triệu chứng → Gợi ý chuyên khoa → Chọn bác sĩ + giờ → Xác nhận.
2. Link các màn hình bằng Prototype mode → Share link Figma.
3. Ghi trong `05-prototype/README.md`: "Prototype là Figma clickable, xem tại [link]."

**Khi nào cần tích hợp AI thật?**

Nếu thời gian cho phép (> 1 giờ rảnh), dùng API:
- OpenAI API (GPT-4): Nhập triệu chứng → gọi API → trả về chuyên khoa.
- Claude API (Anthropic): Tương tự.
- Local: Dùng rule-based (if/else) giả lập AI.

**Nguyên tắc:** Prototype không cần hoàn hảo, chỉ cần **chứng minh được ý tưởng** (đặt lịch real-time, không chờ tổng đài).

---

### 🔴 Kẹt #3: Không biết test prototype với ai

**Dấu hiệu:**  
Nhóm làm xong prototype nhưng không có người dùng thật để thử, hoặc test với nhau trong nhóm (bias, không đủ khách quan).

**Cách gỡ:**

1. **Danh sách người test (2-3 người):**
   - **Người 1:** Bạn bè ngoài ngành IT (để xem người không tech-savvy dùng có hiểu không)
   - **Người 2:** Người thân từng đi khám bệnh viện tư (có context thực tế)
   - **Người 3:** Người già (60+) nếu có → test xem họ có dùng được không

2. **Script test nhanh (5 phút/người):**
   ```
   Kịch bản: "Hãy tưởng tượng bạn đau bụng và muốn đặt lịch khám tại Vinmec. Hãy dùng thử prototype này."
   
   Câu hỏi sau khi test:
   - Bạn có hiểu cách nhập triệu chứng không?
   - AI gợi ý chuyên khoa có hợp lý không?
   - Bạn có cảm thấy lịch đã được xác nhận chắc chắn chưa?
   - So với đặt lịch bình thường (phải chờ tổng đài), bạn thích cách nào hơn?
   ```

3. **Ghi log test:**
   ```
   ### Test #1 — P1 (nữ, 28 tuổi, làm marketing)
   - Nhập: "đau bụng"
   - AI gợi ý: Tiêu hóa ✅
   - Đặt lịch: Thành công
   - Feedback: "Rất nhanh, thích hơn là phải chờ điện thoại. Nhưng không chắc lịch có thật không."
   ```

4. **Nếu thực sự không có ai test:**  
   Ghi trong `test-log.md`: "Do giới hạn thời gian, prototype được test với 2 thành viên nhóm (đóng vai người dùng) + 1 bạn bên ngoài qua Zoom."

**Nguyên tắc:** Test không cần hoàn hảo, chỉ cần **có bằng chứng** rằng đã thử với người thật và ghi lại feedback.

---

### 🔴 Kẹt #4: Viết need statement cứ thành giải pháp

**Dấu hiệu:**  
Need statement viết kiểu: "Người dùng cần app đặt lịch real-time" (đã nêu giải pháp = app real-time).

**Cách gỡ:**

**Công thức Biodesign:**
```
[Population] cần [need] để [outcome]
```

**Ví dụ SAI:**
> "Người dùng MyVinmec cần app đặt lịch real-time để không phải chờ tổng đài."  
→ Sai vì "app real-time" là giải pháp rồi.

**Ví dụ ĐÚNG:**
> "Người dùng MyVinmec cần biết chắc chắn lịch hẹn có được xác nhận ngay không để sắp xếp công việc và không lo lỡ lịch."  
→ Đúng vì chỉ nói **nhu cầu** (biết chắc chắn) và **outcome** (sắp xếp công việc), không nói làm thế nào (app, tổng đài, SMS…).

**Kỹ thuật gỡ:**  
Hỏi nhóm: "Nếu không có app, họ vẫn cần gì?" → Họ cần **sự chắc chắn**, không phải app.

---

## Checklist Chất Lượng Trước Khi Nộp

| ✅ | **Câu hỏi** | **Cách kiểm tra** |
|---|---|---|
| ☐ | README.md có mục lục đầy đủ 7 thư mục + slides.pdf? | Mở README, click từng link xem có 404 không |
| ☐ | Journey map có đánh dấu 🔴 điểm đau? | Mở `02-journey-map/` xem có ít nhất 3 điểm đau không |
| ☐ | Need statement theo Biodesign (không nêu giải pháp)? | Đọc need statement, tìm từ khóa "app", "tổng đài", "AI" → Nếu có = SAI |
| ☐ | Best practice có 3 nguồn quốc tế + link? | Mở `04-best-practice/`, kiểm tra có 3 nguồn không (Mayo Clinic, NHS, ZocDoc…) |
| ☐ | Prototype chạy được (npm run dev hoặc mở index.html)? | Chạy thử, xem có lỗi không |
| ☐ | Test log có ít nhất 2 người + feedback? | Mở `05-prototype/test-log.md`, đếm số người test |
| ☐ | Rủi ro có đường chuyển tuyến khẩn cấp? | Mở `06-rui-ro-dao-duc/`, search từ khóa "115" hoặc "cấp cứu" |
| ☐ | Slides ≤10 slide? | Mở slides.pdf, đếm trang (Page X of Y ở góc dưới) |
| ☐ | README ghi rõ phần nào do AI tạo? | Mở README, search "AI tạo" hoặc "AI hỗ trợ" |
| ☐ | Email gửi đúng format tiêu đề? | Tiêu đề: `[Exploration Sprint] Bài tập 1 tuần – Họ và tên – Khóa (K1/K2/K3)` |

**Quy tắc vàng:** Mở repo trên GitHub (không phải local), click từng link trong README.md → Nếu có link nào 404 = chưa xong.

---

## Lời Khuyên Cho Coach

### 1. Thời điểm can thiệp

- **CAN THIỆP SỚM (0:30 - 1:00):** Khi nhóm chọn khoảnh khắc. Nếu chọn sai (quá rộng, không có bằng chứng), gỡ ngay.
- **CAN THIỆP VỪA (2:30 - 4:00):** Khi làm prototype. Nếu thấy nhóm mất > 30 phút setup mà chưa có gì, gợi ý dùng HTML tĩnh hoặc Figma.
- **CAN THIỆP CUỐI (5:45):** Review checklist chất lượng. Đây là cơ hội cuối cùng để bắt lỗi trước khi nộp.

### 2. Phong cách coach

- **Đặt câu hỏi, không đưa ra đáp án:** Thay vì nói "Các bạn nên chọn khoảnh khắc Đặt lịch", hỏi "Trong 3 khoảnh khắc này, cái nào các bạn thấy có nhiều review kêu ca nhất?"
- **Cho xem mẫu, không viết hộ:** Cho xem journey map mẫu, nhưng yêu cầu nhóm tự vẽ lại cho khoảnh khắc của họ.
- **Tập trung vào mấu chốt:** Nếu thời gian còn < 2 giờ mà prototype chưa xong, gợi ý giảm scope (HTML tĩnh thay vì React, Figma mockup thay vì code).

### 3. Quản lý thời gian

- **Mốc 2 giờ:** Phải xong journey map + need statement.
- **Mốc 4 giờ:** Phải xong prototype (dù đơn giản).
- **Mốc 5:30:** Phải xong slides.
- **Mốc 5:45:** Review + submit.

Nếu nhóm chậm hơn mốc > 30 phút, CẮT GIẢM SCOPE ngay (ví dụ: Từ Next.js xuống HTML tĩnh, từ 10 slide xuống 8 slide).

### 4. Tâm lý nhóm

- **Nhóm hoảng loạn (giờ 3-4):** Thường là lúc prototype không chạy. → Trấn an: "Prototype không cần hoàn hảo, chỉ cần chứng minh ý tưởng. Dùng HTML tĩnh cũng được."
- **Nhóm tranh luận (giờ 0-1):** Thường là lúc chọn khoảnh khắc. → Đưa ra tiêu chí khách quan: "Cái nào có nhiều review 1-2 sao nhất?"
- **Nhóm mất động lực (giờ 5):** Gần xong rồi nhưng mệt. → Động viên: "Còn 1 tiếng nữa thôi, checklist đã xong 80% rồi."

---

## Tóm Tắt

| **Điều quan trọng nhất** | **Lý do** |
|---|---|
| Chọn đúng khoảnh khắc (có bằng chứng) | Nếu chọn sai, toàn bộ bài làm không có nền tảng |
| Journey map có điểm đau rõ ràng | Đây là cơ sở cho need statement và prototype |
| Prototype đơn giản nhưng chạy được | Không cần hoàn hảo, chỉ cần chứng minh ý tưởng |
| Test với người thật + ghi log | Bằng chứng rằng prototype có giá trị |
| Slides ≤10 slide | Đề bài bắt buộc, nếu > 10 slide = 0 điểm |

**Châm ngôn coach:**  
> "Done is better than perfect. Nhưng done phải có bằng chứng."

---

## Ghi Chú

File này được viết như một **meta-document** — vừa là deliverable của bài tập (07-coach-plan), vừa là tài liệu thực tế để coach nhóm K4 trong tương lai.
