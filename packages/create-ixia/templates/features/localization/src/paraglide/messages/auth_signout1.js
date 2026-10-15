/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Signout1Inputs */

const en_auth_signout1 = /** @type {(inputs: Auth_Signout1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign out`)
};

const ja_auth_signout1 = /** @type {(inputs: Auth_Signout1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サインアウト`)
};

/**
* | output |
* | --- |
* | "Sign out" |
*
* @param {Auth_Signout1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_signout1 = /** @type {((inputs?: Auth_Signout1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Signout1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_auth_signout1(inputs)
	return en_auth_signout1(inputs)
});
export { auth_signout1 as "auth.signOut" }