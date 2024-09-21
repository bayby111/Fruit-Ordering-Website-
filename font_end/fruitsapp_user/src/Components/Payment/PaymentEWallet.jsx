import React, { useState } from 'react';

const PaymentEWallet = () => {
    const [wallet, setWallet] = useState('MoMo'); // Giả định có 3 ví điện tử: MoMo, ZaloPay, PayPal

    return (
        <div>
            <h3 className="text-lg font-bold mb-2">Thanh toán bằng Ví điện tử</h3>
            <div className="mb-4">
                <label className="block mb-2">Chọn ví điện tử</label>
                <select className="w-full p-2 border rounded-lg" value={wallet} onChange={(e) => setWallet(e.target.value)}>
                    <option value="MoMo">MoMo</option>
                    <option value="ZaloPay">ZaloPay</option>
                    <option value="PayPal">PayPal</option>
                </select>
            </div>
        </div>
    );
};

export default PaymentEWallet;
