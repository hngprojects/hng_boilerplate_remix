export interface Detail {
  id: number;
  label: string;
  value: string;
}

export const invoiceDetails: Detail[] = [
  { id: 1, label: "Invoice Number", value: "#EJ78465" },
  { id: 2, label: "Date of Issue", value: "July 17, 2024" },
  { id: 3, label: "Due Date", value: "July 19, 2024" },
];

export const paymentDetails: Detail[] = [
  { id: 1, label: "Amount", value: "$352" },
  { id: 2, label: "Payment Method", value: "Bank" },
  { id: 3, label: "Bank Name", value: " United Bank of Africa" },
  { id: 4, label: "Account Number", value: "2108689490" },
  { id: 5, label: "Account Name", value: "John Doe" },
];

export interface OrderDetail {
  id: number;
  label: string;
  value: string;
  amt: string;
}

export const orderSummary: OrderDetail[] = [
  { id: 1, label: "Item", value: "5", amt: "$450.00" },
  { id: 2, label: "Item", value: "5", amt: "$50.00" },
  { id: 3, label: "VAT", value: "10%", amt: "$500.00" },
  { id: 4, label: "TOTAL", value: "100%", amt: "$500.00" },
];
