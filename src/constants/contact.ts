export const CONTACT = {
  phone: '+263 785 851 954',
  phoneRaw: '263785851954',
  email: 'hello@prospira-edu.co.zw',
  address: 'Harare, Zimbabwe',
  whatsappUrl: (message: string) => 
    `https://wa.me/263785851954?text=${encodeURIComponent(message)}`,
} as const