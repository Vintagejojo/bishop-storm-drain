/mnt/user-data/outputs/
│
├── README.md
├── SETUP_GUIDE.md
├── package.json
├── tailwind.config.js
│
└── src/
    ├── app/
    │   ├── layout.jsx             # Root layout
    │   ├── page.jsx               # Home page (Hero + Services + CTA + Contact)
    │   ├── globals.css            # Global styles
    │   │
    │   └── about/
    │       └── page.jsx           # About page
    │
    └── components/
        ├── layout/
        │   ├── Header.jsx         # Top contact bar
        │   ├── Navbar.jsx         # Navigation (with scroll links)
        │   └── Footer.jsx         # Footer
        │
        ├── home/
        │   ├── Hero.jsx           # Hero section
        │   ├── Services.jsx       # Services section (id="services")
        │   ├── CallToAction.jsx   # CTA section
        │   └── Contact.jsx        # Contact section (id="contact")
        │
        └── ui/
            ├── Button.jsx         # Reusable button
            └── ServiceCard.jsx    # Service card