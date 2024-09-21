import React, { useState } from 'react';

const PaymentCreditCard = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    return (
        <div>
            <h3 className="text-lg font-bold mb-2">Thanh toán bằng Thẻ tín dụng/ghi nợ</h3>
            <div className="mb-4">
                <label className="block mb-2">Số thẻ</label>
                <input type="text" className="w-full p-2 border rounded-lg" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Tên chủ thẻ</label>
                <input type="text" className="w-full p-2 border rounded-lg" value={cardHolder} onChange={(e) => setCardHolder(e.target.value)} />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Ngày hết hạn</label>
                <input type="text" className="w-full p-2 border rounded-lg" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
            </div>
            <div className="mb-4">
                <label className="block mb-2">CVV</label>
                <input type="text" className="w-full p-2 border rounded-lg" value={cvv} onChange={(e) => setCvv(e.target.value)} />
            </div>
        </div>
    );
};

export default PaymentCreditCard;
