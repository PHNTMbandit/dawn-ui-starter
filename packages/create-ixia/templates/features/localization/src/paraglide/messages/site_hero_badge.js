/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Hero_BadgeInputs */

const en_site_hero_badge = /** @type {(inputs: Site_Hero_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Full-stack React starter`)
};

const ja_site_hero_badge = /** @type {(inputs: Site_Hero_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フルスタック React スターター`)
};

/**
* | output |
* | --- |
* | "Full-stack React starter" |
*
* @param {Site_Hero_BadgeInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_hero_badge = /** @type {((inputs?: Site_Hero_BadgeInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Hero_BadgeInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_hero_badge(inputs)
	return en_site_hero_badge(inputs)
});
export { site_hero_badge as "site.hero.badge" }