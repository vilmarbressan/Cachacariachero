// Base64 image manifest for the offline/standalone bundle.
// NOTE: the source design project's photo assets exceed the 256 KiB
// per-file read cap of the design-import tool, so they could not be
// pulled down as embedded base64 here. window.ASSETS is intentionally
// left empty -- components fall back to the relative paths in
// assets/photos/ and assets/logo/ (see asset() in hooks.jsx). Drop the
// real exported PNGs into those folders to restore the imagery.
window.ASSETS = {};
