import React from 'react';

const FAQ = () => {
    const faq = [
        {
            Question: "Why use SellMyMobile.com?"
            , Answer: "As the UK’s first mobile comparison site, it's our job to find the best offers for your old tech. And if you find a better deal within 24 hours, we’ll refund you the difference. By pulling in quotes from as many UK recyclers as possible, we let you see all the available offers on your old phone side by side in our handy comparison table, helping you find the best one. We carefully vet the recyclers we feature on our site too. That means you'll only see quotes from companies we trust. Whether you're comparing prices on an old iPhone, Samsung Galaxy, Nokia feature phone, tablet, or other gadget, we're here to help. We’ll get you the best price and ensure your old device gets a new lease of life or is disposed of safely and responsibly."
        },
        {
            Question: "What is mobile phone recycling?"
            , Answer: "Mobile phone recycling refers to the process to trading in your phone, so it can either be recycled for parts or refurbished for resale. Even older phones contain valuable parts and materials that can be reused. Recycling companies will extract these often-toxic materials in a way that’s safe and environmentally friendly. Meanwhile, by trading in your phone to be recycled you’ll get some cash to spend while doing your bit for the environment."
        },
        {
            Question: "Can I trust mobile recyclers?"
            , Answer: "At SellMyMobile, we pride ourselves on the fact that we only work with resellers that we trust. In fact, every company we work with is vetted, which means we only show resellers that will offer you a reliable service, treat you fairly and deal with your phone properly."
        }
    ]
    return (
        <div>
            <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-bold'> Frequently asked questions (FAQs)</h1>

        </div>
    );
};

export default FAQ;