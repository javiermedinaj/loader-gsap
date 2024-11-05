import React, { useEffect } from 'react';
import './Loader.css';
import gsap from 'gsap';

const Loader = () => {
    useEffect(() => {
        const gallery = document.querySelector('.loader_gallery');
        const galleryItem = document.querySelectorAll('.loader_gallery_figure');
        const circleTop = document.querySelector('.loader_circle-top');
        const circleBottom = document.querySelector('.loader_circle-bottom');

        gsap.set(gallery, { scale: 0.75 });
        gsap.set([circleBottom, circleTop], { yPercent: 0 });

        const galleryItemCentered = galleryItem.length / 2 - 1;
        const centeredItem = galleryItem[galleryItemCentered.toFixed(0)];

        gsap.timeline({ defaults: { duration: 1.8, ease: 'expo.inOut' } })
            .to(gallery, { scale: 1 })
            .to(centeredItem, { width: '100vw' }, 0)
            .to(circleTop, { yPercent: -100 }, 0.2)
            .to(circleBottom, { yPercent: 100 }, 0.2);
    }, []);

    return (
        <div className="loader">
            <div className="loader_wrapper">
                <div className="loader_circle loader_circle-top"></div>
                <div className="loader_circle loader_circle-bottom"></div>
                <div class="loader_gallery">
                    <div class="loader_gallery_figure">
                        <img
                            src="https://assets.lummi.ai/assets/QmWFAzgnA4nPPhJbfpuzuYfRppeR9LkcBduspJ1JqhEgpY?auto=format&w=1500"
                            alt=""
                            class="loader_gallery_image"
                        />
                    </div>

                    <div class="loader_gallery_figure">
                        <img
                            src="https://assets.lummi.ai/assets/QmPGzNV7RHjaSwmPMM6gMCq9LP85uz2rdnADbyV72FCQwi?auto=format&w=1500"
                            alt=""
                            class="loader_gallery_image"
                        />
                    </div>

                    <div class="loader_gallery_figure">
                        <img
                            src="https://assets.lummi.ai/assets/QmZXNt8T7nYwhDmnQGx9mh9VKSseEBBn22uJ59Nyve2PHP?auto=format&w=1500"
                            alt=""
                            class="loader_gallery_image"
                        />
                    </div>

                    <div class="loader_gallery_figure">
                        <img
                            src="https://assets.lummi.ai/assets/QmWuGk36GjvoG3BYJ8U3GxmkA3Pv1sFA2Mfbf9AbEJsjmb?auto=format&w=1500"
                            alt=""
                            class="loader_gallery_image"
                        />
                    </div>
                    {/* //imagen que queda principal */}
                    <div class="loader_gallery_figure">
                        <img
                            src="https://assets.lummi.ai/assets/QmdgCNQTnzWBX2Ym55cvkPQjXrGVTjAwJzbPV3WVGw7tUf?auto=format&w=1500"
                            alt=""
                            class="loader_gallery_image"
                        />
                    </div>

                    <div class="loader_gallery_figure">
                        <img
                            src="https://assets.lummi.ai/assets/QmX1NaN3o5sPFEU3YjkaccG3F7Yg9HzJbKCATSondTRw6X?auto=format&w=1500"
                            alt=""
                            class="loader_gallery_image"
                        />
                    </div>

                    <div class="loader_gallery_figure">
                        <img
                            src="https://assets.lummi.ai/assets/QmeEfr79Wp8NYsEP4Uz7uCWxcR5rx4t8QCWGkwnpKSNZ8o?auto=format&w=1500"
                            alt=""
                            class="loader_gallery_image"
                        />
                    </div>

                    <div class="loader_gallery_figure">
                        <img
                            src="https://assets.lummi.ai/assets/QmdRNbnR7P1pGAo8crCpuYp7WoY9yVyMX84BWH7N3dvWaB?auto=format&w=1500"
                            alt=""
                            class="loader_gallery_image"
                        />
                    </div>

                    <div class="loader_gallery_figure">
                        <img
                            src="https://assets.lummi.ai/assets/QmaXMhaCPAg1ZUMwDRMCpCWeHP4Nr3Gy593W4kRSgEKWAJ?auto=format&w=1500"
                            alt=""
                            class="loader_gallery_image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;