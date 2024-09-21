import { Link } from 'react-router-dom'; // Sử dụng Link để điều hướng nếu bạn dùng react-router

const MiniCart = ({ cartItems, onRemoveItem }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg p-4 rounded-lg z-50">
      <h2 className="text-xl font-bold mb-4">Giỏ hàng</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Giỏ hàng của bạn trống</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center mb-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg mr-4" />
                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-600 text-sm">Size {item.size}</p>
                  <p className="text-sm">{item.price.toLocaleString()}₫ x {item.quantity}</p>
                </div>
                <button className="text-red-500" onClick={() => onRemoveItem(item.id)}>
                  X
                </button>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center mt-4">
            <p className="font-semibold text-lg">Tổng tiền tạm tính:</p>
            <p className="text-lg font-bold">{calculateTotal().toLocaleString()}₫</p>
          </div>

          {/* Button Tiến hành thanh toán */}
          <button className="w-full bg-orange-500 text-white py-2 mt-4 rounded-lg hover:bg-orange-600">
            Tiến hành thanh toán
          </button>

          {/* Button Xem giỏ hàng */}
          <Link to="/cart-details">
            <button className="w-full bg-gray-300 text-black py-2 mt-4 rounded-lg hover:bg-gray-400">
              Xem giỏ hàng
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MiniCart;
