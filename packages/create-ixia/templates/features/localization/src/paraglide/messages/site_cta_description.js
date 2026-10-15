/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Cta_DescriptionInputs */

const en_site_cta_description = /** @type {(inputs: Site_Cta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clone the starter and get a production-ready foundation in minutes — authentication, database, and UI included.`)
};

const ja_site_cta_description = /** @type {(inputs: Site_Cta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スターターを複製すれば、認証、データベース、UI を備えた本番向けの基盤をすぐに使えます。`)
};

/**
* | output |
* | --- |
* | "Clone the starter and get a production-ready foundation in minutes — authentication, database, and UI included." |
*
* @param {Site_Cta_DescriptionInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_cta_description = /** @type {((inputs?: Site_Cta_DescriptionInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Cta_DescriptionInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_cta_description(inputs)
	return en_site_cta_description(inputs)
});
export { site_cta_description as "site.cta.description" }