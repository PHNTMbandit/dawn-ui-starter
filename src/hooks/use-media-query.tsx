import React from 'react'

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = React.useState(false)

  React.useEffect(() => {
    const media = window.matchMedia(query)

    const update = () => setMatches(media.matches)

    update()

    media.addEventListener('change', update)

    return () => media.removeEventListener('change', update)
  }, [query])

  return matches
}
