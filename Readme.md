# Ignite lab 2022

* `npm create vite@latest`
* `npm install -D tailwindcss postcss autoprefixer`
  * `npx tailwindcss init -p`
  * global.css : 
  ```css
    @tailwind base;
    @tailwind utilities;
    @tailwind components;
  ```
* Add inter font in index.html:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Mochiy+Pop+P+One&display=swap" rel="stylesheet" />
```

* StoryBook (doc) 
  * `npx storybook init --builder @storybook/builder-vite --use-npm`
  * `npm run storybook`

* clsx - conditional in tailwind `npm install --save clsx`

* Radix Slot `npm install @radix-ui/react-slot`

* phosphor React - `npm install phosphor-react`
* Radix checkbox `npm install @radix-ui/react-checkbox`


![](figma.png)
![](IgLab1.png)
