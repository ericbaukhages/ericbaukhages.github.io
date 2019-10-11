# febvigrail.github.io

Generate CSS:

```
npx tailwind build styles.css -o output.css -c tailwind.config.js
```

Watch command:

```
ls tailwind.config.js styles.css | entr npx tailwind build styles.css -o output.css -c tailwind.config.js
```
