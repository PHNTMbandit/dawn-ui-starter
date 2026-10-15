/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Features_React_DescriptionInputs */

const en_site_features_react_description = /** @type {(inputs: Site_Features_React_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`React 19 with the React Compiler for automatic memoization — fast UIs without manual tuning.`)
};

const ja_site_features_react_description = /** @type {(inputs: Site_Features_React_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`React 19 と React Compiler による自動メモ化で、手動調整なしに高速な UI を実現します。`)
};

/**
* | output |
* | --- |
* | "React 19 with the React Compiler for automatic memoization — fast UIs without manual tuning." |
*
* @param {Site_Features_React_DescriptionInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_react_description = /** @type {((inputs?: Site_Features_React_DescriptionInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_React_DescriptionInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_features_react_description(inputs)
	return en_site_features_react_description(inputs)
});
export { site_features_react_description as "site.features.react.description" }