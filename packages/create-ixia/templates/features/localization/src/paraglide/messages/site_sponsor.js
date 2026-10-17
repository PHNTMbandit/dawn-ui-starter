/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_SponsorInputs */

const en_site_sponsor = /** @type {(inputs: Site_SponsorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Support me`)
};

const ja_site_sponsor = /** @type {(inputs: Site_SponsorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サポートする`)
};

/**
* | output |
* | --- |
* | "Support me" |
*
* @param {Site_SponsorInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_sponsor = /** @type {((inputs?: Site_SponsorInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_SponsorInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_sponsor(inputs)
	return en_site_sponsor(inputs)
});
export { site_sponsor as "site.sponsor" }