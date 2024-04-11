import { fetchTotalNews, fetchSingleNews } from "../apis/news.js";

const DELAY = 2000;

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

	const firstLink = $newsWrap.querySelector("a") as HTMLElement;
	firstLink.click();
}

async function handleClickNewsTitle(e: MouseEvent, render: Function) {
	e.preventDefault();
	const $target = e.target as HTMLAnchorElement;
	if ($target.tagName === "A") {
		const id: string = $target.dataset.id ?? "";
		const news = await fetchSingleNews(id);
		await delay();
		if (news) render(news);
	}
}

function delay() {
	const $newsWrap = document.querySelector(".news") as HTMLElement;
	const $loading = document.querySelector(".loading") as HTMLElement;

	$newsWrap.classList.add("blur");
	$loading.style.display = "block";

	return new Promise<void>((resolve) => {
		setTimeout(resolve, DELAY);
	}).then(() => {
		$newsWrap.classList.remove("blur");
		$loading.style.display = "none";
	});
}

export { renderTitle, onClickNewsTitle };
