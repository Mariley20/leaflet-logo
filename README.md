# leaflet-logo
A useful control to logo with many options for page.

## Basic Usage

### Set up:

tl;dr

1. Get CSS and JavaScript files
2. Include CSS and JavaScript files
3. Initialize plugin

#### Add the JavaScript and CSS files
This example shows how to include the logo control files directly from github. In production, prefer using npm.

```html
<link rel="stylesheet" href="https://github.com/barisariburnu/leaflet-logo/blob/master/dist/leaflet-logo.min.css" />

<script src="https://github.com/barisariburnu/leaflet-logo/blob/master/dist/leaflet-logo.min.js" charset="utf-8"></script>
```

#### Add the following snippet to your map initialization:

This snippet adds the control to the map. You can pass also pass a configuration.

```js
L.control.logo({
    link: 'Redirect Url',
    image: 'Image Url'
}).addTo(map);
```

### Possible options

The logo controls inherits options from [Leaflet Controls](http://leafletjs.com/reference.html#control-options).

To customize the control, pass an object with your custom options to the logo control.

```js
L.control.logo(OPTIONS).addTo(map);
```

Possible options are listed in the following table. More details are [in the code](https://github.com/barisariburnu/leaflet-logo/blob/master/src/leaflet-logo.js#L7).

| Option     | Type      | Default          |
|------------|-----------|------------------|
| `position` | `string`  | `topleft`        |
| `height`   | `string`  | `50px`           |
| `width`    | `string`  | `50px`           |
| `target`   | `string`  | `50px`           |
| `link`     | `string`  | None (required)  |
| `image`    | `string`  | None (required)  |


For example, to customize the position, link and image, you could write

```js
var lc = L.control.logo({
    position: 'topleft',
    link: '#',
    image: 'https://avatars3.githubusercontent.com/u/7146753?v=3&s=100'
}).addTo(map);
```

## License

MIT