import React from 'react';

function MainTitle () {
    return (
        <section id="header-top">
            <div id="header-title-wrap">
                <h1 id="header-title">
                    우리 동네 중고 직거래 마켓
                </h1>
                <p id="header-title-desc">
                    동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.
                </p>
                {/*<img id="header-image" alt="header-image" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/phone-ee2960c1cbf1e932ac291ad59eacc55ef6dc3cab3e9e4ea4284c4e0256bb9f4c.png"/>*/}
                <section id="top-keywords">
                    <img id="header-image" alt="header-image" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/phone-ee2960c1cbf1e932ac291ad59eacc55ef6dc3cab3e9e4ea4284c4e0256bb9f4c.png"/>
                    <article id="top-keywords-article">
                    <h3 id="top-keywords-title">
                        <a id="top-keywords-link" href="#">
                            <span id="top-keywords-title-text">오늘의 인기 검색어</span>
                            <img className="right-arrow" alt="오늘의 인기 검색어"
                                 src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/icon-right-arrow-24a4ae5554b39aa379d82d49324861cf1be86129f3e540e302771ae84b89400b.svg"/>
                        </a>
                    </h3>
                    <ul id="top-keywords-list">
                        <li>
                            <a href="#" className="top-keywords-list-contents">
                                <p className="list-number">1</p>
                                <p className="keyword-text">자전거</p>
                                <p className="rank">
                                    <span className="changed_rank">-</span>
                                </p>
                            </a></li>
                        <li>
                            <a href="#" className="top-keywords-list-contents">
                                <p className="list-number">2</p>
                                <p className="keyword-text">캠핑</p>
                                <p className="rank">
                                    <span className="changed_rank">-</span>
                                </p>
                            </a></li>
                        <li >
                            <a href="#"className="top-keywords-list-contents">
                                <p className="list-number">3</p>
                                <p className="keyword-text">냉장고</p>
                                <p className="rank">
                                    <span className="changed_rank">-</span>
                                </p>
                            </a></li>
                        <li>
                            <a href="#" className="top-keywords-list-contents">
                                <p className="list-number">4</p>
                                <p className="keyword-text">의자</p>
                                <p className="rank">
                                    <span className="changed_rank">-</span>
                                </p>
                            </a></li>
                        <li>
                            <a href="#" className="top-keywords-list-contents">
                                <p className="list-number">5</p>
                                <p className="keyword-text">에어컨</p>
                                <p className="rank">
                                    <span className="down">▼</span>
                                    <span className="changed_rank">1</span>
                                </p>
                            </a></li>
                        <li>
                            <a href="#" className="top-keywords-list-contents">
                                <p className="list-number">6</p>
                                <p className="keyword-text">노트북</p>
                                <p className="rank">
                                    <span className="up">▲</span>
                                    <span className="changed_rank">1</span>
                                </p>
                            </a></li>
                        <li>
                            <a href="#" className="top-keywords-list-contents">
                                <p className="list-number">7</p>
                                <p className="keyword-text">선풍기</p>
                                <p className="rank">
                                    <span className="down">▼</span>
                                    <span className="changed_rank">1</span>
                                </p>
                            </a></li>
                    </ul>
                    </article>
                </section>
            </div>
        </section>

    );
};

export default MainTitle;