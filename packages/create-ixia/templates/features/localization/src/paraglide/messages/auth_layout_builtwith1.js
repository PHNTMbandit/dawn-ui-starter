/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Layout_Builtwith1Inputs */

const en_auth_layout_builtwith1 = /** @type {(inputs: Auth_Layout_Builtwith1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Built with Ixia UI · TanStack Start · Better Auth`)
};

const ja_auth_layout_builtwith1 = /** @type {(inputs: Auth_Layout_Builtwith1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ixia UI · TanStack Start · Better Auth を使用`)
};

/**
* | output |
* | --- |
* | "Built with Ixia UI · TanStack Start · Better Auth" |
*
* @param {Auth_Layout_Builtwith1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_layout_builtwith1 = /** @type {((inputs?: Auth_Layout_Builtwith1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Layout_Builtwith1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_auth_layout_builtwith1(inputs)
	return en_auth_layout_builtwith1(inputs)
});
export { auth_layout_builtwith1 as "auth.layout.builtWith" }