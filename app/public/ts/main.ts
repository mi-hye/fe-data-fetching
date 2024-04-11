import renderNewsDes from "./views/newsDescription.js";
import { renderTitle, onClickNewsTitle } from "./views/newsTitle.js";

await renderTitle();
onClickNewsTitle(renderNewsDes);
