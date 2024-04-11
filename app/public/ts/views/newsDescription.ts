const NEWS_MAX_LENGTH = 200;

function renderNewsDes(news: NewsItem) {
	const $title = document.querySelector(".news-main__des__title");
	const $main = document.querySelector(".news-main__des__main");
	const $more = document.querySelector(".news-main__des__more > a");

	if ($title instanceof HTMLElement) $title.innerText = news.title;
	if ($main instanceof HTMLElement) $main.innerText = sliceContent(news.content);
	if ($more instanceof HTMLAnchorElement) $more.href = news.url;
}

function sliceContent(content: string): string {
	if (content.length > NEWS_MAX_LENGTH) {
		const slicedContent = content.slice(0, NEWS_MAX_LENGTH) + "......";
		return slicedContent;
	}
	return content + "...";
}

export default renderNewsDes;
