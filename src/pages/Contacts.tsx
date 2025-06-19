import Navigation from "@/components/Navigation";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">Контакты</h1>
            <p className="text-xl text-sky-600">
              Свяжитесь с нами для консультации
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Адрес</h3>
                    <p className="text-gray-700">
                      г. Москва, ул. Примерная, д. 123
                      <br />
                      БЦ "Медицинский", офис 456
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Телефон</h3>
                    <p className="text-gray-700">
                      +7 (495) 123-45-67
                      <br />
                      +7 (925) 987-65-43
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-700">
                      info@cityydent.ru
                      <br />
                      orders@citydent.ru
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Режим работы
                    </h3>
                    <p className="text-gray-700">
                      Пн-Пт: 9:00 - 18:00
                      <br />
                      Сб: 10:00 - 16:00
                      <br />
                      Вс: выходной
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-sky-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-sky-800 mb-6">
                Быстрая связь
              </h3>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 rounded-lg border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full px-4 py-3 rounded-lg border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Ваше сообщение"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-sky-500 text-white py-3 rounded-lg font-medium hover:bg-sky-600 transition-colors"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contacts;
