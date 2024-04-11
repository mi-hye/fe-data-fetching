import { fetchTotalNews, fetchSingleNews } from "../apis/news.js";

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

function onClickNewsTitle(render: Function) {
	const $newsWrap = document.querySelector(".news-main__title-list-wrap") as HTMLElement;
	$newsWrap.addEventListener("click", (e) => {
		handleClickNewsTitle(e, render);
	});
}

async function handleClickNewsTitle(e: MouseEvent, render: Function) {
	e.preventDefault();
	const $target = e.target as HTMLAnchorElement;
	if ($target.tagName === "A") {
		const id: string = $target.dataset.id ?? "";
		const news = await fetchSingleNews(id);
		if (news) render(news);
	}
}

export { renderTitle, onClickNewsTitle };
