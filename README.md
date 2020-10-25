# steganography
Implementing steganographic functionality with a modern web experience for a university project of leuphana university 2020.

### Learnings:
- Third Party scripts without package managers like npm or yarn can be added to React with the postscribe package. But they have to be attached after the DOM has been rendered so the order when postscribe is invoked matters and should be after React has built the site.
- In this project Tailwind was added with different start scripts so that running the project locally the whole css is available but when beeing deployed in production the css will get purged and file sized reduced dramatically.
- Third Party packages not available to npm or yarn can be imported as the javascript file directly in the src/ folder. In the first line of the package /* eslint-disable */ has to be added so that ESLint doesn't try to compile it on React startup. Then the package can be normally imported and functions can be called in ComponentDidUpdate().
