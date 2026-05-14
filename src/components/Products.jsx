import React from 'react';
import './Products.css';

const products = [
    {
        id: 1,
        tag: 'Illustration',
        title: 'Cosmic Bloom',
        image: '/loader-assets/QmWFAzgnA4nPPhJbfpuzuYfRppeR9LkcBduspJ1JqhEgpY.jpg',
    },
    {
        id: 2,
        tag: '3D Render',
        title: 'Neon Drift',
        image: '/loader-assets/QmPGzNV7RHjaSwmPMM6gMCq9LP85uz2rdnADbyV72FCQwi.jpg',
    },
    {
        id: 3,
        tag: 'Photo',
        title: 'Liquid Echo',
        image: '/loader-assets/QmZXNt8T7nYwhDmnQGx9mh9VKSseEBBn22uJ59Nyve2PHP.jpg',
    },
    {
        id: 4,
        tag: 'Illustration',
        title: 'Primal Pulse',
        image: '/loader-assets/QmWuGk36GjvoG3BYJ8U3GxmkA3Pv1sFA2Mfbf9AbEJsjmb.jpg',
    },
    {
        id: 5,
        tag: '3D Render',
        title: 'Auric Veil',
        image: '/loader-assets/QmdgCNQTnzWBX2Ym55cvkPQjXrGVTjAwJzbPV3WVGw7tUf.jpg',
    },
    {
        id: 6,
        tag: 'Photo',
        title: 'Solar Fracture',
        image: '/loader-assets/QmX1NaN3o5sPFEU3YjkaccG3F7Yg9HzJbKCATSondTRw6X.jpg',
    },
];

const Products = () => {
    return (
        <section className="products" id="products">
            <div className="products_wrapper">
                <div className="products_header">
                    <h2 className="products_title">
                        <span className="products_title_line">Selected</span>
                        <span className="products_title_line products_title_accent">Works</span>
                    </h2>
                    <p className="products_subtitle">
                        A curated collection of illustrations, 3D renders, and photography crafted for brands that demand the extraordinary.
                    </p>
                </div>
                <div className="products_grid">
                    {products.map((product) => (
                        <article key={product.id} className="product_card">
                            <div className="product_card_image-wrapper">
                                <img src={product.image} alt={product.title} className="product_card_image" />
                                <div className="product_card_overlay"></div>
                            </div>
                            <div className="product_card_content">
                                <div className="product_card_meta">
                                    <span className="product_card_tag">{product.tag}</span>
                                    <div className="product_card_arrow">
                                        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7"/>
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="product_card_title">{product.title}</h3>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
