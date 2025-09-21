# Media Assets Guide for Dynamic Hero Section

## Overview
The dynamic hero section now supports both video backgrounds and different images for each slide. This guide will help you add the appropriate media assets.

## Asset Requirements

### 1. Main Hero Slide
- **Purpose**: Default brand presentation
- **Suggested Content**: 
  - Elegant cocktail preparation
  - Luxury bar interior
  - Professional bartender at work
- **File Location**: `/src/assets/hero-main.jpg` (or `.mp4` for video)

### 2. Bar Magazine Feature Slide
- **Purpose**: Showcase industry recognition
- **Suggested Content**:
  - Bar Magazine cover/article spread
  - Award ceremony photos
  - Prestigious venue where you've trained
  - Team receiving recognition
- **File Location**: `/src/assets/hero-magazine.jpg` (or `.mp4` for video)

### 3. Hospitality Blueprint Newsletter Slide
- **Purpose**: Highlight thought leadership
- **Suggested Content**:
  - Training session in action
  - Networking event
  - People reading/learning
  - Workshop or masterclass scenes
- **File Location**: `/src/assets/hero-newsletter.jpg` (or `.mp4` for video)

## Technical Specifications

### Images
- **Format**: JPG, PNG, or WebP
- **Resolution**: Minimum 1920x1080 (Full HD)
- **Recommended**: 2560x1440 or higher for 4K displays
- **File Size**: Optimize to under 500KB per image
- **Aspect Ratio**: 16:9 preferred

### Videos
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 (Full HD) minimum
- **Duration**: 10-20 seconds (will loop)
- **File Size**: Under 5MB recommended
- **Frame Rate**: 24-30fps
- **Audio**: Optional (starts muted by default)

## Implementation Steps

1. **Add your media files** to `/src/assets/` directory

2. **Import them** in `HeroSectionDynamic.tsx`:
```tsx
import heroMain from "@/assets/hero-main.jpg";
import heroMagazine from "@/assets/hero-magazine.jpg";
import heroNewsletter from "@/assets/hero-newsletter.jpg";

// For videos:
// import heroMainVideo from "@/assets/hero-main.mp4";
```

3. **Update the MEDIA_ASSETS configuration**:
```tsx
const MEDIA_ASSETS = {
  main: {
    type: "image", // or "video"
    src: heroMain,
  },
  magazine: {
    type: "image", // or "video"
    src: heroMagazine,
  },
  newsletter: {
    type: "image", // or "video"  
    src: heroNewsletter,
  }
};
```

## Performance Optimization

### For Images:
1. Use image compression tools (TinyPNG, ImageOptim)
2. Consider using WebP format for better compression
3. Provide multiple resolutions for responsive loading

### For Videos:
1. Compress videos using HandBrake or FFmpeg
2. Remove audio track if not needed
3. Consider providing a poster image for faster initial load
4. Use shorter loops (10-15 seconds)

## Example Video Compression Command (FFmpeg):
```bash
ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 22 -c:a aac -b:a 128k -movflags +faststart output.mp4
```

## Accessibility Considerations
- Provide meaningful poster images for videos
- Ensure sufficient contrast between text and backgrounds
- Test with reduced motion preferences
- Videos should enhance, not distract from content

## Testing Checklist
- [ ] All media assets load correctly
- [ ] Videos autoplay (muted) on supported browsers
- [ ] Fallback images display when videos can't play
- [ ] Performance is acceptable on mobile devices
- [ ] Text remains readable over all backgrounds
- [ ] Transitions between slides are smooth

## Recommended Free Stock Resources
- **Videos**: Pexels, Coverr, Mixkit
- **Images**: Unsplash, Pexels, Pixabay
- Search terms: "luxury bar", "cocktail making", "bartender", "hospitality training", "premium spirits"

## Notes
- The gradient overlays can be adjusted in the `bgOverlay` property for each slide
- Consider seasonal updates to keep content fresh
- Monitor loading performance with Chrome DevTools
