/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Docs_StorybookInputs */

const en_site_docs_storybook = /** @type {(inputs: Site_Docs_StorybookInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Storybook docs`)
};

const ja_site_docs_storybook = /** @type {(inputs: Site_Docs_StorybookInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Storybook ドキュメント`)
};

/**
* | output |
* | --- |
* | "Storybook docs" |
*
* @param {Site_Docs_StorybookInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_docs_storybook = /** @type {((inputs?: Site_Docs_StorybookInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Docs_StorybookInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_docs_storybook(inputs)
	return en_site_docs_storybook(inputs)
});
export { site_docs_storybook as "site.docs.storybook" }