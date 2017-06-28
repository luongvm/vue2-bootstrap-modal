
# vue2-bootstrap-modal
> To show modal in a bootstrap compatible way, for Vue 2.x

### Updated package to exclude bootstrap css and js, you need to install bootstrap-loader

[![NPM](https://nodei.co/npm/vue2-bootstrap-modal.png?downloads=true)](https://nodei.co/npm/vue2-bootstrap-modal/)

## Install

``` bash
    npm install vue2-bootstrap-modal --save
```

## Usage
Require the component (globally or in another component)
```
components: {
    'bootstrap-modal': require('vue2-bootstrap-modal')
},
```
Then in your template:
```
<div>
...
<bootstrap-modal ref="theBootstrapModal" :needHeader="false" :needFooter="false">
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
## Documentation

Modal functions are exposed through the **ref** variable

### open() `function`
Opens the modal

### close() `function`
Closes the modal

### size `string`
Can be either an empty string or `large` or `small`

Default value is empty string

### needHeader `boolean`
True if you need to show the header

Default value is `true`

### needFooter `boolean`
True if you need to show the footer

Default value is `true`

## Example

See ```index.html``` for example use

## Intended Use
My way of using this is to write a component which use this modal component, add proper elements into slots, then call open, close and handle the elements event as needed.

## To-do
Expose configuration, like backdrop darkness value

## Contributing
Contributions are welcomed

## Release History
0.1.7 Add `size` props

0.1.4 Add `needFooter` and `needHeader` props

0.1.0 Initial release

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
