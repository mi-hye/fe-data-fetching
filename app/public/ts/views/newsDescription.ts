function renderNewsDes(news: NewsItem) {
	const $title = document.querySelector(".news-main__des__title");
	const $main = document.querySelector(".news-main__des__main");

	if ($title instanceof HTMLElement) $title.innerText = news.title;
	if ($main instanceof HTMLElement) $main.innerText = news.content;
}

export default renderNewsDes;
