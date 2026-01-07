Eurobuch Search
<img src="assets/extension-icon.png" alt="Eurobuch Search" width="128" height="128">
Search and compare book prices across multiple European platforms via Eurobuch's metasearch API

✨ Features
🔍 Smart Search - Search by ISBN, author, or book title
💰 Price Comparison - Compare prices from dozens of European book platforms
🚚 Shipping Costs - View shipping costs and total prices at a glance
📊 Smart Sorting - Results automatically sorted by best total price
⚡ Fast & Cached - Debounced search with intelligent result caching
📋 Quick Actions - Copy ISBN, links, or complete details with keyboard shortcuts
🏷️ Book Condition - See book condition (new, used, etc.) where available
🚀 Installation
From Raycast Store
Open Raycast
Search for "Eurobuch Search"
Click Install
Manual Installation
bash
git clone https://github.com/wdeu/eurobuch-search.git
cd eurobuch-search
npm install
npm run dev
⚙️ Setup
1. Get API Credentials (Optional)
The extension works out-of-the-box with test credentials (test/test), but for full access you can get your own API credentials:

Visit Eurobuch.de
Contact their support to request API access for metasearch
You'll receive:
Platform ID (your unique identifier)
API Password
Note: The default test credentials provide limited results. For full access to all book platforms, use your own credentials.

2. Configure Extension (Optional)
Open Raycast preferences (⌘ + ,)
Navigate to Extensions → Eurobuch Search
Update credentials if you have your own:
Platform ID: Your Eurobuch platform identifier (default: test)
Password: Your API password (default: test)
Result Limit: Choose 10, 20, or 30 results (optional, default: 10)
📖 Usage
Quick Start
Open Raycast (⌘ + Space)
Type Search Books or eurobuch
Smart ISBN Detection:
Select ISBN (double-click) → Extension auto-fills
Copy ISBN → Extension auto-fills from clipboard
No ISBN? → Just type to search
Search Methods
ISBN: Select or copy ISBN, then open extension (auto-filled)
Manual ISBN: Enter numbers only (e.g., 9783161484100 or 1068525728X)
Title/Author: Enter any text (e.g., Harry Potter)
Keyboard Shortcuts
Browse results sorted by total price (price + shipping)
Use keyboard shortcuts:
⏎ - Open Eurobuch overview (with price trends & all offers)
⌘ + O - Open direct dealer offer
⌘ + C - Copy link
⌘ + I - Copy ISBN
⌘ + ⇧ + C - Copy all details
⌘ + K - Show actions menu
🎯 Search Tips
For fastest workflow: Double-click ISBN to select it, then open extension
ISBN-10 auto-converts: 1068525728X automatically converts to 9781068525728
For ISBN search: Enter numbers only (with or without dashes)
For title search: Use specific keywords for better results
For author search: Enter last name first for better matching
Mixed results: The API searches all fields simultaneously
Minimum length: Enter at least 2 characters to start searching
Limited API results?: Press Enter on any book to see all 35+ offers on Eurobuch website
🖥️ Screenshots
Search Results
Results are displayed with clear pricing information and sorted by best price.

Detail View
Press ⌘ + D to see detailed information including:

Complete bibliographic data
Breakdown of price and shipping
Dealer and platform information
Book condition (if available)
🛠️ Development
Prerequisites
Node.js 18+
npm or yarn
Raycast app installed
Setup Development Environment
bash
# Clone repository
git clone https://github.com/wdeu/eurobuch-search.git
cd eurobuch-search

# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Fix linting issues
npm run fix-lint
Project Structure
eurobuch-search/
├── src/
│   └── eurobuch-search.tsx    # Main extension code
├── assets/
│   ├── extension-icon.png      # Extension icon
│   └── extension-icon.PNG      # Icon variant
├── package.json                 # Extension manifest
├── tsconfig.json               # TypeScript config
├── README.md                   # This file
└── CHANGELOG.md                # Version history
Running Tests
bash
npm test
🐛 Troubleshooting
"Please configure your Eurobuch credentials"
Check that you've entered both Platform ID and Password in preferences
Verify credentials are correct by testing on Eurobuch's API directly
"Search failed: HTTP 401"
Your API credentials are invalid
Contact Eurobuch support to verify your account status
"Search failed: HTTP 403"
Your IP might be blocked or rate-limited
Wait a few minutes and try again
Contact Eurobuch if problem persists
"No Results Found"
Try different search terms
Check spelling of title/author
For ISBN, ensure numbers are correct
Some books might not be available in Eurobuch's network
Search is slow
First search might be slower (no cache)
Subsequent searches are cached for better performance
Check your internet connection
📝 API Limits
Rate limiting may apply based on your Eurobuch API plan
Results are limited to 10 or 20 books (configurable)
The extension implements caching to minimize API calls
🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

Fork the repository
Create your feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request
📄 License
MIT License - see LICENSE file for details

👤 Author
wdeu

GitHub: @wdeu
🙏 Acknowledgments
Eurobuch.de for providing the metasearch API
Raycast for the amazing extension platform
All contributors who help improve this extension
📮 Support
🐛 Report bugs via GitHub Issues
💡 Request features via GitHub Discussions
📧 Contact: booq@wdeu.de
Made with ❤️ by wdeu

