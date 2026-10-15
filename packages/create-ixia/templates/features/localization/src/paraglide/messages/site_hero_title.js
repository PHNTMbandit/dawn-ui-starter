/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Hero_TitleInputs */

const en_site_hero_title = /** @type {(inputs: Site_Hero_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The full-stack React starter that's ready on day one`)
};

const ja_site_hero_title = /** @type {(inputs: Site_Hero_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`初日から使えるフルスタック React スターター`)
};

/**
* | output |
* | --- |
* | "The full-stack React starter that's ready on day one" |
*
* @param {Site_Hero_TitleInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_hero_title = /** @type {((inputs?: Site_Hero_TitleInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Hero_TitleInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_hero_title(inputs)
	return en_site_hero_title(inputs)
});
export { site_hero_title as "site.hero.title" }