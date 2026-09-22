export const CONTACT = {
  phone: '+263 785 851 950',
  phoneRaw: '263785851950',
  email: 'hello@prospira-edu.co.zw',
  gmail: 'prospiraedu@gmail.com',
  address: 'Harare, Zimbabwe',
  whatsappUrl: (message: string) =>
    `https://wa.me/263785851950?text=${encodeURIComponent(message)}`,
} as const