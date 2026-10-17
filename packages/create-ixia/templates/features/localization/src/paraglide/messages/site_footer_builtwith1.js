/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Footer_Builtwith1Inputs */

const en_site_footer_builtwith1 = /** @type {(inputs: Site_Footer_Builtwith1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Built with`)
};

const ja_site_footer_builtwith1 = /** @type {(inputs: Site_Footer_Builtwith1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用 UI`)
};

/**
* | output |
* | --- |
* | "Built with" |
*
* @param {Site_Footer_Builtwith1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_footer_builtwith1 = /** @type {((inputs?: Site_Footer_Builtwith1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Footer_Builtwith1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_footer_builtwith1(inputs)
	return en_site_footer_builtwith1(inputs)
});
export { site_footer_builtwith1 as "site.footer.builtWith" }