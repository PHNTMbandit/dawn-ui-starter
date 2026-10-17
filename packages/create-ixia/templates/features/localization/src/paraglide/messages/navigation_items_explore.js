/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Navigation_Items_ExploreInputs */

const en_navigation_items_explore = /** @type {(inputs: Navigation_Items_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explore`)
};

const ja_navigation_items_explore = /** @type {(inputs: Navigation_Items_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`探索`)
};

/**
* | output |
* | --- |
* | "Explore" |
*
* @param {Navigation_Items_ExploreInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const navigation_items_explore = /** @type {((inputs?: Navigation_Items_ExploreInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Navigation_Items_ExploreInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_navigation_items_explore(inputs)
	return en_navigation_items_explore(inputs)
});
export { navigation_items_explore as "navigation.items.explore" }