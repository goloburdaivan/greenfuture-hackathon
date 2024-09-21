import React from 'react';

const FAQ = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                <h1 className="text-3xl font-bold mb-6 text-center">Часті запитання (FAQ)</h1>

                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Як користуватися нашим сайтом?</h2>
                    <p className="mt-2">
                        Наш сайт призначений для допомоги школярам у розумінні важливості економії електропостачання. Ось кілька основних функцій, які ви можете знайти:
                    </p>
                </div>

                <div className="mb-4">
                    <h3 className="text-lg font-semibold">1. Карта школи</h3>
                    <p className="mt-2">
                        На нашій інтерактивній карті ви можете побачити, де розташовані різні зони вашої школи. Це допоможе вам зорієнтуватися та зрозуміти, як використовувати електропостачання ефективно.
                    </p>
                </div>

                <div className="mb-4">
                    <h3 className="text-lg font-semibold">2. Збереження електропостачання</h3>
                    <p className="mt-2">
                        Ми пропонуємо корисні поради щодо економії електроенергії. Ви дізнаєтеся, які прості зміни можуть зменшити споживання енергії, не знижуючи комфорт.
                    </p>
                </div>

                <div className="mb-4">
                    <h3 className="text-lg font-semibold">3. Гайди з економії</h3>
                    <p className="mt-2">
                        У нас є різноманітні гайди, які пояснюють, як ви можете зберегти енергію в повсякденному житті. Ці матеріали допоможуть вам стати більш свідомими споживачами електроенергії.
                    </p>
                </div>

                <div className="mb-4">
                    <h3 className="text-lg font-semibold">4. Нагороди у вигляді монет</h3>
                    <p className="mt-2">
                        За виконання завдань і дотримання порад ви можете отримувати монети. Ці монети можна використати в нашому магазині для отримання різних бонусів та призів.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
