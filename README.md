# Trip Countdown Tracker

A shareable countdown tracker for you and your friends to look forward to an upcoming trip. Built with Next.js, React, and TypeScript.

## Features

- **No Backend Required**: The entire application runs in the browser
- **Shareable Links**: All countdown data is stored in the URL, making it easy to share with friends
- **Real-time Updates**: Live countdown that updates every second
- **Beautiful UI**: Modern, responsive design with dark mode support
- **Bookmarkable**: Save your countdowns as bookmarks

## How It Works

The application stores all necessary data (trip name and target date) directly in the URL's query parameters. This means:

- No database needed
- No user accounts required
- Anyone with the link sees the exact same countdown
- Easy to share via text, email, or social media

## Example URLs

- `http://localhost:3000/?title=Beach%20Vacation&date=2024-08-15`
- `http://localhost:3000/?title=Ski%20Trip&date=2024-12-25`

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

4. Create your first countdown by entering a trip name and date

## Usage

1. **Create a Countdown**: Enter your trip name and select the target date
2. **Share the Link**: Copy the URL and share it with friends
3. **View Countdown**: See days, hours, minutes, and seconds remaining
4. **Reset**: Click "Create New" to start a new countdown

## Technical Details

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: URL parameters using Next.js `useSearchParams`
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## Deployment

The application can be deployed to any static hosting service:

```bash
npm run build
```

The built files will be in the `.next` directory and can be served by any static file server.

## License

MIT
