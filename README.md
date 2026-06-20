# Video Editor Portfolio

A modern, high-converting video editor portfolio website built with HTML, CSS, and JavaScript. Designed to attract clients for freelance video editing work on YouTube, Shorts, Reels, and social media content.

## 🎯 Features

✅ **Dark, Cinematic UI** - Modern design optimized for video showcasing
✅ **Responsive Design** - Mobile-first approach for all devices
✅ **Video Grid Portfolio** - Embedded YouTube videos with custom cards
✅ **Lazy Loading** - Videos load on-demand for optimal performance
✅ **Smooth Animations** - Professional hover effects and transitions
✅ **Hero Section** - Eye-catching introduction with CTA buttons
✅ **About & Skills** - Professional bio and tool expertise
✅ **Contact Section** - Easy ways for clients to reach you

## 🚀 Quick Setup

1. **Clone or create this repository**
   ```bash
   git clone https://github.com/blutsaugerbr/blutsaugerbr.github.io
   cd blutsaugerbr.github.io
   ```

2. **Customize your portfolio**
   - Edit `index.html` to update your name, contact info, and video links
   - Modify `styles.css` to customize colors and typography
   - Update video URLs in the portfolio section

3. **Deploy on GitHub Pages**
   - Push changes to your `blutsaugerbr.github.io` repository
   - Your site will be live at `https://blutsaugerbr.github.io`

## 📝 Customization Guide

### Update Hero Section
In `index.html`, find the hero section and update:
- Your name/brand
- Contact buttons (Discord, Email)

### Add Your Videos
Replace video URLs in the portfolio grid:
```html
<iframe 
    data-src="https://www.youtube.com/embed/YOUR_VIDEO_ID?rel=0"
    ...
></iframe>
```

### Change Contact Info
Update the contact section with your actual Discord and email:
```html
<a href="https://discord.com/users/YOUR_ID" class="contact-link" target="_blank">Your Discord</a>
<a href="mailto:your.email@example.com" class="contact-link">your.email@example.com</a>
```

### Customize Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary: #ff006e;      /* Pink accent */
    --secondary: #00d9ff;    /* Cyan accent */
    --dark-bg: #0a0e27;      /* Dark background */
    --text-primary: #ffffff; /* Main text */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: Full experience with grid layout
- **Tablet** (768px): Optimized 2-column grid
- **Mobile** (480px): Single column, full-width videos

## ⚡ Performance Optimization

- **Lazy Loading**: Videos load only when they enter viewport
- **CSS Grid**: Efficient layout engine for responsive design
- **No Heavy Dependencies**: Pure HTML, CSS, and vanilla JavaScript
- **Optimized Animations**: GPU-accelerated transforms
- **Reduced Motion Support**: Respects user preferences

## 📊 Sections

1. **Navigation** - Fixed header with smooth scroll links
2. **Hero** - Welcome section with CTA buttons
3. **Showreel** - Featured video showcase
4. **Portfolio** - Grid of 6 video projects with descriptions
5. **About** - Bio and skills showcase
6. **Contact** - Client contact methods
7. **Footer** - Copyright and info

## 🎬 Video Format Tips

- **Shorts**: Use 9:16 vertical aspect ratio (315x560px)
- **Long-form**: Use 16:9 horizontal aspect ratio
- **YouTube Embed**: Extract video ID from URL
  - Full URL: `https://youtu.be/VIDEO_ID` or `https://www.youtube.com/watch?v=VIDEO_ID`
  - Embed: `https://www.youtube.com/embed/VIDEO_ID`

## 🔧 Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Full support

## 📄 License

This portfolio template is free to use and modify for personal or commercial purposes.

## 🤝 Questions?

Need help customizing your portfolio? Check the code comments or review the customization guide above.

---

**Built with ❤️ for video creators**
