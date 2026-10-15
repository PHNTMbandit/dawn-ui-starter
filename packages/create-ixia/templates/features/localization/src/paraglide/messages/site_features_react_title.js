/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Features_React_TitleInputs */

const en_site_features_react_title = /** @type {(inputs: Site_Features_React_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`React 19 + Compiler`)
};

const ja_site_features_react_title = /** @type {(inputs: Site_Features_React_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`React 19 + コンパイラ`)
};

/**
* | output |
* | --- |
* | "React 19 + Compiler" |
*
* @param {Site_Features_React_TitleInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_react_title = /** @type {((inputs?: Site_Features_React_TitleInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_React_TitleInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_features_react_title(inputs)
	return en_site_features_react_title(inputs)
});
export { site_features_react_title as "site.features.react.title" }