import React from 'react';

function MainHeader () {
    return (
        <header className="fixed-bar-box-shadow">
            <div className="fixed-bar-wrap">
               <h1 className="carrot-logo">
                    <a href="https://www.daangn.com/">
                        <img className="fixed-logo" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/logo-basic-00b7e471b721ce9db8b0758c05a84684413c8aef1ad54caa0f3fcbe7328c947f.svg" alt="carrot-icon"/>
                    </a>
               </h1>
            <section className="fixed-bar-search">
                <div className="search-input-wrap">
                  <input type="text" className="fixed-search-input" placeholder="지역, 상품 등을 검색해 보세요."/>
                <button id="header-search-button">
                    <img className="fixed-search-icon" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/search-icon-db20a2e9e6b0fc922b44982d451cf1c967c86e8e8df270e71c300832a6f31f1a.svg" alt="search-button"/>
                </button>
                </div>
            </section>
            <section className="fixed-bar-download">
                <a id="header-download-button-ios" className="fixed-download-button" rel="noopener noreferrer" target="_blank" href="https://itunes.apple.com/kr/app/pangyojangteo/id1018769995?l=ko&ls=1&mt=8">
                    <img className="fixed-apple-store" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/apple-store-790f526e762ae58ec39274857ea3434959b7bd40fc23ec1f33a21983f3d024ff.svg" alt="apple-download"/>
                <div className="fixed-download-text">App Store</div>
                </a>
                <a id="header-download-button-android" className="fixed-download-button" rel="noopener noreferrer" target="_blank" href="https://play.google.com/store/apps/details?id=com.towneers.www">
                    <img className="fixed-google-play" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/google-play-3c1802269ac6bedde598de4f2885286c18492748e5b58bd358254b26ee61e008.svg" alt="Google Play"/>
                    <div className="fixed-download-text">Google Play</div>
                </a>
            </section>
            </div>
        </header>
    );
};

export default MainHeader;