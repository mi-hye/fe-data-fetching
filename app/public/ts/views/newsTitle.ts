import { fetchTotalNews, fetchSingleNews } from "../apis/news.js";
import renderNewsDes from "./newsDescription.js";

async function renderTitle() {
	const $newsWrap = document.querySelector(".news-main__title-list-wrap") as HTMLElement;
	const newsList = await fetchTotalNews();

	if ($newsWrap) {
		$newsWrap.innerHTML = newsList?.reduce((prev: string, curr: NewsItem) => {
			prev += `<li><a data-id=${curr.id}>${curr.title}</a></li>`;
			return prev;
		}, "") as string;
	}
}

function onClickNewsTitle() {
	const $newsWrap = document.querySelector(".news-main__title-list-wrap") as HTMLElement;
	$newsWrap.addEventListener("click", handleClickNewsTitle);
}

async function handleClickNewsTitle(e: MouseEvent) {
	e.preventDefault();
	const $target = e.target as HTMLAnchorElement;
	if ($target.tagName === "A") {
		const id: string = $target.dataset.id ?? "";
		const news = await fetchSingleNews(id);
		if (news) renderNewsDes(news);
	}
}

export { renderTitle, onClickNewsTitle };
