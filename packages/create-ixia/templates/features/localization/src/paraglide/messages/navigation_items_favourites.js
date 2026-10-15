/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Navigation_Items_FavouritesInputs */

const en_navigation_items_favourites = /** @type {(inputs: Navigation_Items_FavouritesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Favorites`)
};

const ja_navigation_items_favourites = /** @type {(inputs: Navigation_Items_FavouritesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`お気に入り`)
};

/**
* | output |
* | --- |
* | "Favorites" |
*
* @param {Navigation_Items_FavouritesInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const navigation_items_favourites = /** @type {((inputs?: Navigation_Items_FavouritesInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Navigation_Items_FavouritesInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_navigation_items_favourites(inputs)
	return en_navigation_items_favourites(inputs)
});
export { navigation_items_favourites as "navigation.items.favourites" }