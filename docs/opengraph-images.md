# Open Graph Image Generation

This Next.js application includes dynamic Open Graph image generation for better social media sharing.

## How It Works

### Reusable Component
- **File**: `app/components/static/OpenGraphImage.tsx`
- **Purpose**: Centralized component for generating all Open Graph images
- **Features**: Configurable title, subtitle, countdown display, date, and features

### Static Images (Home Page)
- **File**: `app/opengraph-image.tsx`
- **File**: `app/twitter-image.tsx`
- **URL**: `/opengraph-image` and `/twitter-image`
- **Purpose**: Displayed when users share the main site URL
- **Uses**: `createOpenGraphImage()` with `showFeatures: true`

### Dynamic Images (Countdown Pages)
- **File**: `app/countdown/opengraph-image.tsx`
- **File**: `app/countdown/twitter-image.tsx`
- **URL**: `/countdown/opengraph-image?title=...&date=...`
- **Purpose**: Displayed when users share specific countdown URLs
- **Uses**: `createOpenGraphImage()` with dynamic countdown data

## Features

### Home Page Images
- Branded design with app logo and title
- Feature highlights (No Signup, Shareable, Beautiful)
- Consistent with app's visual design
- Gradient background matching the app theme

### Countdown Page Images
- Dynamic content based on countdown parameters
- Shows countdown title and remaining time
- Displays target date in a readable format
- Handles edge cases (invalid parameters, past dates)
- Real-time calculation of time remaining

## Technical Implementation

### Reusable Component
- **`createOpenGraphImage()`** function accepts configuration object
- **Props**: `title`, `subtitle`, `timeDisplay`, `status`, `date`, `showFeatures`
- **Returns**: `ImageResponse` with consistent styling
- **Benefits**: DRY principle, easy maintenance, consistent design

### Image Generation
- Uses Next.js 13+ `ImageResponse` API
- Runs on Edge Runtime for fast generation
- 1200x630 pixel dimensions (optimal for social media)
- PNG format with transparency support

### Dynamic Metadata
- `app/countdown/layout.tsx` generates dynamic metadata
- Updates page title and description based on countdown data
- Provides fallback metadata for invalid URLs

### URL Structure
```
Home page: /opengraph-image
Countdown: /countdown/opengraph-image?title=Vacation&date=2024-12-25
```

## Testing

### Local Testing
1. Start the development server: `npm run dev`
2. Visit `/opengraph-image` to see the home page image
3. Visit `/countdown/opengraph-image?title=Test&date=2024-12-25` to see a countdown image

### Social Media Testing
- Use Facebook's Sharing Debugger
- Use Twitter's Card Validator
- Use LinkedIn's Post Inspector

## Customization

### Styling
- Images use inline styles (required by ImageResponse)
- Color scheme matches the app's design system
- Fonts use system-ui for consistent rendering
- All styling centralized in `OpenGraphImage.tsx`

### Content
- Modify the `createOpenGraphImage()` function for global changes
- Update individual image files for specific customizations
- Add new props to the component for additional features
- Update colors and branding in one place

## Performance

- Images are generated on-demand
- Edge runtime ensures fast generation
- Cached by social media platforms
- No additional build time impact

## Troubleshooting

### Common Issues
1. **Images not showing**: Check that the files are in the correct locations
2. **Wrong content**: Verify URL parameters are being passed correctly
3. **Styling issues**: Ensure all styles are inline (no external CSS)

### Debugging
- Check browser developer tools for image requests
- Verify metadata in page source
- Test with social media debugging tools 