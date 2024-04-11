let timer: number;

function onClickRefresh(renderTitle: Function, delay: Function) {
	const $refresh = document.querySelector(".news-header__refresh") as HTMLElement;
	$refresh.addEventListener("click", async () => {
		clearInterval(timer);
		await delay();
		setTimer();
		renderTitle();
	});
}

function setTimer() {
	let time = 60;
	const $timer = document.querySelector(".news-header__timer") as HTMLElement;
	$timer.innerText = `${time}s 뒤 새로고침`;
	timer = setInterval(() => {
		time -= 1;
		$timer.innerText = `${time}s 뒤 새로고침`;
	}, 1000);
}

export { onClickRefresh, setTimer };
