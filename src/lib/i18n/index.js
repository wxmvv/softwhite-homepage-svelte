import { derived, writable } from "svelte/store"
import { subString } from "$lib/util"

const translations = import.meta.globEager(`../../translation/*.json`)
/**
 * @type {any[]}
 */
let localesArray = []
Object.entries(translations).map(([path]) => {
  let localeFileName = subString(path, "/translation/", ".json")
  localesArray.push(localeFileName)
})

const path = "../../translation"
export const defaultLang = "zh-cn"
export const currentLang = writable(defaultLang)
export const langs = localesArray

/**
 * @param {string} currentLang
 * @param {string | number} key
 * @param {{ [x: string]: any; }} vars
 * @param {boolean} returnFallback
 */
function translate(currentLang, key, vars, returnFallback) {
  if (!key) throw new Error("no key provided to $t()")

  // @ts-ignore
  let text = translations[`${path}/${currentLang}.json`].default[key]

  if (!currentLang) throw new Error(`no translation for key "${key}"`)

  if (!text) {
    // @ts-ignore
    if (translations[`${path}/${currentLang}.json`].default[key] == undefined) {
      // @ts-ignore
      if (translations[`${path}/${defaultLang}.json`].default[key] == undefined) {
        // console.error(`"${defaultLang}.${key}" translation not found. Showing the string as is.`)
        return key
      } else if (returnFallback === false) {
        return key
      } else {
        console.warn(`"${currentLang}.${key}" translation not found. Showing "${defaultLang}.${key}" instead.`)
        // @ts-ignore
        return translations[`${path}/${defaultLang}.json`].default[key]
      }
    }
  }

  Object.keys(vars).map((k) => {
    const regex = new RegExp(`{{${k}}}`, "g")
    text = text.replace(regex, vars[k])
  })

  return text
}

export const t = derived(
  currentLang,
  ($currentLang) =>
    (/** @type {string | number} */ key, vars = {}, lang = $currentLang, returnFallback = true) =>
      translate(lang, key, vars, returnFallback)
)

const replaceStateWithQuery = (/** @type {{ [s: string]: any; } | ArrayLike<any>} */ values) => {
  const url = new URL(window.location.toString())
  for (let [k, v] of Object.entries(values)) {
    // if(!!y){
    if (v) {
      url.searchParams.set(encodeURIComponent(k), encodeURIComponent(v))
    } else {
      url.searchParams.delete(k)
    }
  }
  history.replaceState({}, "", url)
}

export const setLang = (/** @type {string} */ lang) => {
  currentLang.set(lang)
  replaceStateWithQuery({ lang: lang })
  localStorage.setItem("lang", lang)
}
