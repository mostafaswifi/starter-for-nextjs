import bwipjs from 'bwip-js';           // If using the main package import

export default function Barcode({value,type}) {
  return (
    <canvas
      ref={(canvas) => {
        if (!canvas) {
          return;
        }

        bwipjs.toCanvas(canvas, {
          bcid:        type,               // Barcode type
          text:        value,            // Text to encode
          scale:       window.devicePixelRatio, // Scaling factor for high-DPI devices
          height:      20,    
          width:       20,                  // Bar height, in millimeters
          includetext: true,                    // Show human-readable text
          textxalign:  'center',                // Always good to set this
        });
      }}
    />
  );
}