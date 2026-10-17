/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Cta_TitleInputs */

const en_site_cta_title = /** @type {(inputs: Site_Cta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start building today`)
};

const ja_site_cta_title = /** @type {(inputs: Site_Cta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今日から開発を始めましょう`)
};

/**
* | output |
* | --- |
* | "Start building today" |
*
* @param {Site_Cta_TitleInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_cta_title = /** @type {((inputs?: Site_Cta_TitleInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Cta_TitleInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_cta_title(inputs)
	return en_site_cta_title(inputs)
});
export { site_cta_title as "site.cta.title" }