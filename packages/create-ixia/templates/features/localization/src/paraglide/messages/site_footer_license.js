/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Footer_LicenseInputs */

const en_site_footer_license = /** @type {(inputs: Site_Footer_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MIT License`)
};

const ja_site_footer_license = /** @type {(inputs: Site_Footer_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MIT ライセンス`)
};

/**
* | output |
* | --- |
* | "MIT License" |
*
* @param {Site_Footer_LicenseInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_footer_license = /** @type {((inputs?: Site_Footer_LicenseInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Footer_LicenseInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_footer_license(inputs)
	return en_site_footer_license(inputs)
});
export { site_footer_license as "site.footer.license" }