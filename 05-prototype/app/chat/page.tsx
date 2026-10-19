'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const MOCK_AI_RESPONSES = {
  initial: {
    text: 'Xin chào! Tôi có thể giúp bạn tìm chuyên khoa phù hợp. Bạn đang gặp vấn đề gì?',
    disclaimer: true,
  },
  'đau bụng': {
    text: 'Dựa trên triệu chứng bạn mô tả, tôi gợi ý chuyên khoa Tiêu hóa. Bạn có muốn xem lịch khám không?',
    specialty: 'Tiêu hóa',
  },
  'ho': {
    text: 'Dựa trên triệu chứng bạn mô tả, tôi gợi ý chuyên khoa Hô hấp. Bạn có muốn xem lịch khám không?',
    specialty: 'Hô hấp',
  },
  'đau đầu': {
    text: 'Dựa trên triệu chứng bạn mô tả, tôi gợi ý chuyên khoa Thần kinh. Bạn có muốn xem lịch khám không?',
    specialty: 'Thần kinh',
  },
  default: {
    text: 'Dựa trên thông tin bạn cung cấp, tôi gợi ý chuyên khoa Nội tổng quát. Bạn có muốn xem lịch khám không?',
    specialty: 'Nội tổng quát',
  },
};

export default function ChatPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'ai'; content: string }>>([
    { role: 'ai', content: MOCK_AI_RESPONSES.initial.text },
  ]);
  const [input, setInput] = useState('');
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [suggestedSpecialty, setSuggestedSpecialty] = useState<string | null>(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setInput('');

    setTimeout(() => {
      const lowerInput = userMessage.toLowerCase();
      let response = MOCK_AI_RESPONSES.default;

      if (lowerInput.includes('đau bụng') || lowerInput.includes('tiêu hóa')) {
        response = MOCK_AI_RESPONSES['đau bụng'];
      } else if (lowerInput.includes('ho') || lowerInput.includes('khó thở')) {
        response = MOCK_AI_RESPONSES['ho'];
      } else if (lowerInput.includes('đau đầu') || lowerInput.includes('đầu')) {
        response = MOCK_AI_RESPONSES['đau đầu'];
      }

      setMessages((prev) => [...prev, { role: 'ai', content: response.text }]);
      if (response.specialty) {
        setSuggestedSpecialty(response.specialty);
      }
    }, 800);
  };

  const handleViewSlots = () => {
    if (suggestedSpecialty) {
      router.push(`/slots?specialty=${encodeURIComponent(suggestedSpecialty)}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC] flex flex-col">
      <header className="sticky top-0 bg-[#1E293B] border-b border-[#334155] px-4 py-3 flex items-center justify-between z-10">
        <button onClick={() => router.back()} className="text-[#94A3B8] hover:text-[#F8FAFC]">
          ← Quay lại
        </button>
        <h1 className="font-semibold">Tư vấn chuyên khoa</h1>
        <div className="w-16" />
      </header>

      {showDisclaimer && (
        <div className="bg-[#1E293B] border-b border-[#334155] px-4 py-3">
          <div className="flex items-start gap-2">
            <span className="text-[#F97316] text-xl shrink-0">⚠️</span>
            <div className="text-sm text-[#94A3B8] leading-relaxed">
              <strong className="text-[#F8FAFC]">Lưu ý quan trọng:</strong> Đây không phải lời khuyên y khoa.
              AI chỉ giúp điều hướng chuyên khoa dựa trên triệu chứng bạn mô tả.
              Bác sĩ sẽ thăm khám và chẩn đoán chính xác.
            </div>
            <button
              onClick={() => setShowDisclaimer(false)}
              className="text-[#64748B] hover:text-[#F8FAFC] shrink-0 ml-2"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[80%] rounded-lg px-4 py-3 ${
                msg.role === 'user'
                  ? 'bg-[#14B8A6] text-white'
                  : 'bg-[#1E293B] text-[#F8FAFC] border border-[#334155]'
              }`}
            >
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
            </div>
          </div>
        ))}
      </div>

      {suggestedSpecialty && (
        <div className="px-4 py-3 bg-[#1E293B] border-t border-[#334155]">
          <button
            onClick={handleViewSlots}
            className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Xem lịch khám {suggestedSpecialty}
          </button>
        </div>
      )}

      <div className="sticky bottom-0 bg-[#1E293B] border-t border-[#334155] px-4 py-3">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Mô tả triệu chứng của bạn..."
            className="flex-1 bg-[#0F172A] border border-[#334155] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#14B8A6] transition-colors"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="bg-[#14B8A6] hover:bg-[#0D9488] disabled:bg-[#334155] disabled:text-[#64748B] text-white font-medium px-6 rounded-lg transition-colors"
          >
            Gửi
          </button>
        </div>
      </div>
    </div>
  );
}
