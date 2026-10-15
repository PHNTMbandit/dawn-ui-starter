/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Navigation_Items_TypographyInputs */

const en_navigation_items_typography = /** @type {(inputs: Navigation_Items_TypographyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Typography`)
};

const ja_navigation_items_typography = /** @type {(inputs: Navigation_Items_TypographyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タイポグラフィ`)
};

/**
* | output |
* | --- |
* | "Typography" |
*
* @param {Navigation_Items_TypographyInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const navigation_items_typography = /** @type {((inputs?: Navigation_Items_TypographyInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Navigation_Items_TypographyInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_navigation_items_typography(inputs)
	return en_navigation_items_typography(inputs)
});
export { navigation_items_typography as "navigation.items.typography" }