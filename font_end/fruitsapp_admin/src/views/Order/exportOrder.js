import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';

// Hàm export PDF
export const exportToPDF = (orders) => {
    const doc = new jsPDF();
    const tableColumn = ["Mã Đơn Hàng", "Tên Khách Hàng", "Ngày Đặt Hàng", "Số Lượng Sản Phẩm", "Tổng Giá Trị", "Trạng Thái"];
    const tableRows = [];

    orders.forEach(order => {
        const orderData = [
            order.id,
            order.customerName,
            order.orderDate,
            order.totalItems,
            order.totalPrice,
            order.status
        ];
        tableRows.push(orderData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.text("Báo cáo đơn hàng", 14, 15);
    doc.save('orders.pdf');
};

// Hàm export Excel
export const exportToExcel = (orders) => {
    const worksheet = XLSX.utils.json_to_sheet(orders);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Orders');
    XLSX.writeFile(workbook, 'orders.xlsx');
};
