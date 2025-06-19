import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold tracking-tight">
              <span className="bg-sky-500 text-white px-4 py-2 rounded-2xl mr-4">
                С
              </span>
              <span className="bg-sky-500 text-white px-4 py-2 rounded-2xl mr-4">
                И
              </span>
              <span className="bg-sky-500 text-white px-4 py-2 rounded-2xl mr-4">
                Т
              </span>
              <span className="bg-sky-500 text-white px-4 py-2 rounded-2xl mr-4">
                И
              </span>
              <br />
              <span className="text-gray-900 mt-4 block">ДЕНТ</span>
            </h1>

            <p className="text-xl text-sky-600 font-medium max-w-2xl mx-auto leading-relaxed">
              Профессиональная зуботехническая лаборатория. Качественные протезы
              и ортодонтические конструкции.
            </p>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-sky-600">15+</div>
              <div className="text-sm text-gray-600">лет опыта</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-sky-600">1000+</div>
              <div className="text-sm text-gray-600">довольных клиентов</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-sky-600">24/7</div>
              <div className="text-sm text-gray-600">поддержка</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
