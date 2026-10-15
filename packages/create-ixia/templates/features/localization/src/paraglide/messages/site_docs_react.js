/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Docs_ReactInputs */

const en_site_docs_react = /** @type {(inputs: Site_Docs_ReactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`React docs`)
};

const ja_site_docs_react = /** @type {(inputs: Site_Docs_ReactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`React ドキュメント`)
};

/**
* | output |
* | --- |
* | "React docs" |
*
* @param {Site_Docs_ReactInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_docs_react = /** @type {((inputs?: Site_Docs_ReactInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Docs_ReactInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_docs_react(inputs)
	return en_site_docs_react(inputs)
});
export { site_docs_react as "site.docs.react" }