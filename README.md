
# vue2-bootstrap-modal
> Bootstrap Modal Component for Vue 2.x

> Updated package to exclude bootstrap css and js, you need to install bootstrap-loader

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
<bootstrap-modal ref="theModal" :needHeader="false" :needFooter="false" size="large">
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
Finally call `theModal.open()` and `theModal.close()` whenever you need.
## Documentation

Modal functions are exposed through the **ref** variable

### open() `function`
Opens the modal

### close() `function`
Closes the modal

### needHeader `boolean`
True if you need to show the header

Default value is `true`

### needFooter `boolean`
True if you need to show the footer

Default value is `true`

### size `string`

Use one of these values to change the modal size

Value | Bootstrap class
--|--
`small` | `modal-sm`
`medium` | `modal-md`
`large` | `modal-lg`

Default value is empty

## Example

See ```index.html``` for example use


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
