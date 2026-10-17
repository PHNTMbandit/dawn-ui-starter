/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Hero_Styledwith1Inputs */

const en_site_hero_styledwith1 = /** @type {(inputs: Site_Hero_Styledwith1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Styled with`)
};

const ja_site_hero_styledwith1 = /** @type {(inputs: Site_Hero_Styledwith1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用 UI`)
};

/**
* | output |
* | --- |
* | "Styled with" |
*
* @param {Site_Hero_Styledwith1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_hero_styledwith1 = /** @type {((inputs?: Site_Hero_Styledwith1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Hero_Styledwith1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_hero_styledwith1(inputs)
	return en_site_hero_styledwith1(inputs)
});
export { site_hero_styledwith1 as "site.hero.styledWith" }