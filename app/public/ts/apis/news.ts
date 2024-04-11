const url: string = "http://localhost:3000/news";

async function fetchTotalNews(): Promise<NewsItem[] | undefined> {
	try {
		const res = await fetch(url);
		const news = await res.json();
		return news;
	} catch (error) {
		console.log("뉴스를 불러오지 못했습니다");
	}
}

async function fetchSingleNews(api: string) {
	const res = await fetch(api);
	const newsDetail = await res.json();
	console.log(newsDetail);
}

export { fetchTotalNews, fetchSingleNews };
