# Motion effects voor Elementor content

Je kunt nu eenvoudige animaties toevoegen met een `data-e-motion` attribuut op een element.

## Beschikbare effecten

- `fade-up`
- `fade-right`
- `zoom-in`
- `float`

## Voorbeeld

```html
<div data-e-motion="fade-up" style="--e-motion-delay:.2s; --e-motion-duration:1s;">
	Deze content komt geanimeerd in beeld.
</div>
```

## Optionele CSS variabelen

- `--e-motion-delay` (standaard `0s`)
- `--e-motion-duration` (standaard `.8s`)
- `--e-motion-distance` (standaard `24px`)

De effecten houden rekening met `prefers-reduced-motion` voor toegankelijkheid.
