# Polkadex

A pokedex web app I created as a code exercise.

# Roadmap

We've got a good start, but there's still a lot to do. Here's what I would
change going forward:

- [ ] Improve Design - It needs a lot of work. It should look more like a
      pokedex than it currently does, and it's not very pretty.
- [ ] Improve CSS - I'd like to refactor the CSS stylesheet and/or use
      tailwindCSS or CSS modules to keep the CSS styles with the components that
      use them.
- [ ] Improve Accessibility - I've done some basic accessibility work, but it
      needs more.
- [ ] Audit Performance - Might be a good to check the core web vitals to see
      how it performs.
- [ ] Add More Tests - run those tests on more browsers
- [ ] The backend API is kindof all-or-nothing (unles I missed something). It
      would be nice if there was a backend API that we could use for searching
      so that we don't have to pull down all the pokemon and do the searching
      logic on the frontend. That would save us from having to make so many http
      requests.
- [ ] The spinner should be delayed such that it is only displayed after a
      certain amount of time has passed. This would prevent the spinner from
      flashing on the screen for a split second when the page loads quickly.
