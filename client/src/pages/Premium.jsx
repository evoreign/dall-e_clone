import React from 'react';

const Premium = () => {
    // Define an array of objects representing different subscription packages
    const subscriptionPackages = [
        {
            name: "Basic",
            perks: ["Access to Premium Content", "Something"],
            price: 10,
        },
        {
            name: "Premium",
            perks: ["Access to Premium Content", "Something"],
            price: 20,
            bestValue: true,
        },
        {
            name: "Pro",
            perks: ["Access to Premium Content", "Something"],
            price: 30,
        },
    ];

    // Placeholder URL for the Buy button
    const placeholderButtonUrl = "https://example.com";

    return (
        <section className="max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 pt-20">
            {subscriptionPackages.map((packageItem, index) => (
                <div
                    key={index}
                    className={`bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform ${
                        packageItem.bestValue ? 'border-4 border-blue-500' : ''
                    }`}
                >
                    {packageItem.bestValue && (
                        <div className="absolute top-0 left-0 bg-blue-500 text-white py-1 px-4 rounded-tl-lg rounded-br-lg">
                            Best Value
                        </div>
                    )}
                    <h2 className="font-semibold text-xl mb-4">{packageItem.name} Subscription</h2>
                    <ul className="list-disc pl-6">
                        {packageItem.perks.map((perk, i) => (
                            <li key={i} className="mb-2">
                                {perk}
                            </li>
                        ))}
                    </ul>
                    <p className="text-gray-600 mt-4">${packageItem.price} per month</p>
                    <a
                        href={placeholderButtonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full text-center"
                    >
                        Buy
                    </a>
                </div>
            ))}
        </section>
    );
};

export default Premium;
