import PaymentBankTransfer from 'Components/Payment/PaymentBankTransfer';
import PaymentCOD from 'Components/Payment/PaymentCOD';
import PaymentCreditCard from 'Components/Payment/PaymentCreditCard';
import PaymentEWallet from 'Components/Payment/PaymentEWallet';
import React from 'react';

const PaymentInfo = ({ calculateSubtotal, calculateTotal, shippingFee, paymentMethod, setPaymentMethod, agreeTerms, setAgreeTerms }) => {
    const renderPaymentMethod = () => {
        switch (paymentMethod) {
            case 'COD': return <PaymentCOD />;
            case 'credit_card': return <PaymentCreditCard/>;
            case 'e_wallet': return <PaymentEWallet />;
            case 'bank_transfer': return <PaymentBankTransfer/>;
            default: return null;
        }
    }
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg mt-6">
            <h2 className="text-xl font-bold mb-4">Thông tin thanh toán</h2>
            <div className="flex justify-between mb-2">
                <p>Tổng giá sản phẩm:</p>
                <p>{calculateSubtotal().toLocaleString()}₫</p>
            </div>
            <div className="flex justify-between mb-2">
                <p>Phí vận chuyển:</p>
                <p>{shippingFee.toLocaleString()}₫</p>
            </div>
            <div className="flex justify-between mb-2">
                <p>Tổng tiền thanh toán:</p>
                <p>{calculateTotal().toLocaleString()}₫</p>
            </div>

            {/* method thanh toán */}
            <div className="mb-4">
                <label className="block mb-2">Phương thức thanh toán</label>
                <select className="w-full p-2 border rounded-lg" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                    <option value="COD">Thanh toán khi nhận hàng (COD)</option>
                    <option value="credit_card">Thẻ tín dụng/ghi nợ</option>
                    <option value="e_wallet">Ví điện tử (MoMo, ZaloPay, PayPal)</option>
                    <option value="bank_transfer">Chuyển khoản ngân hàng</option>
                </select>
            </div>
            {renderPaymentMethod()}
            {/* Điều khoản */}
            <div className="mb-4">
                <label className="flex items-center">
                    <input type="checkbox" className="mr-2" checked={agreeTerms} onChange={() => setAgreeTerms(!agreeTerms)} />
                    Tôi đồng ý với điều khoản và điều kiện
                </label>
            </div>

            <button className={`w-full py-2 rounded-lg ${agreeTerms ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`} disabled={!agreeTerms}>
                Xác nhận đặt hàng
            </button>
        </div>
    );
};

export default PaymentInfo;
