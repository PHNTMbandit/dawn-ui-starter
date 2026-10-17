/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Signin_Description1Inputs */

const en_auth_signin_description1 = /** @type {(inputs: Auth_Signin_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use your credentials to sign in to your account`)
};

const ja_auth_signin_description1 = /** @type {(inputs: Auth_Signin_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`資格情報を使用してアカウントにサインインしてください`)
};

/**
* | output |
* | --- |
* | "Use your credentials to sign in to your account" |
*
* @param {Auth_Signin_Description1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_signin_description1 = /** @type {((inputs?: Auth_Signin_Description1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Signin_Description1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_auth_signin_description1(inputs)
	return en_auth_signin_description1(inputs)
});
export { auth_signin_description1 as "auth.signIn.description" }