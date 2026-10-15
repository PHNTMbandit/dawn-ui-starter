/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Hero_Starongithub2Inputs */

const en_site_hero_starongithub2 = /** @type {(inputs: Site_Hero_Starongithub2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Star on GitHub`)
};

const ja_site_hero_starongithub2 = /** @type {(inputs: Site_Hero_Starongithub2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub でスターする`)
};

/**
* | output |
* | --- |
* | "Star on GitHub" |
*
* @param {Site_Hero_Starongithub2Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_hero_starongithub2 = /** @type {((inputs?: Site_Hero_Starongithub2Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Hero_Starongithub2Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_hero_starongithub2(inputs)
	return en_site_hero_starongithub2(inputs)
});
export { site_hero_starongithub2 as "site.hero.starOnGithub" }