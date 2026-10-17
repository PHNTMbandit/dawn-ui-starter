/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Layout_BadgeInputs */

const en_auth_layout_badge = /** @type {(inputs: Auth_Layout_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Full-stack React starter`)
};

const ja_auth_layout_badge = /** @type {(inputs: Auth_Layout_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フルスタック React スターター`)
};

/**
* | output |
* | --- |
* | "Full-stack React starter" |
*
* @param {Auth_Layout_BadgeInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_layout_badge = /** @type {((inputs?: Auth_Layout_BadgeInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Layout_BadgeInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_auth_layout_badge(inputs)
	return en_auth_layout_badge(inputs)
});
export { auth_layout_badge as "auth.layout.badge" }