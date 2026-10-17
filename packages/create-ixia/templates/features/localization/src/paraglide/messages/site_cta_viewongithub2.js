/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Cta_Viewongithub2Inputs */

const en_site_cta_viewongithub2 = /** @type {(inputs: Site_Cta_Viewongithub2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View on GitHub`)
};

const ja_site_cta_viewongithub2 = /** @type {(inputs: Site_Cta_Viewongithub2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub で見る`)
};

/**
* | output |
* | --- |
* | "View on GitHub" |
*
* @param {Site_Cta_Viewongithub2Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_cta_viewongithub2 = /** @type {((inputs?: Site_Cta_Viewongithub2Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Cta_Viewongithub2Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_cta_viewongithub2(inputs)
	return en_site_cta_viewongithub2(inputs)
});
export { site_cta_viewongithub2 as "site.cta.viewOnGithub" }