# vue2-bootstrap-modal
> To show modal in a bootstrap compatible way

**This package doesn't require bootstrap css to run, I have compiled the css inside the module**
## Install
``` bash
    npm install vue2-bootstrap-modal --save
```

## Usage
```
components: {
    'bootstrap-modal': require('vue2-bootstrap-modal')
},
```
In your template:
```
<div>
...
<bootstrap-modal ref="theBootstrapModal">
<div slot="title">
    Your title here
</div>
<div slot="body">
    Your body here
</div>
<div slot="footer">
    Your footer here
</div>
</bootstrap-modal>
...
</div>
```
## Example

See ```index.html``` for example use

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
