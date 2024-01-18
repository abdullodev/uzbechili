export const REQUEST_STATUS = {
  initial: "INITIAL",
  success: "SUCCESS",
  failed: "FAILED",
  loading: "LOADING",
} as const;

export const ERROR_MESSAGES: any = {
  uz: {
    10002: "Ruxsat yo'q",
    10004: "Qandaydir xatolik bor",
    10903: "Har xil do'konlardan buyurtma qilib bo'lmaydi",
    10904: "Do'kon ish vaqti emas",
    11301: "Bu karta mavjud",
    13002: "Hodimlari mavjud",
    13003: "Haydovchilari mavjud",
    13004: "Buyurtmalari mavjud",
  },
  kz: {
    10002: "Рухсат жоқ",
    10004: "Қандайдыр хатолик бар",
    10903: "Дүкеннен тапсырыс берілмейді",
    10904: "Дүкенді жұмыс уақыты емес",
    11301: "Бұл картада бар",
    13002: "Жұмысшылар бар",
    13003: "Қауіпсіздікшілер бар",
    13004: "Тапсырыстар бар",
  },
  ru: {
    10002: "Нет разрешения",
    10004: "Есть какая-то ошибка",
    10903: "Невозможно заказать в разных магазинах.",
    10904: "Магазин не работает",
    11301: "Эта карта доступна",
    13002: "Есть сотрудники",
    13003: "Драйверы доступны",
    13004: "Заказы доступны",
  },
  en: {
    10002: "Нет разрешения",
    10004: "There is some error",
    10903: "Store is not open hours",
    10904: "Do'kon ish vaqti emas",
    11301: "Card is already exist",
    13002: "Есть сотрудники",
    13003: "Драйверы доступны",
    13004: "Заказы доступны",
  },
};
