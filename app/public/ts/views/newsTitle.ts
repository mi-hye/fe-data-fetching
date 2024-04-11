import fetchNews from "../apis/news.js";

async function renderTitle() {
	const $newsWrap = document.querySelector(".news-main__title-list-wrap");
	const newsList = await fetchNews();
	console.log("ts", newsList);
	console.log($newsWrap);

	if ($newsWrap) {
		$newsWrap.innerHTML = newsList?.reduce((prev: string, curr: NewsItem) => {
			prev += `<li>${curr.title}</li>`;
			return prev;
		}, "") as string;
	}
}

export { renderTitle };
