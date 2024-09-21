import React, { useState } from 'react';

const PaymentBankTransfer = () => {
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');

    return (
        <div>
            <h3 className="text-lg font-bold mb-2">Thanh toán bằng Chuyển khoản ngân hàng</h3>
            <div className="mb-4">
                <label className="block mb-2">Tên ngân hàng</label>
                <input type="text" className="w-full p-2 border rounded-lg" value={bankName} onChange={(e) => setBankName(e.target.value)} />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Số tài khoản</label>
                <input type="text" className="w-full p-2 border rounded-lg" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
            </div>
        </div>
    );
};

export default PaymentBankTransfer;
