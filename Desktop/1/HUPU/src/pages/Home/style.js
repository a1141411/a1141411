import styled from "styled-components";
export const Wrapper = styled.div`
.main {
    margin-top: 68px;
    margin-bottom: 38px;
}
.news_home-news__iRNCq {
    width: 100%;
    box-sizing: border-box;
    background: var(--bg);
    padding: 0 0 0 16px;
    
}
    .news-item {
    position: relative;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 12px 0;
    border-bottom: 1px solid var(--line);
    font-family: PingFangSC-Regular,PingFang SC;
    color: var(--primary_text);
}
.news-item-info {
    flex: 1 1;
    display: flex;
    flex-direction: column;
}
.news-item-info-title {
    font-size: var(--hupu_font_size_title2);
    line-height: 24px;
    display: -webkit-box;
    height: 48px;
    margin-bottom: 8px;
    overflow: hidden;
    color: var(--primary_text);
    font-weight: 400;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.news-item-info-basic {
    font-size: var(--hupu_font_size_callout);
    line-height: 17px;
    justify-content: space-between;
    color: var(--secondary_text);
    font-weight: 400;
    height: 17px;
}
.news-item-info-basic, .news-item-info-basic span {
    display: flex;
    align-items: center;
}
.news-item-info-basic span .mdigital {
    display: inline-flex;
    align-items: center;
    margin-right: 8px;
    font-family: hupufont-Regular;
}
.news-item-info-basic span .mdigital img {
    width: 15px;
    height: 15px;
    margin-right: 2px;
}
.news-item-info-basic .news-topic-m {
    color: var(--tertiary_text);
}
.news-item .news-img {
    width: 109px;
    height: 73px;
    margin-left: 8px;
    position: relative;
}
.news-item .news-img .replace-img {
    width: 109px;
    height: 73px;
    margin: 0;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 2px;
    font-size: 16px;
}
`