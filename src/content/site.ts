export const site = {
  name: 'Natanael Albert',
  email: 'albertnatanael99@gmail.com',
  phone: '+62 823 3446 6710',
  showPhone: false, // ubah ke true kalau ingin nomor HP tampil
  linkedin: 'https://www.linkedin.com/in/natanael-albert', 
  github: 'https://github.com/NatanaelAlbert22'    
};

// Tautan yang masih "[ISI]" otomatis disembunyikan sampai kamu isi
export const isFilled = (value: string) => !value.includes('[ISI]');

export const cvPath = (locale: string) => `/cv/cv-${locale}.pdf`;