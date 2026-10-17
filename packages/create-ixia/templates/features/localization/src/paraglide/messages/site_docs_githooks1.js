/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Docs_Githooks1Inputs */

const en_site_docs_githooks1 = /** @type {(inputs: Site_Docs_Githooks1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Git hooks`)
};

const ja_site_docs_githooks1 = /** @type {(inputs: Site_Docs_Githooks1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Git フック`)
};

/**
* | output |
* | --- |
* | "Git hooks" |
*
* @param {Site_Docs_Githooks1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_docs_githooks1 = /** @type {((inputs?: Site_Docs_Githooks1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Docs_Githooks1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_docs_githooks1(inputs)
	return en_site_docs_githooks1(inputs)
});
export { site_docs_githooks1 as "site.docs.gitHooks" }