import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">О нас</h1>
            <p className="text-xl text-sky-600">
              Профессионалы в области зуботехнических услуг
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                Наша миссия
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Мы создаем высококачественные зубные протезы и ортодонтические
                конструкции, используя современные технологии и материалы. Наша
                цель — помочь стоматологам предоставлять пациентам наилучшее
                лечение.
              </p>
            </div>

            <div className="bg-sky-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-sky-800 mb-4">
                Наши преимущества
              </h3>
              <ul className="space-y-3 text-sky-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                  Собственная лаборатория с современным оборудованием
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                  Опытная команда зубных техников
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                  Сертифицированные материалы премиум-класса
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                  Быстрые сроки изготовления
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Наши услуги
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-sky-500 rounded-full mx-auto mb-3"></div>
                <h4 className="font-semibold text-gray-900">Коронки</h4>
                <p className="text-sm text-gray-600">
                  Металлокерамические и безметалловые
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-sky-500 rounded-full mx-auto mb-3"></div>
                <h4 className="font-semibold text-gray-900">Протезы</h4>
                <p className="text-sm text-gray-600">
                  Съемные и несъемные конструкции
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-sky-500 rounded-full mx-auto mb-3"></div>
                <h4 className="font-semibold text-gray-900">Ортодонтия</h4>
                <p className="text-sm text-gray-600">Брекеты и элайнеры</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
