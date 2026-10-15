import React from 'react'

// Pass a CSS media query (for example, '(min-width: 768px)') to track viewport changes.
export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = React.useState(false)

  React.useEffect(() => {
    const media = globalThis.window.matchMedia(query),
      update = () => setMatches(media.matches)

    update()

    media.addEventListener('change', update)

    return () => media.removeEventListener('change', update)
  }, [query])

  return matches
}
