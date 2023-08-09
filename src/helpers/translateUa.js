const translateUa = text => {
  switch (text) {
    case 'Номер не найден':
      return 'ТТН з даним номером не знайдено';
    default:
      return 'Не вірний текст';
  }
};

export default translateUa;
